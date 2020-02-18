const account = function() {
  var output = {}
  var customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: '1'
  }

  function setAccountType () {
    if (customerAccount.checking === '1') {
      customerAccount.type = 'checking'
    } else {
      customerAccount.type = 'savings'
    }
  }

  var signupBonus = 250
  // var deposit = 1000

  var openAccount = function(account, deposit) {
    account.balance += signupBonus
    output['New balance after signup bonus is '] = account.balance
    account.balance += deposit
  }

  output['Account before opening'] = customerAccount
  console.log(output)

  openAccount(customerAccount, 1000)
  setAccountType()
  output['Account after opening'] = customerAccount
  console.log(output)
  // the output method seems to aggregate all of the outputs from this file - i.e., when I console.log(output) on line 27, it outputs the customerAccount before it's been changed (the balance is 0), then the openAccount() function and setAccountType() functions run, which both update customerAccount - when I console.log(output) on line 32, after these updates, it reprints the 'account before opening' (along with 'account after opening'), and now customerAccount has been updated, so it prints the updates
  return output
}

// account()

module.exports = account



