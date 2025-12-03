import fetch from "node-fetch";

const URL = "https://signaling-server-ig4a.onrender.com";

try {
  const res = await fetch(URL);
  console.log("Ping OK:", await res.text());
} catch (err) {
  console.error("Ping FAILED:", err);
}
