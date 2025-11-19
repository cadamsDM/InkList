document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    // All your studio and blog information is stored here.
    // To add a new studio, just copy an object and fill in the details.
    const studioData = [
        {
            name: "Capital Tattoo",
            image: "https://images.unsplash.com/photo-1598971914047-4517e1c0f979?q=80&w=1974&auto=format&fit=crop",
            styles: ["Traditional", "Japanese", "Illustrative"],
            location: "City Centre",
            priceRange: "$$$",
            website: "#"
        },
        {
            name: "Ink Theory",
            image: "https://images.unsplash.com/photo-1619895862022-09a14b5e3b79?q=80&w=1964&auto=format&fit=crop",
            styles: ["Fine Line", "Minimalist", "Script"],
            location: "Addington",
            priceRange: "$$",
            website: "#"
        },
        {
            name: "The Holy Grail",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
            styles: ["Realism", "Portraits", "Black & Grey"],
            location: "Riccarton",
            priceRange: "$$$",
            website: "#"
        },
        {
            name: "Sinner & Saint",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1974&auto=format&fit=crop",
            styles: ["American Traditional", "Blackwork"],
            location: "Sydenham",
            priceRange: "$$",
            website: "#"
        },
        {
            name: "Modern Classic Tattoo",
            image: "https://images.unsplash.com/photo-1622634213744-19a698e88b40?q=80&w=1974&auto=format&fit=crop",
            styles: ["Geometric", "Dotwork", "Mandala"],
            location: "City Centre",
            priceRange: "$$$",
            website: "#"
        },
        {
            name: "Artful Ink",
            image: "https://images.unsplash.com/photo-1616457877495-d8b0204315d1?q=80&w=1974&auto=format&fit=crop",
            styles: ["Watercolor", "New School", "Illustrative"],
            location: "Papanui",
            priceRange: "$$",
            website: "#"
        }
    ];

    const blogData = [
        {
            title: "A Guide to Aftercare: Keeping Your Ink Vibrant",
            date: "October 26, 2023",
            image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=2070&auto=format&fit=crop",
            excerpt: "Essential tips and tricks to ensure your new tattoo heals perfectly and stays bright for years to come."
        },
        {
            title: "Traditional vs. Japanese: What's the Difference?",
            date: "October 15, 2023",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
            excerpt: "We dive into the history and key design elements that separate these two iconic tattoo styles."
        },
        {
            title: "Meet the Artist: An Interview with Jane Doe",
            date: "September 30, 2023",
            image: "https://images.unsplash.com/photo-1619895862022-09a14b5e3b79?q=80&w=1964&auto=format&fit=crop",
            excerpt: "A conversation with one of Christchurch's most sought-after fine line artists about her journey and inspiration."
        }
    ];

    // --- DOM ELEMENTS ---
    const studioGallery = document.getElementById('studio-gallery');
    const blogGrid = document.querySelector('.blog-grid');
    const searchInput = document.getElementById('search-input');
    const styleFiltersContainer = document.getElementById('style-filters');
    const priceFiltersContainer = document.getElementById('price-filters');
    const clearFiltersBtn = document.getElementById('clear-filters');

    // --- STATE ---
    let activeFilters = {
        search: '',
        styles: [],
        prices: []
    };

    // --- FUNCTIONS ---

    // Render Studios
    function renderStudios(studios) {
        studioGallery.innerHTML = ''; // Clear current content
        if (studios.length === 0) {
            studioGallery.innerHTML = '<p>No studios found matching your criteria.</p>';
            return;
        }
        studios.forEach(studio => {
            const card = document.createElement('article');
            card.classList.add('studio-card');
            card.innerHTML = `
                <img src="${studio.image}" alt="${studio.name}">
                <div class="card-content">
                    <h3>${studio.name}</h3>
                    <p class="location">📍 ${studio.location}</p>
                    <p class="price-range">Price: ${studio.priceRange}</p>
                    <ul class="styles-list">
                        ${studio.styles.map(style => `<li class="style-tag">${style}</li>`).join('')}
                    </ul>
                    <a href="${studio.website}" class="card-link">View Profile</a>
                </div>
            `;
            studioGallery.appendChild(card);
        });
    }

    // Render Blog Posts
    function renderBlog() {
        blogData.forEach(post => {
            const card = document.createElement('article');
            card.classList.add('blog-card');
            card.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-card-content">
                    <p class="blog-meta">${post.date}</p>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                </div>
            `;
            blogGrid.appendChild(card);
        });
    }

    // Create Filter Checkboxes Dynamically
    function createFilters() {
        const allStyles = [...new Set(studioData.flatMap(s => s.styles))].sort();
        const allPrices = [...new Set(studioData.map(s => s.priceRange))].sort();

        allStyles.forEach(style => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="checkbox" name="style" value="${style}"> <span>${style}</span>`;
            styleFiltersContainer.appendChild(label);
        });

        allPrices.forEach(price => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="checkbox" name="price" value="${price}"> <span>${price}</span>`;
            priceFiltersContainer.appendChild(label);
        });
    }
    
    // Apply Filters
    function applyFilters() {
        let filteredStudios = studioData;

        // Search filter
        if (activeFilters.search) {
            filteredStudios = filteredStudios.filter(studio =>
                studio.name.toLowerCase().includes(activeFilters.search.toLowerCase()) ||
                studio.location.toLowerCase().includes(activeFilters.search.toLowerCase())
            );
        }

        // Style filter
        if (activeFilters.styles.length > 0) {
            filteredStudios = filteredStudios.filter(studio =>
                activeFilters.styles.some(style => studio.styles.includes(style))
            );
        }

        // Price filter
        if (activeFilters.prices.length > 0) {
            filteredStudios = filteredStudios.filter(studio =>
                activeFilters.prices.includes(studio.priceRange)
            );
        }

        renderStudios(filteredStudios);
    }

    // --- EVENT LISTENERS ---
    
    // Search input
    searchInput.addEventListener('input', (e) => {
        activeFilters.search = e.target.value;
        applyFilters();
    });

    // Filter checkboxes
    document.addEventListener('change', (e) => {
        if (e.target.name === 'style') {
            if (e.target.checked) {
                activeFilters.styles.push(e.target.value);
            } else {
                activeFilters.styles = activeFilters.styles.filter(s => s !== e.target.value);
            }
        }
        if (e.target.name === 'price') {
            if (e.target.checked) {
                activeFilters.prices.push(e.target.value);
            } else {
                activeFilters.prices = activeFilters.prices.filter(p => p !== e.target.value);
            }
        }
        applyFilters();
    });

    // Clear filters button
    clearFiltersBtn.addEventListener('click', () => {
        activeFilters = { search: '', styles: [], prices: [] };
        searchInput.value = '';
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        renderStudios(studioData);
    });


    // --- INITIALIZATION ---
    function init() {
        createFilters();
        renderStudios(studioData);
        renderBlog();
    }

    init();
});