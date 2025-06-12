// import express from "express";
import express from "express";
const app = express();
const port = 8000;


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

if (import.meta.url === `file://${process.argv[1]}`) {
  app.listen(port, () => {
    console.log(`Server is running locally at http://localhost:${port}`);
  });
}

export default app;
