import fs from 'fs';

fetch("http://127.0.0.1:3845/mcp", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "tools/call",
    params: {
      name: "get_design_context",
      arguments: {
        nodeId: "1832:213",
        clientFrameworks: "react",
        clientLanguages: "javascript,css,html",
        artifactType: "COMPONENT_WITHIN_A_WEB_PAGE_OR_APP_SCREEN",
        taskType: "CREATE_ARTIFACT"
      }
    }
  })
}).then(async r => {
    const text = await r.text();
    fs.writeFileSync('figma_output.json', text);
    console.log("Done. Output written to figma_output.json");
}).catch(console.error);
