---
id: anki-vocab-flashcards.en
title: Vocabulary Flashcards
slug: anki-vocab-flashcards.en
order: 3
---

## Usage

Just run the script, and you will be prompted to review multiple word lists. The script uses ChatGPT to generate a sentence using the words in the list, and you can click the play button to hear the sentence.

In the last part, you should select whether you know the words well or not. If you don't know the word, the script will pass this information to Anki server, and you will be prompted to review the deck at some time later.

<img src="https://raw.githubusercontent.com/danalite/awesome-autool-scripts/master/danalite/Mini-Tools/Daily-Vocabulary/demo-daily-vocabulary.gif" alt="Image" style="width:800px;max-width:800px"/>

## How this script works

Note that this script requires the following dependencies. Except for ChatGPT, all other dependencies are FREE. If you want a completely free version, you can use other LLM models like LLAMA, FastChat, etc.

### Anni Connect

Anki is a powerful tool for learning. It is a flashcard app that uses a spaced repetition algorithm to determine when you should review each card. Anki Connect is a plugin for Anki that allows you to manipulate your Anki collection from any external script. You can find more information about Anki Connect [here](https://foosoft.net/projects/anki-connect/).

### TTS API

TTS stands for Text-to-Speech. It is a technology that converts text into speech. There are many TTS APIs available on the Internet. In this script, we use the [Google TTS API](https://cloud.google.com/text-to-speech). You can also use other TTS APIs like [IBM Watson](https://www.ibm.com/watson/services/text-to-speech/) or [Amazon Polly](https://aws.amazon.com/polly/).
