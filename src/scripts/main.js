getAddresses().then(parsedResponse => listAddressOnDom(parsedResponse));

document.querySelector("#saveEntry").addEventListener("click", event => {
  /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
  const personName = document.querySelector("#fullName").value;
  const personAddress = document.querySelector("#address").value;

  let newAddressBookEntry = {
    name: personName,
    address: personAddress
  };

  postAddress(newAddressBookEntry)
  .then(() => getAddresses())
  .then(parsedResponse => listAddressOnDom(parsedResponse))

});
