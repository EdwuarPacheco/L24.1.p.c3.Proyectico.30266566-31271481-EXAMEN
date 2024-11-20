import Cl_Estudiante from "./Cl_Estudiante.js";
import Dt_estudiantes from "./Dt_estudiantes.js";
import Dt_examen from "./Dt_examen.js";

export default class Cl_GestionEstudiante{
    constructor(){
        this.estudiantes = Dt_estudiantes.map((estudiante) => new Cl_Estudiante(estudiante.nombre, estudiante.cedula, estudiante.sexo, estudiante.nota));
        this.examen = Dt_examen;
    }
    agregarEstudiante(estudiante){
        this.estudiantes.push(estudiante);
    }
    eliminarEstudiante(cedula){
        let indexEstudiante = -1;
        for (let i = 0; i < this.estudiantes.length; i++){
            if(this.estudiantes[i].cedula == cedula) {
                indexEstudiante = i
            }
        }
        if (indexEstudiante !== -1) {
            this.estudiantes.splice(indexEstudiante, 1)
        }
        return indexEstudiante !== -1;
    }
    porcentajeAprobados(){
        const aprobados = this.estudiantes.filter((estudiante) => estudiante.nota >= this.examen.minAprueba).length;
        return (aprobados / this.estudiantes.length) * 100;
    }
    porcentajeReprobados(){
        const reprobados = this.estudiantes.filter((estudiante) => estudiante.nota < this.examen.minAprueba).length;
        return (reprobados / this.estudiantes.length) * 100;
    }
    mejorNota(){
        return this.estudiantes.reduce((mayor, estudiante) => mayor.nota > estudiante.nota ? mayor : estudiante).nombre;
    }
    promedioNotas(){
        const totalNotas = this.estudiantes.reduce((total, estudiante) => total + estudiante.nota, 0);
        return totalNotas / this.estudiantes.length;
    }
    chicasEncimaPromedio(){
        const promedio = this.promedioNotas();
        return this.estudiantes.filter((estudiante) => estudiante.sexo == 'F' && estudiante.nota > promedio).map((estudiante) => estudiante.nombre);
    }
    modificarEstudiante(cedula, nuevosDatos){
        const estudiante = this.estudiantes.find((estudiante) => estudiante.cedula == cedula);
        if(estudiante){
            estudiante.nombre = nuevosDatos.nombre || estudiante.nombre;
            estudiante.cedula = nuevosDatos.cedula || estudiante.cedula;
            estudiante.sexo = nuevosDatos.sexo || estudiante.sexo;
            estudiante.nota = nuevosDatos.nota || estudiante.nota;
            return true;
        } else {
            return false;
        }
    }
}
