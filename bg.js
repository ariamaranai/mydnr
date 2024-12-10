(async c=> (
  c.action.onClicked.addListener(async ()=> c.declarativeNetRequest.updateEnabledRulesets(
    (await chrome.declarativeNetRequest.getEnabledRulesets()).length ?
    (c.action.setIcon({path: "off.png"}), {disableRulesetIds: ["0"]}) :
    (c.action.setIcon({path: "on.png"}),{enableRulesetIds: ["0"]})
  ))
))(chrome)