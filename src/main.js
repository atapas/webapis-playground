const demos = [
  {
    title: "📺 FullScreen API",
    desc: "The Fullscreen API adds methods to present a specific Element (and its descendants) in full-screen mode, and to exit full-screen mode once it is no longer needed.",
    path: "fullscreen",
  },
  {
    title: "📋 Clipboard API",
    desc: "The Clipboard API provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard.",
    path: "clipboard",
  },
  {
    title: "📡 Broardcast",
    desc: "The BroadcastChannel is a named channel that allows communication between different documents (in different windows, tabs, frames or iframes) of the same origin.",
    path: "broadcast-channel",
  },
  {
    title: "📷 Image Capture",
    desc: "The ImageCapture interface provides methods to enable the capture of images or photos from a camera or other photographic device.",
    path: "image-capture",
  },
  {
    title: "📶 Network Info",
    desc: "The Network Information API provides information about the system's connection in terms of general connection type (e.g., 'wifi', 'cellular', etc.).",
    path: "network-information",
  },
  {
    title: "🧐 Resize Observer",
    desc: "The Resize Observer API provides a performant mechanism by which code can monitor an element for changes to its size, with notifications.",
    path: "resize-observer",
  },
  {
    title: "💳 Payment Request",
    desc: "The Payment Request API provides a consistent user experience for both merchants and users. Select a preferred way to pay for things.",
    path: "web-payments",
  },
  {
    title: "📳 Vibration API",
    desc: "Most modern mobile devices include vibration hardware, which lets software code provide physical feedback to the user by causing the device to shake.",
    path: "vibration",
  },
  {
    title: "🔋 Battery API",
    desc: "The Battery Status API, more often referred to as the Battery API, provides information about the system's battery charge level",
    path: "battery-status",
  },
  {
    title: "🐢 Drag and Drop",
    desc: "HTML Drag and Drop interfaces enable applications to use drag-and-drop features in browsers.",
    path: "drag-and-drop",
  },
];

function createDemoPanel() {
  const demoMainElem = document.getElementById("demo-main-id");

  for (let count = 0; count <= demos.length - 1; count++) {
    let div = document.createElement("div");
    div.setAttribute("class", "demo");

    let titleElem = document.createElement("H2");
    titleElem.textContent = demos[count].title;
    div.appendChild(titleElem);

    let descElem = document.createElement("p");
    descElem.style.height = '175px';
    descElem.textContent = demos[count].desc;
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
    tryLinkElem.setAttribute("href", `../${demos[count].path}/index.html`);

    let gitHubLinkElem = document.createElement("a");
    gitHubLinkElem.style.float = 'right';
    let gitHubElem = document.createElement("button");
    gitHubElem.style.backgroundColor = '#000000';
    gitHubElem.innerHTML = `<span 
                            style='font-size: 24px'>
                                See Code
                           </span>
                           <i 
                            color='white' 
                            data-feather='github' 
                            style='width: 22px; height: 22px;'></i>`;
    gitHubLinkElem.appendChild(gitHubElem);
    gitHubLinkElem.setAttribute("href", `https://github.com/atapas/webapis-playground/tree/master/src/${demos[count].path}/index.js`);
    gitHubLinkElem.setAttribute("target", '_blank');

    let buttonsElement = document.createElement("div");
    buttonsElement.appendChild(tryLinkElem);
    buttonsElement.appendChild(gitHubLinkElem);

    div.appendChild(buttonsElement);

    demoMainElem.appendChild(div);
  }
  console.log(demoMainElem);
}

createDemoPanel();
