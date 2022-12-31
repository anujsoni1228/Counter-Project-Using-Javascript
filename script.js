var i=0;
const click=new Audio("clickAudio.wav");
document.querySelector("#res").addEventListener("click",()=>{
    click.play();
    i=0;
    document.querySelector("#count").innerHTML="0";
    document.querySelector("#count").style.color="black";

})
document.querySelector("#inc").addEventListener("click",()=>{
    click.play();
    i++;
    document.querySelector("#count").innerHTML=`${i}`;
    if(i>0)
    document.querySelector("#count").style.color="green";
    else if(i==0)
    document.querySelector("#count").style.color="black";
      
})
document.querySelector("#dec").addEventListener("click",()=>{
    click.play();
    i--;
    document.querySelector("#count").innerHTML=`${i}`;
    if(i<0)
    document.querySelector("#count").style.color="red";
    else if(i==0)
    document.querySelector("#count").style.color="black";
})

