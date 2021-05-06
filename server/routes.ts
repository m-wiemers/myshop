import { readPasswordDoc } from "./db";
import http from "http";

export const handleGet = async (
  request: http.IncomingMessage,
  response: http.ServerResponse,
  passwordName: string
) => {
  const passwordDoc = await readPasswordDoc(passwordName);
  if (!passwordDoc) {
    response.statusCode = 404;
    response.end();
    return;
  }
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(passwordDoc));
};
