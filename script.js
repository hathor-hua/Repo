body {
    font-family: 'Noto Sans TC', Arial, sans-serif;
    background-color: #f0f2f5;
    color: #333;
    margin: 0;
    padding: 40px;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    background-color: #fff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

h1 {
    font-size: 2.2em;
    margin-bottom: 10px;
    color: #1e3a8a;
}

p {
    font-size: 1.1em;
    color: #666;
    margin-bottom: 25px;
}

#search {
    width: 100%;
    padding: 14px;
    font-size: 1em;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    margin-bottom: 40px;
    box-sizing: border-box;
    transition: border-color 0.3s, box-shadow 0.3s;
}

#search:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
    outline: none;
}

.tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    margin-bottom: 40px;
}

.tab {
    padding: 10px 25px;
    font-size: 1em;
    border: none;
    background-color: #e5e7eb;
    color: #4b5563;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
}

.tab:hover {
    background-color: #d1d5db;
}

.tab.active {
    background-color: #3b82f6;
    color: #fff;
}

.symbol-container {
    margin-bottom: 40px;
}

.symbols {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap: 15px;
}

.symbol {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    width: 60px;
    height: 60px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s;
}

.symbol:hover {
    background-color: #f3f4f6;
    border-color: #3b82f6;
}

.symbol.copied {
    background-color: #34d399;
    color: #fff;
    border-color: #34d399;
}

.hidden {
    display: none;
}

.recent-symbols {
    margin-top: 40px;
}

.recent-symbols h3 {
    font-size: 1.3em;
    color: #1e3a8a;
    margin-bottom: 15px;
}
