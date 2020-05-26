const app = require("./app");
const { PORT } = require("../config");

const port = PORT || 3000;

app.listen(port, () => console.log(`Server listen on port ${port}`));
