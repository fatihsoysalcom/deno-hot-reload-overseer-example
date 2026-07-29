# Deno Hot Reload Overseer Example

This example demonstrates how to use `@rabbx/overseer` for hot reloading a simple Deno HTTP server. The server serves a basic HTML page whose content can be easily modified. When `overseer` watches this file, any changes saved will automatically restart the Deno server, providing instant feedback without manual intervention.

## Language

`typescript`

## How to Run

1. Install Overseer globally: `deno install -A -n overseer npm:@rabbx/overseer`
2. Run this server with Overseer: `overseer run --allow-net server.ts`
3. Open your browser to `http://localhost:8000`. Make a change to `SERVER_VERSION`, `GREETING_MESSAGE`, or `BACKGROUND_COLOR` in `server.ts` and save the file. Observe the console output and the browser page update automatically.

## Original Article

This example accompanies the Turkish article: [Geliştirme Sürecinizi Hızlandırmanın Anahtarı: Universal Hot Reload ile Tanışın!](https://fatihsoysal.com/blog/gelistirme-surecinizi-hizlandirmanin-anahtari-universal-hot-reload-ile-tanisin/).

## License

MIT — see [LICENSE](LICENSE).
