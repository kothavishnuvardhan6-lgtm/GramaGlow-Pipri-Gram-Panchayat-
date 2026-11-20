/* ==========================================================================
   GramaGlow — Pipri Gram Panchayat Portal
   Modular Bilingual Data & View Controller
   ========================================================================== */

const UI_STRINGS = {
  en: {
    brandTitle: "GramaGlow",
    brandSub: "Pipri Gram Panchayat",
    navOverview: "Overview",
    navNotices: "Notices",
    navBudget: "Budget",
    navGrievances: "Grievances",
    navAssets: "Village Map",
    deskStatus: "Panchayat Office Open • 9:00 AM – 5:00 PM",
    districtTag: "Block Sadar • District Wardha",
    heroTitle: "Gram Sabha Meeting — Next Tuesday at 10:00 AM",
    heroDesc:
      "Venue: Pipri Panchayat Bhavan Courtyard. Key agenda: Solar streetlight expansion in Wards 3 & 7, drinking water pipeline audit, and Rabi crop subsidy verification.",
    heroPrimaryCta: "Track & Report Grievances",
    heroSecondaryCta: "Listen to Notices",
    kpiPop: "Total Population",
    kpiWards: "Electoral Wards",
    kpiFunds: "Sanctioned Funds",
    kpiResolved: "Issues Resolved",
    scReport: "Grievance Board",
    scReportSub: "Status & SLA tracker",
    scNotices: "Village Notices",
    scNoticesSub: "Audio & circulars",
    scBudget: "Public Budget",
    scBudgetSub: "Work vs spend audit",
    scCall: "Call Sarpanch",
    sarpanchName: "Smt. Savitri Devi",
    sarpanchRole: "Elected Sarpanch",
    sarpanchBio: "Term: 2024 – 2029 • Office Hours: Mon–Sat (10:00 AM – 2:00 PM) at Panchayat Bhavan",
    secretaryLabel: "Gram Sevak:",
    secretaryName: "Shri Rajeshwar Kulkarni",
    toggleWardsLabel: "View All 8 Ward Members & Localities",
    noticesTitle: "Official Village Notices",
    noticesSub: "Verified circulars, Gram Sabha schedules, and spoken audio transcripts",
    audioBadge: "Spoken Audio Broadcast",
    listenBtn: "Listen & Read Script",
    issuedBy: "Issued by:",
    budgetTitle: "Development Work & Budget Tracker",
    budgetSub: "Comparing physical work completion against funds utilized across Pipri",
    legendWork: "Work Completed",
    legendSpend: "Funds Utilized",
    workLabel: "Physical Progress",
    spendLabel: "Funds Utilized",
    sanctionedLabel: "Sanctioned:",
    spentLabel: "Spent:",
    auditAlert: "Spend Exceeds Work",
    grievancesTitle: "Public Grievance & Ward Status Board",
    grievancesSub: "Live tracking sorted by 48-hour SLA priority across all 8 wards",
    deskHelpTitle: "Need to lodge a new village complaint?",
    deskHelpDesc:
      "Visit the Panchayat Seva Kendra counter (Ward 1) with a photo of the issue or call the toll-free Gram Helpline 1800-233-4040 to receive a tracking token.",
    emptyGrievances: "No citizen complaints match the selected filter.",
    photoBtn: "Photo",
    overdueText: "Overdue",
    hoursLeftSuffix: "h left",
    resolvedOnTime: "Closed",
    assetsTitle: "Village Assets Geo-Directory",
    assetsSub: "Public infrastructure, water points, schools, and health facilities",
    footerLeft: "GramaGlow • Digital Gram Panchayat Governance Portal — Pipri",
    footerRight: "Public Transparency & Citizen Charter Board",
    categories: {
      All: "All",
      "Gram Sabha": "Gram Sabha",
      Agriculture: "Agriculture",
      Health: "Health",
      Education: "Education",
      Streetlights: "Streetlights",
      "Drinking Water": "Drinking Water",
      Sanitation: "Sanitation",
      Roads: "Roads",
      HealthCenter: "Health Center",
      School: "School",
      Anganwadi: "Anganwadi",
      WaterPoint: "Water Point"
    },
    statuses: {
      All: "All",
      Submitted: "Submitted",
      Assigned: "Assigned",
      "In Progress": "In Progress",
      Resolved: "Resolved"
    }
  },
  hi: {
    brandTitle: "ग्रामग्लो (GramaGlow)",
    brandSub: "पिपरी ग्राम पंचायत",
    navOverview: "मुख्य पृष्ठ",
    navNotices: "सूचनाएं",
    navBudget: "बजट",
    navGrievances: "शिकायतें",
    navAssets: "गाँव का नक्शा",
    deskStatus: "पंचायत कार्यालय खुला • सुबह 9:00 – शाम 5:00",
    districtTag: "विकासखंड सदर • जिला वर्धा",
    heroTitle: "ग्राम सभा बैठक — अगले मंगलवार सुबह 10:00 बजे",
    heroDesc:
      "स्थान: पिपरी पंचायत भवन प्रांगण। मुख्य विषय: वार्ड 3 और 7 में सोलर स्ट्रीट लाइट विस्तार, पेयजल पाइपलाइन जांच और रबी फसल सब्सिडी सत्यापन।",
    heroPrimaryCta: "शिकायत स्थिति देखें",
    heroSecondaryCta: "सूचनाएं सुनें",
    kpiPop: "कुल जनसंख्या",
    kpiWards: "कुल वार्ड",
    kpiFunds: "स्वीकृत राशि",
    kpiResolved: "शिकायत निवारण",
    scReport: "शिकायत बोर्ड",
    scReportSub: "स्थिति और समय-सीमा",
    scNotices: "ग्राम सूचनाएं",
    scNoticesSub: "ऑडियो और परिपत्र",
    scBudget: "विकास बजट",
    scBudgetSub: "कार्य और व्यय जांच",
    scCall: "सरपंच को कॉल करें",
    sarpanchName: "श्रीमती सावित्री देवी",
    sarpanchRole: "निर्वाचित सरपंच",
    sarpanchBio: "कार्यकाल: 2024 – 2029 • कार्यालय समय: सोम–शनि (सुबह 10:00 – दोपहर 2:00) पंचायत भवन",
    secretaryLabel: "ग्राम सेवक:",
    secretaryName: "श्री राजेश्वर कुलकर्णी",
    toggleWardsLabel: "सभी 8 वार्ड सदस्यों और मोहल्लों की सूची देखें",
    noticesTitle: "आधिकारिक ग्राम सूचनाएं",
    noticesSub: "प्रमाणित परिपत्र, ग्राम सभा कार्यक्रम और हिंदी ऑडियो प्रतिलिपि",
    audioBadge: "बोलती ग्राम सूचना (ऑडियो)",
    listenBtn: "सुनें और पढ़ें",
    issuedBy: "जारीकर्ता:",
    budgetTitle: "विकास कार्य एवं बजट ट्रैकर",
    budgetSub: "पिपरी में हुए वास्तविक निर्माण कार्य और खर्च की गई राशि की पारदर्शी तुलना",
    legendWork: "पूर्ण कार्य",
    legendSpend: "खर्च राशि",
    workLabel: "कार्य प्रगति",
    spendLabel: "राशि उपयोग",
    sanctionedLabel: "स्वीकृत बजट:",
    spentLabel: "खर्च राशि:",
    auditAlert: "खर्च कार्य से अधिक",
    grievancesTitle: "सार्वजनिक शिकायत एवं वार्ड स्थिति बोर्ड",
    grievancesSub: "सभी 8 वार्डों की शिकायतों की 48-घंटे समय-सीमा अनुसार लाइव स्थिति",
    deskHelpTitle: "क्या आप नई शिकायत दर्ज करना चाहते हैं?",
    deskHelpDesc:
      "समस्या की फोटो के साथ पंचायत सेवा केंद्र (वार्ड 1) पर आएं या टोल-फ्री ग्राम हेल्पलाइन 1800-233-4040 पर कॉल करके ट्रैकिंग टोकन प्राप्त करें।",
    emptyGrievances: "चुनी गई श्रेणी में कोई शिकायत उपलब्ध नहीं है।",
    photoBtn: "फोटो",
    overdueText: "समय समाप्त",
    hoursLeftSuffix: " घंटे शेष",
    resolvedOnTime: "पूर्ण",
    assetsTitle: "ग्राम सार्वजनिक संपत्ति मानचित्र",
    assetsSub: "प्राथमिक स्वास्थ्य केंद्र, विद्यालय, आंगनवाड़ी और सामुदायिक जल स्रोत",
    footerLeft: "ग्रामग्लो • डिजिटल ग्राम पंचायत पोर्टल — पिपरी",
    footerRight: "सार्वजनिक पारदर्शिता एवं नागरिक अधिकार पटल",
    categories: {
      All: "सभी",
      "Gram Sabha": "ग्राम सभा",
      Agriculture: "कृषि",
      Health: "स्वास्थ्य",
      Education: "शिक्षा",
      Streetlights: "स्ट्रीट लाइट",
      "Drinking Water": "पेयजल",
      Sanitation: "स्वच्छता",
      Roads: "सड़कें",
      HealthCenter: "स्वास्थ्य केंद्र",
      School: "विद्यालय",
      Anganwadi: "आंगनवाड़ी",
      WaterPoint: "जल स्रोत"
    },
    statuses: {
      All: "सभी",
      Submitted: "दर्ज",
      Assigned: "वार्ड को सौंपा",
      "In Progress": "कार्य प्रगति पर",
      Resolved: "निराकृत"
    }
  }
};

const WARDS_DATA = [
  { ward: 1, nameEn: "Shri Prakashrao Deshmukh", nameHi: "श्री प्रकाशराव देशमुख", areaEn: "Panchayat Chowk & Main Bazaar", areaHi: "पंचायत चौक और मुख्य बाज़ार" },
  { ward: 2, nameEn: "Smt. Sunita Tai Patil", nameHi: "श्रीमती सुनीता ताई पाटिल", areaEn: "Hanuman Mandir Colony", areaHi: "हनुमान मंदिर कॉलोनी" },
  { ward: 3, nameEn: "Shri Rameshwar Jadhav", nameHi: "श्री रामेश्वर जाधव", areaEn: "North School Road", areaHi: "उत्तरी विद्यालय मार्ग" },
  { ward: 4, nameEn: "Smt. Meena Devi Pawar", nameHi: "श्रीमती मीना देवी पवार", areaEn: "Krishi Upaj Lane", areaHi: "कृषि उपज गली" },
  { ward: 5, nameEn: "Shri Kailash Wankhede", nameHi: "श्री कैलाश वानखेड़े", areaEn: "Ambedkar Nagar", areaHi: "अंबेडकर नगर" },
  { ward: 6, nameEn: "Smt. Kavita Meshram", nameHi: "श्रीमती कविता मेश्राम", areaEn: "East Borewell Mohalla", areaHi: "पूर्वी बोरवेल मोहल्ला" },
  { ward: 7, nameEn: "Shri Deepak Gajbhiye", nameHi: "श्री दीपक गजभिये", areaEn: "Bunkar Colony", areaHi: "बुनकर कॉलोनी" },
  { ward: 8, nameEn: "Smt. Vandana Gaikwad", nameHi: "श्रीमती वंदना गायकवाड़", areaEn: "Riverbank Farm Cluster", areaHi: "नदी तट कृषि क्षेत्र" }
];

const NOTICES_DATA = [
  {
    id: "N-101",
    category: "Gram Sabha",
    dateEn: "Next Tuesday • 10:00 AM",
    dateHi: "अगला मंगलवार • सुबह 10:00 बजे",
    titleEn: "Special Gram Sabha Meeting — Infrastructure & Water Audit",
    titleHi: "विशेष ग्राम सभा बैठक — विकास कार्य एवं पेयजल समीक्षा",
    bodyEn: "All adult residents of Wards 1 to 8 are invited to Panchayat Bhavan Courtyard to approve new solar lamps and review drinking water tank cleaning schedules.",
    bodyHi: "वार्ड 1 से 8 के सभी ग्रामवासियों को पंचायत भवन प्रांगण में आमंत्रित किया जाता है। बैठक में नई सोलर लाइट और पेयजल टंकी सफाई पर निर्णय लिया जाएगा।",
    authorityEn: "Sarpanch & Gram Sevak",
    authorityHi: "सरपंच एवं ग्राम सेवक",
    scriptHi: "नमस्कार ग्रामवासियों। अगले मंगलवार सुबह 10 बजे पिपरी पंचायत भवन में विशेष ग्राम सभा रखी गई है। सभी नागरिक समय पर उपस्थित होकर अपने सुझाव दें।"
  },
  {
    id: "N-102",
    category: "Agriculture",
    dateEn: "2 Days Ago",
    dateHi: "2 दिन पहले",
    titleEn: "PM-Kisan e-KYC & Rabi Drip Irrigation Subsidy Camp",
    titleHi: "पीएम-किसान ई-केवाईसी एवं रबी सिंचाई सब्सिडी शिविर",
    bodyEn: "Agriculture Extension Officer will be available at Ward 1 Seva Kendra this Friday from 11 AM to 4 PM with Aadhaar and 7/12 land extract verification.",
    bodyHi: "कृषि विस्तार अधिकारी इस शुक्रवार सुबह 11 से शाम 4 बजे तक वार्ड 1 सेवा केंद्र में आधार और खसरा-खतौनी सत्यापन हेतु उपलब्ध रहेंगे।",
    authorityEn: "Block Agriculture Office",
    authorityHi: "विकासखंड कृषि कार्यालय",
    scriptHi: "किसान भाइयों के लिए सूचना: इस शुक्रवार सुबह 11 बजे से पंचायत सेवा केंद्र में पीएम-किसान ई-केवाईसी और सिंचाई सब्सिडी शिविर आयोजित किया गया है।"
  },
  {
    id: "N-103",
    category: "Health",
    dateEn: "4 Days Ago",
    dateHi: "4 दिन पहले",
    titleEn: "Maternal & Child Immunization Drive at Primary Health Sub-Center",
    titleHi: "प्राथमिक स्वास्थ्य उपकेंद्र में मातृ एवं शिशु टीकाकरण अभियान",
    bodyEn: "Free routine vaccinations, iron supplements, and blood pressure screening for senior citizens every Wednesday from 9:30 AM.",
    bodyHi: "प्रत्येक बुधवार सुबह 9:30 बजे से बच्चों का निःशुल्क टीकाकरण, आयरन की गोलियां और वरिष्ठ नागरिकों की रक्तचाप जांच की जाएगी।",
    authorityEn: "ANM & ASHA Health Team",
    authorityHi: "स्वास्थ्य विभाग एवं आशा कार्यकर्ता",
    scriptHi: "स्वास्थ्य सूचना: हर बुधवार सुबह 9:30 बजे पिपरी स्वास्थ्य उपकेंद्र में बच्चों का टीकाकरण और बुजुर्गों की निःशुल्क जांच की जाती है।"
  },
  {
    id: "N-104",
    category: "Education",
    dateEn: "1 Week Ago",
    dateHi: "1 सप्ताह पहले",
    titleEn: "Zilla Parishad Primary School Digital Library & Tablet Lab",
    titleHi: "जिला परिषद प्राथमिक विद्यालय में डिजिटल पुस्तकालय उद्घाटन",
    bodyEn: "Evening remedial reading hours (4:30 PM – 6:00 PM) are now open for Class 1–8 students with solar backup lighting.",
    bodyHi: "कक्षा 1 से 8 तक के विद्यार्थियों के लिए शाम 4:30 से 6:00 बजे तक सौर ऊर्जा प्रकाशयुक्त डिजिटल अध्ययन कक्ष शुरू किया गया है।",
    authorityEn: "School Management Committee",
    authorityHi: "शाला प्रबंधन समिति",
    scriptHi: "शिक्षा सूचना: पिपरी प्राथमिक विद्यालय में अब शाम 4:30 से 6 बजे तक सभी बच्चों के लिए डिजिटल लाइब्रेरी खुली रहेगी।"
  }
];

const BUDGET_DATA = [
  {
    id: "P-01",
    titleEn: "Concrete Paved Road Construction (Main Chowk to School)",
    titleHi: "सीमेंट कंक्रीट पक्की सड़क निर्माण (मुख्य चौक से विद्यालय तक)",
    wardEn: "Ward 1 & Ward 3",
    wardHi: "वार्ड 1 और वार्ड 3",
    sanctioned: 400000,
    spent: 320000,
    workPct: 80
  },
  {
    id: "P-02",
    titleEn: "Solar Streetlight Installation (24 LED Poles)",
    titleHi: "सोलर स्ट्रीट लाइट स्थापना (24 एलईडी पोल)",
    wardEn: "Ward 3 & Ward 7",
    wardHi: "वार्ड 3 और वार्ड 7",
    sanctioned: 250000,
    spent: 235000,
    workPct: 70
  },
  {
    id: "P-03",
    titleEn: "School Sanitation & Girls Hygiene Block",
    titleHi: "विद्यालय स्वच्छता एवं बालिका शौचालय निर्माण",
    wardEn: "Ward 2",
    wardHi: "वार्ड 2",
    sanctioned: 350000,
    spent: 315000,
    workPct: 92
  },
  {
    id: "P-04",
    titleEn: "Community Borewell & Overhead Pipeline Extension",
    titleHi: "सामुदायिक बोरवेल एवं पेयजल पाइपलाइन विस्तार",
    wardEn: "Ward 5 & Ward 6",
    wardHi: "वार्ड 5 और वार्ड 6",
    sanctioned: 450000,
    spent: 270000,
    workPct: 62
  },
  {
    id: "P-05",
    titleEn: "Covered Storm-Water Drainage Channel",
    titleHi: "ढकी हुई वर्षा जल निकासी नाली निर्माण",
    wardEn: "Ward 4 & Ward 8",
    wardHi: "वार्ड 4 और वार्ड 8",
    sanctioned: 400000,
    spent: 180000,
    workPct: 48
  }
];

const GRIEVANCES_DATA = [
  {
    token: "GP-1042",
    category: "Streetlights",
    ward: 3,
    status: "In Progress",
    slaHoursLeft: 0,
    titleEn: "Broken Solar Streetlamp near North School Gate",
    titleHi: "उत्तरी विद्यालय गेट के पास खराब सोलर स्ट्रीट लाइट",
    descEn: "Pole #14 battery box is loose and lamp has not turned on for 4 nights.",
    descHi: "पोल नंबर 14 का बैटरी बॉक्स ढीला है और 4 रातों से लाइट बंद है।",
    photoCaptionEn: "Field photo captured at Ward 3 School Gate showing unlit solar pole #14.",
    photoCaptionHi: "वार्ड 3 विद्यालय गेट पर बंद सोलर पोल नंबर 14 का स्थल फोटो।"
  },
  {
    token: "GP-1045",
    category: "Drinking Water",
    ward: 6,
    status: "Assigned",
    slaHoursLeft: 9,
    titleEn: "Low Water Pressure & Valve Leak at East Borewell",
    titleHi: "पूर्वी बोरवेल पर कम पानी का दबाव और वाल्व रिसाव",
    descEn: "Main distribution gate valve is leaking every morning between 6 AM and 8 AM.",
    descHi: "सुबह 6 से 8 बजे के बीच मुख्य वितरण वाल्व से पानी व्यर्थ बह रहा है।",
    photoCaptionEn: "Water pooling around East Borewell valve chamber in Ward 6.",
    photoCaptionHi: "वार्ड 6 पूर्वी बोरवेल वाल्व चैंबर के पास पानी रिसाव का दृश्य।"
  },
  {
    token: "GP-1048",
    category: "Sanitation",
    ward: 5,
    status: "Submitted",
    slaHoursLeft: 26,
    titleEn: "Blocked Drain Culvert near Ambedkar Nagar Chowk",
    titleHi: "अंबेडकर नगर चौक के पास जाम नाली पुलिया",
    descEn: "Silt accumulation blocking greywater flow after recent showers.",
    descHi: "मिट्टी और कचरा जमा होने से नाली का पानी रुका हुआ है।",
    photoCaptionEn: "Drainage grate obstruction reported near Ward 5 community hall.",
    photoCaptionHi: "वार्ड 5 सामुदायिक भवन के पास जाम नाली जाली का फोटो।"
  },
  {
    token: "GP-1039",
    category: "Roads",
    ward: 7,
    status: "In Progress",
    slaHoursLeft: 18,
    titleEn: "Shoulder Erosion on Bunkar Colony Approach Lane",
    titleHi: "बुनकर कॉलोनी संपर्क मार्ग के किनारे कटाव",
    descEn: "Gravel leveling required along the 30-meter stretch before tractor movement.",
    descHi: "ट्रैक्टर आवागमन से पहले 30 मीटर हिस्से पर मुरुम समतलीकरण आवश्यक है।",
    photoCaptionEn: "Road edge wear documented near Ward 7 weaving cooperative.",
    photoCaptionHi: "वार्ड 7 बुनकर सहकारी समिति के पास सड़क किनारे का दृश्य।"
  },
  {
    token: "GP-1031",
    category: "Drinking Water",
    ward: 2,
    status: "Resolved",
    slaHoursLeft: 0,
    titleEn: "Handpump Washer Replacement near Hanuman Mandir",
    titleHi: "हनुमान मंदिर के पास हैंडपंप वॉशर सुधार कार्य",
    descEn: "Cylinder piston and handle bearing replaced by Panchayat plumber team.",
    descHi: "पंचायत प्लंबर टीम द्वारा हैंडपंप पिस्टन और बेयरिंग बदल दिया गया है।",
    photoCaptionEn: "Repaired and tested handpump delivering clean water in Ward 2.",
    photoCaptionHi: "वार्ड 2 में मरम्मत के बाद चालू हैंडपंप का प्रमाण फोटो।"
  }
];

const ASSETS_DATA = [
  {
    id: "A-1",
    type: "HealthCenter",
    x: 230,
    y: 140,
    color: "#dc2626",
    nameEn: "Pipri Primary Health Sub-Center",
    nameHi: "पिपरी प्राथमिक स्वास्थ्य उपकेंद्र",
    metaEn: "Ward 1 • ANM Nurse on duty 9 AM – 4 PM • Emergency First Aid",
    metaHi: "वार्ड 1 • एएनएम नर्स उपलब्ध (सुबह 9 – शाम 4) • प्राथमिक उपचार"
  },
  {
    id: "A-2",
    type: "School",
    x: 520,
    y: 135,
    color: "#0066cc",
    nameEn: "Zilla Parishad Upper Primary School",
    nameHi: "जिला परिषद उच्च प्राथमिक विद्यालय",
    metaEn: "Ward 3 • Classes 1–8 • 284 Students • Solar Digital Lab",
    metaHi: "वार्ड 3 • कक्षा 1–8 • 284 विद्यार्थी • सोलर डिजिटल लैब"
  },
  {
    id: "A-3",
    type: "Anganwadi",
    x: 210,
    y: 285,
    color: "#d97706",
    nameEn: "Anganwadi Center No. 1 & Nutrition Kitchen",
    nameHi: "आंगनवाड़ी केंद्र क्रमांक 1 एवं पोषण आहार केंद्र",
    metaEn: "Ward 5 • Early Childhood Care & Maternal Nutrition",
    metaHi: "वार्ड 5 • बाल विकास एवं मातृ पोषण आहार वितरण"
  },
  {
    id: "A-4",
    type: "WaterPoint",
    x: 590,
    y: 275,
    color: "#059669",
    nameEn: "Community Solar Borewell & Elevated Tank",
    nameHi: "सामुदायिक सोलर बोरवेल एवं उच्च जल टंकी",
    metaEn: "Ward 6 • 50,000 Litre Capacity • Supply: 6–8 AM & 5–7 PM",
    metaHi: "वार्ड 6 • 50,000 लीटर क्षमता • जलापूर्ति: सुबह 6–8 व शाम 5–7"
  }
];

/* Application State */
const state = {
  lang: "en",
  activeTab: "overview",
  noticeCat: "All",
  grievanceStatus: "All",
  assetType: "All"
};

/* Helpers */
function t(key) {
  return UI_STRINGS[state.lang][key] || key;
}

function tCat(cat) {
  return UI_STRINGS[state.lang].categories[cat] || cat;
}

function tStatus(st) {
  return UI_STRINGS[state.lang].statuses[st] || st;
}

function formatINR(num) {
  return "₹" + num.toLocaleString("en-IN");
}

/* Tab Navigation */
function setActiveTab(tabId) {
  state.activeTab = tabId;
  document.querySelectorAll(".view-section").forEach((sec) => {
    sec.classList.toggle("active", sec.id === `section-${tabId}`);
  });
  document.querySelectorAll("[data-tab]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Render Static Translations */
function applyTranslations() {
  document.body.classList.toggle("lang-hi", state.lang === "hi");
  document.documentElement.lang = state.lang;
  document.getElementById("langLabel").textContent = state.lang === "en" ? "हिंदी" : "English";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (UI_STRINGS[state.lang][key]) {
      el.textContent = UI_STRINGS[state.lang][key];
    }
  });

  renderWards();
  renderNoticeFilters();
  renderNotices();
  renderBudget();
  renderGrievanceFilters();
  renderGrievances();
  renderAssetFilters();
  renderAssets();
}

/* Render 8 Wards */
function renderWards() {
  const container = document.getElementById("wardRosterContainer");
  container.innerHTML = WARDS_DATA.map((w) => {
    const wardTitle = state.lang === "en" ? `Ward ${w.ward}` : `वार्ड ${w.ward}`;
    const member = state.lang === "en" ? w.nameEn : w.nameHi;
    const area = state.lang === "en" ? w.areaEn : w.areaHi;
    return `
      <div class="ward-item">
        <div class="ward-num">${wardTitle}</div>
        <div class="ward-member">${member}</div>
        <div class="ward-area">${area}</div>
      </div>
    `;
  }).join("");
}

/* Notices */
function renderNoticeFilters() {
  const cats = ["All", "Gram Sabha", "Agriculture", "Health", "Education"];
  const el = document.getElementById("noticeFilters");
  el.innerHTML = cats
    .map(
      (c) => `
      <button type="button" class="filter-pill ${state.noticeCat === c ? "active" : ""}" data-ncat="${c}">
        ${tCat(c)}
      </button>
    `
    )
    .join("");

  el.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.noticeCat = btn.dataset.ncat;
      renderNoticeFilters();
      renderNotices();
    });
  });
}

function renderNotices() {
  const list = document.getElementById("noticesList");
  const filtered =
    state.noticeCat === "All"
      ? NOTICES_DATA
      : NOTICES_DATA.filter((n) => n.category === state.noticeCat);

  list.innerHTML = filtered
    .map((n) => {
      const title = state.lang === "en" ? n.titleEn : n.titleHi;
      const body = state.lang === "en" ? n.bodyEn : n.bodyHi;
      const date = state.lang === "en" ? n.dateEn : n.dateHi;
      const auth = state.lang === "en" ? n.authorityEn : n.authorityHi;

      return `
        <article class="notice-card">
          <div class="notice-meta">
            <span class="cat-badge">${tCat(n.category)}</span>
            <span class="date-text">${date}</span>
          </div>
          <h3 class="notice-title">${title}</h3>
          <p class="notice-body">${body}</p>
          <div class="notice-footer">
            <span class="authority-text">${t("issuedBy")} ${auth}</span>
            <button type="button" class="audio-trigger-btn" data-audio-id="${n.id}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
              <span>${t("listenBtn")}</span>
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  list.querySelectorAll("[data-audio-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = NOTICES_DATA.find((x) => x.id === btn.dataset.audioId);
      if (!item) return;
      const box = document.getElementById("audioReaderBox");
      document.getElementById("audioNoticeTitle").textContent =
        state.lang === "en" ? item.titleEn : item.titleHi;
      document.getElementById("audioScriptText").textContent = item.scriptHi;
      box.classList.remove("hidden");

      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(item.scriptHi);
        utter.lang = "hi-IN";
        window.speechSynthesis.speak(utter);
      }
    });
  });
}

/* Dual-Bar Budget Tracker */
function renderBudget() {
  const list = document.getElementById("budgetList");
  list.innerHTML = BUDGET_DATA.map((p) => {
    const spendPct = Math.round((p.spent / p.sanctioned) * 100);
    const overSpend = spendPct > p.workPct;
    const title = state.lang === "en" ? p.titleEn : p.titleHi;
    const ward = state.lang === "en" ? p.wardEn : p.wardHi;

    return `
      <article class="project-card">
        <div class="project-top">
          <h3 class="project-title">${title}</h3>
          ${overSpend ? `<span class="audit-flag">⚠ ${t("auditAlert")}</span>` : ""}
        </div>
        <div class="project-ward">${ward}</div>

        <div class="bar-group">
          <div class="bar-label-row">
            <span>${t("workLabel")}</span>
            <span>${p.workPct}%</span>
          </div>
          <div class="track-bg" role="progressbar" aria-valuenow="${p.workPct}" aria-valuemin="0" aria-valuemax="100">
            <div class="fill-emerald" style="width: ${p.workPct}%"></div>
          </div>
        </div>

        <div class="bar-group">
          <div class="bar-label-row">
            <span>${t("spendLabel")}</span>
            <span>${spendPct}%</span>
          </div>
          <div class="track-bg" role="progressbar" aria-valuenow="${spendPct}" aria-valuemin="0" aria-valuemax="100">
            <div class="fill-amber" style="width: ${spendPct}%"></div>
          </div>
        </div>

        <div class="project-figures">
          <span>${t("sanctionedLabel")} <strong>${formatINR(p.sanctioned)}</strong></span>
          <span>${t("spentLabel")} <strong>${formatINR(p.spent)}</strong></span>
        </div>
      </article>
    `;
  }).join("");
}

/* Grievances */
function renderGrievanceFilters() {
  const statuses = ["All", "Submitted", "Assigned", "In Progress", "Resolved"];
  const el = document.getElementById("grievanceFilters");
  el.innerHTML = statuses
    .map(
      (st) => `
      <button type="button" class="filter-pill ${state.grievanceStatus === st ? "active" : ""}" data-gstat="${st}">
        ${tStatus(st)}
      </button>
    `
    )
    .join("");

  el.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.grievanceStatus = btn.dataset.gstat;
      renderGrievanceFilters();
      renderGrievances();
    });
  });
}

function getStatusBadgeClass(status) {
  switch (status) {
    case "Submitted":
      return "st-submitted";
    case "Assigned":
      return "st-assigned";
    case "In Progress":
      return "st-progress";
    default:
      return "st-resolved";
  }
}

function renderGrievances() {
  const list = document.getElementById("grievancesList");
  const empty = document.getElementById("grievancesEmpty");

  let items =
    state.grievanceStatus === "All"
      ? [...GRIEVANCES_DATA]
      : GRIEVANCES_DATA.filter((g) => g.status === state.grievanceStatus);

  // Sort overdue open tickets first
  items.sort((a, b) => {
    const aOpen = a.status !== "Resolved";
    const bOpen = b.status !== "Resolved";
    if (aOpen !== bOpen) return aOpen ? -1 : 1;
    return a.slaHoursLeft - b.slaHoursLeft;
  });

  if (items.length === 0) {
    list.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");

  const steps = ["Submitted", "Assigned", "In Progress", "Resolved"];

  list.innerHTML = items
    .map((g) => {
      const title = state.lang === "en" ? g.titleEn : g.titleHi;
      const desc = state.lang === "en" ? g.descEn : g.descHi;
      const wardLabel = state.lang === "en" ? `Ward ${g.ward}` : `वार्ड ${g.ward}`;
      const currentIndex = steps.indexOf(g.status);

      let slaHtml = "";
      if (g.status === "Resolved") {
        slaHtml = `<span class="sla-chip sla-done">✓ ${t("resolvedOnTime")}</span>`;
      } else if (g.slaHoursLeft === 0) {
        slaHtml = `<span class="sla-chip sla-overdue">● ${t("overdueText")}</span>`;
      } else {
        slaHtml = `<span class="sla-chip">${g.slaHoursLeft}${t("hoursLeftSuffix")}</span>`;
      }

      const stepperHtml = steps
        .map((stepName, idx) => {
          const cls = idx < currentIndex ? "done" : idx === currentIndex ? "current" : "";
          return `
            <div class="step-node ${cls}">
              <div class="step-dot">${idx < currentIndex ? "✓" : idx + 1}</div>
              <span class="step-label">${tStatus(stepName)}</span>
            </div>
          `;
        })
        .join("");

      return `
        <article class="grievance-card">
          <div class="grievance-top">
            <div class="token-group">
              <span class="token-pill">#${g.token}</span>
              <span class="cat-badge">${tCat(g.category)} • ${wardLabel}</span>
              ${slaHtml}
            </div>
            <span class="status-pill ${getStatusBadgeClass(g.status)}">${tStatus(g.status)}</span>
          </div>

          <div class="grievance-main">
            <div>
              <h3 class="grievance-title">${title}</h3>
              <p class="grievance-desc">${desc}</p>
            </div>
            <button type="button" class="thumb-btn" data-photo-token="${g.token}" aria-label="View field photo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span>${t("photoBtn")}</span>
            </button>
          </div>

          <div class="stepper" aria-label="Resolution progress">
            ${stepperHtml}
          </div>
        </article>
      `;
    })
    .join("");

  list.querySelectorAll("[data-photo-token]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = GRIEVANCES_DATA.find((x) => x.token === btn.dataset.photoToken);
      if (!item) return;
      openPhotoModal(item);
    });
  });
}

/* Modal Logic */
function openPhotoModal(item) {
  const modal = document.getElementById("evidenceModal");
  document.getElementById("modalTitle").textContent = `#${item.token} — ${
    state.lang === "en" ? item.titleEn : item.titleHi
  }`;
  document.getElementById("modalCaption").textContent =
    state.lang === "en" ? item.photoCaptionEn : item.photoCaptionHi;
  document.getElementById("modalVisual").innerHTML = `
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0066cc" stroke-width="1.8">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  `;
  modal.classList.remove("hidden");
  document.getElementById("closeModalBtn").focus();
}

function closePhotoModal() {
  document.getElementById("evidenceModal").classList.add("hidden");
}

/* Village Assets Map */
function renderAssetFilters() {
  const types = ["All", "HealthCenter", "School", "Anganwadi", "WaterPoint"];
  const el = document.getElementById("assetFilters");
  el.innerHTML = types
    .map(
      (tp) => `
      <button type="button" class="filter-pill ${state.assetType === tp ? "active" : ""}" data-atype="${tp}">
        ${tCat(tp)}
      </button>
    `
    )
    .join("");

  el.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.assetType = btn.dataset.atype;
      renderAssetFilters();
      renderAssets();
    });
  });
}

function renderAssets() {
  const filtered =
    state.assetType === "All"
      ? ASSETS_DATA
      : ASSETS_DATA.filter((a) => a.type === state.assetType);

  const pinsLayer = document.getElementById("mapPinsLayer");
  pinsLayer.innerHTML = filtered
    .map((a) => {
      const label = state.lang === "en" ? a.nameEn.split(" ")[0] : a.nameHi.split(" ")[0];
      return `
        <g transform="translate(${a.x}, ${a.y})">
          <circle r="18" fill="${a.color}" opacity="0.22" />
          <circle r="10" fill="${a.color}" stroke="#ffffff" stroke-width="2.5" />
          <rect x="-46" y="15" width="92" height="24" rx="12" fill="#ffffff" opacity="0.92" />
          <text y="31" text-anchor="middle" fill="#0f172a" font-size="13" font-weight="600">${label}</text>
        </g>
      `;
    })
    .join("");

  const cardsList = document.getElementById("assetCardsList");
  cardsList.innerHTML = filtered
    .map((a) => {
      const name = state.lang === "en" ? a.nameEn : a.nameHi;
      const meta = state.lang === "en" ? a.metaEn : a.metaHi;
      return `
        <div class="asset-card">
          <div class="notice-meta">
            <span class="cat-badge" style="color: ${a.color}; background: rgba(15,23,42,0.06);">${tCat(a.type)}</span>
          </div>
          <h3 class="asset-title">${name}</h3>
          <div class="asset-meta">${meta}</div>
        </div>
      `;
    })
    .join("");
}

/* Initialization */
document.addEventListener("DOMContentLoaded", () => {
  // Language toggle
  document.getElementById("langToggle").addEventListener("click", () => {
    state.lang = state.lang === "en" ? "hi" : "en";
    applyTranslations();
  });

  // Tab buttons (desktop & mobile)
  document.querySelectorAll("[data-tab]").forEach((btn) => {
    btn.addEventListener("click", () => setActiveTab(btn.dataset.tab));
  });

  // Quick jump buttons
  document.querySelectorAll("[data-jump]").forEach((btn) => {
    btn.addEventListener("click", () => setActiveTab(btn.dataset.jump));
  });

  // Brand click
  document.querySelector("[data-nav='overview']").addEventListener("click", (e) => {
    e.preventDefault();
    setActiveTab("overview");
  });

  // Collapsible Ward Roster
  const toggleWardsBtn = document.getElementById("toggleWardsBtn");
  const wardContainer = document.getElementById("wardRosterContainer");
  toggleWardsBtn.addEventListener("click", () => {
    const expanded = toggleWardsBtn.getAttribute("aria-expanded") === "true";
    toggleWardsBtn.setAttribute("aria-expanded", String(!expanded));
    wardContainer.classList.toggle("hidden", expanded);
  });

  // Audio reader close
  document.getElementById("closeAudioBtn").addEventListener("click", () => {
    document.getElementById("audioReaderBox").classList.add("hidden");
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  });

  // Modal close handlers + Escape key
  document.getElementById("closeModalBtn").addEventListener("click", closePhotoModal);
  document.getElementById("evidenceModal").addEventListener("click", (e) => {
    if (e.target.id === "evidenceModal") closePhotoModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePhotoModal();
  });

  applyTranslations();
});
