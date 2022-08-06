const tip = document.getElementById("range");
const tit = document.querySelector(".ran");

const tipamt = document.querySelector(".tipamt");
const amt = document.querySelector(".bill");

tip.addEventListener("input",function(e) {
    let num = document.getElementById("num").value;
    let tipam = e.target.value;

    if(num === ""){
        alert("Amount Required");
    } else {
        tit.textContent = `${tipam}%`;
        tipamt.textContent = `${(num*tipam/100)}`;
        amt.textContent = tipCalc(parseFloat(num),parseFloat(tipam));
    }
})

function tipCalc(amt,tip) {
    let tipc = (amt * tip / 100);
    return tipc + amt;
}