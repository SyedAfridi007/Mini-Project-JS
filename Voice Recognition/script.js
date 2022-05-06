// Medium one
// var recognition = new webkitSpeechRecognition();
// recognition.onresult = function (event) {
//   var text = event.results[0][0].transcript;
//   //console.log(text);

//   document.querySelector("#question").innerHTML = text;
//   read(text);
// };
// //console.log(recognition);

// function read(text) {
//   var speech = new SpeechSynthesisUtterance();
//   speech.text = text;

//   if(text == 'hello'){
//       speech.text= "bye";
//   }else if(text == 'what is your name'){
//       speech.text = "bokachoda"
//   }else{
//       speech.text = "Sorry i dont have answer"
//   }

//   document.querySelector("#answer").innerHTML = text;
//   window.speechSynthesis.speak(speech);
// }




// Small one
// function read() {
//   var speech = new SpeechSynthesisUtterance();
//   console.log(speech);
//   speech.text= "Hey welcome to my portfolio. My name is Syed Aphridi and, am a frontend web developer"
//   window.speechSynthesis.speak(speech);
// }

// var btn = document.querySelector('#btn').addEventListener('click', read);





// Big one
// const btn = document.querySelector('.lastBtn');
// const content = document.querySelector('#answer');


// const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new speechRecognition();


// recognition.onstart = function(){
//     console.log('Voice is activated');
// }

// const greetings = ['i am good you little piece of love', 'doing good homeboy', 'fuck you bitch']
// const weather = ['weather is fine', 'weather is too hot', 'Dont go outside']


// recognition.onresult = function(event){
//     const current = event.resultIndex;

//     const transcript = event.results[current][0].transcript;
//     content.textContent = transcript;
//     readOut(transcript);
// }


// btn.addEventListener('click', ()=>{
//     recognition.start();
// })

// function readOut(message){
//     const speech = new SpeechSynthesisUtterance();

//     speech.text = 'i dont know what you say';

//     if(message.includes('how are you')){
//         const finalText = greetings[Math.floor(Math.random() * greetings.length)]
//         speech.text = finalText;
//     }

//     speech.volume = 1;
//     speech.rate = 1;

//     window.speechSynthesis.speak(speech);
// }













