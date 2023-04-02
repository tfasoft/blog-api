import app from "./app/index.js";

import { appConfig } from "@/config";
app.listen(appConfig.port, () => {
  console.log(`Connected. Running in ${appConfig.port}`);
});
