//Calls a function to fetch the wishList from the JSON database, then passes the parsedResonse to a function that prints it to the DOM.
getWishlist().then(parsedResponse => postWishListOnDom(parsedResponse));

document.querySelector("#saveItem").addEventListener("click", event => {

    //on clicking the saveItem button, stores the value of the itemName and StoreName input boxes to variables.
    const itemNameNew = document.querySelector("#itemName").value;
    const storeNameNew = document.querySelector("#storeName").value;
    document.querySelector("#itemName").focus();

    //create new object, populating the values with the contents of the above variables.
    if (document.querySelector("#itemName").value !== "" && document.querySelector("#storeName").value !== "") {
        let newWishListEntry = {
            itemName: itemNameNew,
            storeName: storeNameNew
        }

        console.log(newWishListEntry);

    //calls a function that posts the new object to the JSON database, and then gets the wishList from the database, then posts the wishlist in the same manner from before.
    postWishList(newWishListEntry)
        .then(() => getWishlist())
        .then(parsedResponse => postWishListOnDom(parsedResponse));
    } else {
        alert("Please enter an item to purchase and the name of a store.")
    }
    document.querySelector("#itemName").value = null;
    document.querySelector("#storeName").value = null;
});