const NumberOfCategories = document.querySelectorAll('.item')
console.log("Number of categories:", NumberOfCategories.length)

const propertyList = NumberOfCategories.forEach(el => console.log(
`Category: ${el.firstElementChild.innerHTML} 
Elements: ${el.lastElementChild.childElementCount}`))




