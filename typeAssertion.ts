// typeAssertion
// how to spilst works: 
// "1000 tk"
//     ↓ split(" ")
// ["1000", "tk"]
//     ↓ [value]
// value = "1000"
//     ↓ Number(value)
// 1000
//     ↓ × 0.1
// 100


let anything: any;

anything : "rayahn";

(anything as string)

const kgTOGMConverter = (input : string | number): string| number | undefined => {
    if(typeof input === "number"){ 
        return input*1000;
    }
    else if ( typeof input === "string"){

        const [value] = input.split(" ")
        return `converted output is ${Number(value)*1000}`
    }

}

const result1= kgTOGMConverter(2) as number;
console.log(result1)

const result2 = kgTOGMConverter('2 kg')
console.log(result2)

type custorError = {
    message : string;
};
try{
}
    catch(err){
      console.log( ( err as custorError).message)
    }
