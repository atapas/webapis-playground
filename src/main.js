function createDemoPanel(searchTerm) {
  const demoMainElem = document.getElementById("demo-main-id");
  demoMainElem.innerHTML = "";

  let noDemoElem = document.createElement("div");
  noDemoElem.style.display = "none";
  demoMainElem.appendChild(noDemoElem);

  fetch("./data/demo-meta.json")
    .then((res) => res.json())
    .then((data) => buildUI(data, searchTerm, demoMainElem));

  //buildUI(data, searchTerm, demoMainElem);  
}

function buildUI(demos, searchTerm, demoMainElem) {
  
  let filteredList = demos;

  if (searchTerm && searchTerm.trim().length > 0) {
    filteredList = demos.filter((element) => {
      return element.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  if (filteredList.length === 0) {
    noDemoElem.style.display = "block";
    noDemoElem.setAttribute("class", "no-demo");
    noDemoElem.innerHTML = `<h1>OOPS!!! No Results found.</h1> 
                            <p>But, not to worry. 
                              You can 
                              <a 
                                href="https://github.com/atapas/webapis-playground/issues" 
                                target="_blank">request a demo</a> or feel free to 
                              <a 
                                href="https://github.com/atapas/webapis-playground" 
                                target="_blank">contribute</a>.
                            </h1>`;
  }

  for (let count = 0; count <= filteredList.length - 1; count++) {
    let div = document.createElement("div");
    div.setAttribute("class", "demo");

    let titleElem = document.createElement("H2");
    titleElem.textContent = filteredList[count].title;
    div.appendChild(titleElem);

    let creatorElem = document.createElement("div");
    creatorElem.setAttribute("class", "creator");
    let avatarKey = filteredList[count].creator.email ? filteredList[count].creator.email : filteredList[count].creator.twitter;
    creatorElem.innerHTML = `<img src="https://unavatar.vercel.app/${avatarKey}" /> 
                             <span><b><a href="https://twitter.com/${filteredList[count].creator.twitter}" target="_blank">${filteredList[count].creator.name}</a></b></span>`;
    div.appendChild(creatorElem);

    let descElem = document.createElement("p");
    descElem.style.height = "175px";
    descElem.textContent = filteredList[count].desc;
    div.appendChild(descElem);

    let tryLinkElem = document.createElement("a");
    let tryItElem = document.createElement("button");
    tryItElem.innerHTML = `<span 
                            style='font-size: 24px'>
                                Try It
                           </span>
                           <i 
                            color='white' 
                            data-feather='zap' 
                            style='width: 22px; height: 22px;'></i>`;
    tryLinkElem.appendChild(tryItElem);
    tryLinkElem.setAttribute(
      "href",
      `./demos/${filteredList[count].path}/index.html`
    );

    let gitHubLinkElem = document.createElement("a");
    gitHubLinkElem.style.float = "right";
    let gitHubElem = document.createElement("button");
    gitHubElem.style.backgroundColor = "#000000";
    gitHubElem.innerHTML = `<span 
                            style='font-size: 24px'>
                                See Code
                           </span>
                           <i 
                            color='white' 
                            data-feather='github' 
                            style='width: 22px; height: 22px;'></i>`;
    gitHubLinkElem.appendChild(gitHubElem);
    gitHubLinkElem.setAttribute(
      "href",
      `https://github.com/atapas/webapis-playground/tree/master/src/demos/${filteredList[count].path}/index.js`
    );
    gitHubLinkElem.setAttribute("target", "_blank");

    let buttonsElement = document.createElement("div");
    buttonsElement.appendChild(tryLinkElem);
    buttonsElement.appendChild(gitHubLinkElem);

    div.appendChild(buttonsElement);

    demoMainElem.appendChild(div);
  }
  console.log(demoMainElem);
  feather.replace();
}

createDemoPanel();

function handleSearch(event) {
  const searchTerm = event.target.value;
  createDemoPanel(searchTerm);
}
