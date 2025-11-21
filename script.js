document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    // All your studio and blog information is stored here.
    // To add a new studio, just copy an object and fill in the details.
    const studioData = [
        {
            name: "Ōtautahi Tattoo",
            image: "./images/OtautahiTattoo.png",
            styles: ["Traditional", "Japanese", "Illustrative"],
            location: "98 Oxford Terrace, CBD",
            priceRange: "$$$",
            website: "https://otautahitattoo.com/christchurch/"
        },
        {
            name: "Haven Tattoo",
            image: "./images/Haven.jpg",
            styles: ["Fine Line", "Minimalist", "Script"],
            location: "A32/34 New Regent Street, CBD",
            priceRange: "$$",
            website: "https://www.haventattoo.co.nz/"
        },
        {
            name: "B.LIST Tattoo Studio",
            image: "https://www.b-list.co.nz/wp-content/uploads/2025/05/B.List-Tattoo-42-2048x1365.jpg",
            styles: ["Realism", "Portraits", "Black & Grey", "Lettering", "Anime/Pop", "Ornamental", "Feline", "Neo-Traditional"],
            location: "255 Lincoln Road, Addington",
            priceRange: "$$",
            website: "https://www.b-list.co.nz/contact/"
        },
        {
            name: "The Jolly Octopus Tattoos & Piercings",
            image: "https://images.squarespace-cdn.com/content/v1/59c6484864b05f184cb20ed7/da170b08-ba5e-4f7a-8bfa-e641491c3e20/IMG_0122+2.JPG?format=500w",
            styles: ["Old School", "Neo-Traditional", "Cover Ups", "Japanese"],
            location: "129A Farrington Ave, Bishopdale",
            priceRange: "$$",
            website: "https://jollyoctopustattoo.com/"
        },
        {
            name: "3 Keys Tattoos",
            image: "https://images.squarespace-cdn.com/content/v1/6046943cbf827710b73478ab/1615239252760-DCTOIKU765M1RU2LPH16/20200708_092633.jpg?format=1500w",
            styles: ["Feline"],
            location: "193 Montreal Street, CBD",
            priceRange: "$$",
            website: "https://3keys.tattoo/"
        },
        {
            name: "Dell Tattoo",
            image: "https://images.squarespace-cdn.com/content/v1/685919ff6dd64201c27451ff/9f716166-370e-4d16-9b18-70a265e50e51/AR503108-Enhanced-NR-Edit.jpg",
            styles: ["Large Scale", "New School", "Illustrative"],
            location: "1063 Ferry Road, Christchurch",
            priceRange: "$$",
            website: "https://www.delltattoo.com/"
        },
        {
            name: "Lucky Cat Tattoo Studio",
            image: "./images/LuckyCat.jpg",
            styles: ["New School", "Illustrative"],
            location: "24 McGregors Road, Christchurch",
            priceRange: "$$",
            website: "https://www.facebook.com/luckycattattoostudionz/"
        },
         {
            name: "Lincoln Ink Tattoo Studio",
            image: "https://scontent.fakl4-2.fna.fbcdn.net/v/t39.30808-6/472812532_1154406616050799_7513313292005385138_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=DjsqbSpA_RgQ7kNvwEkW1FS&_nc_oc=AdkoG8JVjNIlzU_H5y31h9uEIVK6thpR_-j_cRxhd_H5bB81Gmw_4RNmEuigScPb2PI&_nc_zt=23&_nc_ht=scontent.fakl4-2.fna&_nc_gid=BCPbWsuIaS5918qTR0aIgQ&oh=00_Afjy-wC2QwnoGlff_s3zIyFZkyY0FOpfoBGKYMWKm1IHVg&oe=69255F66",
            styles: ["Ornamental", "Fineline"],
            location: "265 Lincoln Road, Christchurch",
            priceRange: "$$",
            website: "https://www.facebook.com/Lincolninktattoo/"
        },
        {
            name: "Brother Tip Tattoo & Art Studio",
            image: "./images/HighArts.png", 
            styles: ["New School", "Illustrative"],
            location: "705 Gloucester Street, Christchurch",
            priceRange: "$$",
            website: "https://www.brothertip.co.nz/"
        },
        {
            name: "Astoria Ink Tattoo Studio",
            image: "./images/Astoria.jpg",
            styles: ["New School", "Illustrative"],
            location: "270 St Asaph Street, Christchurch",
            priceRange: "$$",
            website: "https://www.astoriaink.co.nz/"
        },
        {
            name: "Impala Tattoo",
            image: "./images/Impala.jpg",
            styles: ["New School", "Illustrative"],
            location: "491 Papanui Road, Christchurch",
            priceRange: "$$",
            website: "https://www.facebook.com/impalatattoonz/"
        },  
        {
            name: "The Doom Room Tattoos",
            image: "./images/DoomRoom.jpg",
            styles: ["New School", "Illustrative"],
            location: "401A Ilam Road, Bryndwr",
            priceRange: "$$",
            website: "https://www.instagram.com/thedoomroom_tattoos/"
        },
        {
            name: "Orange Street",
            image: "./images/Orange.jpg",
            styles: ["Fineline", "Illustrative"],
            location: "694 Ferry Road, Woolston",
            priceRange: "$$",
            website: "https://www.instagram.com/orangestreet_collective/"
        } 
    ];

    const blogData = [
        {
            title: "A Guide to Aftercare: Keeping Your Ink Vibrant",
            date: "October 26, 2024",
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
            title: "Meet the Artist: An Interview with with a Tattoo Apprentice",
            date: "November 21, 2025",
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