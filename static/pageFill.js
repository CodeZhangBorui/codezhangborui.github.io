function fill_menuBar(this_element) {
  fillContent = `
<li id="menuBar_Home" class="layui-nav-item"><a href="/">主页</a></li>
<li id="menuBar_Article" class="layui-nav-item"><a href="/article/index">文章</a></li>
<li id="menuBar_Studio" class="layui-nav-item">
  <a href="javascript:;">工作室</a>
  <dl class="layui-nav-child"> <!-- 二级菜单 -->
    <dd><a href="/studio/powercode">PowerCode Studio</a></dd>
  </dl>
</li>
<li id="menuBar_Tool" class="layui-nav-item"><a href="/tool">工具箱（即将迁移到应用）</a></li>
<li id="menuBar_Codespace" class="layui-nav-item"><a href="/apps/PowerStore">应用</a></li>
<li id="menuBar_Downloads" class="layui-nav-item"><a href="/downloads">资源下载</a></li>
<li id="menuBar_About" class="layui-nav-item"><a href="/about">关于</a></li>
`
  document.getElementById("menuBar").innerHTML = fillContent;
  document.getElementById("menuBar_" + this_element).className += " layui-this";
}

function fill_footBlock() {
  fillContent = `
<div class="acrylic">
  <p>Copyright(c) CodeZhangBorui & PowerCode 2022, All Right Reserved.</p>
  <p>由 Github Page 提供支持</p>
  <p>联系站长：[Discord] Code张博睿#4080</p>
  <p>
    主页:
    <a href="https://codezhangborui.github.io/" target="_blank" style="color: #010101;">
      https://codezhangborui.github.io/
    </a>
  </p>
  <p>
    Github 仓库:
    <a href="https://github.com/CodeZhangBorui/codezhangborui.github.io/" target="_blank" style="color: #010101;">
      https://github.com/CodeZhangBorui/codezhangborui.github.io/
    </a>
  </p>
  <iframe
    src="https://ghbtns.com/github-btn.html?user=codezhangborui&repo=codezhangborui.github.io&type=star&count=true"
    frameborder="0" scrolling="0" width="150" height="20" title="GitHub Star"></iframe>
</div>
`
  document.getElementById("footblock").innerHTML = fillContent;
}