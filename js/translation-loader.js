/**
 * Translation Loader
 * Dynamically loads translation files based on language selection
 */

class TranslationLoader {
    constructor() {
        this.cache = new Map();
        this.defaultLang = 'da';
        this.fallbackTranslations = this.getEmbeddedTranslations();
    }

    /**
     * Get embedded fallback translations for when file loading fails
     * @returns {Object} Embedded translations
     */
    getEmbeddedTranslations() {
        return {
            da: {
                "meta": { "title": "MediSkill - Digital understøttelse af lægelig videreuddannelse" },
                "hero": {
                    "subtitle": "Digital understøttelse af lægelig videreuddannelse",
                    "tagline": "Overblik, struktur og sammenhæng i kompetenceudviklingen"
                },
                "about": {
                    "title": "Udviklet dér hvor det bruges",
                    "description": "MediSkill er grundlagt af Martin Lawaetz, speciallæge i karkirurgi. Inspireret af mangler under sin egen uddannelse, startede det som et lokal projekt og er nu et fuldt funktionsdygtigt digitalt værktøj. Det er udviklet og testet i den rigtige hverdag som lægerne arbejder i. Det har været vigtigt ikke blot at være endnu en dokumentationsbyrde, men være et værktøj der faktisk hjælper, gør det nemmere at dokumentere, og resulterer i noget der kan bruges konkret i hverdagen.",
                    "features": {
                        "logbook": {
                            "title": "📋 Digital Logbog",
                            "description": "Standardiseret dokumentation af procedurer og aktiviteter, altid ved hånden."
                        },
                        "feedback": {
                            "title": "💬 Struktureret Feedback",
                            "description": "Systematisk feedback gennem validerede skemaer og på tværs af uddannelsessteder."
                        },
                        "competency": {
                            "title": "📊 Kompetenceoverblik",
                            "description": "Visuel overblik over progression og kompetenceudvikling."
                        },
                        "ai_mentor": {
                            "title": "🤖 AI Mentor Assistant",
                            "description": "24/7 vejledning baseret på individuel progression"
                        }
                    }
                },
                "platform": {
                    "title": "Platformens Funktionalitet",
                    "procedure_logging": {
                        "title": "Intuitiv Procedure Logging",
                        "description": "Uddannelseslæger logger nemt procedurer direkte i appen. Systemet understøtter alle medicinske og kirurgiske specialer, tilpasses målbeskrivelser og lokale processer.",
                        "highlight": "<strong>Fordel:</strong> Reduceret administrativ byrde, systematisk og standardiseret dataindsamling og øget fokus på læring."
                    },
                    "video_title": "Se procedure logging i praksis",
                    "feedback_system": {
                        "title": "Systematisk og struktureret Feedback",
                        "description": "Supervisors kan give struktureret feedback med objektive vurderinger baseret på etablerede vurderings-værktøjer som OSATS, NOTSS, Mini-CEX samt speciale- og procedurespecifikke vurderingsværktøjer. Systemet understøtter også audio-feedback med live-transkription.",
                        "highlight": "<strong>Resultat:</strong> Op til 100+ objektive vurderinger per aktiv læge - et hidtil uset indblik i kompetenceudvikling, og deraf mulighed for at fokusere og udvikle på de områder hvor det giver mest læring."
                    },
                    "integration_video_title": "Se hvordan MediSkill let integreres i en travl hverdag"
                },
                "analytics": {
                    "title": "Data-Drevet Kompetenceudvikling",
                    "procedure_overview": {
                        "title": "Detaljeret Procedureoverblik",
                        "description": "Systematisk registrering og visualisering af alle procedurer opdelt efter type og selvstændighedsniveau. Farvekodet progression fra assistent til selvstændig udførelse giver både uddannelseslæger og vejledere et præcist overblik over, hvor fokus skal lægges i den videre uddannelse.",
                        "highlight": "<strong>Resultat:</strong> Evidensbaseret tilgang til kompetenceudvikling med dokumentation af faktisk erfaring frem for teoretisk viden."
                    },
                    "realtime_overview": {
                        "title": "Realtids-overblik over progression",
                        "description": "Visuel og brugervenlig præsentation af uddannelseslægernes progression med trends over tid. Uddannelsesansvarlige og vejledere kan følge udvikling og identificere områder med behov for fokuseret træning."
                    },
                    "competency_profiles": {
                        "title": "Kompetenceprofiler",
                        "description": "Detaljeret overblik over progression og færdigheder skaber kompetenceprofiler baseret på uddannelseslægernes faktiske hverdag. Dette skaber også nationale standarder og understøtter SST's anbefaling om kompetenceprofiler.",
                        "highlight": "<strong>Innovation:</strong> Skræddersyede uddannelsesforløb baseret på individuelle kompetenceprofiler."
                    }
                },
                "about": {
                    "title": "Udviklet dér hvor det bruges",
                    "description": "MediSkill er grundlagt af Martin Lawaetz, speciallæge i karkirurgi. Inspireret af mangler under sin egen uddannelse, startede det som et lokal projekt og er nu et fuldt funktionsdygtigt digitalt værktøj. Det er udviklet og testet i den rigtige hverdag som lægerne arbejder i. Det har været vigtigt ikke blot at være endnu en dokumentationsbyrde, men være et værktøj der faktisk hjælper, gør det nemmere at dokumentere, og resulterer i noget der kan bruges konkret i hverdagen.",
                    "features": {
                        "logbook": { "title": "📋 Digital Logbog", "description": "Standardiseret dokumentation af procedurer og aktiviteter, altid ved hånden." },
                        "feedback": { "title": "💬 Struktureret Feedback", "description": "Systematisk feedback gennem validerede skemaer og på tværs af uddannelsessteder." },
                        "competency": { "title": "📊 Kompetenceoverblik", "description": "Visuel overblik over progression og kompetenceudvikling." },
                        "ai_mentor": { "title": "🤖 AI Mentor Assistant", "description": "24/7 vejledning baseret på individuel progression" }
                    }
                },
                "platform": { 
                    "title": "Platformens Funktionalitet",
                    "procedure_logging": {
                        "title": "Intuitiv Procedure Logging",
                        "description": "Uddannelseslæger logger nemt procedurer direkte i appen. Systemet understøtter alle medicinske og kirurgiske specialer, tilpasses målbeskrivelser og lokale processer.",
                        "highlight": "<strong>Fordel:</strong> Reduceret administrativ byrde, systematisk og standardiseret dataindsamling og øget fokus på læring."
                    },
                    "video_title": "Se procedure logging i praksis",
                    "feedback_system": {
                        "title": "Systematisk og struktureret Feedback",
                        "description": "Supervisors kan give struktureret feedback med objektive vurderinger baseret på etablerede vurderings-værktøjer som OSATS, NOTSS, Mini-CEX samt speciale- og procedurespecifikke vurderingsværktøjer. Systemet understøtter også audio-feedback med live-transkription.",
                        "highlight": "<strong>Resultat:</strong> Op til 100+ objektive vurderinger per aktiv læge - et hidtil uset indblik i kompetenceudvikling, og deraf mulighed for at fokusere og udvikle på de områder hvor det giver mest læring."
                    },
                    "integration_video_title": "Se hvordan MediSkill let integreres i en travl hverdag"
                },
                "analytics": { 
                    "title": "Data-Drevet Kompetenceudvikling",
                    "procedure_overview": {
                        "title": "Detaljeret Procedureoverblik",
                        "description": "Systematisk registrering og visualisering af alle procedurer opdelt efter type og selvstændighedsniveau. Farvekodet progression fra assistent til selvstændig udførelse giver både uddannelseslæger og vejledere et præcist overblik over, hvor fokus skal lægges i den videre uddannelse.",
                        "highlight": "<strong>Resultat:</strong> Evidensbaseret tilgang til kompetenceudvikling med dokumentation af faktisk erfaring frem for teoretisk viden."
                    },
                    "realtime_overview": {
                        "title": "Realtids-overblik over progression",
                        "description": "Visuel og brugervenlig præsentation af uddannelseslægernes progression med trends over tid. Uddannelsesansvarlige og vejledere kan følge udvikling og identificere områder med behov for fokuseret træning."
                    },
                    "competency_profiles": {
                        "title": "Kompetenceprofiler",
                        "description": "Detaljeret overblik over progression og færdigheder skaber kompetenceprofiler baseret på uddannelseslægernes faktiske hverdag. Dette skaber også nationale standarder og understøtter SST's anbefaling om kompetenceprofiler.",
                        "highlight": "<strong>Innovation:</strong> Skræddersyede uddannelsesforløb baseret på individuelle kompetenceprofiler."
                    }
                },
                "ai_mentor": { 
                    "title": "AI Mentor Assistant",
                    "integrated_mentoring": {
                        "title": "Integrerede Mentor-samtaler",
                        "description": "Vejledersamtaler kan foregå direkte i MediSkill, hvor al relevant information om uddannelseslægen fremgår. Strukturen følger SST's anbefalinger og tilpasses målbeskrivelser. Vejlederskemaer kan udfyldes i MediSkill og printes/gemmes direkte.",
                        "bullets": {
                            "0": "Planlægning og struktur sikrer kontinuitet",
                            "1": "Al historisk data tilgængelig under samtalen", 
                            "2": "AI-assisteret forberedelse og opfølgning"
                        }
                    },
                    "intelligent_guidance": {
                        "title": "24/7 Intelligent Vejledning",
                        "description": "Både uddannelseslæger og vejledere har adgang til en AI-mentor med dybdegående indsigt i den individuelle progression. Systemet kan besvare spørgsmål om fremskridt, foreslå fokusområder og give personlige anbefalinger.",
                        "highlight": "<strong>Eksempel:</strong> \"Hvordan går det med lægens fremgang i de sidste to måneder?\" - AI'en analyserer data og giver konkrete svar om procedurer, selvstændighed og progression."
                    },
                    "procedure_list": {
                        "title": "Print din procedureliste",
                        "description": "Slut med lommebøger og excel ark i forskellige formater. Standardiseret dokumentation sikrer ensartet CV præsentation, i et prædefineret format designet efter målbeskrivelser og lokale processer. Tilgængelig 24/7 og altid opdateret."
                    },
                    "wellness_monitoring": {
                        "title": "Måling af trivsel og arbejdsmiljø",
                        "description": "MediLife modulet giver mulighed for monitorering af trivsel og arbejdsmiljø på udvalgte parametre. God trivsel og optimal kompetenceudvikling hænger uløseligt sammen, og kontinuerlig monitorering giver mulighed for at sætte ind i tide."
                    },
                    "chatbox": {
                        "title": "AI Mentor Assistant",
                        "subtitle": "Stil spørgsmål om mentee data, fremskridt, eller få indsigt baseret på historiske data",
                        "user_message": "Hvordan går det med lægens fremgang i de sidste to måneder?",
                        "ai_response": "- Der er primært udført procedurer som \"Primær uden supervision\", hvilket indikerer en høj grad af selvstændighed. Der er udført 83 procedurer uden supervision og 13 procedurer som \"Primær med supervision\" i de sidste to måneder.<br><br>- Den gennemsnitlige vurderingsscore er stabil omkring 4.5/5, hvilket viser stabil og kompetent præstation. De seneste vurderinger viser en score på 4.0/5 for Lap. Appendektomi.<br><br>- Kommentarer omfatter excellent fingerfærdighed og kritisk syn, som fremhæver uddannelseslægens tekniske færdigheder og refleksionsevner. - Der påpeges også behov for træning i ledelse og kommunikation i pressede situationer.<br><br>Uddannelseslægen har stabil fremgang med en høj grad af selvstændighed i udførelsen af procedurer. Der kan arbejdes på kommunikation og ledelsetræning.",
                        "input_placeholder": "Skriv din besked her..."
                    },
                    "scheduling": {
                        "conversations_title": "Dine Mentor Samtaler",
                        "tabs": {
                            "scheduled": "Planlagt",
                            "completed": "Fuldført",
                            "all": "Alle"
                        },
                        "conversations": [
                            {
                                "title": "Samtale",
                                "status": "Planlagt",
                                "date": "12. aug. 2025, 06:18",
                                "description": "Introduktionssamtale"
                            },
                            {
                                "title": "Samtale",
                                "status": "Planlagt", 
                                "date": "15. okt. 2026, 06:19",
                                "description": "Justeringssamtale"
                            }
                        ]
                    },
                    "conversation_modal": {
                        "introduction": {
                            "title": "Introduktionssamtale",
                            "total_indicator": "1 Total",
                            "date": "10.9.2025 13.04",
                            "participants": {
                                "mentor": "Mette Frederiksen",
                                "mentee": "Poul Nyrup",
                                "mentor_label": "Mentor:",
                                "mentee_label": "Mentee:"
                            },
                            "status": "Planlagt",
                            "sections": {
                                "tidligere": {
                                    "title": "Tidligere",
                                    "content": "Uddannelseslægens tidligere ansættelser, andre erfaringer, læringsstil mv."
                                },
                                "opfolgning": {
                                    "title": "Opfølgning på sidste ansættelse",
                                    "content": "Vigtigste læringsudbytte og særlige indsatsområder i tidligere stillinger."
                                },
                                "kompetencer": {
                                    "title": "Hvordan kan de enkelte kompetencer i stillingen opnås?",
                                    "content": "Forventningsafstemning i.f.t. arbejdsområder mv. Gennemgå kompetencerne i logbogen og diskuter læringsmuligheder for de enkelte kompetencer."
                                },
                                "supervision": {
                                    "title": "Supervision",
                                    "content": "Aftaler om fast og ad hoc supervision."
                                },
                                "kompetencevurdering": {
                                    "title": "Plan for kompetencevurdering",
                                    "content": "Hvordan? Hvornår?"
                                },
                                "kompetencegodkendelse": {
                                    "title": "Plan for kompetencegodkendelse",
                                    "content": "I perioden  /  -  /        Planlægges godkendelse af kompetencer nr.:"
                                },
                                "kursusdeltagelse": {
                                    "title": "Planlagt kursusdeltagelse",
                                    "content": "Obligatoriske kurser. Ønskede forventninger til øvrige kurser, kongresser mv."
                                }
                            }
                        },
                        "adjustment": {
                            "title": "Justeringssamtale",
                            "total_indicator": "1 Total",
                            "date": "11.11.2025 13.39",
                            "participants": {
                                "mentor": "Mette Frederiksen",
                                "mentee": "Poul Nyrup",
                                "mentor_label": "Mentor:",
                                "mentee_label": "Mentee:"
                            },
                            "status": "Planlagt",
                            "sections": {
                                "justeringssamtale": {
                                    "title": "Justeringssamtale",
                                    "content": "Der afholdes minimum 1 justeringssamtale i hver ansættelse. Ved 12-måneders ansættelser ofte flere, fx hver 3. måned."
                                },
                                "punkter": {
                                    "title": "Punkter:",
                                    "content": "Hvordan går det generelt med dit uddannelsesforløb?<br><br>Er den planlagte læring opnået? Gennemgå logbogen: Er det forventede antal kompetencer godkendt? (Hvis problemer: Indrag uddannelseskoordinator/PKL)"
                                },
                                "aftaler": {
                                    "title": "Aftaler for den kommende periode/justeringer i.f.t. uddannelsesplanen",
                                    "content": "Noter aftaler om den kommende periode baseret på uddannelsesplanen"
                                },
                                "uddannelseslaegens_opgaver": {
                                    "title": "Uddannelseslægens opgaver",
                                    "content": "Opgaver som uddannelseslægen skal udføre"
                                },
                                "tutorlaegen_opgaver": {
                                    "title": "Tutorlægens opgaver",
                                    "content": "Opgaver som tutorlægen skal udføre"
                                },
                                "naeste_samtale": {
                                    "title": "Dato for næste samtale",
                                    "content": ""
                                }
                            }
                        }
                    }
                },
                "cta": {
                    "title": "Kom i gang med MediSkill",
                    "subtitle": "Oplev hvordan MediSkill kan transformere jeres lægelige videreuddannelse",
                    "demo_title": "Book en demo i dag",
                    "benefit1": "• <strong>Gratis demonstration</strong> af alle platformens funktioner",
                    "benefit2": "• <strong>Tilpasning til jeres behov</strong> og specialeområder",
                    "benefit3": "• <strong>Implementation og support</strong> gennem hele processen",
                    "contact_title": "Kontakt os",
                    "founder_info": "Martin Lawaetz - Grundlægger & CEO<br>Speciallæge i Karkirurgi",
                    "quote": "\"Fra egen erfaring ved jeg, hvor vigtig god supervision og feedback er.<br>MediSkill gør det muligt at systematisere og optimere disse processer<br>til gavn for både uddannelseslæger, vejledere og i sidste ende patienterne.\""
                },
                "procedure_list": {
                    "title": "Print din procedureliste",
                    "description": "Slut med lommebøger og excel ark i forskellige formater. Standardiseret dokumentation sikrer ensartet CV præsentation, i et prædefineret format designet efter målbeskrivelser og lokale processer. Tilgængelig 24/7 og altid opdateret."
                },
                "wellness_monitoring": {
                    "title": "Måling af trivsel og arbejdsmiljø",
                    "description": "MediLife modulet giver mulighed for monitorering af trivsel og arbejdsmiljø på udvalgte parametre. God trivsel og optimal kompetenceudvikling hænger uløseligt sammen, og kontinuerlig monitorering giver mulighed for at sætte ind i tide."
                }
            },
            en: {
                "meta": { "title": "MediSkill - Digital Support for Medical Training" },
                "hero": {
                    "subtitle": "Digital Support for Medical Training",
                    "tagline": "Structure, overview and coherence in competency development"
                },
                "about": {
                    "title": "Developed where it's used",
                    "description": "MediSkill was founded by Martin Lawaetz, specialist in vascular surgery. Inspired by shortcomings during his own training, it started as a local project and is now a fully functional digital tool. It has been developed and tested in the real everyday environment where doctors work. It has been important not to just be another documentation burden, but to be a tool that actually helps, makes it easier to document, and results in something that can be used concretely in everyday life.",
                    "features": {
                        "logbook": {
                            "title": "📋 Digital Logbook",
                            "description": "Standardized documentation of procedures and activities, always at hand."
                        },
                        "feedback": {
                            "title": "💬 Structured Feedback",
                            "description": "Systematic feedback through validated forms and across training sites."
                        },
                        "competency": {
                            "title": "📊 Competency Overview",
                            "description": "Visual overview of progression and competency development."
                        },
                        "ai_mentor": {
                            "title": "🤖 AI Mentor Assistant",
                            "description": "24/7 guidance based on individual progression"
                        }
                    }
                },
                "platform": {
                    "title": "Platform Functionality",
                    "procedure_logging": {
                        "title": "Intuitive Procedure Logging",
                        "description": "Training doctors easily log procedures directly in the app. The system supports all medical and surgical specialties, adapted to objectives and local processes.",
                        "highlight": "<strong>Advantage:</strong> Reduced administrative burden, systematic and standardized data collection and increased focus on learning."
                    },
                    "video_title": "See procedure logging in practice",
                    "feedback_system": {
                        "title": "Systematic and Structured Feedback",
                        "description": "Supervisors can provide structured feedback with objective assessments based on established assessment tools like OSATS, NOTSS, Mini-CEX as well as specialty- and procedure-specific assessment tools. The system also supports audio feedback with live transcription.",
                        "highlight": "<strong>Result:</strong> Up to 100+ objective assessments per active doctor - an unprecedented insight into competency development, and thus the opportunity to focus and develop in the areas where it provides the most learning."
                    },
                    "integration_video_title": "See how MediSkill easily integrates into a busy everyday life"
                },
                "analytics": {
                    "title": "Data-Driven Competency Development",
                    "procedure_overview": {
                        "title": "Detailed Procedure Overview",
                        "description": "Systematic registration and visualization of all procedures broken down by type and level of independence. Color-coded progression from assistant to independent execution gives both training doctors and supervisors a precise overview of where focus should be placed in further training.",
                        "highlight": "<strong>Result:</strong> Evidence-based approach to competency development with documentation of actual experience rather than theoretical knowledge."
                    },
                    "realtime_overview": {
                        "title": "Real-time overview of progression",
                        "description": "Visual and user-friendly presentation of training doctors' progression with trends over time. Training coordinators and supervisors can follow development and identify areas needing focused training."
                    },
                    "competency_profiles": {
                        "title": "Competency Profiles",
                        "description": "Detailed overview of progression and skills creates competency profiles based on training doctors' actual everyday work. This also creates national standards and supports SST's recommendation on competency profiles.",
                        "highlight": "<strong>Innovation:</strong> Customized training courses based on individual competency profiles."
                    }
                },
                "ai_mentor": { 
                    "title": "AI Mentor Assistant",
                    "integrated_mentoring": {
                        "title": "Integrated Mentor Conversations",
                        "description": "Supervisor conversations can take place directly in MediSkill, where all relevant information about the training doctor is available. The structure follows SST's recommendations and is adapted to objectives. Supervisor forms can be filled out in MediSkill and printed/saved directly.",
                        "bullets": [
                            "Planning and structure ensures continuity",
                            "All historical data available during conversation ensures efficiency",
                            "AI-assisted preparation and follow-up"
                        ]
                    },
                    "intelligent_guidance": {
                        "title": "24/7 Intelligent Guidance",
                        "description": "Both training doctors and supervisors have access to an AI mentor with in-depth insight into individual progression. The system can answer questions about progress, suggest focus areas and provide personal recommendations.",
                        "highlight": "<strong>Example:</strong> \"How is the doctor's progress in the last two months?\" - The AI analyzes data and provides concrete answers about procedures, independence and progression."
                    },
                    "chatbox": {
                        "title": "AI Mentor Assistant",
                        "subtitle": "Ask questions about trainee data, progress, or get insights based on historical data",
                        "user_message": "How is the trainee's progress in the last two months?",
                        "ai_response": "- Procedures are primarily performed as \"Primary without supervision\", indicating a high degree of independence. 83 procedures were performed without supervision and 13 procedures as \"Primary with supervision\" in the last two months.<br><br>- The average assessment score is stable around 4.5/5, showing stable and competent performance. Recent assessments show a score of 4.0/5 for Lap. Appendectomy.<br><br>- Comments include excellent dexterity and critical thinking, highlighting the trainee's technical skills and reflection abilities. - Need for training in leadership and communication in high-pressure situations is also noted.<br><br>The trainee shows stable progress with a high degree of independence in procedure execution. Communication and leadership training can be focused on.",
                        "input_placeholder": "Type your message here..."
                    },
                    "procedure_list": {
                        "title": "Print your procedure list",
                        "description": "End pocket books and excel sheets in different formats. Standardized documentation ensures uniform CV presentation, in a predefined format designed according to objectives and local processes. Available 24/7 and always updated."
                    },
                    "wellness_monitoring": {
                        "title": "Measurement of well-being and work environment",
                        "description": "The MediLife module enables monitoring of well-being and work environment on selected parameters. Good well-being and optimal competency development are inextricably linked, and continuous monitoring provides the opportunity to intervene in time."
                    },
                    "scheduling": {
                        "conversations_title": "Your Mentor Conversations",
                        "tabs": {
                            "scheduled": "Scheduled",
                            "completed": "Completed",
                            "all": "All"
                        },
                        "conversations": [
                            {
                                "title": "Conversation",
                                "status": "Scheduled",
                                "date": "12. Aug. 2025, 06:18",
                                "description": "Introduction conversation"
                            },
                            {
                                "title": "Conversation",
                                "status": "Scheduled",
                                "date": "15. Oct. 2026, 06:19", 
                                "description": "Adjustment conversation"
                            }
                        ]
                    },
                    "conversation_modal": {
                        "introduction": {
                            "title": "Introduction Conversation",
                            "total_indicator": "1 Total",
                            "date": "10.9.2025 13.04",
                            "participants": {
                                "mentor": "Mette Frederiksen",
                                "mentee": "Poul Nyrup",
                                "mentor_label": "Mentor:",
                                "mentee_label": "Mentee:"
                            },
                            "status": "Scheduled",
                            "sections": {
                                "tidligere": {
                                    "title": "Earlier",
                                    "content": "Trainee's previous employments, other experiences, learning style, etc."
                                },
                                "opfolgning": {
                                    "title": "Follow-up on last employment",
                                    "content": "Most important learning outcomes and special focus areas in previous positions."
                                },
                                "kompetencer": {
                                    "title": "How can the individual competencies in the position be achieved?",
                                    "content": "Expectation alignment regarding work areas, etc. Review competencies in the logbook and discuss learning opportunities for individual competencies."
                                },
                                "supervision": {
                                    "title": "Supervision",
                                    "content": "Agreements on fixed and ad hoc supervision."
                                },
                                "kompetencevurdering": {
                                    "title": "Plan for competency assessment",
                                    "content": "How? When?"
                                },
                                "kompetencegodkendelse": {
                                    "title": "Plan for competency approval",
                                    "content": "In the period  /  -  /        Planned approval of competencies no.:"
                                },
                                "kursusdeltagelse": {
                                    "title": "Planned course participation",
                                    "content": "Mandatory courses. Desired expectations for other courses, congresses, etc."
                                }
                            }
                        },
                        "adjustment": {
                            "title": "Adjustment Conversation",
                            "total_indicator": "1 Total",
                            "date": "11.11.2025 13.39",
                            "participants": {
                                "mentor": "Mette Frederiksen",
                                "mentee": "Poul Nyrup",
                                "mentor_label": "Mentor:",
                                "mentee_label": "Mentee:"
                            },
                            "status": "Scheduled",
                            "sections": {
                                "justeringssamtale": {
                                    "title": "Adjustment Conversation",
                                    "content": "A minimum of 1 adjustment conversation is held in each employment. With 12-month employments often more, e.g. every 3 months."
                                },
                                "punkter": {
                                    "title": "Points:",
                                    "content": "How is your training program going in general?<br><br>Has the planned learning been achieved? Review the logbook: Has the expected number of competencies been approved? (If problems: Involve education coordinator/PKL)"
                                },
                                "aftaler": {
                                    "title": "Agreements for the coming period/adjustments to the training plan",
                                    "content": "Note agreements about the coming period based on the training plan"
                                },
                                "uddannelseslaegens_opgaver": {
                                    "title": "Trainee's tasks",
                                    "content": "Tasks that the trainee should perform"
                                },
                                "tutorlaegen_opgaver": {
                                    "title": "Supervisor's tasks",
                                    "content": "Tasks that the supervisor should perform"
                                },
                                "naeste_samtale": {
                                    "title": "Date for next conversation",
                                    "content": ""
                                }
                            }
                        }
                    }
                },
                "cta": {
                    "title": "Get Started with MediSkill",
                    "subtitle": "Experience how MediSkill can transform your medical training",
                    "demo_title": "Book a demo today",
                    "benefit1": "• <strong>Free demonstration</strong> of all platform features",
                    "benefit2": "• <strong>Customization to your needs</strong> and specialty areas",
                    "benefit3": "• <strong>Implementation and support</strong> throughout the process",
                    "contact_title": "Contact us",
                    "founder_info": "Martin Lawaetz - Founder & CEO<br>Specialist in Vascular Surgery",
                    "quote": "\"From my own experience, I know how important good supervision and feedback are.<br>MediSkill makes it possible to systematize and optimize these processes<br>for the benefit of both training doctors, supervisors and ultimately patients.\""
                },
                "procedure_list": {
                    "title": "Print your procedure list",
                    "description": "End pocket books and excel sheets in different formats. Standardized documentation ensures uniform CV presentation, in a predefined format designed according to objectives and local processes. Available 24/7 and always updated."
                },
                "wellness_monitoring": {
                    "title": "Measurement of well-being and work environment",
                    "description": "The MediLife module enables monitoring of well-being and work environment on selected parameters. Good well-being and optimal competency development are inextricably linked, and continuous monitoring provides the opportunity to intervene in time."
                }
            },
            sv: {
                "meta": { "title": "MediSkill - Digital stöd för läkarutbildning" },
                "hero": {
                    "subtitle": "Digital stöd för läkarutbildning",
                    "tagline": "Översikt, struktur och sammanhang i kompetensutvecklingen"
                },
                "about": {
                    "title": "Utvecklad där den används",
                    "description": "MediSkill grundades av Martin Lawaetz, specialist i kärlkirurgi. Inspirerad av brister under sin egen utbildning startade det som ett lokalt projekt och är nu ett fullt funktionellt digitalt verktyg. Det har utvecklats och testats i den verkliga vardagsmiljö där läkare arbetar. Det har varit viktigt att inte bara vara ytterligare en dokumentationsbörda, utan att vara ett verktyg som faktiskt hjälper, gör det lättare att dokumentera och resulterar i något som kan användas konkret i vardagen.",
                    "features": {
                        "logbook": { "title": "📋 Digital loggbok", "description": "Standardiserad dokumentation alltid till hands." },
                        "feedback": { "title": "💬 Strukturerad feedback", "description": "Systematisk feedback genom validerade formulär." },
                        "competency": { "title": "📊 Kompetensöversikt", "description": "Visuell översikt över progression." },
                        "ai_mentor": { "title": "🤖 AI Mentor Assistent", "description": "24/7 vägledning baserad på progression" }
                    }
                },
                "platform": {
                    "title": "Plattformens funktionalitet",
                    "procedure_logging": {
                        "title": "Intuitiv procedurloggning",
                        "description": "Utbildningsläkare loggar enkelt procedurer direkt i appen. Systemet stöder alla medicinska och kirurgiska specialiteter, anpassat till målbeskrivningar och lokala processer.",
                        "highlight": "<strong>Fördel:</strong> Minskad administrativ börda, systematisk och standardiserad datainsamling och ökat fokus på lärande."
                    },
                    "video_title": "Se procedurloggning i praktiken",
                    "feedback_system": {
                        "title": "Systematisk och strukturerad feedback",
                        "description": "Handledare kan ge strukturerad feedback med objektiva bedömningar baserade på etablerade bedömningsverktyg som OSATS, NOTSS, Mini-CEX samt specialitets- och procedurspecifika bedömningsverktyg. Systemet stöder också ljudfeedback med live-transkription.",
                        "highlight": "<strong>Resultat:</strong> Upp till 100+ objektiva bedömningar per aktiv läkare - en tidigare osedd insikt i kompetensutveckling, och därmed möjligheten att fokusera och utveckla inom de områden där det ger mest lärande."
                    },
                    "integration_video_title": "Se hur MediSkill enkelt integreras i en hektisk vardag"
                },
                "analytics": {
                    "title": "Datadriven kompetensutveckling",
                    "procedure_overview": {
                        "title": "Detaljerad proceduraöversikt",
                        "description": "Systematisk registrering och visualisering av alla procedurer uppdelade efter typ och självständighetsnivå. Färgkodad progression från assistent till självständig utförande ger både utbildningsläkare och handledare en precis översikt över var fokus ska läggas i den fortsatta utbildningen.",
                        "highlight": "<strong>Resultat:</strong> Evidensbaserad approach till kompetensutveckling med dokumentation av verklig erfarenhet snarare än teoretisk kunskap."
                    },
                    "realtime_overview": {
                        "title": "Realtidsöversikt över progression",
                        "description": "Visuell och användarvänlig presentation av utbildningsläkarnas progression med trender över tid. Utbildningskoordinatorer och handledare kan följa utveckling och identifiera områden som behöver fokuserad träning."
                    },
                    "competency_profiles": {
                        "title": "Kompetensprofiler",
                        "description": "Detaljerad översikt över progression och färdigheter skapar kompetensprofiler baserade på utbildningsläkarnas verkliga vardag. Detta skapar också nationella standarder och stöder SST:s rekommendation om kompetensprofiler.",
                        "highlight": "<strong>Innovation:</strong> Skräddarsydda utbildningsförlopp baserade på individuella kompetensprofiler."
                    }
                },
                "ai_mentor": { 
                    "title": "AI Mentor Assistent",
                    "integrated_mentoring": {
                        "title": "Integrerade handledningssamtal",
                        "description": "Handledningssamtal kan äga rum direkt i MediSkill, där all relevant information om utbildningsläkaren är tillgänglig. Strukturen följer SST:s rekommendationer och anpassas till målbeskrivningar. Handledningsformulär kan fyllas i MediSkill och skrivas ut/sparas direkt.",
                        "bullets": [
                            "Planering och struktur säkerställer kontinuitet",
                            "All historisk data tillgänglig under samtalet",
                            "AI-assisterad förberedelse och uppföljning"
                        ]
                    },
                    "intelligent_guidance": {
                        "title": "24/7 Intelligent vägledning",
                        "description": "Både utbildningsläkare och handledare har tillgång till en AI-mentor med djupgående insikt i individuell progression. Systemet kan besvara frågor om framsteg, föreslå fokusområden och ge personliga rekommendationer.",
                        "highlight": "<strong>Exempel:</strong> \"Hur går det med läkarens framsteg de senaste två månaderna?\" - AI:n analyserar data och ger konkreta svar om procedurer, självständighet och progression."
                    },
                    "procedure_list": {
                        "title": "Skriv ut din procedurförteckning",
                        "description": "Slut med fickböcker och excel-ark i olika format. Standardiserad dokumentation säkerställer enhetlig CV-presentation, i ett fördefinierat format designat enligt målbeskrivningar och lokala processer. Tillgänglig 24/7 och alltid uppdaterad."
                    },
                    "wellness_monitoring": {
                        "title": "Mätning av välbefinnande och arbetsmiljö",
                        "description": "MediLife-modulen möjliggör övervakning av välbefinnande och arbetsmiljö på utvalda parametrar. Gott välbefinnande och optimal kompetensutveckling hänger oupplösligt samman, och kontinuerlig övervakning ger möjlighet att ingripa i tid."
                    },
                    "chatbox": {
                        "title": "AI Mentor Assistent",
                        "subtitle": "Ställ frågor om utbildningsdata, framsteg eller få insikter baserat på historisk data",
                        "user_message": "Hur går det med läkarens framsteg de senaste två månaderna?",
                        "ai_response": "- Procedurer utförs främst som \"Primär utan handledning\", vilket indikerar en hög grad av självständighet. 83 procedurer utfördes utan handledning och 13 procedurer som \"Primär med handledning\" de senaste två månaderna.<br><br>- Den genomsnittliga bedömningspoängen är stabil runt 4.5/5, vilket visar stabil och kompetent prestation. Senaste bedömningar visar en poäng på 4.0/5 för Lap. Appendektomi.<br><br>- Kommentarer inkluderar utmärkt fingerfärdighet och kritiskt tänkande, vilket framhäver utbildningsläkarens tekniska färdigheter och reflektionsförmåga. - Behov av träning i ledarskap och kommunikation i pressade situationer noteras också.<br><br>Utbildningsläkaren visar stabil framsteg med hög grad av självständighet i procedurgenomförande. Kommunikation och ledarskapsträning kan fokuseras på.",
                        "input_placeholder": "Skriv ditt meddelande här..."
                    },
                    "scheduling": {
                        "conversations_title": "Dina Handledningssamtal",
                        "tabs": {
                            "scheduled": "Planerade",
                            "completed": "Slutförda",
                            "all": "Alla"
                        },
                        "conversations": [
                            {
                                "title": "Samtal",
                                "status": "Planerat",
                                "date": "12. aug. 2025, 06:18",
                                "description": "Introduktionssamtal"
                            },
                            {
                                "title": "Samtal",
                                "status": "Planerat",
                                "date": "15. okt. 2026, 06:19",
                                "description": "Justeringssamtal"
                            }
                        ]
                    },
                    "conversation_modal": {
                        "introduction": {
                            "title": "Introduktionssamtal",
                            "total_indicator": "1 Total",
                            "date": "10.9.2025 13.04",
                            "participants": {
                                "mentor": "Mette Frederiksen",
                                "mentee": "Poul Nyrup",
                                "mentor_label": "Handledare:",
                                "mentee_label": "ST-läkare:"
                            },
                            "status": "Planerat",
                            "sections": {
                                "tidigare": {
                                    "title": "Tidigare",
                                    "content": "ST-läkarens tidigare anställningar, andra erfarenheter, inlärningsstil mv."
                                },
                                "opfolgning": {
                                    "title": "Uppföljning av senaste anställning",
                                    "content": "Viktigaste läranderesultat och särskilda fokusområden i tidigare tjänster."
                                },
                                "kompetencer": {
                                    "title": "Hur kan de enskilda kompetenserna i tjänsten uppnås?",
                                    "content": "Förväntningsjustering avseende arbetsområden mv. Gå igenom kompetenserna i loggboken och diskutera lärandemöjligheter för enskilda kompetenser."
                                },
                                "supervision": {
                                    "title": "Handledning",
                                    "content": "Avtal om fast och ad hoc-handledning."
                                },
                                "kompetencevurdering": {
                                    "title": "Plan för kompetensbedömning",
                                    "content": "Hur? När?"
                                },
                                "kompetencegodkendelse": {
                                    "title": "Plan för kompetensgodkännande",
                                    "content": "Under perioden  /  -  /        Planerat godkännande av kompetenser nr.:"
                                },
                                "kursusdeltagelse": {
                                    "title": "Planerat kursdeltagande",
                                    "content": "Obligatoriska kurser. Önskade förväntningar på övriga kurser, kongresser mv."
                                }
                            }
                        },
                        "adjustment": {
                            "title": "Justeringssamtal",
                            "total_indicator": "1 Total",
                            "date": "11.11.2025 13.39",
                            "participants": {
                                "mentor": "Mette Frederiksen",
                                "mentee": "Poul Nyrup",
                                "mentor_label": "Handledare:",
                                "mentee_label": "ST-läkare:"
                            },
                            "status": "Planerat",
                            "sections": {
                                "justeringssamtale": {
                                    "title": "Justeringssamtal",
                                    "content": "Minst 1 justeringssamtal hålls i varje anställning. Vid 12-månaders anställningar ofta fler, t.ex. var 3:e månad."
                                },
                                "punkter": {
                                    "title": "Punkter:",
                                    "content": "Hur går din utbildning generellt?<br><br>Har det planerade lärandet uppnåtts? Gå igenom loggboken: Har det förväntade antalet kompetenser godkänts? (Vid problem: Involvera utbildningskoordinator/PKL)"
                                },
                                "aftaler": {
                                    "title": "Avtal för kommande period/justeringar avseende utbildningsplanen",
                                    "content": "Notera avtal om kommande period baserat på utbildningsplanen"
                                },
                                "uddannelseslaegens_opgaver": {
                                    "title": "ST-läkarens uppgifter",
                                    "content": "Uppgifter som ST-läkaren ska utföra"
                                },
                                "tutorlaegen_opgaver": {
                                    "title": "Handledarens uppgifter",
                                    "content": "Uppgifter som handledaren ska utföra"
                                },
                                "naeste_samtale": {
                                    "title": "Datum för nästa samtal",
                                    "content": ""
                                }
                            }
                        }
                    }
                },
                "cta": {
                    "title": "Kom igång med MediSkill",
                    "subtitle": "Upplev hur MediSkill kan transformera er läkarutbildning",
                    "demo_title": "Boka en demo idag",
                    "benefit1": "• <strong>Gratis demonstration</strong> av alla plattformens funktioner",
                    "benefit2": "• <strong>Anpassning till era behov</strong> och specialområden",
                    "benefit3": "• <strong>Implementation och support</strong> genom hela processen",
                    "contact_title": "Kontakta oss",
                    "founder_info": "Martin Lawaetz - Grundare & VD<br>Specialist i kärlkirurgi",
                    "quote": "\"Från egen erfarenhet vet jag hur viktig bra handledning och feedback är.<br>MediSkill gör det möjligt att systematisera och optimera dessa processer<br>till nytta för både utbildningsläkare, handledare och i slutändan patienter.\""
                },
                "procedure_list": {
                    "title": "Skriv ut din procedurförteckning",
                    "description": "Slut med fickböcker och excel-ark i olika format. Standardiserad dokumentation säkerställer enhetlig CV-presentation, i ett fördefinierat format designat enligt målbeskrivningar och lokala processer. Tillgänglig 24/7 och alltid uppdaterad."
                },
                "wellness_monitoring": {
                    "title": "Mätning av välbefinnande och arbetsmiljö",
                    "description": "MediLife-modulen möjliggör övervakning av välbefinnande och arbetsmiljö på utvalda parametrar. Gott välbefinnande och optimal kompetensutveckling hänger oupplösligt samman, och kontinuerlig övervakning ger möjlighet att ingripa i tid."
                }
            },
            de: {
                "meta": { "title": "MediSkill - Digitale Unterstützung für die ärztliche Weiterbildung" },
                "hero": {
                    "subtitle": "Digitale Unterstützung für die ärztliche Weiterbildung",
                    "tagline": "Überblick, Struktur und Zusammenhang in der Kompetenzentwicklung"
                },
                "about": {
                    "title": "Entwickelt dort, wo es verwendet wird",
                    "description": "MediSkill wurde von Martin Lawaetz, Facharzt für Gefäßchirurgie, gegründet. Inspiriert von Mängeln während seiner eigenen Ausbildung begann es als lokales Projekt und ist nun ein voll funktionsfähiges digitales Tool.",
                    "features": {
                        "logbook": { "title": "📋 Digitales Logbuch", "description": "Standardisierte Dokumentation von Eingriffen und Aktivitäten, immer griffbereit." },
                        "feedback": { "title": "💬 Strukturiertes Feedback", "description": "Systematisches Feedback durch validierte Formulare über Ausbildungsstätten hinweg." },
                        "competency": { "title": "📊 Kompetenzübersicht", "description": "Visuelle Übersicht über Fortschritt und Kompetenzentwicklung." },
                        "ai_mentor": { "title": "🤖 KI-Mentor-Assistent", "description": "24/7 Betreuung basierend auf individueller Entwicklung" }
                    }
                },
                "platform": {
                    "title": "Plattform-Funktionalität",
                    "procedure_logging": {
                        "title": "Intuitive Eingriffsprotokollierung",
                        "description": "Assistenzärzte protokollieren Eingriffe einfach direkt in der App. Das System unterstützt alle medizinischen und chirurgischen Fachbereiche.",
                        "highlight": "Reduzierte administrative Belastung, systematische und standardisierte Datenerfassung und verstärkter Fokus auf das Lernen."
                    },
                    "video_title": "Eingriffsprotokollierung in der Praxis sehen",
                    "feedback_system": {
                        "title": "Systematisches und strukturiertes Feedback",
                        "description": "Supervisoren können strukturiertes Feedback mit objektiven Bewertungen basierend auf etablierten Bewertungstools geben.",
                        "highlight": "Bis zu 100+ objektive Bewertungen pro aktivem Assistenzarzt - ein beispielloser Einblick in die Kompetenzentwicklung."
                    },
                    "integration_video_title": "Sehen Sie, wie MediSkill sich einfach in einen geschäftigen Arbeitsalltag integriert"
                },
                "analytics": {
                    "title": "Datengesteuerte Kompetenzentwicklung",
                    "procedure_overview": {
                        "title": "Detaillierte Eingriffsübersicht",
                        "description": "Systematische Erfassung und Visualisierung aller Eingriffe aufgeteilt nach Typ und Selbstständigkeitsniveau.",
                        "highlight": "Evidenzbasierter Ansatz zur Kompetenzentwicklung mit Dokumentation tatsächlicher Erfahrung."
                    },
                    "realtime_overview": {
                        "title": "Echtzeit-Übersicht über den Fortschritt",
                        "description": "Visuelle und benutzerfreundliche Darstellung des Fortschritts der Assistenzärzte mit Trends über die Zeit."
                    },
                    "competency_profiles": {
                        "title": "Kompetenzprofile",
                        "description": "Detaillierte Übersicht über Fortschritt und Fähigkeiten erstellt Kompetenzprofile basierend auf der tatsächlichen täglichen Arbeit.",
                        "highlight": "Maßgeschneiderte Ausbildungsprogramme basierend auf individuellen Kompetenzprofilen."
                    }
                },
                "ai_mentor": {
                    "title": "KI-Mentor-Assistent",
                    "integrated_mentoring": {
                        "title": "Integrierte Mentoring-Gespräche",
                        "description": "Supervisorengespräche können direkt in MediSkill stattfinden, wo alle relevanten Informationen über den Assistenzarzt angezeigt werden.",
                        "bullets": [
                            "Planung und Struktur gewährleisten Kontinuität",
                            "Alle historischen Daten während des Gesprächs verfügbar",
                            "KI-unterstützte Vorbereitung und Nachbereitung"
                        ]
                    },
                    "intelligent_guidance": {
                        "title": "24/7 Intelligente Betreuung",
                        "description": "Sowohl Assistenzärzte als auch Supervisoren haben Zugang zu einem KI-Mentor mit tiefgreifenden Einblicken in die individuelle Entwicklung.",
                        "highlight": "\"Wie ist der Fortschritt des Arztes in den letzten zwei Monaten?\" - Die KI analysiert Daten und gibt konkrete Antworten."
                    },
                    "chatbox": {
                        "title": "KI-Mentor-Assistent",
                        "subtitle": "Stellen Sie Fragen zu Auszubildendendaten, Fortschritt oder erhalten Sie Einblicke basierend auf historischen Daten",
                        "user_message": "Wie ist der Fortschritt des Auszubildenden in den letzten zwei Monaten?",
                        "ai_response": "- Eingriffe werden hauptsächlich als \"Primär ohne Supervision\" durchgeführt, was einen hohen Grad an Selbstständigkeit anzeigt. 83 Eingriffe wurden ohne Supervision und 13 Eingriffe als \"Primär mit Supervision\" in den letzten zwei Monaten durchgeführt.<br><br>- Die durchschnittliche Bewertungspunktzahl ist stabil um 4,5/5, was eine stabile und kompetente Leistung zeigt. Neueste Bewertungen zeigen eine Punktzahl von 4,0/5 für Lap. Appendektomie.<br><br>- Kommentare umfassen ausgezeichnete Geschicklichkeit und kritisches Denken, was die technischen Fähigkeiten und Reflexionsfähigkeiten des Auszubildenden hervorhebt. - Bedarf an Training in Führung und Kommunikation in stressigen Situationen wird ebenfalls vermerkt.<br><br>Der Auszubildende zeigt stabilen Fortschritt mit einem hohen Grad an Selbstständigkeit bei der Durchführung von Eingriffen. Kommunikations- und Führungstraining kann fokussiert werden.",
                        "input_placeholder": "Geben Sie Ihre Nachricht hier ein..."
                    },
                    "scheduling": {
                        "conversations_title": "Ihre Mentor-Gespräche",
                        "tabs": {
                            "scheduled": "Geplant",
                            "completed": "Abgeschlossen",
                            "all": "Alle"
                        },
                        "conversations": [
                            {
                                "title": "Gespräch",
                                "status": "Geplant",
                                "date": "12. Aug. 2025, 06:18",
                                "description": "Einführungsgespräch"
                            },
                            {
                                "title": "Gespräch",
                                "status": "Geplant",
                                "date": "15. Okt. 2026, 06:19",
                                "description": "Anpassungsgespräch"
                            }
                        ]
                    },
                    "conversation_modal": {
                        "introduction": {
                            "title": "Einführungsgespräch",
                            "total_indicator": "1 Gesamt",
                            "date": "10.9.2025 13.04",
                            "participants": {
                                "mentor": "Mette Frederiksen",
                                "mentee": "Poul Nyrup",
                                "mentor_label": "Mentor:",
                                "mentee_label": "Auszubildender:"
                            },
                            "status": "Geplant",
                            "sections": {
                                "tidligere": {
                                    "title": "Frühere Erfahrungen",
                                    "content": "Vorherige Anstellungen des Auszubildenden, andere Erfahrungen, Lernstil usw."
                                },
                                "opfolgning": {
                                    "title": "Nachbereitung der letzten Anstellung",
                                    "content": "Wichtigste Lernergebnisse und besondere Schwerpunktbereiche in vorherigen Positionen."
                                },
                                "kompetencer": {
                                    "title": "Wie können die einzelnen Kompetenzen in der Position erreicht werden?",
                                    "content": "Erwartungsabstimmung bezüglich Arbeitsbereiche usw. Kompetenzen im Logbuch durchgehen und Lernmöglichkeiten für einzelne Kompetenzen diskutieren."
                                },
                                "supervision": {
                                    "title": "Supervision",
                                    "content": "Vereinbarungen über feste und ad-hoc-Supervision."
                                },
                                "kompetencevurdering": {
                                    "title": "Plan für Kompetenzbewertung",
                                    "content": "Wie? Wann?"
                                },
                                "kompetencegodkendelse": {
                                    "title": "Plan für Kompetenzgenehmigung",
                                    "content": "Im Zeitraum  /  -  /        Geplante Genehmigung von Kompetenzen Nr.:"
                                },
                                "kursusdeltagelse": {
                                    "title": "Geplante Kursteilnahme",
                                    "content": "Pflichtveranstaltungen. Gewünschte Erwartungen für andere Kurse, Kongresse usw."
                                }
                            }
                        },
                        "adjustment": {
                            "title": "Anpassungsgespräch",
                            "total_indicator": "1 Gesamt",
                            "date": "11.11.2025 13.39",
                            "participants": {
                                "mentor": "Mette Frederiksen",
                                "mentee": "Poul Nyrup",
                                "mentor_label": "Mentor:",
                                "mentee_label": "Auszubildender:"
                            },
                            "status": "Geplant",
                            "sections": {
                                "justeringssamtale": {
                                    "title": "Anpassungsgespräch",
                                    "content": "Mindestens 1 Anpassungsgespräch wird in jeder Anstellung geführt. Bei 12-monatigen Anstellungen oft mehr, z.B. alle 3 Monate."
                                },
                                "punkter": {
                                    "title": "Punkte:",
                                    "content": "Wie läuft Ihr Ausbildungsprogramm allgemein?<br><br>Wurde das geplante Lernen erreicht? Logbuch überprüfen: Wurde die erwartete Anzahl von Kompetenzen genehmigt? (Bei Problemen: Ausbildungskoordinator/PKL einbeziehen)"
                                },
                                "aftaler": {
                                    "title": "Vereinbarungen für die kommende Periode/Anpassungen des Ausbildungsplans",
                                    "content": "Vereinbarungen über die kommende Periode basierend auf dem Ausbildungsplan notieren"
                                },
                                "uddannelseslaegens_opgaver": {
                                    "title": "Aufgaben des Auszubildenden",
                                    "content": "Aufgaben, die der Auszubildende ausführen soll"
                                },
                                "tutorlaegen_opgaver": {
                                    "title": "Aufgaben des Supervisors",
                                    "content": "Aufgaben, die der Supervisor ausführen soll"
                                },
                                "naeste_samtale": {
                                    "title": "Datum für das nächste Gespräch",
                                    "content": ""
                                }
                            }
                        }
                    }
                },
                "cta": {
                    "title": "Legen Sie mit MediSkill los",
                    "subtitle": "Erleben Sie, wie MediSkill Ihre ärztliche Ausbildung transformieren kann",
                    "demo_title": "Buchen Sie noch heute eine Demo",
                    "benefit1": "• <strong>Kostenlose Demonstration</strong> aller Plattformfunktionen",
                    "benefit2": "• <strong>Anpassung an Ihre Bedürfnisse</strong> und Fachbereiche",
                    "benefit3": "• <strong>Implementierung und Support</strong> während des gesamten Prozesses",
                    "contact_title": "Kontaktieren Sie uns",
                    "founder_info": "Martin Lawaetz - Gründer & CEO<br>Facharzt für Gefäßchirurgie",
                    "quote": "\"Aus eigener Erfahrung weiß ich, wie wichtig gute Supervision und Feedback sind.<br>MediSkill macht es möglich, diese Prozesse zu systematisieren und zu optimieren.\""
                },
                "procedure_list": {
                    "title": "Drucken Sie Ihre Eingriffsliste",
                    "description": "Schluss mit Notizbüchern und Excel-Tabellen in verschiedenen Formaten. Standardisierte Dokumentation gewährleistet einheitliche Lebenslauf-Präsentation in einem vordefinierten Format, das nach Lernzielen und lokalen Prozessen gestaltet ist. Rund um die Uhr verfügbar und immer aktuell."
                },
                "wellness_monitoring": {
                    "title": "Messung von Wohlbefinden und Arbeitsumgebung",
                    "description": "Das MediLife-Modul ermöglicht die Überwachung von Wohlbefinden und Arbeitsumgebung anhand ausgewählter Parameter. Gutes Wohlbefinden und optimale Kompetenzentwicklung sind untrennbar miteinander verbunden, und kontinuierliche Überwachung ermöglicht rechtzeitiges Eingreifen."
                }
            }
        };
    }

    /**
     * Load translation data for a specific language
     * @param {string} lang - Language code (da, en, sv, de)
     * @returns {Promise<Object>} Translation data
     */
    async loadLanguage(lang) {
        // Check cache first
        if (this.cache.has(lang)) {
            console.log(`Loading ${lang} translations from cache`);
            return this.cache.get(lang);
        }

        try {
            console.log(`Fetching ${lang} translations from file`);
            const cacheBuster = Date.now();
            const response = await fetch(`translations/${lang}.json?v=${cacheBuster}`);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch translations for ${lang}`);
            }
            
            const translations = await response.json();
            
            // Cache the loaded translations
            this.cache.set(lang, translations);
            
            return translations;
        } catch (error) {
            console.warn(`Failed to load ${lang} translations from file:`, error);
            console.log(`Using embedded fallback translations for ${lang}`);
            
            // Use embedded fallback translations
            const fallbackTranslations = this.fallbackTranslations[lang];
            if (fallbackTranslations) {
                // Cache the fallback translations
                this.cache.set(lang, fallbackTranslations);
                return fallbackTranslations;
            }
            
            // Fallback to default language if not already trying it
            if (lang !== this.defaultLang) {
                console.log(`Falling back to ${this.defaultLang} translations`);
                return await this.loadLanguage(this.defaultLang);
            }
            
            // Return basic fallback as final resort
            console.error('Failed to load any translations, using minimal fallback');
            const minimalFallback = this.fallbackTranslations[this.defaultLang] || {};
            this.cache.set(lang, minimalFallback);
            return minimalFallback;
        }
    }

    /**
     * Preload multiple languages
     * @param {string[]} languages - Array of language codes to preload
     */
    async preloadLanguages(languages) {
        const promises = languages.map(lang => this.loadLanguage(lang));
        await Promise.allSettled(promises);
        console.log('Preloaded translations for:', languages);
    }

    /**
     * Clear translation cache
     */
    clearCache() {
        this.cache.clear();
        console.log('Translation cache cleared');
    }

    /**
     * Get cached language codes
     * @returns {string[]} Array of cached language codes
     */
    getCachedLanguages() {
        return Array.from(this.cache.keys());
    }
}

// Export for use in other modules
window.TranslationLoader = TranslationLoader;
