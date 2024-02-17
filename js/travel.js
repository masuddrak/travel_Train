
const allBtn = document.getElementsByClassName("btn-primary")
let count = 0
for (let btn of allBtn) {
    btn.addEventListener("click", function (event) {
        count = count + 1
        setInnerText("card_count", count)
        // price and location select
        const travePrice = parseInt(event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText)
        const travelPlace = event.target.parentNode.parentNode.childNodes[1].innerText
        // added select price and place
        const addedSelectContainer = document.getElementById("add_appen_place")
        const div = document.createElement("div")
        div.classList.add("flex", "justify-between")

        const h3 = document.createElement("h2")
        h3.innerText = travelPlace
        div.appendChild(h3)

        const h2 = document.createElement("h3")
        div.appendChild(h2)
        h2.innerText = travePrice

        addedSelectContainer.appendChild(div)
        // total cost
        totalCost("total_cost", travePrice)
        //grand total cost
        grandTotal("grand_total_cost", travePrice)
    })
}
// total cost 
function totalCost(id, valu) {
    const totalCostText = document.getElementById(id).innerText
    const totalcost = parseInt(totalCostText) + valu
    setInnerText(id, totalcost)
}
// grand total
function grandTotal(catagory) {
    const totalCostText = document.getElementById("total_cost").innerText
    let totalcost = parseInt(totalCostText)
    if (catagory === "bus") {
        setInnerText("grand_total_cost", totalcost + 100)
    }
    else if (catagory === "train") {
        setInnerText("grand_total_cost", totalcost - 200)
    }
    else if (catagory === "flight") {
        setInnerText("grand_total_cost", totalcost + 500)
    }
    else {
        setInnerText("grand_total_cost", totalcost)
    }
}
// inner text update
function setInnerText(id, value) {
    document.getElementById(id).innerText = value
}
