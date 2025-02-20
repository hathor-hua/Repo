// script.js
// 简繁转换工具脚本

// 获取元素
var inputText = document.getElementById('inputText');
var outputText = document.getElementById('outputText');

// 将文本转换为指定的繁简体
function convertText(text, target) {
    if (text.trim() === '') {
        alert('请输入文字');
        return '';
    }
    return zhconv.convert(text, target);
}

// 历史记录模块
var History = {
    data: JSON.parse(localStorage.getItem('history')) || [],

    // 保存历史记录
    save: function(text, convertedText) {
        this.data.push({ input: text, output: convertedText });
        localStorage.setItem('history', JSON.stringify(this.data));
    },

    // 显示历史记录
    display: function() {
        var historyList = document.getElementById('historyList');
        historyList.innerHTML = '';
        for (var i = this.data.length - 1; i >= 0; i--) {
            var item = document.createElement('div');
            item.innerHTML = '<strong>输入:</strong> ' + this.data[i].input + '<br><strong>输出:</strong> ' + this.data[i].output;
            historyList.appendChild(item);
        }
    },

    // 清除历史记录
    clear: function() {
        this.data = [];
        localStorage.removeItem('history');
        this.display();
    },

    // 导出历史记录
    export: function() {
        var data = '';
        for (var i = this.data.length - 1; i >= 0; i--) {
            data += '输入: ' + this.data[i].input + '\n输出: ' + this.data[i].output + '\n\n';
        }
        var blob = new Blob([data], { type: 'text/plain' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'history.txt';
        a.click();
        URL.revokeObjectURL(url);
    }
};

// 初始化历史记录
History.display();

// 转换文本并保存历史记录
document.getElementById('convert').addEventListener('click', function() {
    var text = inputText.value;
    var target = document.getElementById('conversionType').value;
    var convertedText = convertText(text, target);
    outputText.value = convertedText;
    History.save(text, convertedText);
    History.display();
});

// 清除输入和输出文本
document.getElementById('clear').addEventListener('click', function() {
    inputText.value = '';
    outputText.value = '';
});

// 导出历史记录
document.getElementById('exportHistory').addEventListener('click', function() {
    History.export();
});

// 清除历史记录
document.getElementById('clearHistory').addEventListener('click', function() {
    History.clear();
});

// 复制输出文本
document.getElementById('copyOutput').addEventListener('click', function() {
    outputText.select();
    document.execCommand('copy');
    alert('文本已复制到剪贴板');
});
