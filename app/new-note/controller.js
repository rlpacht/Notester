import Ember from 'ember';

const NewNoteController = Ember.Controller.extend({
  noteText: Ember.computed(function() {
    var noteText = this.get("text") || "";
    return noteText;
  }),

  noteTitle: Ember.computed(function() {
    var noteTitle = this.get("title") || "";
    return noteTitle;
  }),

  // _dateHelper(dateInMilliseconds) {

  // },

  actions: {
    saveNote() {

      const newNote = this.store.createRecord("note", {
        title: this.get("noteTitle"),
        text: this.get("noteText"),
        lastChanged: new Date()
      });

      newNote.save();
      this.setProperties({
        noteText: "",
        noteTitle: ""
      });
    },

    discardNote() {
      this.setProperties({
        noteText: "",
        noteTitle: ""
      });
    }
  }

});

export default NewNoteController;