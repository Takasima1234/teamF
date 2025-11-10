document.addEventListener("DOMContentLoaded", () => {
  const qtyInputs = document.querySelectorAll(".qty-input");
  const prices = document.querySelectorAll(".price");
  const totalDisplay = document.getElementById("total-amount");
  const countDisplay = document.querySelector(".count");

  function calculateTotal() {
    let subtotal = 0;
    let totalItems = 0;

    qtyInputs.forEach((input, i) => {
      const qty = parseInt(input.value);
      const price = parseInt(prices[i].dataset.price);
      subtotal += qty * price;
      totalItems += qty;
    });

    // 送料計算
    let shipping = 200;
    if (subtotal >= 3000 && totalItems >= 2) {
      shipping = 0;
    }

    const total = subtotal + shipping;

    // 表示更新
    totalDisplay.textContent = `¥${total.toLocaleString()}円`;
    countDisplay.textContent = totalItems;
  }

  // 数量変更時に再計算
  qtyInputs.forEach(input => {
    input.addEventListener("input", calculateTotal);
  });

  // ページ読み込み時に初期計算
  calculateTotal();
});
