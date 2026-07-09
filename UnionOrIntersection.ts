

// union 
type UserRole = "admin" | "user";// literal type  //A literal type is a type that allows only one specific value or a fixed set of specific values.

const getdashboard = (role:UserRole) =>{
    if(role === "admin"){
        return "admin dashboard"
    }
    else if ( role === "user"){
        return "user dashboard"
    }
    else{
        return " guest dashboard"
    }


}

//intersection 
type Employee = {
    id : string;
    name : string;
    phoneNum : number 
}

type manager = {
    designation : string;
    teamsize : number
}

type employeeManager = Employee & manager;

const chowdhurysaheb  : employeeManager = {
    id : "123",
    name : "rayahn",
    phoneNum: 2222222,
    designation : 'gadha',
    teamsize : 7

}