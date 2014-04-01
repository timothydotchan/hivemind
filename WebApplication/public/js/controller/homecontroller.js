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

    $scope.addPoll=function(polls, newPoll){
        polls.push(angular.copy(newPoll));

         var poll={
                    question:"",
                    choices:[]
                }
        $scope.newPoll= angular.copy(poll);
        $scope.isCreatePollExpanded=false;
    }

    $scope.polls=[
        {
            question:"Lorem ipsum dolor sit amet, consectetur?",
            dateTime:"summited 3 hour ago",
            author:"timothychan",
            numberOfComments:90,
            numberOfAnswers:6
        },
        {
            question:"Lorem ipsum dolor sit amet, consectetur?",
            dateTime:"summited 3 hour ago",
            author:"bobby",
            numberOfComments:90,
            numberOfAnswers:6
        },
        {
            question:"Lorem ipsum dolor sit amet, consectetur?",
            dateTime:"summited 3 hour ago",
            author:"timothychan",
            numberOfComments:90,
            numberOfAnswers:6
        },
        {
            question:"Lorem ipsum dolor sit amet, consectetur?",
            dateTime:"summited 3 hour ago",
            author:"timothychan",
            numberOfComments:90,
            numberOfAnswers:6
        }
    ];
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