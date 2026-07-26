                       //keyOf Constraint 

// type operator 
type RichpeopleVehicle = {
    car : string;
    bike : string;
    cng : string
}

type Myvehicle = 'bike' | 'car' | 'cng';
type Myvehicle2 = keyof RichpeopleVehicle;

const  Myvehicle : Myvehicle2 = "bike";  
 
type User ={
    id  : number ;
    name : string;
    address : {
        city :  string
    }
   
}

const user : User = {
    id :22 ,
    name :"rayhan",
    address:{
    city : "khulna"
    }
}

//const myId = user.id

// const myid = user["id"];
// const myName = user['name'];
// const myAddress = user['address'];


// const getPropertyObject = (obj : User,key : keyof User)=>{
//     return obj[key];
// }
const getPropertyObject = <X> (obj : X,key : keyof X)=>{
    return obj[key];
}

const result = getPropertyObject(user,"name");
console.log(result)

const product = {
    brand : "Hp"
};

const result2 = getPropertyObject(product,"brand");
