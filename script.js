document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector(".nav-menu");
    function handleScroll(event) {
        const delta = Math.sign(event.deltaY);
        navMenu.scrollLeft += delta * 1;
        event.preventDefault();
    }
    navMenu.addEventListener("wheel", handleScroll);
});

//Section tab


const sections = [
    'technology', 'local', 'world', 'design', 'culture',
    'business', 'politics', 'science', 'health', 'sport', 'football'
];


sections.forEach(section => {
    const link = document.getElementById(`${section}-link`);
    const content = document.getElementById(`${section}-content`);

    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        sections.forEach(sec => {
            const secContent = document.getElementById(`${sec}-content`);
            if (secContent !== content) {
                secContent.style.display = 'none';
            }
        });
        
        content.style.display = 'block';
        
        const sectionElement = document.getElementById(`${section}-section`);
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    });
});

//Search Tab

function searchFunction() {
    const input = document.getElementById("searchInput").value.toUpperCase();
    const posts = document.querySelectorAll(".posts");
  
    
    posts.forEach(post => {
        const postInfo = post.querySelector(".post_info");
        const title = postInfo.querySelector("h3");
        const category = postInfo.querySelector(".category_button");
        const author = postInfo.querySelector(".post_author-info h5");
    
        
        const shouldDisplay = title.textContent.toUpperCase().includes(input) ||
                              category.textContent.toUpperCase().includes(input) ||
                              author.textContent.toUpperCase().includes(input);

        // Highlight the search query in both title and author
        title.innerHTML = shouldDisplay ? highlightSearchQuery(title.textContent, input) : title.textContent;
        author.innerHTML = shouldDisplay ? highlightSearchQuery(author.textContent, input) : author.textContent;

        
        
        // Update the display based on the search query
        post.style.display = shouldDisplay ? "" : "none";
    });
}
function highlightSearchQuery(text, query) {
    // Create a regular expression with the search query, ignoring case
    const regex = new RegExp(query, 'gi');
    
    // Replace the matched text with the highlighted version
    return text.replace(regex, matchedText => `<span class="highlight">${matchedText}</span>`);
}


//Add post tab



//Mode Toggle Tab

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
        }

