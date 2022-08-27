chrome.contextMenus.create({
  title: "Jackett > '%s'", // Where '%s' is the selected text on the page
  contexts: ["selection"],
  onclick: searchWithJackett // receives the selection as parameter
});

function searchWithJackett(yourSearch) {
  var host = "http://127.0.0.1"
  var port = "9117"
  var base_path = "UI/Dashboard"
  var urSearch = yourSearch.selectionText;
  var query = "&filter=all";
  
  const url = `${host}:${port}/${base_path}#search=${urSearch}${query}`

  chrome.tabs.create({url});
}
