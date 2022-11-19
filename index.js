const cole = ["Joao", "Paulo", "Silva", "Leite", "Bruna"]

cole.map((ele, pos) => {

    console.log(`A posição é ${pos} e valor é ${ele}`)

})
const btn = [...document.getElementsByClassName("DSMeta-btn-notificar")]
btn.map((ev) => {
    ev.addEventListener("click", () => {
        ev.classList.toggle("destaque")
    })
})