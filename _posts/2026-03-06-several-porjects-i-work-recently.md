---
title: 我最近做的几个项目
author: Lihus
date: 2026-03-06 10:12:30 +0800
categories: [CS]
tags: [AI,Github,Web,Rednote,Script]
---

一个多月没更新了，时间比较少。这段时间里把Zhaohub项目完善了，特别是把ui大改了。原本的ui非常有ai味，我花了一晚上改正常了。

电脑里装了Gemini CLI和codex，有关电脑管理的全局操作方便多了。写了一个[小红书ai宠物](https://github.com/lihuss/rednote-pet)项目，给ai分配了一个xhs账号用来刷小红书、和网友互动，而且认得我这个主人。这是因为去年看过ChatGPT Operator有这种自主刷小红书的能力。不过目前项目不够完善。有时间就更新。

还有就是前几天写了个[油猴脚本](https://github.com/lihuss/AnswerExporter)，能将知乎用户的所有回答和文章导出为Markdown。起因是27号时看到投资大佬Mr Dang像是要转战小红圈，所以想把他的精华保留下来以后细读（经过允许）。虽然后来他仍然在知乎活跃。

后面打算找时间做个爬虫类的项目，抓取最新的金融资讯，其实主要是想抓取百度的，因为不少人都说百度的嗅觉很灵敏，每次都是先入局但总是被其他大厂后来居上。这至少足够说明百度的眼光很好。所以我打算抓取百度的最新投入方向。

说起这个，才想起来，写rednote-pet之前我还写了一个自动发表公众号文章的项目。本来用的是gemini的api，但是它不能高频调用，所以改成了物美价廉的ds。但是后面发现好像被限流了，可能是我的领域跨度太大，也可能检测到我是ai。

后面觉得ds文笔还是不行，就在GeminiCLI配置了skill和mcp，能直接爬取知乎和medium等等反爬强的文章，一句话让就能让gemini发文章。刷知乎刷到适合写文的，直接发链接给Gemini就能阅读后依题输出。还能学习特定知乎用户的表达和文风。当然这不适合公布了。就先公布deepseek版的吧，[上面说的自动发表公众号文章](https://github.com/lihuss/gongzhonghao_agent_team)，能不能用随缘，因为是vibe coding。