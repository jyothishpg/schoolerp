$("#myDatepicker").datepicker({
  format: "dd/mm/yyyy", // Customize date format
  autoclose: true, // Close picker when date is selected
  todayHighlight: true, // Highlight today's date
});
const options = document.querySelectorAll(".toggle .option");
const slider = document.querySelector(".toggle .slider");

options.forEach((option, index) => {
  option.addEventListener("click", () => {
    document.querySelector(".option.active")?.classList.remove("active");
    option.classList.add("active");

    if (index === 0) {
      slider.style.left = "5px"; // All
    } else {
      slider.style.left = "calc(50% + 0px)"; // Unread
    }
  });
});




const weekLabels = ["Week 1", "Week 2", "Week 3", "Week 4"];
const dayLabels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

// Sample data: 7 days × 4 weeks
const attendanceData = [
    [3, 4, 5, 6],  // Sat
    [4, 3, 5, 6],  // Sun
    [6, 5, 4, 5],  // Mon
    [5, 4, 6, 5],  // Tue
    [7, 6, 5, 7],  // Wed
    [4, 5, 6, 7],  // Thu
    [6, 7, 7, 6]   // Fri
];

// Light-to-dark purple gradient colors
const colors = [
    "#5A2E90",
    "#8E69BA",
    "#D5AEFF",
    "#E6D2FF",

    "#F3D7FF",
    "#E3B8FF",
    "#D08AFF",
    // "#BE5FFF",
    // "#A23AFF",
    // "#7F15DB",
    // "#5A0AAA"

    

];

const datasets = dayLabels.map((day, i) => ({
    label: day,
    data: attendanceData[i],
    backgroundColor: colors[i],
    borderRadius: i === 6 ? 10 : 0,  // top rounded only for top layer
}));

new Chart(document.getElementById("attendanceChart"), {
    type: "bar",
    data: {
        labels: weekLabels,
        datasets: datasets
    },
    options: {
        responsive: true,
        scales: {
            x: {
                stacked: true,
                grid: { display: false },
                title: { display: true, text: "" },
                border: {
                display: false    // removes zero-line on X axis
            }
            },
            y: {
                stacked: true,
                ticks: {
                    callback: (value, index) => dayLabels[index] || "",
                },
                title: { display: true, text: "" },
                border: {
                display: false    // removes zero-line on X axis
            },
            grid: {
                display: false,
            },
            }
        },
        plugins: {
            legend: {
              display:false,
               position: "right" }
        }
    }
});



const ctx = document.getElementById('myDoughnut');
const ctx1 = document.getElementById('myDoughnut-1');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Upcoming', 'Due Today', 'Overdue', 'Completed'],
      datasets: [{
        data: [20, 20, 20, 40],
        borderWidth: 0,
        backgroundColor: ['#5396EE', '#FBA06B', '#CA4747', '#79C793']
      }]
    },
    options: {
      cutout: '75%',
      plugins: {
        legend: {
            display:false,
          position: 'bottom'
        }
      }
    }
  });
  


