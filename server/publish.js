Meteor.publish('notes', function() {
  return NotesCollection.find({userId: this.userId});
});