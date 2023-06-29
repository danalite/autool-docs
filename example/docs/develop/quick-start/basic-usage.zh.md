---
id: Basic-Usage
title: Basic Usage
slug: Basic-Usage
order: 2
---

Once you have installed AuTool, double click the AuTool icon to start the app. AuTool will automatically download test cases script bundle after launch for the first time.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/basic-main-window.png" alt="Test Cases" width="600"/>

## Run Test Cases

We recommend you to run the test cases first to make sure everything is working as expected. You can click any scripts on the right hand side of the main window to run it. You should expect a popup window to show up on the canvas.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/basic-hello-world.gif" alt="Test Cases" width="600"/>

## Collapse into TaskBar

AuTool's main window can be minimized into a taskbar (or restored to normal window) by clicking the rabbit icon on the top. You can select the checkbox in front of the scripts that you use frequently, and invoke the script from the minimized taskbar.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/basic-taskbar.gif"/>

## Task Management

AuTool use coroutine to execute many tasks in parallel within a single process. You can see the task status and manage them in the task panel. A task can be stopped, restarted, or scheduled (with a timer or custom hotkey). All these can be configured in the task panel.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/basic-task-panel.png" alt="Test Cases" width="600"/>

## AuTool Hotkeys

AuTool provides some hotkeys to help you to quickly access the main window, canvas window, and bookmark window. We use the term `Double-Tap` to indicate that you need to press the key twice in a short period of time.

- [Double-Tap Cmd/Win](https://raw.githubusercontent.com/danalite/autool-docs/main/images/basic-double-tap-cmd.gif) to show or hide AuTool main window. This is useful when you want to hide the main window temporarily and show it again later.

- [Double-Tap Shift](https://raw.githubusercontent.com/danalite/autool-docs/main/images/basic-double-tap-shift.gif) to show or hide AuTool's canvas window. The popup window residing in the canvas window will be hidden but won't be closed.

- [Cmd/Win + D](https://raw.githubusercontent.com/danalite/autool-docs/main/images/basic-bookmark.gif): to wake up or hide AuTool BookMark window. You can put your frequently used website links in the bookmark panel (`AuTool > Settings > BookMark`) and pull it up on the canvas window.

## Debugging

If you do not see any popup windows after executing the test cases, please go to `AuTool > Settings > Server` and check if the _local worker_ is working. If not, please click the refresh icon to restart the server.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/basic-task-server.png" alt="Test Cases" width="600"/>

If the local worker is working, but you still run into some failures when running certain scripts. Please open the DevTools and check the log. Please [report the issue to our github](https://github.com/danalite/autool/issues/new) if you cannot figure out the problem.

<img src="https://raw.githubusercontent.com/danalite/autool-docs/main/images/basic-debug.png"/>
