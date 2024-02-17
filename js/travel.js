
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
        total("total_cost", travePrice)
        //grand total cost
        total("grand_total_cost", travePrice)
    })
}
function total(id, valu) {
    const totalCostText = document.getElementById(id).innerText
    const totalcost = parseInt(totalCostText) + valu
    setInnerText(id, totalcost)
    setInnerText(id, totalcost)
}
// inner text update
function setInnerText(id, value) {
    document.getElementById(id).innerText = value
}
