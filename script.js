/* ------------------------------------------ */
let grades = [90, 94, 65, 80, 39, 55, 83, 92, 39, 93, 43, 70, 57, 99]; //المصفوفة

let all_grades_div = document.getElementById("all-grades");
let random_grade_div = document.getElementById("random-grade");
/* لا تقم بتعديل الأسطر المكتوبة بالأعلى */


/*  الجزء الأول والثاني من التمرين */


function addtodiv (name){
    document.getElementById("all-grades").innerHTML += name+"  ";
}

grades.forEach(addtodiv)

let randomindex= Math.floor(grades.length* Math.random());
let num = grades [randomindex];
document.getElementById("random-grade").innerHTML = num+" " 




/* الجزء الثالث من التمرين */

let course = {
  name: "UniCODE",
  track : "",
  studentsCount : 0,
  location : "Kuwait University"
}

//Change studentsCount,track property here
course.track= "web"
course.studentsCount= 40



//Console log here
console.log( `Hello my name is (${course.name}), i'm in (${course.track}) at (${course.location})`)


//Create student object here
let student = {
  name: "abdulrhman",
  location : "Kuwait University"
}
