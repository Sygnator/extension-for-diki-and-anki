chrome.contextMenus.create({
    "id": "Search words in Diki",
    "title": "Search \'%s\' in Diki",
    "type": "normal",
    "contexts": ["selection"]
  })

chrome.contextMenus.onClicked.addListener((info)=>{
    chrome.tabs.create({
        url: 'https://www.diki.pl/slownik-angielskiego?q=' + encodeURIComponent(info.selectionText)
    })
  })