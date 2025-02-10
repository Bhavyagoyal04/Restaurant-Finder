let database = {};
fetch('restaurant_db.restaurant_info.json')
    .then(response => response.json())
    .then(data => {
        database = data;
    })
    .catch(error => {
        console.error('Error loading restaurant database:', error);
    });

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
    const availableRestaurants = document.getElementById('availableRestaurants');
    const restaurantName = document.getElementById("restaurantName");
    const menuSection = document.getElementById("menuSection");
    const menuItems = document.getElementById("menuItems");
    const restaurantTitle = document.getElementById("restaurantTitle");

    if (restaurantName && database[restaurantName]) {
        availableRestaurants.style.display = "none";
        menuSection.style.display = "block";
        const restaurantInfo = database[restaurantName];
        restaurantTitle.innerText = restaurantInfo.name;

        menuItems.innerHTML = `
            <div><strong>Name:</strong> ${restaurantInfo.name}</div>
            <div><strong>Address:</strong> ${restaurantInfo.address}</div>
            <div><strong>Average Cost:</strong> ${restaurantInfo['average cost']}</div>
            <div><strong>Phone Number:</strong> ${restaurantInfo['phone number']}</div>
            <div><strong>Open Timing:</strong> ${restaurantInfo['open timing']}</div>
            <div><strong>Rating:</strong> ${restaurantInfo.rating || 'Not Available'}</div>
            <div><strong>Images:</strong></div>
            <div>
                ${restaurantInfo.images.map(image => `<img src="${image}" alt="Restaurant Image" style="width: 100px; margin: 5px;">`).join('')}
            </div>
        `;
    } else {
        menuSection.style.display = "none";
        alert("Restaurant not found. Please try again.");
    }
});
