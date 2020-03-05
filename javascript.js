let visor = window.document.getElementById('visor')
let his = window.document.getElementById('historico')
let valorP = '', valorS = '' , sinal,  res = 0, v1 = 0, v2 = 0
let historico = []

function adicionaUm(){
    if(valorP == ''){
        visor.innerHTML = '1'
    }else{
        visor.innerHTML += '1'
    }

   if(sinal != null){
        valorS += '1'
   }else{
        valorP += '1'
   }
}
function adicionaDois(){

    if(valorP == ''){
        visor.innerHTML = '2'
    }else{
        visor.innerHTML += '2'
    }
    if(sinal != null){
        valorS += '2'
    }else{
       valorP += '2'
       }
}
function adicionaTres(){

    if(valorP == ''){
        visor.innerHTML = '3'
    }else{
        visor.innerHTML += '3'
    }
    if(sinal != null){
        valorS += '3'
    }else{
       valorP += '3'
       }
}
function adicionaQuatro(){

    if(valorP == ''){
        visor.innerHTML = '4'
    }else{
        visor.innerHTML += '4'
    }
    if(sinal != null){
        valorS += '4'
    }else{
       valorP += '4'
       }
}
function adicionaCinco(){

    if(valorP == ''){
        visor.innerHTML = '5'
    }else{
        visor.innerHTML += '5'
    }
    if(sinal != null){
        valorS += '5'
    }else{
       valorP += '5'
       }
}
function adicionaSeis(){

    if(valorP == ''){
        visor.innerHTML = '6'
    }else{
        visor.innerHTML += '6'
    }
    if(sinal != null){
        valorS += '6'
    }else{
       valorP += '6'
       }
}
function adicionaSete(){
    if(valorP == ''){
        visor.innerHTML = '7'
    }else{
        visor.innerHTML += '7'
    }
    if(sinal != null){
        valorS += '7'
    }else{
       valorP += '7'
       }
}
function adicionaOito(){
    if(valorP == ''){
        visor.innerHTML = '8'
    }else{
        visor.innerHTML += '8'
    }
    if(sinal != null){
        valorS += '8'
    }else{
       valorP += '8'
       }
}
function adicionaNove(){
    if(valorP == ''){
        visor.innerHTML = '9'
    }else{
        visor.innerHTML += '9'
    }
    if(sinal != null){
        valorS += '9'
    }else{
       valorP += '9'
       }
}
function adicionaZero(){
    if(valorP == ''){
        visor.innerHTML = '0'
    }else{
        visor.innerHTML += '0'
    }
    if(sinal != null){
        valorS += '0'
    }else{
       valorP += '0'
       }
}

function somar(){
    if(valorS != '' ){
        v1 = Number(valorP)
        v2 = Number(valorS)
        conta()
        valorP = String(res)
        sinal = "+"
        visor.innerHTML = `${res}${sinal}`
        valorS = ''
        
    }else{
        visor.innerHTML += '+'
        sinal = "+"
    }
}
function diminuir(){
    if(valorS != '' ){
        v1 = Number(valorP)
        v2 = Number(valorS)
        conta()
        valorP = String(res)
        sinal = "-"
        visor.innerHTML = `${res}${sinal}`
        valorS = ''
        
    }else{
        visor.innerHTML += '-'
        sinal = "-"
    }
}
function multiplicar(){
    if(valorS != '' ){
        v1 = Number(valorP)
        v2 = Number(valorS)
        conta()
        valorP = String(res)
        sinal = "x"
        visor.innerHTML = `${res}${sinal}`
        valorS = ''
        
    }else{
        visor.innerHTML += 'x'
        sinal = "x"
    }
}
function dividir(){
    if(valorS != '' ){
        v1 = Number(valorP)
        v2 = Number(valorS)
        conta()
        valorP = String(res)
        sinal = "/"
        visor.innerHTML = `${res}${sinal}`
        valorS = ''
        
    }else{
        visor.innerHTML += '/'
        sinal = "/"
    }
}
function porcentagem(){
    if(valorS != '' ){
        v1 = Number(valorP)
        v2 = Number(valorS)
        conta()
        valorP = String(res)
        sinal = "%"
        visor.innerHTML = `${res}${sinal}`
        valorS = ''
        
    }else{
        visor.innerHTML += '%'
        sinal = "%"
    }
}
function finalizar(){
    res = 0
    v1 =0
    v2 = 0 
    valorP = ''
    valorS = ''
}
function finalizarC(){
    visor.innerHTML = ''
    res = 0
    v1 =0
    v2 = 0 
    valorP = ''
    valorS = ''
}
function finalizarCE(){
    visor.innerHTML = ''
    his.innerHTML = ''
    res = 0
    v1 =0
    v2 = 0 
    valorP = ''
    valorS = ''
    var cont = historico.length
    for(i=0; i<cont; i++){
        historico.pop()
    }
}

function conta(){
    switch(sinal){
        case '+':
            v1 = Number(valorP)
            v2 = Number(valorS)
           res = v1 + v2
           visor.innerHTML = res
           historico.push(`${v1} + ${v2}`)
           his.innerHTML = historico
        break
        case '-':
            v1 = Number(valorP)
            v2 = Number(valorS)
           res = v1 - v2
           visor.innerHTML = res
           historico.push(`${v1} - ${v2}`)
            break
        case 'x':
            v1 = Number(valorP)
            v2 = Number(valorS)
           res = v1 * v2
           visor.innerHTML = res
           historico.push(`${v1} x ${v2}`)
            break
        case '/':
            v1 = Number(valorP)
            v2 = Number(valorS)
            res = v1 / v2
            visor.innerHTML = res
            historico.push(`${v1} / ${v2}`)
            break
        case '%':
            v1 = Number(valorP)
            v2 = Number(valorS)
            res = (v1 * v2)/100
            visor.innerHTML = res
            historico.push(`${v1} % ${v2}`)
            break                
        default:
            alert('ERRO')
        break
    }
}
function resultado(){
    visor.innerHTML = ''
    conta()
    finalizar()
}

