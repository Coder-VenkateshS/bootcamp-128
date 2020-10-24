
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
    button.textContent = `${turn === 1? team1.name:team2.name} Batting`;
}

updateScore = ()=>{
    // update the team1 score
    document.getElementById('team-1-score').textContent = team1.score;
    // update the team2 score
    document.getElementById('team-2-score').textContent = team2.score;
}

updateNames = ()=>{
    //update team1 name
    document.getElementById("team-1-name").textContent = team1.name;
    //update team2 name
    document.getElementById("team-2-name").textContent = team2.name;
}


handleStrikeButtonClick = ()=>{
    console.log("Strike button");
}