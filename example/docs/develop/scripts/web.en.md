---
id: web-automation
title: Web Operators
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

Open a web URL.

```yaml
actions:
  - web.open('https://autool.site')
```

## web.find

Find an element by CSS selector. The element will be stored in the variable `element`.

```yaml
actions:
  - web.find('input[name="q"]') => $elements
```

## web.http

Send an HTTP request. The response is an JSON object.

```yaml
actions:
  - web.http(GET, ...) => $r
```

## web.wait

Wait for an element to appear or disappear, or wait until the session is closed by the user.

```yaml
actions:
  # Wait for an element to appear
  - web.wait('input[name="q"]', 10) => $element

  # Wait until the session is closed by the user
  - web.wait()
```
