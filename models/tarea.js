const { v4: uuidv4 } = require('uuid');

class Tarea {
    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc,completadoEn = null) {
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = completadoEn; 
    }
}

module.exports = Tarea;