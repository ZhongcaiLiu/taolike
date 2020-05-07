module.exports = {
    assetsDir: 'assets', //静态资源目录（js,css,img,fonts）
    devServer: {
        open: true, //项目运行后自动打开浏览器
        port: '8080',
        proxy: {
            //配置跨域请求，可以设置多个
            '/api': {
                target: 'http://localhost:3000', //后台接口域名
                ws:false,        //如果要代理websockets,配置这个参数
                secure:false,         //如果是https接口，需要配置这个参数
                changeOrigin: true,       //是否跨域
                pathRewrite: {
                    '^/api':'' //路径重写，如果没有重写 '/api'为'',则 '/api'代表 'http://localhost:3000/api'
                }
            }
        }
    }
}