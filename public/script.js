async function populateRestaurants() 
{

}

async function getDining()
{
    const request = await fetch("/api/dining");
    const diningData = await request.json();
    return diningData;
}

async function setBasicData() {
    localStorage.setItem('myCat', 'Tom');
}

async function getBasicData() {
    return localStorage.getItem('myCat');
}

function setComplexData(data) {
    localStorage.setItem('data', JSON.stringify(data));
}


async function windowActions()
{
    console.log('loaded window');
    const dining = await getDining();
    console.table(dining);

setComplexData(dining);
const storedDining = localStorage.getItem('data');
const storedDiningData = JSON.parse(storedDining);
console.log(storedDining);
console.log(storedDiningData);
}

window.onload = windowActions;