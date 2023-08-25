const express = require("express");
const request = require("request");
const { exec, spawn } = require("node:child_process");

const app = express();

app.use("*", function (req, res) {
  //modify the url in any way you want
  // console.log({ path: req.path });
  // console.log({ req });
  console.log({ baseUrl: req.baseUrl });
  var newurl = `http://localhost:3000${req.baseUrl}`;
  request(newurl).pipe(res);
});

const waitForServer = async () => {
  const child = spawn(`npm`, ["start"], {});
  await new Promise((resolve) => {
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
