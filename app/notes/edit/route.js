import Ember from 'ember';

const NotesEditRoute = Ember.Route.extend({
  model(params) {
    return this.store.findRecord('note', params.id);
  },

  actions: {
    backToAllNotes() {
      this.transitionTo("notes.index");
    }
  }

});

export default NotesEditRoute;