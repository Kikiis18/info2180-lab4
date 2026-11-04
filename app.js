document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("search-form");
    const searchField = document.getElementById("search-field");
    const result = document.getElementById("result");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const query = searchField.value.trim();

        fetch("superheroes.php?query=" + encodeURIComponent(query))
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Unable to fetch superhero information.");
                }
                return response.text();
            })
            .then(function (html) {
                result.innerHTML = html;
            })
            .catch(function (error) {
                result.textContent = error.message;
            });
    });
});
