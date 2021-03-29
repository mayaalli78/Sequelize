/* async function populateRestaurants() 
{

}

async function getDining()
{
    const request = await fetch("/api/dining");
    const diningData = await request.json();
    return diningData;
}
*/
async function getDining()
{
    const request = await fetch("/api/dining");
    const diningData = await request.json();
    const dining = diningData.data; 
    const x = document.querySelector(".storedDiningData");
    dining.forEach(element => {
        const rows = document.createElement("tr");
        rows.innerHTML = `
        <td>${element.hall_id}</td>
        <td>${element.hall_name}</td>
        <td>${element.hall_address}</td>`;
        x.append(rows)
    });
}
/*
async function setBasicData() {
    localStorage.setItem('item', 'item_2');
}

async function getBasicData() {
    return localStorage.getItem('item');
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
*/
window.onload = getDining; 