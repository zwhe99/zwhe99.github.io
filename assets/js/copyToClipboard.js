document.addEventListener('DOMContentLoaded', function() {
    var tooltip; // 定义一个变量来存储悬浮窗口元素
    var timeoutId; // 定义一个变量来存储计时器 ID
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', function() {
            var originalText = this.textContent; // 保存原始按钮文字
            var bibFile = this.getAttribute('data-bib-file');
            var filePath = '/papers/' + bibFile + '/bib.txt';

            fetch(filePath)
                .then(response => response.text())
                .then(text => {
                    navigator.clipboard.writeText(text).then(() => {
                        this.textContent = 'Copied'; // 更改按钮文字为 "Copied"
                        setTimeout(() => { this.textContent = originalText; }, 2000); // 2秒后恢复原始文字
                    }).catch(err => {
                        console.error('Copy failed: ', err);
                        this.textContent = 'Copy failed'; // 更改按钮文字为 "Copy failed"
                        setTimeout(() => { this.textContent = originalText; }, 2000);
                    });
                });
        });
        button.addEventListener('mouseenter', function() {
            // 如果悬浮窗口还未创建，那么创建它
            if (!tooltip) {
                tooltip = document.createElement('div');
                tooltip.className = 'tooltip-content';
                document.body.appendChild(tooltip);
            }

            // 加载文件并显示内容
            var bibFile = this.getAttribute('data-bib-file');
            var filePath = '/papers/' + bibFile + '/bib.txt';
            fetch(filePath)
                .then(response => response.text())
                .then(text => {
                    tooltip.textContent = text.trim();
                    tooltip.style.visibility = 'visible';
                }).catch(err => {
                    tooltip.textContent = '内容加载失败';
                    tooltip.style.visibility = 'visible';
                });

            // 定位悬浮窗口稍微偏离鼠标位置
            var rect = button.getBoundingClientRect();
            console.log(rect.left, rect.bottom); // 用于调试定位
            tooltip.style.left = rect.left + 'px'; // 横向位置与按钮对齐
            tooltip.style.top = rect.bottom + 5 + 'px'; // 纵向位置位于按钮下方
            console.log('Button rect bottom:', rect.bottom);
            console.log('Window scroll Y:', window.scrollY);
            
            
        });

        button.addEventListener('mouseleave', function() {
            // 隐藏悬浮窗口
            if (tooltip) {
                tooltip.style.visibility = 'hidden';
            }
        });

        window.addEventListener('scroll', function() {
            // 清除之前的计时器
            clearTimeout(timeoutId);
            // 延迟一段时间后隐藏悬浮窗口
            timeoutId = setTimeout(function() {
                if (tooltip) {
                    tooltip.style.visibility = 'hidden';
                }
            }, 100); // 200毫秒延迟
        });
    });
});
