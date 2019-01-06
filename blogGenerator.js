let data = {};
let blogContent;
let bgImage = {
  "travel": '<img src="https://bit.ly/2Vypreb">',
  "nature": '<img src="https://bit.ly/2RrYZ6P">',
  "art": '<img src="https://bit.ly/2QuOCKZ">',
  "technology": '<img src="https://bit.ly/2RwsCUq">',
  "advertising": '<img src="https://bit.ly/2Qt8oGq">'
}

const getData = function () {
  data.name = document.getElementById('name').value;
  data.email = document.getElementById('email').value;
  data.theme = document.getElementById('theme').value;
  data.blogTitle = document.getElementById('blogTitle').value;
  data.blogDesc = document.getElementById('blogDesc').value;
  data.postTitle = document.getElementById('postTitle').value;
  data.postContent = document.getElementById('postContent').value;
  return data;
}

const main = function () {
  blogContent = getData();
  let head = getHead();
  let header = getHeader(blogContent.name, blogContent.email);
  let blogTitle = getTitle(blogContent.blogTitle);
  let blogBody = getDiv(blogContent.blogDesc, blogContent.postTitle, blogContent.postContent);
  let image = bgImage[blogContent.theme];
  let body = withTag('body', image + header + blogTitle + blogBody);
  let blog = withTag('html', head + body);
  let blogPage = window.open("");
  blogPage.document.write(blog);
}

const getPost = function (title, content) {
  return "<h2>" + title + "</h2>" + "<p>" + content + "</p>";
}

const getBlogDesc = function (content) {
  return "<b>This blog is all about...</b> " + content;
}

const getHead = function () {
  return "<head><link rel='stylesheet' type='text/css' href='blog.css' /><title>blog</title></head>"
}

const getDiv = function (blogDesc, postTitle, postContent) {
  return "<div class='page'>" + getBlogDesc(blogDesc) + getPost(postTitle, postContent) + "</div>";
}

const getTitle = function (title) {
  return "<section id='blogTitle' class='blogTitle'>" + title + "</section>";
}

const getHeader = function (name, email) {
  return "<header><table><tbody><tr><td>" + name + "</td></tr><tr><td>" + email + "</td></tr></tbody ></table></header>"
}

const withTag = function (tag, content) {
  return ["<", tag, ">", content, "</", tag, ">"].join(
    ""
  );
};


const getPosts = function (blogContent) {
  let title = withTag("h3", blogContent.postTitle);
  let content = withTag("p", blogContent.postContent, "myClass");
  return title + content;
};
