import Ember from 'ember';

const NotesNewRoute = Ember.Route.extend({
  model() {
    return this.store.createRecord("note", {
      title: '',
      text: '',
      lastChanged: new Date()
    });
  },

  actions: {
    backToAllNotes() {
      this.transitionTo("notes.index");
    }
  }
});

export default NotesNewRoute;