---
id: Develop-Scripts
title: Write a Script
slug: develop-Scripts
order: 4
---

##

AuTool plugin is designed for simple helpers with low user interactions. If you have a task that requires a lot of user interactions or many third-party dependencies, you should consider writing a standalone app instead.

## Specify actions using YAML

Every AuTool plugin is a simple YAML file which defines a sequence of automation steps, such as mouse clicks, keystrokes, web interactions, and more.

```yaml
actions:
  - window.in(System Settings):
      - mouse.click({{ [0,200] }})
      - key.press(Enter+Shift)
```

## Display with popup windows

Plugins can instantiate popup windows to ask for user inputs. All the GUI components in the popup window are defined in YAML in JSON syntax. Example of a popup window that asks for user name:

```yaml
actions:
  - >-
    user.input({{ {
      'title': 'Enter user name',
      'content': {
        'type': 'text',
        'key': 'username'
      }
    } }}) => $resp

  - os.shell( got {{ $resp['username'] }})
```

## Screen Annotations

Plugins can draw stickers on your screen. This can be used as reminders, or guide people how to use a software.

```yaml
actions:
  - window.is(System Settings):
      - >-
        window.annotate({{ [{
            'type': 'box',
            'position': [0, 0, 200, 200],
            'content': 'click here to start'
          } ] }})
```

## Event-Driven Programming

AuTool captures events from the system and triggers actions based on the event type. For example, you can write a plugin that monitors the clipboard and sends the content to a Discord channel when the clipboard changes.

```yaml
actions:
  - event.on(__CLIPBOARD_CHANGE__) => $r:
      - cmd.if({{ $r['type'] == 'text' }}):
          - user.input(...)
```
