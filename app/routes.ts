import { type RouteConfig, route } from "@react-router/dev/routes";


export default [
  route("/welcome", "./routes/welcome.tsx"),
  route("/home", "./routes/home.tsx"),
  route("/books", "./routes/books.tsx"),
] satisfies RouteConfig;
