// Displaya quick message in the console.
console.log("ClydeBank Coffee Shop is now open!")

//Th einventory object
let menu = {
    inventory: {
        "Regular Coffee": 3.00,"Espresso": 3.50, "Cappuccino": 4.0,"Latte": 4.25
    },
    populate: function(container) {
        for (let item in this.inventory)
        {
            let price = this.inventory[item]
            container.innerHTML += "<li>" + item + " - $" + price.toFixed(2) + "</li>"
        }
    }
}

//Obtain reference in the menu list by ID
let menuList = document.getElementById("coffee-menu")

//Populate the menu
menu.populate(menuList)