const normalPerson = {
    firstName : 'Anad',
    lastName  : 'Kumar',
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName , this.lastName);
    },
    chargeBill : function(amount){
        //console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
const heroPerson = {
    firstName : 'Hero',
    lastName  : 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firstName : 'Hero',
    lastName  : 'Alam',
    salary: 20000
}
//normalPerson.chargeBill();

    // const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
    // heroBillCharge(2000);
    // heroBillCharge(2000);
    // console.log(heroPerson.salary);

            //blind
    // const friendlyBillCharge = normalPerson.chargeBill.bind(friendlyPerson);
    // friendlyBillCharge(5000);
    // console.log(friendlyPerson.salary);
            //call
    // normalPerson.chargeBill.call(heroPerson,500);
    // console.log(heroPerson.salary);
            //apply-->parameter value should be an [ARRAY]
       normalPerson.chargeBill.apply(heroPerson,[500]);
       console.log(heroPerson.salary);