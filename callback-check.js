const normalPerson = {
    firstName : 'Anad',
    lastName  : 'Kumar',
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName , this.lastName);
    },
    chargeBill : function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
normalPerson.chargeBill(150);
normalPerson.chargeBill(350);
console.log(normalPerson.salary);