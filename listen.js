const app = require("./server");
const port = 1234;

app.listen(process.env.PORT || port, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port ${port}...`);
});
