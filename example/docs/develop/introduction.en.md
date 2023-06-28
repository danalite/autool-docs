---
id: introduction
title: What is AuTool?
slug: introduction
order: 1
---

AuTool is a desktop extension system that brings the convenience of browser plugins to your desktop. You can use AuTool to streamline your daily tasks, automate your workflows, or create your own work assistant.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/intro-main-window.png"/>

# AuTool Plugin Examples

We listed a few examples below to give you an idea of what AuTool can do. To try it out, simple click the download button inside each link to install the script.

## Data Collector

- [AI chatbot](sample/data-collector#ai-chatbot)
- Webpage parsing
- Status Monitor: website, email, or system status
- News Feeds: monitor news or events from various sources
- Use cloud API to process or visualize data

## Data Organizer

- File Search: to locate files in local disk or cloud storage
- Flash Cards: organize news or knowledge to make it easier to read and memorize

## Process Automator

- File processing: convert file formats, summarize data using power of AI
- Event reminders: popup a window to remind you of important events
- Open or toggle system settings: mute, brightness, background, and more

# Why we designed AuTool?

AuTool is not just another RPA or desktop smart assistant. It is proposed to solve the following problems:

## Composable Software

You may suffer from the SaaS fragmentation problem. where you have to install different apps to get things done. For example, you may use a note-taking app to take notes, a calendar app to manage your events. Or the other way around, when you only need a single feature to get things done, but you have to install the whole gigantic app to get the feature.

Is there a simple way to let users to choose what features they want and design a minimal GUI app that fits their needs, without incurring too much overhead? AuTool is designed to solve this problem. We call it "composable software". We provide a JSON-like scripting language to define the GUI and the automation steps. You can use it to create a minimal GUI app that fits your needs.

## AI-assisted SaaS

SaaS is supposed to make people's life easier, but with increasing complexity in business logic and some technical debts, the software system can be surprisingly hard to use. You often need to spend a lot of time to learn how to use the software and what caveats to avoid. This is another problem that AuTool is trying to solve. We want to find a way to let AI to tackle with the complex software operations, and you only need to tell the AI what you want to do.

To achieve this goal, we abstract the software operations into a series programming language primitives, and use AI to learn the mapping between the user's intent and the programming language primitives. We call this "AI-assisted SaaS". We hope that in the future, you can use AuTool to create your own work assistant, and let the AI to handle the complex software operations for you.

## Free Smart Assistant

Last but no least, we want to make a FREE infrastructure for people to build lightweight smart assistant that can help you with your daily tasks, with minimal efforts. We hope that AuTool can be a platform for people to share their work assistant scripts, and we can build a community to help each other to create a better work assistant.
