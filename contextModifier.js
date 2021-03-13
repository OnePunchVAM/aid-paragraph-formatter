
const modifier = (text) => {
  let modifiedText = text

  // Add custom code here

  // This is optional, it finds two or more consecutive newlines and reduces them to one
  modifiedText = paragraphFormatterPlugin.contextModifier(modifiedText)

  return { text: modifiedText }
}

// Don't modify this part
modifier(text)
