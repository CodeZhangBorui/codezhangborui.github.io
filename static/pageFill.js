function fill_menuBar(this_element) {
  fillContent = '\
<li id="menuBar_Home" class="layui-nav-item"><a href="/">主页</a></li>\
<li id="menuBar_Article" class="layui-nav-item"><a href="/article/index">文章</a></li>\
<li id="menuBar_Studio" class="layui-nav-item">\
  <a href="javascript:;">工作室</a>\
  <dl class="layui-nav-child"> <!-- 二级菜单 -->\
    <dd><a href="/studio/powercode">PowerCode Studio</a></dd>\
  </dl>\
</li>\
<li id="menuBar_Tool" class="layui-nav-item"><a href="/tool.html">工具箱</a></li>\
<li id="menuBar_Codespace" class="layui-nav-item"><a href="/codespace.html">CodeSpace</a></li>\
<li id="menuBar_Downloads" class="layui-nav-item"><a href="/downloads">资源下载</a></li>\
<li id="menuBar_About" class="layui-nav-item"><a href="/about">关于</a></li>\
'
  document.getElementById("menuBar").innerHTML = fillContent;
  document.getElementById("menuBar_" + this_element).className += " layui-this";
}