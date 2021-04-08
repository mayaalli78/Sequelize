
async function getMeals()
{
    const request = await fetch("/api/wholeMeals");
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

window.onload = getMeals;