import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

// --- Change these values to see hot reload in action! ---
const SERVER_VERSION = "1.0.0"; // Update this string (e.g., to "1.0.1")
const GREETING_MESSAGE = "Hello from Deno! This is version " + SERVER_VERSION;
const BACKGROUND_COLOR = "#f0f0f0"; // Change this color (e.g., to "#e0f7fa")
// --------------------------------------------------------

const DYNAMIC_CONTENT = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Deno Hot Reload Demo</title>
      <style>
          body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: ${BACKGROUND_COLOR}; transition: background-color 0.5s ease; }
          div { padding: 2em; border-radius: 8px; background-color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center; }
          h1 { color: #333; }
          p { color: #666; }
      </style>
  </head>
  <body>
      <div>
          <h1>${GREETING_MESSAGE}</h1>
          <p>Try changing the <code>SERVER_VERSION</code>, <code>GREETING_MESSAGE</code>, or <code>BACKGROUND_COLOR</code> in <code>server.ts</code> and save the file.</p>
          <p>With Overseer running, you should see the server restart automatically and this page update instantly!</p>
          <p>Current server timestamp: ${new Date().toLocaleTimeString()}</p>
      </div>
  </body>
  </html>
`;

const handler = (req: Request): Response => {
  const url = new URL(req.url);
  if (url.pathname === "/") {
    // This log will appear in the console every time a request is handled.
    // When Overseer restarts the server, you'll see the "Server starting..." log again.
    console.log(`Serving root path. Server version: ${SERVER_VERSION}`);
    return new Response(DYNAMIC_CONTENT, {
      headers: { "content-type": "text/html" },
    });
  }
  return new Response("Not Found", { status: 404 });
};

const port = 8000;
console.log(`Server starting on http://localhost:${port}`);
console.log(`Current server version: ${SERVER_VERSION}`);
console.log("-------------------------------------------------");

serve(handler, { port });
