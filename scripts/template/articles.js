const template = fetch("/template/articles.html");

const article = document.getElementById("template-article");
const content = article.innerHTML;

article.innerHTML = template

const articleContent = document.getElementById("content");
articleContent.innerHTML = content;