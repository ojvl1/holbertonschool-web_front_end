function createElement(data) {
  let paragraph = createElement("p");
  paragraph.inneraText(`${data}`);
  document.body.append(paragraph);
}

function queryWikipedia(callback) {
  const xhr = new XMLHttpRequest();
  const url =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

  xhr.open("Get", url, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const pages = response.query.pages;
      const pageId = Object.keys(pages)[0];
      const extract = pages[pageId].extract;

      callback(extract);
    } else {
      onsole.error("Failed to fetch data from Wikipedia.");
    }
  };
  xhr.send();
}

queryWikipedia(createElement);
