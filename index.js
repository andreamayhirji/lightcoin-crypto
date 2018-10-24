class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}

//superclass
class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    this.account.balance += this.value;
  }
}

//subclass of Transaction
class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
}

//subclass of Transaction
class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('Andrea');

console.log('Balance:', myAccount.balance)

t1 = new Deposit(300.00, myAccount);
t1.commit();

t2 = new Withdrawal(50.00, myAccount);
t2.commit();

t3 = new Deposit(12.00, myAccount);
t3.commit();

console.log('Current balance:', myAccount.balance);

t4 = new Withdrawal(630.00, myAccount);
t4.commit();

console.log('New balance', myAccount.balance);