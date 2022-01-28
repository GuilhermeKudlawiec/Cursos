var num = window.document.getElementById("txtn")
var tab = window.document.getElementById("seltab")

function calcular() {
    if (num.value.length == 0) {
        alert("Digite um número!")
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}