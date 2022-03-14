const naviBar = document.querySelector('.navBar')


const topNavHtml = `<div class="top">
<div class="menuOpenerWrapper">
    <span></span>
    <span></span>
    <span></span>
</div>
<div class="siteLogo">
    <a href="../index.html">
        <img src="//images.squarespace-cdn.com/content/v1/58e534c52e69cfd83dc862d9/1495994577984-EA0K6WZRKPOKAXBFKMXY/TCB+banner_transparent.png?format=1500w" alt="" height="50">
    </a>    
</div>
<div class="navTopRight">
    <div class="hoverContainer">
        <div class="socialMediaLinks">
            <a href="https://facebook.com" target="blank" class="fbLink">
                <img src="../images/fbLogo.svg" alt="" height="18" width="18">
            </a>
            <a href="https://twitter.com" target="blank" class="twitterLink">
                <img src="../images/twitterLogo.svg" alt="" height="18" width="18">
            </a>
            <a href="https://instagram.com" target="blank" class="instagramLink">
                <img src="../images/igLogo.svg" alt="" height="18" width="18">
            </a>
        </div>
    </div>
    <div class="navSearchIcon">
        <img id="searchIcon" src="../images/search-solid.svg" alt="" height="18">
        <img id="xIcon" src="../images/x-solid.svg" alt="" height="18">
    </div>
</div>
</div>
<div class="bottom">
<ul class="navMenuOptions">
    <li class="navBlog navItem ">
        <a href="../index.html">Blog</a>
    </li>
    <li class="navAbout navItem">
        <a href="../html/about.html">About</a>
    </li>
    <li class="navDirectory navItem">
        <a href="../html/directory.html">Cat Cafe Directory</a>
    </li>
    <li class="navContact navItem">
        <a href="../html/contact.html">Contact</a>
    </li>
    <li class="navPolicies navItem">
        <a href="../policies.html">+ Policies</a>
    </li>
</ul>
</div>`

naviBar.innerHTML = topNavHtml
