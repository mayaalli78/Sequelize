async function getData()
{
    const request = await fetch("/api/dining");
    const diningData = await request.json();
    console.log(diningData);
}

async function windowActions()
{
    getData();
}

window.onload = windowActions;