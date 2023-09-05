const allstudent = [
    {
        name: "Mithun",
        marks: 95,
    },
    {
        name: "Prabir",
        marks: 75,
    },
    {
        name: "Alka",
        marks: 92,
    },
    {
        name: "Shivam",
        marks: 70,
    },
    {
        name: "Farman",
        marks: 99,
    },
];

function checkResults(name) {
    for (let student of allstudent){
    if (student.name === name) {
        return student.marks > 90
          ? console.log(`Congratulations ${student.name}! You have cleared the exam.`)
          : console.log(`Sorry ! You have not cleared the exam.`);
      }
    }
      console.log("Invalid User !!!");
}
checkResults("Mithun")
// out5put: Congratulations ${student.name}! You have cleared the exam.

checkResults("Prabir")
//output: Sorry ! You have not cleared the exam.

checkResults("Mithun s")
//output: Invalid User !!!