import app from "./app";

const PORT = 4000;

const handleListening = () =>
  console.log(`\n✅Listening on: http://localhost:${PORT}\n`);

app.listen(PORT, handleListening);
