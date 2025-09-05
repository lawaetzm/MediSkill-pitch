/**
 * Chatbox Component
 * Interactive AI chatbox for mentor assistance
 */

class ChatboxComponent {
    constructor(containerId, languageSwitcher) {
        this.containerId = containerId;
        this.languageSwitcher = languageSwitcher;
        this.currentLang = languageSwitcher.currentLang;
        this.translations = {};
        this.init();
    }

    async init() {
        try {
            await this.loadTranslations();
            this.render();
            this.setupEventListeners();
        } catch (error) {
            console.error('Error initializing ChatboxComponent:', error);
            // Still render with fallback
            this.translations = {};
            this.render();
            this.setupEventListeners();
        }
    }

    async loadTranslations() {
        try {
            this.translations = await this.languageSwitcher.translationLoader.loadLanguage(this.currentLang);
        } catch (error) {
            console.warn('Failed to load translations for chatbox, using fallback:', error);
            this.translations = {};
        }
    }

    render() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Container with id ${this.containerId} not found`);
            return;
        }

        const chatboxData = this.getChatboxTranslations();
        
        container.innerHTML = `
            <div class="ai-chatbox-container">
                <div class="chatbox-header">
                    <h4 data-translate="ai_mentor.chatbox.title">${chatboxData.title}</h4>
                    <p data-translate="ai_mentor.chatbox.subtitle">${chatboxData.subtitle}</p>
                </div>
                <div class="chatbox-messages">
                    <div class="message user">
                        <span data-translate="ai_mentor.chatbox.user_message">${chatboxData.user_message}</span>
                    </div>
                    <div class="message ai">
                        <div data-translate="ai_mentor.chatbox.ai_response">${chatboxData.ai_response}</div>
                    </div>
                </div>
                <div class="chatbox-input">
                    <input type="text" data-translate="ai_mentor.chatbox.input_placeholder" placeholder="${chatboxData.input_placeholder}" disabled>
                    <button disabled>→</button>
                </div>
            </div>
        `;
    }

    getChatboxTranslations() {
        const chatboxTranslations = this.translations?.ai_mentor?.chatbox;
        return chatboxTranslations || {
            title: "AI Mentor Assistant",
            subtitle: "Ask questions about progress and insights",
            user_message: "How is the progress?",
            ai_response: "Analysis of progress...",
            input_placeholder: "Type your message..."
        };
    }

    async updateLanguage(lang) {
        this.currentLang = lang;
        this.translations = await this.languageSwitcher.translationLoader.loadLanguage(lang);
        this.updateTranslations();
    }

    updateTranslations() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const elements = container.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = TranslationUtils.getNestedValue(this.translations, key);
            
            if (translation) {
                if (element.tagName.toLowerCase() === 'input') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });
    }

    setupEventListeners() {
        // For presentation purposes, the input is disabled
        // This is intentional as it's a static demo
        
        // In a real implementation, you would add:
        // - Send button click handler
        // - Enter key press handler
        // - Message submission logic
        // - AI response simulation/integration
    }

    // Future methods for interactive functionality:
    
    /**
     * Add a message to the chat
     * @param {string} message - Message content
     * @param {string} type - 'user' or 'ai'
     */
    addMessage(message, type = 'user') {
        const messagesContainer = document.querySelector(`#${this.containerId} .chatbox-messages`);
        if (!messagesContainer) return;

        const messageElement = document.createElement('div');
        messageElement.className = `message ${type}`;
        messageElement.innerHTML = message;
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    /**
     * Clear all messages
     */
    clearMessages() {
        const messagesContainer = document.querySelector(`#${this.containerId} .chatbox-messages`);
        if (messagesContainer) {
            messagesContainer.innerHTML = '';
        }
    }

    /**
     * Enable/disable input
     * @param {boolean} enabled - Whether input should be enabled
     */
    setInputEnabled(enabled) {
        const input = document.querySelector(`#${this.containerId} .chatbox-input input`);
        const button = document.querySelector(`#${this.containerId} .chatbox-input button`);
        
        if (input) input.disabled = !enabled;
        if (button) button.disabled = !enabled;
    }
}

// Export for use in other modules
window.ChatboxComponent = ChatboxComponent;
