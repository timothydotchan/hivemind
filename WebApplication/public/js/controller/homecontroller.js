var thinkRecursionApp= angular.module('thinkRecursionApp', ['ui.select2']);


thinkRecursionApp.controller('HomeController', function ($scope, $http) {
    $scope.isCreatePollExpanded=false;

    $scope.select2Options = {
        'multiple': true,
        'simple_tags': true,
        'tags': ['true','false','yes','no'],
        'maximumInputLength':10
    };

    $scope.newPoll={
        question:"",
        choices:[]
    }
    $scope.getCurrentUser=function(){
        return "Timothyc";
    }

    $scope.createPost=function(newPoll){

        var post = {
                        poll:newPoll,
                        numberOfComments:0,
                        numberOfAnswers:0,
                        dateTime:"summited 1 hour ago",
                        author: $scope.getCurrentUser()
                    }

        $scope.posts.push(angular.copy(post));

         var poll={
                    question:"",
                    choices:[]
                }
        $scope.newPoll= angular.copy(poll);
        $scope.isCreatePollExpanded=false;
    }

    $scope.posts=[
        {poll:{question:"Lorem ipsum dolor sit amet, consectetur?",
                choices:["yes","no"]
            },
            numberOfComments:90,
            numberOfAnswers:6,
            dateTime:"summited 3 hour ago",
            author:"timothychan"
        },
        {
            poll:{
                question:"Lorem ipsum dolor sit amet, consectetur?",
                choices:["yes","no"]
            },
            numberOfComments:90,
            numberOfAnswers:6,
            dateTime:"summited 3 hour ago",
            author:"timothychan"
        }
    ]

    $scope.expandCreatePoll=function(){
        $scope.isCreatePollExpanded=true;
    }
    $scope.hideCreatePoll=function(){
        $scope.isCreatePollExpanded=false;
    }


/*
    $scope.fetchData=function(){
            $http.get("/api/test").
                success(function(data, status, headers, config) {
                       angular.copy(data,$scope.testData);
                       alert($scope.testData[0].title)
            }).   
               error(function(data, status, headers, config) {
            }); 
    }
*/

    $scope.init=function(){

    }
    $scope.init();
});