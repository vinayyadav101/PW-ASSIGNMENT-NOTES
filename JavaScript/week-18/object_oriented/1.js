class BankAccount{
    constructor(HolderName , Balance){
        this.HolderName = HolderName;
        this.Balance = Balance;
    }

    checkBalacnce(){
        console.log(`Account balance for ${this.HolderName}: ${this.Balance}`);
    }

    deposit(amount){
        if (amount > 0) {
            this.Balance = this.Balance + amount
        } else {
            console.log(`Invalid deposit amount. please enter a positive amount.`);
        }
    }

    withdraw(amount){
        if (amount > 0) {
            if (this.Balance > amount) {
                this.Balance = this.Balance - amount
            }else{
                console.log(`Insufficent funds for withdraw.`);
            }
        } else {
            console.log(`Invalid withdraw amount. please enter a positive amount.`);
        }
    }
}



const myAccount = new BankAccount("mithun s" , 1000);

myAccount.checkBalacnce();

myAccount.deposit(500);
myAccount.checkBalacnce()
myAccount.deposit(-50);

myAccount.withdraw(200);
myAccount.withdraw(1500);
myAccount.withdraw(-500);

myAccount.checkBalacnce();