browser.webRequest.onBeforeRequest.addListener(
  function (requestDetails) {
    console.log("--");
    console.log("Loading: " + requestDetails.url);
  },
  {urls: ["<all_urls>"]}
);
