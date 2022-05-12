import { Home } from "../routes/index";
import { Library } from "../routes/library/index";
import { fetchPopularRepos } from "./api";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/library",
    component: Library,
    fetchInitialData: () => fetchPopularRepos(),
  },
];

export { routes };
