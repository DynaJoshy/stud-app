const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const audio=document.getElementById("myaudio");
var answer=0;
function generate_eq()
{
        var num1=Math.floor(Math.random() * 13);
        var num2=Math.floor(Math.random() * 13);
        var samnum1=Math.floor(Math.random() * 13);
        var samnum2=Math.floor(Math.random() * 13);
        var allanswers=[];
        var switchans=[];   
        answer=num1+num2;
        document.getElementById("num1").innerHTML = num1;
        document.getElementById("num2").innerHTML = num2;
        option1.innerHTML=answer;
       option2.innerHTML =samnum1;
    option3.innerHTML=samnum2

}
option1.addEventListener("click",function()
{
    if(option1.innerHTML==answer)
    {
        generate_eq();
    }
    else
    {
        audio.play();
    }
});
option2.addEventListener("click",function()
{
    if(option2.innerHTML==answer)
    {
        generate_eq();
    }
    else
    {
        audio.play();
    }
});
option3.addEventListener("click",function()
{
    if(option3.innerHTML==answer)
    {
        generate_eq();
    }
    else
    {
        audio.play();
    }
});
generate_eq();