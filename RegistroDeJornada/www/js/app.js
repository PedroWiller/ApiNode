// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.finalizarJornada', {
      url: '/finalizarJornada',
      views: {
        'menuContent': {
          templateUrl: 'templates/finalizarJornada.html'
        }
      }
  })

  .state('app.jornada', {
      url: '/jornada',
      views: {
        'menuContent': {
          templateUrl: 'templates/jornada.html'
        }
      }
  })

  .state('app.maps', {
      url: '/maps',
      views: {
        'menuContent': {
          templateUrl: 'templates/maps.html'
        }
      }
  })

  .state('app.dadosCaminhao', {
      url: '/dadosCaminhao',
      views: {
        'menuContent': {
          templateUrl: 'templates/dadosCaminhao.html'
        }
      }
  })

  .state('app.checklist', {
      url: '/checklist',
      views: {
        'menuContent': {
          templateUrl: 'templates/checklist.html'
        }
      }
  })

  .state('app.iniciarJornada', {
      url: '/iniciarJornada',
      views: {
        'menuContent': {
          templateUrl: 'templates/iniciarJornada.html'
        }
      }
  })

  .state('app.novaSenha', {
      url: '/novaSenha',
      views: {
        'menuContent': {
          templateUrl: 'templates/novaSenha.html'
        }
      }
  })

  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

