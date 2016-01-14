import Ember from 'ember';

const NotesRoute = Ember.Route.extend({
  model() {
    return this.store.findAll('note')
  }
});

export default NotesRoute;