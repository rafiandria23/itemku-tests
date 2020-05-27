'use strict';

function solution(record) {
  let answer = [];
  const commands = [];
  let currentUserIds = [];
  const currentUsers = [];

  for (const user of record) {
    const [ command, userId, username = '' ] = user.split(' ');
    commands.push({
      command,
      userId,
      username
    });
    currentUserIds.push(userId);
  }

  currentUserIds = currentUserIds.filter((userId, idx) => idx == currentUserIds.indexOf(userId));

  for (const userId of currentUserIds) {
    const currentUser = commands.find(command => command.userId == userId);
    const { username } = currentUser;
    currentUsers.push({ userId, username });
  }

  for (const commandObj of commands) {
    const { command, userId, username } = commandObj;
    switch (command.toLowerCase()) {
      case 'enter':
        answer = answer.map(answerObj => {
          if (answerObj.userId == userId) {
            answerObj.username = username;
          }
          return answerObj;
        });
        answer.push({ message: 'came in.', userId, username });
        break;
    
      case 'leave':
        answer.push({ message: 'has left.', userId, username });
        break;
        
      case 'change':
        answer = answer.map(answerObj => {
          if (answerObj.userId == userId) {
            answerObj.username = username;
          }
          return answerObj;
        });
        break;
    }
  }

  answer = answer.map(answerObj => `${answerObj.username} ${answerObj.message}`);

  return answer;
}

const exampleRecord = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];

const exampleAnswer = solution(exampleRecord);

console.log({ exampleAnswer });
