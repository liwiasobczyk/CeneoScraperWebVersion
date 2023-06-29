
fetch('/statistics')
  .then(response => response.json())
  .then(data => {    
    myFunction(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

function myFunction(data){
    pieGraph(data[0])
    bargraph(data[1])
    
}




function pieGraph(results){
    const ctx = document.getElementById('pie-graph');
  
    new Chart(ctx, {
        type: 'pie',
        data: {
        labels: [
            'rocommended',
            'not-recommended',
            'null'
        ],
        datasets: [{
          label: 'Recommendation',
          data: results,
          backgroundColor: [
          'rgb(2.7, 0, 89.8)',
          'rgb(83.5, 2.7, 2.7)',
          'rgb(255, 205, 86)'
          ],
          hoverOffset: 5,
          hoverBackgroundColor: [
            'rgb(1.6, 0, 60)',
            'rgb(49.8, 0, 0)',
            'rgb(213, 184, 0)'
            ]
          
    }]
        },
        options: {}
    });
  }
  
  function bargraph(results){
    const ctx = document.getElementById('bar-graph');
  
    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: [
            '0,0',
            '0,5',
            '1,0',
            '1,5',
            '2,0',
            '2,5',
            '3,0',
            '3,5',
            '4,0',
            '4,5',
            '5'
        ],
        datasets: [{
          
          label: 'Score',
          data: results,
          backgroundColor: [
            'rgba(	3.1, 63.9, 2, 0.6)'
          ],
          hoverOffset: 5,
          hoverBackgroundColor: [
            'rgb(3.1, 63.9, 2)'
            ],
          borderWidth: 1
          
    }]
        },
        options: {
          
          plugins: {
            legend: {
              display: false
            }
          }
        }
    });
  }