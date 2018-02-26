'use strict';

describe('Transaction', function() {
  var transaction;
  var date = new Date("February 25, 2018 11:13:00")

  beforeEach(function() {
    transaction = new Transaction(10, date);
  });

  it('has an amount', function() {
    expect(transaction.amount()).toEqual(10);
  });

  it('has a date', function() {
    expect(transaction.date()).toEqual(date);
  });

  it('knows when it is a deposit', function() {
    expect(transaction.isDeposit()).toBe(true);
  });

  it('knows when it is a withdrawal', function() {
    transaction = new Transaction(-20, date);
    expect(transaction.isWithdrawal()).toBe(true);
  });

});
