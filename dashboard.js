// dashboard.js
document.addEventListener('DOMContentLoaded', function () {
    // Datos de ejemplo para el gráfico de participación
    const participationData = {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Participación en Grupos',
            data: [65, 59, 80, 81],
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }]
    };

    // Configuración del gráfico
    const participationChartConfig = {
        type: 'line',
        data: participationData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Renderizar el gráfico
    const participationChart = new Chart(
        document.getElementById('participation-chart'),
        participationChartConfig
    );

    // Simular carga de datos del usuario
    const userName = localStorage.getItem('userName') || 'Usuario';
    document.getElementById('user-name').textContent = userName;
});