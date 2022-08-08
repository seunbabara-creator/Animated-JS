
 let five= setInterval(update5);
  let upto=0;
          function update5(){
            var count=document.getElementById("count1");
                count.innerHTML= ++upto;
            if (upto===100){
            clearInterval(five); 
            }
          }
let four=setInterval(update4);
let aupto=0;
          function update4(){
            var count=document.getElementById("count2");
                count.innerHTML= ++aupto;
            if (aupto===115){
            clearInterval(four); 
            }
          }
 let three =setInterval(update3);
 let bupto=500;
          function update3(){
            var count=document.getElementById("count3");
                count.innerHTML= --bupto;
            if (bupto===0){
            clearInterval(three); 
            }
          }
let two = setInterval(update2);
let cupto=0;
  function update2(){
    var count=document.getElementById("count4");
        count.innerHTML= ++cupto;
    if (cupto===150){
    clearInterval(two); 
    }
  }
 let counts= setInterval(updated);
 let dupto=0;
          function updated(){
          var count=document.getElementById("counter");
              count.innerHTML= ++dupto;
          if (dupto===50){
          clearInterval(counts); 
          }
  }
  const setBg= function(){
    const randomcolor =
    Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor= '#' + randomcolor;
    document.container.style.backgroundColor="#" + randomcolor;
  }
  document.addEventListener("click",setBg);
  setBg();
  container.addEventListener('click',setBg);
  setBg();