---
id: introduction
title: 什么是 AuTool?
slug: introduction
order: 1
---

AuTool 是一个由 AI 驱动的工作流自动化平台。AuTool 让自动化重复性任务、优化工作流程和将 AI 技术集成到桌面环境中变得更加容易。

## 将 AI 集成到工作流程中

AuTool 让简化您的工作流程变得更加容易。只需点击一下即可激活 AI 助手为您执行任务。例如，您可以要求您的助手总结 PDF 文件（左侧）或从图像中复制段落（右侧），无需打开软件或上传文件。

<div style="overflow-x: auto;">
<table align="center" style="width:900px;">
  <thead>
    <tr>
      <th align="center"><a href="sample/ai-tools">选择 PDF 提取摘要</a></th>
      <th align="center"><a href="sample/ai-tools">一键抠图</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:10px"><img src="https://raw.githubusercontent.com/danalite/awesome-autool-scripts/master/danalite/Mini-Tools/Summarize-PDFs/summary-pdf.gif" style="width:500px;max-width:500px" /></td>
      <td style="padding:10px"><img src="https://raw.githubusercontent.com/danalite/autool/main/docs/demo-screen-mask.gif" style="width:500px;max-width:500px" /></td>
    </tr>
  </tbody>
</table>
</div>

## AI 生成的工作流

AuTool 提供了一个经过微调的 ChatGPT 模型，可以根据您的描述创建工作流。生成的工作流由自动化任务（显示为蓝色块）和需要人工批准的监督任务（显示为橙色块）组成。

<div style="overflow-x: auto;">
<table align="center" style="max-width:900px">
  <thead>
    <tr>
      <th align="center">客户支持的示例工作流程</th>
      <th align="center">需要人工批准的监督任务</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:10px"><img src="https://cdn-proxy.slickplan.com/imgs/artwork/sample-workflow-diagram.svg" style="width:500px;max-width:500px" /></td>
      <td style="padding:10px"><img src="https://raw.githubusercontent.com/danalite/awesome-autool-scripts/master/danalite/Mini-Tools/Ask-For-Permission/demo.gif" style="width:500px;max-width:500px" /></td>
    </tr>
  </tbody>
</table>
</div>

## 更多优势

### 简单的云服务

AuTool 不仅提供云 AI 服务，还提供免费的监控服务，让您随时了解所需信息。您可以完全控制接收哪些内容。以下是快速监控亚马逊最新交易并在桌面或手机上获得通知的示例。

<div style="overflow-x: auto;">
<table align="center" style="width:900px;">
  <thead>
    <tr>
      <th align="center">桌面通知</th>
      <th align="center">手机通知</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:20px"><img src="https://raw.githubusercontent.com/danalite/awesome-autool-scripts/master/danalite/Mini-Tools/Amazon-Deals/demo.gif" style="width:500px;max-width:500px" /></td>
      <td style="padding-left:100px;padding-right:100px"><img src="https://camo.githubusercontent.com/10703b6abfa85c320f3371710ffdd7f72ef6399c2856ac463827b101a5c0e8ea/68747470733a2f2f6170702e6f6e657369676e616c2e636f6d2f696d616765732f696f735f31305f6e6f74696669636174696f6e5f696d6167652e676966" style="width:300px;max-width:500px" /></td>
    </tr>
  </tbody>
</table>
</div>

## 简单的工作流开发

为了降低工作流开发的成本，AuTool 引入了一组 API，允许用户自定义其工作流。用户可以使用这些 API 轻松定义工作流逻辑或修改 UI 组件。请查看我们的[API 参考文档](api-reference/control)获取更多详细信息。

### 连接软件

AuTool 允许您将多个软件组件组合成一个工作流，并在单击时运行它们。AuTool 支持任意桌面和 Web 应用程序，并且使用 AuTool API 完全可自定义工作流。例如，您可以设置一个工作流，每当网站更新时自动向团队发送一条消息。这是通过连接网站监视器和群组消息发送器完成的。

<img src="https://healthwhale.io/content/images/2021/11/f059ad939b205836d2957612ba405177.png" style="width:500px;max-width:500px" />
