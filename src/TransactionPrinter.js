'use strict';

(function(exports) {
  function TransactionPrinter() {

  };

  TransactionPrinter.prototype.print = function (transaction) {
    console.log(`${this._date(transaction)} || ${this._amount(transaction)} || ${this._balance(transaction)}`);
  };

  TransactionPrinter.prototype._date = function (transaction) {
    var day = String(transaction.date().getDate()).padStart(2, '0');
    var month = String(transaction.date().getMonth() + 1).padStart(2, '0');
    var year = transaction.date().getFullYear();
    return `${day}/${month}/${year}`
  };

  TransactionPrinter.prototype._amount = function (transaction) {
    if (transaction.isDeposit()) {
      return `${transaction.amount().toFixed(2)} ||`;
    } else if (transaction.isWithdrawal()) {
      return `|| ${(-transaction.amount()).toFixed(2)}`;
    };
  };

  TransactionPrinter.prototype._balance = function (transaction) {
    return `${transaction.newBalance().toFixed(2)}`
  };

  exports.TransactionPrinter = TransactionPrinter;

})(this);
