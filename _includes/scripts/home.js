(function () {
    // 检查当前会话是否已访问过
    if (!sessionStorage.getItem('hasWelcome')) {
        // 会话首次访问，重定向到欢迎页面
        window.location.href = '/welcome';
    }
    // 如果已访问过，停留在当前页面
})();