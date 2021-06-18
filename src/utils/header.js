function createHeaderContent() {
  let header = document.getElementById("header-id");

  header.innerHTML = `
    <a href="/">
        <span class="prodName">Web API Playground</span>
    </a>
    <ul class="links">
        <li class="github" title="Source Code">
            <a href="https://github.com/atapas/webapis-playground" target="_blank">
                <i style="width: 32px; height: 32px" color="white" data-feather="github"></i>
            </a>
        </li>

        <li class="tweet" title="Tweet About it">
            <a href="https://twitter.com/intent/tweet?text=Check%20this%20amazing%20Web%20APIs%20demo%20http://js-webapis.netlify.app/,%20created%20by%20@tapasadhikary%0A%0A%23DEVCommunity%20%23100DaysOfCode" target="_blank">
                <i style="width: 32px; height: 32px" color="white" data-feather="twitter"></i>
            </a>
        </li>
    </ul>
    `;
}

createHeaderContent();
