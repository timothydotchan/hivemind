thinkRecursionApp.controller('HomeController', function ($scope, $http, $q, postRepository) {
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


    $scope.expandCreatePoll=function(){
        $scope.isCreatePollExpanded=true;
    }

    $scope.hideCreatePoll=function(){
        $scope.isCreatePollExpanded=false;
    }


    $scope.init=function(){

      postRepository.get().then(
            function(posts) {
                $scope.posts=angular.copy(posts);
            },function(error) { 
                alert('error occurred');
            }
        );
    }

    $scope.init();

});