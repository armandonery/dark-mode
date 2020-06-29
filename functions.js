document.addEventListener("DOMContentLoaded", () => {

    const dark = document.querySelector(".dark");
    const light = document.querySelector(".light");

    if(localStorage.getItem("color-theme")){
        document.documentElement.setAttribute("data-theme", localStorage.getItem("color-theme"));
        if(localStorage.getItem("color-theme") === "dark"){
            dark.classList.add("active");
            light.classList.remove("active");
        } else {
            dark.classList.remove("active");
            light.classList.add("active");           
        }     
    }

    dark.addEventListener("click", () => {
        if(dark.classList.contains("active")){
            return false;
        } else {
            localStorage.setItem("color-theme", "dark");
            document.documentElement.setAttribute("data-theme", "dark");

            dark.classList.add("active");
            light.classList.remove("active");

        }
    });

    light.addEventListener("click", () => {
        if(light.classList.contains("active")){
            return false;
        } else {
            localStorage.setItem("color-theme", "light");
            document.documentElement.setAttribute("data-theme", "light");

            dark.classList.remove("active");
            light.classList.add("active");

        }
    });

})