// 每次调用$.get() 或 $.poust() 或 $.ajax()时 会先调用此函数
// 在这个函数中 可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function (options) {
    // 在发起真正的Ajax请求之前 同一拼接请求的根路径
    options.url = 'http://www.liulongbin.top:3007' + options.url
    console.log(options.url);
})