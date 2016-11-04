var total = 0;
var groceryItems = [
    
    {name:  "Celery",
     price:  2},
    {name:  "Milk",
     price:  4},
    {name:  "Bacon",
     price:  3},
    {name:  "Lettuce",
     price:  2.5},
  
];


for (var i=0; i < groceryItems.length; i++) {
  
  
  
  console.log(groceryItems[i].name + " " + groceryItems[i].price.toFixed(2));
  
  var groceryList = document.createElement('div');
  groceryList.innerHTML = groceryItems[i].name + " " + groceryItems[i].price.toFixed(2);

  

  document.body.appendChild(groceryList);
  
}

groceryItems.totalAmount = function(){

  var total = 0;
      for (var i = 0; i < groceryItems.length; i++) {
        total = total + groceryItems[i].price;
      }
      return total.toFixed(2);
};




var groceryTotal = document.createElement('div');

groceryTotal.innerHTML = "Total " + groceryItems.totalAmount();

document.body.appendChild(groceryTotal);



