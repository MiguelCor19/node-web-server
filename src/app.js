//const { envs } = require('./config/env')
import { envs } from './config/env.js'
import { StartServer} from'./server/server.js'


//Funcion agnostica auto convocada
//agnostica por que no tiene nombre
//autoconvocada por que la ejecucion con los parentesis

const main = () => {
    StartServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

(async () => {
    main()
})()


