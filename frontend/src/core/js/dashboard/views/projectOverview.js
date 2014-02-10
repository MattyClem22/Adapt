define(function(require){

  var Backbone = require('backbone');
  var Handlebars = require('handlebars');
  var BuilderView = require('coreJS/core/views/builderView');

  var ProjectOverview = BuilderView.extend({

    tagName: "div",

    className: "project-overview",

    events: {
      /*'blur #projectDetail input': 'inputBlur',
      'click #projectDetail button': 'buttonClick'*/
    },

    inputBlur: function (ev) {
      //@todo add the validation logic
    },

    buttonClick: function (ev) {
      //@todo add logic
    }
  },
  {
    template: 'projectOverview'
  });

  return ProjectOverview;

});