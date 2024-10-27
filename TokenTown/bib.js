// Theme Toggle Functionality
const toggleThemeButton = document.getElementById('toggle-theme');
const body = document.body;

toggleThemeButton?.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  toggleThemeButton.textContent = body.classList.contains('light-theme') ? 'Switch to Dark Theme' : 'Switch to Light Theme';
});

// Modal for Announcements
const modal = document.getElementById('announcement-modal');
const closeModalButton = document.getElementById('close-modal');

// Function to open modal
function openModal(message) {
  modal.querySelector('.modal-content p').textContent = message;
  modal.style.display = 'block';
}

// Close modal
closeModalButton?.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Show modal on page load as a demo (optional)
window.addEventListener('load', () => {
  openModal("Welcome to our Blockchain Loyalty Program! Enjoy exploring the features.");
});

// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Example data
  const tokenBalance = 150;
  const recentTransactions = [
      { date: '2024-10-01', description: 'Purchase at Store A', amount: -50 },
      { date: '2024-10-05', description: 'Purchase at Store B', amount: -30 },
      { date: '2024-10-10', description: 'Reward from Store C', amount: 20 },
      { date: '2024-10-15', description: 'Purchase at Store D', amount: -70 },
      { date: '2024-10-20', description: 'Reward from Store E', amount: 100 }
  ];

  // Display token balance
  const balanceElement = document.getElementById('balance');
  balanceElement.textContent = tokenBalance;

  // Display recent transactions
  const transactionsElement = document.getElementById('transactions');
  recentTransactions.forEach(transaction => {
      const listItem = document.createElement('li');
      listItem.textContent = `${transaction.date} - ${transaction.description} (${transaction.amount > 0 ? '+' : ''}${transaction.amount})`;
      transactionsElement.appendChild(listItem);
  });
});
