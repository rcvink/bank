'use strict';

describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  describe('initially', function() {

    it('has a balance of 0', function() {
      expect(account.balance()).toEqual(0);
    });

  });

});
