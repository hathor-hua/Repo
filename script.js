// 複製功能
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

// 標籤切換
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const tabId = tab.getAttribute('data-tab');
        document.querySelectorAll('.symbols').forEach(s => s.classList.add('hidden'));
        document.getElementById(tabId).classList.remove('hidden');
    });
});

// 搜尋功能
document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll('.symbol').forEach(symbol => {
        const text = symbol.getAttribute('data-symbol');
        symbol.style.display = text.includes(query) ? '' : 'none';
    });
});
