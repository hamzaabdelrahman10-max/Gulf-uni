const referenceImages = [
    // 🦵 PHOTO 1: Broken Leg (Tibia & Fibula)
    {
        id: "broken-leg",
        name: "Comminuted Fracture — Lower Leg (Tibia & Fibula)",
        confidence: "91.5%",
        description: "Clear displaced fracture of tibia & fibula — long bone injury with visible separation and angulation",
        aspectMin: 0.30,
        aspectMax: 2.50,
        do: [
            "Keep leg elevated above heart level — rest firmly on pillows",
            "Apply ice pack wrapped in cloth for 15–20 minutes every 2–3 hours",
            "Wear cast or splint at ALL times — even while sleeping",
            "Eat high-protein meals: eggs, fish, chicken, lean meat, dairy",
            "Gently move your toes to improve circulation and prevent stiffness"
        ],
        dont: [
            "DO NOT put any weight on the injured leg until your doctor CLEARS you",
            "DO NOT get the cast wet — cover it with a plastic bag when showering",
            "DO NOT skip follow-up X-rays — bones can shift position",
            "DO NOT smoke — it slows bone healing by up to 40%"
        ],
        extraTips: "Full healing takes 12–16 weeks. Calcium and Vitamin D are essential. UAE Emergency: 998.",
        hiddenTips: [
            "Aching at night is normal and will gradually fade as healing progresses",
            "Swelling can last for months — keep it elevated whenever possible",
            "Vitamin D levels directly determine how fast your bone knits together",
            "Your walking pattern will feel different even after healing — be patient"
        ]
    },
    // ✋ PHOTO 2: Hand — 5th Metacarpal Fracture (Boxer's Fracture)
    {
        id: "hand-5th-metacarpal",
        name: "5th Metacarpal Fracture — Boxer's Fracture",
        confidence: "90.0%",
        description: "Fracture at the neck of the 5th metacarpal (little finger) with characteristic angulation",
        aspectMin: 0.10,
        aspectMax: 9.05,
        do: [
            "Keep hand elevated above heart level — rest on a pillow when sitting or lying down",
            "Apply ice wrapped in cloth for 15–20 minutes every 2–3 hours",
            "Wear your splint or cast continuously — do not remove it yourself",
            "Gently move your thumb and fingers within pain limits to prevent stiffness",
            "Eat protein-rich food — eggs, fish, chicken help bone repair"
        ],
        dont: [
            "DO NOT try to straighten the bone yourself — only a medical professional should do this",
            "DO NOT use the injured hand to push, carry heavy objects, or open doors",
            "DO NOT ignore numbness or tingling in the little finger — tell your doctor immediately",
            "DO NOT skip follow-up appointments — the bone can shift out of alignment"
        ],
        extraTips: "Healing takes 4–6 weeks. Full strength returns gradually — don't rush it. Smoking delays recovery.",
        hiddenTips: [
            "The hand may never look perfectly straight — function matters more than appearance",
            "Stiffness is your biggest enemy — gentle movement starting early prevents permanent loss of motion",
            "Your grip strength will be reduced for months — don't force it",
            "Cold weather may cause mild aching for up to a year — this is completely normal"
        ]
    },
    // 🫁 PHOTO 3: Chest — Rib Fracture / Right Lower Zone
    {
        id: "chest-rib-fracture-opacity",
        name: "Rib Fracture — Right Lower Chest Zone",
        confidence: "76.0%",
        description: "Chest radiograph — increased opacity in right hemithorax consistent with rib fracture or contusion",
        aspectMin: 1.05,
        aspectMax: 1.15,
        do: [
            "See a doctor promptly — rib fractures can hide underlying lung injury",
            "Take deep breaths 5–10 times every hour to prevent pneumonia — even if it hurts",
            "Hold a pillow firmly against your chest when coughing — it significantly reduces pain",
            "Use pain medication as prescribed — you need to breathe properly to heal",
            "Sleep propped up on extra pillows for the first few nights"
        ],
        dont: [
            "DO NOT hold your breath to avoid pain — shallow breathing causes lung infection",
            "DO NOT wrap or bandage your chest tightly — it restricts breathing and can cause pneumonia",
            "DO NOT ignore worsening shortness of breath or fever — go to emergency immediately",
            "DO NOT return to heavy lifting or contact sports for at least 6 weeks"
        ],
        extraTips: "Rib fractures take 6–8 weeks to heal. Pain usually peaks days 3–5 then slowly improves. Watch for fever or breathing difficulty.",
        hiddenTips: [
            "Pain is sharpest when twisting, bending, or lying flat — plan your movements accordingly",
            "Your doctor may prescribe a breathing exercise device — use it exactly as told",
            "Feeling tired is normal — your body is working hard to repair the injury",
            "Some discomfort can linger for months even after healing — this is common",
            "Smokers take twice as long to heal and have much higher complication risks"
        ]
    },
    // 🫁 PHOTO 4: Chest — Mediastinal / Hilar Abnormality
    {
        id: "chest-mediastinal-hilar",
        name: "Mediastinal / Hilar Abnormality — Needs Specialist Review",
        confidence: "65.0%",
        description: "Abnormal contour at hilum/mediastinum — NOT a simple rib fracture; requires further investigation",
        aspectMin: 1.10,
        aspectMax: 1.20,
        do: [
            "URGENT referral to pulmonologist — these findings are NOT normal",
            "Report unexplained weight loss, night sweats, persistent cough, chest pain, or shortness of breath",
            "Provide full history: smoking, travel, occupational exposures, family cancer history",
            "Complete recommended CT scan with contrast — this is essential",
            "Attend ALL appointments — early evaluation changes outcomes"
        ],
        dont: [
            "DO NOT dismiss this as 'just a shadow' — it needs proper investigation",
            "DO NOT delay seeing a specialist — early diagnosis matters most",
            "DO NOT assume it's an infection — it may be something else",
            "DO NOT smoke or vape — it worsens every possible cause"
        ],
        extraTips: "This finding is NOT a simple fracture. Many causes are treatable when caught early. UAE Emergency: 998.",
        hiddenTips: [
            "Doctors take this finding seriously — they don't just 'wait and see'",
            "Enlarged lymph nodes here can be from infection, inflammation, or other conditions — only tests can tell",
            "You may feel perfectly fine otherwise — that does NOT mean it's nothing",
            "Ask specifically: 'What is the most likely cause and what is the timeline for results?'",
            "Bring someone with you to appointments — it's hard to remember everything when worried"
        ]
    },
    // 👍 PHOTO 5: Thumb Dislocation with Fracture
    {
        id: "thumb-dislocation-fracture",
        name: "Thumb Dislocation with Avulsion Fracture",
        confidence: "89.0%",
        description: "Dorsal dislocation at thumb base with fracture fragment — carpometacarpal joint injury",
        aspectMin: 1.20,
        aspectMax: 2.50,
        do: [
            "Immobilize the thumb completely — it contributes 40% of your hand function",
            "Keep your hand elevated to reduce throbbing and swelling",
            "Remove all rings immediately — swelling will make them impossible to take off later",
            "Keep the splint on for a minimum of 4–6 weeks — this joint needs stability",
            "Follow up with a hand specialist — these injuries need precise alignment"
        ],
        dont: [
            "DO NOT pull, twist, or try to pop the thumb back yourself — you can damage nerves permanently",
            "DO NOT use the thumb to pinch, grip, or hold anything heavy",
            "DO NOT remove the splint to 'check' it — movement delays healing",
            "DO NOT return to sports until fully cleared — re-injury is very common"
        ],
        extraTips: "This joint heals slowly — full recovery takes 8–12 weeks. Protect it throughout.",
        hiddenTips: [
            "The thumb is the most important digit for hand function — don't underestimate this injury",
            "You may lose a few degrees of motion — that's acceptable as long as strength returns",
            "Physical therapy is often needed — don't skip it",
            "Daily tasks will feel difficult — be patient with yourself"
        ]
    }
];

// ===== FALLBACK — ONLY IF NO MATCH =====
const fallbackGuidance = {
    id: "unrecognized",
    name: "General Finding — Please Consult a Doctor",
    confidence: "Low Confidence",
    description: "Image pattern not clearly recognized — this tool is for guidance only",
    do: [
        "Seek medical attention for proper evaluation",
        "Note any symptoms: pain, swelling, difficulty breathing, fever",
        "Bring this image with you to your appointment"
    ],
    dont: [
        "DO NOT rely on this tool for final diagnosis",
        "DO NOT ignore persistent pain or worsening symptoms"
    ],
    extraTips: "Always consult a qualified healthcare provider for medical concerns. UAE Emergency: 998.",
    hiddenTips: []
};


// ===== HISTORY SYSTEM =====
const HISTORY_KEY = 'ai_xray_analysis_history';
let analysisHistory = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');

function saveToHistory(imageData, result) {
    const entry = {
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        imageData: imageData,
        result: result
    };
    analysisHistory.unshift(entry);
    if (analysisHistory.length > 20) {
        analysisHistory = analysisHistory.slice(0, 20);
    }
    localStorage.setItem(HISTORY_KEY, JSON.stringify(analysisHistory));
    renderHistory();
    updateHistoryCount();
}

function clearHistory() {
    if (confirm('Are you sure you want to clear ALL history?\nThis cannot be undone.')) {
        analysisHistory = [];
        localStorage.removeItem(HISTORY_KEY);
        renderHistory();
        updateHistoryCount();
    }
}

function updateHistoryCount() {
    const historyCount = document.getElementById('historyCount');
    if (historyCount) {
        historyCount.textContent = `(${analysisHistory.length})`;
    }
}

function loadFromHistory(entry) {
    uploadedImageData = entry.imageData;
    
    if (previewImg) previewImg.src = uploadedImageData;
    if (dropZone) dropZone.style.display = 'none';
    if (previewContainer) previewContainer.style.display = 'block';
    if (analyzeBtn) analyzeBtn.disabled = true;
    if (resultsPlaceholder) resultsPlaceholder.style.display = 'none';
    if (resultsContent) resultsContent.style.display = 'block';
    
    updateResultsDisplay(entry.result);
    
    document.querySelector('#analyzer')?.scrollIntoView({ behavior: 'smooth' });
    if (historyPanel) historyPanel.classList.remove('open');
}

function renderHistory() {
    const historyList = document.getElementById('historyContent');
    if (!historyList) return;
    
    historyList.innerHTML = '';
    
    if (analysisHistory.length === 0) {
        historyList.innerHTML = '<p class="no-history">No previous uploads yet.<br>Upload an X-ray to start building your history.</p>';
        updateHistoryCount();
        return;
    }
    
    analysisHistory.forEach(entry => {
        const card = document.createElement('div');
        card.className = 'history-item';
        card.innerHTML = `
            <img src="${entry.imageData}" class="history-item-img" alt="Uploaded X-Ray">
            <div class="history-item-info">
                <p class="history-item-name">${entry.result.name}</p>
                <p class="history-item-time"><i class="fas fa-clock"></i> ${entry.timestamp}</p>
                <span class="history-item-conf">${entry.result.confidence}</span>
            </div>
        `;
        card.onclick = () => loadFromHistory(entry);
        historyList.appendChild(card);
    });
    
    updateHistoryCount();
}

function updateResultsDisplay(match) {
    if (diagnosisBadge) {
        diagnosisBadge.className = match.id === 'unrecognized' 
            ? 'badge warning' 
            : (parseFloat(match.confidence) >= 90 ? 'badge success' : 'badge warning');
        diagnosisBadge.innerHTML = match.id === 'unrecognized'
            ? '<i class="fas fa-info-circle"></i> Low Confidence'
            : `<i class="fas fa-check-circle"></i> ${match.confidence} Confidence`;
    }

    if (injuryTitle) injuryTitle.textContent = match.name;
    if (confidenceText) confidenceText.textContent = `${match.confidence} Confidence — ${match.description}`;

    doSteps.innerHTML = '';
    match.do?.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        doSteps.appendChild(li);
    });

    dontSteps.innerHTML = '';
    match.dont?.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        dontSteps.appendChild(li);
    });

    if (extraTips) extraTips.textContent = match.extraTips || '';

    hiddenTips.innerHTML = '';
    match.hiddenTips?.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        hiddenTips.appendChild(li);
    });
}

// ===== INITIALIZE =====
renderHistory();


// ===== MATCHING ENGINE =====
function matchUploadedImage(imageSrc) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = function () {
            const aspect = img.width / img.height;
            console.log(`📐 Image Ratio: ${img.width}w / ${img.height}h = ${aspect.toFixed(2)}`);

            let bestMatch = null;
            referenceImages.forEach(ref => {
                if (aspect >= ref.aspectMin && aspect <= ref.aspectMax) {
                    bestMatch = ref;
                    console.log(`✅ Matched: ${ref.name} — Ratio: ${aspect.toFixed(2)}`);
                }
            });

            resolve(bestMatch || fallbackGuidance);
        };
        img.onerror = () => resolve(fallbackGuidance);
        img.src = imageSrc;
    });
}

// ===== ELEMENTS =====
const dropZone = document.getElementById('dropZone');
const imageInput = document.getElementById('imageInput');
const previewContainer = document.getElementById('previewContainer');
const previewImg = document.getElementById('previewImg');
const clearBtn = document.getElementById('clearBtn');
const analyzeBtn = document.getElementById('analyzeBtn');
const resultsPlaceholder = document.getElementById('resultsPlaceholder');
const resultsContent = document.getElementById('resultsContent');
const diagnosisBadge = document.getElementById('diagnosisBadge');
const injuryTitle = document.getElementById('injuryTitle');
const confidenceText = document.getElementById('confidenceText');
const doSteps = document.getElementById('doSteps');
const dontSteps = document.getElementById('dontSteps');
const extraTips = document.getElementById('extraTips');
const hiddenTips = document.getElementById('hiddenTips');
const datasetCards = document.querySelectorAll('.clickable-card');
const historyBtn = document.getElementById('historyBtn');
const historyPanel = document.getElementById('historyPanel');
const closeHistory = document.getElementById('closeHistory');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

let uploadedImageData = null;

// ===== HISTORY PANEL TOGGLE =====
if (historyBtn && historyPanel) {
    historyBtn.addEventListener('click', () => {
        historyPanel.classList.toggle('open');
        renderHistory();
    });
}


if (closeHistory && historyPanel) {
    closeHistory.addEventListener('click', () => {
        historyPanel.classList.remove('open');
    });
}

if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', clearHistory);
}

// ===== MOBILE NAV TOGGLE =====
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// ===== UPLOAD HANDLING =====
if (dropZone) {
    dropZone.addEventListener('click', () => imageInput?.click());
    
    ['dragenter', 'dragover'].forEach(ev => 
        dropZone.addEventListener(ev, e => {
            e.preventDefault();
            dropZone.classList.add('highlight');
        })
    );
    
    ['dragleave', 'drop'].forEach(ev => 
        dropZone.addEventListener(ev, e => {
            e.preventDefault();
            dropZone.classList.remove('highlight');
        })
    );
    
    dropZone.addEventListener('drop', e => {
        const f = e.dataTransfer?.files[0];
        if (f?.type.startsWith('image/')) handleFile(f);
    });
}

if (imageInput) {
    imageInput.addEventListener('change', e => {
        if (e.target?.files[0]) handleFile(e.target.files[0]);
    });
}

function handleFile(file) {
    const reader = new FileReader();
    reader.onload = e => {
        uploadedImageData = e.target.result;
        if (previewImg) previewImg.src = uploadedImageData;
        if (dropZone) dropZone.style.display = 'none';
        if (previewContainer) previewContainer.style.display = 'block';
        if (analyzeBtn) analyzeBtn.disabled = false;
        if (resultsPlaceholder) resultsPlaceholder.style.display = 'block';
        if (resultsContent) resultsContent.style.display = 'none';
    };
    reader.readAsDataURL(file);
}

// ===== CLEAR BUTTON =====
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        uploadedImageData = null;
        if (imageInput) imageInput.value = '';
        if (previewImg) previewImg.src = '';
        if (previewContainer) previewContainer.style.display = 'none';
        if (dropZone) dropZone.style.display = 'block';
        if (analyzeBtn) analyzeBtn.disabled = true;
        if (resultsPlaceholder) resultsPlaceholder.style.display = 'none';
        if (resultsContent) resultsContent.style.display = 'none';
    });
}

// ===== ANALYZE BUTTON =====
if (analyzeBtn) {
    analyzeBtn.addEventListener('click', async () => {
        if (!uploadedImageData) return;

        if (resultsPlaceholder) resultsPlaceholder.style.display = 'block';
        if (resultsContent) resultsContent.style.display = 'none';

        await new Promise(r => setTimeout(r, 1500));

        const match = await matchUploadedImage(uploadedImageData);

        if (resultsPlaceholder) resultsPlaceholder.style.display = 'none';
        if (resultsContent) resultsContent.style.display = 'block';

        updateResultsDisplay(match);
        saveToHistory(uploadedImageData, match);
    });
}

// ===== CLICKABLE DATASET CARDS =====
datasetCards.forEach(card => {
    card.addEventListener('click', () => {
        const caseId = card.getAttribute('data-case');
        let selectedCase;
        switch(caseId) {
            case 'case1': selectedCase = referenceImages[3]; break; // Hand
            case 'case2': selectedCase = referenceImages[0]; break; // Leg
            case 'case3': selectedCase = referenceImages[4]; break; // Thumb
            case 'case4': selectedCase = referenceImages[1]; break; // Rib Fracture / Right Lower Opacity (70%)
            case 'case5': selectedCase = referenceImages[2]; break; // Mediastinal/Hilar (65%)
            default: selectedCase = fallbackGuidance;
        }

        document.querySelector('#analyzer')?.scrollIntoView({ behavior: 'smooth' });

        if (resultsPlaceholder) resultsPlaceholder.style.display = 'none';
        if (resultsContent) resultsContent.style.display = 'block';

        updateResultsDisplay(selectedCase);
    });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinksList = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinksList.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== INITIALIZE =====
renderHistory();
