// Write your solution in this file!

var customerName = "bob";
var bestCustomer;

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavouriteCustomer = "Ken";

function changeLeastFavoriteCustomer() {
  leastFavouriteCustomer = "jillo";
}
