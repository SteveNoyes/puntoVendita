const productsList = document.querySelector('.products ul');
const cartList = document.querySelector('.cart ul');
const total = document.querySelector('.cart p');

// Add product to cart
productsList.addEventListener('click', (event) => {
	if (event.target.tagName === 'LI') {
		const product = event.target.textContent;
		const price = 10;
		const cartItem = document.createElement('li');
		cartItem.textContent = `${product} - $${price}`;
		cartList.appendChild(cartItem);
		updateTotal(price);
	}
});

// Update cart total
function updateTotal(price) {
	let currentTotal = parseFloat(total.textContent.replace('$', ''));
	currentTotal += price;
	total.textContent = `Total: $${currentTotal}`;
}
