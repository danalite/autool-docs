---
id: anki-vocab-flashcards.en
title: 背单词小助手
slug: anki-vocab-flashcards.en
order: 3
---

## 使用方法

只需运行脚本，即可提示您复习多个单词列表。脚本使用 ChatGPT 生成一个包含单词的句子，并可以点击播放按钮听取句子。在最后一部分，您应选择您是否熟悉这些单词。如果您不认识这个单词，脚本将把这个信息传递给 Anki 服务器，稍后会提示您复习。

<img src="https://raw.githubusercontent.com/danalite/awesome-autool-scripts/master/danalite/Mini-Tools/Daily-Vocabulary/demo-daily-vocabulary.gif" alt="Image" style="width:800px;max-width:800px"/>

## 脚本工作原理

请注意，此脚本需要以下依赖项。除 ChatGPT 外，所有其他依赖项都是免费的。如果您想要一个完全免费的版本，您可以使用其他 LLM 模型，如 LLAMA、FastChat 等。

### Anni Connect

Anki 是一个强大的学习工具。它是一款使用分散重复算法来确定您何时应该复习每张卡片的闪卡应用程序。Anki Connect 是 Anki 的插件，允许您从任何外部脚本操纵您的 Anki 集合。您可以在[这里](https://foosoft.net/projects/anki-connect/) 找到有关 Anki Connect 的更多信息。

### TTS API

TTS 表示文本到语音。它是一种将文本转换为语音的技术。有许多 TTS API 可在互联网上使用。在此脚本中，我们使用 [Google TTS API](https://cloud.google.com/text-to-speech). 您也可以使用其他 TTS API，如 [IBM Watson](https://www.ibm.com/watson/services/text-to-speech/) 或者 [Amazon Polly](https://aws.amazon.com/polly/).
