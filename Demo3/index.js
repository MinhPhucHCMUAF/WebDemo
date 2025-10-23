const display = document.getElementById("display")
function appendCalc(i){
 display.value += i
}
function resultCalculate(){
    display.value = eval(display.value)
}
function clearCalculate(){
    display.value = ''

}