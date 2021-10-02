// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),


  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  update: function() {
    _.each(Messages.get(), function(message) {
      if (typeof roomname === 'string') {
        Rooms.add(message.roomname);
      }
    });
  },

  add: function(value) {
    Rooms._data.add(value);
  },

  get: function() {
    return Array.from(Rooms._data);
  }
};