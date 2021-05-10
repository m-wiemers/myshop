import http from "http";
import { connectDB } from "./db";
import { handleGet } from "./routes";

const port = process.env.PORT;
const url = process.env.MONGODB_URL;

connectDB(url, "users");

const server = http.createServer((request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  if (request.url === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end("<h1>Server is running</h1>");
    return;
  }

  const parts = request.url.match(/\/api\/users\/(\w+)/);
  if (!parts) {
    response.statusCode = 400;
    response.end();
    return;
  }
  const [, passwordName] = parts;

  if (request.method === "GET") {
    handleGet(request, response, passwordName);
    return;
  }

  response.statusCode = 405;
  response.end();
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
