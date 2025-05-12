// ট্যাব ফাংশনালিটি
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');

        // Remove active class from all buttons and contents
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.classList.add('border-transparent');
            btn.classList.remove('border-indigo-500');
        });

        // Add active class to clicked button
        button.classList.add('active');
        button.classList.remove('border-transparent');
        button.classList.add('border-indigo-500');

        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Show selected tab content
        document.getElementById(tabId).classList.add('active');
    });
});

// বর্তমান মাস এবং বছর সেট করুন
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-indexed
const currentYear = currentDate.getFullYear();

document.getElementById('monthSelect').value = currentMonth;
document.getElementById('yearSelect').value = currentYear;

// Chart initialization
document.addEventListener('DOMContentLoaded', function () {
    // Meal Chart
    const mealCtx = document.getElementById('mealChart').getContext('2d');
    const mealChart = new Chart(mealCtx, {
        type: 'bar',
        data: {
            labels: ['১-৭ মে', '৮-১৪ মে', '১৫-২১ মে', '২২-৩১ মে'],
            datasets: [{
                label: 'মোট মিল',
                data: [90, 95, 85, 50],
                backgroundColor: 'rgba(79, 70, 229, 0.7)',
                borderColor: 'rgba(79, 70, 229, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Expense Chart
    const expenseCtx = document.getElementById('expenseChart').getContext('2d');
    const expenseChart = new Chart(expenseCtx, {
        type: 'line',
        data: {
            labels: ['১-৭ মে', '৮-১৪ মে', '১৫-২১ মে', '২২-৩১ মে'],
            datasets: [{
                label: 'মোট খরচ',
                data: [4500, 5200, 4800, 1950],
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                borderColor: 'rgba(16, 185, 129, 1)',
                borderWidth: 2,
                tension: 0.1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });

    // Expense Breakdown Chart
    const expenseBreakdownCtx = document.getElementById('expenseBreakdownChart').getContext('2d');
    const expenseBreakdownChart = new Chart(expenseBreakdownCtx, {
        type: 'doughnut',
        data: {
            labels: ['চাল-ডাল', 'সবজি', 'মাছ-মাংস', 'তেল-মসলা', 'অন্যান্য'],
            datasets: [{
                data: [4500, 3200, 4800, 1950, 2000],
                backgroundColor: [
                    'rgba(79, 70, 229, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(245, 158, 11, 0.7)',
                    'rgba(239, 68, 68, 0.7)',
                    'rgba(99, 102, 241, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                }
            }
        }
    });

    // Cooking Payment Chart
    const cookingPaymentCtx = document.getElementById('cookingPaymentChart').getContext('2d');
    const cookingPaymentChart = new Chart(cookingPaymentCtx, {
        type: 'bar',
        data: {
            labels: ['রফিক', 'করিম', 'আয়েশা', 'সোহেল'],
            datasets: [{
                label: 'রান্নার পারিশ্রমিক',
                data: [800, 800, 800, 800],
                backgroundColor: 'rgba(139, 92, 246, 0.7)',
                borderColor: 'rgba(139, 92, 246, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Monthly Expense Chart
    const monthlyExpenseCtx = document.getElementById('monthlyExpenseChart').getContext('2d');
    const monthlyExpenseChart = new Chart(monthlyExpenseCtx, {
        type: 'pie',
        data: {
            labels: ['চাল-ডাল', 'সবজি', 'মাছ-মাংস', 'তেল-মসলা', 'অন্যান্য'],
            datasets: [{
                data: [4500, 3200, 4800, 1950, 2000],
                backgroundColor: [
                    'rgba(79, 70, 229, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(245, 158, 11, 0.7)',
                    'rgba(239, 68, 68, 0.7)',
                    'rgba(99, 102, 241, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                }
            }
        }
    });

    // Meal vs Expense Chart
    const mealVsExpenseCtx = document.getElementById('mealVsExpenseChart').getContext('2d');
    const mealVsExpenseChart = new Chart(mealVsExpenseCtx, {
        type: 'line',
        data: {
            labels: ['১-৭ মে', '৮-১৪ মে', '১৫-২১ মে', '২২-৩১ মে'],
            datasets: [
                {
                    label: 'মোট মিল',
                    data: [90, 95, 85, 50],
                    backgroundColor: 'rgba(79, 70, 229, 0.2)',
                    borderColor: 'rgba(79, 70, 229, 1)',
                    borderWidth: 2,
                    yAxisID: 'y',
                    tension: 0.1
                },
                {
                    label: 'মোট খরচ',
                    data: [4500, 5200, 4800, 1950],
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    borderColor: 'rgba(16, 185, 129, 1)',
                    borderWidth: 2,
                    yAxisID: 'y1',
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'মোট মিল'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'মোট খরচ (৳)'
                    },
                    grid: {
                        drawOnChartArea: false,
                    }
                }
            }
        }
    });
});

// Export button functionality
document.getElementById('exportBtn').addEventListener('click', function () {
    // Here you would typically implement export to Excel/PDF functionality
    alert('ডাটা এক্সপোর্ট করা হবে!');
});