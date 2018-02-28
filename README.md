# Bank Tech Test

## Purpose

This repository stores a possible solution to the [Bank Tech Test](https://github.com/makersacademy/course/blob/master/individual_challenges/bank_tech_test.md) problem. This was completed for practice.

## Specification

This specification was copied from the [Makers Academy course repository](https://github.com/makersacademy/course/blob/master/individual_challenges/bank_tech_test.md).

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Getting Started

1. `git clone` this repository.
2. To run tests, `xdg-open SpecRunner.html` (Linux) or `open SpecRunner.html` (OSX)
3. To run the app, `xdg-open bank.html` (Linux) or `open bank.html` (OSX)
4. Open the console in your browser (e.g. Chrome DevTools or Firefox Web Console)
5. See example usage below:

```
// Instantiate objects:
myTransactionPrinter = new TransactionPrinter();
myStatementPrinter = new StatementPrinter(myTransactionPrinter);
myAccount = new Account(myStatementPrinter);

// Make deposits and withdrawals using your account instance:
myAccount.deposit(100);
myAccount.withdraw(50);
myAccount.deposit(210);
myAccount.withdraw(10);

// Print your statement:
myAccount.summary();

date || credit || debit || balance
26/02/2018 || 100.00 || || 100.00
26/02/2018 || || 50.00 || 50.00
26/02/2018 || 210.00 || || 260.00
26/02/2018 || || 10.00 || 250.00
```

## User Stories

```
As a functioning member of society,
So I can manage my finances,
I want to have a bank account.

As an earner,
So I can store my money,
I want to deposit funds into my account.

As a spender,
So I can access my money,
I want to withdraw funds from my account.

As an account holder,
So I can see my transactions,
I want to print an account statement with a list of my transactions.

As a statement reader,
So I can really scrutinise my finances,
I want my statement to show dates, amounts and balance for each transaction.

```

## Process

1. Wrote the user stories.
2. Wrote this README.
3. Diagrammed the model:
<br>

![Process model](https://github.com/rcvink/bank/blob/master/Bank.png)

4. Decided to use JavaScript (for practice) and Jasmine for testing.
5. Used the red-green-refactor TDD cycle to satisfy user stories one-by-one.

## Tests

The list of tests below were created to drive the development of this app.

Tests can be run by opening `SpecRunner.html` on your machine.

```
Account
  initially, has
    a balance of 0
    an empty transaction list
    a statement printer
  deposit()
    increases the balance
    adds a transaction to transaction list
    fails if amount is negative
  withdraw()
    decreases the balance
    adds a transaction to transaction list
    fails if insufficient funds
Transaction
    has an amount
    has a date
    has an updated balance
    knows when it is a deposit
    knows when it is a withdrawal
TransactionPrinter
    prints a deposit correctly
    prints a withdrawal correctly
StatementPrinter
    has a transaction printer
    prints a statement of 0 transactions correctly
    prints statement headers correctly
    calls print method on its transaction printer once for one transaction
    calls print method on its transaction printer twice for two transactions
```

## Assumptions

The specification is brief so the following design decisions/assumptions were made:

* No debt is permitted. Withdrawals fail if the account balance is insufficient to make the transaction.
* The user is willing to instantiate three objects prior to using the app.
* The user would prefer to primarily interact with the app using one object, `Account`, as opposed to multiple objects.
* The `Account.withdraw()` and `Account.deposit()` methods update the balance directly. The balance is not calculated by iterating over the history of transactions and summing their amounts. While doing so would improve the `withdraw()` and `deposit()` methods' adherence to the single responsibility principle, it could also result in lengthy calculations for an account with an extensive history of transactions.

## Next Steps

Some possible improvements to this solution are listed below:
* The `Account` module has many responsibilities. Some of these could be extracted to a specific 'controller' module.
* Add a `TransactionFactory` module to remove the responsibilty of creating new `Transaction` objects from the `Account` module. This would also improve isolation in tests for the `Account` module.
* Improve the printing format of the statement, so that its headers are aligned better with its data. Although, it should be noted that the format of the acceptance criteria was matched in this solution.
* Remove the passing of balances to Transaction objects when they are created. This violates the single responsibility principle.   
* Improve test coverage of printer modules.
* Improve test isolation.
