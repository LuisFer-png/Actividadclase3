let display = document.getElementById('display');
function appendValue(Value){
    display.value += Value;
}
function clearDisplay(){
    display.value
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch {
        display.value = 'error';
    }
}