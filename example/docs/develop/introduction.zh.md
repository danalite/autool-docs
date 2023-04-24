---
id: introduction
title: 什么是 AuTool？
slug: introduction
order: 1
---

欢迎使用 AuTool -- 一个由人工智能驱动的工作流自动化平台，完全开源并免费使用。AuTool 提供了一个易于使用的平台，用于自动化重复任务、优化工作流程以及将人工智能技术整合到您的桌面环境中。通过 AuTool，您可以简化工作流程、减少错误，同时利用最新的人工智能技术增强您的能力。

# 为什么选择 AuTool？

## 将人工智能技术整合到工作流程中

AuTool 将人工智能技术无缝整合到您的桌面环境中，使您能够利用人工智能加速工作流程。以下是两个使用 AuTool 脚本定义的快速工作流程示例：

- 使用 GPT 对 PDF 进行摘要：从磁盘选择 PDF 文件，其内容将自动由 GPT 模型摘要。
- 使用 SAM 对图像进行分割：单击图像以选择感兴趣的区域。

<table align="center" style="width:1000px">
  <thead>
    <tr>
      <th align="center">使用 GPT 对 PDF 进行摘要</th>
      <th align="center">使用 SAM 对图像进行分割</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:10px"><img src="https://raw.githubusercontent.com/danalite/awesome-autool-scripts/master/danalite/Mini-Tools/Summarize-PDFs/summary-pdf.gif" style="width:500px;max-width:500px" /></td>
      <td style="padding:10px"><img src="https://raw.githubusercontent.com/danalite/autool/main/docs/demo-screen-mask.gif" style="width:500px;max-width:500px" /></td>
    </tr>
  </tbody>
</table>

我们在服务器上托管了各种最先进的人工智能模型，您可以使用 AuTool 脚本轻松将它们整合到您的工作流程中。AuTool 还提供一组预构建的人工智能驱动工作流程，以帮助您入门。

## 由人工智能生成的工作流程

人工智能已经被用来生成艺术和文本，为什么不用它来生成工作流程呢？想象一下，您可以有一个人工智能助手来为您完成重复性工作，就像 [AutoGPT](https://github.com/Significant-Gravitas/Auto-GPT) 一样，但拥有更多人类控制和可靠性。例如，我们要求 GPT 模型生成一个处理客户支持票据的工作流程（左侧）。每个蓝色框都是完全自动化的阶段，而橙色框是需要人类决策才能继续的检查点（右侧）。

<table align="center" style="max-width:900px">
  <thead>
    <tr>
      <th align="center">AI-generated workflow diagram</th>
      <th align="center">Prompt for human decision in AuTool</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:10px"><img src="https://cdn-proxy.slickplan.com/imgs/artwork/sample-workflow-diagram.svg" style="width:500px;max-width:500px" /></td>
      <td style="padding:10px"><img src="https://raw.githubusercontent.com/danalite/awesome-autool-scripts/master/danalite/Mini-Tools/Ask-For-Permission/demo.gif" style="width:500px;max-width:500px" /></td>
    </tr>
  </tbody>
</table>

## 其他好处

### 将软件组合成工作流程

AuTool 允许您将多个软件组件组合成工作流程，并在单击一次后运行它们。类似于 Zapier，但 AuTool 支持任意桌面和 Web 应用程序，并且可以使用 AuTool 脚本完全自定义工作流程。以下是我们提供的一些示例工作流程：

- 当您收到新电子邮件时，自动将附件保存到您的 Google Drive 中
- Parse
- Gather information

### 为客户提供简单的云服务

从您喜欢的网站获取最新的新闻、交易和更新，完全基于您自己的需求。这完全免于社交媒体平台的推荐算法！您拥有完全的控制权！

- 从亚马逊获取秒杀商品（从您选择的类别）
- 从您喜欢的新闻网站获取每日新闻推送
- 从您喜欢的研究网站获取每日研究论文

### Build GUI for command line tools

To build a pretty GUI for your favorite command line tools with only a few lines of AuTool scripts. Some quick examples:

- [GUI for password manager](): a simple GUI wrapper over [pass](https://www.passwordstore.org/), which is a minimal CLI tool that allows you to manage your passwords in a secure way.
- [GUI for anki-connect](): a simple GUI wrapper over [todo.txt-sh](https://www.passwordstore.org/), which allows you to manage your passwords in a secure way.
