/*const ctx = document.querySelectorAll('.myChart')

const labels = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abriu',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

const data = {
  labels, 
  datasets: [{
    data: [211, 360, 189, 400, 100, 900, 300, 654, 50, 200, 500, 950],
    label: "Faturamento / Meses"
  }]
}

const config = {
  type: 'line',
  data: data,
  options: {responsive: true}
};

const myChart = new Chart(ctx, config)



//Estatistica 2


const ctx2 = document.querySelectorAll('.myChart2')

const labels2 = [
  'Janeir',
  'Fevereir',
  'Març',
  'Abri',
  'Mai',
  'Junh',
  'Julh',
  'Agost',
  'Setembr',
  'Outubr',
  'Novembr',
  'Dezembr'
]

const data2 = {
  labels2, 
  datasets: [{
    data2: [211, 360, 189, 400, 100, 900, 300, 654, 50, 200, 500],
    label2: "Faturamento / Meses"
  }]
}

const config2 = {
  type: 'line',
  data: data,
  options: {responsive: true}
};

const myChart2 = new Chart(ctx2, config2)*/

$(function() {
  var optionsBar = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  var dataBar = {
    labels: [2015, 2016, 2017],
    datasets: [{
      label: "CPF's Enviados",
      backgroundColor: "rgba(0,51,90,0.8)",
      borderColor: "rgba(0,51,90,0.9)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(0,51,90,0.9)",
      hoverBorderColor: "rgba(0,51,90,1)",
      data: [555, 666, 777]
    }, {
      label: "Propostas Finalizadas",
      backgroundColor: "rgba(0,130,229,0.8)",
      borderColor: "rgba(0,130,229,0.9)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(0,130,229,0.9)",
      hoverBorderColor: "rgba(0,130,229,1)",
      data: [444, 555, 666]
    }, {
      label: "Propostas Aprovadas",
      backgroundColor: "rgba(43,139,74,0.8)",
      borderColor: "rgba(43,139,74,0.9)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(43,139,74,0.9)",
      hoverBorderColor: "rgba(43,139,74,1)",
      data: [333, 444, 555]
    }]
  };

  var optionsLine = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  var dataLine = {
    labels: ['2018', '2019', '2020'],
    datasets: [{
      label: "% Aprovação (Propostas Finalizadas PDV)",
      fill: false,
      backgroundColor: "rgba(255,108,0,0.7)",
      borderColor: "rgba(255,108,0,1)",
      borderWidth: 4,
      data: [44, 55, 66]
    }, {
      label: "% Aproveitamento (CPF's Únicos PDV)",
      fill: false,
      backgroundColor: "rgba(255,246,0,0.6)",
      borderColor: "rgba(255,246,0,1)",
      borderWidth: 4,
      data: [33, 44, 55]
    }]
  };

  var options1 = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  var data1 = {
    labels: ['2015', '2016', '2017'],
    datasets: [{
      label: "% IPP 1ª COMPRA",
      fill: false,
      backgroundColor: "rgba(33, 107, 57,0.7)",
      borderColor: "rgba(33, 107, 57,1)",
      borderWidth: 4,
      data: [33, 22, 99]
    }, {
      label: "% IPP JUROS + ALÇADA",
      fill: false,
      backgroundColor: "rgba(23, 81, 125,0.7)",
      borderColor: "rgba(23, 81, 125,1)",
      borderWidth: 4,
      data: [78, 45, 96]
    }, {
      label: "% IPP SEGUROS",
      fill: false,
      backgroundColor: "rgba(255,0,255,0.7)",
      borderColor: "rgba(255,0,255,1)",
      borderWidth: 4,
      data: [36, 19, 55]
    }]
  };


  function gerarGraficos() {
    var ctx = document.getElementById("chart-one").getContext("2d");
    var BarChart2 = new Chart(ctx, {
      type: 'bar',
      data: dataBar,
      options: optionsBar
    });

    var ctx2 = document.getElementById("chart-two").getContext("2d");
    var LineChart = new Chart(ctx2, {
      type: 'line',
      data: dataLine,
      options: optionsLine
    });

    var ctx3 = document.getElementById("chart-three").getContext("2d");
    var LineChart2 = new Chart(ctx3, {
      type: 'line',
      data: data1,
      options: options1
    });
  }

  gerarGraficos();
});
