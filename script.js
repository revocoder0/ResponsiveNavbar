const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");



      let getMode = localStorage.getItem("mode");
        if(getMode && getMode === "dark-mode")
        {
            body.classList.add("dark");
        }
      



      //Dark Mood of Js code
      modeToggle.addEventListener("click", ()=>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        
        if(!body.classList.contains("dark"))
        {
          localStorage.setItem("mode", "light-mode");
        }
        else
        {
          localStorage.setItem("mode", "dark-mode");
        }
        
      });

      //Search Mood of Js code

      searchToggle.addEventListener("click", ()=>{
        searchToggle.classList.toggle("active");
      });

      sidebarOpen.addEventListener("click", ()=>{
        nav.classList.add("active");
      });
      sidebarClose.addEventListener("click", ()=>{
        nav.classList.remove("active");
      });
    
      //Nav link active mode
    var navItems = document.querySelectorAll(".navItem");
    for(var i =0 ;i<navItems.length;i++)
    {
      navItems[i].addEventListener("click",function(){
        this.classList.add("active");
      });
    }