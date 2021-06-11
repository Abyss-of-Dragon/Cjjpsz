# Cjjpsz项目文档——原神Wiki

> Software Engineering Project 2021.06.10 Edited by Chris Temper

## **1. 项目简介**

本项目是基于手机游戏——《原神》，为玩家能在游戏中得到更好的游戏体验而开发的**类百科全书/多功能工具箱**。玩家可以通过该网页项目进行游戏角色、武器的查询；亦可进行素材养成的计算、游戏物品抽取的模拟；还可以在网页中交流游戏的感想。是一个实用性较强、有现实意义的开源项目。

项目源码：**https://github.com/Abyss-of-Dragon/Cjjpsz**

路径：/Cjjpsz/ProjectCode/yuanshenwiki       demo.sql为项目用到的数据库文件。

## **2. 项目features介绍**

### **① 注册登录**

登陆界面：使用用户名和密码登陆。

<img src="Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled.png" alt="Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled.png"  />

注册界面：填写用户名、昵称、密码、重复密码，点击注册即可完成帐号注册。

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%201.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%201.png)

若注册时有一项或多项未填写则该项会变为红色，提示用户需要填写。 ****

登陆后进入主界面。

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%202.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%202.png)

### **② 百科图鉴**

*用于查询角色、武器信息的界面*

百科图鉴可以通过两个方式进入：1. 通过右边栏菜单的【百科图鉴】 2. 通过主页下滑的【查看更多】按钮进入。

界面：

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%203.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%203.png)

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%204.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%204.png)

当需要查看某个角色或某件武器的具体信息时，即可点击其名称进入详情页。

可以在此界面看到该角色/武器的详细详细信息。

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%205.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%205.png)

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%206.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%206.png)

此部分信息存储在数据库中，每个属性值均由数据库中调出。

### **③ 下载上传**

**下载：**

在角色和武器的详情界面的【其他】一栏均有【下载角色/武器资料】的链接，点击后会下载含有该角色/武器详细信息的文本文档：

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%207.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%207.png)

**上传：**

点击Header中登出键左边的用户头像即可进入用户管理界面，用户可以在此处更改自己的头像，目前仅支持JPG格式的图片。

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%208.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%208.png)

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%209.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%209.png)

### **④ 评论区**

在角色/武器页面的下方有评论区，可以进行评论。

输入评论内容并提交，评论区会刷新并显示用户昵称和评论内容。

(删除评论则要到数据库内部直接删除条目并在角色/用户表删除comment的id。)

<img src="Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2010.png" alt="Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2010.png" style="zoom:80%;" />

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2011.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2011.png)

### ⑤ **养成计算**

*用于计算角色/武器升级经验消耗的页面*

分为两个部分：**武器升级消耗计算器** 和 **角色升级消耗计算器**

输入当前等级和目标等级，回车即可计算出所需经验、所需摩拉（游戏内的货币）、所需游戏内用于升级的道具数量。

在算法中已经设置了目标等级不能低于当前等级，若低于则所需经验会显示为0。

算法文件：/js/calulator.js

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2012.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2012.png)

### ⑥ **游戏资讯**

*查看游戏活动详情的页面*	****

点击首页左侧菜单栏【游戏资讯】即可进入游戏资讯界面。该页面以卡片的形式展示了每个活动的各项信息，包括活动时间、活动玩法、活动奖励等。以每个活动为单位，用一张卡片展示。

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2013.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2013.png)

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2014.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2014.png)

### ⑦ **抽卡模拟**

*模拟游戏内消耗游戏货币抽取游戏素材的页面*	****

点击首页左侧菜单栏【抽卡模拟】即可进入抽卡模拟界面。![image-20210611113831235](C:\Users\Temperance\AppData\Roaming\Typora\typora-user-images\image-20210611113831235.png)

由于界面过长，分三个部分展示

（模拟充值界面）

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2016.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2016.png)

（模拟抽取和结果显示界面）

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2017.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2017.png)

（获得物品概览界面）

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2018.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2018.png)

**模拟抽卡过程：**

充值 → 购买相遇之缘(抽卡道具) → 祈愿一次/祈愿十次 → 表格显示结果 →下方总览查找所得物品

算法文件：/js/recharge.js

### ⑧ **活动日历**

点击首页左侧菜单栏【日历】即可进入活动日历界面。

因为原生js、css与UI框架有冲突，所以暂时没有使用框架

<img src="Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2019.png" alt="Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2019.png" style="zoom: 67%;" />

点击对应的日期可以显示该日有什么活动

也可在下框中自行添加活动，左框为日期(格式：xxxx xx xx)，右框为活动名称。

### ⑨ **关键字检索**

 *根据角色/武器的名称精确搜索*

在顶部Header栏中的Search框中可以进行角色/武器的精确搜索。

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2020.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2020.png)

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2021.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2021.png)

### **⑩ 分享**

首页标题有可以分享到QQ的按钮，点击后扫码即可进行网页的分享。

（已经上线到服务器的版本暂时无此功能）

<img src="Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2022.png" alt="Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2022.png" style="zoom: 67%;" />

<img src="Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2023.png" alt="Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2023.png" style="zoom:67%;" />

## **3. 项目所用技术介绍**

### **前端：Thymeleaf + Semantic UI + CSS + JS + HTML**

前端部分选择了 Thymeleaf 渲染的方式。与其它模板引擎相比，Thymeleaf 最大的特点是能够直接在浏览器中打开并正确显示模板页面，而不需要启动整个Web应用，这在前端开发时的即时预览方面帮助很大。

UI 部分我们选择了 Semantic UI 作为我们整个项目的前端开发框架，官方网站：[https://semantic-ui.com/](https://semantic-ui.com/)。

此 UI 框架的优点在于两点：

1. **方便、美观。**
在官方网站下载 Semantic UI 包，解压后整体移入项目中，在设计HTML界面时在<head>中引入**semantic.js**和**semantic.css**后即可正常使用官方文档内的元素，在官方文档中有许多的元素可供使用且非常美观。

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2024.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2024.png)

2. **简单易懂，划分清晰。**
官方文档中元素有对应的代码，一般复制粘贴即。其main container属性将界面分割成16个部分，使用时输入对应的行数即可。

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2025.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2025.png)

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%202.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%202.png)

可以看到首页自动分为了 4:12 也就是 1:3 的比例。

### 后端：SpringBoot + MySQL

SpringBoot内置Tomcat，并且基于其Maven或Gradle插件，还通过简化配置来进一步简化了Spring应用的搭建和开发过程。

项目开发使用 IntelliJ IDEA，创建项目流程：

• 选择 Spring Initialize

    o Project SDK: 1.8
    
    o Project template: Web Application
    
    o Application server: Tomcat 9.0.39
    
    o Build tool: Maven
    
    o Test runner: Junit
    
    o Languages: Java

数据库部分采用了MySQL数据库，并借以Navicat可视化工具辅助数据库数据管理，这里列出了项目所使用的几张表：

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2026.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2026.png)

角色表：

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2027.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2027.png)

评论表：

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2028.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2028.png)

用户表：

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2029.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2029.png)

武器表：

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2030.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2030.png)

### 项目细节：

- 数据库连接：

    ![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2031.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2031.png)

- Thymeleaf渲染：通过省略两级目录的方式减少页面开发中书写路径的复杂度。

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2032.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2032.png)

- 通过SQL语句获取元素属性：

<img src="Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2033.png" alt="Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2033.png" style="zoom:80%;" />

- RouterController：定义页面跳转后执行的函数与调取的数据。

```java
package com.yuanshenwiki.yuanshenwiki.controller;

import com.yuanshenwiki.yuanshenwiki.bean.Chara;
import com.yuanshenwiki.yuanshenwiki.bean.User;
import com.yuanshenwiki.yuanshenwiki.bean.Weapon;
import com.yuanshenwiki.yuanshenwiki.service.CharaService;
import com.yuanshenwiki.yuanshenwiki.service.UserService;
import com.yuanshenwiki.yuanshenwiki.service.WeaponService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.Date;
import java.util.List;

@RestController
public class RouterController {
    @Autowired
    UserService userService;
    @Autowired
    CharaService charaService;
    @Autowired
    WeaponService weaponService;
    @GetMapping("")
    public void index(HttpServletResponse response) throws IOException {
        response.sendRedirect("/mainpage");
    }
    @GetMapping("/calculator")
    public ModelAndView calculator(HttpServletRequest request){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            mav.setViewName("calculator");
            mav.addObject("loginUser",loginUser);
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
    @GetMapping("/common")
    public ModelAndView common(HttpServletRequest request){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            mav.setViewName("common");
            mav.addObject("loginUser",loginUser);
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
    @GetMapping("/Encyclopedia")
    public ModelAndView encylopedia(HttpServletRequest request){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            mav.setViewName("Encyclopedia");
            mav.addObject("stars5w",weaponService.get5Stars());
            mav.addObject("stars4w",weaponService.get4Stars());
            mav.addObject("stars5",charaService.get5Stars());
            mav.addObject("stars4",charaService.get4Stars());
            mav.addObject("loginUser",loginUser);
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
    @GetMapping("/gacha")
    public ModelAndView gacha(HttpServletRequest request){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            mav.setViewName("gacha");
            mav.addObject("loginUser",loginUser);
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
    @GetMapping("/mainpage")
    public ModelAndView mainpage(HttpServletRequest request){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            mav.setViewName("mainpage");
            mav.addObject("stars5w",weaponService.get5Stars());
            mav.addObject("stars4w",weaponService.get4Stars());
            mav.addObject("stars5",charaService.get5Stars());
            mav.addObject("stars4",charaService.get4Stars());
            mav.addObject("loginUser",loginUser);
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
    @GetMapping("/news")
    public ModelAndView news(HttpServletRequest request){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            mav.setViewName("news");
            mav.addObject("loginUser",loginUser);
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
    @GetMapping("/chara")
    public ModelAndView chara(HttpServletRequest request, HttpServletResponse response){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            Integer id=-1;
            try {
                id = Integer.valueOf(request.getParameter("id"));
            }catch (Exception e){

            }
            Chara chara=charaService.getCharaByID(id);
            if(chara.getName()==null)mav.setViewName("noresult");
            else {
                mav.setViewName("/encyclopedia/chara");
                mav.addObject("loginUser", loginUser);
                mav.addObject("chara",chara);
            }
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
    @GetMapping("/download")
    public void Download(HttpServletRequest request,HttpServletResponse response) throws IOException {
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null) {
            String id = request.getParameter("id");
            Chara c = charaService.getCharaByID(Integer.parseInt(id));
            String path = ResourceUtils.getURL("classpath:").getPath() + "static/img/avatar";
            String realPath = path.replace('/', '\\').substring(1, path.length());
            File downFile = new File(realPath, "Chara" + id + ".txt");
            if (!downFile.exists()) {
                downFile.createNewFile();
            }
            BufferedWriter br = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(downFile)));
            br.write("名字:" + c.getName());
            br.newLine();
            br.write("稀有度:" + c.getRarity());
            br.newLine();
            br.write("武器类型:" + c.getWeaponclass());
            br.newLine();
            br.write("命之座:" + c.getElement());
            br.newLine();
            br.write("性别:" + c.getSex());
            br.newLine();
            br.write("所属:" + c.getNation());
            br.newLine();
            br.write("90生命值:" + c.getHP());
            br.newLine();
            br.write("90攻击力:" + c.getDamage());
            br.newLine();
            br.write("90防御值:" + c.getArmor());
            br.newLine();
            br.write("突破成长:" + c.getGrowth());
            br.newLine();
            br.write("标签:" + c.getTags());
            br.close();
            response.setHeader("content-disposition", "attachment;filename=" + (new Date().hashCode()) + ".txt");
            byte buffer[] = new byte[1024];
            int len = 1024, saveLen = len;
            InputStream is = new FileInputStream(downFile);
            OutputStream os = response.getOutputStream();
            while ((len = is.read(buffer, 0, len)) > 0) {
                os.write(buffer, 0, saveLen);
                saveLen = len;
            }
            is.close();
            os.close();
        }
    }

    @GetMapping("/downloadweapon")
    public void DownloadWeapon(HttpServletRequest request,HttpServletResponse response) throws IOException {
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null) {
            String id = request.getParameter("id");
            Weapon c = weaponService.getWeaponByID(Integer.parseInt(id));
            String path = ResourceUtils.getURL("classpath:").getPath() + "static/img/avatar";
            String realPath = path.replace('/', '\\').substring(1, path.length());
            File downFile = new File(realPath, "Weapon" + id + ".txt");
            if (!downFile.exists()) {
                downFile.createNewFile();
            }
            BufferedWriter br = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(downFile)));
            br.write("名字:" + c.getName());
            br.newLine();
            br.write("稀有度:" + c.getRarity());
            br.newLine();
            br.write("类型:" + c.getType());
            br.newLine();
            br.write("获取方式:" + c.getAccess());
            br.newLine();
            br.write("基础属性1:" + c.getBasic_attribute1());
            br.newLine();
            br.write("基础属性2:" + c.getBasic_attribute2());
            br.newLine();
            br.write("攻击力:" + c.getAtk());
            br.newLine();
            br.write("副属性:" + c.getSec_attribute());
            br.newLine();
            br.write("技能:" + c.getSkill());
            br.close();
            response.setHeader("content-disposition", "attachment;filename=" + (new Date().hashCode()) + ".txt");
            byte buffer[] = new byte[1024];
            int len = 1024, saveLen = len;
            InputStream is = new FileInputStream(downFile);
            OutputStream os = response.getOutputStream();
            while ((len = is.read(buffer, 0, len)) > 0) {
                os.write(buffer, 0, saveLen);
                saveLen = len;
            }
            is.close();
            os.close();
        }
    }

    @GetMapping("/search")
    public ModelAndView Search(HttpServletRequest request,HttpServletResponse response){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        String key=request.getParameter("key");
        if(loginUser!=null){
            mav.setViewName("search");
            mav.addObject("loginUser",loginUser);
            List<Chara> result=charaService.search(key);
            mav.addObject("result",result);
        }else{
            mav.setViewName("login");
        }
        return mav;
    }

    @GetMapping("/weapon")
    public ModelAndView weapon(HttpServletRequest request, HttpServletResponse response){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            Integer id=-1;
            try {
                id = Integer.valueOf(request.getParameter("id"));
            }catch (Exception e){

            }
            Weapon w=weaponService.getWeaponByID(id);
            if(w.getName()==null)mav.setViewName("noresult");
            else {
                mav.setViewName("/encyclopedia/weapon");
                mav.addObject("loginUser", loginUser);
                mav.addObject("weapon",w);
            }
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
    @GetMapping("/calendar")
    public ModelAndView calendar(HttpServletRequest request){
        ModelAndView mav=new ModelAndView();
        User loginUser= userService.checkCookie(request.getCookies());
        if(loginUser!=null){
            mav.setViewName("calendar");
            mav.addObject("loginUser",loginUser);
        }else{
            mav.setViewName("login");
        }
        return mav;
    }
}
```

## **4. 项目目录/文件结构**

./src/main 
├── java 
│   └── com
│       └── yuanshenwiki 
│           └── yuanshenwiki 
│               ├── bean
│               │     ├── Chara.java     角色信息实体类
│               │     ├── Commit.java     角色评论实体类
│               │     ├── User.java     用户信息实体类
│               │     ├── wCommit.java      武器评论实体类           
│               │     └── weapon.java     武器信息实体类
│               ├── controller
│               │     ├── CommitController.java       
│               │     ├── RouterController.java       路径跳转控制器
│               │     ├── UserController.java      
│               │     └── wCommitController.java         
│               ├── mapper
│               │     ├── CharaMapper.java   
│               │     ├── CommitMapper.java   
│               │     ├── UserMapper.java   
│               │     ├── wCommitMapper.java   
│               │     └── WeaponMapper.java     
│               ├── service 
│               │     ├── CharaService.java   
│               │     ├── CharaServiceImp.java   
│               │     ├── CommitService.java   
│               │     ├── CommitServiceImp.java   
│               │     ├── UserService.java   
│               │     ├── UserServiceImp.java   
│               │     ├── WeaponService.java   
│               │     └── WeaponServiceImp.java      
│               ├── util
│               │     ├── IdUtil.java   
│               │     └── UserType.java    用户类型：普通用户/管理员
│               └──YuanshenwikiApplication.java 
└── resources
        ├── application.yml
        ├── static     
         │     ├── css    
         │     │     ├── cal.css
         │     │     ├── common.css
         │     │     ├── img_roll.css
         │     │     ├── login.css
         │     │     └── register.css
         │     ├── dist (semantic-ui resources)
         │     │     ├── components ...
         │     │     ├── semantic.css
         │     │     ├── semantic.js
         │     │     ├── semantic.min.css
         │     │     ├── semantic.min.js
         │     │     └── themes
         │     │              ├── basic ...
         │     │              └── default ...
         │     ├── img
         │     │     ├── avater    用户头像
         │     │     ├── character    角色图片
         │     │     ├── gacha     抽卡模拟界面图片
         │     │     ├── material
         │     │     ├── weapon    武器图片
         │     │     ├── background1.png
         │     │     └── (other images)
         │     └── js
         │            ├── cal.js
         │            ├── calculltor.js
         │            ├── calendar.js
         │            ├── common.js
         │            ├── jquery.min.js
         │            ├── jquery-3.5.1.min.js
         │            ├── login.js
         │            ├── recharge.js
         │            └── register.js
         └── templates
                 ├── encyclipedia
                  │     ├── chara.html
                  │     └── weapon.html
                 ├── calculator.html
                 ├── calendar.html
                 ├── common.html
                 ├── Encyclopedia.html
                 ├── gacha.html
                 ├── login.html 
                 ├── mainpage.html
                 ├── news.html
                 ├── noresult.html 
                 ├── profile.html
                 ├── register.html 
                 └── search.html

## 5. 测试文档

详见test.pdf。

## 6. 开发过程及小组分工

小组分工：

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2034.png](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/Untitled%2034.png)

本项目采用Github进行版本管理，开源，所有commit记录都可在仓库界面查看到(repository link: [https://github.com/Abyss-of-Dragon/Cjjpsz](https://github.com/Abyss-of-Dragon/Cjjpsz))，以下为部分commit记录：

![Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/123.jpg](Cjjpsz%E9%A1%B9%E7%9B%AE%E6%96%87%E6%A1%A3%E2%80%94%E2%80%94%E5%8E%9F%E7%A5%9EWiki%20db1bd50bae954ed4b003d031b16057c1/123.jpg)







**——————————————————————————————————————————————                                                    **                                          																	**| FULL STOP | JUN 2021 |**

