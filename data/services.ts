export interface ServiceItem {
  id: string;
  stepNumber: string;
  title: string;
  shortDesc: string;
  priceTag: string;
  badge?: string;
  salarySlab?: { hours: string; rate: string }[];
  features: string[];
  icon: string;
  image: string;
  hi?: {
    title: string;
    shortDesc: string;
    priceTag: string;
    badge?: string;
    salarySlab?: { hours: string; rate: string }[];
    features: string[];
  };
}

export function getServiceDetails(service: ServiceItem, lang: "en" | "hi") {
  if (lang === "hi" && service.hi) {
    return {
      title: service.hi.title,
      shortDesc: service.hi.shortDesc,
      priceTag: service.hi.priceTag,
      badge: service.hi.badge ?? service.badge,
      salarySlab: service.hi.salarySlab ?? service.salarySlab,
      features: service.hi.features ?? service.features,
    };
  }
  return {
    title: service.title,
    shortDesc: service.shortDesc,
    priceTag: service.priceTag,
    badge: service.badge,
    salarySlab: service.salarySlab,
    features: service.features,
  };
}

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: "deep-clean",
    stepNumber: "01",
    title: "Deep Clean",
    shortDesc: "Comprehensive top-to-bottom scrub down including kitchen chimney degreasing, bathroom tile descaling, balcony wash, and floor buffing.",
    priceTag: "₹399/-",
    badge: "Most Popular",
    icon: "Sparkles",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjRQzsNAN8dAkbZqp4YKO_U4_YoUIioj0RcxLFPCbV7KaocQRd61jzynDOwAdN46uEMnwNG2Z-MQAfcrYsx-bEPwgj65alfwq1_QiYSpQLixqByHU-SxqxGZ05dUtTs1SpDVug7Rzj1M9GX6Z-RgoLrPso6OsQrRAH6VjOuQro98Lzzciq_mpVUK77xEdny4-FMEgzIG-QwjRisThAie2nI4rD3Eg_WRIyzQVGaHla7l45-LMidAxnfQ",
    features: ["Bathroom tile descaling & scrub", "Kitchen grease & chimney clean", "Balcony, window & fan deep wash"],
    hi: {
      title: "डीप क्लीनिंग सर्विस",
      shortDesc: "रसोई की चिमनी की डीग्रीसिंग, बाथरूम टाइल्स की सफाई, बालकनी वॉश और फ्लोर पॉलिशिंग सहित पूरे घर की संपूर्ण गहरी सफाई।",
      priceTag: "₹399/-",
      badge: "सबसे लोकप्रिय",
      features: ["बाथरूम टाइल्स व फिटिंग्स की डीप स्क्रबिंग", "रसोई का ग्रीस व चिमनी डीप क्लीन", "बालकनी, खिड़कियां व पंखों की पूरी धुलाई"],
    },
  },
  {
    id: "moving-cleaning",
    stepNumber: "02",
    title: "Moving-Related Cleaning",
    shortDesc: "Thorough move-in / move-out sanitization to make empty houses sparkling and ready for handover or occupancy.",
    priceTag: "₹399/-",
    badge: "Fast Turnaround",
    icon: "Truck",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80",
    features: ["Full cabinet interior & exterior scrub", "Paint mark & adhesive residue cleanup", "Ready-to-occupy guarantee"],
    hi: {
      title: "शिफ्टिंग / मूव-इन व मूव-आउट सफाई",
      shortDesc: "नए घर में प्रवेश या पुराने घर को खाली करने से पहले संपूर्ण सैनिटाइजेशन और गहरी सफाई।",
      priceTag: "₹399/-",
      badge: "त्वरित सेवा",
      features: ["अलमारी व कैबिनेट्स के अंदर-बाहर की सफाई", "पेंट के दाग व चिपकन के निशान हटाना", "तत्काल शिफ्टिंग के लिए तैयार घर"],
    },
  },
  {
    id: "office-cleaning",
    stepNumber: "03",
    title: "Office and Workplace Cleaning",
    shortDesc: "Spotless commercial, clinic, and corporate housekeeping to maintain an immaculate professional work atmosphere in Agra.",
    priceTag: "₹399/-",
    badge: "GST Invoice",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80",
    features: ["Workstation dusting & cable neatness", "Washroom & pantry deep sanitization", "After-hours disruption-free service"],
    hi: {
      title: "ऑफिस व कार्यस्थल की सफाई",
      shortDesc: "आगरा में ऑफिस, क्लिनिक और व्यावसायिक प्रतिष्ठानों के लिए पेशेवर व स्वच्छ वातावरण।",
      priceTag: "₹399/-",
      badge: "जीएसटी बिल उपलब्ध",
      features: ["वर्कस्टेशन व डेस्क की सफाई व डस्टिंग", "वॉशरूम व पेंट्री का डीप सैनिटाइजेशन", "काम के समय में कोई रुकावट नहीं"],
    },
  },
  {
    id: "standard-cleaning",
    stepNumber: "04",
    title: "Standard Cleaning",
    shortDesc: "Regular sanitization and surface upkeep for homes requiring a quick, reliable refresh without full deep cleaning.",
    priceTag: "₹399/-",
    badge: "Quick Refresh",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=80",
    features: ["High-touch surface disinfection", "Floor sweeping & dual-action mopping", "Kitchen counter & sink sanitize"],
    hi: {
      title: "स्टैंडर्ड / सामान्य घर की सफाई",
      shortDesc: "बिना फुल डीप क्लीनिंग के घर की नियमित सतहों की सफाई, सैनिटाइजेशन और ताजगी के लिए।",
      priceTag: "₹399/-",
      badge: "क्विक रिफ्रेश",
      features: ["बार-बार छुई जाने वाली सतहों का कीटाणुशोधन", "झाड़ू व दोहरे एक्शन वाला गीला पोछा", "किचन काउंटर और सिंक की सफाई"],
    },
  },
  {
    id: "general-housekeeping",
    stepNumber: "05",
    title: "General Housekeeping",
    shortDesc: "Routine domestic upkeep handled with discretion—sweeping, mopping, daily utensil scrub, and general organization.",
    priceTag: "Get Free Quote",
    badge: "Flexible Plans",
    icon: "Home",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJnmA4VaHtdfMe4MA111PrqCPCzBHj-Qh1X4NtSvT3whf903wsqnhY0djm1bBi9qBxWWV4pol3SZJy3eactzacAo6JkjJAaSH3iSoFif8ckUu_fWk8l9WTuZiMJGCFPC-q390p2XmCdnteR5Za2sNGKbSmHKvX1NlQg2DzTEUfLS6ntAA61L8rgYuEUKl0L-K_YDThuAseQSdPFcilWfy8l48dSC1CbCKCmt0iIuR1XAiT0GwKp3DZ0g",
    features: ["Daily broom & wet floor mop", "Utensil washing & sink scrub", "Free backup helper if maid is on leave"],
    hi: {
      title: "दैनिक घरेलू कामकाज (हाउसकीपिंग)",
      shortDesc: "झाड़ू-पोछा, बर्तन मांजना, डस्टिंग और घर की व्यवस्था का संपूर्ण दैनिक प्रबंधन।",
      priceTag: "मुफ्त कोटेशन पाएं",
      badge: "लचीले प्लान",
      features: ["दैनिक झाड़ू और फर्श पर पोछा", "बर्तन धोना और सिंक की सफाई", "मेड की छुट्टी पर मुफ्त बैकअप हेल्पर"],
    },
  },
  {
    id: "window-cleaning",
    stepNumber: "06",
    title: "Interior and Exterior Window Cleaning",
    shortDesc: "Crystal clear glass polishing, track dirt vacuuming, grill degreasing, and mosquito mesh washing.",
    priceTag: "Get Free Quote",
    badge: "Custom Scope",
    icon: "Maximize2",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&auto=format&fit=crop&q=80",
    features: ["Interior & exterior glass polish", "Window sliding track vacuuming", "Mosquito mesh & safety grill clean"],
    hi: {
      title: "खिड़कियों व कांच की सफाई (अंदर व बाहर)",
      shortDesc: "कांच की चमकदार पॉलिशिंग, ग्रिल की सफाई, स्लाइडिंग ट्रैक की वैक्यूमिंग और जाली की धुलाई।",
      priceTag: "मुफ्त कोटेशन पाएं",
      badge: "कस्टम स्कोप",
      features: ["खिड़की के कांच की अंदर व बाहर पॉलिशिंग", "स्लाइडिंग चैनल और ट्रैक की वैक्यूमिंग", "मच्छर जाली और सेफ्टी ग्रिल की धुलाई"],
    },
  },
  {
    id: "mattress-cleaning",
    stepNumber: "07",
    title: "Mattress Cleaning",
    shortDesc: "Intensive dust mite extraction, stain spot-treatment, allergen sanitization, and antibacterial steam wash for your beds.",
    priceTag: "Get Free Quote",
    badge: "Custom Scope",
    icon: "Bed",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop&q=80",
    features: ["Deep dust-mite vacuum extraction", "Sweat & spill stain spot removal", "Odor neutralization & fabric sanitize"],
    hi: {
      title: "गद्दों (मैट्रेस) की डीप क्लीनिंग",
      shortDesc: "धूल, माइट्स, दाग-धब्बे हटाने और बिस्तर को बैक्टीरिया-मुक्त करने के लिए स्टीम व वैक्यूम वॉश।",
      priceTag: "मुफ्त कोटेशन पाएं",
      badge: "कस्टम स्कोप",
      features: ["गहरी डस्ट-माइट वैक्यूम एक्सट्रैक्शन", "पसीने व दाग-धब्बे हटाने का विशेष ट्रीटमेंट", "दुर्गंध निवारण व फैब्रिक सैनिटाइज"],
    },
  },
  {
    id: "upholstery-cleaning",
    stepNumber: "08",
    title: "Upholstery Cleaning",
    shortDesc: "Professional foam steam injection and wet vacuum extraction for fabric sofas, recliners, cushions, and dining chairs.",
    priceTag: "Get Free Quote",
    badge: "Custom Scope",
    icon: "Droplet",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTashKnhWVT4ZWo9YcRAf0TZ5chLFkKxTnDJTWaXN9M0kBTRTatcVg_wL5eZ0KHAzafbBS4VdPtwPXwuqH3RTeWlc5JHHqjyXFZJarcJbNdLjluRS1c_xN3Rmsg51QeuvDGN2kYr2MdM8KmiihMzbJEdNWK3SgabYhywtaJBXm7_wNp5bwZTYmalkQkNU6IOpQLUW18gr2G6MGR-iwtzDF0t8ivzInvZ6Vwc3Pg17vu2QF6Ucugv5rnQ",
    features: ["Deep foam stain extraction", "Fabric color & texture revival", "Fast 2-hour drying time"],
    hi: {
      title: "सोफा व कुशन फैब्रिक क्लीनिंग",
      shortDesc: "फैब्रिक सोफा, रिक्लाइनर, कुशन और डाइनिंग कुर्सियों के लिए फोम व वैक्यूम एक्सट्रैक्शन सफाई।",
      priceTag: "मुफ्त कोटेशन पाएं",
      badge: "कस्टम स्कोप",
      features: ["गहरे फोम से दाग-धब्बों की सफाई", "कपड़े के रंग और चमक की बहाली", "मात्र 2 घंटे में त्वरित सुखाई"],
    },
  },
  {
    id: "house-maid-hourly",
    stepNumber: "09",
    title: "House Maid Service (Hourly / On-Demand)",
    shortDesc: "Need a maid for quick 1-2 hours or emergency domestic help? Book an on-demand verified housemaid by the hour.",
    priceTag: "₹499 / hr",
    badge: "On-Demand",
    icon: "Clock",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&auto=format&fit=crop&q=80",
    features: ["Instant same-day availability", "Pay only for the hours worked", "Complete domestic chore support"],
    hi: {
      title: "घंटे के अनुसार मेड सर्विस (ऑन-डिमांड)",
      shortDesc: "आपातकालीन घरेलू काम या 1-2 घंटे के लिए मेड चाहिए? प्रति घंटे के हिसाब से सत्यापित मेड बुक करें।",
      priceTag: "₹499 / घंटा",
      badge: "ऑन-डिमांड",
      features: ["उसी दिन तुरंत उपलब्धता", "केवल काम किए गए घंटों का भुगतान", "सभी घरेलू कामकाज में पूर्ण सहयोग"],
    },
  },
  {
    id: "caregiver-combined",
    stepNumber: "10",
    title: "Cooking, Dusting, Patient Care, Baby Care",
    shortDesc: "Multi-skilled domestic helpers for flexible working hours across home cooking, dusting, baby nanny, and bedside eldercare.",
    priceTag: "From ₹5,000 / mo",
    badge: "Transparent Hourly Slab",
    salarySlab: [
      { hours: "3 Hours / day", rate: "₹5,000 / month" },
      { hours: "4 Hours / day", rate: "₹6,000 / month" },
      { hours: "5 Hours / day", rate: "₹7,000 / month" },
      { hours: "6 Hours / day", rate: "₹8,000 / month" },
    ],
    icon: "Users",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80",
    features: [
      "Cooking, dusting, baby care or patient care",
      "Fixed transparent monthly salary slabs",
      "Police verified & health screened staff"
    ],
    hi: {
      title: "खाना बनाना, डस्टिंग, पेशेंट केयर, बेबी केयर",
      shortDesc: "खाना बनाने, शिशु देखभाल, बुजुर्गों व मरीजों की सेवा और घर के कामकाज के लिए कुशल घरेलू सहायक।",
      priceTag: "₹5,000 / माह से शुरू",
      badge: "पारदर्शी मासिक स्लैब",
      salarySlab: [
        { hours: "3 घंटे / दिन", rate: "₹5,000 / माह" },
        { hours: "4 घंटे / दिन", rate: "₹6,000 / माह" },
        { hours: "5 घंटे / दिन", rate: "₹7,000 / माह" },
        { hours: "6 घंटे / दिन", rate: "₹8,000 / माह" },
      ],
      features: [
        "खाना बनाना, डस्टिंग, बेबी केयर या पेशेंट केयर",
        "निश्चित व पारदर्शी मासिक वेतन स्लैब",
        "पुलिस सत्यापित व स्वास्थ्य-परीक्षित स्टाफ"
      ],
    },
  },
];

export const SERVICES = SERVICES_CATALOG;

export const AGRA_LOCALITIES = [
  "Khandari",
  "Bodla",
  "Dayalbagh",
  "Kamla Nagar",
  "Sanjay Place",
  "Shahganj",
  "Civil Lines",
  "Fatehabad Road",
  "Sikandra",
  "Tajganj",
  "Awas Vikas Colony",
  "Other Area in Agra"
];
