"use client"
import { useEffect } from "react";
import Chart from "chart.js/auto";


export default function Home() {
  useEffect(() => {
    const labels = [1,2,3]
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    const config = {
      type: 'line',
      data: data,
    };

    // Obtén la referencia al canvas
    const ctx = document.getElementById("chart").getContext("2d");

    // Crea una instancia de Chart
    const chart = new Chart(ctx, config);

    // Limpia el gráfico cuando el componente se desmonte
    return () => {
      chart.destroy();
    };
  }, []); // Ejecuta este efecto solo una vez, similar a componentDidMount

  return (
    <main className="flex min-h-screen flex-row justify-between">
      <div className="bg-white flex-grow text-black">
        {/* Coloca el canvas con el ID "chart" */}
        <canvas id="chart"></canvas>
      </div>
      <div className="bg-gray-500 w-1/3">world</div>
    </main>
  );
}
