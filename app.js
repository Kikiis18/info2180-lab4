document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-btn");

    searchButton.addEventListener("click", function () {
        fetch("superheroes.php")
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Unable to fetch the superhero list.");
                }
                return response.text();
            })
            .then(function (superheroes) {
                alert(superheroes);
            })
            .catch(function (error) {
                alert(error.message);
            });
    });
});
