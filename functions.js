// -------------------------------  BEGINNER

/* Opdracht 1 */
// Schrijf een functie die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// "Nova" geeft "Hoi Nova!"
// "Nick" geeft "Hoi Nick!"

function groet (naam){
    console.log("hoi " + naam);
}
groet ("Nova");
groet("Nick");

function greeting(name){
    let greeting = "hoi " + name;
    return name;
}

let emailtext = greeting("Sjaak ") + "wil jij ook lid worden?"
console.log(emailtext);

const emailtext2 = greeting("Keanu ") + "wil jij ook lid worden?"
console.log(emailtext2);

/* Opdracht 2 */
// Schrijf een functie die een hoeveelheid minuten verwacht (als een getal) en teruggeeft
// hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// 1 geeft 60
// 3 geeft 180
// 23 geeft 1840

function time(minuten){
    const time = minuten * 60;
    return time;
}

const time1 = time(1);
console.log(time1);

const time2 = time(3);
console.log(time2);

const time3 = time(23)
console.log(time3);


/* Opdracht 3 */
// Schrijf een functie die een cijfer verwacht en teruggeeft of het cijfer groter is
// dan nul
// ---- Verwachte uitkomsten:
// -3 geeft false
// 0 geeft false
// 300 geeft true

function biggerThenNull(number1){
       const uitkomst = number1 > 0;
       return uitkomst;
}
const uitkomst1 = biggerThenNull(-3);
console.log(uitkomst1);

const uitkomst2 = biggerThenNull(0);
console.log(uitkomst2);

const uitkomst3 = biggerThenNull(300);
console.log(uitkomst3);

console.log("=====================");
/* Opdracht 4 */
// Schrijf een functie die twee getallen verwacht en teruggeeft of ze, opgetelt, gróter zijn dan 100.
// ---- Verwachte uitkomsten:
// 1 en 23 geeft false
// 8 en 92 geeft false
// 89 en 14 geeft true

function oefeningVier (getal1, getal2){
    const addNumbers = getal1 + getal2 > 100;
    return addNumbers;
}
const output1 = oefeningVier(1,23);
const output2 = oefeningVier(8, 92);
const output3 = oefeningVier(89, 14);

console.log(output1, output2, output3);


console.log("======================")

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht. Hoe lang die array is, weet je niet van tevoren,
// dus het moet werken voor alle lengtes. Zelfs voor een lengte van 100 (dus niet één voor één uitschrijven!)
// De functie geeft alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken zoals .concat()
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c", "d", "e"] geeft "abcde"

// [] - maak een functie aan
// [] - roep de functie aan
// [] - definieer de parameters
// [] - geef argumenten mee
// [] - tel de getallen op operators
// [] - laat de functie een waarde returnen
// [] - logggen

function joinstring (stringArray) {
    let outputString = "";
    for (let index = 0; index < stringArray.length; index++) ; {
        const string = stringArray.length;
        outputString = outputString + string;
    }

    return outputString;
}

const outputAbra = joinstring(["abra", "cadabra"]);
console.log(outputAbra);




// -------------------------------  INTERMEDIATE

/* Opdracht 6 */
// Schrijf een functie die een woord verwacht en dit omgedraait teruggeeft. Je kunt dit zowel handmatig
// als met ingebouwde string- en array methoden doen. Probeer beide manieren uit te werken als je
// graag wil oefenen!
// ---- Verwachte uitkomsten:
// "koekje" geeft "ejkeok"
// "vrienden" geeft "nedneirv"

    function reverseString1 (string){
        const splitString = string.split("")
        const reverseString = splitString.reverse();
        const joinArray = reverseString.join("");

    }
    reverseString1("koekje");

    // OF

function reverseString2(string){
    let newString = "";

    for (let i = string.length -1; i >= 0; i--) {
   newString = newString + string[i];
    }

    return newString;
}
const output = reverseString2("koekje");
console.log(output);





/* Opdracht 7 */
// Schrijf een functie die een woord verwacht checkt of dit woord een palindroom is. Een palindroom is een
// spiegelwoord: het is hetzelfde zowel vooruit als achterstevoren. Als dit zo is, geeft de functie true terug,
// zo niet, dan false.
// ---- Verwachte uitkomsten:
// "lepel" geeft true
// "madam" geeft true
// "vrienden" geeft false



/* Opdracht 8 */
// Schrijf een functie die een string en een letter verwacht. De functie telt hoe vaak die letter voorkomt in
// de string en geeft dit terug. Je mag hiervoor geen string- of array-methoden gebruiken.
// ---- Verwachte uitkomsten:
// "Hans en marietje lopen naar de supermarkt" en "e" geeft 6
// "Hans is zijn mondkapje vergeten" en "a" geeft 2



// ------------------------------- ADVANCED (optionele bonusopdrachten)

/* Opdracht 9 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Als de parameter n wordt meegegeven, worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 4]) geeft 4
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]



/* Opdracht 10 */
// Schrijf een functie die een array van getallen verwacht. De functie geeft het hoogste
// getal in de array terug. Je mag hier geen array-object methoden voor gebruiken zoals .max()
// ---- Verwachte uitkomsten:
// [3, 6, 9, 17, 4, 6, 25] geeft 25
// [46, 65, 34, 204, 190, 89] geeft 204



/* Opdracht 11 */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".
// ---- Verwachte uitkomst:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.