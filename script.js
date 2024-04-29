const cars = {
    audi: {
        logo: "audi_logo.png",
        models: ["A3", "A4", "A6"],
        prices: {
            black: 35000,
            white: 36000,
            red: 37000,
            blue: 38000
        }
    },
    bmw: {
        logo: "bmw_logo.png",
        models: ["3 Series", "5 Series", "7 Series"],
        prices: {
            black: 40000,
            white: 41000,
            red: 42000,
            blue: 43000
        }
    },
    toyota: {
        logo: "toyota_logo.png",
        models: ["Camry", "Corolla", "RAV4"],
        prices: {
            black: 25000,
            white: 25500,
            red: 26000,
            blue: 26500
        }
    },
    lada: {
        logo: "lada_logo.png",
        models: ["Vesta", "Granta", "Priora"],
        prices: {
            black: 15000,
            white: 15500,
            red: 16000,
            blue: 16500
        }
    }
};

const brandSelect = document.getElementById("brand");
const modelSelect = document.getElementById("model");
const colorSelect = document.getElementById("color");
const priceValue = document.getElementById("priceValue");
const carImage = document.getElementById("carImage");
const brandLogo = document.getElementById("brandLogo");

// Populăm selectul de modele în funcție de marcă
brandSelect.addEventListener("change", () => {
    const brand = brandSelect.value;
    const logoURL = `images/${cars[brand].logo}`;
    brandLogo.innerHTML = `<img src="${logoURL}" alt="${brand} Logo" class="brand-logo">`;
    modelSelect.innerHTML = "";
    cars[brand].models.forEach(model => {
        const option = document.createElement("option");
        option.text = model;
        modelSelect.add(option);
    });
});

// Afișăm imaginea mașinii în funcție de modelul selectat
modelSelect.addEventListener("change", () => {
    const brand = brandSelect.value;
    const model = modelSelect.value;
    const color = colorSelect.value;
    const imageURL = `images/${brand}_${model.toLowerCase()}_${color.toLowerCase()}.jpg`;

    console.log("Image URL:", imageURL); // Verificăm calea imaginii în consolă

    carImage.src = imageURL;
});

// Calculăm prețul în funcție de selecțiile utilizatorului
function calculatePrice() {
    const brand = brandSelect.value;
    const model = modelSelect.value;
    const color = colorSelect.value;
    const price = cars[brand].prices[color];
    priceValue.textContent = `$${price}`;
}

