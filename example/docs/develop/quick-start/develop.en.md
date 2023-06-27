---
id: Develop-Scripts
title: Develop scripts
slug: develop-Scripts
order: 4
---

# Develop plugins

- AuTool plugin is designed for simple helpers with low user interactions. If you have a task that requires a lot of user interactions or many third-party dependencies, you should consider writing a standalone app instead.

## Automate with YAML

Every AuTool plugin is a simple YAML which defines a sequence of automation steps, such as mouse clicks, keystrokes, web interactions, and more.

```yaml
actions:
  - window.in(System Settings):
      - mouse.click({{ [0,200] }})
```

## Talk to popup windows

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

### Pin stickers on screen

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

### Let apps collaborate

You can connect multiple apps into a pipeline. For example, the following plugin will send a message to your Discord channel when a new email titled with `Hello` is received.

```yaml
actions:
  - event.on(__IMAP__, {{ {'email':'...' } }}) => $r:
      - cmd.if({{ $r['title'] == 'Hello' }}):
          - web.http(POST, https://discord.com/api/webhooks/...)
```
