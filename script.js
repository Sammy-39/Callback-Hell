var timer = 10

var paraElement = document.createElement("p")
paraElement.innerText = timer

document.querySelector(".main").append(paraElement)

setTimeout(()=>{
    timer-=1
    paraElement.innerText = timer
    
    setTimeout(()=>{
        timer-=1
        paraElement.innerText = timer
       
        setTimeout(()=>{
            timer-=1
            paraElement.innerText = timer
 
            setTimeout(()=>{
                timer-=1
                paraElement.innerText = timer

                setTimeout(()=>{
                    timer-=1
                    paraElement.innerText = timer

                    setTimeout(()=>{
                        timer-=1
                        paraElement.innerText = timer
                        
                        setTimeout(()=>{
                            timer-=1
                            paraElement.innerText = timer
                           
                            setTimeout(()=>{
                                timer-=1
                                paraElement.innerText = timer
                     
                                setTimeout(()=>{
                                    timer-=1
                                    paraElement.innerText = timer
                    
                                    setTimeout(()=>{
                                        timer-=1
                                        paraElement.innerText = "Happy Independence Day!"
                                        paraElement.classList.add("paraClass")
                                    },1000)
                    
                                },1000)
                    
                            },1000)
                    
                        },1000)
                    
                    },1000)

                },1000)

            },1000)

        },1000)

    },1000)

},1000)