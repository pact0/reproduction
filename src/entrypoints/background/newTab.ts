export function handleNewTab() {
  browser.tabs.onCreated.addListener(async (tab) => {
    const isDefaultNewTab =
      tab.pendingUrl === "chrome://newtab/" ||
      tab.url === "chrome://newtab/" ||
      tab.pendingUrl === "about:newtab" ||
      tab.url === "about:newtab";

    if (isDefaultNewTab) {
      if (true) {
        const html = browser.runtime.getURL("/newTabPage.html");
        browser.tabs.update(tab.id, { url: html });
      }
    }
  });
}
