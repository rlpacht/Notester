import Ember from 'ember';

const NewNoteController = Ember.Controller.extend({
  noteText: "",

  noteTitle: "",

  actions: {
    saveNote() {
      const newNote = this.store.createRecord("note", {
        title: this.get("noteTitle"),
        text: this.get("noteText")
      });

    newNote.save()


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