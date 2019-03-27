/////////////////////////////////////////////////////////////////////

//for each object in the loop from which this function is called,
//inserts that object's properties into an HTML format and returns
//the result.
const buildHTMLforWishList = (wishListObject) => {
  return `
    <section>
      <span>I can purchase ${wishListObject.itemName} at ${wishListObject.storeName}.
      </span>
    </section>
  `
}

//prints wishList to the document at the specified container.
//Cycles through an array of wishList items passed. Also clears
//the container of all HTML before writing to it. Building of the
//HTML will not run if the API returns an empty array.
const postWishListOnDom = wishListArray => {
  const container = document.querySelector("#wishList");
  container.innerHTML = "";
  console.log(wishListArray)
  if (wishListArray.length !== 0) {
    console.log("wishList found, posting to DOM...")
    wishListArray.forEach(element => {
      container.innerHTML += buildHTMLforWishList(element);
    });
  }
};