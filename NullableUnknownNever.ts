//NullableUnknownNever

// A nullable type is a data type that can store either a normal value or null, which means no value is available.
const getUser = (input :string | null) ={
 if(input){
    console.log(`from db : ${input}`);

 }
 else{
    console.log("from db  : all user ")
 }
}

getUser(null)
