// import "core-js/stable";
// import "regenerator-runtime/runtime";

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

import "highlight.js/scss/gml.scss";
import "./index.scss";

(function () {
    hljs.registerLanguage("js", js);
    hljs.registerLanguage("yaml", yaml);
    hljs.registerLanguage("yml", yaml);
    hljs.registerLanguage("ini", ini);
    hljs.registerLanguage("toml", ini);
    hljs.registerLanguage("shell", shell);
    hljs.registerLanguage("sh", bash);
    hljs.registerLanguage("bash", bash);
    hljs.registerLanguage("html", xml);
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("json", json);

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

    /*
    const gist = script.getAttribute("data-gist");
    
    axios.get(gist).then(r => {
        const html = hljs.highlight("yaml", r.data).value;
    
        div.innerHTML = html;
    
    });
    */
})();
