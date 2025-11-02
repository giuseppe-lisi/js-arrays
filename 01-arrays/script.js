const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE
document.getElementById("consoleOutput")
// rappresenta a schermo l'array degli insegnanti
function drawTeachers() {
  document.getElementById("teachers").innerHTML = "";
  for (let i = 0; i < teachers.length; i++) {
    let currentTeacher = teachers[i];
    document.getElementById("teachers").innerHTML += `<div class="col text-center"><p> ${currentTeacher} </p><img style="height: 50px;" src="../img/stick-man.png"></div>`;
  }
}

drawTeachers();

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
function arrays011() {
  const fourthTeacher = teachers[3];
  document.getElementById("consoleOutput").value = `fourthTeacher = ${fourthTeacher}`;
  document.getElementById("arrays011").disabled = true;
}

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
function arrays012() {
  teachers[4] = "Patrick";
  document.getElementById("consoleOutput").value = `teachers[4] = ${teachers[4]}`;
  document.getElementById("arrays012").disabled = true;
  drawTeachers();
}

// // 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
function arrays013() {
  const lastTeacher = teachers.pop();
  document.getElementById("consoleOutput").value = `lastTeacher = ${lastTeacher}`;
  document.getElementById("arrays013").disabled = true;
  drawTeachers();
}

// // 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
function arrays014() {
  const firstTeacher = teachers.shift();
  document.getElementById("consoleOutput").value = `firstTeacher = ${firstTeacher}`;
  document.getElementById("arrays014").disabled = true;
  drawTeachers();
}

// // 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
function arrays015() {
  teachers.push("Vanessa")
  document.getElementById("consoleOutput").value = `teachers[latest_entry] = ${teachers[teachers.lenght]}`;
  document.getElementById("arrays015").disabled = true;
  drawTeachers();
}

// // 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
function arrays016() {
  teachers.unshift("Sarah");
  document.getElementById("consoleOutput").value = `firstTeacher = ${teachers[0]}`;
  document.getElementById("arrays016").disabled = true;
  drawTeachers();
}

// // 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// // e salvalo nella variabile lewisIndex
function arrays017() {
  const lewisIndex = teachers.indexOf("Lewis");
  document.getElementById("consoleOutput").value = `lewisIndex = ${lewisIndex}`;
  document.getElementById("arrays017").disabled = true;
}


// // 8. Verifica se l'array teachers è vuoto
// // e salva il risultato nella variabile isTeachersEmpty
function arrays018() {
  const isTeachersEmpty = Boolean(teachers.lenght);
  document.getElementById("consoleOutput").value = `isTeachersEmpty = ${isTeachersEmpty}`;
  document.getElementById("arrays018").disabled = true;
}

