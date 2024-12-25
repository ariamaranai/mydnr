chrome.action.onClicked.addListener(async () =>
  chrome.declarativeNetRequest.updateEnabledRulesets(
    (await chrome.declarativeNetRequest.getEnabledRulesets()).length
      ? (chrome.action.setIcon({ path: "off.png" }), { disableRulesetIds: ["0"] })
      : (chrome.action.setIcon({ path: "on.png" }), { enableRulesetIds: ["0"] })
  )
);
chrome.management.onEnabled.addListener(async info =>
  info.id == chrome.runtime.id &&
  (await chrome.declarativeNetRequest.getEnabledRulesets()).length ||
  chrome.action.setIcon({ path: "off.png" })
);
chrome.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds: ["0"] })