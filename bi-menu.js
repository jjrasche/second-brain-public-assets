// Main application logic
const BiServicesApp = {
    // Initialize the application
    init() {
        this.loadData();
        this.setupEventListeners();
    },

    // Load data and render all components
    loadData() {
        if (typeof biServicesData === 'undefined') {
            console.error('BI Services data not loaded');
            return;
        }
        
        this.updateSiteInfo();
        this.renderQuickActions();
        this.renderCategories();
    },

    // Update site information from JSON data
    updateSiteInfo() {
        document.getElementById('siteTitle').textContent = biServicesData.siteInfo.title;
        document.getElementById('siteDescription').textContent = biServicesData.siteInfo.description;
        document.getElementById('footerText').textContent = biServicesData.siteInfo.footer;
    },

    // Render quick action buttons
    renderQuickActions() {
        const actionGrid = document.getElementById('actionGrid');
        actionGrid.innerHTML = '';
        
        biServicesData.quickActions.forEach(action => {
            const actionCard = this.createActionCard(action);
            actionGrid.appendChild(actionCard);
        });
    },

    // Create individual action card
    createActionCard(action) {
        const actionCard = document.createElement('div');
        actionCard.className = 'action-card';
        actionCard.innerHTML = `
            <div class="action-title">${action.title}</div>
            <div class="action-description">${action.description}</div>
        `;
        actionCard.onclick = () => this.handleActionClick(action.action);
        return actionCard;
    },

    // Handle action button clicks
    handleActionClick(action) {
        if (action.startsWith('mailto:') || action.startsWith('http')) {
            window.location.href = action;
        } else {
            window.location.href = action;
        }
    },

    // Render all categories and their services
    renderCategories() {
        const container = document.getElementById('categoriesContainer');
        container.innerHTML = '';
        
        biServicesData.categories.forEach((category, index) => {
            const categorySection = this.createCategorySection(category, index);
            container.appendChild(categorySection);
        });
    },

    // Create category section
    createCategorySection(category, index) {
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        categorySection.style.animationDelay = `${index * 0.1}s`;
        categorySection.dataset.categoryId = category.id;
        
        const categoryHeader = this.createCategoryHeader(category);
        const categoryContent = this.createCategoryContent(category);
        
        categorySection.appendChild(categoryHeader);
        categorySection.appendChild(categoryContent);
        
        return categorySection;
    },

    // Create category header
    createCategoryHeader(category) {
        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerHTML = `
            <h2>
                <span class="category-icon">${category.icon}</span>
                ${category.name}
            </h2>
            <div class="category-description">${category.description}</div>
            <span class="expand-icon">▼</span>
        `;
        return header;
    },

    // Create category content with services
    createCategoryContent(category) {
        const content = document.createElement('div');
        content.className = 'category-content';
        
        category.services.forEach(service => {
            const serviceCard = this.createServiceCard(service);
            content.appendChild(serviceCard);
        });
        
        return content;
    },

    // Create individual service card
    createServiceCard(service) {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.dataset.serviceId = service.id;
        
        card.innerHTML = `
            <div class="service-header">
                <span class="service-icon">${service.icon}</span>
                <div class="service-title">${service.title}</div>
            </div>
            <div class="service-summary">${service.summary}</div>
            <div class="service-details">
                <div class="detail-item">
                    <div class="detail-label">What we do:</div>
                    <div class="detail-value">${service.description}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Timeframe:</div>
                    <div class="detail-value">${service.timeframe}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Example:</div>
                    <div class="detail-value">${service.example}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Requirements:</div>
                    <div class="detail-value">${service.requirements.join(', ')}</div>
                </div>
                <div class="tags">
                    ${service.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        return card;
    },

    // Set up all event listeners
    setupEventListeners() {
        this.setupSearch();
        this.setupCategoryToggles();
        this.setupServiceCardToggles();
    },

    // Set up search functionality
    setupSearch() {
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    },

    // Handle search input
    handleSearch(searchTerm) {
        const term = searchTerm.toLowerCase();
        const noResults = document.getElementById('noResults');
        let hasResults = false;
        
        if (term === '') {
            this.showAllContent();
            return;
        }
        
        // Hide quick actions during search
        document.getElementById('quickActions').style.display = 'none';
        
        // Search through categories and services
        biServicesData.categories.forEach(category => {
            const categorySection = document.querySelector(`[data-category-id="${category.id}"]`);
            let categoryHasMatch = false;
            
            category.services.forEach(service => {
                const serviceCard = document.querySelector(`[data-service-id="${service.id}"]`);
                const isMatch = this.searchService(service, term);
                
                serviceCard.style.display = isMatch ? 'block' : 'none';
                if (isMatch) {
                    categoryHasMatch = true;
                    hasResults = true;
                }
            });
            
            categorySection.style.display = categoryHasMatch ? 'block' : 'none';
        });
        
        noResults.style.display = hasResults ? 'none' : 'block';
    },

    // Search within a service
    searchService(service, term) {
        const searchableText = [
            service.title,
            service.summary,
            service.description,
            service.example,
            ...service.tags,
            ...service.requirements
        ].join(' ').toLowerCase();
        
        return searchableText.includes(term);
    },

    // Show all content (reset search)
    showAllContent() {
        document.querySelectorAll('.category-section').forEach(section => {
            section.style.display = 'block';
        });
        document.querySelectorAll('.service-card').forEach(card => {
            card.style.display = 'block';
        });
        document.getElementById('noResults').style.display = 'none';
        document.getElementById('quickActions').style.display = 'block';
    },

    // Set up category collapse/expand
    setupCategoryToggles() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.category-header')) {
                const header = e.target.closest('.category-header');
                const section = header.parentElement;
                section.classList.toggle('collapsed');
            }
        });
    },

    // Set up service card expand/collapse
    setupServiceCardToggles() {
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.service-card');
            if (!card || e.target.classList.contains('tag')) return;
            
            // Close other expanded cards in the same category
            const categoryContent = card.parentElement;
            categoryContent.querySelectorAll('.service-card').forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('expanded');
                }
            });
            
            // Toggle current card
            card.classList.toggle('expanded');
        });
    }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    BiServicesApp.init();
});