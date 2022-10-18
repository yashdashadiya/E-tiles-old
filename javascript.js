function openInfo(){
    let nav_icon=document.getElementsByClassName("icon");
    let mobile_nav_content_container=document.getElementById("mobile_nav_content_container");

    if(nav_icon.innerHTML=="menu"){
        nav_icon.innerHTML="close";

        // mobile_nav_content_container.style.display="inline";
        mobile_nav_content_container.style.right="0px";
        mobile_nav_content_container.style.transition = "1s";
    }
    else{
        nav_icon.innerHTML="menu";
        mobile_nav_content_container.style.right="-320px";
        // mobile_nav_content_container.style.display="none";
        mobile_nav_content_container.style.transition = "1s";
    }
}