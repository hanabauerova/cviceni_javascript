//vybrání radiobuttnonů
const horske = document.getElementById("horske");
const detske = document.getElementById("detske");
const silnicni = document.getElementById("silnicni");
const gravel = document.getElementById("gravel");
//vybrání inputů u radion buttonů
const pocet_horske = document.getElementById("hks");
const pocet_detske = document.getElementById("dks");
const pocet_silnicni = document.getElementById("sks");
const pocet_gravel = document.getElementById("gks");
//vybrání selectu
const poc_dnu = document.getElementById("pocet-dnu");
//vybrání radiobuttonů
const cyklonosic1 = document.getElementById("cs");
const cyklonosic2 = document.getElementById("ctz");
const cyklonosic3 = document.getElementById("nc");
//vybrání buttonů a inputů pro výpočet
const btnSuma = document.getElementById("suma");
const vysledek = document.getElementById("vysledek");

const rozpocet = document.getElementById("rozpocet");
const btnOdecet = document.getElementById("odecet");
const projde = document.getElementById("prosel")

const email = document.getElementById("email")
const btnOdeslat = document.getElementById("odeslat");
const zavinac = document.getElementById("zavinac")

btnSuma.addEventListener("click", function () {
  let sum = 0;
  //počítání kol
  if (
    horske.checked == false &&
    detske.checked == false &&
    silnicni.checked == false &&
    gravel.checked == false
  ) { vysledek.value="Nebylo vybráno kolo!"
  } else {
    if (horske.checked == true) {
      sum = sum + Number(pocet_horske.value) * 500;
    }
    if (detske.checked == true) {
      sum = sum + Number(pocet_detske.value) * 200;
    }
    if (silnicni.checked == true) {
      sum = sum + Number(pocet_silnicni.value) * 1500;
    }
    if (gravel.checked == true) {
      sum = sum + Number(pocet_gravel.value) * 2500;
    }
  }

  //připočítání dnů
  if (poc_dnu.value=="1") {
      sum=sum*5
  }else if(poc_dnu.value=="2"){
      sum=sum*7
  }else if(poc_dnu.value=="3"){
      sum=sum*14
  }else{
      sum=sum*30
  }

  //připočítání cyklonosičů
  if (cyklonosic1.checked == true) {
    sum = sum * 1.05;
    vysledek.value = sum;
  } else if (cyklonosic2.checked == true) {
    sum = sum * 1.1;
    vysledek.value = sum;
  } else if (cyklonosic3.checked == true) {
    vysledek.value = sum;
  }
});

btnOdecet.addEventListener("click", function () {
  let rozdil=0;
    rozdil=rozpocet.value-vysledek.value
    if(rozdil>0){
        projde.textContent="Projde"
    }else{
        projde.textContent="Neprojde"
    }
});

btnOdeslat.addEventListener("click", function () {
  if(email.value.includes("@")){
      zavinac.textContent="Email byl odeslán"

  }else{

    zavinac.textContent="V emailu chybí zavináč"

  }

});

