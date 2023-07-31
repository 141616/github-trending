const getLanguageFromUrl = (search) => {
  const searchParams = new URLSearchParams(search);
  return searchParams.get("language") || "All";
};

const repoUrl = "https://api.github.com/search/repositories";
/**
 * 生成 github 热门项目请求接口 url
 * @param {*} language 语言
 * @param {*} page 页数
 * @returns
 */
function generateUrl(language, page) {
  let q = `&q=stars%3A>1`;
  if (language !== "All") {
    q += encodeURIComponent(` language:${language}`);
  }
  return `${repoUrl}?sort=stars&order=desc&type=Repositories&page=${page}&per_page=10${q}`;
}

function generatePushUrl(language) {
  if (language === "All") {
    return `${window.location.origin}${window.location.pathname}`;
  }
  return `${window.location.origin}${window.location.pathname}?language=${language}`;
}
