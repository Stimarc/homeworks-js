//setTimeout:
//1 
// function printAfter() {
//   setTimeout(function() {
//     console.log("Рядок, що виводиться через 5 секунд");
//   }, 5000); 
// }
// printAfter();
//2
// const serverData = [
//   {name:"Sam",id:1},
//   {name:"Alex",id:2},
//   {name:"Jeff",id:3}
// ];

// function fetchData() {
//   setTimeout(() => {
//     console.log(serverData);

//   }, 10000);
// }

// fetchData();


//setInterval:
//1
// function countdown() {
//   const now = new Date();
//   const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
//   const remainingTime = endOfDay - now;
//   const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60))
//   const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
//   const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
//   console.log(`До кінця дня залишилось ${remainingHours} годин ${remainingMinutes} хвилин ${remainingSeconds} секунд`);
// }

// setInterval(countdown, 5000);

// //Date:
// //1
// function getCurrentTime() {
//   const now = new Date();
//   const hours = now.getHours().toString().padStart(2, '0');
//   const minutes = now.getMinutes().toString().padStart(2, '0');
//   const seconds = now.getSeconds().toString().padStart(2, '0');
//   return `${hours}:${minutes}:${seconds}`;
// }
// //2
// function getCurrentMonth(){
//   const now = new Date();
//   const day = now.getDate().toString().padStart(2, '0');
//   const month = (now.getMonth() + 1).toString().padStart(2, '0');
//   const year = now.getFullYear().toString();
//   return `${day}:${month}:${year}`;
// }
// //3
// function daysToNewYear() {
//   const today = new Date();
//   const newYear = new Date(today.getFullYear() + 1, 0, 1);
//   const diffTime = newYear - today;
//   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
//   return diffDays;
// }


 

