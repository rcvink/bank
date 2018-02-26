'use strict';

(function(exports) {

  function Account() {
    this._balance = 0;
  };

  Account.prototype.balance = function () {
    return this._balance;
  };

  exports.Account = Account;

})(this);
