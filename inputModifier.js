
const modifier = (text) => {
  let modifiedText = text

  // Add custom code here

  // Ensures two newlines at start of input
  modifiedText = paragraphFormatterPlugin.inputModifier(modifiedText)

  return { text: modifiedText }
}

// Don't modify this part
modifier(text)
