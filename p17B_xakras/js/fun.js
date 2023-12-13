function cambiarColor(e)
{
if(e.type=="orbe_violeta")
   e.currentTarget.style.color = 'red';
else
   e.currentTarget.style.color = 'red';
}
let lnk = document.getElementById('orbe_violeta');
lnk.addEventListener('mouseover', cambiarColor);
lnk.addEventListener('mouseout', cambiarColor);