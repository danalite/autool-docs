---
id: data-collector
title: Data Collector
slug: data-collector
order: 1
---

This chapter introduces how to use AuTool to ease the data collection from various sources. We use "data collection" to indicate the process of getting to know something you did not know or have. Some examples include: asking AI agent questions, querying REST APIs, or extracting information from web pages or screenshots.

## AI Chatbot

[![Image](https://img.shields.io/badge/win64-download-green?logo=dependabot&style=flat-square)](https://google.com)

Talk with GPT assistant in a popup window. Your input will be sent to background GPT API to get response. The script support chat history backup and loading. [Source](https://raw.githubusercontent.com/danalite/autool/main/docs/demo-screen-mask.gif)

## Web Automation

You can specify a wide range of actions to extract data from the web pages using [web ops](../scripts/web) provided by AuTool scripting language. Here we show a simple script to extract your purchase history from amazon into a CSV.

## Query REST APIs

You can use AuTool to query REST APIs and get the response in a popup window. Here we show a simple script to query the latest landscape images from [yande.re](https://yande.re/post?tags=landscape) and display them in a popup window. [Source](https://raw.githubusercontent.com/danalite/autool/main/docs/demo-screen-mask.gif)

## Image Segmentation

Press `Fn` and single click on the image on the screen to extract the segmentation. No need to screenshot, upload to a website to get the segmentation. This script is backed by Meta's SegmentAnything Model. [Source](https://raw.githubusercontent.com/danalite/autool/main/docs/demo-screen-mask.gif)

<div style="overflow-x: auto;">
    <img src="https://raw.githubusercontent.com/danalite/autool/main/docs/demo-screen-mask.gif" alt="Image" style="width:500px;max-width:500px"/>
</div>

## Information Subscription

We provide an amazon deal monitor script which will popup a window when there is a deal on the product you are interested in. You can configure the products type in the script, or change the information source, frequency based on your own needs.

## System Status Monitor

We provide a clipboard manager using the system event API in AuTool. When the script is running, it will monitor the clipboard change event and save the clipboard history to a file.

You can also use the system event API to monitor other system events, such as active window change, system status, and more.
