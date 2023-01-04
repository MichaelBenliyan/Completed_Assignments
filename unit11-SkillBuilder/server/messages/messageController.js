const messages = require('./../../data/messages');
const fs = require('fs');
const error = require('../utils/error')

module.exports = {
  getMessages: (req, res, next) => {
    res.locals.messages = messages
    return next();
  },
  postMessage: (req, res, next) => {
    if (typeof(req.body.message) !== 'string' || typeof(req.body.created_by) !== 'string') {
      console.log(error)
      return next( {
        status: 400,
        log: 'messageController.postMessage',
        message: error
      })
    }
    else {
      console.log('MessageController.postmessage: reached inside the else')
      const newMessage = req.body
      console.log('newMessage', newMessage)
      messages.push(newMessage);
      console.log(messages.length)
      return next()
    }
  }
};
