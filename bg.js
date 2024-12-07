(async c=> (
  c.declarativeNetRequest.updateEnabledRulesets(
    (await c.storage.local.get("0"))[0] ? (
      c.action.setIcon({path: "off.png"}),
      {disableRulesetIds:["0"]}
    ) : (
      c.action.setIcon({path: "on.png"}),
      {enableRulesetIds: ["0"]}
    )
  ),
  c.action.onClicked.addListener(async ()=>
    c.declarativeNetRequest.updateEnabledRulesets(
      (await c.storage.local.get("0"))[0] ? (
        c.action.setIcon({path: "on.png"}),
        c.storage.local.set({0:0}),
        {enableRulesetIds: ["0"]}
      ) : (
        c.action.setIcon({path: "off.png"}),
        c.storage.local.set({0:1}),
        {disableRulesetIds: ["0"]}
      )        
    )
  )
))(chrome)