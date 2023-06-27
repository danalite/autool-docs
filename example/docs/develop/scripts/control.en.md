---
id: control
title: Control Flow
slug: control
order: 1
---

## cmd.if

- Guard the commands that should be executed only when the condition is true. For example: only print `a is 1` when the variable `$a` is 1.

```yaml
actions:
  - cmd.if( {{ $a == 1 }} ):
      - cmd.print(a is 1)
```

## cmd.for_each

- Iterate through a list of items. For example: print each item in the list.

```yaml
actions:
  - cmd.for_each( {{ $items }} ) => $item, $index:
      - cmd.print({{ $item }} is in the list of index {{ $index }})
```

## cmd.while

- Run the commands in the loop until the condition is false. For example: print `0, 1, 2` in the loop.

```yaml
actions:
  - data.read({{ 0 }}) => $a
  - cmd.while({{ $a < 3 }}):
      - cmd.print($a)
      - data.read({{ $a + 1 }}) => $a
```

## cmd.sleep

- Sleep for a certain amount of time. For example: sleep for 1 second.

```yaml
actions:
  - cmd.sleep(1s)
```

## cmd.call

- it either calls a function defined using or another script by input the script path (it can be a local absolute or relative path, or a remote URL locator).

```yaml
actions:
  # call a function with passed in arguments
  - cmd.call(PRINTER, {{'a'}})

  # call a script with passed in arguments
  - cmd.call(./script.yaml, {{'a'}})
```

## cmd.fn

- Define a function. For example: define a function `PRINTER` that prints `AAA` when the calling argument equals to string `a`.

```yaml
actions:
  - cmd.fn(PRINTER):
      - cmd.if( {{$arg == 'a'}} ):
          - cmd.print(AAA)

  - cmd.call(PRINTER, {{'a'}})
```
