'use strict';

describe('Controller: LoadmorepaginationCtrl', function () {

  // load the controller's module
  beforeEach(module('myTestAppApp'));

  var LoadmorepaginationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoadmorepaginationCtrl = $controller('LoadmorepaginationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoadmorepaginationCtrl.awesomeThings.length).toBe(3);
  });
});
