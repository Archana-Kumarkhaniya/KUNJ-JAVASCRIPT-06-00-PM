const students = [
  { id: 1, name: "Amit", marks: 75, city: "Surat", isPresent: true },
  { id: 2, name: "Riya", marks: 32, city: "Ahmedabad", isPresent: false },
  { id: 3, name: "Mehul", marks: 88, city: "Rajkot", isPresent: true },
  { id: 4, name: "Pooja", marks: 45, city: "Vadodara", isPresent: true },
  { id: 5, name: "Neha", marks: 29, city: "Surat", isPresent: false },
  { id: 6, name: "Jay", marks: 59, city: "Ahmedabad", isPresent: true },
];
//   🔧 Project Tasks Based on Methods
//   Method    Task
//   map()    Return an array of student names in uppercase.
//   filter()    Get a list of students who passed (marks > 35).
//   forEach()    Log attendance status of each student to the console.
//   indexOf()    Find if a specific city (e.g., "Surat") exists in the city list.
//   findIndex()    Find the index of the first student from "Ahmedabad".
//   includes()    Check if "Mehul" exists in the list of student names.
//   every()    Check if every student has marks greater than 25.
//   some()    Check if any student is absent.

console.log("--------------1.map-----------------");
let a = students.map(sname => sname.name.toUpperCase())
console.log(a);

console.log("-------------2.filter----------------");

let b = students.filter(student => student.marks > 35)
console.log(b);

console.log("--------------3.foreach----------------");

students.forEach(element => {
  console.log(element.isPresent);

});

console.log("--------------4.indexof-----------------");

let cities = students.map(student => student.city)
let index = cities.indexOf("Surat")
console.log(index);

console.log("---------------5.findindex---------------");

let find = students.findIndex(student => student.city === "Rajkot")
console.log(find);

console.log("---------------6.include-----------------");


let exist = students.map(student => student.name)
let mehul = exist.includes("Mehul")
console.log(mehul);

console.log("-----------------7.every-------------------");

let all = students.every(student => student.marks > 25)
console.log(all);

console.log("------------------8.some-------------------");

let abc = students.some(student => student.isPresent === false)
console.log(abc);


