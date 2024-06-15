var curPlayer="X";
var arr=Array(9).fill(null);

function winner(){
var result=document.getElementById('result');

if(
 (arr[0]!==null && arr[0] == arr[1] && arr[1]== arr[2])||
 (arr[3]!==null && arr[3] == arr[4] && arr[4]== arr[5])||
 (arr[6]!==null && arr[6] == arr[7] && arr[7]== arr[8])||
 (arr[0]!==null && arr[0] == arr[3] && arr[3]== arr[6])||
 (arr[1]!==null && arr[1] == arr[4] && arr[4]== arr[7])||
 (arr[2]!==null && arr[2] == arr[5] && arr[5]== arr[8])||
 (arr[0]!==null && arr[0] == arr[4] && arr[4]== arr[8])||
 (arr[2]!==null && arr[2] == arr[4] && arr[4]== arr[6]))
{
    result.textContent="winner is " + curPlayer
    return true;
}
if (arr.every(cell => cell !== null)) {
    result.textContent = "It's a draw!";
    return true;
}else {
    return false;
}
}

function clickHandler(value){
 const id =Number(value.id);// take number number(1)
 if(arr[id]!==null) return;

 arr[id]=curPlayer;//0-8 n=9
 value.textContent=curPlayer //display x
 
winner();
// document.getElementsByClassName('col').addEventListener('click',function(e){e.preventDefault();})

 if(curPlayer === 'X'){
    curPlayer="O"
 }else{ 
    curPlayer="X"  
 }
}

