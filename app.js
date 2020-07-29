let pinNumber;
let count=0;
const generateBtn=document.querySelector(".generate-btn");
const buttons=document.querySelectorAll(".button");
const submitBtn=document.querySelector(".submit-btn");

generateBtn.addEventListener("click",function(){
    
    count=0;
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
    
    if(randomNum==pinNumber){
        count=0;
        matchedMessage.style.display="block";
        notMatchedMessage.style.display="none";

        actionLeft.style.display="none";
    
        


    }
    else{
        
        
        matchedMessage.style.display="none";
        notMatchedMessage.style.display="block";
        count++;

    }
    
    if(count>0){
        
        actionLeft.style.display="block";
    }
    if(count==1)
    {     
        
        document.querySelector(".action-left").innerText="2 try left";
    }
    else if(count==2){
       
        document.querySelector(".action-left").innerText="1 try left";

    }
    else if(count==3){
        
        document.querySelector(".action-left").innerText="Sorry..try again by generating new pin :(";

        e.currentTarget.disabled=true;


    }
    
    e.currentTarget.disabled=false;
    
    
    
});




          
 


