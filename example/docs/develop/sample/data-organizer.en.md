---
id: data-organizer
title: Data Organizer
slug: data-organizer
order: 2
---

In this chapter, we will introduce some AuTool scripts that help you organize your data. The data can be anything stored in your system, like local or remote files. AuTool script provide a convenient way to organize your data in the popup window, making it easier for you perform operations on them.

## Local file search

Input the keyword, and the script will search for files in your local disk. You can choose to open the selected file right away, or you can select multiple files and perform batch operations on them in the very end.

<img src="https://raw.githubusercontent.com/danalite/awesome-autool-scripts/master/danalite/Mini-Tools/App-Launcher/demo.gif" alt="Image" style="width:900px;max-width:900px"/>

## Output from other tools

This is a simple password manager, which stores passwords and other sensitive information. You can do the following things with it:

This script is simply a GUI wrapper on top of `pass`, which is a popular command-line password manager: https://www.passwordstore.org/

<div style="overflow-x: auto;">
  <img src="https://raw.githubusercontent.com/danalite/awesome-autool-scripts/master/danalite/Mini-Tools/Password-Manager/demo-password-manager.gif" alt="Image" style="width:800px;max-width:800px"/>
</div>

## Learning

### Vocabulary Flashcards

Just run the script, and you will be prompted to review multiple word lists. The script uses ChatGPT to generate a sentence using the words in the list, and you can click the play button to hear the sentence.

In the last part, you should select whether you know the words well or not. If you don't know the word, the script will pass this information to Anki server, and you will be prompted to review the deck at some time later.

<img src="https://raw.githubusercontent.com/danalite/awesome-autool-scripts/master/danalite/Mini-Tools/Daily-Vocabulary/demo-daily-vocabulary.gif" alt="Image" style="width:800px;max-width:800px"/>

Note that this script requires the following dependencies. Except for ChatGPT, all other dependencies are FREE. If you want a completely free version, you can use other LLM models like LLAMA, FastChat, etc.
