
/**
 * _ Listado:
 *          { uuid-123712-123123-2: {id:12, desc:asd,completadoEn:92231 } }
 */
require('colors');
const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    get listadoArr() {

        const listado = [];
        Object.keys(this._listado).forEach( key => {
            listado.push(this._listado[key])
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray( tareas = [] ){

        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;

        })
    }


    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    borrarTarea(id =''){
        if(this._listado[id])
            delete this._listado[id];
    }

    listadoCompleto() {
        
        this.listadoArr.forEach( (tarea,index) => {
            const indice = `${++index}`.green;
            const { desc , completadoEn } = tarea;
            const estado = ( completadoEn ) ? 'Completado'.green : 'Pendiente'.red;
            console.log(`${ indice }. ${desc} :: ${estado}`);
        })
    }

    listarPendientesCompletadas( completadas = true ) {
        console.log();
        let contador = 0;
        this.listadoArr.forEach( (tarea) => {
            
            const { desc , completadoEn } = tarea;
            const estado = ( completadoEn ) ? 'Completado'.green : 'Pendiente'.red;
            if(completadas){
                
                if(completadoEn) {
                    contador += 1;
                    console.log(`${ contador.toString().green }. ${desc} :: ${completadoEn.green}`);
                }

            }else {
                if(!completadoEn) {
                    contador += 1;
                    console.log(`${ contador.toString().green }. ${desc} :: ${estado}`);
                }
            }
            


        })
    }

    toggleCompletadas ( ids = []){
        ids.forEach( id => {
            const tarea = this._listado[id];
            if( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach( tarea => {
            if ( !ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }
}

module.exports = Tareas;