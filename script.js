//getting element from browser
const passEl = document.getElementById('pass')
const btnEl = document.getElementById('btn')

//Define Array that hold output result
let output = [ ]

//Starting event
btnEl.addEventListener('click', (e) => {
    inputNumber(e)
})

//Get the input value
function inputNumber(e){
    e.preventDefault();
    const pas = passEl.value;
    validateValue(pas)
   //console.log(pas)    
}

//Validate the input value
function validateValue(pas){
    if(pas.length < 5){
        console.log("Error: Your password is less than 5 digit")
    } else if( pas.length > 5){
        console.log("Error: Your password is bigger than 5 digit")
    } else {
        console.log('Success')
        //TODO: pass each digit and change number {loop + condition}
        for(let i=0; i < pas.length; i++){
            //console.log(pas[i])
            //condition to  change each character
            if(pas[i] == 1){
                output.push("#")          
            } else if(pas[i] == 2){
                output.push("a")
            }else if(pas[i] == 3){
                output.push("t")
            }else if(pas[i] == 4){
                output.push("j")
            }else if(pas[i] == 5){
                output.push("9")
            }else if(pas[i] == 6){
                output.push("E")
            }else if(pas[i] == 7){
                output.push("@")
            }else if(pas[i] == 8){
                output.push("2")
            }else if(pas[i] == 9){
                output.push("F")
            }else if(pas[i] == 0){
                output.push("?")
            }else{
                console.log("There was an Error while looping through input password array")
            }  
        }
        //Print Output 
        for (let j=0; j < output.length; j++) {
            //to console
            console.log(output[j])

        }
           
    }    
}



