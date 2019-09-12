const leftArticle = document.querySelector("#left-article")
const rightArticle = document.querySelector("#right-article")

const text = document.querySelector("#message").addEventListener("keyup", (event) => {
    leftArticle.innerHTML = event.target.value
    rightArticle.innerHTML = event.target.value
})