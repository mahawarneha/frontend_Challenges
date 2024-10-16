// var inputElement=document.getElementById("input").value;
// var incElement=document.getElementById("inc");
// var decElement=document.getElementById("dec");
// var Result=document.getElementById("result");

// incElement.addEventListener("click",() =>{
//   Result.textContent= parseInt(Result.textContent) + 1;
//   console.log(Result.textContent);
//  });
// decElement.addEventListener("click",() =>{
//     Result.textContent= parseInt(Result.textContent) - 1;
//     console.log(Result.textContent);
// });

//

var inputElement=document.getElementById("input");
var incElement=document.getElementById("inc");
var decElement=document.getElementById("dec");
var Result=document.getElementById("result");

incElement.addEventListener("click",() =>{
    //input.value increment
    inputElement.value= parseInt(inputElement.value) + 1;
    console.log(inputElement.value);
    //reslt.textContent increment
    Result.textContent= parseInt(Result.textContent) + 1;
      console.log(Result.textContent);
 });
decElement.addEventListener("click",() =>{
        //input.value decrement

    inputElement.value= parseInt(inputElement.value) - 1;
    console.log(inputElement.value);

        //reslt.textContent decrement
    Result.textContent= parseInt(Result.textContent) - 1;
        console.log(Result.textContent);

});
document.getElementById("reset").addEventListener('click',()=>{
    Result.textContent= 0;
    console.log(Result.textContent);


});


