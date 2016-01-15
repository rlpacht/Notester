import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('notes', function() {});
  this.route('newNote');
  this.route('editNote');
});

export default Router;
