var posts=["2021/01/18/2020年终总结/","2022/03/15/2022-目标和方向/","2022/01/17/2021年终总结/","2022/12/27/2023年终总结/","2025/12/12/2025年终总结/","2022/12/27/2022年终总结/","2021/07/20/ASE体验-菲涅尔效果/","2023/06/29/Address快速食用指南/","2021/10/16/Async代替协程/","2020/05/10/A星算法的研究和应用/","2021/12/28/C#自定义特性/","2021/04/05/Blazor初体验/","2020/04/15/Cinemachine的基本使用/","2022/06/30/Effective C# 笔记1/","2020/02/16/Gitbook初体验/","2023/07/07/EnhancedScroller的使用/","2020/03/22/HDRP体验2B小姐姐/","2020/04/28/Ink剧情编排/","2020/03/21/LWRP下ShaderGraph的使用/","2020/02/01/Lua-基础（一）Say Hi/","2020/02/05/Lua-基础（七）程序协同/","2020/02/01/Lua-基础（三）函数/","2020/02/07/Lua-基础（九）面向对象/","2020/02/04/Lua-基础（五）.和：的区别和联系/","2020/02/06/Lua-基础（八）万用table构建数据结构/","2022/07/08/MMD导入Unity/","2020/02/04/Lua-基础（六）加载使用其他Lua的函数/","2020/02/03/Lua-基础（四）迭代器/","2020/02/01/Lua-基础（二）表&流程控制/","2023/02/07/MarkLight以Xml编写UI/","2022/10/08/Mirror初体验/","2021/01/14/NetCore WebAPI入门/","2021/09/09/NodeCanvas之对话树/","2021/09/04/NodeCanvas之行为树/","2021/09/08/NodeCanvas之FSM有限状态机/","2021/09/10/NodeCanvas扩展/","2024/04/03/NodeCanvas自定义图树/","2022/11/18/SLATE-时间轴插件/","2022/12/26/Shader入门精要（七） 基础纹理/","2021/09/10/Shader入门精要（一）/","2021/11/30/Shader入门精要（三）UnityShader/","2022/05/20/Shader入门精要（九）复杂光照/","2021/09/10/Shader入门精要（二）/","2021/12/07/Shader入门精要（五）Shader入门/","2022/12/26/Shader入门精要（十一）让画面动起来/","2022/09/20/Shader入门精要（十）高级纹理/","2021/12/03/Shader入门精要（四） 数学基础/","2020/02/10/Timeline的基本使用/","2022/06/08/URP下自定义后处理/","2022/09/22/UniRx 初体验/","2022/05/16/Unity InputSystem使用/","2021/09/08/Spine初体验/","2021/03/04/Unity PlasticSCM 托管/","2022/09/20/Unity UI合批/","2022/02/03/Unity ScrollView(滑动区域)的使用/","2022/06/18/Unity Ui事件接口/","2022/04/01/Unity tip提示框闪烁/","2021/06/08/Unity 新技术HDRP/","2022/06/11/Unity 新技术UIkit/","2022/09/21/Unity2D-多边形检测/","2022/03/07/Unity截图保存/","2020/09/11/Unity热更新初步/","2021/10/17/Unity中的单例模式/","2022/10/01/VContainer 初体验/","2020/04/27/YarnSpinner剧情编辑/","2021/01/07/html包含/","2021/07/26/VFXGraph体验-火花效果/","2021/02/22/python连接Mysql/","2023/07/13/YooAssets初体验/","2021/12/04/shaderGraph常用功能释义/","2020/03/25/unity ScriptableObject的使用/","2020/04/13/unity的对象池/","2021/01/19/《HELLO WORLD 》影评/","2022/06/14/《游戏编程模式》-书评/","2022/09/04/下班后开始新的一天/","2020/12/29/享元模式/","2022/06/14/优化型模式-脏标记模式/","2022/10/24/从程序员到独立游戏开发者/","2020/07/02/位运算的秒用/","2022/02/04/像素画-1 常用功能和快捷键/","2022/10/18/关于Git的笔记/","2022/08/31/MRTK 开发记录/","2023/01/29/关于树的操作/","2022/06/11/关于状态机的思考/","2022/05/15/关于科学使用Spine3.8.75/","2020/03/27/动画补间DOTween/","2021/02/22/原型模式/","2020/07/04/命令模式/","2023/05/10/在Unity使用SqlLite/","2022/05/02/在开发互动叙事类游戏时的思考/","2023/01/06/坐标系变换/","2020/03/20/如何优雅的看漫画/","2021/03/09/孤独&独立/","2021/01/25/学着生活/","2022/05/13/我的工具集FastyTools/","2022/09/08/插件-TureShadow/","2020/12/25/新博客启动啦/","2021/10/15/有太多要打破的东西/","2020/04/12/深入理解协程/","2020/05/23/舒服的2D相机-Cinemachine/","2022/06/07/行为型模式-字节码/","2022/01/06/类杀戮尖塔-卡牌游戏原型总结/","2022/06/07/行为型模式-类型对象/","2021/02/22/观察者模式/","2020/04/07/第三人称角色摄像机案例分析/","2021/06/02/走进UE1-进入UE世界/","2021/06/07/走进UE2-使用动画模型/","2023/03/09/通知系统/","2022/06/13/解耦性模式-服务定位器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://hexo.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/hexo.anheyu.com.jpg"},{"name":"安知鱼","link":"https://hexo.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/hexo.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"烟雨迷离半世殇","link":"https://www.lfzxb.top/","avatar":"http://thirdwx.qlogo.cn/mmopen/vi_32/ZeXjb5sl4AmRcSIOBLIXHVIKcPNAnY1Gkb1HnWgh6xjkdSX0tUpt2Tbg2Oztf91GfGImJH2Lc8FAM4LcRcGNrQ/132","descr":"游戏开发同路人","recommend":true},{"name":"致郁系","link":"https://www.juroku.net/","avatar":"/","descr":"品味生活","recommend":true},{"name":"萌茶屋","link":"https://cha.moe/","avatar":"https://img.cha.moe/img/blog/favicon/avatar.svg","descr":"渴望能在人类的世界留下一些痕迹……","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };