'use strict';

describe('StatementPrinter', function() {
  var transactionPrinter;
  var statementPrinter;

  beforeEach(function() {
    spyOn(console, 'log');
    transactionPrinter = {
      print: function() { console.log('04/01/2012 || 100.00 || || ')}
    };
    statementPrinter = new StatementPrinter(transactionPrinter);
  });

  it('has a transaction printer', function() {
    expect(statementPrinter.transactionPrinter()).toEqual(transactionPrinter);
  });

  it('prints a statement of 0 transactions correctly', function() {
    statementPrinter.print(zeroTransactions);
    expect(console.log).toHaveBeenCalledWith('No transactions on this account!');
  });

  it('prints statement headers correctly', function() {
    statementPrinter.print(oneTransaction);
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance');
  });

});
