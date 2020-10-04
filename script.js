var scores, roundScore, activePlayer;
scores=[0,0];
roundScore=0;
activePlayer=0;


// document.querySelector('#current-'+activePlayer).textContent=Math.floor(Math.random()*6)+1;
// let x=document.querySelector('#score-0').textContent=Math.floor(Math.random()*6)+1;
// console.log(x);

document.querySelector(".dice").style.display='none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('.btn-roll').addEventListener('click',function(){
    //random number
    let dice=Math.floor(Math.random()*6)+1;

    //show the result
    let diceDom=document.querySelector(".dice");
    diceDom.style.display='block';
    diceDom.src='dice-'+dice+'.png';

    if(dice!==1){
        roundScore+=dice;
        document.querySelector('#current-'+ activePlayer).textContent=roundScore;
    }else{
        activePlayer===0 ? activePlayer=1 : activePlayer=0;
        roundScore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    }
});