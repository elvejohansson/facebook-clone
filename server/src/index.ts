import App from "./server";

const app = new App({ posts: require("./routes/post") });

app.listen();