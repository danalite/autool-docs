---
id: file-launcher
title: 文件启动器
slug: file-launcher
order: 2
---

## 使用方法

一个简单的文件启动器，只需输入关键词并单击即可快速启动您的文件。

<img src="https://raw.githubusercontent.com/danalite/awesome-autool-scripts/master/danalite/Mini-Tools/App-Launcher/demo.gif" alt="Image" style="width:900px;max-width:900px"/>

## 高级用法

### 选择多个文件

在某些情况下，您可能需要选择多个文件，并对它们进行一些其他操作（例如，重命名它们，将它们移动到文件夹中等）。您可以通过修改脚本中的 max 和 instantQuit 选项来实现

```yaml
# 选择第一个文件后不要退出
'instantQuit': False,
# 最多选择 4 个文件
'max': 4
```

### 正则表达式

我们支持使用正则表达式进行搜索。例如，您只需将 2023-/d/d 输入为关键字。这里 /d 是一个正则表达式，表示任何一个数字。因此，关键字将匹配 2023-01、2023-02、2023-03 等。有关正则表达式的更多信息，请参阅[Regular Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)。如果您不熟悉正则表达式，您可以要求 ChatGPT 为您编写表达式。

### 其他搜索选项

如果您想加速搜索，可以将搜索范围指定为特定文件夹。为此，您可以修改脚本中的 params 选项

```yaml
    'params' : {
      # Where to search files. You can specify a folder here
      'location': '~/Desktop',
      # The file extension to search
      'extensions': ['png'],
      # The size of the file in KB
      'size': [0, 1000]
    },
```
