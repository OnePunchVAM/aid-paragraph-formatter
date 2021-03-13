
const modifier = (text) => {
  let modifiedText = text

  // Add custom code here

  // Ensures two newlines between each paragraph
  modifiedText = paragraphFormatterPlugin.outputModifier(modifiedText)

  return { text: modifiedText }
}

// Don't modify this part
modifier(text)
