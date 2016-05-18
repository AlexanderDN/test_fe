angular.module('test', ['ui.router', 'infinite-scroll', 'ngAnimate'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('articles',{
        url : '/articles',
        templateUrl : 'templates/articles.html',
        controller : 'articlesCtrl',
        controllerAs : 'asC'
    });

    $stateProvider.state('article/:id',{
        url : '/article/:id',
        templateUrl : 'templates/article.html',
        controller : 'articleCtrl',
        controllerAs : 'aC',
        resolve: {
            articlesData: ['$stateParams' , '$http', function($stateParams, $http) {
                return  $http({
                    url: 'data/database.json',
                    method: "GET",
                });
            }]
        }
    });

    $urlRouterProvider.otherwise('/articles');
});