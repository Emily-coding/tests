<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <div style="width: 80%; margin: auto;">
        <canvas id="hospitalityWagesChart"></canvas>
    </div>

    <script>
        const ctx = document.getElementById('hospitalityWagesChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Median Weekly Pay (£)',
                    data: [315.60, 321.40, 328.70, 350.10, 374.20, 344.00, 385.40, 417.80, 457.10, 488.20],
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: { display: true, text: 'UK Hospitality Wage Trends (ONS ASHE)' }
                }
            }
        });
    </script>
</body>
</html>
