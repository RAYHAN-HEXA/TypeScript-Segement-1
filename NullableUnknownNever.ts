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

// unnkown 

const discountCalculator  = (input : unknown)= {
if(typeof input === "number"){
    const discountPrice =  input*0.1;
    console.log(discountPrice)
}else if( typeof input === "string"){
    const [discountedprice] = input.split(" ");// splite the   all string  and only recieve index 0 vallue 
    console.log(Number(discountedprice) * 0.1)


}
else{
    console.log(" Wrong Input ")
}
}

discountCalculator(100);
discountCalculator("100 tk");
discountCalculator(null);
