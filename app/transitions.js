export default function(){
  this.transition(
    this.fromRoute('notes.index'),
    this.toRoute(['notes.new', 'notes.edit']),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};