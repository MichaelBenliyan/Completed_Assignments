let prevIndex = 0;
let ticker;
let currentColor = 'white'
const username = "Snow & Mike"
function updateChat(data, idx) {  
  console.log(idx, data.length-1)
  if (ticker != undefined) clearInterval(ticker);
  
    for(let i = data.length-1 - prevIndex; i>=0; i--){
      const element = data[i];
      //creat a new div element class = oldmsg with required inner div elements
      const entry = document.createElement('div');
      entry.setAttribute('class','msgArchive');
        //div for layout
      const senderLayout = document.createElement('div');
      senderLayout.setAttribute('class', 'senderLayout')
      if (currentColor === 'white') {
        currentColor = 'rgb(239, 239, 239)'
      } else currentColor = 'white';
      entry.setAttribute('style', 'background-color:' + currentColor + ';')

          //div class senderName align left
      const senderName = document.createElement('div');
      senderName.setAttribute('class','senderName');
      senderName.setAttribute('float','left');
          //assing mesg to element.msg 'created_by'
      senderName.innerText = element['created_by'];
      senderLayout.appendChild(senderName);
      // *************************************************

          //div class senderTime align right
      const senderTime = document.createElement('div');
      senderTime.setAttribute('class','senderTime');
      senderTime.setAttribute('type','time');
      senderTime.setAttribute('float','right');
          //assign senderTime 'created_at'
      senderTime.innerText = element['created_at'];
      senderLayout.appendChild(senderTime);

      senderLayout.appendChild(senderTime);
      entry.appendChild(senderLayout);
      //************************************************/
          //div class senderMsg across container
      
      const senderMsg = document.createElement('div');
      senderMsg.setAttribute('class','senderMsg');
          //assign senderMsg 'message'
      senderMsg.innerText = element['message'];
      
      entry.appendChild(senderMsg);

      //chatHistoryContainer.appendChild(oldmsg)
      document.getElementById('chatHistoryContainer').appendChild(entry);
    };
    ticker = setInterval(function() {
      let mydata = fetch('https://curriculum-api.codesmith.io/messages').then(data => data.json());
      mydata.then(data => {
      let temp = updateChat(data, prevIndex);
      prevIndex = temp
      })
    }, 3000)
    return data.length
};
function send() {
  console.log('test')
  let messageText = document.getElementById('myMsg').value
  fetch('https://curriculum-api.codesmith.io/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8'
    },
    body: JSON.stringify({
      'message': messageText, 
      'created_by': username
    })
})
  document.getElementById('myMsg').value = ''
}
document.addEventListener('DOMContentLoaded', () => {
  let mydata = fetch('https://curriculum-api.codesmith.io/messages').then(data => data.json());
    mydata.then(data => {
    prevIndex = updateChat(data, prevIndex);
    // console.log(data[0]);
    // let currentColor = 'white'
    // for(let i= data.length-1; i>=prevIndex; i--){
    //   const element = data[i];
    //   //creat a new div element class = oldmsg with required inner div elements
    //   const entry = document.createElement('div');
    //   entry.setAttribute('class','msgArchive');
    //     //div for layout
    //   const senderLayout = document.createElement('div');
    //   senderLayout.setAttribute('class', 'senderLayout')
    //   if (currentColor === 'white') {
    //     currentColor = 'rgb(239, 239, 239)'
    //   } else currentColor = 'white';
    //   entry.setAttribute('style', 'background-color:' + currentColor + ';')

    //       //div class senderName align left
    //   const senderName = document.createElement('div');
    //   senderName.setAttribute('class','senderName');
    //   senderName.setAttribute('float','left');
    //       //assing mesg to element.msg 'created_by'
    //   senderName.innerText = element['created_by'];
    //   senderLayout.appendChild(senderName);
    //   // *************************************************

    //       //div class senderTime align right
    //   const senderTime = document.createElement('div');
    //   senderTime.setAttribute('class','senderTime');
    //   senderTime.setAttribute('type','time');
    //   senderTime.setAttribute('float','right');
    //       //assign senderTime 'created_at'
    //   senderTime.innerText = element['created_at'];
    //   senderLayout.appendChild(senderTime);

    //   senderLayout.appendChild(senderTime);
    //   entry.appendChild(senderLayout);
    //   //************************************************/
    //       //div class senderMsg across container
      
    //   const senderMsg = document.createElement('div');
    //   senderMsg.setAttribute('class','senderMsg');
    //       //assign senderMsg 'message'
    //   senderMsg.innerText = element['message'];
      
    //   entry.appendChild(senderMsg);

    //   //chatHistoryContainer.appendChild(oldmsg)
    //   document.getElementById('chatHistoryContainer').appendChild(entry);
    // };
    // prevIndex = data.length
  });
  // const chatContainer = document.getElementById('chatHistoryContainer');
  // chatContainer.scroll(0,-Infinity)

});
