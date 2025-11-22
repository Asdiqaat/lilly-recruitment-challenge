// ---------- Render all medicines ----------
async function renderMedicines() {
    try {
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
            if (name === "Unknown") nameSpan.classList.add("empty-med-name");

            // Price span
            const priceSpan = document.createElement("span");
            priceSpan.classList.add("med-price");
            priceSpan.textContent = `Price: ${price}`;
            if (price === "N/A") priceSpan.classList.add("empty-med-price");

            medElement.appendChild(nameSpan);
            medElement.appendChild(priceSpan);

            // Missing info warning
            if (name === "Unknown" || price === "N/A") {
                const warning = document.createElement("div");
                warning.classList.add("missing-info-box");
                warning.textContent = "Missing information";
                medElement.appendChild(warning);
            }

            container.appendChild(medElement);
        });
    } catch (error) {
        console.error("Error fetching medicines:", error);
    }
}

// Call once when page loads
window.addEventListener("DOMContentLoaded", renderMedicines);


// ---------- Add Medicine ----------
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", async () => {
    const nameInput = document.getElementById("medicine-name").value.trim();
    const priceInput = document.getElementById("medicine-price").value.trim();

    if (!nameInput) {
        alert("Please enter medicine name");
        return;
    }

    if (!priceInput || isNaN(priceInput) || Number(priceInput) <= 0) {
        alert("Please enter a valid positive number for price");
        return;
    }

    const formData = new FormData();
    formData.append("name", nameInput);
    formData.append("price", priceInput);

    try {
        await fetch("http://localhost:8000/create", {
            method: "POST",
            body: formData
        });

        alert("Medicine added successfully!");
        document.getElementById("medicine-name").value = "";
        document.getElementById("medicine-price").value = "";
        renderMedicines(); // refresh list
    } catch (error) {
        console.error("Error adding medicine:", error);
    }
});


// ---------- Search Medicine ----------
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-name");

searchButton.addEventListener("click", async () => {
    const searchName = searchInput.value.trim();
    if (!searchName) {
        alert("Please enter a medicine name");
        return;
    }

    try {
        const response = await fetch(`http://localhost:8000/medicines/${encodeURIComponent(searchName)}`);
        const data = await response.json();

        const container = document.getElementById("medicine-container");
        container.innerHTML = ""; // clear previous

        if (data.error) {
            container.textContent = "Medicine not found!";
            return;
        }

        // Render the single medicine
        const medElement = document.createElement("div");
        medElement.classList.add("medicine-item");

        const nameSpan = document.createElement("span");
        nameSpan.classList.add("med-name");
        nameSpan.textContent = data.name || "Unknown";
        if (!data.name) nameSpan.classList.add("empty-med-name");

        const priceSpan = document.createElement("span");
        priceSpan.classList.add("med-price");
        priceSpan.textContent = `Price: ${data.price ?? "N/A"}`;
        if (!data.price) priceSpan.classList.add("empty-med-price");

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
