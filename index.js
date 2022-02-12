let minute = 00
let second = 00
let output_minute = document.querySelector('#minute')
let output_second = document.querySelector('#second')
let button_start = document.querySelector('#btn-start')
let button_pause = document.querySelector('#btn-pause')
let button_reset = document.querySelector('#btn-reset')
let Interval;
button_start.addEventListener('click', ()=>{
    clearInterval(Interval)
    Interval = setInterval(start_time, 1000)
})
button_pause.addEventListener('click', ()=>{
    clearInterval(Interval)
})
button_reset.addEventListener('click', ()=>{
    clearInterval(Interval)
    second = '00'
    minute = '00'
    output_minute.innerHTML = minute
    output_second.innerHTML = second
})

function start_time(){
    second++
    if(second <= 9){
        output_second.innerHTML = '0' + second
    }
    if(second > 9){
        output_second.innerHTML = second
    }
    if(second > 60){
        minute++
        output_minute.innerHTML = '0' + minute
        second = 0
        output_second.innerHTML = '0' + second
    }
    if(minute > 9){
        output_minute.innerHTML = minute
    }
    if(minute > 60){
        output_minute.innerHTML = minute
    }
}
