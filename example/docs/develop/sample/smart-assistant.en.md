---
id: smart-assistant
title: Smart Assistant
slug: smart-assistant
order: 1
---

# AI Tools

AuTool provides a wide range of AI scripts to help you with your daily work. You can use them to generate text, chat with AI, segment images, etc. Here is a few representative examples.

## AI Chatbot

[![Download](https://img.shields.io/badge/script-download-green?logo=dependabot&style=flat-square)](https://google.com)
[![Source](https://img.shields.io/badge/script-source-blue?logo=dependabot&style=flat-square)](https://google.com)

Talk with GPT assistant in a popup window. Your input will be sent to background GPT API to get response. The script support chat history backup and loading.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/sample-ai-chatbot.png"/>

## Image Segmentation

Press `Fn` and single click on the image on the screen to extract the segmentation. No need to screenshot, upload to a website to get the segmentation. This script is backed by Meta's SegmentAnything Model. [Source](https://raw.githubusercontent.com/danalite/autool/main/docs/demo-screen-mask.gif)

<img src="https://raw.githubusercontent.com/danalite/autool/main/docs/demo-screen-mask.gif" alt="Image"/>

# Web Tools

Here we show a few AuTool script examples that help you with web browsing. If you want to automate web operations, please refer to [Web Automation](./process-automator#web-automation) section.

## Webpage Parsing

[![Download](https://img.shields.io/badge/script-download-green?logo=dependabot&style=flat-square)](https://google.com)
[![Source](https://img.shields.io/badge/script-source-blue?logo=dependabot&style=flat-square)](https://google.com)

You can specify a wide range of actions to extract data from the web pages using [web ops](../scripts/web) provided by AuTool scripting language. Here we show a simple script to extract your purchase history from amazon into a database. All you need to do is to specify your account credentials and the script will extract the selected fields from the web page and save them into a CSV file.

<img src="https://media.idownloadblog.com/wp-content/uploads/2020/02/Amazon-Order-History-Report-in-Spreadsheet.jpg"/>

## JSON Visualization

You can use AuTool to query REST APIs and get the response in a popup window. Here we show a simple script to query the latest landscape images from [yande.re](https://yande.re/post?tags=landscape) and display them in a popup window.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/sample-restapi-search.gif"/>

# System Tools

AuTool script can communicate with your operating system through shell interface and certain runtime intrinsic APIs. You can use this capability to automate certain tasks to improve your productivity.

## File Search

This example shows a simple script that searches and open files in a popup window. The popup window is configured to close instantly on your first selection. You can also modify the script to select multiple files and perform batch operations (e.g., renaming, or uploading to cloud storage)

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/sample-item-search.gif"/>

## System Status Monitor

Sometimes you may want to track the system status changes, e.g., clipboard, active window, or network status. AuTool provides a convenient way to monitor these changes, and you can leverage this capability to build interesting tools.

Here we show a simple script that manages your clipboard history. When the script is running in the background, it will monitor your clipboard changes and save them into a database. You only need to hit a predefined hotkey to open the clipboard history in a popup window, and then you can select the item to paste or delete it.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/sample-clipboard-manager.png"/>

## Window Management

Managing windows can be a tedious task. AuTool provides a convenient way to manage windows in a popup window. You can use our scripts to move a particular window to a specific position on the screen, move windows to other monitors, or resize them. This example shows a simple script that closes windows in batches.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/sample-close-windows.png"/>
