
var randomNumber1=Math.floor(Math.random()*6+1);
var randomNumber2=Math.floor(Math.random()*6+1);
console.log(randomNumber1);
console.log(randomNumber2);
var imgName1="images/dice"+randomNumber1+".png";
var imgName2="images/dice"+randomNumber2+".png";
console.log(imgName1);
console.log(imgName2);

document.querySelector(".img1").setAttribute("src",imgName1);
document.querySelector(".img2").setAttribute("src",imgName2);

document.querySelector('button').addEventListener('click',()=>{location.reload()})

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="🚩 Player 1 wins !!";

}
else if (randomNumber1<randomNumber2)

{
    document.querySelector("h1").textContent="Player 2 wins 🚩!!";
}
else
{
 
 document.querySelector("h1").textContent="draw !";
}
