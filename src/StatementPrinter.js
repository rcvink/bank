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
    console.log("date || credit || debit || balance");
    transactions.forEach(function(transaction) {
      this._transactionPrinter.print(transaction);
    }.bind(this));
  };

  exports.StatementPrinter = StatementPrinter;

})(this);
