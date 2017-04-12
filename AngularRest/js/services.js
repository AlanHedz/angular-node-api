angular.module('FinalApp')
  .factory('ProductResource', function ($resource){
    return Product = $resource('http://localhost:3000/api/product/:id', {id: "@id"}, {'update': {method: 'PUT'}});
  })
