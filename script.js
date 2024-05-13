let generate = document.querySelector("#btn");
let inputvalue = document.querySelector("#input");
let img = document.querySelector("#img");


generate.addEventListener('click', () => {
  let value = inputvalue.value;
  inputvalue.value="";
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`; 
});
