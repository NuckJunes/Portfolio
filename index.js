
function getGithubData() {
    fetch("https://api.github.com/users/NuckJunes", {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        document.querySelector("#github-image").src = data.avatar_url;
        document.querySelector("#github-bio").innerText = data.bio;
    }
    );

}



getGithubData();
