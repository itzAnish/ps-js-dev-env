/*



*/

/* eslint-disable no-console */
//import { generate, extend } from "json-schema-faker";
import jsf from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

// Extend JSF with the Fake libs you want to use.
jsf.extend("faker", () => require("faker"));
const json = JSON.stringify(jsf.generate(schema));

fs.writeFile("./src/api/db.json", json, function (err){
  if(err){
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.greenBright("Mock data was generated"));
  }
});
