//HELPERS
function esPar(numerito) {
    return numerito % 2 === 0;
};

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// calculadora de mediana

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediaNa = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediaNa;


    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}
//Mediana general
const salariosCol = colombia.map((personita) => {
    return personita.salary;
});

const salariosColSorted = salariosCol.sort((a, b) => {
    return a - b;
});

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosTopCol10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);
const medianaTop10Col = medianaSalarios(salariosTopCol10);


console.log({
    medianaGeneralCol,
    medianaTop10Col
});