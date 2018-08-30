//function showHide(){
//    var checkbox = document.getElementById("chk");
//    var table = document.getElementsByClassName("table");

//    for(var i = 0; 1 != table.length; i++){
 //       if(checkbox.checked){
 //            table[i].style.display = "block";
//        }
//        else{
 //           table[i].style.display = "none";
 //       }
//    }
//}
////////////////////////////
// function countGrid(){
//    var display = 0;
//    var counter = 0;
//    var limit = document.getElementById("input");

//    while(counter < limit){
//        display += 1;
//        counter += 1;
//         if(){
            
//         }
//         else if(){
            
//         }
//    }
//}
///////////////////////////
//var i = document.querySelector(".input");
//var counter = i;
//while (i < counter){
//    document.getElementById("demo").innerHTML += i + "<br>";
//    i++;
//}
var button = document.querySelector("button");
var input = document.querySelector("input");
var td =document.querySelectorAll("td");
button.addEventListener("click",function(e){
    var limit=input.value;
    var cell;
    //cell.style.backgroundColor
    for(var i=0; i<td.length;i++){
        td[i].style.backgroundColor="";
    }
    for(var x=1; x < limit;x++){
        var y=1;
        cell = document.querySelector('tr:nth-of-type('+y+') td:nth-of-type('+x+')');
        cell.style.backgroundColor = 'red';
    }
    for(var y=1; y < limit;y++){
        cell = document.querySelector('tr:nth-of-type('+y+') td:nth-of-type('+x+')');
        cell.style.backgroundColor = 'red';
    }
    for(var x; x > 1 ;x--){
        cell = document.querySelector('tr:nth-of-type('+y+') td:nth-of-type('+x+')');
        cell.style.backgroundColor = 'red';
    }
    
    for(var y; y > 1;y--){
        cell = document.querySelector('tr:nth-of-type('+y+') td:nth-of-type('+x+')');
        cell.style.backgroundColor = 'red';
    }
// var button = document.querySelector("button");
// var input = document.querySelector("input");
// var td =document.querySelectorAll("td");
// button.addEventListener("click",function(e){
//     var x=1;
//     var y=1;
//     var limit=input.value;
//     var cell;
//     //cell.style.backgroundColor
//     for(var i=0; i<td.length;i++){
//         td[i].style.backgroundColor="";
//     }

    // while(x < limit){
    //     cell = document.querySelector('tr:nth-of-type('+y+') td:nth-of-type('+x+')');
    //     cell.style.backgroundColor = 'red';
    //     x++;

//     }
//     while(y < limit){
//         cell = document.querySelector('tr:nth-of-type('+y+') td:nth-of-type('+x+')');
//         cell.style.backgroundColor = 'red';
//         y++;

//     }
//     while(x > 1){
//         cell = document.querySelector('tr:nth-of-type('+y+') td:nth-of-type('+x+')');
//         cell.style.backgroundColor = 'red';
//         x--;

//     }
//     while(y > 1){
//         cell = document.querySelector('tr:nth-of-type('+y+') td:nth-of-type('+x+')');
//         cell.style.backgroundColor = 'red';
//         y--;

//     }

    // while(counter < limit){
    //     var cell = document.querySelector('tr:nth-of-type('+1+') td:nth-of-type('+x+')');
    //     cell.style.backgroundColor = 'red';
    //     x++;
    //     console.log(x);
    //     counter++;
    //     //counter=limit
    //     if(y < x){
    //         var cell = document.querySelector('tr:nth-of-type('+y+') td:nth-of-type('+limit+')');
    //         cell.style.backgroundColor = 'red';
    //         y++;
    //         console.log(y);
    //     }
    //     //y=x
    //     else if(x === 1){
    //         var cell = document.querySelector('tr:nth-of-type('+limit+') td:nth-of-type('+x+')');
    //         cell.style.backgroundColor = 'red';
    //         x--;
    //         console.log(x); 
    //     }
        
    // }
})
//R=x++ D=Y++ L=x-- U=y--