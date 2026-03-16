---
title: "拉马努金主定理"
description: "**拉马努金主定理（Ramanujan's Master Theorem）** 是数学天才斯里尼瓦瑟·拉马努金（Srinivasa Ramanujan）提出的一项著名结果，可以用来解决一些看起来很难的积分。它将函数的泰勒级数展开系数与其梅林变换关联起来。 ### 核心公式 如果一个实值或复值函数，可..."
publishDate: 2026-01-16T21:15:00+08:00
tags:
  - Calculus
  - Analysis
  - Maths
draft: false
comment: true
---

**拉马努金主定理（Ramanujan's Master Theorem）** 是数学天才斯里尼瓦瑟·拉马努金（Srinivasa Ramanujan）提出的一项著名结果，可以用来解决一些看起来很难的积分。它将函数的泰勒级数展开系数与其梅林变换关联起来。

### 核心公式

如果一个实值或复值函数，可以展开为如下形式的级数：

$$f(x) = \sum_{n=0}^\infty \frac{\phi(n)}{n!} (-x)^n$$

那么，在一定的收敛条件下，该函数的梅林变换（即  的积分）由下式给出：

$$\int_0^\infty x^{s-1} f(x) dx = \Gamma(s) \phi(-s)$$

通常，计算一个函数从零到正无穷的积分（梅林变换）是非常困难的，需要复杂的围道积分技巧。这个定理让我们可以通过泰勒展开或其他级数展开来计算这个积分。


### 示例

用一个经典的积分来验证它：**二项式展开与伽玛函数的关系**。

假设我们要计算积分：

$$\int_0^\infty x^{s-1} \frac1{1+x} dx$$


函数 $\frac1{1+x}$ 的泰勒级数展开（几何级数）为：

$$\frac1{1+x} = \sum_{n=0}^\infty (-1)^n x^n$$


我们需要把它写成 $\sum_{n=0}^\infty \frac{\phi(n)}{n!} (-x)^n$ 的形式。
观察项 $(-1)^n x^n$，它可以写成 $\frac{\phi(n)}{n!} (-x)^n$ 的形式。
为了凑出 $\frac{\phi(n)}{n!}$，我们分子分母同乘 $n!$：

$$\frac1{1+x} = \sum_{n=0}^\infty \frac{n!}{n!} (-1)^n x^n$$



因此，对比标准形式，我们发现这里的系数函数是：

$$\phi(n) = n!$$


根据定理，积分结果等于 $\Gamma(s) \phi(-s)$。
将 $\phi(n) = n!$ 替换为 $\phi(-s) = (-s)!$：


所以积分结果为：

$$\int_0^\infty x^{s-1} \frac1{1+x} dx = \Gamma(s) (-s)! = \frac{\pi}{\sin(\pi s)}$$

---

其实这是看到 MOB 定理才去学的，因为 MOB (Method Of Brackets) 定理本质就是拉马努金主定理，但是 MOB 暂时还没搞懂。

后面搞懂了再写一篇 MOB 的。