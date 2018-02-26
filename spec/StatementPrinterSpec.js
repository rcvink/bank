'use strict';

describe('StatementPrinter', function() {
  var transactionPrinter;
  var statementPrinter;

  beforeEach(function() {
    spyOn(console, 'log');
    transactionPrinter = {
      print: function() { }
    };
    spyOn(transactionPrinter, 'print');
    statementPrinter = new StatementPrinter(transactionPrinter);
  });

  it('has a transaction printer', function() {
    expect(statementPrinter.transactionPrinter()).toEqual(transactionPrinter);
  });

  it('prints a statement of 0 transactions correctly', function() {
    statementPrinter.print([]);
    expect(console.log).toHaveBeenCalledWith('No transactions on this account!');
  });

  it('prints statement headers correctly', function() {
    statementPrinter.print([0]);
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance');
  });

  it('calls print method on its transaction printer once for one transaction', function() {
    statementPrinter.print([0]);
    expect(transactionPrinter.print).toHaveBeenCalledTimes(1);
  });

  it('calls print method on its transaction printer twice for two transactions', function() {
    statementPrinter.print([0, 0]);
    expect(transactionPrinter.print).toHaveBeenCalledTimes(2);
  });

});
