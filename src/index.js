import copy from "copy-text-to-clipboard";

import hljs from "highlight.js/lib/core";
import js from "highlight.js/lib/languages/javascript";
import yaml from "highlight.js/lib/languages/yaml";
import ini from "highlight.js/lib/languages/ini";
import shell from "highlight.js/lib/languages/shell";
import bash from "highlight.js/lib/languages/bash";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import json from "highlight.js/lib/languages/json";
import markdown from "highlight.js/lib/languages/markdown";
// import python from "highlight.js/lib/languages/python";
import php from "highlight.js/lib/languages/php";
// import nginx from "highlight.js/lib/languages/nginx";
// import apache from "highlight.js/lib/languages/apache";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import diff from "highlight.js/lib/languages/diff";

import gml from "highlight.js/scss/gml.scss";
import styles from "./index.scss";

(function ()
{
    if (typeof window.__embed_code_css === "undefined")
    {
        gml.use();
        styles.use();

        window.__embed_code_css = true;
    }

    hljs.registerLanguage("js", js);
    hljs.registerLanguage("javascript", js);
    hljs.registerLanguage("yaml", yaml);
    hljs.registerLanguage("yml", yaml);
    hljs.registerLanguage("ini", ini);
    hljs.registerLanguage("toml", ini);
    hljs.registerLanguage("shell", shell);
    hljs.registerLanguage("sh", bash);
    hljs.registerLanguage("bash", bash);
    hljs.registerLanguage("html", xml);
    hljs.registerLanguage("xml", xml);
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("json", json);
    hljs.registerLanguage("markdown", markdown);
    // hljs.registerLanguage("python", python);
    hljs.registerLanguage("php", php);
    hljs.registerLanguage("dockerfile", dockerfile);
    hljs.registerLanguage("diff", diff);
    // hljs.registerLanguage("nginx", nginx);
    // hljs.registerLanguage("apache", apache);

    const script = document.currentScript;

    const { lang, code } = JSON.parse(script.innerText);

    const div = document.createElement("div");
    div.classList.add("hljs");
    div.classList.add("embed-code-container");

    const top = document.createElement("div");
    top.classList.add("embed-code-top");
    top.addEventListener("click", () => copy(code));

    const red = document.createElement("div");
    red.classList.add("embed-code-red-button");
    top.appendChild(red);

    const yellow = document.createElement("div");
    yellow.classList.add("embed-code-yellow-button");
    top.appendChild(yellow);

    const green = document.createElement("div");
    green.classList.add("embed-code-green-button");
    top.appendChild(green);

    div.appendChild(top);

    const pre = document.createElement("pre");
    pre.classList.add("hljs");
    pre.classList.add("embed-code-pre");

    const txt = document.createElement("code");
    txt.classList.add("embed-code-code");

    const html = hljs.highlight(lang, code.replace(/^[\n\r]+/, "")).value;
    txt.innerHTML = html;

    pre.appendChild(txt);
    div.appendChild(pre);
    script.parentNode.prepend(div);
})();
