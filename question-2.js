'use strict';

function solution(N, users) {
  const answer = [];
  let rates = [];
  
  for (let i = 1; i <= N; i++) {
    const usersOnSameStage = users.filter(userStage => userStage == i);
    const usersHavePlayedTheStage = users.filter(userStage => userStage >= i);
    rates.push({
      stage: i,
      rate: usersOnSameStage.length / usersHavePlayedTheStage.length
    });
  }

  rates = rates.sort((a, b) => {
    if (a.rate > b.rate) {
      return -1;
    } else {
      return 1;
    }
  });

  rates.forEach(rate => answer.push(rate.stage));

  return answer;
}

const exampleStage1 = 5;
const exampleUsers1 = [2, 1, 2, 6, 2, 4, 3, 3];
const exampleAnswer1 = solution(exampleStage1, exampleUsers1);

const exampleStage2 = 4;
const exampleUsers2 = [4,4,4,4,4];
const exampleAnswer2 = solution(exampleStage2, exampleUsers2);

console.log({ exampleAnswer1, exampleAnswer2 });
