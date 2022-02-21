

$(function() {
  var optionsBar = {
    maintainAspectRatio: false,
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
    labels: ['01-2020', '02-2020', '03-2020', '04-2020', '05-2020', '06-2020', '01-2021', '02-2021', '03-2021', '04-2021', '05-2021', '06-2021'],
    datasets: [{
      label: "Vendas / Ano",
      backgroundColor:['rgba(7, 114, 255, 1.5)'],
      borderColor: "rgba(0,51,90,1.5)",
      borderWidth: 2,
      borderColor: [
        'rgba(7, 114, 255, 0.3)'
      ],
      data: [100, 150, 300, 320, 400, 300, 520, 800, 50, 189, 456, 900]
      
    }]
  };

 

  var optionsLine = {
    maintainAspectRatio: false,
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
    labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
    datasets: [{
      label: 'Vendas / Semanal',
     fill: false,
     backgroundColor:['rgba(7, 114, 255, 1.5)'],
     borderColor: "rgba(0,51,90,0.3)",
      borderWidth: 2,
      data: [200, 100, 350, 400, 60, 650, 700]
    }]
  };

  var options1 = {
    maintainAspectRatio: false,
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
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Maio', 'Abriu', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [{
      label: "Vendas / Mensal",
      fill: false,
      backgroundColor:['rgba(7, 114, 255, 1.5)'],
      borderColor: "rgba(0,51,90,0.3)",
      borderWidth: 2,
      data: [256, 122, 874, 550, 365, 987, 145, 256, 745, 235, 125, 990]
    }]
  };


  function gerarGraficos() {
    var ctx = document.getElementById("myChart").getContext("2d");
    var BarChart2 = new Chart(ctx, {
      type: 'line',
      data: dataBar,
      options: optionsBar
    });

    var ctx2 = document.getElementById("myChart2").getContext("2d");
    var LineChart = new Chart(ctx2, {
      type: 'line',
      data: dataLine,
      options: optionsLine
    });

    var ctx3 = document.getElementById("myChart3").getContext("2d");
    var LineChart2 = new Chart(ctx3, {
      type: 'line',
      data: data1,
      options: options1
    });
  }

  gerarGraficos();
});



const menuMobile = document.querySelector('.mobile-menu')
const navList = document.querySelector('.navList')


menuMobile.addEventListener("click", function () {
  menuMobile.classList.toggle('show')
  navList.classList.toggle('show')
})


const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    navList.classList.remove('show')
    menuMobile.classList.remove('show')
  })
}









