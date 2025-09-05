/**
 * Main Application Initialization
 * Initializes all components and sets up the application
 */

// Global variables for component instances
let languageSwitcher = null;

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM loaded, initializing application...');
    
    try {
        // Initialize language switcher
        languageSwitcher = new LanguageSwitcher();
        console.log('LanguageSwitcher created');
        
        // Preload all translations for better performance (don't fail if this fails)
        try {
            await languageSwitcher.preloadAllTranslations();
            console.log('Translations preloaded successfully');
        } catch (preloadError) {
            console.warn('Translation preloading failed, but continuing with fallbacks:', preloadError);
        }
        
        // Initialize conversation modal (always needed for interaction)
        window.conversationModal = new ConversationModalComponent(languageSwitcher);
        languageSwitcher.setConversationModalInstance(window.conversationModal);
        console.log('ConversationModalComponent created and integrated');
        
        // Initialize chatbox if container exists
        const chatboxContainer = document.getElementById('ai-chatbox-container');
        if (chatboxContainer) {
            const chatbox = new ChatboxComponent('ai-chatbox-container', languageSwitcher);
            languageSwitcher.setChatboxInstance(chatbox);
            console.log('ChatboxComponent created and integrated');
        }
        
        // Initialize scheduling if container exists
        const schedulingContainer = document.getElementById('mentor-scheduling-container');
        if (schedulingContainer) {
            const scheduling = new MentorSchedulingComponent('mentor-scheduling-container', languageSwitcher);
            languageSwitcher.setSchedulingInstance(scheduling);
            console.log('MentorSchedulingComponent created and integrated');
        }
        
        // Initialize other UI features
        initializeScrollFeatures();
        
        console.log('Application initialization complete');
        
    } catch (error) {
        console.error('Error during application initialization:', error);
        
        // Fallback: Basic functionality without dynamic translations
        initializeBasicFeatures();
    }
});

/**
 * Initialize scroll-related features
 */
function initializeScrollFeatures() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll indicator click functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const firstSection = document.querySelector('.section');
            if (firstSection) {
                firstSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
}

/**
 * Initialize basic features as fallback
 */
function initializeBasicFeatures() {
    console.log('Initializing basic features as fallback');
    
    // Basic language switching without dynamic loading
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            
            // Update active button
            buttons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Update HTML lang attribute
            document.documentElement.setAttribute('lang', lang);
            
            // Store preference
            localStorage.setItem('mediskill-lang', lang);
            
            console.log(`Language switched to: ${lang} (basic mode)`);
        });
    });
    
    // Initialize scroll features
    initializeScrollFeatures();
}

/**
 * Utility function to show loading state
 * @param {boolean} show - Whether to show loading state
 */
function showLoading(show) {
    // Implementation for showing/hiding loading states
    // Could be used during language switching or component initialization
    console.log(`Loading state: ${show ? 'shown' : 'hidden'}`);
}

/**
 * Handle errors gracefully
 * @param {Error} error - The error to handle
 * @param {string} context - Context where the error occurred
 */
function handleError(error, context) {
    console.error(`Error in ${context}:`, error);
    
    // In production, you might want to:
    // - Send error reports to a logging service
    // - Show user-friendly error messages
    // - Provide fallback functionality
}

/**
 * Get current application state
 * @returns {Object} Current state information
 */
function getApplicationState() {
    return {
        language: languageSwitcher?.getCurrentLanguage() || 'da',
        components: {
            languageSwitcher: !!languageSwitcher,
            conversationModal: !!window.conversationModal,
            chatbox: !!languageSwitcher?.components.chatbox,
            scheduling: !!languageSwitcher?.components.scheduling
        },
        translations: {
            loaded: !!languageSwitcher?.getCurrentTranslations(),
            cached: languageSwitcher?.translationLoader?.getCachedLanguages() || []
        }
    };
}

// Export utilities for debugging/development
window.MediSkillApp = {
    getState: getApplicationState,
    showLoading: showLoading,
    handleError: handleError,
    languageSwitcher: () => languageSwitcher
};
