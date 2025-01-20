chrome.action.onClicked.addListener(async () =>
  await chrome.declarativeNetRequest.updateEnabledRulesets(
    (await chrome.declarativeNetRequest.getEnabledRulesets()).length
      ? (await chrome.action.setIcon({ path: "off.png" }), { disableRulesetIds: ["0"] })
      : (await chrome.action.setIcon({ path: "on.png" }), { enableRulesetIds: ["0"] })
  )
);
chrome.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds: ["0"] });