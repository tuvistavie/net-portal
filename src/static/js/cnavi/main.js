requirejs.config({

    baseUrl: "/static/js/cnavi"

  , paths: {
        require: '../lib/requirejs/require'
      , cs: '../lib/requirejs/cs'
      , handlebars: '../lib/handlebars/handlebars'
      , hbs: '../lib/hbs/hbs'
      , i18nprecompile: '../lib/hbs/i18nprecompile'
      , json2: '../lib/hbs/json2'
      , jquery: '../lib/jquery/jquery-1.9.0.min'
      , jqueryui: '../lib/jquery-ui/jqueryui'
      , underscore: '../lib/underscore/underscore-amd'
      , backboneAll: '../lib/backbone/backbone'
      , backbone: '../lib/backbone/backbone-amd'
      , relational: '../lib/backbone/backbone-relational'
      , domReady: '../lib/requirejs/domReady'
      , templates: '../../templates'
      , 'coffee-script': '../lib/coffeescript/coffee-script'
      , i18next: '../lib/i18next/i18next.amd-1.5.10'
      , helpers: '../helpers'
      , text: '../lib/requirejs/text'
      , flog: '../lib/flog/flog'
      , locales: '../../locales'
      , config: '../config'
      , globalModels: '../models'
      , globalCollections: '../collections'
      , common: '../common'
    }

  , hbs: {
        disableI18n: true
      , helperPathCallback: function(name) {
            return 'cs!helpers/' + name;
      }
  }
});

require([
    'cs!app'
  , 'domReady'
], function(App, domReady) {
    domReady(function() {
        App.initialize();
    });
});
