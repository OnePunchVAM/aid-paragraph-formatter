/*
 * Paragraph Formatter Plugin
 */
class ParagraphFormatterPlugin {
  constructor() {
    if (!state.paragraphFormatterPlugin) state.paragraphFormatterPlugin = {
      isDisabled: false,
      modifiedSize: 0
    }
    this.state = state.paragraphFormatterPlugin
  }

  contextModifier(text) {
    // Don't run if disabled
    if (this.state.isDisabled) return
    let modifiedText = text

    // Find two or more consecutive newlines and reduce
    this.state.modifiedSize = 0
    modifiedText = modifiedText.replace(/([\n]{2,})/g, match => {
      this.state.modifiedSize += (match.length - 2)
      return "\n"
    })

    return modifiedText
  }

  inputModifier(text) {
    return this.displayModifier(text)
  }

  outputModifier(text) {
    return this.displayModifier(text)
  }

  displayModifier(text) {
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

    // Detect scene break at end and add newlines
    modifiedText += modifiedText.endsWith("--") ? "\n\n" : ""

    return modifiedText
  }
}
const paragraphFormatterPlugin = new ParagraphFormatterPlugin()