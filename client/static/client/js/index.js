var App = angular.module('App', ['ui.router']);


App.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "/static/client/js/views/home.html"
    });
});