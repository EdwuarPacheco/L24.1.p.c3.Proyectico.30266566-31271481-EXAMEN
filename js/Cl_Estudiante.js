export default class Cl_Estudiante {
    constructor (nombre, cedula, sexo, nota) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.sexo = sexo;
        this.nota = nota;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set cedula(cedula) {
        this._cedula = +cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }
    set nota(nota) {
        this._nota = +nota;
    }
    get nota() {
        return this._nota;
    }
};
  