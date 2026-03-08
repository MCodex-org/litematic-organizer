chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
  const name = downloadItem.filename.split('/').pop();

  if (name && name.toLowerCase().endsWith(".litematic")) {
      suggest({ filename: "schematics/" + name });
  } else {
      suggest({ filename: name });
  }
});