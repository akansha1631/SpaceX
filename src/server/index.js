import "babel-polyfill";
import express from "express";
import renderer from "../client/helpers/renderer";
import createStore from "../client/helpers/createStore";
import { matchRoutes } from "react-router-config";
import Routes from "../../routes";
const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadDataSSR ? route.loadDataSSR(store, req.query) : null;
  })
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
