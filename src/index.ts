import axios from "axios";
import fetchAdapter from "./adapter";

axios.defaults.adapter = fetchAdapter;

async function main() {
    console.log('Hello, world!');
    const result = await axios.get<string>('https://github.com/pboymt/userscript-typescript-template');
    console.log(`Status: ${result.status}`);
    console.log(`Content Length: ${result.data.length}`);
}

main();