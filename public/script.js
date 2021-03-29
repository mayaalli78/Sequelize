
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

window.onload = getDining; 