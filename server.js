const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname);
  const requested = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const file = path.resolve(ROOT, requested);
  if (!file.startsWith(ROOT + path.sep)) { res.writeHead(403); return res.end("Forbidden"); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end("Not found"); }
    const ext = path.extname(file);
    const types = { ".html":"text/html; charset=utf-8", ".js":"text/javascript; charset=utf-8", ".css":"text/css; charset=utf-8" };
    res.writeHead(200, {"Content-Type":types[ext] || "application/octet-stream"});
    res.end(data);
  });
}).listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));
