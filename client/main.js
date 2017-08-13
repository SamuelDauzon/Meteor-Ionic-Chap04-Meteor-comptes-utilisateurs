import { Template } from 'meteor/templating';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

accountsUIBootstrap3.setLanguage('fr');

Template.mesNotes.helpers({
  'notes': function() {
  	Meteor.subscribe('notes');
    return NotesCollection.findOne();
  }
});

Template.mesNotes.events({
  'submit form[name=modifierNotes]': function(event) {
    event.preventDefault();
    var notes = event.target.notes.value;
    var _id = event.target._id.value;
    Meteor.call('notes.update', {
    	_id: _id,
    	notes: notes
    });
    event.stopPropagation();
  },
  'click button#creerNotes': function(event) {
    Meteor.call('notes.insert');
  }
});