console.log("Tip-Calculator Website");
let noOfPeople = document.getElementById('numberOfPeople');
let tipPercent = document.getElementById('tipInput');
let billTotal = document.getElementById('billTotalInput');
let perPersonAmount = document.getElementById('perPersonTotal');

function increasePeople() {
    let value = (Number)(noOfPeople.innerText) + 1;
    noOfPeople.innerText = value;
    calculateBill();
}
function decreasePeople() {
    let value = (Number)(noOfPeople.innerText) - 1;
    if (value == 0) {
        return;
    }
    noOfPeople.innerText = value;
    calculateBill();
}
function calculateBill() {
    let billAmount = (Number)(billTotal.value);
    let tipPer = (Number)(tipPercent.value);
    console.log(billAmount+" \t"+ tipPer);
    let amount = (Number)((billAmount) + (tipPer * billAmount) / 100.0);
    amount = amount/ (Number)(noOfPeople.innerText);
    perPersonAmount.innerText = `$${amount.toFixed(3)}`;
    
}