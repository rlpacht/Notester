import Ember from 'ember';

const NotesIndexRoute = Ember.Route.extend({
  model() {
    return this.store.findAll('note');
  }
});

export default NotesIndexRoute;