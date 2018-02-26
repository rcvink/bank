'use strict';

(function(exports) {

  function StatementPrinter(transactionPrinter) {
    this._transactionPrinter = transactionPrinter;
  };

  StatementPrinter.prototype.transactionPrinter = function () {
    return this._transactionPrinter;
  };

  StatementPrinter.prototype.print = function (transactions) {
    if (transactions.length == 0) {
      console.log("No transactions on this account!");
      return;
    };
    this._logHeaders();
    this._logTransactions(transactions);
  };

  StatementPrinter.prototype._logHeaders = function () {
    console.log("date || credit || debit || balance");
  };

  StatementPrinter.prototype._logTransactions = function (transactions) {
    transactions.forEach(function(transaction) {
      this._transactionPrinter.print(transaction);
    }.bind(this));
  };

  exports.StatementPrinter = StatementPrinter;

})(this);
