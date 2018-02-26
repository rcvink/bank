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
2. `xdg-open bank.html` (Linux) or `open bank.html` (OSX)
3. Open the console in your browser (e.g. Chrome DevTools or Firefox Web Console)
4. See example usage below:

```
TO-DO.
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

## Approach

1. Wrote the user stories.
2. Wrote this readme.
3. Diagrammed the model:

```
TO-DO
```

4. Decided to use JavaScript (for practice) and Jasmine for testing.
5. Used the red-green-refactor TDD cycle to complete user stories one-by-one.
