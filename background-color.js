const bgcolor = document.querySelector("#bgcolor")

document.querySelector("#btn").addEventListener("click", () => {
    document.body.style.backgroundColor = bgcolor.value
})