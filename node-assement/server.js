const express = require('express');
const app = express();
const path = require('path');
const controller = require('./controller');
const PORT = 3000;


// parses JSON from incoming request
app.use(express.json());

// serve the colors.html page when /colors is visited
app.get('/colors', 
  (req, res) => res.sendFile(path.join(__dirname, './client/colors.html'))
);
app.get('/styles.css', 
  (req, res) => res.sendFile(path.join(__dirname, './client/styles.css'))
);
// handle post requests to /colors
app.post('/colors', 
  controller.getColor,
  (req, res) => {
    console.log(typeof(res.locals.newColor));
    console.log(res.locals.newColor);
    return res.status(200).send({color: JSON.parse(res.locals.newColor)});
  }
);
// DO NOT USE express.static

app.use('*', (req, res) => res.status(404).sendFile(path.join(__dirname, './client/404.html')));


// Global error handling middleware
// How can we trigger this to run?
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
