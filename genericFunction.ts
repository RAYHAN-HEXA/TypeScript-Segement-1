                               //genericFunction 

//genericFunction  = A generic function is a function that accepts different data types using a type parameter while maintaining type safety.

// const createArrayWithString = (value: string) =>
// [value];
// const createArrayWithNumber = (value : number) => 
// [value]

// const createArrayWithUserobj = (value :{
//     id : number,
//     name : string
// }) =>
// {
//     return [value];

// }


const createArrayWithGeneric = <T>(value : T) =>{ // recieve dynamic value<T>

    return [value];

    

}

const arrString = createArrayWithGeneric('rayhan');
const arrNumber = createArrayWithGeneric (3709237);
const arrObj = createArrayWithGeneric({
    id : 3939,
    name : 'rayhan'
})

// const arrString = createArrayWithString('rayhan');
// const arrNumber = createArrayWithNumber (3709237);
// const arrObj = createArrayWithUserobj({
//     id : 3939,
//     name : 'rayhan'
// })


// tuple

// simple tuple 

const craeteArrayWithTupple =(params1: string , params2 : string) =>[
    params1,
    params2
]

//genericWithTupplem

const createArrayWithGenericTupple = <X,Y> (param1 :X ,param2 :Y )=>[
    param1,param2
];
const res1 = createArrayWithGenericTupple(333,{
    id : 1
});
const res2 = createArrayWithGenericTupple('khdiued',false);

const addtoStudentCourse = <T> (studentInfo : T)=>{
    return {
    course : 'Hexa Academy ',
    ...studentInfo,
    }
}

const student1 = {
    name : 'rayhan',
    id  : 2 ,
    haspen : true
}
const student2 = {
    name : 'hwefu',
    id  : 333 ,
    hasCar : true,
    isMarried : true
}

const result = addtoStudentCourse(student2);
console.log(result)