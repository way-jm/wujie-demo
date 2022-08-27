import WujieReact from "wujie-react";
const { setupApp, preloadApp, bus } = WujieReact;
// @ts-ignore
import lifecycles from "./lifecycle";
// @ts-ignore
import credentialsFetch from "./fetch";

const isProduction = process.env.NODE_ENV === "production";
const degrade = window.localStorage.getItem("degrade") === "true" || !window.Proxy || !window.CustomElementRegistry;

setupApp({
  name: "react-child",
  url: "//localhost:8002/",
  attrs: isProduction ? { src: "//localhost:7600/" } : {},
  exec: true,
  fetch: credentialsFetch,
  prefix: { "prefix-dialog": "/dialog", "prefix-location": "/location" },
  degrade,
  // 修正iframe的url，防止github pages csp报错
  react16Attrs: process.env.NODE_ENV === "production" ? { src: "//localhost:8002/" } : {},
  ...lifecycles,
});
setupApp({
  name: "terminal-child",
  url: "//localhost:3002/",
  attrs: isProduction ? { src: "//localhost:3002/" } : {},
  exec: true,
  fetch: credentialsFetch,
  prefix: { "prefix-dialog": "/dialog", "prefix-location": "/location" },
  degrade,
  // 修正iframe的url，防止github pages csp报错
  react16Attrs: process.env.NODE_ENV === "production" ? { src: "//localhost:3002/" } : {},
  ...lifecycles,
});
