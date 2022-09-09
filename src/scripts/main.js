// DOM Loaded
document.addEventListener('DOMContentLoaded', () => {

    // Coletando span
    const result = document.querySelector("#result")
    // Adicionando evento ao botão
    document.querySelector("#tbnAverage").addEventListener('click', handlleAvrage)
    
    function handlleAvrage () {
        // Coletando valores
        const fristNote = parseFloat(document.querySelector("#firstNote").value)
        const secondNote = parseFloat(document.querySelector("#secondNote").value)
        const thirdNote = parseFloat(document.querySelector("#thirdNote").value)

        const finalResult = ((fristNote + secondNote + thirdNote) / 3).toFixed(1)

        if (finalResult > 0){
            result.innerHTML = finalResult
        } else {
            result.innerHTML = "0"
        }
    }
})