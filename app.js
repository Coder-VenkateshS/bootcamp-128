
// var a  = 5;
// console.log(a);

// var b = 10;

// a > b ? console.log(a):console.log(b);

// for(var i = 1;i<=5;i++){
//     console.log(i);
// }


// let array = [1,2.9,'venkatesh'];
// for(i=0;i<array.length;i++){
//     console.log(array[i]);
// }
// array.forEach((item)=>console.log(item))

// function display(){

// }
// // ES6 
// display = ()=>{

// }

var score = [0,1,2,3,4,5,6];
var turn;
var team1 = {
    name:'CSK',
    runs:[],
    score: 0
};
var team2 = {
    name:'MI',
    runs:[],
    score: 0
};

window.onload = ()=>{
    selectTurn(); // Decide who is going to bat first
    updateButtonText(); // update the text inside the strike button
    updateScore();
    updateNames();
}

// function selectTurn(){

// }

selectTurn = ()=>{
    turn = Math.round(Math.random())+1;
    console.log(turn);
}

updateButtonText = ()=>{
    var button = document.getElementById('strike-button');
    console.log(button);
    var result = document.getElementById('result');
    console.log(result);
    result.style.visibility = "";
    button.textContent = `${turn === 1? team1.name:team2.name} Batting`;
    // check if game is over
    if(team1.runs.length == 6 && team2.runs.length == 6){
        button.remove();
        // check if the match is draw
        result.textContent = team1.score === team2.score? `It's a draw`:`${team1.score>team2.score? team1.name:team2.name} Wins`;
    }
    else{
        // check if the strike is over
        turn = team1.runs.length === 6? 2:team2.runs.length === 6 ? 1:turn;
    }

}

updateScore = ()=>{
    // update the team1 score
    document.getElementById('team-1-score').textContent = team1.score;
    // update the team2 score
    document.getElementById('team-2-score').textContent = team2.score;
    updateRuns();
}

updateNames = ()=>{
    //update team1 name
    document.getElementById("team-1-name").textContent = team1.name;
    //update team2 name
    document.getElementById("team-2-name").textContent = team2.name;
}


handleStrikeButtonClick = ()=>{
    console.log("Strike button");
    var runs = score[Math.floor(Math.random()*score.length)];
    console.log(runs);
    runs = runs===5?"W":runs; // To make 5 as a wicket
    console.log(runs);
    // check which team is on strike
    if(turn === 1)
    {
        team1.runs.push(runs);
        team1.score = calculateScore(team1.runs);
        console.log(team1.score);
    }
    else{
        team2.runs.push(runs);
        team2.score = calculateScore(team2.runs);
        console.log(team2.score);
    }
    updateButtonText();
    updateScore();
}

calculateScore = (runs)=>{
    console.log("method to calculate the score");
    return runs.map(run=>{return run =='W'?0:run;}).reduce((total,run)=>total+run,0);
    
}

var updateRuns =()=>{
    var teamOneRunsElement = document.getElementById('team-1-round-runs').children;
    var teamTwoRunsElement = document.getElementById('team-2-round-runs').children;
    team1.runs.forEach((run,index)=>{
        teamOneRunsElement[index].textContent = run;
    });
    team2.runs.forEach((run,index)=>{
        teamTwoRunsElement[index].textContent = run;
    });
}