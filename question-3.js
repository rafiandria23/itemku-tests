'use strict';

function solution(relation) {
  const answer = [];
  let candidates = [];
  const students = [];

  for (const relationArr of relation) {
    const [studentNumber, name, major, grade] = relationArr;
    students.push({
      studentNumber,
      name,
      major,
      grade
    });
  }

  for (let i = 0; i < Object.keys(students[0]).length; i++) {
    const keys = Object.keys(students[0]);
    candidates.push([keys[i]]);
  }

  for (let i = 0; i < Object.keys(students[0]).length; i++) {
    const keys = [];
    for (let j = 0; j <= i; j++) {
      keys.push(Object.keys(students[0])[j]);
    }
    candidates.push(keys);
  }

  for (const candidate of candidates) {
    const currAttrs = {};
    const compareAttrs = {};

    for (const attr of candidate) {
      currAttrs[attr] = students.map((student) => student[attr]);
      compareAttrs[attr] = students.map((student) => student[attr]);
    }

    let currAttrsArr = [];
    const compareAttrsArr = [];

    for (const attr in currAttrs) {
      for (let i = 0; i < currAttrs[attr].length; i++) {
        currAttrsArr[i] = `${currAttrsArr[i] || ''} ${currAttrs[attr][i]}`;
      }
    }

    currAttrsArr = currAttrsArr.filter((attrVal, idx) => idx == currAttrsArr.indexOf(attrVal));

    for (const attr in compareAttrs) {
      for (let i = 0; i < compareAttrs[attr].length; i++) {
        compareAttrsArr[i] = `${compareAttrsArr[i] || ''} ${compareAttrs[attr][i]}`;
      }
    }

    if (currAttrsArr.length == compareAttrsArr.length) {
      answer.push(true);
    }
  }

  return Math.floor(answer.length / 2);
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

console.log({ exampleAnswer });
