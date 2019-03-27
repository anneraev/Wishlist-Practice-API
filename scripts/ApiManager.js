//////////////////////////////////////////////////////////////

//Fetches the wishlist from the JSON database.
const getWishlist = () => {
  return fetch("http://localhost:8088/wishList")
    .then(response => response.json())
}

//I still have only a small idea of what this really does. I know it posts to the JSON server and adds some header metadata, but I don't know how it does it. Takes the newWishListOBject passed to it and posts it to the wishList database.
const postWishList = (newWishListObject) => {
  return fetch("http://localhost:8088/wishList", {
      method: "POST",
      body: JSON.stringify(newWishListObject),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
}