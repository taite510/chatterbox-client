// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  add: function(message, callback) {
    Messages.setDefault(message);
    Messages._data.unshift(message);
    console.log(Messages._data);
    callback(Messages._data);
  },

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  get: function() {
    return Messages._data;
  },

  update: function(data, callback) {
    Messages._data = data;
    _.each(Messages._data, Messages.setDefault);
    callback(Messages._data);
  },

  setDefault: function(message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || 'lobby';
  }

};