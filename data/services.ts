export interface PricingSlab {
  hours: string;
  rate: string;
  badge?: string;
  subtext?: string;
  note?: string;
}

export interface InclusionTab {
  id: string;
  name: string;
  icon?: string;
  image?: string;
  trainedTo: string[];
  notIncluded: string[];
  hi?: {
    name: string;
    trainedTo: string[];
    notIncluded: string[];
  };
}

export interface ServiceItem {
  id: string;
  stepNumber: string;
  title: string;
  shortDesc: string;
  priceTag: string;
  badge?: string;
  category: "cleaning" | "maid_care";
  icon: string;
  image: string;
  features: string[];
  equipmentNotice?: string;
  pricingTerms?: string;
  salarySlab?: { hours: string; rate: string }[];
  singleDayHourly?: PricingSlab[];
  monthlySlabs?: PricingSlab[];
  inclusionTabs?: InclusionTab[];
  hi?: {
    title: string;
    shortDesc: string;
    priceTag: string;
    badge?: string;
    features: string[];
    equipmentNotice?: string;
    pricingTerms?: string;
    salarySlab?: { hours: string; rate: string }[];
    singleDayHourly?: PricingSlab[];
    monthlySlabs?: PricingSlab[];
  };
}

export function getServiceDetails(service: ServiceItem, lang: "en" | "hi") {
  if (lang === "hi" && service.hi) {
    return {
      title: service.hi.title,
      shortDesc: service.hi.shortDesc,
      priceTag: service.hi.priceTag,
      badge: service.hi.badge ?? service.badge,
      features: service.hi.features ?? service.features,
      equipmentNotice: service.hi.equipmentNotice ?? service.equipmentNotice,
      pricingTerms: service.hi.pricingTerms ?? service.pricingTerms,
      salarySlab: service.hi.salarySlab ?? service.salarySlab,
      singleDayHourly: service.hi.singleDayHourly ?? service.singleDayHourly,
      monthlySlabs: service.hi.monthlySlabs ?? service.monthlySlabs,
    };
  }
  return {
    title: service.title,
    shortDesc: service.shortDesc,
    priceTag: service.priceTag,
    badge: service.badge,
    features: service.features,
    equipmentNotice: service.equipmentNotice,
    pricingTerms: service.pricingTerms,
    salarySlab: service.salarySlab,
    singleDayHourly: service.singleDayHourly,
    monthlySlabs: service.monthlySlabs,
  };
}

export const COMMON_DOMESTIC_INCLUSION_TABS: InclusionTab[] = [
  {
    id: "housekeeping",
    name: "General Housekeeping",
    icon: "Home",
    image: "/images/services/house_maid.jpg",
    trainedTo: [
      "Clean reachable fans, ceiling corners & cobwebs",
      "Daily sweeping & wet disinfectant floor mopping",
      "Clean fridge interior shelves & door seals",
      "Organising wardrobes, closet shelves & clothes neatness",
      "Clean kitchen slab, gas stove top & backsplashes",
      "Clean windows & sliding tracks (interior areas)",
      "Change or rearrange existing bedsheets & pillow covers",
      "Arrange sofa cushions, throws & living area decor",
      "Arrange tabletops (dining table, study desk & coffee tables)",
      "Clean and shine mirrors, glass tables & washroom taps",
      "Clean appliance exteriors (microwave, fridge, oven, washing machine)"
    ],
    notIncluded: [
      "Moving heavy furniture across rooms without assistance",
      "Balcony exterior railing climbing without safety barriers",
      "Gardening, lawn mowing or pet grooming chores",
      "Heavy wall paint scrubbing or plaster repairs"
    ],
    hi: {
      name: "दैनिक हाउसकीपिंग",
      trainedTo: [
        "पंखे, छत के कोनों और जालों की सफाई",
        "दैनिक झाड़ू और फर्श पर फिनाइल से पोछा लगाना",
        "फ्रिज के अंदर के शेल्फ व दरवाजों की सफाई",
        "अलमारी व कपड़ों की सही तह और व्यवस्था",
        "रसोई का स्लैब, गैस चूल्हा और टाइल्स की सफाई",
        "अंदरूनी खिड़कियों व कांच की सफाई",
        "बेडशीट और तकिए के कवर बदलना व बिस्तर लगाना",
        "सोफे के कुशन और लिविंग रूम की सजावट व्यवस्थित करना",
        "डाइनिंग टेबल और स्टडी डेस्क की डस्टिंग व सफाई",
        "दर्पण, शीशे और नलों की चमक व सफाई",
        "घरेलू उपकरणों के बाहरी हिस्से की सफाई (माइक्रोवेव, फ्रिज आदि)"
      ],
      notIncluded: [
        "भारी फर्नीचर को बिना मदद एक कमरे से दूसरे कमरे ले जाना",
        "सुरक्षा ग्रिल के बिना बालकनी की बाहरी दीवारों पर चढ़ना",
        "बागवानी या पालतू जानवरों की देखभाल",
        "दीवार के रंग की गहरी घिसाई"
      ]
    }
  },
  {
    id: "dishes",
    name: "Cleaning Dishes",
    icon: "Droplet",
    image: "/images/services/dishes.jpg",
    trainedTo: [
      "Wash, scrub & sanitize all daily cooking pots, pans & plates",
      "Scrub and disinfect kitchen sink & faucet",
      "Wipe gas stove top, knobs and stainless steel trays",
      "Wipe clean kitchen counter slabs and backsplash tiles",
      "Sweep and mop kitchen floor with disinfectant liquid",
      "Collect and dispose kitchen organic & dry garbage"
    ],
    notIncluded: [
      "Internal chimney motor disassembly & carbon filter chemical wash",
      "Heavy burnt bottom restoration requiring industrial acid",
      "Cleaning deep inside drainage pipelines"
    ],
    hi: {
      name: "बर्तन धोना व रसोई सफाई",
      trainedTo: [
        "दैनिक उपयोग के बर्तन, कड़ाही व प्लेटों को अच्छी तरह मांजना व धोना",
        "रसोई के सिंक और नल की पूरी सफाई व कीटाणुशोधन",
        "गैस चूल्हा, बर्नर के आसपास और स्लैब की सफाई",
        "रसोई के काउंटर और टाइल्स को पोंछना",
        "रसोई के फर्श पर फिनाइल/डिसइंफेक्टेंट से पोछा लगाना",
        "रसोई का कूड़ा सही जगह एकत्र व डिस्पोज करना"
      ],
      notIncluded: [
        "चिमनी के मोटर को खोलकर रासायनिक धुलाई",
        "सालों से जले बर्तनों पर एसिड का प्रयोग",
        "ड्रेनेज पाइपलाइन के अंदर की गहरी सफाई"
      ]
    }
  },
  {
    id: "laundry",
    name: "Laundry & Ironing",
    icon: "Sparkles",
    image: "/images/services/laundry.jpg",
    trainedTo: [
      "Sort colored vs white clothes and machine wash cycle",
      "Dry clothes neatly on a drying line or folding rack",
      "Fold dried garments cleanly and arrange in cupboards",
      "Iron regular daily wear shirts, trousers, suits & kurtas",
      "Tidy and wipe the laundry machine area after work"
    ],
    notIncluded: [
      "Ironing delicate, heavy zari embroidery or expensive pure silk fabrics",
      "Handling biohazard or heavily chemical-stained clothes",
      "Cleaning washing machine internal motor or dryer mechanisms",
      "Advanced chemical spot stain treatments",
      "Hand washing heavy blankets, large quilts, or footwear"
    ],
    hi: {
      name: "कपड़े धोना व इस्त्री",
      trainedTo: [
        "कपड़ों को छांटना और वाशिंग मशीन में धोना",
        "कपड़ों को सुखाने के स्टैंड या तार पर सही तरीके से फैलाना",
        "सूखे कपड़ों की साफ तह लगाना और अलमारी में रखना",
        "दैनिक पहनने वाले कपड़े, शर्ट, पैंट व कुर्तों पर इस्त्री करना",
        "कपड़े धोने के बाद उस जगह को साफ और सूखा रखना"
      ],
      notIncluded: [
        "अत्यधिक नाजुक, भारी जरी या कीमती रेशमी कपड़ों पर इस्त्री",
        "संक्रमित या खतरनाक दाग वाले कपड़ों की धुलाई",
        "वाशिंग मशीन के अंदरूनी पुर्जों की मरम्मत",
        "विशेष रासायनिक दाग हटाने के प्रयोग",
        "भारी रजाई, कंबल या जूते हाथ से धोना"
      ]
    }
  },
  {
    id: "caregiver-nanny",
    name: "Baby & Nanny Care",
    icon: "Users",
    image: "/images/services/baby_care.jpg",
    trainedTo: [
      "Attentive baby holding, soothing, play activities & pram walking",
      "Baby bottle sterilization, formula/solid food feeding",
      "Baby clothing change, diaper change and hygiene maintenance",
      "24-Hour live-in newborn care and support",
      "Traditional mother and baby oil massage (Japa care)"
    ],
    notIncluded: [
      "Invasive medical procedures or administering unprescribed drugs",
      "Leaving the baby completely unattended outside home"
    ],
    hi: {
      name: "शिशु व नानी देखभाल",
      trainedTo: [
        "शिशु की प्यार से देखभाल, खिलाना, टहलाना और संभालना",
        "दूध की बोतल का सैनिटाइजेशन और बच्चे को आहार खिलाना",
        "डायपर बदलना, कपड़े बदलना और स्वच्छता का ध्यान रखना",
        "24 घंटे नवजात शिशु की समर्पित देखभाल",
        "जच्चा और बच्चा की पारंपरिक तेल मालिश (जापा केयर)"
      ],
      notIncluded: [
        "बिना डॉक्टर के पर्चे की दवाइयां देना",
        "बच्चे को बाहर अकेला छोड़ना"
      ]
    }
  },
  {
    id: "elder-care",
    name: "Elderly & Patient Care",
    icon: "ShieldCheck",
    image: "/images/services/elderly_care.jpg",
    trainedTo: [
      "Elderly companionship, gentle walking support & reading assistance",
      "Timely medicine reminders and water/diet assistance",
      "Bedmaking, keeping the patient/elderly room fresh & clean",
      "Wheelchair assistance and assistance with daily mobility",
      "Bedside monitoring for peace of mind"
    ],
    notIncluded: [
      "Invasive clinical procedures (IV drip, catheter insertion)",
      "Administering unprescribed emergency pharmaceuticals"
    ],
    hi: {
      name: "बुजुर्ग व मरीज सेवा",
      trainedTo: [
        "बुजुर्गों के साथ बातचीत, सहारा देकर टहलाना व सहायता",
        "समय पर दवा और भोजन-पानी याद दिलाना",
        "बुजुर्ग/मरीज के कमरे को साफ और स्वच्छ रखना",
        "व्हीलचेयर व दैनिक आवागमन में पूरा सहयोग",
        "मरीज के पास रहकर लगातार देखरेख"
      ],
      notIncluded: [
        "विशेषज्ञ नर्सिंग या ड्रिप लगाना",
        "बिना डॉक्टर के पर्चे की दवाइयां देना"
      ]
    }
  }
];

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: "house-maid-hourly",
    stepNumber: "01",
    title: "House Maid Service",
    shortDesc: "Agra's trusted verified maids for sweeping, mopping, dusting, bedmaking & daily chores on hourly or monthly basis.",
    priceTag: "₹399/-",
    badge: "Most Popular",
    category: "maid_care",
    icon: "Clock",
    image: "/images/services/house_maid.jpg",
    features: ["Brooming, mopping & dusting", "Instant same-day replacement guarantee", "100% Police & Aadhaar verified staff"],
    equipmentNotice: "Please provide all necessary equipments, detergents, broom and mop for the expert.",
    pricingTerms: "At least 2 hr service is mandatory for single-day on-demand bookings.",
    singleDayHourly: [
      { hours: "1 Hour", rate: "₹399", note: "Emergency Quick Help" },
      { hours: "2 Hours (Mandatory min)", rate: "₹699", badge: "Recommended", note: "Cleaning & Dusting min" },
      { hours: "3 Hours", rate: "₹1,099", note: "Complete Chores" },
      { hours: "4 Hours", rate: "₹1,399", note: "Half-Day Maid" },
      { hours: "5 Hours", rate: "₹1,599", note: "Deep Routine Help" },
      { hours: "Full Day Work (8-9 hrs)", rate: "₹2,499", badge: "Full Day", note: "Housekeeping & Help" }
    ],
    monthlySlabs: [
      { hours: "2 Hours / day", rate: "₹5,000 / month", badge: "Starter" },
      { hours: "3 Hours / day", rate: "₹6,000 / month" },
      { hours: "4 Hours / day", rate: "₹7,000 / month", badge: "Most Popular" },
      { hours: "5 Hours / day", rate: "₹8,000 to ₹9,000 / month" },
      { hours: "6 Hours / day", rate: "₹9,000 to ₹10,000 / month" },
      { hours: "7 Hours / day", rate: "₹10,000 to ₹11,000 / month" },
      { hours: "8 Hours / day", rate: "₹12,000 to ₹13,000 / month", badge: "Full Shift" }
    ],
    inclusionTabs: [
      COMMON_DOMESTIC_INCLUSION_TABS[0], // Housekeeping
      COMMON_DOMESTIC_INCLUSION_TABS[1], // Dishes
      COMMON_DOMESTIC_INCLUSION_TABS[2], // Laundry
    ],
    hi: {
      title: "घंटे व महीने के अनुसार मेड सर्विस",
      shortDesc: "झाड़ू-पोछा, डस्टिंग, बिस्तर लगाने व दैनिक कामकाज के लिए आगरा की 100% पुलिस सत्यापित मेड।",
      priceTag: "₹399/-",
      badge: "सर्वाधिक लोकप्रिय",
      features: ["झाड़ू, पोछा और डस्टिंग", "मेड की छुट्टी पर तुरंत मुफ्त रिप्लेसमेंट", "100% पुलिस व आधार सत्यापित स्टाफ"],
      equipmentNotice: "कृपया मेड/सहायक के लिए झाड़ू, पोछा, बाल्टी व सर्फ उपलब्ध कराएं।",
      pricingTerms: "सिंगल डे ऑन-डिमांड बुकिंग के लिए कम से कम 2 घंटे की सेवा अनिवार्य है।",
      singleDayHourly: [
        { hours: "1 घंटा", rate: "₹399", note: "क्विक इमरजेंसी हेल्प" },
        { hours: "2 घंटे (अनिवार्य)", rate: "₹699", badge: "सुझावित", note: "सफाई हेतु न्यूनतम" },
        { hours: "3 घंटे", rate: "₹1,099", note: "संपूर्ण घरेलू काम" },
        { hours: "4 घंटे", rate: "₹1,399", note: "हाफ-डे मेड" },
        { hours: "5 घंटे", rate: "₹1,599", note: "विस्तृत सहायता" },
        { hours: "फुल डे वर्क (8-9 घंटे)", rate: "₹2,499", badge: "फुल डे", note: "सफाई व काम" }
      ],
      monthlySlabs: [
        { hours: "2 घंटे / दिन", rate: "₹5,000 / माह", badge: "स्टार्टर" },
        { hours: "3 घंटे / दिन", rate: "₹6,000 / माह" },
        { hours: "4 घंटे / दिन", rate: "₹7,000 / माह", badge: "सबसे लोकप्रिय" },
        { hours: "5 घंटे / दिन", rate: "₹8,000 से ₹9,000 / माह" },
        { hours: "6 घंटे / दिन", rate: "₹9,000 से ₹10,000 / माह" },
        { hours: "7 घंटे / दिन", rate: "₹10,000 से ₹11,000 / माह" },
        { hours: "8 घंटे / दिन", rate: "₹12,000 से ₹13,000 / माह", badge: "फुल शिफ्ट" }
      ]
    },
  },
  {
    id: "all-in-one-help",
    stepNumber: "02",
    title: "All-in-One Domestic Help",
    shortDesc: "Complete domestic chore support: sweeping/mopping, utensil scrub (बर्तन), machine laundry & ironing (कपड़े), and kitchen upkeep.",
    priceTag: "₹5,000/mo",
    badge: "Best Value",
    category: "maid_care",
    icon: "Home",
    image: "/images/services/all_in_one.jpg",
    features: ["Housekeeping + Dishes + Laundry combined", "Transparent hourly & monthly salary slabs", "3-Month free replacement agreement"],
    equipmentNotice: "Please provide all necessary equipments, detergents, broom, mop and washing supplies.",
    pricingTerms: "These are all prices for a 50% maid 1 month salary one-time service charges with agreement of 3 months free replacement.",
    singleDayHourly: [
      { hours: "2 Hours", rate: "₹699", note: "Cleaning + Dishes" },
      { hours: "3 Hours", rate: "₹1,099", note: "Cleaning + Dishes + Laundry" },
      { hours: "4 Hours", rate: "₹1,399", note: "Half-Day Multi-Task" },
      { hours: "Full Day (8-9 hrs)", rate: "₹2,499", badge: "Full Day Work", note: "Complete Home Help" }
    ],
    monthlySlabs: [
      { hours: "2 Hours / day", rate: "₹5,000 / month", badge: "Starter" },
      { hours: "3 Hours / day", rate: "₹6,000 / month" },
      { hours: "4 Hours / day", rate: "₹7,000 / month", badge: "Most Popular" },
      { hours: "5 Hours / day", rate: "₹8,000 to ₹9,000 / month" },
      { hours: "6 Hours / day", rate: "₹9,000 to ₹10,000 / month" },
      { hours: "7 Hours / day", rate: "₹10,000 to ₹11,000 / month" },
      { hours: "8 Hours / day", rate: "₹12,000 to ₹13,000 / month", badge: "Full Shift" },
      { hours: "9 Hours / day", rate: "₹12,000 to ₹13,000 / month" },
      { hours: "10 Hours / day", rate: "₹14,000 to ₹15,000 / month" },
      { hours: "11 Hours / day", rate: "₹15,000 to ₹16,000 / month" },
      { hours: "12 Hours / day", rate: "₹15,000 to ₹17,000 / month" },
      { hours: "24 Hours (Live-in Domestic Helper)", rate: "₹21,000 to ₹22,000 / month", badge: "24hr Live-In" }
    ],
    inclusionTabs: [
      COMMON_DOMESTIC_INCLUSION_TABS[0], // Housekeeping
      COMMON_DOMESTIC_INCLUSION_TABS[1], // Dishes
      COMMON_DOMESTIC_INCLUSION_TABS[2], // Laundry
    ],
    hi: {
      title: "ऑल-इन-वन घरेलू सहायक (झाड़ू-पोछा, बर्तन व कपड़े)",
      shortDesc: "घर के सभी कामों का संपूर्ण प्रबंधन: झाड़ू-पोछा, बर्तन मांजना, कपड़े धोना व इस्त्री और रसोई की सफाई।",
      priceTag: "₹5,000/माह",
      badge: "बेस्ट वैल्यू",
      features: ["झाड़ू-पोछा + बर्तन + कपड़े एक साथ", "पारदर्शी प्रति घंटा व मासिक वेतन स्लैब", "3 महीने की मुफ्त रिप्लेसमेंट गारंटी"],
      equipmentNotice: "कृपया बर्तन धोने का साबुन, वाशिंग पाउडर, झाड़ू व पोछा उपलब्ध कराएं।",
      pricingTerms: "3 महीने के अनुबंध के साथ 50% एकमुश्त सेवा शुल्क व 3 महीने तक मुफ्त रिप्लेसमेंट।",
      singleDayHourly: [
        { hours: "2 घंटे", rate: "₹699", note: "सफाई + बर्तन" },
        { hours: "3 घंटे", rate: "₹1,099", note: "सफाई + बर्तन + कपड़े" },
        { hours: "4 घंटे", rate: "₹1,399", note: "हाफ-डे सभी काम" },
        { hours: "पूरा दिन (8-9 घंटे)", rate: "₹2,499", badge: "फुल डे", note: "संपूर्ण घरेलू सहायता" }
      ],
      monthlySlabs: [
        { hours: "2 घंटे / दिन", rate: "₹5,000 / माह", badge: "स्टार्टर" },
        { hours: "3 घंटे / दिन", rate: "₹6,000 / माह" },
        { hours: "4 घंटे / दिन", rate: "₹7,000 / माह", badge: "सबसे लोकप्रिय" },
        { hours: "5 घंटे / दिन", rate: "₹8,000 से ₹9,000 / माह" },
        { hours: "6 घंटे / दिन", rate: "₹9,000 से ₹10,000 / माह" },
        { hours: "7 घंटे / दिन", rate: "₹10,000 से ₹11,000 / माह" },
        { hours: "8 घंटे / दिन", rate: "₹12,000 से ₹13,000 / माह", badge: "फुल शिफ्ट" },
        { hours: "9 घंटे / दिन", rate: "₹12,000 से ₹13,000 / माह" },
        { hours: "10 घंटे / दिन", rate: "₹14,000 से ₹15,000 / माह" },
        { hours: "11 घंटे / दिन", rate: "₹15,000 से ₹16,000 / माह" },
        { hours: "12 घंटे / दिन", rate: "₹15,000 से ₹17,000 / माह" },
        { hours: "24 घंटे (लाइव-इन घरेलू सहायक)", rate: "₹21,000 से ₹22,000 / माह", badge: "24hr लाइव-इन" }
      ]
    },
  },
  {
    id: "baby-nanny-care",
    stepNumber: "03",
    title: "Babysitter & Nanny Care",
    shortDesc: "Loving and experienced child caretakers, day nannies, 24hr live-in nannies, and specialized postnatal newborn & mother massage maids (Japa).",
    priceTag: "₹8,000/mo",
    badge: "Trained Caregivers",
    category: "maid_care",
    icon: "Users",
    image: "/images/services/baby_care.jpg",
    features: ["Infant feeding, hygiene & playtime", "24-Hour Live-in Nannies available", "Specialized Japa Newborn Care"],
    equipmentNotice: "Please provide baby care products, diapers, feeding bottles and baby food supplies.",
    pricingTerms: "50% 1-month salary one-time service charges with agreement of 3 months free replacement.",
    singleDayHourly: [
      { hours: "4 Hours (Half Day Nanny)", rate: "₹1,399", note: "Emergency Babysitting" },
      { hours: "Full Day (8-9 hrs)", rate: "₹2,499", badge: "Full Day", note: "Daytime Child Support" }
    ],
    monthlySlabs: [
      { hours: "4 Hours / day (Part-time Nanny)", rate: "₹8,000 / month" },
      { hours: "8 Hours / day (Full Day Nanny)", rate: "₹12,000 to ₹14,000 / month", badge: "Day Nanny" },
      { hours: "10-12 Hours / day", rate: "₹15,000 to ₹17,000 / month" },
      { hours: "24 Hours Live-In (Nanny / Baby Care + House Help)", rate: "₹23,000 to ₹24,000 / month", badge: "24hr Nanny" },
      { hours: "24 Hours Live-In (Japa Maid - Newborn & Mother Care)", rate: "₹24,000 to ₹28,000 / month", badge: "24hr Japa" }
    ],
    inclusionTabs: [
      COMMON_DOMESTIC_INCLUSION_TABS[3], // Nanny Care
      COMMON_DOMESTIC_INCLUSION_TABS[0], // Housekeeping
    ],
    hi: {
      title: "बेबीसिटर, नानी व जापा मेड",
      shortDesc: "शिशु की प्यार से देखभाल, फीडिंग, खेलने, डे-नानी और नवजात शिशु व जच्चा की मालिश (जापा मेड) के लिए प्रशिक्षित स्टाफ।",
      priceTag: "₹8,000/माह",
      badge: "प्रशिक्षित नानी",
      features: ["शिशु का आहार, स्वच्छता व संभाल", "24 घंटे लाइव-इन नानी उपलब्ध", "विशेषज्ञ जापा नवजात देखभाल"],
      equipmentNotice: "कृपया शिशु के कपड़े, डायपर, फीडिंग बॉटल और आहार सामग्री उपलब्ध कराएं।",
      pricingTerms: "3 महीने के अनुबंध के साथ 50% एकमुश्त सेवा शुल्क व 3 महीने तक मुफ्त रिप्लेसमेंट।",
      singleDayHourly: [
        { hours: "4 घंटे (हाफ डे नानी)", rate: "₹1,399", note: "इमरजेंसी बेबीसिटिंग" },
        { hours: "पूरा दिन (8-9 घंटे)", rate: "₹2,499", badge: "फुल डे", note: "दिनभर शिशु देखभाल" }
      ],
      monthlySlabs: [
        { hours: "4 घंटे / दिन (पार्ट-टाइम नानी)", rate: "₹8,000 / माह" },
        { hours: "8 घंटे / दिन (फुल डे नानी)", rate: "₹12,000 से ₹14,000 / माह", badge: "डे नानी" },
        { hours: "10-12 घंटे / दिन", rate: "₹15,000 से ₹17,000 / माह" },
        { hours: "24 घंटे (नानी / बेबी केयर + मेड)", rate: "₹23,000 से ₹24,000 / माह", badge: "24hr नानी" },
        { hours: "24 घंटे (जापा मेड - जच्चा-बच्चा देखभाल)", rate: "₹24,000 से ₹28,000 / माह", badge: "24hr जापा" }
      ]
    },
  },
  {
    id: "elderly-patient-care",
    stepNumber: "04",
    title: "Elderly & Patient Care",
    shortDesc: "Dedicated, compassionate attendants for senior citizens and recovering patients—mobility help, timely medicine reminders & companionship.",
    priceTag: "₹12,000/mo",
    badge: "Compassionate Care",
    category: "maid_care",
    icon: "ShieldCheck",
    image: "/images/services/elderly_care.jpg",
    features: ["Mobility, walking & wheelchair assistance", "Timely medication & diet reminders", "Police verified & health screened attendants"],
    equipmentNotice: "Please provide all patient medications, medical charts, and prescribed diet instructions.",
    pricingTerms: "50% 1-month salary one-time service charges with agreement of 3 months free replacement.",
    singleDayHourly: [
      { hours: "Full Day (8-9 hrs)", rate: "₹2,499", badge: "Day Shift", note: "Bedside Attendant" }
    ],
    monthlySlabs: [
      { hours: "8 Hours / day (Day Shift)", rate: "₹12,000 to ₹13,000 / month", badge: "Day Shift" },
      { hours: "10 Hours / day", rate: "₹14,000 to ₹15,000 / month" },
      { hours: "12 Hours / day (Full Day Shift)", rate: "₹15,000 to ₹17,000 / month", badge: "12hr Shift" },
      { hours: "24 Hours Live-In (Bedside Patient Care)", rate: "₹22,000 to ₹25,000 / month", badge: "24hr Live-In" }
    ],
    inclusionTabs: [
      COMMON_DOMESTIC_INCLUSION_TABS[4], // Elder Care
      COMMON_DOMESTIC_INCLUSION_TABS[0], // Housekeeping
    ],
    hi: {
      title: "बुजुर्ग व मरीज देखभाल सहायक",
      shortDesc: "बुजुर्गों और मरीजों की सेवा, सहारा देकर टहलाना, समय पर दवा याद दिलाना व पूरे आदर के साथ देखभाल।",
      priceTag: "₹12,000/माह",
      badge: "संवेदनशील देखभाल",
      features: ["टहलाने व व्हीलचेयर में सहायता", "समय पर दवा व भोजन की देखरेख", "पुलिस सत्यापित व अनुशासित स्टाफ"],
      equipmentNotice: "कृपया दवाइयां और डॉक्टर के निर्देश उपलब्ध कराएं।",
      pricingTerms: "3 महीने के अनुबंध के साथ 50% एकमुश्त सेवा शुल्क व 3 महीने तक मुफ्त रिप्लेसमेंट।",
      singleDayHourly: [
        { hours: "पूरा दिन (8-9 घंटे)", rate: "₹2,499", badge: "डे शिफ्ट", note: "मरीज की देखरेख" }
      ],
      monthlySlabs: [
        { hours: "8 घंटे / दिन (डे शिफ्ट)", rate: "₹12,000 से ₹13,000 / माह", badge: "डे शिफ्ट" },
        { hours: "10 घंटे / दिन", rate: "₹14,000 से ₹15,000 / माह" },
        { hours: "12 घंटे / दिन (12 घंटे की शिफ्ट)", rate: "₹15,000 से ₹17,000 / माह", badge: "12hr शिफ्ट" },
        { hours: "24 घंटे (लाइव-इन मरीज देखभाल)", rate: "₹22,000 से ₹25,000 / माह", badge: "24hr लाइव-इन" }
      ]
    },
  },
  {
    id: "deep-clean",
    stepNumber: "05",
    title: "Full Deep House Cleaning",
    shortDesc: "Comprehensive top-to-bottom machine scrub down including kitchen chimney degreasing, bathroom tile descaling, balcony wash, and floor buffing.",
    priceTag: "₹1,499/-",
    badge: "Most Popular",
    category: "cleaning",
    icon: "Sparkles",
    image: "/images/services/deep_clean.jpg",
    features: ["Bathroom tile descaling & scrub", "Kitchen grease & chimney clean", "Balcony, window & fan deep wash"],
    equipmentNotice: "All industrial vacuum cleaners, single-disc floor scrubbers, ladders, and eco-friendly certified chemicals are provided by MaidPro.",
    pricingTerms: "Fixed transparent home cleaning packages with 100% satisfaction guarantee. No hidden charges.",
    singleDayHourly: [
      { hours: "1 BHK Full Home", rate: "₹1,499", badge: "Standard", subtext: "3-4 Hours • 2 Staff" },
      { hours: "2 BHK Full Home", rate: "₹2,199", badge: "Most Popular", subtext: "4-5 Hours • 2-3 Staff" },
      { hours: "3 BHK Full Home", rate: "₹2,999", badge: "Best Value", subtext: "5-6 Hours • 3-4 Staff" },
      { hours: "4 BHK / Villa", rate: "₹3,999", subtext: "6-8 Hours • 4 Staff" },
      { hours: "Kitchen Deep Degrease", rate: "₹999", subtext: "Includes Chimney Scrub" },
      { hours: "Bathroom Tile Descaling", rate: "₹599 / bath", subtext: "Acid-free Stain Removal" }
    ],
    inclusionTabs: [
      {
        id: "kitchen-deep",
        name: "Kitchen Deep Scrub",
        icon: "ChefHat",
        image: "/images/services/deep_clean.jpg",
        trainedTo: [
          "Complete chimney baffle filter degreasing & hood wipe",
          "Gas stove burner descaling & countertop buffing",
          "Kitchen tile wall grout descaling & oil grease removal",
          "Cabinets interior & exterior sanitization",
          "Exhaust fan oil buildup removal & floor machine wash"
        ],
        notIncluded: [
          "Internal chimney motor repair & electrical alterations",
          "Moving heavy double-door commercial refrigerators"
        ],
        hi: {
          name: "किचन डीप स्क्रब",
          trainedTo: [
            "चिमनी फिल्टर की डीग्रीसिंग व हुड की सफाई",
            "गैस चूल्हा, बर्नर व काउंटरटॉप की बफिंग",
            "किचन टाइल्स से तेल के जिद्दी दाग हटाना",
            "कैबिनेट्स के अंदर और बाहर की सफाई",
            "एग्जॉस्ट फैन की ग्रीस सफाई व फर्श धुलाई"
          ],
          notIncluded: [
            "चिमनी मोटर की अंदरूनी मरम्मत",
            "भारी फ्रिज को हटाना"
          ]
        }
      },
      {
        id: "bathroom-deep",
        name: "Bathroom & Tile Descale",
        icon: "Droplet",
        image: "/images/services/deep_clean.jpg",
        trainedTo: [
          "Hard water scale removal from floor & wall tiles",
          "Toilet bowl deep descaling, stain removal & sanitization",
          "Mirror, glass partition & chrome CP tap polishing",
          "Exhaust fan blade cleaning & drainage floor trap wash"
        ],
        notIncluded: [
          "Acid washing that damages tile glaze",
          "Plumbing pipe replacement or major leak fixes"
        ],
        hi: {
          name: "बाथरूम व टाइल्स डीस्केल",
          trainedTo: [
            "फर्श व दीवारों की टाइल्स से खारे पानी के सफेद दाग हटाना",
            "टॉयलेट पॉट की गहरी डीस्केलिंग व सैनिटाइजेशन",
            "शीशे, ग्लास पार्टीशन और नलों की चमक व पॉलिश",
            "एग्जॉस्ट फैन व ड्रेन जाली की पूरी सफाई"
          ],
          notIncluded: [
            "तेजाब से धुलाई जो टाइल की चमक खराब करे",
            "प्लंबिंग पाइपलाइन की मरम्मत"
          ]
        }
      },
      {
        id: "living-deep",
        name: "Living Room & Balcony",
        icon: "Home",
        image: "/images/services/house_maid.jpg",
        trainedTo: [
          "High ceiling cobweb removal & fan blade scrubbing",
          "Switchboard, door frame & glass window cleaning",
          "Balcony floor wash, railing wipe & drain descaling",
          "Sofa & mattress dry vacuum extraction"
        ],
        notIncluded: [
          "Repainting peeling walls or ceiling touchups",
          "Exterior facade window hanging without cradle"
        ],
        hi: {
          name: "लिविंग रूम व बालकनी",
          trainedTo: [
            "छत के जाले हटाना और पंखों की धुलाई",
            "स्विच बोर्ड, दरवाजे और खिड़कियों की सफाई",
            "बालकनी का फर्श धोना, रेलिंग व ड्रेन साफ करना",
            "सोफा व गद्दों की ड्राई वैक्यूम सफाई"
          ],
          notIncluded: [
            "दीवारों का पेंट छूटना ठीक करना",
            "बिना सुरक्षा के बाहरी दीवार पर लटकना"
          ]
        }
      }
    ],
    hi: {
      title: "फुल डीप हाउस क्लीनिंग",
      shortDesc: "रसोई की चिमनी की डीग्रीसिंग, बाथरूम टाइल्स की सफाई, बालकनी वॉश और फ्लोर पॉलिशिंग सहित पूरे घर की संपूर्ण गहरी सफाई।",
      priceTag: "₹1,499/-",
      badge: "सबसे लोकप्रिय",
      features: ["बाथरूम टाइल्स व फिटिंग्स की डीप स्क्रबिंग", "रसोई का ग्रीस व चिमनी डीप क्लीन", "बालकनी, खिड़कियां व पंखों की पूरी धुलाई"],
      equipmentNotice: "सभी इंडस्ट्रियल वैक्यूम क्लीनर, फ्लोर मशीन, सीढ़ी और इको-फ्रेंडली केमिकल मेडप्रो टीम द्वारा उपलब्ध कराए जाते हैं।",
      pricingTerms: "100% संतुष्टि गारंटी के साथ निश्चित पारदर्शी होम क्लीनिंग पैकेज। कोई छुपा शुल्क नहीं।",
      singleDayHourly: [
        { hours: "1 BHK पूरा घर", rate: "₹1,499", badge: "मानक", subtext: "3-4 घंटे • 2 स्टाफ" },
        { hours: "2 BHK पूरा घर", rate: "₹2,199", badge: "सर्वाधिक लोकप्रिय", subtext: "4-5 घंटे • 2-3 स्टाफ" },
        { hours: "3 BHK पूरा घर", rate: "₹2,999", badge: "बेस्ट वैल्यू", subtext: "5-6 घंटे • 3-4 स्टाफ" },
        { hours: "4 BHK / विला", rate: "₹3,999", subtext: "6-8 घंटे • 4 स्टाफ" },
        { hours: "किचन डीप डीग्रीसिंग", rate: "₹999", subtext: "चिमनी स्क्रब सहित" },
        { hours: "बाथरूम टाइल डीस्केलिंग", rate: "₹599 / बाथरूम", subtext: "दाग हटाने का ट्रीटमेंट" }
      ]
    },
  },
  {
    id: "moving-cleaning",
    stepNumber: "06",
    title: "Move-In Shifting Cleaning",
    shortDesc: "Thorough move-in / move-out sanitization to make empty houses sparkling and ready for handover or occupancy in Agra.",
    priceTag: "₹1,999/-",
    badge: "Fast Turnaround",
    category: "cleaning",
    icon: "Truck",
    image: "/images/services/moving_cleaning.jpg",
    features: ["Full cabinet interior & exterior scrub", "Paint mark & adhesive residue cleanup", "Ready-to-occupy guarantee"],
    equipmentNotice: "MaidPro brings all heavy machinery, scrapers, tile buffing machines, and safe paint residue solvents.",
    pricingTerms: "Includes post-renovation paint stain removal and full interior sanitization ready for immediate shift.",
    singleDayHourly: [
      { hours: "1 BHK Move-in", rate: "₹1,999", subtext: "Complete Handover Clean" },
      { hours: "2 BHK Move-in", rate: "₹2,799", badge: "Popular", subtext: "Paint Mark Removal" },
      { hours: "3 BHK Move-in", rate: "₹3,699", subtext: "All Rooms & Balconies" },
      { hours: "4 BHK / Villa", rate: "₹4,799", subtext: "Deep Multi-Staff Service" }
    ],
    inclusionTabs: [
      {
        id: "cabinets-move",
        name: "Wardrobes & Cabinets",
        icon: "Home",
        image: "/images/services/moving_cleaning.jpg",
        trainedTo: [
          "Wiping & vacuuming inside all empty wardrobe shelves & drawers",
          "Removing paper liners, dust and glue residue",
          "Kitchen modular cabinet deep sanitization",
          "Polishing outer laminate/veneer surfaces"
        ],
        notIncluded: [
          "Carpentry repairs, hinge fixing or lock replacement"
        ],
        hi: {
          name: "अलमारी व कैबिनेट्स",
          trainedTo: [
            "सभी अलमारियों और दराजों के अंदर की वैक्यूमिंग व सफाई",
            "पुराने कागज, धूल और गोंद के निशान हटाना",
            "रसोई के मॉड्यूलर कैबिनेट्स का डीप सैनिटाइजेशन",
            "बाहरी सन्माइका की चमक व सफाई"
          ],
          notIncluded: ["बढ़ई का काम या ताला बदलना"]
        }
      },
      {
        id: "floor-walls-move",
        name: "Floors & Paint Marks",
        icon: "Sparkles",
        image: "/images/services/house_maid.jpg",
        trainedTo: [
          "Safe manual removal of paint drops, cement spatters and tape marks",
          "Machine scrubbing of floor tiles & marble buffing",
          "Window glass adhesive & sticker removal",
          "Disinfecting all switches, door handles & sanitary fittings"
        ],
        notIncluded: [
          "Repainting patches or wall putty repair"
        ],
        hi: {
          name: "फर्श व पेंट के दाग",
          trainedTo: [
            "पेंट की बूंदें, सीमेंट के छींटे व टेप के निशान हटाना",
            "फ्लोर टाइल्स की मशीन से स्क्रबिंग व मार्बल बफिंग",
            "खिड़कियों के कांच से स्टीकर व गोंद हटाना",
            "सभी स्विच, दरवाजे के हैंडल व फिटिंग्स का कीटाणुशोधन"
          ],
          notIncluded: ["दीवारों पर पुट्टी या पेंट करना"]
        }
      }
    ],
    hi: {
      title: "शिफ्टिंग / मूव-इन व मूव-आउट सफाई",
      shortDesc: "नए घर में प्रवेश या पुराने घर को खाली करने से पहले संपूर्ण सैनिटाइजेशन और गहरी सफाई।",
      priceTag: "₹1,999/-",
      badge: "त्वरित सेवा",
      features: ["अलमारी व कैबिनेट्स के अंदर-बाहर की सफाई", "पेंट के दाग व चिपकन के निशान हटाना", "तत्काल शिफ्टिंग के लिए तैयार घर"],
      equipmentNotice: "मेडप्रो सभी भारी मशीनें, स्क्रैपर, टाइल बफिंग मशीन और पेंट रिमूवल सॉल्वैंट्स लाती है।",
      pricingTerms: "तत्काल शिफ्टिंग के लिए तैयार घर की संपूर्ण गहरी सफाई।",
      singleDayHourly: [
        { hours: "1 BHK मूव-इन", rate: "₹1,999", subtext: "पूरी हैंडओवर सफाई" },
        { hours: "2 BHK मूव-इन", rate: "₹2,799", badge: "लोकप्रिय", subtext: "पेंट के दाग हटाने सहित" },
        { hours: "3 BHK मूव-इन", rate: "₹3,699", subtext: "सभी कमरे व बालकनी" },
        { hours: "4 BHK / विला", rate: "₹4,799", subtext: "मल्टी-स्टाफ सर्विस" }
      ]
    },
  },
  {
    id: "window-cleaning",
    stepNumber: "07",
    title: "Window & Glass Cleaning",
    shortDesc: "Crystal clear glass polishing, track dirt vacuuming, grill degreasing, and mosquito mesh washing in Agra.",
    priceTag: "₹399/-",
    badge: "Eco Glass Polish",
    category: "cleaning",
    icon: "Maximize2",
    image: "/images/services/window_cleaning.jpg",
    features: ["Interior & exterior glass polish", "Window sliding track vacuuming", "Mosquito mesh & safety grill clean"],
    equipmentNotice: "All glass squeegees, telescopic poles, magnetic cleaners & streak-free glass chemicals provided.",
    pricingTerms: "Per-window and whole-house glass cleaning packages with zero water stains.",
    singleDayHourly: [
      { hours: "Up to 3 Windows", rate: "₹399", subtext: "Glass Polish + Track Scrub" },
      { hours: "4 to 6 Windows", rate: "₹699", badge: "Popular", subtext: "Includes Mesh Cleaning" },
      { hours: "Full Apartment Windows (7-10)", rate: "₹1,199", subtext: "Balcony Glass Included" },
      { hours: "Villa / Large Glass Facade", rate: "₹1,599", subtext: "Telescopic High-Reach Polish" }
    ],
    inclusionTabs: [
      {
        id: "window-glass",
        name: "Glass Polish & Tracks",
        icon: "Maximize2",
        image: "/images/services/window_cleaning.jpg",
        trainedTo: [
          "Streak-free cleaning of internal & external glass panes",
          "Vacuuming dirt, dead insects & sand from sliding channels",
          "Scrubbing and wiping aluminum/UPVC frame borders",
          "Removing tape, glue and water stain marks"
        ],
        notIncluded: [
          "External high-rise glass hanging without safety scaffolding",
          "Glass crack or sealant replacement"
        ],
        hi: {
          name: "कांच पॉलिश व ट्रैक",
          trainedTo: [
            "कांच के दोनों तरफ बिना दाग की चमकदार पॉलिश",
            "स्लाइडिंग ट्रैक से धूल और रेत की वैक्यूमिंग",
            "एल्युमिनियम व UPVC फ्रेम की स्क्रबिंग",
            "पानी और टेप के निशान हटाना"
          ],
          notIncluded: ["बिना सुरक्षा के ऊंची इमारत पर लटकना"]
        }
      },
      {
        id: "mesh-grills",
        name: "Mosquito Mesh & Grills",
        icon: "ShieldCheck",
        image: "/images/services/window_cleaning.jpg",
        trainedTo: [
          "Detaching and washing mosquito wire mesh screens",
          "Wiping & degreasing iron safety grills and railings",
          "Dusting sunshade chajjas and window sills"
        ],
        notIncluded: [
          "Repainting rusted iron grills"
        ],
        hi: {
          name: "मच्छर जाली व ग्रिल",
          trainedTo: [
            "मच्छर जाली को निकालकर पानी से धोना",
            "लोहे की सुरक्षा ग्रिल और रेलिंग की सफाई",
            "खिड़की के छज्जों व किनारों की डस्टिंग"
          ],
          notIncluded: ["जंग लगी ग्रिल पर पेंट करना"]
        }
      }
    ],
    hi: {
      title: "खिड़कियों व कांच की सफाई (अंदर व बाहर)",
      shortDesc: "कांच की चमकदार पॉलिशिंग, ग्रिल की सफाई, स्लाइडिंग ट्रैक की वैक्यूमिंग और जाली की धुलाई।",
      priceTag: "₹399/-",
      badge: "ग्लास पॉलिश",
      features: ["खिड़की के कांच की अंदर व बाहर पॉलिशिंग", "स्लाइडिंग चैनल और ट्रैक की वैक्यूमिंग", "मच्छर जाली और सेफ्टी ग्रिल की धुलाई"],
      equipmentNotice: "सभी ग्लास स्क्वीजी, मैग्नेटिक क्लीनर और केमिकल मेडप्रो टीम लाती है।",
      singleDayHourly: [
        { hours: "3 खिड़कियां तक", rate: "₹399", subtext: "कांच पॉलिश + ट्रैक सफाई" },
        { hours: "4 से 6 खिड़कियां", rate: "₹699", badge: "लोकप्रिय", subtext: "जाली धुलाई सहित" },
        { hours: "पूरे फ्लैट की खिड़कियां (7-10)", rate: "₹1,199", subtext: "बालकनी ग्लास सहित" },
        { hours: "विला / बड़ा ग्लास फसाड", rate: "₹1,599", subtext: "हाई-रीच पॉलिश" }
      ]
    },
  },
  {
    id: "office-cleaning",
    stepNumber: "08",
    title: "Office and Workplace Cleaning",
    shortDesc: "Spotless commercial, clinic, and corporate housekeeping to maintain an immaculate professional work atmosphere in Agra.",
    priceTag: "Custom Quote",
    badge: "GST Invoice",
    category: "cleaning",
    icon: "Building2",
    image: "/images/services/office_cleaning.jpg",
    features: ["Workstation dusting & cable neatness", "Washroom & pantry deep sanitization", "After-hours disruption-free service"],
    equipmentNotice: "Commercial floor scrubbers, HEPA vacuum cleaners, and corporate sanitization supplies included.",
    pricingTerms: "Custom packages with GST invoicing for Agra commercial establishments, clinics, co-working & retail shops.",
    singleDayHourly: [
      { hours: "Small Office (<1,000 sq ft)", rate: "₹2,499", subtext: "1-Time Deep Clean" },
      { hours: "Medium Office (1k-2.5k sq ft)", rate: "₹4,499", subtext: "Desks + Washrooms + Pantry" },
      { hours: "Large Corporate (>2.5k sq ft)", rate: "Custom Quote", subtext: "GST Invoice Available" }
    ],
    monthlySlabs: [
      { hours: "Daily Office Housekeeping (Part-Time)", rate: "₹7,500 / mo", subtext: "Morning/Evening Shift" },
      { hours: "Full-Time Dedicated Office Boy / Maid", rate: "₹12,000 / mo", subtext: "8-9 Hours / Day" }
    ],
    inclusionTabs: [
      {
        id: "office-desks",
        name: "Workstations & Tech",
        icon: "Building2",
        image: "/images/services/office_cleaning.jpg",
        trainedTo: [
          "Microfiber wiping of desks, monitor screens & keyboard trays",
          "Conference room table polish & whiteboard cleaning",
          "Reception area, glass door and waiting lounge upkeep",
          "Emptying all individual desk bins & paper shredders"
        ],
        notIncluded: [
          "Unplugging complex server rack cabling",
          "Handling confidential client files"
        ],
        hi: {
          name: "वर्कस्टेशन व डेस्क",
          trainedTo: [
            "डेस्क, मॉनिटर स्क्रीन व कीबोर्ड की माइक्रोफाइबर सफाई",
            "कॉन्फ्रेंस रूम की टेबल व व्हाइटबोर्ड की सफाई",
            "रिसेप्शन एरिया और कांच के दरवाजों की सफाई",
            "डस्टबिन खाली करना व कचरा हटाना"
          ],
          notIncluded: ["सर्वर केबल छेड़ना या गोपनीय फाइलें देखना"]
        }
      },
      {
        id: "office-pantry",
        name: "Pantry & Restrooms",
        icon: "Droplet",
        image: "/images/services/deep_clean.jpg",
        trainedTo: [
          "Coffee machine exterior, water dispenser & microwave sanitization",
          "Commercial washroom tile descaling & odor control",
          "Refilling hand soaps, tissue rolls & air fresheners",
          "Floor machine mopping with hospital-grade disinfectant"
        ],
        notIncluded: [
          "Repairing commercial espresso machines or plumbing lines"
        ],
        hi: {
          name: "पेंट्री व वॉशरूम",
          trainedTo: [
            "कॉफी मशीन, वाटर डिस्पेंसर व माइक्रोवेव की सफाई",
            "ऑफिस वॉशरूम का डीप सैनिटाइजेशन व दुर्गंध निवारण",
            "हैंड सोप और टिशू का उचित रख-रखाव",
            "हॉस्पिटल-ग्रेड फिनाइल से फर्श की सफाई"
          ],
          notIncluded: ["प्लंबिंग या मशीन की मरम्मत"]
        }
      }
    ],
    hi: {
      title: "ऑफिस व कार्यस्थल की सफाई",
      shortDesc: "आगरा में ऑफिस, क्लिनिक और व्यावसायिक प्रतिष्ठानों के लिए पेशेवर व स्वच्छ वातावरण।",
      priceTag: "कस्टम कोटेशन",
      badge: "जीएसटी बिल उपलब्ध",
      features: ["वर्कस्टेशन व डेस्क की सफाई व डस्टिंग", "वॉशरूम व पेंट्री का डीप सैनिटाइजेशन", "काम के समय में कोई रुकावट नहीं"],
      equipmentNotice: "कमर्शियल फ्लोर स्क्रबर, HEPA वैक्यूम क्लीनर और ऑफिस सैनिटाइजेशन सामग्री शामिल है।",
      pricingTerms: "जीएसटी इनवॉइस के साथ आगरा के ऑफिसों और दुकानों के लिए कस्टम प्लान।"
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
