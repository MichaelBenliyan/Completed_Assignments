#!/usr/bin/env node
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const terminal = rl.output;

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Would you like to play?\n', (answer) => {
      if (answer === 'yes') {
        terminal.write('Awesome!\n')
      }
      else terminal.write('Wiggity whack')
      resolve(answer)
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('What is your favorite programming language?\n1: Javascript\n2: Cobol\n3: Erlang\n', (answer) => {
      resolve(answer)
    })
  })
}

const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Really?\nProve it!\nWrite some javascript that evaluates to 42\n', (answer) => {
      if (answer.includes('+')) {
        let arr = answer.split(' + ')
        let sum = Number(arr[0]) + Number(arr[1])
        resolve(sum)
      } else {
        let arr = answer.split(' * ')
        let product = Number(arr[0]) * Number(arr[1])
        resolve(product)
      }
      
    })
  })
}

const question4 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Nice Job\nHow about another?\n Given an array arr = [1,2,3] how do you get the first element?\n', (answer) => {
      resolve(answer)
    })
  })
}

const main = async () => {
  let q1Answer, q2Answer, q3Answer, q4Answer
  q1Answer = await question1()
  if (q1Answer === 'yes') {
    q2Answer = await question2()
  }
  if (q2Answer === '1') {
    q3Answer = await question3()
  }
  if (q3Answer === 42) {
    q4Answer = await question4()
  }
  rl.close()
}
main()