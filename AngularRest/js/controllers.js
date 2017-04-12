angular.module('FinalApp')
  .controller('MainController', function($scope, $resource, ProductResource){
    $scope.products = Product.query();
    $scope.removeProduct = function(product){
      ProductResource.delete({id: product._id}, function(data){
        console.log(data);
      });
      $scope.products = $scope.products.filter(function(element){
        return element._id != product._id;
      })
    }
    // query() -> GET / posts -> un Arreglo de posts
  })
  .controller('ProductController', function($scope, $resource, $routeParams, ProductResource){
    $scope.title = 'Editar Producto'
    $scope.product = ProductResource.get({id: $routeParams.id})
    $scope.saveProduct = function(){
      ProductResource.update({id: $scope.product._id}, $scope.product);
    }
  })
  .controller('NewProductController', function($scope, $resource, ProductResource){
    $scope.product = {};
    $scope.title = "Crear Producto";
    $scope.saveProduct = function(){
      ProductResource.save($scope.product)
      
    }
  })
