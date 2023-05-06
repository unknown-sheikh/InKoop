const input = document.getElementById('number-input');
const output = document.getElementById('output');

input.addEventListener('input', () => {
    const value = parseInt(input.value);
    if (value < 0) {
        output.innerHTML = 'Enter a positive value';
        return;
    }
    let result = '';
    if (value % 2 === 0) {
        for (let i = value + 2; i <= value + 6; i += 2) {
            result += i + ', ';
        }
    } else {
        for (let i = value + 2; i <= value + 6; i += 2) {
            result += i + ', ';
        }
    }
    output.innerHTML = result.slice(0, -2);
});