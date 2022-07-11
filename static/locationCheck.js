var nowLocation = String(window.location);

//新域名 codezhangborui.eu.org 自动跳转
if(nowLocation.indexOf('github.io') != -1) {
    var userBack = confirm(`
        我们检测到您正在访问由 Github Pages 提供的域名 github.io，
        建议您前往我们的新网址：
        【codezhangborui.eu.org】
        是否前往？
    `);
    if(userBack) {
        window.location = 'https://codezhangborui.eu.org' + nowLocation.substring(nowLocation.indexOf('/'));
    }
}

//开发环境检测
if(nowLocation.indexOf('localhost') != -1 || nowLocation.indexOf('192.') != -1) {
    console.warn('正在开发环境下运行。');
}