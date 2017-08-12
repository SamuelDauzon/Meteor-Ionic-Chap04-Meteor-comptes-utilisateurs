Accounts.ui.config({
  extraSignupFields: [
    {
      fieldName: 'prenom',
      fieldLabel: 'Prénom',
      inputType: 'text',
      visible: true,
      validate: function(value, errorFunction) {
        if (!value) {
          errorFunction("Le prénom doit être renseigné");
          return false;
        }
        else {
          return true;
        }
      }
    }, {
      fieldName: 'sexe',
      showFieldLabel: false,
      fieldLabel: 'Sexe',
      inputType: 'radio',
      radioLayout: 'horizontal',
      data: [{
        label: 'Femme',
        value: 'f'
        }, {
        label: 'Homme',
        value: 'h',
        checked: 'checked'
      }]
    }, {
      fieldName: 'situation',
      fieldLabel: 'Situation',
      inputType: 'select',
      empty: 'Quelle est votre situation ?',
      data: [{
        label: 'Marié(e)',
        value: 'marie'
        }, {
        label: 'Célibataire',
        value: 'celibataire',
      }, {
        label: 'Concubin',
        value: 'concubin',
      }]
    }, {
      fieldName: 'publicite',
      fieldLabel: "J'accepte de recevoir des SPAM quotidiens",
      inputType: 'checkbox'
    }
  ]
});