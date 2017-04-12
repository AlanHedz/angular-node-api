angular.module('FinalApp', ['lumx', 'ngRoute', 'ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'MainController',
        templateUrl: 'templates/home.html'
      })
      .when('/product/:id', {
        controller: 'ProductController',
        templateUrl: 'templates/product.html'
      })
      .when('/product/edit/:id', {
        controller: 'ProductController',
        templateUrl: 'templates/product_form.html'
      })
      .when('/new', {
        controller: 'NewProductController',
        templateUrl: 'templates/product_form.html'
      })
})
