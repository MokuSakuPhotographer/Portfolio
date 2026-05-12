
        // Product Data
        const products = [
            // EOLE (High Brand)
            { id: 1, brand: 'EOLE', name: 'Premium Collared Shirt', price: 'ﾂ･32,000', filterClass: 'brand-eole eole-tops' },
            { id: 2, brand: 'EOLE', name: 'Silk Blend Shirt', price: 'ﾂ･38,000', filterClass: 'brand-eole eole-tops' },
            { id: 3, brand: 'EOLE', name: 'Lightweight Parka', price: 'ﾂ･45,000', filterClass: 'brand-eole eole-tops' },
            { id: 4, brand: 'EOLE', name: 'Cashmere Long Coat', price: 'ﾂ･180,000', filterClass: 'brand-eole eole-outerwear' },
            { id: 5, brand: 'EOLE', name: 'Classic Trench Coat', price: 'ﾂ･120,000', filterClass: 'brand-eole eole-outerwear' },
            { id: 6, brand: 'EOLE', name: 'Leather Oxford Shoes', price: 'ﾂ･75,000', filterClass: 'brand-eole eole-shoes' },
            { id: 7, brand: 'EOLE', name: 'Silk Patterned Tie', price: 'ﾂ･18,000', filterClass: 'brand-eole eole-accessories' },
            { id: 8, brand: 'EOLE', name: 'Titanium Frame Glasses', price: 'ﾂ･42,000', filterClass: 'brand-eole eole-accessories' },
            { id: 9, brand: 'EOLE', name: 'Calf Leather Wallet', price: 'ﾂ･65,000', filterClass: 'brand-eole eole-accessories' },
            { id: 10, brand: 'EOLE', name: 'Slim Pass Case', price: 'ﾂ･22,000', filterClass: 'brand-eole eole-accessories' },
            { id: 11, brand: 'EOLE', name: 'Leather Key Case', price: 'ﾂ･28,000', filterClass: 'brand-eole eole-accessories' },

            // OKURIH (Street)
            { id: 12, brand: 'OKURIH', name: 'Heavyweight Logo Parka', price: 'ﾂ･24,000', filterClass: 'brand-okurih okurih-tops' },
            { id: 13, brand: 'OKURIH', name: 'Oversized Zip Parka', price: 'ﾂ･26,000', filterClass: 'brand-okurih okurih-tops' },
            { id: 14, brand: 'OKURIH', name: 'Tech Sportswear Top', price: 'ﾂ･18,000', filterClass: 'brand-okurih okurih-tops' },
            { id: 15, brand: 'OKURIH', name: 'Graphic Trainer', price: 'ﾂ･16,000', filterClass: 'brand-okurih okurih-tops' },
            { id: 16, brand: 'OKURIH', name: 'Canvas Slip-on', price: 'ﾂ･14,000', filterClass: 'brand-okurih okurih-shoes' },
            { id: 17, brand: 'OKURIH', name: 'Suede Slip-on', price: 'ﾂ･18,000', filterClass: 'brand-okurih okurih-shoes' },
            { id: 18, brand: 'OKURIH', name: 'Square Sunglasses', price: 'ﾂ･12,000', filterClass: 'brand-okurih okurih-accessories' },
            { id: 19, brand: 'OKURIH', name: 'Nylon Zip Wallet', price: 'ﾂ･9,000', filterClass: 'brand-okurih okurih-accessories' },

            // COMMON (蜈ｱ騾・
            { id: 20, brand: 'COMMON', name: 'Basic V-Neck T-Shirt', price: 'ﾂ･5,000', filterClass: 'brand-common common-tops' },
            { id: 21, brand: 'COMMON', name: 'Heavy Cotton T-Shirt', price: 'ﾂ･6,500', filterClass: 'brand-common common-tops' },
            { id: 22, brand: 'COMMON', name: 'Oversized Pocket Tee', price: 'ﾂ･7,000', filterClass: 'brand-common common-tops' },
            { id: 23, brand: 'COMMON', name: 'Low-Top Canvas Sneaker', price: 'ﾂ･12,000', filterClass: 'brand-common common-shoes' },
            { id: 24, brand: 'COMMON', name: 'Chunky Running Sneaker', price: 'ﾂ･16,000', filterClass: 'brand-common common-shoes' },
            { id: 25, brand: 'COMMON', name: 'High-Top Leather Sneaker', price: 'ﾂ･19,000', filterClass: 'brand-common common-shoes' },
            { id: 26, brand: 'COMMON', name: 'Everyday Tote Bag', price: 'ﾂ･15,000', filterClass: 'brand-common common-bags' },
            { id: 27, brand: 'COMMON', name: 'Nylon Backpack', price: 'ﾂ･22,000', filterClass: 'brand-common common-bags' },
            { id: 28, brand: 'COMMON', name: 'Eau de Parfum - Citrus', price: 'ﾂ･11,000', filterClass: 'brand-common common-fragrance' },
            { id: 29, brand: 'COMMON', name: 'Eau de Toilette - Wood', price: 'ﾂ･9,500', filterClass: 'brand-common common-fragrance' },
            { id: 30, brand: 'COMMON', name: 'Solid Perfume - Floral', price: 'ﾂ･6,000', filterClass: 'brand-common common-fragrance' },
            
            // NEW ITEMS (GALLERY)
            { id: 31, brand: 'GALLERY', name: 'Original Logo T-Shirt', price: 'ﾂ･8,800', filterClass: 'brand-common common-tops', soldOut: true, link: 'product-tshirt.html' },
            { id: 32, brand: 'GALLERY', name: 'Classic Leather Shoes', price: 'ﾂ･24,000', filterClass: 'brand-common common-shoes', soldOut: true, link: 'product-shoes.html' }
        ];

        const grid = document.getElementById('product-grid');
        const currentCategoryLabel = document.getElementById('current-category');
        const navLinks = document.querySelectorAll('.nav-link');

        // Render Cards
        function renderCards() {
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = `card show ${product.filterClass}`;
                card.setAttribute('data-id', product.id);
                
                const href = product.link ? product.link : '#';
                const btnText = product.soldOut ? 'SOLD OUT' : 'View Details';
                const badge = product.soldOut ? '<div class="sold-out-badge">SOLD OUT</div>' : '';
                
                card.innerHTML = `
                    <a href="${href}" style="display: block; width: 100%; height: 100%;">
                        <div class="card-image">
                            ${badge}
                            <div class="overlay">
                                <button class="btn-view" ${product.soldOut ? 'style="background: #000; color: #fff;"' : ''}>${btnText}</button>
                            </div>
                        </div>
                        <div class="card-info">
                            <div class="card-brand">${product.brand}</div>
                            <h3 class="card-title">${product.name}</h3>
                            <div class="card-price">${product.price}</div>
                        </div>
                    </a>
                `;
                grid.appendChild(card);
            });
        }

        renderCards();

        // Intersection Observer for scroll animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        function observeCards() {
            const cards = document.querySelectorAll('.card.show');
            cards.forEach((card, index) => {
                card.classList.remove('visible');
                // Staggered animation effect
                card.style.transitionDelay = `${(index % 4) * 0.1}s`;
                observer.observe(card);
            });
        }

        observeCards();

        // Filtering Logic
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all
                navLinks.forEach(nav => nav.classList.remove('active'));
                
                // Add active class to clicked (and its parent if in dropdown)
                e.target.classList.add('active');
                if(e.target.closest('.dropdown')) {
                    e.target.closest('.has-dropdown').querySelector('a').classList.add('active');
                }

                const filterValue = e.target.getAttribute('data-filter');
                
                // Update Label text
                if (filterValue === 'all') {
                    currentCategoryLabel.textContent = 'All Items';
                } else {
                    let text = e.target.textContent;
                    if(e.target.closest('.dropdown')) {
                        text = e.target.closest('.has-dropdown').querySelector('a').textContent + ' / ' + text;
                    }
                    currentCategoryLabel.textContent = text;
                }

                const cards = document.querySelectorAll('.card');
                
                // Hide all cards first with animation
                cards.forEach(card => {
                    card.classList.remove('visible');
                    card.style.transitionDelay = '0s'; // Reset delay for hiding
                });

                // Wait for hide animation then show filtered
                setTimeout(() => {
                    cards.forEach(card => {
                        if (filterValue === 'all' || card.classList.contains(filterValue)) {
                            card.classList.add('show');
                        } else {
                            card.classList.remove('show');
                        }
                    });
                    // Re-observe newly shown cards for entrance animation
                    observeCards();
                }, 400); // Wait for CSS opacity transition
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.padding = '0.5rem 5%';
                header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
            } else {
                header.style.padding = '1rem 5%';
                header.style.boxShadow = 'none';
            }
        });
    
