const daysContainer = document.getElementById("days")
const monthYear = document.getElementById("monthYear")
const eventList = document.getElementById("eventList")

const prevBtn = document.getElementById("prevMonth")
const nextBtn = document.getElementById("nextMonth")

let currentDate = new Date()
let selectedDay = null


/* EVENTOS FIXOS (ENIAC) */

const events = {

"2026-05-17":{
title:"Workshop de React Native - ENIAC",
type:"eniac"
},

"2026-05-20":{
title:"Palestra UX/UI Design - ENIAC",
type:"eniac"
}

}


/* CARREGAR FERIADOS DA API */

async function carregarFeriados(){

const year = currentDate.getFullYear()

try{

const response = await fetch(`https://brasilapi.com.br/api/feriados/v1/${year}`)
const data = await response.json()

data.forEach(feriado => {

events[feriado.date] = {
title: feriado.name,
type: "feriado"
}

})

renderCalendar()

}catch(error){

console.log("Erro ao carregar feriados:", error)

}

}


/* RENDERIZAR CALENDÁRIO */

function renderCalendar(){

const year = currentDate.getFullYear()
const month = currentDate.getMonth()

const firstDay = new Date(year,month,1).getDay()
const lastDate = new Date(year,month+1,0).getDate()

const months = [
"Janeiro","Fevereiro","Março","Abril","Maio","Junho",
"Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
]

monthYear.innerText = `${months[month]} ${year}`

daysContainer.innerHTML = ""
selectedDay = null


/* espaços vazios antes do mês */

for(let i=0;i<firstDay;i++){

const empty = document.createElement("div")
empty.classList.add("empty")
daysContainer.appendChild(empty)

}


/* dias do mês */

for(let day=1;day<=lastDate;day++){

const dayDiv = document.createElement("div")
dayDiv.innerText = day

const fullDate = `${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`


/* marcar eventos */

if(events[fullDate]){

if(events[fullDate].type === "feriado"){
dayDiv.classList.add("holiday")
}

if(events[fullDate].type === "eniac"){
dayDiv.classList.add("event-day")
}

}


/* marcar hoje */

const today = new Date()

if(
day === today.getDate() &&
month === today.getMonth() &&
year === today.getFullYear()
){
dayDiv.classList.add("today")
}


/* clicar no dia */

dayDiv.addEventListener("click",()=>{

if(selectedDay){
selectedDay.classList.remove("selected")
}

dayDiv.classList.add("selected")
selectedDay = dayDiv

showEvents(fullDate)

})

daysContainer.appendChild(dayDiv)

}

}


/* MOSTRAR EVENTOS DO DIA */

function showEvents(date){

eventList.innerHTML = ""

if(events[date]){

const div = document.createElement("div")
div.classList.add("event-item")

div.innerHTML = `<strong>${events[date].title}</strong>`

eventList.appendChild(div)

}else{

eventList.innerHTML = "<p>Nenhum evento neste dia.</p>"

}

}


/* TROCAR MÊS */

prevBtn.addEventListener("click",()=>{

currentDate.setMonth(currentDate.getMonth()-1)

carregarFeriados()

})

nextBtn.addEventListener("click",()=>{

currentDate.setMonth(currentDate.getMonth()+1)

carregarFeriados()

})


/* INICIAR */

carregarFeriados()