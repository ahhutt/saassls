// script.js
function searchProperties() {
    const searchQuery = document.getElementById('searchBox').value.toLowerCase();
    const properties = document.querySelectorAll('.property');

    properties.forEach(property => {
        const city = property.getAttribute('data-city').toLowerCase();
        const price = property.getAttribute('data-price');

        if (city.includes(searchQuery) || price.includes(searchQuery)) {
            property.style.display = "block";
        } else {
            property.style.display = "none";
        }
    });
}