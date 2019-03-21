'use strict'

let account = {
    account_holder: 'Kopantsho Mathafa',
    deposits: 0,
    withdrawals: 0,
    account_number: '00000',
    pin_code: '1212',
    account_balance: 7000,

    withdraw: function(amount) {
        let pin_entry = '1212'
            // pin_entry = prompt('Enter you valid pin', '')

        if (pin_entry.valueOf() === this.pin_code.valueOf()) {
            this.withdrawals += amount
            this.account_balance -= amount
        } else {
            console.log('The pin is invalid')
        }
    },

    deposit: function(amount) {
        let account_number_entry = '00000'

        if (account_number_entry.valueOf() == this.account_number.valueOf()) {
            this.deposits += amount
            this.account_balance += amount
        } else {
            console.log('Wrong account number')
        }
    },

    summary: function() {
        console.log(`This account has a balance of R ${this.account_balance}. There have been deposits totalling R${this.deposits} and withdrawals totalling R${this.withdrawals}`)
    }

}

account.withdraw(500)
console.log(account.account_balance)

account.deposit(760)
console.log(account.account_balance)

account.deposit(760)
console.log(account.account_balance)

account.summary()