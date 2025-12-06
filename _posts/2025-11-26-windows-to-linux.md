---
title: 将系统从Win11换成Linux(Ubuntu)
author: lihus
date: 2025-11-26 23:12:35 +0800
categories: [CS]
tags: [Linux]
---

Windows的代码屎山越堆越多，今天本来想用自动任务计划运行脚本，但是出现各种问题。譬如自动任务这种少人问津而年久失修的小角落太多了，一打开这个界面，
Windows菜单就开始卡顿，无法输入文字，对键盘的响应完全混乱了。再结合以前遇到的种种问题，我决定换用Linux，追求更高的自定义自由。

# 烧录

从[Ubuntu官网](https://ubuntu.com/download/desktop#newsletter-signup)下载了最新版系统之后，再下载[Etcher](https://etcher.balena.io/#download-etcher)将iso文件烧录到U盘，烧录过程大概需要10分钟。

注意，如果烧录过程提示已被压缩过或可能损坏，可能是因为U盘以前被用作启动盘，比如我的
U盘以前就装了大白菜，所以要到计算机管理->磁盘管理，将U盘分区删除，直到成为未分配空间。烧录完成后U盘在Windows Explorer显示成了两个盘，而且无法打开。
如果尝试双击打开，Windows会提示进行格式化，这时**不要**格式化。实际上烧录已经完成，只不过Windows文件系统无法读取格式，如果格式化会**将烧录的ubuntu系统删除**.这是只需重启电脑，进入BIOS启动菜单，启动Linux系统即可。

# 启动

重启电脑，根据你的电脑设置，在启动时按F2,F10或者esc进入BIOS菜单（有的电脑不需按键即可进入）。
重启电脑后，有四个选项：

+ Try or Install Ubuntu
+ *Ubuntu(safe graphics)
+ Boot from next volume
+ UEFI firmware settings

选择第一个按Enter。

若出现错误

> error:failure reading sector 0x0 from 'hd0'
> error:you need to load the kernel first.
> Press any key to continue...

先尝试重启。

进入Ubuntu之后，左边的任务栏第一个图标是Install Ubuntu，先体验一下应用程序、声卡、网卡、显卡是否正常，然后再点击安装。如果系统加载时间长，
点击应用都无响应，则可能U盘硬件有问题，产生I/O错误，应该更换新的U盘重新烧录。

> 平时使用U盘应关闭所有与之有关的应用程序，点击安全弹出后再拔出。保管U盘要避免潮湿、过热环境和磁场。

-----------------------------

好的，用U盘安装的方式就写到这了，因为我是真的U盘有异常。。。下面转到不用U盘安装的的流程。

----------------

# 分区

下载DiskGenius和EasyUEFI，创建60GB 和6+GB的分区，格式化为FAT32，将iso文件解压到此分区。再将前者删除，使其成为未分配空间。

然后打开EasyUEFI,点击 *管理EFI启动项* ，创建新项，类型选择 *Linux或者其他操作系统* ，填写描述后选择选择6+GB的分区，然后
在文件路径浏览选择 `\EFI\boot\grubx64.efi` .

点击确定，回到主窗口，将启动序列中的linux系统排在第一位。

# 安装

重启电脑，按F2或F10等特定热键进入BIOS界面，按F7切换到高级模式，在Settings->Advanced->Windows OS Configuration将Secure Boot设置为Disabled.

再次重启，即可像上面U盘安装步骤一样，点击try or install ubuntu，进入跟随引导安装即可。安装位置选择 Install along Windows boot manager，选择那个未分配的分区。

# 收尾

安装完后重启进入Windows，打开EasyEFI,将原来设置的启动项删除，保留ubuntu安装后产生的启动项。然后将分区合并。
    