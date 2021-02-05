let count = document.querySelector("#counter")

let countNum = parseInt(count.innerText)



// function increaceCount(){
//     countNum += 1
//     count.innerText = countNum
    
// }

// setInterval(increaceCount, 1000)

const ButtonClick = document.querySelector('body')

ButtonClick.addEventListener("click", function(e){
        
    if (e.target === document.querySelector('#minus')){
        
        count.innerText = countNum - 1
    }
        
    else if (e.target === document.querySelector('#plus')){
        // addASec()
        countNum += 1
        count.innerText = countNum
    }
    else if (e.target === document.querySelector('#heart')){
        const likesUl = document.querySelector(".likes")
        likesLi = document.createElement("li")
        likesLi.innerText = "liked " + countNum
        likesUl.appendChild(likesLi)

        console.log(likesLi)
    }
    
    else if (e.target === document.querySelector('#pause'))
    console.log("stop")
        
})

// function takeASec(countNum){
//     countNum -= 1
//     count.innerText = countNum
//     console.log (count)
// }

// function takeASec(){
//     countNum += 1
//     count.innerText = countNum
//     console.log (count)
// }



// function whichButton(){

    
// }