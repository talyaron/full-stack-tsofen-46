const express = require('express')
const app = express()

app.use(express.static('test'))
var jokes = ["What’s the best thing about Switzerland?", "I don’t know, but the flag is a big plus.",
"Did you hear about the mathematician who’s afraid of negative numbers?","'He’ll stop at nothing to avoid them.",
"Why do we tell actors to “break a leg?” ","I asked him, “What’s the word on the street?",
"Why did the Oreo go to the dentist?","Because he lost his filling.",
"Why is it annoying to eat next to basketball players?","They dribble all the time.",
" When does a joke become a “dad” joke?","When the punchline is a parent.",
"Why did it get so hot in the baseball stadium after the game?","All of the fans left."
,"What is 10110"," it's a binnary number",
"Today I gave my dead batteries away. ","They were free of charge.",
"Why didn't the astronaut come home to his wife?", "He needed his space.",
"Three fish are in a tank", "One asks the others, How do you drive this thing?",
"How does your feline shop?", "By reading a catalogue."

];
  function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    
//RERST api
app.get('/jokes', function (req, res) {
   var count = getRandomInt((jokes.length)/2);
   let retJ=" ";
   retJ+=jokes[count*2]+"<br><br><br><br>"+jokes[count*2+1];
   retJ=  {joke:retJ};
  console.log({joke:retJ})
   res.send(retJ);
})



app.get('/admin', function (req, res) {
  res.send('admin panel')
})
const port = 3003;
app.listen(port, () => { console.log(`App listen on port ${port}`) })