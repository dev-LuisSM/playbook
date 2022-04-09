const Logger = require('./logger')

// Crea objeto e invocación del método
const dbLogger = new Logger('DB')
dbLogger.info('This is an informational message')

// Creación de otro objeto
const accesLogger = new Logger('ACCESS')
accesLogger.verbose('This is a verbose message')