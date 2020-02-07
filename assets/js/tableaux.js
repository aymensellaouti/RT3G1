// var tab1=[1,2,3];
// var tab2 = [4,5,6];
// var tab3 = tab1.concat(tab2);
// console.log(tab1);
// console.log(tab3);
// tab3.forEach((valeur, indice) => {
//     console.log(valeur+ ' : ' + indice);
// });
tab4 = [2,14,11,21,1,43,3,41];
function compare(a,b) {
    return a - b;
}
tab4 = tab4.sort(compare);
console.log(tab4);

function showObject(objet) {
    for (key in objet) {
        console.log(`
            ${key} : ${objet[key]}
        `)
    }
}
