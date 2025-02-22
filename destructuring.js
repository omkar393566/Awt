const numbers = [10, 20, 30,40,50];
const [a, , c] = numbers;
console.log(a,c); 
const [first,...rest] = numbers;
console.log(rest); 

const obj = {
    name : "xyz",
    age : 20,
    rollno : "33"
}

const{name : studentName, age,rollno : id = 1} = obj;
console.log(studentName);
console.log(age);
console.log(id);

