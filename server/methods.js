Meteor.methods({
  'notes.insert': function () {
    if (this.userId) {
      notes = NotesCollection.find({userId:this.userId}).count();
      if (!notes) {
        document = {
          notes: Meteor.settings.private.texteParDefaut,
          userId: this.userId
        };
        return NotesCollection.insert(document);
      }
      return false;
    }
  },
  'notes.update': function (document) {
    if (this.userId) {
      return NotesCollection.update({
          _id: document._id,
          userId: this.userId
        },
        {$set: {
          notes: document.notes
        }}
      );
    }
  }
});