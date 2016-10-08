angular.module('TodoDirective',[]).directive('todoTable', function() {
  return {
    restrict: 'EA',    // A -> attribute
    templateUrl: 'templates/directives/todo-table.html'
  };
});