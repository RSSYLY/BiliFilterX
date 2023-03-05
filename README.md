# BiliFilterX

使用规则集过滤掉哔哩哔哩上碍眼的用户

## 👀 介绍

这是一个利用规则集，根据UID屏蔽B站用户发言的油猴脚本。我们可以使用规则集来收集屏蔽的用户，并将任何一个规则集中的用户导出，或者再导入另一个规则集。另外也支持远程规则集，输入链接即可更新。

该项目源于我的黑名单拉满了（上限500）...

另外我是初学者，若有必要，请轻喷我的代码质量。🙏

## 😵 特性

- 利用规则集收集用户
- 使用UID记录用户
- 对屏蔽的每个用户均可设定等级值，规则集的过滤等级值若高于设定的用户等级值，则可屏蔽用户
- 导出，导入每个规则集
- 仅支持B站新版网页
- ~~CPU占用稍高~~
- ~~稀烂的语法~~

## 🖼️ 截图

<img width="436" alt="image" src="https://user-images.githubusercontent.com/59304676/222944481-62a7c72e-dde9-4180-b402-87a42a2f69c7.png">

## 🦽 使用

该脚本依赖Tampermonkey浏览器插件。您需要确保您的设备的浏览器可以安装Tampermonkey浏览器插件。[知乎上的教程](https://zhuanlan.zhihu.com/p/128453110)

注意本脚本暂时不支持Greasemonkey（或许以后也不会支持）！另外关于IOS与MAC的使用请参照[这个](https://github.com/XIU2/UserScript/issues/107)。

不支持IOS的userscripts！

安装浏览器插件Tampermonkey后，使用该[链接](https://github.com/RSSYLY/BiliFilterX/raw/main/bfx.user.js)安装脚本

进入任一视频播放界面，在右键菜单中的油猴脚本菜单即可找到BiliFilterV2的相关设置。或者在任务栏的插件菜单中也可找到设置按钮。

[详细使用教程](./Document.md)

## 🕊️ 待实现

- [ ] 实现关键词屏蔽
- [ ] 在评论区对用户进行快捷屏蔽
- [ ] 支持对动态，视频页，首页推荐的屏蔽
- [ ] 适配旧页面
更多建议或需求欢迎在issue提。

