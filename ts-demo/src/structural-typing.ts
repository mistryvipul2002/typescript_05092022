// class Person {
//     firstName:string;
//     lastName:string;

//     constructor(firstName:string, lastname:string){
//         this.firstName = firstName;
//         this.lastName = lastname;
//     }
// }


type Person = {
    firstName: string;
    lastName: string;
}

type Student = Person & {studentId:number};

var bob:Person = {
    firstName: "Bob",
    lastName: "Smith"
}

console.log(bob.firstName);