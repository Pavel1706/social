// // function pum(a,b){
// //     let k = a.toString().split('');
// //     console.log(k)
// //     let c = k.map(Number);
// //     console.log(c)
// //     let d = b.toString().split('');
// //     let e = d.map(Number);
// //     console.log(c,e);
// //
// //     console.log(j)
// //     for( let i = 0; i < a.length;i++){
// //
// //     }
// // }
// // console.log(pum(19,59));
//
// function nonsense(str) {
//    str = str.split('');
//    newstr = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '0') {
//           str[i]= 'a'
//         }
//         if  ( str[i] === '1'){
//         str[i]='e'
//         }
//        if  (str[i] === '2'){
//            str[i]='i'
//         }
//         if (str[i] === '3'){
//            str[i]='o'
//         }
//         if (str[i] === '4') {
//         str[i]='u'
//         }
//         newstr +=str[i];
//
//
//     }
//
//     return newstr;
//
// }
//
// console.log(nonsense('d2n3S04Rs'));
//"homepage": "http://Pavel1706.github.io/react-app",
//"predeploy": "npm run build",
//    "deploy": "gn-pages -d build",
// function hasUniqueChars(str){
//     let set = str.split('');
//     let newSet = new Set(set);
//     console.log(set)
//     console.log(set.length)
//     console.log(newSet.size)
//     console.log(newSet)
//     if( str.length == newSet.size){
//         return true;
//     }
//     return false;
//
// }
// // console.log(hasUniqueChars("  NaA"))
// let t = 'F'.charCodeAt();
// console.log(t);
function translateDate(dateStr){
    let set = dateStr.split('');
    let b = [];
    let c = [];
    for ( let i = 0; i < set.length; i++){
            if(set[i].charCodeAt()== 45 ){
            continue;
            }
        b.push(set[i].charCodeAt()-50);
            console.log(b)
    }



    //
    // }
console.log(b)
        // b.splice(2, 0, 0);

    let a = b.join()
    let chislo = a.replace(/\,/gi, '');
console.log(chislo)

    let chislo2 =chislo.match(/\d{4}/g).join('-');
    console.log(chislo2);
// let chislo3 = chislo2.match(/\d{7}/g).join('-');
    // let chislo3 = chislo.toString().replace(chislo2, '-');
        // chislo.replace(/^\d{4}/gi, /\d{4}'-'/);



}
translateDate('FC-3-G')
// (/\.$/.test(d) ? d : (d + '.'));
//
//
// const regepx = new RegExp('shablon', 'flagi')
// const regepx = new RegExp("shablon", 'flagi')
// const regepx = new RegExp(`shablon ${1+2} shablon`, 'flagi')
// const regepx = new RegExp("shablon\\nshablon", 'flagi')
//
// const regexp = /shablon/flagi
// const regexp = /shablon\/shablon/flagi
// const regexp =/Pavel/
// const str = 'Hello, my name is Pavel. I`m 23.'
// const regexp =/Pavel./
// const str = 'Hello, my name is Pavel! I`m 23.'

// const regexp =/Pavel\./
// const str = 'Hello, my name is Pavel! I`m 23.'
//  \d - number [0-9]
//   \D - letter
//   \s - space[ \t\n\v\f\r]
//    \S not space
//    \w - simvolnii klass ('_') english or number
//    \W - not word
//    [abc] - nabor
//    [^abc] - iskluchaushii nabor
//    [a-c] - diaposon vnytri nabora
//    match - metod String dlya poiska sovpadenii

// const regexp =/\D\D/
// const str = 'Hello, my name is Pavel! I`m 23.'

// const regexp =/\d\d\s/
// const str = 'Hello, I`m Pavel! are you 20? I`m 23 years old.'

// const regexp =/\d\d\S/
// const str = 'Hello, I`m Pavel! are you 20? I`m 23 years old.'

// const regexp =/\s\w\w\s/
// const str = 'Hello, I`m Pavel! are you 20? I`m 23 years old.'

// const regexp =/\w\w\w\w/
// const str = 'Hello, I`m Павел! are you 20? I`m 23 years old.'

// const regexp =/\W/
// const str = 'В лодаш используй_.'

// const regexp =/[^ЮИ]ра/
// const str = 'Это Ира и Юра сказали Ура.'

// const regexp =/[в-д]/
// const str = 'абвгдежзийклмнопрстуфчцшщэюя.'

// const regexp =/[^а-в]/
// const str = 'абвгдежзийклмнопрстуфчцшщэюя.'

// const regexp =/[^а-вг-е]/
// const str = 'абвгдежзийклмнопрстуфчцшщэюя.'
//
// const regexp =/[^а-я]/
// const str = 'абвгдеёжзийклмнопрстуфчцшщэюя'
//
// console.log('а'.charCodeAt(),
// 'я'.charCodeAt(),
// 'ё'.charCodeAt()
// )




// const result = str.match(regexp)
// console.log(result)

// . any simvol except \n



// function canIMeasurea(a,b,c) {
//
//     let d = b - a;
//     let f = a - d;
//     if((b-a) == c){
//         return true;
//     }
//     if ((a + f) == c) {
//         return true;
//     }
//     if ((a+f) != c){
//         return false;
//     }
//
// }
// console.log(canIMeasurea(10,20,15))


// . - luboi odinochnii simvol;
// [] - luboi iz nih, diapazoni; ([0-9]   [0-9].[0-9])
// $ - konec stroki
// ^ nachalo stroki
// \ ekronirovanie
// [^sw].. kotorie ne vkl. dannie simvoli
// ^[^b] stroka kotoray nachinaetsya ne s 'b'
// \d lubyu cifry
// \D vse chto ygodno,  krome cifr
// \s probeli
// \S vse krome probelov
// \w bykva
// \W vse krome bykv
// \b granica slova
// \B - vse krome granic slova
//
// kvantifikaciya
// n{4} - iskat' n podryad 4 raza
// n{4,6} - iskat' ot 4 do 6 raz
// * ot nylya i vishe
// + ot 1 i vishe
// ? nol` ili 1 raz

// function nonsense(str) {
//     let a = str;
//     console.log(a.replace(/.i /gi, 'I '))
//     console.log(a.replace(/trex|raptor/gi, ''));
//     console.log(a.replace(/$/gi,'.'))
//     let c = (/[a-z]/g, function(l){
//         return l.toLowerCase(); } );
//
//     let b = a.replace(/( |^)[a-z]/g, function(u){
//         return u.toUpperCase();   } );
//     console.log(b);
//     if(str.charAt(str.length - 1) != '.') {
//         str = str + '.';
//     }
//     let d = b.replace(/trex|raptor/gi, '');
//     let d2 = (/\.$/.test(d) ? d : (d + '.'));
//
//     let d3 = d2.replace(/[a-z]/gi, function(l){
//         return l.toLowerCase(); } )
//     let d4 = d3.replace(/(^)[a-z]/gi, function(u){
//         return u.toUpperCase();   } )
//     let d5 = d4.replace(/i /g, 'I ');
//     return d5;
//
//     const nonsense = (str) => str.toLowerCase().replace(/0|1|2|3|4/g, x=>'aeiou'[x])
//         .replace(/trex|\.|raptor|/g, '').replace(/^.| i /g, x=>x.toUpperCase()) + '.'
// }
// nonsense('h1Ll3 Wtrex3raptorRLD');


// function translateDate(dateStr){
//     let set = dateStr.split('');
//     console.log(set)
//     let b = [];
//     for ( let i = 0; i < set.length; i++){
//         if(set[i].charCodeAt()== 45 ){
//             continue
//         }
//         b.push(set[i].charCodeAt()-50);
//         let a = b.join('0');
//         return a;
//     }
//     // console.log(b)
//
// }
// console.log(translateDate('FC-3-G'))


