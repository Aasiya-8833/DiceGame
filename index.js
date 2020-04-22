
document.querySelector(".hit-me-btn").addEventListener("click",function (){
  //for player1
  var randomNumber1=Math.floor( Math.random()*6)+1;  // 1-6
  var randomImage1="images/"+"dice"+randomNumber1+".png";  // images/dice1.png - images/dice1.png
  var imgset1=document.querySelectorAll("img")[0]; // select the image of player  1
  imgset1.setAttribute("src",randomImage1);

  // for player2
  var randomNumber2=Math.floor( Math.random()*6)+1;  // 1-6
  var randomImage2="images/"+"dice"+randomNumber2+".png";  // images/dice1.png - images/dice1.png
  var imgset2=document.querySelectorAll("img")[1]; // select the image of player  2
  imgset2.setAttribute("src",randomImage2);

  if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Match 🎭 Draw";
  }
  else{
    if(randomNumber1>randomNumber2){
      document.querySelector("h1").innerHTML="Player1 Win🎀";
    }
    else{
      document.querySelector("h1").innerHTML="🎁Plarey2 Win";
    }
  }
});
