import DS from 'ember-data';

const NoteModel = DS.Model.extend({
  title: DS.attr("string"),
  text: DS.attr("string"),
  lastChanged: DS.attr("date")
});

export default NoteModel;
