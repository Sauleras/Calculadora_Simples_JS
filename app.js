var data = document.querySelectorAll('button')
var display = document.getElementById('dplay')
var holdNumber = document.getElementById('hnumber')
var op = ""
var n1 = "0"
var n2 = "0"
var temSoma = false

for (let i = 0; i < data.length; i++) { 
    data[i].addEventListener('click', function() { 
        let total = 0 
        let dados = data[i].childNodes[0].nodeValue

        if ( dados != "+" && dados != "-" && dados != "*" && dados != "/" && dados != "=" && dados != "Limpar" && dados != "<-") {

            if (temSoma) {
                op = ""
                n1 = "0"
                n2 = "0"
                temSoma = false
                holdNumber.innerHTML = ""
                display.innerHTML = "0"
            }

            if (op != "" && display.textContent == "0") {
                if (dados == ",") {
                    if (display.textContent.indexOf(",") == -1) {
                        n2 += dados
                        display.innerHTML += dados
                    } else { }
                } else {
                    n2 = dados
                    display.innerHTML = dados
                }
            } else if (op != "" && display.textContent != "0") {
                if (dados == ",") {
                    if (display.textContent.indexOf(",") == -1) {
                        n2 += dados
                        display.innerHTML += dados
                    } else { }
                } else {
                    n2 += dados
                    display.innerHTML += dados
                }
            }

            if (op == "" && display.textContent == "0") {
                if (dados == ",") {
                    if (display.textContent.indexOf(",") == -1) {
                        n1 += dados
                        display.innerHTML += dados
                    } else { }
                } else {
                    n1 = dados
                    display.innerHTML = dados
                }

            } else if (op == "" && display.textContent != "0") {
                if (dados == ",") {
                    if (display.textContent.indexOf(",") == -1) {
                        n1 += dados
                        display.innerHTML += dados
                    } else { }
                } else {
                    n1 += dados
                    display.innerHTML += dados 
                }
            }
            

        } else {
            switch (dados) {
                case "+":
                    op = "+"
                    temSoma = false
                    if (display.textContent == "0") {
                        num = holdNumber.textContent
                        novoNum = num.substring(0, num.length - 1)
                        holdNumber.innerHTML = novoNum + op
                    } else { 
                        holdNumber.innerHTML = display.textContent + op
                    }
                    display.innerHTML = "0"
                    break

                case "-":
                    op = "-"
                    temSoma = false
                    if (display.textContent == "0") {
                        num = holdNumber.textContent
                        novoNum = num.substring(0, num.length - 1)
                        holdNumber.innerHTML = novoNum + op
                    } else { 
                        holdNumber.innerHTML = display.textContent + op
                    }
                    display.innerHTML = "0"
                    break

                case "*":
                    op = "*"
                    temSoma = false
                    if (display.textContent == "0") {
                        num = holdNumber.textContent
                        novoNum = num.substring(0, num.length - 1)
                        holdNumber.innerHTML = novoNum + op
                    } else { 
                        holdNumber.innerHTML = display.textContent + op
                    }
                    display.innerHTML = "0"
                    break

                case "/":
                    op = "/"
                    temSoma = false
                    if (display.textContent == "0") {
                        num = holdNumber.textContent
                        novoNum = num.substring(0, num.length - 1)
                        holdNumber.innerHTML = novoNum + op
                    } else { 
                        holdNumber.innerHTML = display.textContent + op
                    }
                    display.innerHTML = "0"
                    break

                case "=":
                    n1 = parseFloat(n1.replace(',','.'))
                    n2 = parseFloat(n2.replace(',','.'))

                    if (op == "+") {
                        total = (n1 + n2).toFixed(2) + ""
                        holdNumber.innerHTML = n1 + " + " + n2 + " ="
                        n1 = total.replace('.',',')
                        temSoma = true
                        display.innerHTML = total.replace('.',',')
                        break
                    }

                    if (op == "-") {
                        total = (n1 - n2).toFixed(2) + ""
                        holdNumber.innerHTML = n1 + " - " + n2 + " ="
                        n1 = total.replace('.',',')
                        temSoma = true
                        display.innerHTML = total.replace('.',',')
                        break
                    }

                    if (op == "*") {
                        total = (n1 * n2).toFixed(2) + ""
                        holdNumber.innerHTML = n1 + " * " + n2 + " ="
                        n1 = total.replace('.',',')
                        temSoma = true
                        display.innerHTML = total.replace('.',',')
                        break
                    }

                    if (op == "/") {
                        total = (n1 / n2).toFixed(2) + ""
                        holdNumber.innerHTML = n1 + " / " + n2 + " ="
                        n1 = total.replace('.',',')
                        temSoma = true
                        display.innerHTML = total.replace('.',',')
                        break
                    }
            }
        }      
    })
}

function Limpar() {
    op = ""
    n1 = "0"
    n2 = "0"
    temSoma = false
    holdNumber.innerHTML = ""
    display.innerHTML = "0"
}

function Deletar() {
    num = display.textContent
    novoNum = num.substring(0, num.length - 1)
    display.innerHTML = novoNum

    if (novoNum.length == 0) {
        display.innerHTML = "0"
    }
}