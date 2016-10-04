angular.module('TodoDirective',[]).directive('todoTable', function() {
  return {
    restrict: 'EA',    // E -> element
    templateUrl: 'templates/directives/todo-table.html'
  };
});