const tel = document.getElementById('data');

tel.addEventListener('input', function() {
let start = this.selectionStart;
let end = this.selectionEnd;
const current = this.value
const corrected = current.replace(/([^+0-9\-\x\=\÷]+)/gi, '');
this.value = corrected;
if (corrected.length < current.length) --end;
this.setSelectionRange(start, end);
});
//To make Sure the user doesn't enter any other character through keyboard input

function typeHelper(val) {
    screenControl = document.getElementById("data")
    screenControl.value += val

}

function backSpace() {
    screenControl = document.getElementById("data")
    screenControl.value = screenControl.value.split("").splice(0, this.length-3)
}

function calculate(){
    let entryExp = document.getElementById('data');
    entryExp.value = eval(entryExp.value.toString())
}