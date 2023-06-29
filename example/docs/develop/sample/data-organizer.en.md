---
id: data-organizer
title: Data Organizer
slug: data-organizer
order: 2
---

In this chapter, we will introduce some AuTool scripts that help you organize your data. We us e"data organization" to indicate the process of arranging or indexing through your data to quickly find the information needed.

The data can be anything stored in your system, like local or remote files. AuTool script provide a convenient way to organize your data in the popup window, making it easier for you perform extra operations on them.

## Item Search

In some cases, you may have many files on your local or remote disk, and you want to find a specific file (or multiple files) quickly. AuTool provides a convenient way to search for files and open them in the popup window.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/sample-item-search.gif"/>

## Quick Path for Shell Commands

There are many power command line tools that can help you manage your data. However, it is not easy to remember all the commands and their options. Using AuTool, you can store the frequently used commands in the YAML, write a simple GUI interface for command selection, and invoke them from a popup window.

As an example, we build a simple TODO script based on `Todo.txt`, which is a super lightweight command line tool to manage your TODo items in pure text file (Make sure you [install](http://todotxt.org/) it before using this script). Edit or check finished TODO items in the popup window, and the script will automatically call the `todo.sh` command to update the TODO text file under the hood.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/sample-todo.png"/>
