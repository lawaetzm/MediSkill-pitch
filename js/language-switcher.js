/**
 * Language Switcher
 * Manages language switching functionality and coordinates component updates
 */

class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('mediskill-lang') || 'da';
        this.translationLoader = new TranslationLoader();
        this.translations = {};
        this.components = {
            chatbox: null,
            scheduling: null,
            conversationModal: null
        };
        this.init();
    }

    async init() {
        this.setupEventListeners();
        await this.setLanguage(this.currentLang);
        console.log('LanguageSwitcher initialized');
    }

    // Component registration methods
    setChatboxInstance(chatbox) {
        this.components.chatbox = chatbox;
    }

    setSchedulingInstance(scheduling) {
        this.components.scheduling = scheduling;
    }

    setConversationModalInstance(conversationModal) {
        this.components.conversationModal = conversationModal;
    }

    setupEventListeners() {
        const buttons = document.querySelectorAll('.lang-btn');
        console.log(`Found ${buttons.length} language buttons`);
        
        buttons.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.preventDefault();
                const lang = e.target.getAttribute('data-lang');
                console.log(`Language button clicked: ${lang}`);
                await this.setLanguage(lang);
            });
        });
    }

    async setLanguage(lang) {
        console.log(`Setting language to: ${lang}`);
        
        this.currentLang = lang;
        localStorage.setItem('mediskill-lang', lang);
        
        try {
            // Load translations for the new language
            this.translations = await this.translationLoader.loadLanguage(lang);
            console.log(`Successfully loaded translations for ${lang}:`, Object.keys(this.translations));
            
            // Update active button
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });

            // Update HTML lang attribute
            document.documentElement.setAttribute('lang', lang);

            // Update all translatable elements on the page
            this.updateTranslations();

            // Notify components of language change
            await this.notifyComponents(lang);
            
            console.log(`Language successfully switched to: ${lang}`);
        } catch (error) {
            console.error(`Failed to set language to ${lang}:`, error);
            // Still update the active button for visual feedback
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });
        }
    }

    async notifyComponents(lang) {
        const updatePromises = [];

        if (this.components.chatbox) {
            updatePromises.push(this.components.chatbox.updateLanguage(lang));
        }
        if (this.components.scheduling) {
            updatePromises.push(this.components.scheduling.updateLanguage(lang));
        }
        if (this.components.conversationModal) {
            updatePromises.push(this.components.conversationModal.updateLanguage(lang));
        }

        await Promise.all(updatePromises);
        console.log('All components updated with new language');
    }

    updateTranslations() {
        TranslationUtils.updateTranslations(this.translations);
    }

    /**
     * Get current language
     * @returns {string} Current language code
     */
    getCurrentLanguage() {
        return this.currentLang;
    }

    /**
     * Get current translations
     * @returns {Object} Current translation object
     */
    getCurrentTranslations() {
        return this.translations;
    }

    /**
     * Check if a language is available
     * @param {string} lang - Language code to check
     * @returns {boolean} Whether the language is available
     */
    isLanguageAvailable(lang) {
        return ['da', 'en', 'sv', 'de'].includes(lang);
    }

    /**
     * Get available languages
     * @returns {Array} Array of available language codes
     */
    getAvailableLanguages() {
        return ['da', 'en', 'sv', 'de'];
    }

    /**
     * Preload all available translations
     */
    async preloadAllTranslations() {
        await this.translationLoader.preloadLanguages(this.getAvailableLanguages());
        console.log('All translations preloaded');
    }

    /**
     * Get translation for a specific key
     * @param {string} key - Translation key (dot notation)
     * @param {string} lang - Language code (optional, uses current if not provided)
     * @returns {string|null} Translation text or null if not found
     */
    async getTranslation(key, lang = null) {
        const targetLang = lang || this.currentLang;
        
        if (targetLang !== this.currentLang) {
            const translations = await this.translationLoader.loadLanguage(targetLang);
            return TranslationUtils.getNestedValue(translations, key);
        }
        
        return TranslationUtils.getNestedValue(this.translations, key);
    }
}

// Export for use in other modules
window.LanguageSwitcher = LanguageSwitcher;
