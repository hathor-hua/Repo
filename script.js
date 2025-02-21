// 複製功能與最近使用紀錄
const recentSymbols = new Set();
const recentContainer = document.getElementById('recent');

function addCopyEvent(symbol) {
    symbol.addEventListener('click', () => {
        const text = symbol.getAttribute('data-symbol');
        navigator.clipboard.writeText(text).then(() => {
            symbol.classList.add('copied');
            const originalText = symbol.textContent;
            symbol.textContent = '已複製';
            setTimeout(() => {
                symbol.classList.remove('copied');
                symbol.textContent = originalText;
            }, 1000);

            // 添加到最近使用
            recentSymbols.add(text);
            updateRecentSymbols();
        });
    });
}

document.querySelectorAll('.symbol').forEach(addCopyEvent);

function updateRecentSymbols() {
    recentContainer.innerHTML = '';
    recentSymbols.forEach(symbol => {
        const span = document.createElement('span');
        span.className = 'symbol';
        span.setAttribute('data-symbol', symbol);
        span.textContent = symbol;
        addCopyEvent(span);
        recentContainer.appendChild(span);
    });
}

// 標籤切換
const tabs = document.querySelectorAll('.tab');
const symbolSections = document.querySelectorAll('.symbol-container .symbols');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const tabId = tab.getAttribute('data-tab');
        symbolSections.forEach(section => {
            section.classList.add('hidden');
            if (section.id === tabId) {
                section.classList.remove('hidden');
            }
        });
    });
});

// 搜尋功能
document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll('.symbol-container .symbol').forEach(symbol => {
        const text = symbol.getAttribute('data-symbol').toLowerCase();
        symbol.style.display = text.includes(query) ? 'flex' : 'none';
    });
});
