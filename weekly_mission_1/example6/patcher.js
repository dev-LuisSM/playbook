// Tener en cuenta:
// - require('./logger') dará el objeto
// - require('./logger').Logger regresará la clase

// Se están agregando una función más el objeto instanciado, no a la clase

require('./logger').customMessage = function () {
    console.log('This is a new functionality')
}