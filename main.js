
let allText = [
 "Ova e prv text",
 "Ova e vtor text",
 "Ova e tret text"
];

let startBtn = document.querySelector('#startBtn');
let mainText = document.querySelector('#main-text');
let  comp1Area = document.querySelector('#comp1-area');
let  comp2Area = document.querySelector('#comp2-area');
let  comp3Area = document.querySelector('#comp3-area');
let  playerArea = document.querySelector('#player-area');


let c1Btn = document.querySelector('#c1Btn');
let c2Btn = document.querySelector('#c2Btn');
let c3Btn = document.querySelector('#c3Btn');
let playerBtn = document.querySelector('#playerBtn');


let position = 0;



startBtn.addEventListener('click',startTimer);

function startTimer() {

            let counter = 5;   
                this.innerHTML =counter;
            let loop = setInterval(()=>{
                counter--;
                this.innerHTML = counter;
                if(counter === 0) {
                    clearInterval(loop);
                   startGame();
                }
            }, 300)
             
}
    function startGame(){
      startBtn.style.display = 'none';
      mainText.innerHTML = getRandomText();
      mainText.style.display = 'block';
 

    playerArea.focus();
    playerTyping();
    comp1Typing();
    comp2Typing();
    comp3Typing();

  }

  function getRandomText(){
    mainText.innerHTML = allText[Math.floor(Math.random()* allText.length)]; // a zosto ne raboti kako vakva?
    // ista cel kje dobieme ako ja staveme ovaa funkcionalnost i vo edna varijabla, 
    let rand = Math.floor(Math.random()* allText.length);
     return allText[rand];
  }

  function playerTyping(){
    let textForTyping = mainText.innerHTML;
      playerArea.addEventListener('keyup', function(e){
       if(e.code ==="Enter"){
         if(this.value.trim() === textForTyping){
           // success
           position++;
           playerBtn.innerHTML = "Position "+ position;
           playerBtn.className = "btn btn-success form-control";
       

         }
         else {
           //wrong, 
          //  ako ne e tocno vnesen dadeniot text, ti napravi nesto drugo ovde vo player textarea.
          playerBtn.innerHTML =  "WRONG TYPING";
          playerBtn.className = "btn btn-danger form-control";
         }
       }
      });
      
  }

  function comp1Typing(){
      let counter = 0;
      let textForTyping =  mainText.innerHTML;
        
  
      let textForTypingArr = textForTyping.split("");

       let loop = setInterval(() => {
         
       if(textForTypingArr.length > 0){
     
      comp1Area.value += textForTypingArr.shift();      
       }
       else{
         clearInterval(loop);
         position++;
         c1Btn.innerHTML = "Postion " + position;
         c1Btn.className = "btn btn-success form-control";

       }
       }, 400);

    }

    function comp2Typing(){
      let counter = 0;
      let textForTyping =  mainText.innerHTML;
        
  
      let textForTypingArr = textForTyping.split("");

       let loop = setInterval(() => {
         
       if(textForTypingArr.length > 0){
     
      comp2Area.value += textForTypingArr.shift();
                 
       }
       else{
         clearInterval(loop);
         position++;
        c2Btn.innerHTML = "Position: " + position;
        c2Btn.className = "btn btn-success form-control";

       }
       }, 300);

    }


    function comp3Typing(){
      let counter = 0;
      let textForTyping =  mainText.innerHTML;
        
  
      let textForTypingArr = textForTyping.split("");

       let loop = setInterval(() => {
         
       if(textForTypingArr.length > 0){
     
      comp3Area.value += textForTypingArr.shift();
                 
       }
       else{
         clearInterval(loop);
         position++;
         c3Btn.innerHTML = "Position: " + position;
         c3Btn.className = "btn btn-success form-control";

       }
       }, 270);

    }


    