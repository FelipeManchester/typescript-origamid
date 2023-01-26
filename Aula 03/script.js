"use strict";
const link = document.getElementById("origamid");
link instanceof HTMLAnchorElement ? link.href = link.href.replace('http', 'https') : '';
console.log(link);
