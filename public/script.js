
/*
async function getMeals() {
 console.log('data request');
 const diningRequest = await fetch('/api/wholeMeal');
 const diningData = await diningRequest.json();
 return diningData;
}
async function windowActions() {
    console.log('loaded window');
    const meals = await getMeals();
    console.table(meals.data);
}

window.onload = getMeals;
*/

async function getMeals()
{
    const request = await fetch("/api/wholeMeal");
    const diningData = await request.json();
    const dining = diningData.data; 
    const x = document.querySelector(".storedMealData");
    dining.forEach(element => {
        const rows = document.createElement("tr");
        rows.innerHTML = `
        <td>${element.meal_id}</td>
        <td>${element.meal_name}</td>
        <td>${element.meal_category}</td>`;
        x.append(rows)
    });
}

window.onload = getMeals