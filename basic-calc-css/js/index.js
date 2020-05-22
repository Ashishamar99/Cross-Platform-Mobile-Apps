var ashish=document.getElementById("id1");
function ac(obj)
{
var pushed = obj.innerHTML;
    if(pushed=="=")
        {
            ashish.innerHTML=eval(ashish.innerHTML);
        }
    else if(pushed=="AC")
        {
            ashish.innerHTML="0";
        }
    else
    {
        if(ashish.innerHTML=="0")
            {
                ashish.innerHTML=pushed;
            }
        else
            {
                ashish.innerHTML=ashish.innerHTML+pushed
            }
    }
}