import mongoose from "mongoose";
import Config from "./app/Config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(Config.db_url as string);
    app.listen(Config.port, () => {
      console.log(`Example app listening on port ${Config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
