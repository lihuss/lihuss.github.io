---
title: Github Contributing Methodology
author: lihus
date: 2025-11-19 20:19:39 +0800
categories: [CS]
tags: [github]
---

在树洞看到一篇帖子，记一下

> 你怎么能直接 commit 到我的 main 分支啊？！GitHub 上不是这样！你应该先 fork 我的仓库，然后从 develop 分支 checkout 一个新的 feature 分支，比如叫 feature/confession。然后你把你的心意写成代码，并为它写好单元测试和集成测试，确保代码覆盖率达到95%以上。接着你要跑一下 Linter，通过所有的代码风格检查。然后你再 commit，commit message 要遵循 Conventional Commits 规范。之后你把这个分支 push 到你自己的远程仓库，然后给我提一个 Pull Request。在 PR 描述里，你要详细说明你的功能改动和实现思路，并且 @ 我和至少两个其他的评审。我们会 review 你的代码，可能会留下一些评论，你需要解决所有的 thread。等 CI/CD 流水线全部通过，并且拿到至少两个 LGTM 之后，我才会考虑把你的分支 squash and merge 到 develop 里，等待下一个版本发布。你怎么直接上来就想 force push 到 main？！GitHub 上根本不是这样！我拒绝合并！

----------------------

*2025-11-24 更新*

### 协作流程

##### 创建功能分支：
在开始任何新工作前，从最新的 `main` 或 `master` 分支创建一个描述性的新分支，例如 `git checkout -b feature/user-authentication`。这能有效隔离不同功能的工作。

##### 进行开发工作：
在你的功能分支上进行修改、提交。提交信息务必清晰明了，说明本次提交的目的。

##### 与远程仓库同步：
在推送代码前，务必先拉取远程主分支的最新变更到你的功能分支：

```bash
git checkout main
git pull origin main
git checkout your-feature-branch
git merge main
```
这样做能尽早发现并解决潜在的集成冲突。

推送分支并发起Pull Request (PR)：
将你的功能分支推送到远程仓库：`git push origin your-feature-branch`。
随后在GitHub上对该分支发起Pull Request，请求将你的更改合并入主分支。在PR描述中清晰说明修改内容和依据。

代码审查与合并：
团队成员（或其他协作者）会对你的PR进行审查并提出意见。根据反馈进行修改。通过审查后，你的代码就可以合并入主分支了。