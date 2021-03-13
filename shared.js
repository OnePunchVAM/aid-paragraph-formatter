/*
 * Paragraph Formatter Plugin
 */
class ParagraphFormatterPlugin {
  constructor() {
    if (!state.paragraphFormatterPlugin) state.paragraphFormatterPlugin = {
      isDisabled: false
    }
    this.state = state.paragraphFormatterPlugin
  }

  inputModifier(text) {
    // Don't run if disabled
    if (this.state.isDisabled) return
    let modifiedText = text

    // Replace starting newline
    modifiedText = modifiedText.replace(/^\n+([^\n])/g, "\n\n$1")

    return modifiedText
  }

  contextModifier(text) {
    // Don't run if disabled
    if (this.state.isDisabled) return
    let modifiedText = text

    // Find two or more consecutive newlines and reduce
    modifiedText = modifiedText.replace(/[\n]{2,}/g, "\n")

    return modifiedText
  }

  outputModifier(text) {
    // Don't run if disabled
    if (this.state.isDisabled) return
    let modifiedText = text

    // Remove ending newline(s)
    modifiedText = modifiedText.replace(/([^\n])\n+$/g, "$1")

    // Replace starting newline
    modifiedText = modifiedText.replace(/^\n+([^\n])/g, "\n\n$1")

    // Find single newlines and replace with double
    modifiedText = modifiedText.replace(/([^\n])\n([^\n])/g, "$1\n\n$2")

    // Find three or more consecutive newlines and reduce
    modifiedText = modifiedText.replace(/[\n]{3,}/g, "\n\n")

    console.log({output: {text, modifiedText}})

    return modifiedText
  }
}
const paragraphFormatterPlugin = new ParagraphFormatterPlugin()
