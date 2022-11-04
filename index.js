// var typeincome = document.querySelector("#typeincome");
// var typeexpenditure = document.querySelector(".typeexpenditure")
// var displayincome = document.querySelector(".displayincome");
// var displayexpenditure = document.querySelector(".displayexpenditure");
// var balance = document.querySelector(".balance");
// var expend = document.querySelector(".expend");

// var incomeval = parseInt(typeincome.value);
// var expenditureval = parseInt(typeexpenditure.value);

// typeincome.addEventListener("keypress", (key) => {
//     if (key.code == "Enter" || key.code == "NumpadEnter") {
//         income();
//     }
// })


// typeexpenditure.addEventListener("keypress", (key) => {
//     if (key.code == "Enter" || key.code == "NumpadEnter") {
//         expenditure();
//         remaining();
//     }
// })


// function income() {
//     displayincome.innerHTML = typeincome.value;
// }


// function expenditure() {

//     if (typeincome.value != "" || expenditureval > incomeval) {
//         displayexpenditure.innerHTML = typeexpenditure.value;
//     }

//     // if (typeexpenditure.value > typeincome.value) {
//     //     balance.innerHTML = "0";
//     // }
// }

// // var incomeval = parseInt(typeincome.value);
// // var expenditureval = parseInt(typeexpenditure.value);
// // var h = incomeval - expenditureval;

// function remaining() {

//     var incomeval = parseInt(typeincome.value);
//     var expenditureval = parseInt(typeexpenditure.value);

//     // var r = h - expenditureval;
//     var h=0;
//     if (expenditureval < incomeval) {
//         var h = incomeval - expenditureval;

//         let intial=0;
//         var createpara = document.createElement("p");
//         createpara.innerHTML = expenditureval;
//         expend.appendChild(createpara);


//         intial=h-expenditureval;

//         balance.innerHTML = intial;





//         balance.style.backgroundColor = "black";
//         balance.style.width = "2rem";
//         // balance.style.height = h + "%";
//         balance.style.color = "white";

//     }
//     if (expenditureval > incomeval) {
//         balance.innerHTML = "invalid input";
//     }


// }






var income = document.getElementById("typeincome");

var displayincome = document.getElementById("displayincome");

var balance = document.querySelector(".balanceamount");

var transacations = document.querySelector(".transacations");

var spended = document.getElementById("spended");

var added = document.getElementById("added");

var expensetitle = document.getElementById("expensetitle");

var expenseamount = document.getElementById("expenseamount");


let bargraph = document.querySelector("#bargraph");


var spendedbalgraph = document.getElementById("spendedbal");

let balanceAmount;
let tapa;
income.addEventListener("keypress", (e) => {
    if (e.code == "Enter" || e.code == "NumpadEnter") {

        balance.innerHTML = income.value;
        displayincome.innerHTML = income.value;
        tapa = parseInt(income.value);
        balanceAmount = income.value;
    }
});




spended.addEventListener("click", () => {
    var paraa = document.createElement("li");


    paraa.style.display = "flex";
    paraa.style.justifyContent = "space-around";
    console.log(balanceAmount);
    if (expensetitle.value != "" && expenseamount.value != "") {

        transacations.appendChild(paraa);
        paraa.innerHTML = `<span class="crete">${expensetitle.value}</span><span>- ${parseInt(expenseamount.value)}</span>`;
    }
    balanceAmount = parseInt(balanceAmount) - parseInt(expenseamount.value);

    console.log(balanceAmount, income.value, expenseamount.value);

    // newincome = newincome - parseInt(expenseamount.value);

    balance.innerHTML = balanceAmount;

    var crete = document.querySelector(".crete");

    crete.onclick = () => {

        var key = prompt("enter what do you what to edit");
        crete.innerHTML = key;

    }


    // tapa -100
    var jil = (balanceAmount * 100) / tapa;

    console.log(jil);

    // bargraph.style.width = `${jil}+%`;

    bargraph.style.width = jil + "%";
    
    bargraph.innerHTML = jil + "%" + " is your remaining balance";
    
    
    var jil2 = 100 - jil;
    
    spendedbalgraph.style.width = jil2 + "%";

    spendedbalgraph.innerHTML = jil2 + "%" ;



})

added.addEventListener("click", () => {
    var paraa = document.createElement("li");

    paraa.style.display = "flex";
    paraa.style.justifyContent = "space-around";
    console.log(balanceAmount);

    if (expensetitle.value != "" && expenseamount.value != "") {

        transacations.appendChild(paraa);
        paraa.innerHTML = `<span class="crete">${expensetitle.value}</span><span class="cretenumber">+ ${parseInt(expenseamount.value)}</span>`;
    }
    balanceAmount = parseInt(balanceAmount) + parseInt(expenseamount.value);

    console.log(balanceAmount, income.value, expenseamount.value);


    // newincome = newincome + parseInt(expenseamount.value);



    balance.innerHTML = balanceAmount;

    var crete = document.querySelector(".crete");
    var cretenumber = document.querySelector(".cretenumber");

    crete.onclick = () => {

        let key = prompt("enter what do you what to edit");
        crete.innerHTML = key;

    }

    cretenumber.onclick = () => {

        let anotherkey = prompt("enter how much do you want to edit");
        cretenumber.innerHTML = anotherkey;

    }

    var jil = (balanceAmount * 100) / tapa;

    console.log(jil);

    bargraph.style.width = `${jil}+%`;
    bargraph.innerHTML = jil + "%";
    bargraph.style.width = jil + "%";
    
    var jil2 = 100 - jil;
    
    spendedbalgraph.style.width = jil2 + "%";

    spendedbalgraph.innerHTML = jil2 + "%" ;



})



const a = document.querySelector(".test")
const b = document.querySelector(".but")



b.addEventListener("click",()=>{
    const newOne = document.createElement("input")


    a.insertAdjacentElement("beforeend",newOne)

    newOne.setAttribute("class","s")
})

const sel = document.querySelectorAll(".s")
for(let n of sel){


    n.style.border = "2px solid red"
}
// event.eventPhase











