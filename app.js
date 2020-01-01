var user_score = 0, comp_score = 0
var user_score_span = document.getElementById("user_score")
var comp_score_span = document.getElementById("comp_score")
var score_div =document.querySelector('.scoreboard')
var result_div =document.querySelector('.result > p')
var rock_div = document.getElementById("r")
var paper_div = document.getElementById("p")
var scissor_div = document.getElementById("s")

function get_comp_choice(){
    let choices =['r','p','s']
    let random_choice = Math.floor(Math.random()*3) 
    return choices[random_choice]

}
function letter_to_word(letter){
    if (letter =='r'){  return "rock" ;}
    else if (letter =='p'){    return "paper" ;}
    else {return 'scissors';}
}
function win(user_choice,comp_choice){
console.log('w');
user_score++
user_score_span.innerHTML = user_score
result_div.innerHTML= letter_to_word(user_choice) +' beats ' + letter_to_word(comp_choice)+".You Win!" 
document.getElementById(user_choice).classList.add('greenglow');
setTimeout(function(){document.getElementById(user_choice).classList.remove('greenglow')},500)
}
function lose(user_choice,comp_choice){
    console.log('l');
comp_score++
comp_score_span.innerHTML = comp_score
result_div.innerHTML= letter_to_word(user_choice) +' was beaten by ' + letter_to_word(comp_choice)+".You Lose!" 
document.getElementById(user_choice).classList.add('redglow');
setTimeout(function(){document.getElementById(user_choice).classList.remove('redglow')},500)
}
function draw(user_choice,comp_choice){
    console.log('d')
    result_div.innerHTML= letter_to_word(user_choice) +' equals ' + letter_to_word(comp_choice)+".Its A Draw!" 
    document.getElementById(user_choice).classList.add('grayglow');
    setTimeout(function(){document.getElementById(user_choice).classList.remove('grayglow')},500)
}
function game(user_choice){
    let comp_choice = get_comp_choice()
    if( user_choice==comp_choice){
        draw(user_choice,comp_choice)
    }
    else{
    switch(user_choice+comp_choice){
    case 'rs':
    case 'pr':
    case 'sp':
        win(user_choice,comp_choice);
        break;
    case 'sr':
    case 'rp':
    case 'ps':
    lose(user_choice,comp_choice);
    break;
    }}
}
function main(){
rock_div.addEventListener('click',function(){
    game('r');
})
paper_div.addEventListener('click',function(){
    game('p');
})
scissor_div.addEventListener('click',function(){
    game('s');

})
}
main();