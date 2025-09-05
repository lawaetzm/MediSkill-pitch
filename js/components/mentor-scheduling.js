/**
 * Mentor Scheduling Component
 * Displays and manages mentor conversation scheduling interface
 */

class MentorSchedulingComponent {
    constructor(containerId, languageSwitcher) {
        this.containerId = containerId;
        this.languageSwitcher = languageSwitcher;
        this.currentLang = languageSwitcher.currentLang;
        this.translations = {};
        this.activeTab = 'scheduled';
        this.init();
    }

    async init() {
        try {
            await this.loadTranslations();
            this.render();
            this.setupEventListeners();
        } catch (error) {
            console.error('Error initializing MentorSchedulingComponent:', error);
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
            console.warn('Failed to load translations for mentor scheduling, using fallback:', error);
            this.translations = {};
        }
    }

    render() {
        const container = document.getElementById(this.containerId);
        if (!container) {
            console.error(`Container with id ${this.containerId} not found`);
            return;
        }

        const schedulingData = this.getSchedulingTranslations();
        
        container.innerHTML = `
            <div class="mentor-scheduling-container">
                <div class="conversations-panel">
                    <div class="panel-header">
                        <h4 data-translate="ai_mentor.scheduling.conversations_title">📅 ${schedulingData.conversations_title}</h4>
                    </div>
                    <div class="conversations-tabs">
                        <button class="tab-button active" data-tab="scheduled" data-translate="ai_mentor.scheduling.tabs.scheduled">${schedulingData.tabs.scheduled}</button>
                        <button class="tab-button" data-tab="completed" data-translate="ai_mentor.scheduling.tabs.completed">${schedulingData.tabs.completed}</button>
                        <button class="tab-button" data-tab="all" data-translate="ai_mentor.scheduling.tabs.all">${schedulingData.tabs.all}</button>
                    </div>
                    <div class="conversations-list">
                        ${this.renderConversationsList(schedulingData)}
                    </div>
                </div>
            </div>
        `;
    }

    renderConversationsList(schedulingData) {
        const conversations = schedulingData.conversations || [];
        return conversations.map((conv, index) => {
            // Determine conversation type based on description
            const conversationType = conv.description.toLowerCase().includes('justering') || 
                                   conv.description.toLowerCase().includes('adjustment') ? 'adjustment' : 'introduction';
            
            return `
                <div class="conversation-item" onclick="conversationModal.openModal('${conversationType}')">
                    <div class="conversation-info">
                        <div class="conversation-title" data-translate="ai_mentor.scheduling.conversations.${index}.title">${conv.title}</div>
                        <div class="conversation-meta">
                            <span class="status-badge" data-translate="ai_mentor.scheduling.conversations.${index}.status">${conv.status}</span>
                            <span class="conversation-date" data-translate="ai_mentor.scheduling.conversations.${index}.date">${conv.date}</span>
                        </div>
                        <div class="conversation-description" data-translate="ai_mentor.scheduling.conversations.${index}.description">${conv.description}</div>
                    </div>
                    <div class="conversation-arrow">›</div>
                </div>
            `;
        }).join('');
    }

    getSchedulingTranslations() {
        const schedulingTranslations = this.translations?.ai_mentor?.scheduling;
        return schedulingTranslations || {
            conversations_title: "Your Mentor Conversations",
            ai_assistant_title: "Mentor AI Assistant",
            tabs: { scheduled: "Scheduled", completed: "Completed", all: "All" },
            conversations: [
                { title: "Conversation", status: "Scheduled", date: "12. Aug. 2025, 06:18", description: "Introduction conversation" },
                { title: "Conversation", status: "Scheduled", date: "15. Oct. 2026, 06:19", description: "Adjustment conversation" }
            ],
            ai_welcome: "Hello! I am your mentee AI assistant...",
            input_placeholder: "Ask a question..."
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
                    // Handle icon prefixes for headers
                    if (key.includes('conversations_title')) {
                        element.innerHTML = `📅 ${translation}`;
                    } else {
                        element.innerHTML = translation;
                    }
                }
            }
        });
    }

    setupEventListeners() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        // Tab switching functionality
        const tabButtons = container.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const tab = e.target.getAttribute('data-tab');
                this.switchTab(tab);
            });
        });
    }

    switchTab(tab) {
        this.activeTab = tab;
        const container = document.getElementById(this.containerId);
        if (!container) return;

        // Update active tab button
        const tabButtons = container.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.classList.toggle('active', button.getAttribute('data-tab') === tab);
        });

        // For presentation purposes, we keep the same conversations visible
        // In a real implementation, this would filter conversations by status
        this.filterConversationsByTab(tab);
    }

    /**
     * Filter conversations based on active tab
     * @param {string} tab - The active tab ('scheduled', 'completed', 'all')
     */
    filterConversationsByTab(tab) {
        // In a real implementation, this would:
        // 1. Fetch conversations based on status
        // 2. Re-render the conversation list
        // 3. Update conversation counts
        
        console.log(`Filtering conversations for tab: ${tab}`);
        
        // For demo purposes, we could hide/show conversations based on status
        // but since this is a static demo, we'll just log the action
    }

    /**
     * Add a new conversation to the list
     * @param {Object} conversation - Conversation data
     */
    addConversation(conversation) {
        // Implementation for adding new conversations
        console.log('Adding conversation:', conversation);
    }

    /**
     * Update conversation status
     * @param {string} conversationId - ID of the conversation
     * @param {string} status - New status
     */
    updateConversationStatus(conversationId, status) {
        // Implementation for updating conversation status
        console.log(`Updating conversation ${conversationId} to status: ${status}`);
    }

    /**
     * Get conversations by status
     * @param {string} status - Status to filter by
     * @returns {Array} Filtered conversations
     */
    getConversationsByStatus(status) {
        const schedulingData = this.getSchedulingTranslations();
        if (status === 'all') {
            return schedulingData.conversations || [];
        }
        
        return (schedulingData.conversations || []).filter(conv => 
            conv.status.toLowerCase() === status.toLowerCase()
        );
    }
}

// Export for use in other modules
window.MentorSchedulingComponent = MentorSchedulingComponent;
