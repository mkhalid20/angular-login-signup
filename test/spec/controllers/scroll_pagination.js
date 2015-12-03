'use strict';

describe('Controller: ScrollPaginationCtrl', function () {

  // load the controller's module
  beforeEach(module('myTestAppApp'));

  var ScrollPaginationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScrollPaginationCtrl = $controller('ScrollPaginationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScrollPaginationCtrl.awesomeThings.length).toBe(3);
  });
});
