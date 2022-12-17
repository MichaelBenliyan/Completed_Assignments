document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  const head = new Head(board);
  let apple = new Apple(board);

  // Change Direction based on User Input
  
  body.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft' && head.currentDirection !== 'right') {
      console.log('pressed left');
      head.currentDirection = 'left';
    }
    if (e.code === 'ArrowRight' && head.currentDirection !== 'left') {
      console.log('pressed right');
      head.currentDirection = 'right';
    }
    if (e.code === 'ArrowDown' && head.currentDirection !== 'up'){
      console.log ('pressed down');
      head.currentDirection = 'down';
    }
    if (e.code === 'ArrowUp' && head.currentDirection !== 'down'){
      console.log ('pressed up');
      head.currentDirection = 'up';
    }
  });

  //Check if Micky was Eaten by the Snake 

 setInterval(checkIfEaten,250);
  function checkIfEaten() {
     let topdif = Number(head.node.style.top.slice(0,-2)) - Number(apple.node.style.top.slice(0,-2));
     let leftdif = Number(head.node.style.left.slice(0,-2)) - Number(apple.node.style.left.slice(0,-2));

     // if difference between Micky and Snake is less than 50px we declare Micky was Eaten
    if (topdif < 50 && leftdif < 50 && topdif > -50 && leftdif > -50) {
      // Remove Micky and create New Micky
      const element = document.getElementById("apple");
      element.remove();
      apple = new Apple(board);
      topdif = Number(head.node.style.top.slice(0,-2)) - Number(apple.node.style.top.slice(0,-2));
      leftdif = Number(head.node.style.left.slice(0,-2)) - Number(apple.node.style.left.slice(0,-2));
      //Check if Micky Spawned on Snake Head, if yes respawn Micky
      if (topdif < 50 && leftdif < 50 && topdif > -50 && leftdif > -50) {
        const element = document.getElementById("apple");
        element.remove();
        apple = new Apple(board);
      }

      //Add new Body Element to Snake
      addBody();
    const snake = head.bodyArr
      // Checking if Micky Spawned on Snake Body
    for (let i =0; i < snake.length;i++){
      let appleBodydiffTop = Number(apple.node.style.top.slice(0,-2)) - (Number(snake[i].node.style.top.slice(0,-2)));
      let appleBodydiffLeft = Number(apple.node.style.left.slice(0,-2)) - (Number(snake[i].node.style.left.slice(0,-2)));
      
      // If spawned on Snake Body, respawn Micky
      if (appleBodydiffTop < 50 && appleBodydiffLeft < 50 && appleBodydiffTop > -50 && appleBodydiffLeft > -50){
        const element = document.getElementById("apple");
        element.remove();
        apple = new Apple(board);
      }
    }
    } 

  }
  function addBody(){
    const snakeBody = new Body(board);
    head.bodyArr.push(snakeBody);
  }
});
