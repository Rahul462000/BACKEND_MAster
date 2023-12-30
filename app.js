import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`server is running on server port:- ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
