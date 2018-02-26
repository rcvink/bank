'use strict';

(function(exports) {

  function Account(statementPrinter) {
    this._balance = 0;
    this._transactions = [];
    this._statementPrinter = statementPrinter;
  };

  Account.prototype.statementPrinter = function () {
    return this._statementPrinter;
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
    this._balance += amount;
    this._transactions.push(new Transaction(amount, this._balance))
  };

  Account.prototype.withdraw = function (amount) {
    if (this._insufficientFunds(amount)) {
      throw Error("Insufficient funds.");
    };
    this._balance -= amount;
    this._transactions.push(new Transaction(-amount, this._balance))
  };

  Account.prototype.summary = function () {
    this._statementPrinter.print(this._transactions.reverse());
  };

  Account.prototype._insufficientFunds = function (amount) {
    return amount > this._balance;
  };

  exports.Account = Account;

})(this);
