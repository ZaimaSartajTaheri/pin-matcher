//Variables
let pinNumber;
let count=0;
let remainingTime;

const generateBtn=document.querySelector(".generate-btn");
const buttons=document.querySelectorAll(".button");
const submitBtn=document.querySelector(".submit-btn");

//Event Functions
generateBtn.addEventListener("click",function(){
    count=0;
    //To generate four digit numbers only
    let fourDigitsRandom = Math.floor(1000 + Math.random() * 9000);

    document.querySelector("#four-digit").value=fourDigitsRandom; 
    document.querySelector("#pin-number").value="";
    document.querySelector("#matched").style.display="none";
    document.querySelector("#notMatched").style.display="none";
    document.querySelector(".action-left").style.display="none";
});

buttons.forEach(function(btn){
    btn.addEventListener("click",function(e){

        const classes=e.currentTarget.classList;
        pinNumber=document.querySelector("#pin-number").value;
        
        //Action when clicks number buttons/clear button/backspace button
        if(classes.contains("number")){   
            const value=e.currentTarget.innerText;
            pinNumber+=value;
            document.querySelector("#pin-number").value=pinNumber;

        }else if(classes.contains("clear")){
            document.querySelector("#pin-number").value="";

        }else if(classes.contains("backspace")){
            pinNumber=pinNumber.slice(0,-1);
            document.querySelector("#pin-number").value=pinNumber;
        }
    });
});

submitBtn.addEventListener("click",function(e){
    
    const randomNum=document.querySelector("#four-digit").value;
    const pinNumber=document.querySelector("#pin-number").value;
    const matchedMessage=document.querySelector("#matched");
    const notMatchedMessage=document.querySelector("#notMatched");
    const actionLeft=document.querySelector(".action-left");
    
    //if generated pin and pin number matches if statements are executed or else statements are executed
    if(randomNum==pinNumber){
        count=0;
        matchedMessage.style.display="block"; //To show the message when pins matches
        notMatchedMessage.style.display="none";
        document.querySelector("#four-digit").value="";
        document.querySelector("#pin-number").value="";
        actionLeft.style.display="none";
        
        //the pin matched message will be shown for only 1s
        setTimeout(function () {
            matchedMessage.style.display="none";
          }, 1000);
    }else{
        matchedMessage.style.display="none";
        notMatchedMessage.style.display="block";//To show the message when pins doesn't match
        count++;
    }
    //Following if else conditions check how many tries are left. If someone submits wrong pin number 3 times the submit and generate buttons will be disabled for 5 seconds.After 5 seconds one can again generate pin and submit new pin number. 
    if(count>0){
        actionLeft.style.display="block";
    }

    if(count==1){     
        document.querySelector(".action-left").innerText="2 try left";
    }else if(count==2){
        document.querySelector(".action-left").innerText="1 try left";
    }else if(count==3){
        document.querySelector(".generate-btn").disabled=true;
        document.querySelector(".submit-btn").disabled=true;
        const nowTime=Math.floor(((new Date().getTime())/1000));
        let futureTime=nowTime+5;

        function getRemainingTime(){
            const presentTime=Math.floor((new Date().getTime())/1000);
            remainingTime=futureTime-presentTime;
            document.querySelector(".action-left").innerText=`try after ${remainingTime}seconds`;
            
            if(remainingTime<1){
                clearInterval(countdown);
                document.querySelector(".action-left").innerText="";
                document.querySelector("#notMatched").style.display="none";
                document.querySelector("#four-digit").value="";
                document.querySelector("#pin-number").value="";
                document.querySelector(".generate-btn").disabled=false;
                document.querySelector(".submit-btn").disabled=false;
                count=0;
            }
        }
        const countdown=setInterval(getRemainingTime,1000);
        getRemainingTime();
    }
});





          
 


