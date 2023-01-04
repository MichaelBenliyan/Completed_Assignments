const express = require('express');
const app = express();
const path = require('path');
const messageController = require('./messages/messageController');
const authController = require('./utils/authController');
const success = require('./utils/success')

app.use(express.json());
app.use(express.static(path.join(__dirname, './../client')));

// place routes here
app.get('/messages', 
  messageController.getMessages, 
  (req, res) => res.status(200).json(res.locals.messages)
);
app.post('/messages', 
  authController,
  messageController.postMessage, 
  (req, res) => {
    res.status(200).send(success); 
  }
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  }; 
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
});

app.listen(3000);

module.exports = app;
