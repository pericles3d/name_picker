var wdi_17_names = ["Addison", "Ben", "Christine", "Chloe", "Cris", "Dane", "David H",
"David Z", "Emily", "Imtaek", "Jack", "Jesse P", "Jesse Z", "Jonathan", "Pericles", "Peter",
 "Philippe", "Sergio", "Simon", "Tali", "Tavo", "Trevor"];


// function consecutive(){
//   for (var i = 0; i < (wdi_17_names.length); i++) {
//       console.log(wdi_17_names[i]);
//   }
// }
// consecutive();

//Math.floor and Math.random might be useful
// var pick = Math.floor(Math.random() * wdi_17_names.length);
// console.log(wdi_17_names[pick]);
// var namePicker = wdi_17_names[pick];
// console.log(namePicker);
//
// //One more way
// var pick = Math.floor(Math.random() * wdi_17_names.length);
// console.log(wdi_17_names[pick]);


//REFACTORED
var namePicker = wdi_17_names[Math.floor(Math.random() * wdi_17_names.length)];
console.log(namePicker);
