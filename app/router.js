import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('notes', function() {
    this.route('new');
    this.route('index', {path: "/"});
    this.route('edit', {path: "edit/:id"})
  });
  // this.route('newNote');
  // this.route('editNote', {path: "editNote/:id"});
});

export default Router;
