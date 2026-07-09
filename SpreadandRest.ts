// spread operator and rest operator in typescript

const friends = ['rayhan', 'shakil', 'sabbir', 'shuvo', 'shakib', 'shanto'];

const schoolFriends = ['sabbir', 'shuvo', 'shakib', 'shanto'];
const collegeFriends = ['rayhan', 'shakil'];
friends.push(...schoolFriends);
console.log(friends);


// if i use friends.push(schoolFriends) -> it will push the whole array as a single element in the friends array and shows error in typescript . but if i use spread operator -> friends.push(...schoolFriends) -> it will push each element of the schoolFriends array as a separate element in the friends array. but when i use javascript and i write friends.push(schoolFriends) => there is no error .because javascript dynamically spread all values in new array .but typescript cannot do that . in typescript we have to use spread operator to spread the values of an array into another array.


const User = {
 name : 'rayhan',
    age : 22,
    phone : "0193333333"

}
const otherInfo = {
    hobby : 'cricket ',
    address : 'mirpur',
  
}

const useInfo = {...User,...otherInfo};
console.log(useInfo);

// rest operator in typescript

const sendInvite = ( firned1 : string , friend2 : string , firend3 : string )=>{

    console.log(` send invite to ${firned1} , ${friend2} , ${firend3}`);

}

sendInvite('rayhan','sakil','hafiz');

const sendInvite2 = (...friends : string[]) =>{
   friends.forEach((friend:string) =>{
    console.log(`send invite to ${friend}`);
   })
}
sendInvite2('rathan','sakil','mofix','garol ');

// rest operator is used to collect all the remaining elements into an array. In the above example, we have used rest operator to collect all the friends into an array and then we have used forEach loop to iterate over the array and send invite to each friend.