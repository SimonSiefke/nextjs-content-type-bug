const express = require("express");
const request = require("request");
const { spawn } = require("node:child_process");

const app = express();

app.use("*", function (req, res) {
  const newurl = `http://localhost:3000${req.baseUrl}`;
  request(newurl).pipe(res);
});

const waitForServer = async () => {
  const child = spawn(`npm`, ["start"], {});
  await new Promise((resolve) => {
    child.stderr.pipe(process.stderr);
    child.stdout.on("data", (data) => {
      console.log(`${data}`);
      if (`${data}`.includes("ready started server")) {
        resolve(undefined);
      }
    });
  });
};

const main = async () => {
  await waitForServer();
  app.listen(4321, () => {
    console.log("listening on http://localhost:4321");
  });
};

main();
