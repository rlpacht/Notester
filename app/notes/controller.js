import Ember from 'ember';

const NotesController = Ember.Controller.extend({
  notes: Ember.computed.alias('model')
  // actions: {
  //   addNewNote() {

  //   }
  // }
});

export default NotesController;