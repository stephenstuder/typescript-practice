/* Here we are defining a function with one argument that accepts a type of string and returns a type of string. Running this file using 
tsc.<filename>.ts will compile the code into the equivalent js code and most importantly show any errors. Some examples of possible errors
could me that the compiler expected more arguements or a parameter or return was a different type than expected. 
*/

class Student {
    fullName: string;
    constructor (public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter (person: Person) {
    return `Hello, ${person.firstName} ${person.lastName} `;
}

let user = new Student ("Jane", "M.", "User");

document.body.textContent = greeter(user);



