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

  Account.prototype.deposit = function (amount) {
    if (amount < 0) {
      throw Error("Cannot deposit negative amount.");
    };
    this._transactions.push(amount);
    this._balance += amount;
  };

  Account.prototype.withdraw = function (amount) {
    if (this._insufficientFunds(amount)) {
      throw Error("Insufficient funds.");
    };
    this._transactions.push(-amount);
    this._balance -= amount;
  };

  Account.prototype._insufficientFunds = function (amount) {
    return amount > this._balance;
  };

  exports.Account = Account;

})(this);
