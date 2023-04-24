---
id: file-launcher
title: File Launcher
slug: file-launcher
order: 2
---

## Usage

It is a simple file launcher, you can use it to launch your file quickly just by typing the keyword and click.

<img src="https://raw.githubusercontent.com/danalite/awesome-autool-scripts/master/danalite/Mini-Tools/App-Launcher/demo.gif" alt="Image" style="width:900px;max-width:900px"/>

## Advanced

### Select multiple files

In some use cases, you may want to select multiple files, and do some other operations with them (e.g., rename them, move them to a folder, etc.). You can do so by modifying the `max` and `instantQuit` option in the script

```yaml
# Do not quit after selecting the first file
'instantQuit': False,
# Select up to 4 files
'max': 4
```

### Regular expression

We support search with regular expression. For example, you can just input `2023-/d/d` as the keyword. Here `/d` is a regular expression, it means any single digit number. So the keyword will match `2023-01`, `2023-02`, `2023-03` and so on. For more information about regular expression, please refer to [Regular Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions). If you are not familiar with regular expression, you can ask ChatGPT to write an expression for you.

### Other search options

If you want to speedup the search, you can specify the search scope to be a specific folder. To do so, you can modify the `params` option in the script

```yaml
    'params' : {
      # Where to search files. You can specify a folder here
      'location': '~/Desktop',
      # The file extension to search
      'extensions': ['png'],
      # The size of the file in KB
      'size': [0, 1000]
    },
```
