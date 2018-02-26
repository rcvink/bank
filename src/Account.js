'use strict';

(function(exports) {

  function Account(transactionPrinter) {
    this._balance = 0;
    this._transactions = [];
    this._transactionPrinter = transactionPrinter;
  };

  Account.prototype.transactionPrinter = function () {
    return this._transactionPrinter;
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
    this._addTransaction(amount);
    this._balance += amount;
  };

  Account.prototype.withdraw = function (amount) {
    if (this._insufficientFunds(amount)) {
      throw Error("Insufficient funds.");
    };
    this._addTransaction(amount);
    this._balance -= amount;
  };

  Account.prototype._addTransaction = function (amount) {
    this._transactions.push(new Transaction(amount));
  };

  Account.prototype._insufficientFunds = function (amount) {
    return amount > this._balance;
  };

  exports.Account = Account;

})(this);
