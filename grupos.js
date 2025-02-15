// grupos.js
document.addEventListener('DOMContentLoaded', function () {
    const materiasSelect = document.getElementById('materias');
    const gruposDisponibles = document.getElementById('grupos-disponibles');
    const crearGrupoForm = document.getElementById('crear-grupo-form');

    // Datos de ejemplo para grupos disponibles
    const gruposPorMateria = {
        matematicas: [
            { nombre: "Grupo de Álgebra", descripcion: "Estudio de álgebra lineal", horario: "Lunes 10:00 AM" },
            { nombre: "Grupo de Cálculo", descripcion: "Estudio de cálculo diferencial", horario: "Miércoles 2:00 PM" }
        ],
        fisica: [
            { nombre: "Grupo de Mecánica", descripcion: "Estudio de mecánica clásica", horario: "Martes 9:00 AM" }
        ],
        historia: [],
        literatura: []
    };

    // Mostrar grupos disponibles al seleccionar una materia
    materiasSelect.addEventListener('change', function () {
        const materiaSeleccionada = materiasSelect.value;
        if (materiaSeleccionada) {
            const grupos = gruposPorMateria[materiaSeleccionada];
            if (grupos.length > 0) {
                gruposDisponibles.innerHTML = grupos.map(grupo => `
                    <div class="grupo">
                        <h3>${grupo.nombre}</h3>
                        <p>${grupo.descripcion}</p>
                        <p><strong>Horario:</strong> ${grupo.horario}</p>
                        <button onclick="unirseAlGrupo('${grupo.nombre}')">Unirse</button>
                    </div>
                `).join('');
            } else {
                gruposDisponibles.innerHTML = "<p>No hay grupos disponibles para esta materia.</p>";
            }
        } else {
            gruposDisponibles.innerHTML = "<p>Selecciona una materia para ver los grupos disponibles.</p>";
        }
    });

    // Crear un nuevo grupo
    crearGrupoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const nombreGrupo = document.getElementById('nombre-grupo').value;
        const descripcionGrupo = document.getElementById('descripcion-grupo').value;
        const horarioGrupo = document.getElementById('horario-grupo').value;

        // Simular la creación del grupo
        const materiaSeleccionada = materiasSelect.value;
        if (materiaSeleccionada) {
            gruposPorMateria[materiaSeleccionada].push({
                nombre: nombreGrupo,
                descripcion: descripcionGrupo,
                horario: horarioGrupo
            });
            alert(`Grupo "${nombreGrupo}" creado exitosamente.`);
            crearGrupoForm.reset();
        } else {
            alert("Selecciona una materia antes de crear un grupo.");
        }
    });

    // Función para unirse a un grupo (simulada)
    window.unirseAlGrupo = function (nombreGrupo) {
        alert(`Te has unido al grupo "${nombreGrupo}".`);
    };
});