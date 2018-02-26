'use strict';

describe('TransactionPrinter', function() {
  var transactionPrinter;
  var deposit;
  var withdrawal;

  beforeEach(function() {
    spyOn(console, 'log');
    transactionPrinter = new TransactionPrinter();
    deposit = {
      date: function() { return new Date("January 4, 2012") },
      amount: function() { return 100.00 },
      newBalance: function() { return 400.00 },
      isDeposit: function() { return true },
      isWithdrawal: function() { return false }
    };
    withdrawal = {
      date: function() { return new Date("January 4, 2012") },
      amount: function() { return -200.00 },
      newBalance: function() { return 300.00 },
      isDeposit: function() { return false },
      isWithdrawal: function() { return true }
    };
  });

  it('prints a deposit correctly', function() {
    transactionPrinter.print(deposit);
    expect(console.log).toHaveBeenCalledWith('04/01/2012 || 100.00 || || 400.00');
  });

  it('prints a withdrawal correctly', function() {
    transactionPrinter.print(withdrawal);
    expect(console.log).toHaveBeenCalledWith('04/01/2012 || || 200.00 || 300.00');
  });

});
