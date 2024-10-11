document.getElementById('calculateBtn').addEventListener('click', function() {

    const salary = parseFloat(document.getElementById('salary').value) || 0;
    const rent = parseFloat(document.getElementById('rent').value) || 0;
    const utilities = parseFloat(document.getElementById('utilities').value) || 0;
    const food = parseFloat(document.getElementById('food').value) || 0;
    const others = parseFloat(document.getElementById('others').value) || 0;

    const totalExpenses = rent + utilities + food + others;
    const budget = salary - totalExpenses;

    document.getElementById('result').innerText = `Presupuesto mensual: $${budget.toFixed(2)}`;
});
