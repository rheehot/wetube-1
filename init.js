import app from "./app";

const PORT = 4000;

const handleListening = () =>
  console.log(`\n\n\n\n\n✅ Listening on: http://localhost:${PORT}\n\n\n\n\n`);

app.listen(PORT, handleListening);
