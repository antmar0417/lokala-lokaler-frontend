import cookie from "cookie";

export function parseCookies(req) {
  // Parse the cookie and get the token if request === true
  return cookie.parse(req ? req.headers.cookie || "" : "");
}
