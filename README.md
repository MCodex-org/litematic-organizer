# Litematic Organizer

![Demo](screenshots/demo.gif)

### Note that this extension is for chromium browsers only. If you are looking for a version that works on firefox and related browsers (Zen, Librewolf, etc...) [click here](https://github.com/emerald0s/Litematica-File-Organizer)

A simple Chrome extension that automatically organizes `.litematic` files into a **schematics folder inside Downloads**.

When a `.litematic` file is downloaded, the extension moves it to:

```
~/Downloads/schematics/
```

All other files download normally.

## Why this exists

Normally, when you download a `.litematic` file from the internet, it is saved in your **Downloads** folder. To use it in **Litematica**, you usually need to manually move the file into your Minecraft schematics directory inside `.minecraft`.

This means copying or moving files every time you download a schematic.

With this extension, `.litematic` files are automatically placed into a dedicated schematics folder. When Litematica is configured to use that folder, newly downloaded schematics immediately appear in-game without any manual file management.

## Installation

### Load the extension manually

1. Download or clone this repository.
2. Open Chrome and go to:

```
chrome://extensions
```

3. Enable **Developer mode** (top right).
4. Click **Load unpacked**.
5. Select the extension folder.

The extension will now organize `.litematic` downloads automatically.

## Litematica Setup

To make Litematica automatically detect downloaded schematics, configure the custom schematics directory.

1. Open **Litematica Settings**.
2. Go to the **Generic** tab.
3. Enable:

```
customSchematicBaseDirectoryEnabled
```

4. Set:

```
customSchematicBaseDirectory
```

to:

```
~/Downloads/schematics
```

Now any schematic downloaded by this extension will automatically appear in Litematica.

## Permissions

The extension only uses one permission:

* `downloads` – required to detect and organize downloaded files.

No data is collected or transmitted.

## License

MIT License
