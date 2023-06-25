// const mongoose = require('mongoose');

// // connect to the local MongoDB server
// mongoose.connect('mongodb://127.0.0.1//chat-app', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('Failed to connect to MongoDB', err));

// // define the schema for a chat message
// const messageSchema = new mongoose.Schema({
//   author: { type: String, required: true },
//   content: { type: String, required: true },
//   timestamp: { type: Date, default: Date.now }
// });

// // create a model for the chat message schema
// const Message = mongoose.model('Message', messageSchema);

// // export the Message model for use in other modules
// module.exports = Message;
