document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const modal = document.getElementById("loginModal");
    const modalCloseBtn = document.querySelector(".close-modal");
    const loginBtn = document.querySelector(".login-btn");
    const searchForm = document.getElementById("searchForm");
    const searchResults = document.getElementById("searchResults");

    // Navbar scroll effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Open the modal
    loginBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Close the modal when close button is clicked
    modalCloseBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close the modal if the user clicks outside of the modal
    window.addEventListener("click", (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

    // Handle search form submission
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Show a loading message while fetching
        searchResults.innerHTML = "<p>Loading results...</p>";

        const formData = new FormData(searchForm);
        const searchParams = new URLSearchParams(formData);

        fetch(`/api/search?${searchParams.toString()}`)
            .then(response => response.json())
            .then(data => {
                searchResults.innerHTML = ""; // Clear previous results

                if (data.length) {
                    data.forEach(result => {
                        const resultItem = document.createElement("div");
                        resultItem.classList.add("result-item");
                        resultItem.innerHTML = `
                            <h3>${result.name}</h3>
                            <p>Gender: ${result.gender}</p>
                            <p>Travel Date: ${result.travelDate}</p>
                            <p>College Year: ${result.collegeYear}</p>
                            <p>Mode of Transport: ${result.transportMode}</p>
                        `;
                        searchResults.appendChild(resultItem);
                    });
                } else {
                    searchResults.innerHTML = "<p>No matching travel partners found.</p>";
                }
            })
            .catch(error => {
                console.error("Error fetching search results:", error);
                searchResults.innerHTML = "<p>Error fetching search results. Please try again later.</p>";
            });
    });
});
