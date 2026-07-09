// fucntionm 
// arrow function normal functiom 

function add( a : number , b : number ) : number {

    return a+ b ;

}

const addArrow = ( a : number  , b : number  ) : number  => a+ b ;

addArrow( 33 , 4 );
add ( 4, 4 )

// when we use a function in  object , its called method in typesvcript 
const pooruSER = {
    name : "rayhan",
    balance : 2000,
    addBalance( amount : number ): number {
        return this.balance + amount ;

    }
}

pooruSER.addBalance(300000);

//array of function in typescript
const arr:  number [] = [ 1,2,3,4,5,6,7,8,9];
const sqraArray = arr.map((num : number) : number => num * num );
