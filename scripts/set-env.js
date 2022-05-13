/* eslint no-console: ["error", { allow: ["log"] }] */

const fs = require('fs');
const {argv} = require('yargs');

const {env} = argv;

const acceptedEnvs = ['stg', 'prod'];

function validateParams() {
   console.log('Validating params...');
   if (!env) {
      console.log(`Error.  Please inform a valid environment: ${acceptedEnvs.join(', ')}.`);
      process.exit(1);
   }

   if (!acceptedEnvs.includes(env)) {
      console.log(`Error. Wrong environment, choose one of those: ${acceptedEnvs.join(', ')}.`);
      process.exit(1);
   }
}

function setEnvironment() {
   console.log(`Setting environmet to ${env}...`);
   const envFile = `./envs/${env}`;

   fs.readFile(envFile, (err, buf) => {
      if (err) {
         console.log(err);
      }
      fs.mkdir('./src/config/', () => {
         fs.writeFile('./src/config/env.ts', buf, (err) => {
            if (err) {
               console.log(err);
               process.exit(1);
            }
            process.exit(0);
         });
      });
   });
}

validateParams();
setEnvironment();
