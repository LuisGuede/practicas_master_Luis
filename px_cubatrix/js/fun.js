// capturo mis elementos

const numberOfCubatas = document.querySelector('input');
const btnCalcular = document.querySelector('button');
const resultSlot = document.querySelector('.resultado');

btnCalcular.addEventListener('click', function(){

    if (numberOfCubatas.value == 0){
        resultSlot.innerHTML = "llegas hecho un pincel, amigo..";
    } 
    else if (numberOfCubatas.value > 0 && numberOfCubatas < 4){

        resultSlot.innerHTML = "Boca de alpargata";
    }
    else if (numberOfCubatas.value >= 4 && numberOfCubatas < 10){
        resultSlot.innerHTML = "mutas a albondiga";
    }
    else{
        resultSlot.innerHTML = "c. de julia madiavilla, 27 .626 18 25 71";
    }


})



// OPCION1----------------------------------------------------------

// btnCalcular.addEventListener('click', function(){

//     if (numberOfCubatas.value == 0){
//         resultSlot.innerHTML = "llegas hecho un pincel, amigo..";
//     } 
//     else if (numberOfCubatas.value > 0 && numberOfCubatas < 4){

//         resultSlot.innerHTML = "Boca de alpargata";
//     }
//     else if (numberOfCubatas.value >= 4 && numberOfCubatas < 10){
//         resultSlot.innerHTML = "mutas a albondiga";
//     }
//     else{
//         resultSlot.innerHTML = "c. de julia madiavilla, 27 .626 18 25 71";
//     }


// })

// innerHTML : for generate text


// OPCION2----------------------------------------------------------
// btnCalcular.addEventListener('click', function(){
    
//     switch (numberOfCubatas.value) {
//         case "0":
//             resultSlot.innerHTML="Estas hecho un pincel";
//             break;
        
//         case "1":
//             resultSlot.innerHTML="Alpargata's mouth";
//             break;

//         default:
//             resultSlot.innerHTML="Deja de castigarte my boi";
//     }

// })

// OPCION3----------------------------------------------------------
// btnCalcular.addEventListener('click', function(){
    
//     numberOfCubatas.value == 0 ? resultSlot.innerHTML = "persona uno" : resultSlot.innerHTML="depurate";

// })