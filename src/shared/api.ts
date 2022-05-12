import fetch from "isomorphic-fetch";

export const fetchPopularRepos = () => {
  return fetch("https://api.github.com/search/repositories?q=stars")
    .then((data) => data.json())
    .then((repos) => repos.items)
    .catch((error) => {
      console.warn(error);
      return null;
    });
};
