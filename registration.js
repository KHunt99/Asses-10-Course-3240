// JavaScript for form submission and save data as cookies

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const submitButton = document.getElementById("submitButton");

    // Add event listener
    submitButton.addEventListener("click", function () {
        saveFormDataToCookies();
        window.location.href = "confirm.html"; // Redirect to confirmation page
    });

    /**
     * Save form data into cookies.
     */
    function saveFormDataToCookies() {
        const formData = new FormData(form); // Get form data as key-value pairs
        for (const [key, value] of formData.entries()) {
            document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; path=/`;
        }
    }
});
