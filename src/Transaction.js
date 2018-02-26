'use strict';

(function(exports) {

  function Transaction(amount, date = Date.now()) {
    this._amount = amount;
    this._date = date;
  };

  Transaction.prototype.amount = function () {
    return this._amount;
  };

  Transaction.prototype.date = function () {
    return this._date;
  };

  exports.Transaction = Transaction;

})(this);
