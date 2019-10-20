# Dupe File

Adds right-click "Dupe File" to the context menu in the file view:

[!context menu screenshot](ss-context-menu.png)

## Usage

The first option:

  1. Hover on a file or directory name in explorer.
  2. Right-click and select `Duplicate file`.
  3. Enter the new path for the duplicate.

The second option:

  1. Open the file.
  2. Press `F1` and select `Duplicate file`.
  3. Enter the new path for the duplicate.


## Supported settings

#### duplicate.openFileAfterCopy

  * Type: `Boolean`
  * Default: `false`

Opens the newly created file immediately.

## Keyboard shortcuts

For changes keyboard shortcuts, create a new rule in `File -> Preferences -> Keyboard Shortcuts`:

```json
{
  "key": "ctrl+shift+d",
  "command": "dupe.execute"
}
```


## License

This software is released under the terms of the MIT license.

## Special Props

Thanks to [Dennis Malinochkin](https://mrmlnc.com/) for leading the way with a similar project [Duplicate action](https://github.com/mrmlnc/vscode-duplicate/)

## Changelog

v1.0.0 - initial release
