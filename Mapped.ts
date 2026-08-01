//mapped types

// map 

const arrayofNumbers : number[]  = [1,2,3];

const arrayofString  : string[] = ['1','2','3']

const arrayofaStringUsingMap : string[] = arrayofNumbers.map((num)=> num.toString());
console.log(arrayofaStringUsingMap);


type AreaofNum = {
    height : number ;
    weight : number;

}
 type height = AreaofNum["height"]
// type AreaofString = {

//     height : string;
//     weight : string
// }

type Areaof<T> = {
    [key  in keyof T ]: T[key];
}

//key => height 
// key => string 
// T means = > height : string;width : string
// key of T = "height"|"weight"
//T['weight'] : number
//T['string']  : string 
//{height : string;width : number} ["height"] : string ; ['width'] : number 

const area1 : Areaof<{height : string;width : number}> = {
    height : "50",
    width : 40 
}