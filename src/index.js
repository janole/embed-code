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
import php from "highlight.js/lib/languages/php";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import diff from "highlight.js/lib/languages/diff";

import gml from "highlight.js/scss/gml.scss";
import styles from "./index.scss";

(function ()
{
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
    hljs.registerLanguage("php", php);
    hljs.registerLanguage("dockerfile", dockerfile);
    hljs.registerLanguage("diff", diff);

    if (typeof window.__embed_code_css === "undefined")
    {
        gml.use();
        styles.use();

        window.__embed_code_css = true;
    }

    const script = document.currentScript;

    const div = document.createElement("div");
    div.classList.add("hljs");
    div.classList.add("embed-code-container");

    const top = document.createElement("div");
    top.classList.add("embed-code-top");

    const red = document.createElement("div");
    red.classList.add("embed-code-red-button");
    top.appendChild(red);

    const yellow = document.createElement("div");
    yellow.classList.add("embed-code-yellow-button");
    top.appendChild(yellow);

    const green = document.createElement("div");
    green.classList.add("embed-code-green-button");
    top.appendChild(green);

    const click = document.createElement("div");
    click.innerText = script.getAttribute("data-click-notice") || "Click to copy ...";
    click.classList.add("embed-code-click");
    top.appendChild(click);

    div.appendChild(top);

    const pre = document.createElement("pre");
    pre.classList.add("hljs");
    pre.classList.add("embed-code-pre");

    const txt = document.createElement("code");
    txt.classList.add("embed-code-code");

    let data;

    try
    {
        data = JSON.parse(script.innerText);
    }
    catch (e)
    {
        data = { lang: script.getAttribute("data-lang"), code: script.innerText.replace(/^[\n\r]+/, ""), };
    }

    txt.innerHTML = hljs.highlight(data.lang, data.code).value;

    top.addEventListener("click", () => copy(data.code));

    pre.appendChild(txt);
    div.appendChild(pre);
    script.parentNode.prepend(div);
})();
