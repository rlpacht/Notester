import Ember from 'ember';

const NotesController = Ember.Controller.extend({
  notesSort: ['lastChanged:desc'],

  notes: Ember.computed.sort('model', 'notesSort')
});

export default NotesController;