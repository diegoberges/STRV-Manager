const fs = require('fs');
require('dotenv').config();
const { argv } = require('yargs');
const environment = argv.environment;

let apiURL;
let targetPath;
if (environment === 'prod') {
	apiURL = process.env.URL;
	targetPath = `./src/environments/environment.prod.ts`;
} else {
	apiURL = process.env.URL_DEV;
	targetPath = `./src/environments/environment.ts`;
}

const envConfigFile = `
export const environment = {
    production: false,
    url: "${apiURL}",
    client_id: "${process.env.CLIENT_ID}",
    client_secret: "${process.env.CLIENT_SECRET}" };`;

fs.writeFile(targetPath, envConfigFile, function (err: any) {
	if (err) {
		console.log(err);
	}
});
