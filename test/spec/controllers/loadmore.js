'use strict';

describe('Controller: LoadmoreCtrl', function () {

  // load the controller's module
  beforeEach(module('myTestAppApp'));

  var LoadmoreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoadmoreCtrl = $controller('LoadmoreCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoadmoreCtrl.awesomeThings.length).toBe(3);
  });
});
