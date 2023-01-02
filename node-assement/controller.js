
const options = {
  lemon:  'yellow',
  lime: 'limegreen',
  tangerine: 'orange',
  grapefruit: 'lightcoral'
};

const controller = {
  getColor: function(req, res, next) {
    
    try {
      const selectedColor = req.body.fruit;
      if (!options[selectedColor]) throw new Error('ERROR: Selected Color not found');
      res.locals.newColor = JSON.stringify(options[selectedColor]);
      return next();
    }
    catch(err) {
      return next({
        log: 'getColor ' + err,
        message: {err: 'getColor: ERROR: Selected Color not found'}
      });
    }
  }
};

// Export the controller object
module.exports = controller;