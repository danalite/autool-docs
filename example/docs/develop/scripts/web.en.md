---
id: web-automation
title: Web Ops
slug: web-automation
order: 2
---

## web.init

Start a web browser instance. This is required before any other web actions, except `web.HTTP`.

```yaml
actions:
  # Setup profile, proxy, headless mode, and more
  - web.init({{ {'profile':..., 'proxy':...} }})
```

## web.open
