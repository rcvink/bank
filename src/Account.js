'use strict';

(function(exports) {

  function Account() {
    this._balance = 0;
    this._transactions = [];
  };

  Account.prototype.balance = function () {
    return this._balance;
  };

  Account.prototype.transactions = function () {
    return this._transactions;
  };

  exports.Account = Account;

})(this);
