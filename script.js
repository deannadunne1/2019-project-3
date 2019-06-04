console.log("working")

let bulb1 = document.querySelector('#bulb1')
console.log(bulb1)
let bulb2 = document.querySelector('#bulb2')
console.log(bulb2)
let bulb3 = document.querySelector('#bulb3')
console.log(bulb3)
let bulb4 = document.querySelector('#bulb4')
console.log(bulb4)
let bulb5 = document.querySelector('#bulb5')
console.log(bulb5)
let winAlert = document.querySelector('#winAlert')
console.log(winAlert)

let switch1 = document.querySelector('#switch1')
let switch2 = document.querySelector('#switch2')
let switch3 = document.querySelector('#switch3')
let switch4 = document.querySelector('#switch4')
let switch5 = document.querySelector('#switch5')
console.log(switch1)
console.log(switch2)
console.log(switch3)
console.log(switch4)
console.log(switch5)

let reset = document.querySelector('#reset')
let hint1 = document.querySelector('#hint1')
let hint2 = document.querySelector('#hint2')
let hint3 = document.querySelector('#hint3')

bulb1.addEventListener('click', e => {
    console.log("bulb1 clicked")
//   bulb1.classList.toggle('on')
    switch1.classList.toggle('hiddenSwitch')
})

bulb2.addEventListener('click', e => {
    console.log("bulb2 clicked")
    bulb2.classList.toggle('on')
    switch2.classList.toggle('hiddenSwitch')
})

bulb3.addEventListener('click', e => {
    console.log("bulb3 clicked");
//    bulb3.classList.toggle('on')
    switch3.classList.toggle('hiddenSwitch')
    switchy1();
})

bulb4.addEventListener('click', e => {
    console.log("bulb4 clicked")
//    bulb4.classList.toggle('on')
    switch4.classList.toggle('hiddenSwitch')
    win()
})

bulb5.addEventListener('click', e => {
    console.log("bulb5 clicked")
    bulb5.classList.toggle('on')
    switch5.classList.toggle('hiddenSwitch')
    switchy2()
})

function switchy1() {
    bulb1.classList.toggle('on')
    bulb3.classList.remove('on')
}

function switchy2() {
    bulb4.classList.toggle('on')
    bulb1.classList.remove('on')
}


function off() {
    bulb1.classList.remove('on')
    bulb2.classList.remove('on')
    bulb3.classList.remove('on')
    bulb4.classList.remove('on')
    bulb5.classList.remove('on')
}

function win() {
    if (switch1.classList.contains('hiddenswitch')){
        off()
        }
    else if (switch2.classList.contains('hiddenswitch')){
        off()
        }
   // else if (bulb2.classList.contains('on')){
     //   off()
       // }
    else if(
        bulb1.classList.contains('on') &&
        bulb5.classList.contains('on') &&
        switch3.classList.contains('hiddenSwitch')
    ){
        bulb2.classList.add('on')
        bulb3.classList.add('on')
        bulb4.classList.add('on')
        winAlert.classList.remove('hidden')
    }
    else {
        off()
    }
}


reset.addEventListener('click', e=>{
  bulb1.classList.remove('on')
  bulb2.classList.remove('on')
  bulb3.classList.remove('on')
  bulb4.classList.remove('on')
  bulb5.classList.remove('on')
  switch1.classList.add('hiddenSwitch')
  switch2.classList.add('hiddenSwitch')
  switch3.classList.add('hiddenSwitch')
  switch4.classList.add('hiddenSwitch')
  switch5.classList.add('hiddenSwitch')
})

hint1.addEventListener ('click', e=>{
  hint1.innerHTML = `<p style="font-size:14px;">Switch 1 and Lightbulb 1 must be on<p>`
  hint2.classList.remove('hidden')
})

hint2.addEventListener ('click', e=>{
  hint2.innerHTML = `<p style="font-size:14px;">Switch 2 must be off but Lightbulb 2 must be on<p>`
  hint3.classList.remove('hidden')
})

hint3.addEventListener ('click', e=>{
  hint3.innerHTML = `<p style="font-size:14px;">Switch 3 must be off and lightbulb 5 must be on<p>`
})