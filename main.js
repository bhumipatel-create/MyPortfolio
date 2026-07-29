

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {


    //querySelector -> finds all the matching ' ' wale to do this
    // a[href^="#"]  -> <a> element mein href mein # se start hote hue elements




    link.addEventListener("click", (e) => {
                // on click -> event
        const target = document.querySelector(link.getAttribute("href")); // #about clicked -> href found -> id=about is found so the target = about  


        if (!target) return;  // if target doesnt exists


        e.preventDefault();
 
        window.scrollTo({
            top: target.offsetTop - 80,    //smooth scroll animation
            behavior: "smooth"
        });


    });


});





const form = document.getElementById("contactForm");  


form.addEventListener("submit", function(e){  




    e.preventDefault();            


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;    


    const subject = encodeURIComponent("Portfolio Contact");    
    const body = encodeURIComponent(                          
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );


    window.location.href =
        `mailto:24bce020@nirmauni.ac.in?subject=${subject}&body=${body}`;    //  Opens Gmail/Outlook with everything filled


});


const themeIcon = document.getElementById("themeIcon");

themeIcon.addEventListener("click", function (e) {

    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){

        themeIcon.src = "sun.png";

    }
    else{

        themeIcon.src = "moon.png";
    }

});

