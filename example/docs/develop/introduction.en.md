---
id: introduction
title: What is AuTool?
slug: introduction
order: 1
---

AuTool is a desktop extension system that brings the convenience of browser plugins to your desktop. You can use AuTool to streamline your daily tasks, automate your workflows, or create your own work assistant.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/intro-main-window.png"/>

Similar to browser extensions, an AuTool script can run either silently in background or interactively through a popup window. The content of the popup window is fully customizable using YAML, so you can create your own UI for your script.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/intro-popup-window.png"/>

# AuTool Script Examples

You can use AuTool to create your own scripts. Check out [Write-Your-Own-Script](./quick-start/develop) section for more details, or you can download scripts from the [AuTool Script Library](https://github.com/danalite/awesome-autool-scripts)

## Smart Assistants

- [AI chatbot](sample/smart-assistant#ai-chatbot)
- [File Search](sample/data-collector#ai-chatbot)
- System Status Monitor
- Knowledge Subscription

## Process Automation

- Webpage Parsing
- Change system settings

# Why we designed AuTool?

AuTool is not just another RPA or desktop smart assistant. It is proposed to solve the following problems:

## Composable Software

You may suffer from the SaaS fragmentation problem. where you have to install different apps to get a single task done, or the other way around, when you only need a single feature to get things done, but you have to install the whole gigantic app to get the feature.

Is there a simple way to let users to choose what features they want and design a minimal GUI app that fits their needs, without incurring too much overhead? AuTool is designed to solve this problem. We call it "composable software". We provide a JSON-like scripting language to allow users to pick the desired functional components to build an app that perfectly fits their needs.

<img src="https://a.storyblok.com/f/112369/2560x1440/fdf085ac90/thumbnail-three-key-aspects-of-composable-commerce.png"/>

## AI-assisted SaaS

SaaS is supposed to make people's life easier, but with increasing complexity in business logic and some technical debts, the software system can be surprisingly hard to use. You often need to spend a lot of time to learn how to use the software and what caveats to avoid. This is another problem that AuTool is trying to solve. We want to find a way to let AI to tackle with the complex software operations, and you only need to tell the AI what you want to do.

To achieve this goal, we abstract the software operations into a series of programming language primitives, and use AI to learn the mapping between the user's intent and these primitives to realize AI-assisted SaaS automation.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/intro-auto-saas.jpg"/>
