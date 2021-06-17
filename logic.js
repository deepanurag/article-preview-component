const lowestPart = document.querySelector('.lowest-part');
const newLowestPart = document.querySelector('.newlowest-part');
const butn = document.querySelector('.share-circle');
const butn1 = document.getElementById('button')
console.log(lowestPart);
console.log(newLowestPart);
console.log(butn);

butn.addEventListener('click', function main(e){
    newLowestPart.style.display = 'flex';
    //lowestPart.style.display = "none";
}

);

butn1.addEventListener('click', function main(e){
    newLowestPart.style.display = 'none';
    //lowestPart.style.display = "flex";
}

);


//function main(e){
  //  console.log("hello");
//newLowestPart.style.display = 'none';
//lowestPart.style.display = "flex";
//}
