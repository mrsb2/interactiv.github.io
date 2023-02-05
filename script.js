
function submit()
{
    let v = document.querySelector('input[name="btn"]:checked').value;
    console.log(v);
    if(v&&null)
    {

    }
    else
    {
        document.getElementById('submitContainer').style.display="none";
        document.getElementById('rateContainer').style.display="flex";
        document.getElementById('rateLvl').textContent="You selected " + v + " out of 5";
    }
    
    
}
