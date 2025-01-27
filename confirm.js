// JavaScript to read cookies and display values to confirm page

document.addEventListener("DOMContentLoaded", function () {
    const cookieDataDiv = document.getElementById("cookieData");
    const cookies = document.cookie.split("; "); // Split cookies into key-value pairs
    const cookieData = {};

    // cookies to an object
    cookies.forEach((cookie) => {
        const [key, value] = cookie.split("=");
        cookieData[decodeURIComponent(key)] = decodeURIComponent(value);
    });

    // Display cookies as name-value pairs
    for (const [key, value] of Object.entries(cookieData)) {
        const entry = document.createElement("p");
        entry.textContent = `${key}: ${value}`;
        cookieDataDiv.appendChild(entry);
    }
});
