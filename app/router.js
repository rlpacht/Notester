import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('notes', {path: "/"}, function() {
    this.route('new');
    this.route('index', {path: "/"});
    this.route('edit', {path: "/:id"})
  });
});

export default Router;
