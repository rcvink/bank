'use strict';

(function(exports) {

  function Transaction(amount, date = new Date()) {
    this._amount = amount;
    this._date = date;
  };

  Transaction.prototype.amount = function () {
    return this._amount;
  };

  Transaction.prototype.date = function () {
    return this._date;
  };

  Transaction.prototype.isDeposit = function () {
    return this._amount >= 0;
  };

  Transaction.prototype.isWithdrawal = function () {
    return !this.isDeposit();
  };

  exports.Transaction = Transaction;

})(this);
