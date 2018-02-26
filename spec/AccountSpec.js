'use strict';

describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  describe('initially, has', function() {

    it('a balance of 0', function() {
      expect(account.balance()).toEqual(0);
    });

    it('an empty transaction list', function() {
      expect(account.transactions()).toEqual([]);
    });

  });

});
