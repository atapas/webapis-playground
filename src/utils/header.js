function createHeaderContent() {
  let header = document.getElementById("header-id");

  header.innerHTML = `
    <a href="/">
        <span class="prodName">
            <i data-feather='activity' style="width:36px;height:36px"></i> 
            Web APIs
        </span>
    </a>
    <ul class="links">
        <a class="github" title="Source Code" href="https://github.com/atapas/webapis-playground" target="_blank">
            <i style="width: 32px; height: 32px" color="white" data-feather="github"></i>
        </a>
    
        <a class="tweet" title="Tweet About it" href="https://twitter.com/intent/tweet?text=Check%20this%20amazing%20Web%20APIs%20demo%20http://js-webapis.netlify.app/,%20created%20by%20@tapasadhikary%0A%0A%23DEVCommunity%20%23100DaysOfCode" target="_blank">
            <i style="width: 32px; height: 32px" color="white" data-feather="twitter"></i>
        </a>
       
    </ul>
    `;
}

createHeaderContent();
