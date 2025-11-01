
document.addEventListener('DOMContentLoaded', () => {
    // 1. Array of sample moodboard data
    const moodboardData = [
        { title: "Y2k Outfits", user: "@RetroVibes", image: "images/pin1.jpg" },
        { title: "Fashion Colllage", user: "@CleanDesign", image: "images/pin2.jpg" },
        { title: "High-Fashion Streetwear", user: "@UrbanChic", image: "images/pin3.jpg" },
        { title: "Color Palettes", user: "@ColorNerd", image: "images/pin4.jpg" },
        { title: "Minimalist Style Inspo", user: "@BookWormStyle", image: "images/pin5.jpg" },
        { title: "Moodboards", user: "@ModernSketch", image: "images/pin6.jpg" },
        { title: "NYC Vibes", user: "@ModernSketch", image: "images/pin7.jpg" },
        // You can add more pins here, ensure you have corresponding images in the 'images' folder
    ];

    const gridContainer = document.querySelector('.moodboard-grid');

    // 2. Function to create a pin element
    const createPinElement = (data) => {
        // Create the main pin div
        const pin = document.createElement('div');
        pin.className = 'pin';

        // Create the image element
        const img = document.createElement('img');
        // Note: For this to work, you MUST create a folder named 'images' and put your images (pin1.jpg, pin2.jpg, etc.) inside it.
        // For the placeholders in the HTML, you'll need placeholder1.jpg and placeholder2.jpg as well.
        img.src = data.image; 
        img.alt = data.title;

        // Create the info overlay
        const info = document.createElement('div');
        info.className = 'pin-info';
        info.innerHTML = `
            <p class="pin-title">${data.title}</p>
            <p class="pin-user">${data.user}</p>
        `;

        // Append image and info to the pin
        pin.appendChild(img);
        pin.appendChild(info);

        // Add a simple click interaction
        pin.addEventListener('click', () => {
            alert(`You clicked on: "${data.title}"! Time to share your thoughts.`);
        });

        return pin;
    };

    // 3. Render all pins and remove placeholders
    // First, remove the two placeholder pins from the HTML (if they exist)
    gridContainer.innerHTML = ''; 

    // Then, add the dynamically generated pins
    moodboardData.forEach(data => {
        const pinElement = createPinElement(data);
        gridContainer.appendChild(pinElement);
    });

    // 4. Handle the main CTA button
    const shareButton = document.getElementById('shareButton');
    shareButton.addEventListener('click', () => {
        // Simple action for the landing page CTA
        const confirmation = confirm("Ready to create and share your amazing moodboard with the community? Click OK to join!");
        if (confirmation) {
            // In a real app, this would redirect to a sign-up or creation page
            alert("Awesome! Check your console for a 'Sharing Started' message (for developer's sake 😉).");
            console.log("Sharing flow initiated.");
        }
    });

    // 5. Handle simple search functionality (just a console log for now)
    const searchInput = document.getElementById('searchInput');
    const searchIcon = document.querySelector('.search-bar i');

    const handleSearch = () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: "${query}". You'll see the results soon!`);
            // In a real app, an API call or filtering function would run here
            searchInput.value = ''; // Clear input after search
        }
    };

    searchIcon.addEventListener('click', handleSearch);

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
});