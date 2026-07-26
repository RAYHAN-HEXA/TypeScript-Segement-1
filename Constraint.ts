// constraint = strict rules
// What is a Constraint in TypeScript?

// A constraint in TypeScript is a way to restrict what types a generic can accept.

const createarrayWithGenericTupple = <X,Y> (param1 :X ,param2 :Y )=>[
    param1,param2
];
const res = createarrayWithGenericTupple(333,{
    id : 1
});
const res3 = createarrayWithGenericTupple('khdiued',false);
type student = {
  id : number;
    name: string;
    dateofBirth : number;
    class : number
}

const addtoStudentCourses = <T extends student > (studentInfo : T)=>{
    return {
    course : 'Hexa Academy ',
    ...studentInfo,
    }
}

const student3 = {
    name : 'rayhan',
    id  : 2 ,
    haspen : true
}
const student4= {
    name : 'hwefu',
    id  : 333 ,
    hasCar : true,
    isMarried : true
}
// const random ={
//     hasBook : true
// }
const random ={
      id : 55,
    name: 'kuudus',
    dateofBirth : 8,
    class : 8
}

// const result5 =addtoStudentCourses (random);
//Argument of type '{ hasBook: boolean; }' is not assignable to parameter of type '{ id: number; name: string; }'.
//   Type '{ hasBook: boolean; }' is missing the following properties from type '{ id: number; name: string; }': id, namets(2345)
// const random: {
//     hasBook: boolean;
// }
const result5 =addtoStudentCourses (random);
console.log(result5) 