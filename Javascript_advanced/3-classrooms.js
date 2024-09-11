function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    };
  }
  let students;
  for (let i = 0; i <= numbersOfStudents; i++) {
    let seatFunction = studentSeat(i + 1);
    students.push(seatFunction);
  }
  return students;
}

let classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
