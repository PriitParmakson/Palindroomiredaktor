'use strict';

/*
  Samatekstiredaktor (Editor for Palindromic Texts), Priit Parmakson, 2017. MIT Licence
*/

var logimistase = 1; 
/*
  Mida suurem, seda rohkem teavet konsoolile kuvatakse
  0
    - ei kuvata midagi
  1
    - seatud filter
    - salvestatud tekst
    - redaktoris kuvamiseks moodustatatud tekst
  2 
    - kasutaja klahvivajutus (KEYDOWN)
    - kasutaja sisestatud tärk (KEYPRESS)
    - tuvastatud kursori (caret) positsioon 
*/

// Globaalsed muutujad
/* Väljas #Tekst oleva teksti mudel */
var t = '|';
var kuvaKesktahtYhekordselt = false;

/* Hoiab kõiki allalaetud tekste
  Struktuur: { Tekst: <string>, Draft: <boolean> }
*/
var tekstid; // Sisseloetud tekstid

var autenditud = false; // Kas kasutaja on Google Sign-In teenuse abil autenditud
/* Google Sign-In funktsioon, millega saab salvestamisel
pärida ID token-i */
var kasutaja;

/* Puhver. Hoiab tekste, mida saab roteerida tekstisisestusalasse.
  Massiiv, mille elementideks on kirjed
   {
     tekst: <siseesituses tekst>,
     kuvaKesktahtYhekordselt: <boolean>  
   }
*/
var puhver = [];

function alusta() {
  /*
    Peaprogramm. Mitmesugused algväärtustamised
  */

  // Initsialiseeri tooltip-id
  // $('[data-toggle="tooltip"]').tooltip();

  seaRedaktoriKasitlejad();
  seaTekstinupukasitlejad();
  seaSalvestuseKasitlejad();
  seaInfopaaniKasitlejad();
  seaTeatepaaniKasitlejad();
  seaTekstikoguKasitlejad();
  seaOigekirjakasitlejad();
  seaSamatekstidTekstistKasitlejad();
  seaSonastikuKasitlejad();
  seaSeotudTekstiKasitlejad();
  seaPuhvriKasitlejad();

  // Algustekst (kursor)
  kuvaTekst();
  $('#Tekst').focus();

  laeTekstid(); // Lae tekstid alla
}
