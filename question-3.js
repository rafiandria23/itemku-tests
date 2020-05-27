'use strict';

function solution(relation) {
  const answer = [];
  const candidates = [];
  const students = [];
  const attributes = {
    studentNumber: null,
    name: null,
    major: null,
    grade: null
  };

  for (const relationArr of relation) {
    const [studentNumber, name, major, grade] = relationArr;
    students.push({
      studentNumber,
      name,
      major,
      grade
    });
  }

  attributes.studentNumber =
    students
      .map((student) => student.studentNumber)
      .filter((studentNumber, idx, arr) => idx == arr.indexOf(studentNumber)).length ==
    students.map((student) => student.studentNumber).length;

  attributes.name =
    students
      .map((student) => student.name)
      .filter((studentName, idx, arr) => idx == arr.indexOf(studentName)).length ==
    students.map((student) => student.name).length;

  attributes.major =
    students
      .map((student) => student.major)
      .filter((studentMajor, idx, arr) => idx == arr.indexOf(studentMajor)).length ==
    students.map((student) => student.major).length;

  console.log({ attributes });

  return answer;
}

const exampleRelation = [
  [100, 'ryan', 'music', 2],
  [200, 'apeach', 'math', 2],
  [300, 'tube', 'computer', 3],
  [400, 'con', 'computer', 4],
  [500, 'muzi', 'music', 3],
  [600, 'apeach', 'music', 2]
];
const exampleAnswer = solution(exampleRelation);

// console.log({ exampleAnswer });
