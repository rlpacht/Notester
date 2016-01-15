import Ember from 'ember';

const NotesController = Ember.Controller.extend({
  notes: Ember.computed.alias('model'),

  displayDate: Ember.computed(function() {
    const noteLastChanged = this.get("lastChanged");
    if (noteLastChanged !== undefined) {
      var dateArray = noteLastChanged.split(" ");
      return dateArray.slice(0,4);
    } else {
      return noteLastChanged;
    }


  })
  // actions: {
  //   addNewNote() {

  //   }
  // }
});

export default NotesController;