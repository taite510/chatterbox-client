// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),

  _selected: null,


  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  update: function() {
    var temp = Messages.get();
    _.each(Messages.get(), function(message) {
      if (typeof message.roomname === 'string' && message.roomname !== '') {
        Rooms.add(message.roomname);
      }
    });
  },

  add: function(value) {
    Rooms._data.add(value);
    Rooms._selected = value;
  },

  get: function() {
    return Array.from(Rooms._data);
  }

};