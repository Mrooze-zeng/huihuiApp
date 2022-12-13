const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use((req, res, next) => {
    if (req.url === "/" || path.extname(req.url)) {
      app.use("/", createProxyMiddleware({ target: "http://127.0.0.1:3000" }));
    }
    next();
  });
} else {
  app.use("/", express.static(path.join(__dirname, "build")));
}

app.get("/user", (req, res) => {
  res.send([
    {
      title: "serverless framework",
      link: "https://serverless.com",
    },
  ]);
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.send({
    id: id,
    title: "serverless framework",
    link: "https://serverless.com",
  });
});

app.get("/404", (req, res) => {
  res.status(404).send("Not found");
});

app.get("/500", (req, res) => {
  res.status(500).send("Server Error");
});

// Error handler
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).send("Internal Serverless Error");
});

app.listen(9000, () => {
  console.log(`Server start on http://localhost:9000`);
});
