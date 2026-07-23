

                      // GenericWithIInterface.ts
interface Developer<T,X = null> {
    name : string;
    salary : number ;
    device : {
         model : string;
         brand : string;
         releasedYear : string;
      

    }
    smartWatch : T;
    Bike ? : X
}

 interface chinaWatch {
heartRate : string;
stopwatch : boolean;

 }

const poorDeveloper : Developer<chinaWatch,{
  brand : 'yamaha',
  engineCapacity : '200c'


} >={
    name : 'Mr.poor',
    salary : 20,
    device:{
        model : "lenevo",
        brand : ' acer',
        releasedYear : '2022'

    },
  smartWatch : {
    heartRate : '200',
    stopwatch :  true
  }

}

interface  AppleWatch {
  heartRate   : string;
Callsupport : boolean;
calculator  :  boolean;
 Aifeature : boolean
}
const richDeveloper : Developer<AppleWatch>={
    name : 'Mr.rich',
    salary : 20,
    device:{
        model : "hp",
        brand : ' x3005',
        releasedYear : '2013'

    },
    smartWatch : {
    heartRate : '200',
    calculator :  true,
    Callsupport :  true,
    Aifeature : true
  }
}