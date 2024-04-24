/* 
The code used to create the table of contents was created following the tutorial:
"How To Design Table Of Contents For Your Website Using HTML, CSS & JS (Part 2)"
by Live Blogger on YouTube
https://www.youtube.com/watch?v=hYcBvgHoHWc
https://github.com/livebloggerofficial/Table-of-Contents-2
*/

/* 
This command collects a list of the h2 and h3 elements from the html document. 
The table of contents needs to mirror those heading elements. 
*/
const allHeadings = document.querySelectorAll(
  ".page-content h2, .page-content h3"
);

// Create a variable for the <div> with the class "page-content"
const pageContent = document.querySelector(".page-content");

// console.log(allHeadings);

const generateTOC = () => {
  const tableOfContents = document.createElement("div");
  tableOfContents.classList.add("table-of-contents");

  const tocHeading = document.createElement("h2");
  tocHeading.classList.add("toc-heading");
  tocHeading.innerHTML = "Table of Contents";

  const headingsContainer = document.createElement("div");
  headingsContainer.classList.add("headings-container");

  const ulTOC = document.createElement("ul");

  allHeadings.forEach((h) => {
    const liTOC = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${h.id}`;
    a.classList.add("heading");
    a.innerHTML = h.innerHTML;

    liTOC.appendChild(a);

    // console.log(liTOC);

    ulTOC.appendChild(liTOC);
    // console.log(ulTOC);
  });

  headingsContainer.appendChild(ulTOC);
  tableOfContents.appendChild(tocHeading);
  tableOfContents.appendChild(headingsContainer);

  // console.log(tableOfContents);

  pageContent.prepend(tableOfContents);
};

if (allHeadings.length > 0 && pageContent) {
  generateTOC();
}


// Removes excess indentation from beginning of codeblock elements
[].forEach.call(document.querySelectorAll('pre'), function($pre) {
  var lines = $pre.textContent.split('\n');
  var matches;
  var indentation = (matches = /^\s+/.exec(lines[0])) != null ? matches[0] : null;
  if (!!indentation) {
    lines = lines.map(function(line) {
      return line.replace(indentation, '');
    });
    return $pre.textContent = lines.join('\n').trim();
  }
});