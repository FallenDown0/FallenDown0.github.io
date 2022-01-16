
// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = 'Σ( ° △ °|||)︴ 页面崩溃啦 ~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '~o(〃'▽'〃)o 又好啦 ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});


