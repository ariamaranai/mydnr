chrome.action.onClicked.addListener(async ()=> chrome.declarativeNetRequest.updateEnabledRulesets(
  (await chrome.declarativeNetRequest.getEnabledRulesets()).length ?
    (chrome.action.setIcon({path: "off.png"}), {disableRulesetIds: ["0"]}) :
    (chrome.action.setIcon({path: "on.png"}),{enableRulesetIds: ["0"]})
))