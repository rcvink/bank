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

  describe('deposit()', function() {

    it('increases the balance', function() {
      account.deposit(10);
      expect(account.balance()).toEqual(10);
    });

    it('adds amount to transaction list', function() {
      account.deposit(10);
      expect(account.transactions()[0]).toEqual(10);
    });

    it('fails if amount is negative', function() {
      expect(function() { account.deposit(-10) }).toThrowError("Cannot deposit negative amount.");
    });

  });

  describe('withdraw()', function() {

    it('decreases the balance', function() {
      account.deposit(20);
      account.withdraw(5);
      expect(account.balance()).toEqual(15);
    });

    it('adds amount to transaction list', function() {
      account.deposit(20);
      account.withdraw(5);
      expect(account.transactions()[1]).toEqual(-5);
    });

    it('fails if insufficient funds', function() {
      expect(function() { account.withdraw(10) }).toThrowError("Insufficient funds.");
    });

  });

});
