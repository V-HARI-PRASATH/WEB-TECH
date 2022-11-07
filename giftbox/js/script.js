var x;
function gift()
{
    for(let i=0;i<x;i++)
    {
        var a=document.getElementById('out');
        var newe=document.createElement('div');
        newe.style="float:left;width:100px;height:100px;"
        newe.innerHTML='<img src="images/giftbox.jfif" style="width:100%;height:100%">';
        a.appendChild(newe);
    }
}