/* Here we are defining a function with one argument that accepts a type of string and returns a type of string. Running this file using
tsc.<filename>.ts will compile the code into the equivalent js code and most importantly show any errors. Some examples of possible errors
could me that the compiler expected more arguements or a parameter or return was a different type than expected.
*/
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + " ";
}
var user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(user);
