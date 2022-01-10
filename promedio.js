function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


//Mediana
function mediana(lista) {

    const listaOrdenada = lista.sort(function(a, b) { return a - b; });
    const index = parseInt(listaOrdenada.length / 2);

    return listaOrdenada.length % 2 === 0 ? (listaOrdenada[index] + listaOrdenada[index - 1]) / 2 : listaOrdenada[index];
}


//Moda
const lista = [
    1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1
];

const repetidos = lista.reduce((p, c) => {
    p[c] = (p[c] || 0) + 1;
    return p;
}, {});

console.log(repetidos);