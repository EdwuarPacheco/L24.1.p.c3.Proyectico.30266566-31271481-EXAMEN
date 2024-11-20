export default class Cl_Examen {
    constructor (valor, minAprueba) {
        this.valor = valor;
        this.minAprueba = minAprueba;
        this.estudiantes = [];
    }
    set valor(valor){
        this._valor = +valor;
    }
    get valor(){
        return this._valor;
    }
    set minAprueba(minAprueba){
        this._minAprueba = +minAprueba;
    }
    get minAprueba(){
        return this._minAprueba;
    }
    agregarEstudiante(estudiante){
        this.estudiantes.push(estudiante);
    }
    mejorNota(){ 
    }
}