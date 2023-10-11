// plus
function updateProductInput(product,update,price){
	// dynamic input number
	const productInput = document.getElementById(product + '-number');
	//jehetu product number er moddhe update hobe tai let 
	let productNumber = productInput.value ;
	// console.log(productNumber)
	if (update){
		productNumber = parseInt(productNumber) + 1
	}
	else if (productNumber > 0) {  
		productNumber = parseInt(productNumber) - 1;

	}
	productInput.value = productNumber ;

// total update
	const updateTotal = document.getElementById(product +'-total');
	// console.log(updateTptal);
	updateTotal.innerText= productNumber * price;
	 calculateTotal() 	//  from calculate function

}

// updateproductquantity
function updateProductQuantity(quntity){
	const productInput = document.getElementById(quntity + '-number')
	const productquantity = parseInt(productInput.value)
	return productquantity
}


// calculateTotal
function calculateTotal (product){
	const phoneAmmount = updateProductQuantity('phone')*100;
	const no2phoneAmmount = updateProductQuantity('no2phone')*100
	const caseAmmount = updateProductQuantity('case')*50
	const subTotal = phoneAmmount + no2phoneAmmount + caseAmmount
	const tax = subTotal / 10;
	const total = subTotal + tax;
//  sub set in html
	document.getElementById('sub-total').innerText = subTotal;
	document.getElementById('tax-ammount').innerText = tax;
	document.getElementById('total-price').innerText = total;


}

// 1stphn
document.getElementById('phone-plus').addEventListener('click',function(){
	// const productInput = document.getElementById('phone-number').value ;
	// const productNumbe =parseInt(productInput) + 1 ; 
	updateProductInput('phone',true,100)
	
})

document.getElementById('phone-minus').addEventListener('click',function(){
	updateProductInput('phone',false,100)
})


// n02phone
document.getElementById('no2phone-plus').addEventListener('click',function(){
	// const productInput = document.getElementByI('no2phone-number').value ;
	// const productNumbe =parseInt(productInput) + 1 ; 
	updateProductInput('no2phone',true,100)
})
document.getElementById('no2phone-minus').addEventListener('click',function(){
	updateProductInput('no2phone',false,100)
})


// phonecase
document.getElementById('case-plus').addEventListener('click',function(){
	// const productInput = document.getElementById('case-number').value ;
	// const productNumbe =parseInt(productInput) + 1 ; 
	updateProductInput('case',true,50)
})
document.getElementById('case-minus').addEventListener('click',function(){
	updateProductInput('case',false,50)
})