let auto=false;
let id;
function autoplay(){
  if(!auto){
   id=setInterval(()=>{
    document.querySelector('.js-auto').innerHTML='Stop Play';
    const playermove=cmcreate();
    play(playermove);
  },1000)
  auto=true;
}else{
clearInterval(id)
auto=false;
document.querySelector('.js-auto').innerHTML='Auto Play';
}}








let score = JSON.parse(localStorage.getItem('score'));
    if (score===null){
      score = {
        wins:0,
        lose:0,
        tie:0
      };
    } 



function updatescore(){
    document.querySelector('.js-score').innerHTML= 
    `wins : ${score.wins}      loses : ${score.lose}      Tie : ${score.tie}`
}
updatescore();


function play(move){
  const cm=cmcreate();
  let res='';
  if (move=='rock'){
    if (cm=='rock'){
      res='Tie';
  }else if (cm=='paper'){
    res='You lose.';
  }else if (cm=='sissor'){
    res='You Won!';
  }
}else if (move=='paper'){
if (cm=='rock'){
      res='You Won!';
      
  }else if (cm=='paper'){
    res='Tie';
    
  }else if (cm=='sissor'){
    res='You lose.';
    
  }
} else if(move=='sissor'){
if (cm=='rock'){
      res='You lose.';
      
  }else if (cm=='paper'){
    res='You Won!';
    
  }else if (cm=='sissor'){
    res='Tie';
    
  }

}

if (res=='You Won!'){
  score.wins+=1;
}else if (res=='You lose.'){
  score.lose+=1;
}else if (res=='Tie'){
  score.tie+=1;
}
localStorage.setItem('score',JSON.stringify(score));

let c='';
if (cm=='rock'){
  compmove='✊';
}else if (cm=='paper'){
  compmove='🖐️';
}else{
  compmove='✌️';
}

let yourmove='';
if (move=='rock'){
  yourmove='✊';
}else if (move=='paper'){
  yourmove='🖐️';
}else{
  yourmove='✌️';
}
document.querySelector('.js-res').innerHTML=`${res}`;
document.querySelector('.js-move').innerHTML=`Computer move (${compmove})  -  your move  (${yourmove})` 
    updatescore();
}

    function cmcreate(){
      const rand1=Math.random();
  if (rand1>=0 && rand1<1/3){
    
    cm='rock';
  } else if (rand1>=1/3 && rand1<2/3){
    
    cm='paper';

  }
    else if (rand1>=2/3 && rand1<1){
    
    cm='sissor';

  }
  return cm;
    }