const sections = {
    home: `<h2>Welcome to My Portfolio</h2>
        <p>Hello I am passionate Student learning Web Development.</p>`,

    about: `<h2>About me</h2>`,

    projects: `<h2>My Projects</h2>`,

    contact: `<h2>My Projects</h2>`


}

    document.getElementById("content").innerHTML = sections.home;
    
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click",fun);
    });
    
    function fun (events) {
            events.preventDefault();
            const section = events.target.dataset.section;
            document.getElementById("content").innerHTML = sections[section];
        }