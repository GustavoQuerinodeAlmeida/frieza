const daysContainer = document.getElementById("days")
const monthYear = document.getElementById("monthYear")
const eventList = document.getElementById("eventList")

const prevBtn = document.getElementById("prevMonth")
const nextBtn = document.getElementById("nextMonth")

let currentDate = new Date()
let selectedDay = null

const events = {

"2026-05-17":"Workshop de React Native",

"2026-05-20":"Palestra UX/UI Design"

}

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

for(let i=0;i<firstDay;i++){

const empty = document.createElement("div")
empty.classList.add("empty")
daysContainer.appendChild(empty)

}

for(let day=1;day<=lastDate;day++){

const dayDiv = document.createElement("div")
dayDiv.innerText = day

const fullDate = `${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`

if(events[fullDate]){

dayDiv.classList.add("event")

}

const today = new Date()

if(
day === today.getDate() &&
month === today.getMonth() &&
year === today.getFullYear()
){

dayDiv.classList.add("today")

}

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

function showEvents(date){

eventList.innerHTML = ""

if(events[date]){

const div = document.createElement("div")

div.classList.add("event-item")

div.innerText = events[date]

eventList.appendChild(div)

}else{

eventList.innerHTML = "<p>Nenhum evento neste dia.</p>"

}

}

prevBtn.addEventListener("click",()=>{

currentDate.setMonth(currentDate.getMonth()-1)

renderCalendar()

})

nextBtn.addEventListener("click",()=>{

currentDate.setMonth(currentDate.getMonth()+1)

renderCalendar()

})

renderCalendar()