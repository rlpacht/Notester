import Ember from 'ember';

const NoteDisplayComponent = Ember.Component.extend({
  note: null,

  actions: {
    saveNote() {
      const savedNote = this.get('note');
      savedNote.set('lastChanged', new Date());
      savedNote.save();
      this.sendAction("backToAllNotes");
    },

    deleteNote() {
      var note = this.get('note');
      if (note.get("isNew")) {
        note.deleteRecord();
      } else {
        note.destroyRecord();
      }
      this.sendAction("backToAllNotes");
    }
  }
});

export default NoteDisplayComponent;
