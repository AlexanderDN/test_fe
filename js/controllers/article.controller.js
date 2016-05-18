angular.module('test').controller('articleCtrl', ['articlesFact', 'articlesData', '$stateParams', function (articlesFact, articlesData, $stateParams) {
    this.articles = articlesData.data.listOfArticles;

    this.getArticleById = function (_id) {
        var article = [];

        angular.forEach(this.articles, function (value) {
            if(value.id == _id){
                article.push(value);
            }
        }.bind(this));

        return article[0];
    };

    this.article = this.getArticleById($stateParams.id);
}]);