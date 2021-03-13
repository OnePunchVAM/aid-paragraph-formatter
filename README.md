# AID Paragraph Formatter Plugin

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

A plugin that formats output to display clean separated paragraphs.

![Paragraph Formatter in Action](https://media.discordapp.net/attachments/717764081058185316/820208883447758868/unknown.png?width=774&height=846)

## Usage

This one can be used on it's own and has a release available in the [releases](https://github.com/OnePunchVAM/aid-paragraph-formatter/releases) section.

To integrate it into your own scripts, in your `outputModifier` script make sure to call:
```js
modifiedText = paragraphFormatterPlugin.outputModifier(modifiedText)
```

Ensure consistency of your input by adding this to your `inputModifier` script call:

```js
modifiedText = paragraphFormatterPlugin.inputModifier(modifiedText)
```

Optionally you add the following to your `contextModifer` script to reduce context newlines to one per paragraph:

```js
modifiedText = paragraphFormatterPlugin.contextModifier(modifiedText)
```