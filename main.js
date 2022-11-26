const initial = document.querySelector('#initial-price');
const quantity = document.querySelector('#quantity');
const current = document.querySelector('#current-price');
const submitBtn = document.querySelector('#submit-btn');
const output = document.querySelector('#output');
const container = document.querySelector('#main-container');
console.log(container);

submitBtn.addEventListener('click', () => {
  const initialPrice = Number(initial.value);
  const totalQuantity = Number(quantity.value);
  const currentPrice = Number(current.value);
  const priceDifference = Math.abs(initialPrice - currentPrice).toFixed(2);

  profitOrLoss(initialPrice, totalQuantity, currentPrice, priceDifference);
});

function profitOrLoss(initial, quantity, current, difference) {
  if (initial <= 0 || quantity <= 0 || current <= 0) {
    output.innerHTML = '<p class="message">Please enter values greater than 0.</p>';
  } else if (initial > current) {
    const loss = Math.abs(difference * quantity).toFixed(2);
    const lossPercentage = Math.abs((difference / initial) * 100).toFixed(2);
    container.classList.remove('profit', 'retain');
    container.classList.add('loss');
    output.innerHTML = `<p class="message">Loss Percentage: ${lossPercentage}%</p> <p class="message">Loss amount: ₹${loss}😰😰</p>`;
  } else if (current > initial) {
    const profit = Math.abs(difference * quantity).toFixed(2);
    const profitPercentage = Math.abs((difference / initial) * 100).toFixed(2);
    output.innerHTML = `<p class="message">Profit Percentage: ${profitPercentage}%</p> <p class="message">Profit amount: ₹${profit} 🤑🤑</p>`;
    container.classList.remove('loss', 'retain');
    container.classList.add('profit');
  } else if (current === initial) {
    output.innerHTML = '<p class="message">No Profit No Loss 😐</p>';
    container.classList.remove('profit', 'loss');
    container.classList.add('retain');
  }
}