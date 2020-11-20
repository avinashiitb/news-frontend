import Parse from "parse";

export function getHeadline(values) {
  return Parse.Cloud.run("TopHeadlines", { values });
}

export function getNewsByCategory(values) {
  return Parse.Cloud.run("NewsCategory", { values });
}
export function getNewsBySource(values) {
  console.log(values);
  return Parse.Cloud.run("NewsBySource", { values });
}

export function searchMethod(values) {
  return Parse.Cloud.run("SearchNews", { values });
}
