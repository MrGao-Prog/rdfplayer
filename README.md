# rdfplayer
									红狐弹幕播放器【1.6.8】
一、上传根目录，创建空弹幕数据库后 访问 你的域名/install 按提示安装
二、播放方式：你的域名/player/?url=视频链接
三、后台授权域名功能需要cms网站 头部referrer meta标签 值不能为 no-referrer  never 这两个值。ip授权功能如果授权全部，填写一个.即可
四、提醒一下：数据库需要提前创建

- 版本记录：
  V1.6.0
  1.基于dplayer开发，UI同网络弹幕播放器。
  2.相较于网上泛滥版本，增加视频谷歌浏览器小窗播放，等比全屏放大，不等比缩放全屏，qq分享功能，30分钟定时关闭（暂时不支持自定义时间）。
  3.自定义广告，支持视频广告和图片广告，视频广告无法自动播放，需要点击一下，所以尽量别用。
  4.自定义顶部跑马灯，自定义顶部遮挡层【用于遮挡某些M3U8顶部广告】。
  5.移动端添加锁屏功能【防止误触】。
  6.安卓支持全屏横屏播放功能【这是市面上很多泛滥播放不具备的】。
  7.支持选集功能 自动下集功能【对接CMS】【需保留自带主接口】。
  8.跳过片头和片尾不需要刷新，下一集接口实时生效。

- V1.6.1
  1.更新自定义播放器目录 可放在cms 二级目录
  2.增加视频预加载缩略图
  3.优化长按倍速时间为自定义，默认200ms。优化长按倍速显示特效。
  4.可自定义解析主接口

- V1.6.2  【需要先安装dmku 并进去后台选择是否允许用户登录】
  1.修复 播放器刚播放时暂停，过一会还会自动播放的bug
  2.增加用户注册登录功能，后台试看时间自定义设置，默认组别为注册会员【2】
  3.增加右侧上滑音量调节，左侧上滑亮度调节，上滑不能大幅度左右滑，会触发快进
  4.取消pc右键视频链接

- V1.6.3
  1.修复若干bug，后台更新用户中心，可删改用户信息。
  2.更新用户中心uid
  3.优化性能

- V1.6.4
  1.修复播放m3u8出现无限循环暂停播放导致播放器卡顿问题

- V1.6.5
  1.修复顶部分享按钮链接不是自定义域名
  2.修复左侧上滑调整亮度数值和滑动不对应问题
  3.修复上滑和左右滑动快进产生冲突和重叠问题【当触发左右滑动无论怎么滑都不会产生上滑机制 反之同理】
  4.增加视频音效调节功能【3D环绕音效 空间混音 音量增强 3 5 10 段均衡器自定义 10多种预设均衡音效】【MP4链接类型视频不可用会出现无声问题】
  5.增加视频色彩调节功能【饱和度 亮度 对比度】

V1.6.6

- 1.新增清晰度切换功能：

​	参数：quality

​	类型：数组

​	键值：

​		name:清晰度名称

​		type:画质视频类型 mp4、flv、hls 等，默认为auto

​		url:画质视频链接

​	实列：

​		

```
$quality = [{"name":"1080P+","url":"https://player.mrgaocloud.com/player/ad.mp4"},{"name":"1080P","url":"https://player.mrgaocloud.com/player/ad.mp4"},{"name":"720P","url":"https://player.mrgaocloud.com/player/ad.mp4"},{"name":"480P","url":""},{"name":"360P","url":"https://player.mrgaocloud.com/player/ad.mp4"}]
```

- V1.6.6 beta1
  1.移动pc端弹幕input框自适应
  2.修复弹幕字体大小会影响input框宽度问题
  3.修复跳转及截图下载问题
  4.修复移动端倍速lable显示出界
  5.修复video设置放大裁剪和等比缩放点击后鼠标移动高亮显示无效问题

- V1.6.6 beta2
  1.优化腾讯视频官解弹幕渲染性能，视频跳转实时渲染弹幕
  2.移动端适配音效色彩调节滑动条

- V1.6.6 beta3
  1.重构后台结构目录
  2.重构安装程序

- V1.6.7
  1.添加自定义选集 参数 epist json对象或者数组 see redme.md
  2.优化加载速度，自定义加载loading gif
  3.增加顶部按钮隐藏功能
  4.新增弹幕速度调节
  5.新增redis缓存
  6.自定义顶部按钮隐藏显示
  7.优化视频色彩调节功能
  8.修复若干bug

- V1.6.8
  1.自定义对接cms站点选集
  2.选集接口加密防盗
  3.增加redis缓存，需安装php redis扩展
  4.视频链接、选集数据加密处理
  5.修复部分网盘中文直链，多次重定向无法播放的问题，后台removeCrossOrigin 添加匹配链接
  6.后台添加cms对接功能 【防盗和剧集api设置】
  7.修复中文视频链接编码问题导致不能播放的问题

V1.6.9

- 1.新增字幕功能，参数为subtitle。
- 2.选集图片采用懒加载，提升性能，优化后台程序目录结构
- 3.取消了版本验证程序，修复若干bug
- 4.优化的腾讯视频官方弹幕库api
- 5.修复均衡器重置后不生效问题
- 6.字幕格式新增支持ass
- 7.新增弹幕占比调节
- 8.取消弹幕显示列表，改为实时弹幕聊天室
特此说明，本程序遵循MIT协议，仅供学习交流，切勿用于违法犯罪活动，由此产生一切责任都与本站及相关负责人无关。

当前程序版本:V1.6.8
.
├── admin
│   ├── author.php
│   ├── css
│   │   ├── bootstrap.min.css
│   │   └── layui.css
│   ├── daohang.php
│   ├── dm.php
│   ├── exit.php
│   ├── fonts
│   │   └── glyphicons-halflings-regular.woff2
│   ├── head.php
│   ├── img
│   │   ├── bg.gif
│   │   └── logo.png
│   ├── index.php
│   ├── js
│   │   ├── bootstrap.min.js
│   │   ├── colorpicker.js
│   │   ├── config.js
│   │   ├── jquery.min.js
│   │   ├── upload.js
│   │   └── xm-select.js
│   ├── jxconfig.php
│   ├── login.php
│   ├── post.php
│   └── user.php
├── api.php
├── cache
│   └── redis
│       └── redis.php
├── cms.md
├── config.php
├── data.php
├── dmku
│   ├── bilibili
│   │   ├── index.php
│   │   └── jljt.json
│   ├── class
│   │   ├── danmu.class.php
│   │   ├── db.class.php
│   │   ├── ed.class.php
│   │   ├── mysqli.class.php
│   │   ├── pdo.class.php
│   │   ├── sqlite3.class.php
│   │   └── user.class.php
│   ├── dm_rule.html
│   ├── index.php
│   ├── init.php
│   └── vqq
│       └── index.php
├── include
│   ├── config.inc.php
│   └── global.inc.php
├── index.php
├── install
│   ├── index.php
│   ├── install.lock
│   ├── install.sql
│   └── sql.db
├── player
│   ├── 404.mp4
│   ├── ad.mp4
│   ├── analyse.php
│   ├── count.dat
│   ├── css
│   │   └── RdfPlayer.min.css
│   ├── domains.html
│   ├── img
│   │   ├── 1669118387411.gif
│   │   ├── 404.png
│   │   ├── favicon.png
│   │   ├── fulloff.webp
│   │   ├── icon.png
│   │   ├── loading.gif
│   │   ├── loading.png
│   │   ├── Md4p2yMjqj.png
│   │   ├── qq.png
│   │   └── sign.png
│   ├── index.php
│   ├── js
│   │   ├── code.js
│   │   ├── flv.min.js
│   │   ├── hls.min.js
│   │   ├── jquery.min.js
│   │   ├── layer.js
│   │   ├── RdfPlayer.min.js
│   │   └── theme
│   │       └── default
│   │           ├── icon.png
│   │           └── layer.css
│   └── time.html
├── plugins
│   ├── cms.php
│   ├── count.php
│   ├── dl.php
│   ├── domain.php
│   ├── mcrypt.php
│   └── upload.php
└── redme.md
						       版权所有:
					© RedFoxCloud  www.mrgaocloud.com-红狐资源网 2018~2022
