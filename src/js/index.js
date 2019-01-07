//require("!style-loader!css-loader!../css/styles.css");

require("../css/styles.css");

import greet from "./greeting.js";
import members from "./people.js";

let $ = require("jquery");
alert(greet("Bob"));
members.map(mem => {
  $("body").append(`<h1>${mem.first} ${mem.last}</h1>`);
});
