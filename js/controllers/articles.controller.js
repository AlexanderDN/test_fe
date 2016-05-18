angular.module('test').controller('articlesCtrl', ['articlesFact', function (articlesFact) {
    this.getData = function () {
        var promise = articlesFact.getData();

        promise.then(function (value) {
            this.allArticles = value.listOfArticles;
            this.articles = this.resizeArticles(value.listOfArticles);
            this.categories = value.listOfCategories;
        }.bind(this));
    };

    this.resizeArticles = function (_articles) {
        var articles = [];

        angular.forEach(_articles, function (value, key) {
            if(key < 5){
                articles.push(value);
            }
        });

        return articles;
    };

    this.selectCategory = function(_id){
        this.selectedCat = {
            id :_id
        };
    };

    this.showArticles = function(){
        if(this.articles.length < this.allArticles.length){
            angular.forEach(this.allArticles, function (value, key) {
                if(key > this.articles.length){
                    this.articles.push(value);
                }
            }.bind(this));
        }
    };

    this.getData();
}]);