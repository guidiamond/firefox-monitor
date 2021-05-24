// browser.webRequest.onBeforeRequest.addListener(
//   function (requestDetails) {
//     console.log("--");
//     console.log("Loading: " + requestDetails.url);
//   },
//   {urls: ["<all_urls>"]}
// );
var getCookies = function () {
  var pairs = document.cookie.split(";");
  var cookies = {};
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='));
  }
  return cookies;
}
var addToStorage = function () {
  window.localStorage.setItem('teste', 'batata');
}

console.group("tei");
let cookiesObj = getCookies();
let cookiesLength = Object.keys(cookiesObj).length;

function logURL(requestDetails) {
  console.log("--");
  console.log("Loading: " + requestDetails.url);
}

window.addEventListener('storage', function (e) {
  console.log("storage event occured here");
  console.log(window.localStorage);
  console.warn(Object.keys(window.localStorage));
  //   console.log(JSON.parse(window.localStorage.getItem('sampleList')));
}, false);

console.groupEnd();
addToStorage();
