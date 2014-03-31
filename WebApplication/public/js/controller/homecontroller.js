var thinkRecursionApp= angular.module('thinkRecursionApp', []);

thinkRecursionApp.controller('HomeController', function ($scope, $http) {
    $scope.isCreatePollExpanded=false;

    $scope.newPoll={
        question:"",
        choices:[
            {
                name:""
            },
            {
                name:""
            }
        ]
    }
    $scope.addChoice=function(poll){
        var choice ={ name:""}
        poll.choices.push(choice);
    }
    $scope.addPoll=function(polls, newPoll){
        
        polls.push(newPoll);
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