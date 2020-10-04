var scores, roundScore, activePlayer,gameplaying;
gameplaying=true;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameplaying){
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
        nextPlayer();    
    }
    }
    
});

document.querySelector('.btn-hold').addEventListener('click' ,function(){
    //add curent score to global score
    

    if(gameplaying){
        scores[activePlayer]+=roundScore;


    //update UI
        document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];
        if(scores[activePlayer]>=20){
            document.querySelector('#name-'+activePlayer).textContent='Winner';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gameplaying=false;
    
        }else{nextPlayer();}

    }


    //check if player won the game
    
    
});

document.querySelector('.btn-new').addEventListener('click',init);
function nextPlayer(){
        activePlayer===0 ? activePlayer=1 : activePlayer=0;//if(activeplayer===0){activeplayer=1}else{activeplayer=0}
        roundScore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        document.querySelector('.player-0-panel').classList.toggle('active' );
        document.querySelector('.player-1-panel').classList.toggle('active');
}

function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;


    document.querySelector(".dice").style.display='none';

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    gameplaying=true;

}