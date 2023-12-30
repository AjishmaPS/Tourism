const d=document.querySelector(".explore");
let txt="Explore India With LetsGo";
function texteffect(element,txt,i=0) 
{
    element.textContent += txt[i];

    if (i==txt.length-1)
    {
     return;   
    }
    setTimeout(() =>texteffect(element,txt,i+1) ,75);
}
texteffect(d,txt)