// Add this as theme-switcher.js in your static/js folder

class ThemeSwitcher {
    constructor() {
        this.themes = ['default', 'dark', 'nature', 'ocean'];
        this.currentTheme = 'default';
        this.init();
    }

    init() {
        // Create theme switcher button
        const switcher = document.createElement('div');
        switcher.className = 'theme-switcher';
        switcher.innerHTML = `
            <span>Theme</span>
            <div class="theme-options">
                ${this.themes.map(theme => 
                    `<div class="theme-option" data-theme="${theme}">
                        ${theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </div>`
                ).join('')}
            </div>
        `;

        // Add event listeners
        switcher.addEventListener('click', (e) => {
            const options = switcher.querySelector('.theme-options');
            options.classList.toggle('show');
        });

        switcher.querySelectorAll('.theme-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const theme = e.target.dataset.theme;
                this.setTheme(theme);
            });
        });

        // Close theme options when clicking outside
        document.addEventListener('click', (e) => {
            if (!switcher.contains(e.target)) {
                switcher.querySelector('.theme-options').classList.remove('show');
            }
        });

        // Add to document
        document.body.appendChild(switcher);

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.setTheme(savedTheme);
        }
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }
}

// Initialize theme switcher
document.addEventListener('DOMContentLoaded', () => {
    new ThemeSwitcher();
});