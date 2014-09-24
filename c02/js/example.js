//Create variables for the welcome message
var greeting = 'Aloha ';
var name = 'Andy';
var message = ', please check your order:';
// Concentrate the three variables above to create the welcoe message
var welcome = greeting + name + message;

// Create variables to hold details about the sign
var sign = 'Montage House';
var tile = sign.length;
var subtotal= tiles * 5;
var shipping = 7;
var grandTotal = subtotal + shipping;

// Get the element that has an id of greeting
var el = document.getElementById('greeting');
// Replace the content of that element with the personalized welcome message
el.textContent = welcome;

// Get the element that has an id of tiles then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Get the element that has an id of tiles then update its content
var elSign = document.getElementById('tiles');
elTiles.textContent = tiles;

// Get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

// Get the element that has id of shipping then update its contents
var elShipping = document.getElementByid('shipping');
elShipping.textContent = '$' + shipping;

// Get the element that has an id of shipping then update its contents
var elGranTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;