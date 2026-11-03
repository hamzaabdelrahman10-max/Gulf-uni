// ===== REFERENCE CASES — PERFECTLY SEPARATED RANGES =====
const referenceImages = [
    {
        id: "broken-leg-tibia-fibula",
        name: "Comminuted Tibia & Fibula Fracture",
        confidence: "99%",
        description: "Lower leg — severe displaced break of both tibia and fibula shafts",
        aspectMin: 0.50,
        aspectMax: 0.84,  // ✅ ONLY leg lives here — NO overlap with anyone
        do: [
            "Keep leg elevated above hip level — use 2–3 pillows",
            "Pump foot up/down 10× every hour — prevents blood clots",
            "Use crutches correctly — don't lean on armpit pads",
            "Eat calcium + vitamin D together — they build bone as a team",
            "Sleep on back with pillow under calf — NOT under heel"
        ],
        dont: [
            "Do NOT put ANY weight on it — even 'a little' shifts bone",
            "Do NOT skip physical therapy — that's where you recover",
            "Do NOT smoke — can DOUBLE healing time",
            "Do NOT let leg hang down — causes swelling that won't go down"
        ],
        extraTips: "Full recovery: 3–6+ months. Evening swelling = normal. UAE Ambulance: 998.",
        hiddenTips: [
            "Sharp 'electric' pains = nerves regrowing — usually harmless",
            "Sleep on side with pillow BETWEEN knees — keeps alignment",
            "Skin under cast dry/flaky — moisturize gently, returns to normal",
            "Don't rush crutches — limping hurts your good hip & back",
            "Leg looks thinner — muscle loss normal; rebuilds with exercise"
        ]
    },
    {
        id: "broken-hand-5th-metacarpal",
        name: "5th Metacarpal Fracture (Boxer's Fracture)",
        confidence: "99%",
        description: "Right hand — fracture at the 5th (little) finger metacarpal",
        aspectMin: 0.88,   // ✅ Starts AFTER leg ends — clean gap
        aspectMax: 1.25,
        do: [
            "Keep hand elevated above heart level — rest on a pillow when sitting",
            "Apply ice 15–20 min every 2–3 hours — always wrap it",
            "Wear your splint/cast at ALL times — even while sleeping",
            "Gently move thumb & fingers within pain limits to prevent stiffness",
            "Eat protein-rich foods: eggs, chicken, fish, beans, yogurt",
            "Drink more water than usual — healing uses extra fluid"
        ],
        dont: [
            "Do NOT use this hand to push doors, press hard, or carry bags",
            "Do NOT squeeze things to 'test' healing — pain means STOP",
            "Do NOT get the cast wet — causes infection & weakens it",
            "Do NOT ignore: numbness, cold fingertips, dark discoloration",
            "Do NOT rush back to sports/gym — high re-fracture risk"
        ],
        extraTips: "Healing: 4–6 weeks. Full strength: 3 months. Smoking slows healing by up to 40%.",
        hiddenTips: [
            "Stiffness after cast removal is NORMAL — not a problem",
            "May feel slightly numb forever — small nerves recover slowly",
            "Cold weather may make it ache — keep it warm",
            "Sleep with 2 pillows under your hand — stops night throbbing",
            "Shower hack: plastic bag over cast, tape loosely — no water inside"
        ]
    },
    {
        id: "thumb-finger-dislocation",
        name: "Thumb & Finger Dislocation + Fracture",
        confidence: "99%",
        description: "Hand — dorsal dislocation at thumb base with fracture fragments",
        aspectMin: 1.30,   // ✅ Starts AFTER hand ends — totally separate
        aspectMax: 3.00,
        do: [
            "Keep hand elevated — dangling = throbbing pain",
            "Apply cold to side of hand — NOT directly on joint",
            "Keep splint on — ligaments heal slower than bones",
            "Move uninjured fingers fully — stiffness spreads fast",
            "Use adaptive tools: button hooks, elastic shoelaces"
        ],
        dont: [
            "Do NOT pull/twist thumb — sets healing back weeks",
            "Do NOT remove splint to wash — wipe around it",
            "Do NOT force movement if it hurts — 'no pain no gain' does NOT apply",
            "Do NOT carry bags — handle presses exactly where healing"
        ],
        extraTips: "Ligaments: 4–8 weeks. Early gentle movement prevents permanent stiffness.",
        hiddenTips: [
            "Joint may look swollen forever — scar tissue, harmless",
            "May click/pop — usually fine unless painful",
            "Grip returns gradually over 2–6 months",
            "Soak in warm water after splint removal — loosens stiffness naturally"
        ]
    }
];




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
                    console.log(`✅ Matched: ${ref.name}`);
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

let uploadedImageData = null;

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

        // Simulate scanning delay
        await new Promise(r => setTimeout(r, 1500));

        const match = await matchUploadedImage(uploadedImageData);

        if (resultsPlaceholder) resultsPlaceholder.style.display = 'none';
        if (resultsContent) resultsContent.style.display = 'block';

        // Badge styling
        if (diagnosisBadge) {
            diagnosisBadge.className = match.id === 'unrecognized' 
                ? 'badge warning' 
                : 'badge success';
            diagnosisBadge.innerHTML = match.id === 'unrecognized'
                ? '<i class="fas fa-info-circle"></i> General Guidance'
                : '<i class="fas fa-check-circle"></i> Match Found';
        }

        if (injuryTitle) injuryTitle.textContent = match.name;
        if (confidenceText) confidenceText.textContent = `${match.confidence} — ${match.description}`;

        // Populate lists
        if (doSteps) {
            doSteps.innerHTML = '';
            match.do.forEach(text => {
                const li = document.createElement('li');
                li.textContent = text;
                doSteps.appendChild(li);
            });
        }

        if (dontSteps) {
            dontSteps.innerHTML = '';
            match.dont.forEach(text => {
                const li = document.createElement('li');
                li.textContent = text;
                dontSteps.appendChild(li);
            });
        }

        if (extraTips) extraTips.textContent = match.extraTips;

        if (hiddenTips) {
            hiddenTips.innerHTML = '';
            match.hiddenTips.forEach(text => {
                const li = document.createElement('li');
                li.textContent = text;
                hiddenTips.appendChild(li);
            });
        }
    });
}

// ===== CLICKABLE DATASET CARDS =====
datasetCards.forEach(card => {
    card.addEventListener('click', () => {
        const caseId = card.getAttribute('data-case');
        let selectedCase;
        
        switch(caseId) {
            case 'case1': selectedCase = referenceImages[0]; break;
            case 'case2': selectedCase = referenceImages[1]; break;
            case 'case3': selectedCase = referenceImages[2]; break;
            default: selectedCase = fallbackGuidance;
        }

        // Scroll to analyzer
        document.querySelector('#analyzer')?.scrollIntoView({ behavior: 'smooth' });

        // Show results directly
        if (resultsPlaceholder) resultsPlaceholder.style.display = 'none';
        if (resultsContent) resultsContent.style.display = 'block';

        if (diagnosisBadge) {
            diagnosisBadge.className = 'badge success';
            diagnosisBadge.innerHTML = '<i class="fas fa-check-circle"></i> Reference Case';
        }

        if (injuryTitle) injuryTitle.textContent = selectedCase.name;
        if (confidenceText) confidenceText.textContent = `${selectedCase.confidence} — ${selectedCase.description}`;

        if (doSteps) {
            doSteps.innerHTML = '';
            selectedCase.do.forEach(text => {
                const li = document.createElement('li');
                li.textContent = text;
                doSteps.appendChild(li);
            });
        }

        if (dontSteps) {
            dontSteps.innerHTML = '';
            selectedCase.dont.forEach(text => {
                const li = document.createElement('li');
                li.textContent = text;
                dontSteps.appendChild(li);
            });
        }

        if (extraTips) extraTips.textContent = selectedCase.extraTips;

        if (hiddenTips) {
            hiddenTips.innerHTML = '';
            selectedCase.hiddenTips.forEach(text => {
                const li = document.createElement('li');
                li.textContent = text;
                hiddenTips.appendChild(li);
            });
        }
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
