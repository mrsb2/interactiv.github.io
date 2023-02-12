

document.getElementById('rateContainer').style.display="none";





function submit()
{
    let v = document.querySelector('input[name="btn"]:checked').value;
    if(v&&!null)
    {
        document.getElementById('submitContainer').style.display="none";
        document.getElementById('rateContainer').style.display="flex";
        document.getElementById('rateLvl').textContent="You selected " + v + " out of 5";
    }
   
}
