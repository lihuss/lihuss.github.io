---
title: Visa Card白嫖Google Cloud和Oracle
author: lihus
date: 2025-11-24 00:00:00 +0800
categories: [CS]
tags: [visa, server]
---

也是多次想白嫖免费的云服务器了，可是到处碰壁。中学时期注册了微软的Azure，结果要拍身份证，满十八岁才能用，后面这个账号因为长期不使用被永久封禁了。
Oracle是早有耳闻的慷慨，可是注册需要Visa或Master卡验证，也是把我击退了。直到看到NightWind分享他开了Google Cloud，2c1g美国，每个月免费200G流量的永久
机子，最近又心血来潮想和 [Yerdan](https://github.com/Yerdan54427) 开发高中母校的网站，也需要服务器，visa卡必须要搞定。

用pokepay，开卡花费 5 USD，激活要有 10 USD底金。充值只能用加密货币，就在okx买了USDT充进pokepay账户。

------
2025-12-4更

考虑到网速问题，最后还是买了阿里云的服务器。时隔两个星期，我又想注册Google Cloud，因为Gemini 3 Pro的监管越来越严格，已经用不了，所以想在Google Cloud
拿一个免费的服务器，这样就有了干净的IP。可是Google Cloud也不给我进。而此时Oracle又出现请求次数过多的问题，无法注册账号，要绝望了。

没办法，只能第三次曲线救国，目光投向有6个月试用期的亚马逊。最后也是成功注册了AWS，也需要用到信用卡。

# 搭建服务器

创建一个 Amazon Elastic Compute Cloud (EC2) ，系统选择Ubuntu 22.04，创建一个密钥对用于连接，选用RSA加密类型，文件格式为 `.pem`（如果用ssh连接的话）。
安全组一定要记得添加UDP。

密钥文件会自动下载，要保存好。

用ssh登录服务器，运行代码配置Wireguard:

```bash
curl -O https://raw.githubusercontent.com/angristan/wireguard-install/master/wireguard-install.sh
chmod +x wireguard-install.sh
sudo ./wireguard-install.sh

sudo apt update && sudo apt install -y netfilter-persistent iptables-persistent

sudo sysctl -w net.ipv4.ip_forward=1
sudo sed -i 's/#net.ipv4.ip_forward=1/net.ipv4.ip_forward=1/' /etc/sysctl.conf

sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
sudo iptables -A FORWARD -i wg0 -j ACCEPT
sudo iptables -A FORWARD -o wg0 -j ACCEPT

sudo netfilter-persistent save
sudo systemctl restart wg-quick@wg0

```
然后在Windows将生成的配置文件下载：
```ps1
scp -i C:\vpn\vpn.pem ubuntu@你的AWS公网IP:/root/windows.conf .
```

打开配置文件，将 `AllowedIPs = 0.0.0.0/0,::/0` 改成 `AllowedIPs = 0.0.0.0/1, 128.0.0.0/1`，避免ssh和vpn不能同时连接。


将配置文件导入Windows的wireguard即可连接。用这个代理就能正常访问Google Cloud并且一次通过注册时的visa卡验证。

    在访问Google cloud之前，要求开启 2FA Authentication，我又费劲去google play下载了 Google Authenticator，一直下载不了，
    显示pending。这才知道要开全局模式，不然代理会默认忽略.cn结尾的网址。

GCP默认不开转发，而且防火墙会阻止，所以要新增防火墙规则，放行WireGuard的UDP。设置规则时，将Target设置为 *All Instances in the network* 。另外，设置vpn客户端放行的防火墙规则，port选allow all.

然后在服务器上开启转发：

```bash
# 1. 确保内核转发真的开启（你可以再开一次，重复无害）
sudo sysctl -w net.ipv4.ip_forward=1

# 2. 清空 FORWARD 链旧规则（防止有隐藏拦截）
sudo iptables -F FORWARD

# 3. 放行 wg0 → 公网
sudo iptables -A FORWARD -i wg0 -j ACCEPT

# 4. 放行 公网 → wg0
sudo iptables -A FORWARD -o wg0 -j ACCEPT

# 5. 重启 WireGuard
sudo systemctl restart wg-quick@wg0

```

-------------------

昨天还能连上AWS，今天就不行了。中途不知道出了什么问题，连上了但是没有接收。调了很久，只能改用Outline了，我承认我菜。

在防火墙规则添加三条准入：

| Type       | Protocol | Port       | Source    |
| ---------- | -------- | ---------- | --------- |
| SSH        | TCP      | 22         | 你的IP      |
| Custom TCP | TCP      | 443        | 0.0.0.0/0 |
| Custom UDP | UDP      | 1024-65535 | 0.0.0.0/0 |
| Custom TCP | TCP      | 1024-65535 | 0.0.0.0/0 |

下载 Outlet Manager，点最后一个选项卡，按指引操作。

啊我宣布Outlet是神！！五分钟搞定了啊666.