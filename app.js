const computerchoicedisp=document.getElementById('computer-choice')
const userchoicedisp=document.getElementById('user-choice')
const resultdisplaydisp=document.getElementById('result')
const possiblechoices=document.querySelectorAll('button')
let userchoice
possiblechoices.forEach(possiblechoice=>possiblechoice.addEventListener('click',(e)=>{
    userchoice=e.target.id
    userchoicedisp.innerHTML=userchoice
    generatecomputerchoice()
    getresult()
}))
let computerchoice
function generatecomputerchoice(){
    const randomnumber=Math.floor(Math.random()*5)+1
    console.log(randomnumber)
    if(randomnumber==1){
        computerchoice='rock'
    }
    if(randomnumber==2){
        computerchoice='paper'
    }
    if(randomnumber==3){
        computerchoice='scissor'
    }
    computerchoicedisp.innerHTML=computerchoice
}
let result
function getresult(){
    if(computerchoice==userchoice){
        result='its a draw!'
    }
    if(computerchoice=='rock' && userchoice=='paper'){
        result='you win!'
    }
    if(computerchoice=='rock' && userchoice=='scissor'){
        result='you lose!'
    }
    if(computerchoice=='paper' && userchoice=='scissor'){
        result='you win!'
    }
    if(computerchoice=='paper' && userchoice=='rock'){
        result='you lose!'
    }
    if(computerchoice=='scissor' && userchoice=='rock'){
        result='you win!'
    }
    if(computerchoice=='scissor' && userchoice=='paper'){
        result='you lose!'
    }
    resultdisplaydisp.innerHTML=result
}





