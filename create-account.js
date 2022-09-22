function createAccount(pin, amount = 0) {
    return {
        checkBalance(input) {
            if (input === pin) {
                return `$${amount}`
            } else {
                return `Invalid PIN.`
            }
        },
        deposit(input, qty) {
            if (input === pin) {
                amount += qty
                return `Succesfully deposited $${qty}. Current balance: $${amount}.`
            } else {
                return `Invalid PIN.`
            }
        },
        withdraw(input, qty) {
            if (input === pin) {
                if (qty > amount) {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled."
                } else {
                    amount -= qty
                    return `Succesfully withdrew $${qty}. Current balance: $${amount}.`
                }
            } else {
                return `Invalid PIN.`
            }
        },
        changePin(input, newPin) {
            if (input === pin) {
                pin = newPin
                return "PIN successfully changed!"
            } else {
                return `Invalid PIN.`
            }
        }
    }
}

module.exports = { createAccount };
