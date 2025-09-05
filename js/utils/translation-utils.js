/**
 * Translation Utilities
 * Helper functions for working with translations
 */

class TranslationUtils {
    /**
     * Get nested value from object using dot notation
     * @param {Object} obj - The object to search in
     * @param {string} path - Dot-separated path (e.g., "hero.subtitle")
     * @returns {*} The value at the path, or null if not found
     */
    static getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : null;
        }, obj);
    }

    /**
     * Update all elements with data-translate attributes
     * @param {Object} translations - Translation object for current language
     * @param {Element} container - Container to search within (optional, defaults to document)
     */
    static updateTranslations(translations, container = document) {
        const elements = container.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getNestedValue(translations, key);
            
            if (translation) {
                if (element.tagName.toLowerCase() === 'title') {
                    element.textContent = translation;
                } else if (element.tagName.toLowerCase() === 'input') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });
    }

    /**
     * Handle special icon prefixes for headers
     * @param {Element} element - The element to update
     * @param {string} key - The translation key
     * @param {string} translation - The translation text
     */
    static updateWithIconPrefix(element, key, translation) {
        if (key.includes('conversations_title')) {
            element.innerHTML = `📅 ${translation}`;
        } else {
            element.innerHTML = translation;
        }
    }
}

// Export for use in other modules
window.TranslationUtils = TranslationUtils;

