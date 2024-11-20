/*
EXAMEN

Se desea llevar un control de los estudiantes que
asisten a presentar un examen. Se tiene por cada
participante: nombre, cédula, sexo y nota. Se requiere
de un programa que permita el registro de esta
información, conociendo al principio de la ejecución el
valor del examen y el mínimo aprobatorio.

nombre  cedula   sexo  nota
Luis     1111     M     12
Carla    2222     F     16.5
Mery     3333     F     8.5

Porcentaje de estudiantes aprobados: 66.66%
Porcentaje de estudiantes reprobados: 33.33%
Estudiante con mejor nota: Carla
Nota promedio: 12.33
Chicas por encima de la nota promedio: Carla
*/

import Cl_GestionEstudiante from "./Cl_GestionEstudiante.js";
import Cl_Estudiante from "./Cl_Estudiante.js";
import Dt_estudiantes from "./Dt_estudiantes.js";

const gestionEstudiante = new Cl_GestionEstudiante();
gestionEstudiante.estudiantes = [];
Dt_estudiantes.forEach(estudiante => {
    gestionEstudiante.agregarEstudiante(new Cl_Estudiante(estudiante.nombre, estudiante.cedula, estudiante.sexo, estudiante.nota));
});
let listarEstudiantes = (gestionEstudiante) => {
    let estudiantes = gestionEstudiante.estudiantes;
    let salidaTmp = `
    <br><table>
        <tr>
            <th>Nombre</th>
            <th>Cédula</th>
            <th>Sexo</th>
            <th>Nota</th>
        </tr>`;
    estudiantes.forEach((estudiante) => {
        salidaTmp += `
        <tr>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.cedula}</td>
            <td>${estudiante.sexo}</td>
            <td>${estudiante.nota}</td>
        </tr>`
    });
    salidaTmp += '</table>';
    Salida2.innerHTML = salidaTmp;	
};
let eliminarEstudiante = (gestionEstudiante) => {
    let cedula = prompt('Ingrese la cedula del estudiante:');
    if(gestionEstudiante.eliminarEstudiante(cedula))
        alert('Estudiante eliminado');
    else
        alert('Estudiante no encontrado');
    };   
let agregarEstudiante = (gestionEstudiante) => {
    let nombre = prompt('Ingrese el nombre del estudiante:');
    let cedula = prompt('Ingrese la cedula del estudiante:');
    let sexo = prompt('Ingrese el sexo del estudiante:');
    let nota = prompt('Ingrese la nota del estudiante:');
    gestionEstudiante.agregarEstudiante(new Cl_Estudiante(nombre, cedula, sexo, nota));
    alert('Estudiante agregado');
}
let promedio = (gestionEstudiante, salida) => {
    let promedio = gestionEstudiante.promedioNotas();
    salida.innerHTML = `<br>El promedio es: ${promedio.toFixed(2)}`;
}
let chicasEncimaPromedio = (gestionEstudiante, salida) => {
        let chicasEncimaPromedio = gestionEstudiante.chicasEncimaPromedio();
        salida.innerHTML = `<br>Las chicas por encima del promedio son: ${chicasEncimaPromedio.join(', ')}`;
}
let modificarEstudiante = (gestionEstudiante) => {
    let cedula = prompt('Ingrese la cedula del estudiante:');   
    let nuevosDatos = {};
    nuevosDatos.nombre = prompt('Ingrese el nuevo nombre:');
    nuevosDatos.cedula = prompt('Ingrese la nueva cedula:');
    nuevosDatos.sexo = prompt('Ingrese el nuevo sexo:');
    nuevosDatos.nota = prompt('Ingrese la nueva nota:');
    if(gestionEstudiante.modificarEstudiante(cedula, nuevosDatos)) {
        alert('Estudiante modificado');
    } else {
        alert('Estudiante no encontrado');
    }
}
let aprobados = (gestionEstudiante, salida) => {
    let aprobados = gestionEstudiante.porcentajeAprobados();
    salida.innerHTML = `<br>El porcentaje de aprobados es: ${aprobados.toFixed(2)}%`;
}
let reprobados = (gestionEstudiante, salida) => {
    let reprobados = gestionEstudiante.porcentajeReprobados();
    salida.innerHTML = `<br>El porcentaje de reprobados es: ${reprobados.toFixed(2)}%`;
}
let mejorNota = (gestionEstudiante, salida) => {
    let mejorNota = gestionEstudiante.mejorNota();
    salida.innerHTML = `<br>El estudiante con mejor nota es: ${mejorNota}`;
}
let Salida1 = document.getElementById("Salida1");
let Salida2 = document.getElementById("Salida2");
let opciones = document.getElementById("opciones"); 

Salida1.innerHTML = `<br>Seleccione una opcion:
    <br>1= Eliminar estudiante
    <br>2= Agregar estudiante
    <br>3= Modificar estudiante
    <br>4= Promedio
    <br>5= Chicas por encima del promedio
    <br>6= Porcentaje de aprobados
    <br>7= Porcentaje de reprobados
    <br>8= Estudiante con mejor nota
    <br>9= Listar estudiantes`;

    opciones.onclick = () => {
        let opcion = +prompt("Seleccione su opcion:");
        switch (opcion) {
            case 1:
                eliminarEstudiante(gestionEstudiante);
                break;
            case 2:
                agregarEstudiante(gestionEstudiante);
                break;
            case 3:
                modificarEstudiante(gestionEstudiante);
                break;
            case 4:
                promedio(gestionEstudiante, Salida2);
                break;
            case 5:
                chicasEncimaPromedio(gestionEstudiante, Salida2);
                break;
            case 6:
                aprobados(gestionEstudiante, Salida2);
                break;
            case 7:
                reprobados(gestionEstudiante, Salida2);
                break;
            case 8:
                mejorNota(gestionEstudiante, Salida2);
                break;
            case 9:
                listarEstudiantes(gestionEstudiante, Salida2);
                break;
        }
}

