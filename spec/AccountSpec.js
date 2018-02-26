'use strict';

describe('Account', function() {
  var transactionPrinter;
  var accountPrinter;
  var account;

  beforeEach(function() {
    transactionPrinter = {}
    accountPrinter = {}
    account = new Account(transactionPrinter, accountPrinter);
  });

  describe('initially, has', function() {

    it('a balance of 0', function() {
      expect(account.balance()).toEqual(0);
    });

    it('an empty transaction list', function() {
      expect(account.transactions()).toEqual([]);
    });

    it('a transaction printer', function() {
      expect(account.transactionPrinter()).toEqual(transactionPrinter);
    });

    it('an account printer', function() {
      expect(account.accountPrinter()).toEqual(accountPrinter);
    });

  });

  describe('deposit()', function() {

    it('increases the balance', function() {
      account.deposit(10);
      expect(account.balance()).toEqual(10);
    });

    it('adds a transaction to transaction list', function() {
      account.deposit(10);
      expect(account.transactions().length).toEqual(1);
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

    it('adds a transaction to transaction list', function() {
      account.deposit(20);
      account.withdraw(5);
      expect(account.transactions().length).toEqual(2);
    });

    it('fails if insufficient funds', function() {
      expect(function() { account.withdraw(10) }).toThrowError("Insufficient funds.");
    });

  });

});
