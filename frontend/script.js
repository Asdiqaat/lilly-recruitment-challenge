
// Function to fetch and render medicines
// Function to fetch and render medicines
async function renderMedicines() {
    const response = await fetch("http://localhost:8000/medicines");
    const data = await response.json();

    const container = document.getElementById("medicine-container");
    container.innerHTML = "";

    data.medicines.forEach(med => {
        const name = med.name || "Unknown";
        const price = med.price ?? "N/A";

        const medElement = document.createElement("div");
        medElement.classList.add("medicine-item");

        // Name span
        const nameSpan = document.createElement("span");
        nameSpan.classList.add("med-name");
        nameSpan.textContent = name;
        if(name === "Unknown") {
            nameSpan.classList.add("empty-med-name");  // mark empty name
        }

        // Price span
        const priceSpan = document.createElement("span");
        priceSpan.classList.add("med-price");
        priceSpan.textContent = `Price: ${price}`;
        if(price === "N/A") {
            priceSpan.classList.add("empty-med-price"); // mark empty price
        }

        medElement.appendChild(nameSpan);
        medElement.appendChild(priceSpan);

        // Warning box if any info is missing
        if(name === "Unknown" || price === "N/A") {
            const warning = document.createElement("div");
            warning.classList.add("missing-info-box");
            warning.textContent = "Missing information";
            medElement.appendChild(warning);
        }

        container.appendChild(medElement);
    });
}


// Call when "List all medicines" is clicked
document.getElementById("list-medicines").addEventListener("click", renderMedicines);

// Call once when page loads
window.addEventListener("DOMContentLoaded", renderMedicines);


const addMedicine = document.getElementById("add-medicine");
const addButton = document.getElementById("add-button");
const formContainer = document.getElementById("form-container");

addMedicine.addEventListener("click", () => {
    formContainer.hidden=false;
})

addButton.addEventListener("click", async() => {
    const nameInput = document.getElementById("medicine-name").value.trim();
    const priceInput = document.getElementById("medicine-price").value.trim();

    //Validation
    if(nameInput === "" ){
        alert("Please enter medicine name");
        return;
    }

    if(priceInput === "" || isNaN(priceInput) || Number(priceInput) <= 0){
        alert("Please enter a valid positive number for price");
        return;
    }

    const formData = new FormData();
    formData.append("name", nameInput);
    formData.append("price", priceInput)

    await fetch("http://localhost:8000/create", {
        method: "POST",
        body: formData
    });

    alert("medicine added");
    formContainer.hidden=true;
    document.getElementById("list-medicines").click();
});


const searchBtn = document.getElementById("search-medicine");
const searchContainer = document.getElementById("search-container");
const searchInput = document.getElementById("search-name");

searchBtn.addEventListener("click", () => {
    searchContainer.hidden = false;
    document.getElementById("medicine-container").hidden = true; // hide all medicines
});

document.getElementById("search-button").addEventListener("click", async () => {
    const searchName = searchInput.value.trim();
    if (searchName === "") {
        alert("Please enter a medicine name");
        return;
    }

    try {
        const response = await fetch(`http://localhost:8000/medicines/${encodeURIComponent(searchName)}`);
        const data = await response.json();

        const container = document.getElementById("medicine-container");
        container.innerHTML = "";
        container.hidden = false; // show the container

        if (data.error) {
            container.textContent = "Medicine not found!";
            return;
        }

        // Render the medicine
        const medElement = document.createElement("div");
        medElement.classList.add("medicine-item");

        const nameSpan = document.createElement("span");
        nameSpan.classList.add("med-name");
        nameSpan.textContent = data.name || "Unknown";
        if (data.name === undefined || data.name === "") {
            nameSpan.classList.add("empty-med-name");
        }

        const priceSpan = document.createElement("span");
        priceSpan.classList.add("med-price");
        priceSpan.textContent = `Price: ${data.price ?? "N/A"}`;
        if (data.price === undefined) {
            priceSpan.classList.add("empty-med-price");
        }

        medElement.appendChild(nameSpan);
        medElement.appendChild(priceSpan);

        if (!data.name || !data.price) {
            const warning = document.createElement("div");
            warning.classList.add("missing-info-box");
            warning.textContent = "Missing information";
            medElement.appendChild(warning);
        }

        container.appendChild(medElement);
    } catch (error) {
        console.error("Error searching medicine:", error);
    }
});
