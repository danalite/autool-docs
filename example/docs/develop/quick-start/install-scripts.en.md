---
id: Install-Scripts
title: Add New Scripts
slug: Install-Scripts
order: 3
---

This chapter will talk about how to add new scripts. All the scripts are stored in the `$appHome/scripts` folder. AuTool categorizes scripts into different folders based on the author and app name. For example, a `Test-Hello-World` script from `danalite` will be stored in `$appHome/scripts/danalite/Test-Hello-World.yaml`.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/basic-app-home.png"/>

## Install from URL link

We provide a URL scheme to install scripts from a URL link. Make sure AuTool is running before you click the link. Visit the following link and AuTool will be activated to download the script from the given URL.

```shell
# AuTool will download the script from the given URL into AppHome/Scripts
autool://download?url=https://github.com/danalite/awesome-autool-scripts/tree/master/danalite/Unit-Tests
```

## Download from GitHub

You can download a GitHub folder containing scripts in AuTool as well. Click the `+` button in the main window, select `Download` tab and input a GitHub URL, e.g., `https://github.com/danalite/awesome-autool-scripts/tree/master/danalite/Unit-Tests`.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/basic-download-app.png"/>

## Create new scripts

You can create a new script bundle by clicking the `+` button on the main window. The popup dialog will ask you to input author name and app name. This will create an app folder under `$appHome/scripts` and you can edit the scripts using your favorite editor.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/basic-empty-app.png"/>

## Edit scripts

Each app and script is editable. You can hover or right-click on the app or script to see the edit button. Click the edit button and the script will be opened, and you can edit it using your favorite editor.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/basic-edit-app.png"/>
