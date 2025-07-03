try {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const fragment = range.cloneContents();
    const div = document.createElement('div');
    div.appendChild(fragment);
    const html = div.innerHTML;

    if (html) {
      const turndownService = new TurndownService();
      const markdown = turndownService.turndown(html);
      navigator.clipboard.writeText(markdown).then(() => {
        console.log("Markdown copied to clipboard");
      }).catch(err => {
        console.error("Could not copy text: ", err);
      });
    }
  }
} catch (e) {
  console.error('Error converting to Markdown:', e);
}