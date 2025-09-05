/**
 * Conversation Modal Component
 * Handles the display and interaction of conversation details in a modal
 */

class ConversationModalComponent {
    constructor(languageSwitcher) {
        this.languageSwitcher = languageSwitcher;
        this.currentLang = languageSwitcher.currentLang;
        this.translations = {};
        this.isOpen = false;
        this.conversationType = 'introduction';
        this.init();
    }

    async init() {
        try {
            this.createModalElement();
            this.setupEventListeners();
            await this.loadTranslations();
        } catch (error) {
            console.error('Error initializing ConversationModalComponent:', error);
            // Still create modal with fallback
            this.translations = {};
            this.createModalElement();
            this.setupEventListeners();
        }
    }

    async loadTranslations() {
        try {
            this.translations = await this.languageSwitcher.translationLoader.loadLanguage(this.currentLang);
        } catch (error) {
            console.warn('Failed to load translations for conversation modal, using fallback:', error);
            this.translations = {};
        }
    }

    createModalElement() {
        const modalHTML = `
            <div id="conversation-modal" class="modal-overlay">
                <div class="modal-container">
                    <div class="modal-header">
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <h3 class="modal-title"></h3>
                            <span class="modal-total"></span>
                        </div>
                        <button class="modal-close" onclick="conversationModal.closeModal()">+</button>
                    </div>
                    <div class="modal-content">
                        <div class="conversation-card">
                            <div class="conversation-header">
                                <h4 class="conversation-title"></h4>
                                <div class="conversation-meta">
                                    <div class="conversation-date">
                                        📅 <span></span>
                                    </div>
                                    <div class="conversation-participants">
                                        <div class="participant">
                                            👤 <span></span>
                                            <span></span>
                                        </div>
                                        <div class="participant">
                                            👥 <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="conversation-status"></div>
                                </div>
                            </div>
                            <div class="conversation-sections">
                                <!-- Dynamic content will be inserted here -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    async openModal(conversationType = 'introduction') {
        this.isOpen = true;
        this.conversationType = conversationType;
        const modal = document.getElementById('conversation-modal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        await this.updateModalContent();
    }

    closeModal() {
        this.isOpen = false;
        const modal = document.getElementById('conversation-modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    async updateLanguage(lang) {
        this.currentLang = lang;
        this.translations = await this.languageSwitcher.translationLoader.loadLanguage(lang);
        if (this.isOpen) {
            await this.updateModalContent();
        }
    }

    async updateModalContent() {
        const modal = document.getElementById('conversation-modal');
        if (!modal) return;

        const conversationData = this.getConversationData();
        
        // Update modal with new content structure
        const sectionsContainer = modal.querySelector('.conversation-sections');
        if (sectionsContainer && conversationData.sections) {
            sectionsContainer.innerHTML = this.renderSections(conversationData.sections);
        }

        // Update all translatable elements
        this.updateTranslations();
    }

    getConversationData() {
        const conversationType = this.conversationType || 'introduction';
        return this.translations?.ai_mentor?.conversation_modal?.[conversationType] || {};
    }

    renderSections(sections) {
        return Object.keys(sections).map(sectionKey => {
            const section = sections[sectionKey];
            return `
                <div class="conversation-section">
                    <h5 class="section-title">${section.title}</h5>
                    <p class="section-content">${section.content}</p>
                </div>
            `;
        }).join('');
    }

    updateTranslations() {
        const modal = document.getElementById('conversation-modal');
        if (!modal) return;

        const conversationData = this.getConversationData();
        
        // Update header elements
        const titleElements = modal.querySelectorAll('.modal-title, .conversation-title');
        titleElements.forEach(el => el.innerHTML = conversationData.title || '');

        const totalElement = modal.querySelector('.modal-total');
        if (totalElement) totalElement.innerHTML = conversationData.total_indicator || '';

        const dateElement = modal.querySelector('.conversation-date span');
        if (dateElement) dateElement.innerHTML = conversationData.date || '';

        const statusElement = modal.querySelector('.conversation-status');
        if (statusElement) statusElement.innerHTML = conversationData.status || '';

        // Update participant information
        const mentorLabelElement = modal.querySelector('.participant:nth-child(1) span:nth-child(2)');
        if (mentorLabelElement) mentorLabelElement.innerHTML = conversationData.participants?.mentor_label || '';

        const mentorNameElement = modal.querySelector('.participant:nth-child(1) span:nth-child(3)');
        if (mentorNameElement) mentorNameElement.innerHTML = conversationData.participants?.mentor || '';

        const menteeLabelElement = modal.querySelector('.participant:nth-child(2) span:nth-child(2)');
        if (menteeLabelElement) menteeLabelElement.innerHTML = conversationData.participants?.mentee_label || '';

        const menteeNameElement = modal.querySelector('.participant:nth-child(2) span:nth-child(3)');
        if (menteeNameElement) menteeNameElement.innerHTML = conversationData.participants?.mentee || '';
    }

    setupEventListeners() {
        // Close modal when clicking overlay
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                this.closeModal();
            }
        });

        // Close modal with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeModal();
            }
        });
    }
}

// Export for use in other modules
window.ConversationModalComponent = ConversationModalComponent;
