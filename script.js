document.querySelectorAll('.symbol').forEach(symbol => {
    symbol.addEventListener('click', () => {
        const text = symbol.getAttribute('data-symbol');
        navigator.clipboard.writeText(text).then(() => {
            symbol.classList.add('copied');
            symbol.textContent = '已複製';
            setTimeout(() => {
                symbol.classList.remove('copied');
                symbol.textContent = text;
            }, 1000);
        });
    });
});
