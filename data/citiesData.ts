export interface CityRateItem {
  service: string;
  hiService: string;
  shift: string;
  hiShift: string;
  rate: string;
  badge?: string;
  popular?: boolean;
}

export interface CityFaqItem {
  question: string;
  answer: string;
  hiQuestion?: string;
  hiAnswer?: string;
}

export interface CityInfo {
  slug: string;
  name: string;
  hiName: string;
  state: string;
  hiState: string;
  region: string;
  tagline: string;
  hiTagline: string;
  description: string;
  hiDescription: string;
  address: string;
  pincode: string;
  geo: {
    lat: string;
    lng: string;
  };
  phone: string;
  hasGbpVerification: boolean;
  gbpName?: string;
  verifiedStaffCount: number;
  avgResponseTime: string;
  salaryRates?: CityRateItem[];
  faqs?: CityFaqItem[];
  localities: {
    slug: string;
    name: string;
    hiName: string;
    pincode: string;
    landmarks?: string[];
  }[];
}

export const CITIES_DATA: Record<string, CityInfo> = {
  agra: {
    slug: "agra",
    name: "Agra",
    hiName: "आगरा",
    state: "Uttar Pradesh",
    hiState: "उत्तर प्रदेश",
    region: "Braj Mandal",
    tagline: "100% Police-Verified House Maids, Cooks & Deep Cleaning in Agra",
    hiTagline: "आगरा में 100% पुलिस-सत्यापित घरेलू मेड, रसोइया व डीप क्लीनिंग सेवा",
    description: "MaidPro is Agra's leading domestic staffing and deep cleaning provider. Serving independent kothis, apartments, and commercial offices across Khandari, Dayalbagh, Kamla Nagar, Sikandra, and Bodla with verified helpers, zero advance booking, and free instant replacement guarantee.",
    hiDescription: "MaidPro आगरा की प्रमुख घरेलू सहायक और डीप क्लीनिंग सेवा है। खंदारी, दयालबाग, कमला नगर, सिकंदरा और बोदला में बिना अग्रिम भुगतान और मुफ्त रिप्लेसमेंट गारंटी के साथ सत्यापित स्टाफ।",
    address: "Avas Vikas Colony, Bodla, Agra, Uttar Pradesh 282007",
    pincode: "282007",
    geo: { lat: "27.1767", lng: "78.0081" },
    phone: "+919321034262",
    hasGbpVerification: true,
    gbpName: "Maid Pro Solution 4 You - House Maid & Deep Cleaning Agra",
    verifiedStaffCount: 85,
    avgResponseTime: "1 to 2 Hours",
    localities: [
      { slug: "khandari", name: "Khandari", hiName: "खंदारी", pincode: "282002", landmarks: ["Khandari Crossing", "RBS College Road", "Lajpat Kunj"] },
      { slug: "dayalbagh", name: "Dayalbagh", hiName: "दयालबाग", pincode: "282005", landmarks: ["Adan Bagh", "Nagla Padi", "Radhasoami Satsang"] },
      { slug: "kamla-nagar", name: "Kamla Nagar", hiName: "कमला नगर", pincode: "282004", landmarks: ["Block A-F", "Balkeshwar Road", "Sultan Ganj"] },
      { slug: "sanjay-place", name: "Sanjay Place", hiName: "संजय प्लेस", pincode: "282002", landmarks: ["Commercial Complex", "LIC Building", "Civil Court"] },
      { slug: "sikandra", name: "Sikandra", hiName: "सिकंदरा", pincode: "282007", landmarks: ["Bhawna Estate", "Guru Ka Tal", "Highway City"] },
      { slug: "bodla", name: "Bodla", hiName: "बोदला", pincode: "282007", landmarks: ["Awas Vikas Colony", "Sector 7-12", "Maruti Estate"] },
      { slug: "civil-lines", name: "Civil Lines", hiName: "सिविल लाइंस", pincode: "282002", landmarks: ["Church Road", "Police Lines", "Raja Ki Mandi"] },
      { slug: "fatehabad-road", name: "Fatehabad Road", hiName: "फतेहाबाद रोड", pincode: "282001", landmarks: ["Tourist Hub", "Taj East Gate", "Vibhav Nagar"] },
      { slug: "tajganj", name: "Tajganj", hiName: "ताजगंज", pincode: "282001", landmarks: ["Shilpgram", "Basai", "Fatehabad Road Link"] },
      { slug: "awas-vikas-colony", name: "Awas Vikas Colony", hiName: "आवास विकास कॉलोनी", pincode: "282007", landmarks: ["Sector 1 to 16", "Kargil Petrol Pump", "Bodla Link"] },
      { slug: "shahganj", name: "Shahganj", hiName: "शाहगंज", pincode: "282010", landmarks: ["Kheria Airport Road", "Chhipitola", "Prathvi Nath"] },
    ]
  },
  ghaziabad: {
    slug: "ghaziabad",
    name: "Ghaziabad",
    hiName: "गाजियाबाद",
    state: "Uttar Pradesh",
    hiState: "उत्तर प्रदेश (एनसीआर)",
    region: "Delhi NCR",
    tagline: "Verified Domestic Maids, Full-Time Cooks & Housekeeping in Ghaziabad NCR",
    hiTagline: "गाजियाबाद व एनसीआर में सत्यापित घरेलू मेड, रसोइया और हाउसकीपिंग",
    description: "Hire background-checked domestic maids, experienced cooks, babysitters, and full-time live-in helpers in Ghaziabad. Fast dispatch across high-rise societies in Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension, and Crossings Republik.",
    hiDescription: "गाजियाबाद के इंदिरापुरम, वैशाली, वसुंधरा, राज नगर एक्सटेंशन और क्रॉसिंग्स रिपब्लिक की हाई-राइज सोसायटियों के लिए 100% पुलिस-सत्यापित मेड, रसोइया और नानी सेवा।",
    address: "Lal Kuan, Ghaziabad, Uttar Pradesh 201009",
    pincode: "201009",
    geo: { lat: "28.6692", lng: "77.4538" },
    phone: "+919321034262",
    hasGbpVerification: true,
    gbpName: "Maid pro solution 4 you TRUST GROUP - Ghaziabad",
    verifiedStaffCount: 110,
    avgResponseTime: "1 to 3 Hours",
    localities: [
      { slug: "indirapuram", name: "Indirapuram", hiName: "इंदिरापुरम", pincode: "201014", landmarks: ["Ahinsa Khand", "Vaibhav Khand", "Nyay Khand", "Shipra Mall Area"] },
      { slug: "vaishali", name: "Vaishali", hiName: "वैशाली", pincode: "201010", landmarks: ["Sector 1 to 9", "Mahagun Mall", "Vaishali Metro Station"] },
      { slug: "vasundhara", name: "Vasundhara", hiName: "वसुंधरा", pincode: "201012", landmarks: ["Sector 1 to 18", "Mewar Institute Road", "Atal Chowk"] },
      { slug: "raj-nagar-extension", name: "Raj Nagar Extension", hiName: "राज नगर एक्सटेंशन", pincode: "201017", landmarks: ["NH-58 Bypass", "River Heights", "KW Srishti Area"] },
      { slug: "crossings-republik", name: "Crossings Republik", hiName: "क्रॉसिंग्स रिपब्लिक", pincode: "201016", landmarks: ["GH-7", "Panchsheel Wellington", "ABES Engineering Link"] },
      { slug: "kaushambi", name: "Kaushambi", hiName: "कौशाम्बी", pincode: "201010", landmarks: ["Wave Cinemas Area", "Kaushambi Metro", "Anand Vihar Border"] },
      { slug: "lal-kuan", name: "Lal Kuan", hiName: "लाल कुआं", pincode: "201009", landmarks: ["GT Road", "Chhapraula Road", "Mahurali Hub"] },
      { slug: "kavi-nagar", name: "Kavi Nagar", hiName: "कवि नगर", pincode: "201002", landmarks: ["Block A to M", "Diamond Flyover", "Ingraham Institute"] },
      { slug: "nehru-nagar", name: "Nehru Nagar", hiName: "नेहरू नगर", pincode: "201001", landmarks: ["Nehru Nagar II & III", "Yashoda Hospital Area"] },
    ]
  },
  "kalyan-mumbai": {
    slug: "kalyan-mumbai",
    name: "Kalyan (Mumbai MMR)",
    hiName: "कल्याण (मुंबई)",
    state: "Maharashtra",
    hiState: "महाराष्ट्र (मुंबई एमएमआर)",
    region: "Thane / Mumbai MMR",
    tagline: "100% Verified Housemaids, Cooks (Veg/Non-Veg), Live-In Maids & Babysitters in Kalyan West & East",
    hiTagline: "कल्याण पश्चिम व पूर्व में 100% पुलिस-सत्यापित घरेलू मेड, कुक, 24 घंटे लाइव-इन मेड व नानी सेवा",
    description: "MaidPro is Kalyan's trusted domestic staff and cleaning provider. Connect with Aadhaar & Police-verified part-time maids, full-time live-in maids, expert veg/non-veg cooks, newborn Japa caregivers, patient attendants, and deep house cleaners across Kalyan West, Kalyan East, Khadakpada, and Dombivli with zero advance placement commission and instant backup replacements.",
    hiDescription: "कल्याण पश्चिम, कल्याण पूर्व, खड़कपाड़ा, वसंत वैली और डोंबिवली के लिए 100% पुलिस-सत्यापित पार्ट-टाइम व 24 घंटे लाइव-इन मेड, शाकाहारी व मांसाहारी कुक, जापा केयर और पेशेंट अटेंडेंट। बिना किसी अग्रिम प्लेसमेंट कमीशन और तुरंत मुफ्त रिप्लेसमेंट के साथ।",
    address: "Vasant Valley Road, Kalyan West, Kadakpada, Kalyan, Maharashtra 421301",
    pincode: "421301",
    geo: { lat: "19.2403", lng: "73.1305" },
    phone: "+919321034262",
    hasGbpVerification: true,
    gbpName: "Maid & Plumber pro solution 4 you Trust - Kalyan",
    verifiedStaffCount: 115,
    avgResponseTime: "1 to 3 Hours",
    salaryRates: [
      {
        service: "Part-Time House Maid (Sweeping, Mopping & Vessels)",
        hiService: "पार्ट-टाइम मेड (झाड़ू, पोछा व बर्तन)",
        shift: "1 to 2 Hours daily",
        hiShift: "1 से 2 घंटे प्रतिदिन",
        rate: "₹2,500 – ₹4,000 / month",
        badge: "Most Requested",
        popular: true,
      },
      {
        service: "Home Cook (Veg & Non-Veg, Maharashtrian / North Indian)",
        hiService: "घरेलू कुक (वेज व नॉन-वेज खाना)",
        shift: "1 Time Daily (Lunch or Dinner)",
        hiShift: "1 समय (लंच या डिनर)",
        rate: "₹3,000 – ₹4,500 / month",
        badge: "Custom Meals",
      },
      {
        service: "Home Cook (Both Lunch & Dinner Daily)",
        hiService: "घरेलू कुक (दोनों समय भोजन)",
        shift: "2 Times Daily (Lunch + Dinner)",
        hiShift: "दोपहर व रात का खाना",
        rate: "₹5,500 – ₹8,000 / month",
        badge: "Full Kitchen",
        popular: true,
      },
      {
        service: "Full-Time Day Maid (Cleaning + Cooking + Laundry)",
        hiService: "फुल-डे मेड (सफाई + खाना + कपड़े)",
        shift: "8 to 10 Hours daily",
        hiShift: "8 से 10 घंटे प्रतिदिन",
        rate: "₹11,000 – ₹15,000 / month",
        badge: "Day Helper",
      },
      {
        service: "24-Hour Live-In Maid (Complete Home Management)",
        hiService: "24 घंटे लाइव-इन मेड (संपूर्ण घरेलू सहायता)",
        shift: "24 Hours (Stay-at-home)",
        hiShift: "24 घंटे रहना और देखभाल",
        rate: "₹20,000 – ₹25,000 / month",
        badge: "24hr Live-In",
        popular: true,
      },
      {
        service: "Japa Maid (Postnatal Newborn & Mother Care)",
        hiService: "जापा मेड (नवजात शिशु व जच्चा मालिश व देखभाल)",
        shift: "24 Hours Live-In (30 to 45 Days)",
        hiShift: "24 घंटे (सवा महीना देखभाल)",
        rate: "₹25,000 – ₹32,000 / month",
        badge: "Certified Japa",
      },
      {
        service: "Babysitter & Nanny (Childcare & Play)",
        hiService: "बेबीसिटर व नानी केयर",
        shift: "8 to 10 Hours / 24 Hours",
        hiShift: "8-10 घंटे या 24 घंटे",
        rate: "₹12,000 – ₹22,000 / month",
        badge: "Trained Nanny",
      },
      {
        service: "Elderly Care & Bedside Patient Attendant",
        hiService: "बुजुर्ग व मरीज देखभाल सहायक",
        shift: "12 Hours / 24 Hours Live-In",
        hiShift: "12 घंटे या 24 घंटे शिफ्ट",
        rate: "₹14,000 – ₹24,000 / month",
        badge: "Tender Care",
      },
      {
        service: "Full House Deep Cleaning (1BHK / 2BHK / 3BHK)",
        hiService: "फुल होम डीप क्लीनिंग (मशीन स्क्रबिंग)",
        shift: "Single-day 4-6 Hours Session",
        hiShift: "सिंगल डे 4-6 घंटे सेशन",
        rate: "₹1,499 – ₹2,999 / session",
        badge: "Machine Scrub",
      },
    ],
    faqs: [
      {
        question: "How much does a part-time maid cost in Kalyan West and Kalyan East?",
        answer: "In Kalyan West and Kalyan East, part-time maids for basic sweeping, mopping, and utensil washing (vessels) typically charge ₹2,500 to ₹4,000 per month depending on apartment size (1 BHK vs 2 BHK) and family count. We provide fixed, transparent monthly slabs with zero broker commission.",
        hiQuestion: "कल्याण पश्चिम और पूर्व में पार्ट-टाइम मेड का मासिक वेतन कितना होता है?",
        hiAnswer: "कल्याण पश्चिम व पूर्व में 1 BHK और 2 BHK फ्लैट्स के लिए झाड़ू-पोछा और बर्तन मांजने का मासिक वेतन ₹2,500 से ₹4,000 के बीच होता है। मेडप्रो में कोई अतिरिक्त एजेंट कमीशन नहीं होता।"
      },
      {
        question: "Can I hire a veg and non-veg cook for home in Kalyan West Mumbai?",
        answer: "Yes, absolutely! We connect households with experienced home cooks specialized in Maharashtrian, North Indian, Gujarati, and South Indian cuisines. Whether you need vegetarian meals, chicken/mutton dishes, or coastal fish curry, our cooks handle breakfast, lunch, and dinner with complete kitchen hygiene.",
        hiQuestion: "क्या कल्याण में वेज और नॉन-वेज दोनों तरह का खाना बनाने वाले कुक मिलते हैं?",
        hiAnswer: "हाँ, बिल्कुल! हमारे पास महाराष्ट्रीयन, नॉर्थ इंडियन, गुजराती और साउथ इंडियन खाना बनाने वाले अनुभवी रसोइये हैं जो शाकाहारी व मांसाहारी भोजन शुद्धता और स्वच्छता के साथ तैयार करते हैं।"
      },
      {
        question: "Do you provide 24 hours live-in maids and Japa maids in Kalyan?",
        answer: "Yes. For busy families, working couples, and households requiring round-the-clock help, we provide background-verified 24-hour live-in maids (₹20,000 – ₹25,000/mo) and certified postnatal Japa maids (₹25,000 – ₹32,000/mo) for traditional newborn baby massage, feeding, and new mother recovery care.",
        hiQuestion: "क्या कल्याण में 24 घंटे लाइव-इन मेड और जापा मेड की सुविधा उपलब्ध है?",
        hiAnswer: "हाँ! हम कल्याण और डोंबिवली में 24 घंटे रहने वाली लाइव-इन मेड (₹20,000 - ₹25,000/माह) और नवजात शिशु व जच्चा देखभाल के लिए अनुभवी जापा मेड (₹25,000 - ₹32,000/माह) उपलब्ध कराते हैं।"
      },
      {
        question: "How are domestic helpers verified in Kalyan (Mumbai MMR)?",
        answer: "Every helper undergoes mandatory government UIDAI Aadhaar verification, permanent and local address checks, and Thane Police background verification assistance. We provide client identity records prior to placement for total family safety.",
        hiQuestion: "कल्याण में घरेलू सहायकों का सत्यापन (Verification) कैसे किया जाता है?",
        hiAnswer: "प्रत्येक मेड, कुक और आया का यूआईडीएआई (आधार कार्ड) प्रमाणीकरण, निवास सत्यापन और ठाणे पुलिस वेरिफिकेशन रिकॉर्ड चेक किया जाता है ताकि आपके परिवार की सुरक्षा 100% सुनिश्चित रहे।"
      },
      {
        question: "Why choose MaidPro over traditional maid bureaus or Sulekha / BookMyBai in Kalyan?",
        answer: "Unlike traditional agencies that charge 1 month's salary upfront as non-refundable placement commission, MaidPro charges zero advance commission. You pay directly, receive 3-month free instant backup replacements within 24–48 hours if your helper is absent or leaves, and have a dedicated local coordinator reachable on +91 93210 34262.",
        hiQuestion: "कल्याण में अन्य एजेंसियों या सुलेखा / बुकमाईबाई की तुलना में मेडप्रो क्यों बेहतर है?",
        hiAnswer: "पारंपरिक एजेंसियां 1 महीने का पूरा वेतन कमीशन के रूप में अग्रिम ले लेती हैं। मेडप्रो में कोई अग्रिम एजेंट कमीशन नहीं है, मेड की अनुपस्थिति पर 24-48 घंटे में तुरंत मुफ्त रिप्लेसमेंट मिलता है और पूरा पारदर्शी सपोर्ट दिया जाता है।"
      }
    ],
    localities: [
      { slug: "khadakpada", name: "Khadakpada", hiName: "खड़कपाड़ा", pincode: "421301", landmarks: ["Khadakpada Circle", "Godrej Hill Link", "Birla College Road"] },
      { slug: "vasant-valley", name: "Vasant Valley", hiName: "वसंत वैली", pincode: "421301", landmarks: ["Vasant Valley Complex", "Gandhar Nagar", "Wayle Nagar Link"] },
      { slug: "kalyan-west", name: "Kalyan West", hiName: "कल्याण पश्चिम", pincode: "421301", landmarks: ["Station Road", "Syndicate", "Rambaug", "Chikan Ghar"] },
      { slug: "kalyan-east", name: "Kalyan East", hiName: "कल्याण पूर्व", pincode: "421306", landmarks: ["Katemanivali", "Chinchpada", "Tisgaon", "Kolsewadi", "Netivali"] },
      { slug: "dombivli-east", name: "Dombivli East", hiName: "डोंबिवली पूर्व", pincode: "421201", landmarks: ["Manpada Road", "MIDC Residential", "Lodha Palava Link"] },
      { slug: "dombivli-west", name: "Dombivli West", hiName: "डोंबिवली पश्चिम", pincode: "421202", landmarks: ["Gupte Road", "Reti Bunder", "Vishnunagar"] },
      { slug: "palava", name: "Lodha Palava", hiName: "लोढा पलावा", pincode: "421204", landmarks: ["Palava Phase 1 & 2", "Kalyan-Shil Road", "Casa Bella", "Lakeshore Greens"] },
      { slug: "wayle-nagar", name: "Wayle Nagar", hiName: "वायले नगर", pincode: "421301", landmarks: ["Wayle Nagar Garden", "Murbad Road Link"] },
      { slug: "gandhinagar-kalyan", name: "Gandhinagar", hiName: "गांधीनगर", pincode: "421301", landmarks: ["Tilak Chowk", "Bail Bazar", "Shivaji Chowk"] },
      { slug: "birla-college-road", name: "Birla College Road", hiName: "बिरला कॉलेज रोड", pincode: "421301", landmarks: ["BK Birla College", "Chikanghar", "Yogi Dham"] },
      { slug: "shahad", name: "Shahad", hiName: "शहाड", pincode: "421103", landmarks: ["Century Rayon Colony", "Shahad Station", "Murbad Road", "Waldhuni"] },
    ]
  },
  jaipur: {
    slug: "jaipur",
    name: "Jaipur",
    hiName: "जयपुर",
    state: "Rajasthan",
    hiState: "राजस्थान",
    region: "Pink City",
    tagline: "Verified Domestic Maids, Rajasthani & North Indian Cooks in Jaipur",
    hiTagline: "जयपुर में सत्यापित घरेलू मेड, रसोइया और डीप क्लीनिंग सेवा",
    description: "Connecting Jaipur kothis, apartments, and villas with etiquette-trained housemaids, pure vegetarian Marwari & North Indian cooks, babysitters, and professional deep cleaners across Vaishali Nagar, Malviya Nagar, Mansarovar, and C-Scheme.",
    hiDescription: "जयपुर के वैशाली नगर, मालवीय नगर, मानसरोवर और सी-स्कीम में पुलिस-सत्यापित घरेलू मेड, शुद्ध शाकाहारी मारवाड़ी व नॉर्थ इंडियन रसोइये और डीप क्लीनर्स।",
    address: "Vaishali Nagar / Malviya Nagar Hub, Jaipur, Rajasthan 302021",
    pincode: "302021",
    geo: { lat: "26.9124", lng: "75.7873" },
    phone: "+919321034262",
    hasGbpVerification: false,
    verifiedStaffCount: 75,
    avgResponseTime: "2 to 3 Hours",
    localities: [
      { slug: "vaishali-nagar", name: "Vaishali Nagar", hiName: "वैशाली नगर", pincode: "302021", landmarks: ["Amrapali Circle", "National Handloom", "Gandhi Path"] },
      { slug: "malviya-nagar", name: "Malviya Nagar", hiName: "मालवीय नगर", pincode: "302017", landmarks: ["World Trade Park (WTP)", "Gaurav Tower", "Calgiri Marg"] },
      { slug: "mansarovar", name: "Mansarovar", hiName: "मानसरोवर", pincode: "302020", landmarks: ["VT Road", "Thadi Market", "Varun Path", "Mansarovar Metro"] },
      { slug: "c-scheme", name: "C-Scheme", hiName: "सी-स्कीम", pincode: "302001", landmarks: ["Statue Circle", "Ahinsa Circle", "Prithviraj Road"] },
      { slug: "raja-park", name: "Raja Park", hiName: "राजा पार्क", pincode: "302004", landmarks: ["LBS College Road", "Govind Marg", "Tilak Nagar Link"] },
      { slug: "jagatpura", name: "Jagatpura", hiName: "जगतपुरा", pincode: "302017", landmarks: ["Mahal Road", "SKIT College Area", "Seven Crystal Area"] },
      { slug: "tonk-road", name: "Tonk Road", hiName: "टोंक रोड", pincode: "302018", landmarks: ["Barkat Nagar", "Mahaveer Nagar", "Gopalpura Bypass"] },
      { slug: "ajmer-road", name: "Ajmer Road", hiName: "अजमेर रोड", pincode: "302006", landmarks: ["DCM Ajmer Road", "Purani Chungi", "Heerapura"] },
    ]
  },
  gwalior: {
    slug: "gwalior",
    name: "Gwalior",
    hiName: "ग्वालियर",
    state: "Madhya Pradesh",
    hiState: "मध्य प्रदेश",
    region: "Chambal / Gwalior Division",
    tagline: "Verified Domestic Maids, Cooks & Attendants in Gwalior",
    hiTagline: "ग्वालियर में 100% सत्यापित घरेलू मेड, कुक व केयरटेकर",
    description: "MaidPro provides trusted, police-verified domestic helpers across City Center, Morar, Lashkar, Thatipur, and DD Nagar in Gwalior. Available for daily 2-hr shifts, full day help, and 24-hr live-in maids.",
    hiDescription: "ग्वालियर के सिटी सेंटर, मुरार, लश्कर, थाटीपुर और डीडी नगर में 100% पुलिस-सत्यापित घरेलू मेड, कुक और पेशेंट केयर सहायक।",
    address: "City Center Hub, Gwalior, Madhya Pradesh 474011",
    pincode: "474011",
    geo: { lat: "26.2183", lng: "78.1828" },
    phone: "+919321034262",
    hasGbpVerification: false,
    verifiedStaffCount: 60,
    avgResponseTime: "2 to 3 Hours",
    localities: [
      { slug: "city-center", name: "City Center", hiName: "सिटी सेंटर", pincode: "474011", landmarks: ["Patel Nagar", "Collectorate Area", "Kailash Vihar"] },
      { slug: "morar", name: "Morar", hiName: "मुरार", pincode: "474006", landmarks: ["Morar Cantt", "Sun Temple Road", "Kalpi Bridge Link"] },
      { slug: "lashkar", name: "Lashkar", hiName: "लश्कर", pincode: "474001", landmarks: ["Bada Chowk", "Jayendraganj", "Sarafa Bazar"] },
      { slug: "thatipur", name: "Thatipur", hiName: "थाटीपुर", pincode: "474011", landmarks: ["Govindpuri", "Mayur Nagar", "Darpan Colony"] },
      { slug: "dd-nagar", name: "DD Nagar", hiName: "डीडी नगर", pincode: "474005", landmarks: ["Deen Dayal Nagar Sector 1-4", "Airport Road Link"] },
      { slug: "alkapuri", name: "Alkapuri", hiName: "अलकापुरी", pincode: "474002", landmarks: ["University Road", "Govindpuri Link", "Mahalgaon"] },
    ]
  },
  aligarh: {
    slug: "aligarh",
    name: "Aligarh",
    hiName: "अलीगढ़",
    state: "Uttar Pradesh",
    hiState: "उत्तर प्रदेश",
    region: "Western UP",
    tagline: "Verified Domestic Housemaids & Cooks in Aligarh",
    hiTagline: "अलीगढ़ में 100% सत्यापित घरेलू मेड, कुक व हाउसकीपिंग",
    description: "Trusted housemaids, daily cooks, and babysitters in Aligarh. Serving Center Point, Civil Lines, Ramghat Road, Swarna Jayanti Nagar, and Medical Road with same-day trial and verified staff.",
    hiDescription: "अलीगढ़ के सेंटर पॉइंट, सिविल लाइंस, रामघाट रोड, स्वर्ण जयंती नगर और मेडिकल रोड में घरेलू मेड, रसोइया और डीप क्लीनिंग सेवा।",
    address: "Center Point / Ramghat Road Hub, Aligarh, Uttar Pradesh 202001",
    pincode: "202001",
    geo: { lat: "27.8974", lng: "78.0880" },
    phone: "+919321034262",
    hasGbpVerification: false,
    verifiedStaffCount: 50,
    avgResponseTime: "2 to 4 Hours",
    localities: [
      { slug: "center-point", name: "Center Point", hiName: "सेंटर पॉइंट", pincode: "202001", landmarks: ["Marris Road", "Samad Road", "Railway Station Link"] },
      { slug: "civil-lines-aligarh", name: "Civil Lines", hiName: "सिविल लाइंस", pincode: "202002", landmarks: ["AMU Circle", "Dodhpur", "Anupshahr Road"] },
      { slug: "ramghat-road", name: "Ramghat Road", hiName: "रामघाट रोड", pincode: "202001", landmarks: ["Kishanpur", "Talanagari Link", "Mina Market"] },
      { slug: "swarna-jayanti-nagar", name: "Swarna Jayanti Nagar", hiName: "स्वर्ण जयंती नगर", pincode: "202001", landmarks: ["Sector 1-3", "GT Road Link", "Sarsol"] },
      { slug: "medical-road", name: "Medical Road", hiName: "मेडिकल रोड", pincode: "202002", landmarks: ["JNMC Area", "Zakur Nagar", "Tariq Wali Gali"] },
      { slug: "gt-road-aligarh", name: "GT Road", hiName: "जीटी रोड", pincode: "202001", landmarks: ["Sarsol Bypass", "Mahavir Ganj", "Banna Devi"] },
    ]
  },
  mathura: {
    slug: "mathura",
    name: "Mathura",
    hiName: "मथुरा",
    state: "Uttar Pradesh",
    hiState: "उत्तर प्रदेश",
    region: "Braj Bhoomi",
    tagline: "Verified Domestic Maids, Satvik Cooks & Caregivers in Mathura & Vrindavan",
    hiTagline: "मथुरा व वृंदावन में सत्यापित घरेलू मेड, सात्विक कुक व सेवादार",
    description: "Providing police-verified housemaids, hygienic pure vegetarian & Satvik cooks, and senior caregivers across Krishna Nagar, Dampier Nagar, Highway City, and Vrindavan Road in Mathura.",
    hiDescription: "मथुरा और वृंदावन के लिए 100% सत्यापित मेड, सात्विक व शुद्ध शाकाहारी रसोइये और बुजुर्गों की सेवा हेतु प्रशिक्षित सहायक।",
    address: "Krishna Nagar Hub, Mathura, Uttar Pradesh 281001",
    pincode: "281001",
    geo: { lat: "27.4924", lng: "77.6737" },
    phone: "+919321034262",
    hasGbpVerification: false,
    verifiedStaffCount: 45,
    avgResponseTime: "2 to 4 Hours",
    localities: [
      { slug: "krishna-nagar", name: "Krishna Nagar", hiName: "कृष्णा नगर", pincode: "281004", landmarks: ["BSLA Road", "Chandrapuri", "Goverdhan Chauraha"] },
      { slug: "dampier-nagar", name: "Dampier Nagar", hiName: "डैम्पियर नगर", pincode: "281001", landmarks: ["Museum Road", "Civil Lines Mathura", "Junction Link"] },
      { slug: "highway-city", name: "Highway City", hiName: "हाईवे सिटी", pincode: "281006", landmarks: ["NH-19 Bypass", "Radha Valley", "Ganesh City"] },
      { slug: "vrindavan-road", name: "Vrindavan Road", hiName: "वृंदावन रोड", pincode: "281003", landmarks: ["Prem Mandir Link", "Chhatikara Road", "ISKCON Link"] },
      { slug: "goverdhan-road", name: "Goverdhan Road", hiName: "गोवर्धन रोड", pincode: "281004", landmarks: ["Mandi Chauraha", "BSA College Area"] },
      { slug: "radha-valley", name: "Radha Valley", hiName: "राधा वैली", pincode: "281005", landmarks: ["National Highway", "Vrindavan Cut", "Pushp Vihar"] },
    ]
  },
  firozabad: {
    slug: "firozabad",
    name: "Firozabad",
    hiName: "फिरोजाबाद",
    state: "Uttar Pradesh",
    hiState: "उत्तर प्रदेश",
    region: "Suhag Nagari",
    tagline: "Police-Verified Domestic Maids & Home Helpers in Firozabad",
    hiTagline: "फिरोजाबाद में पुलिस-सत्यापित घरेलू मेड व कुक सेवा",
    description: "Reliable domestic housekeeping, sweeping, mopping, and home cooking staff in Firozabad. Serving Suhag Nagar, Kotla Road, SN Road, and Vibhav Nagar with verified helpers and free replacement.",
    hiDescription: "फिरोजाबाद के सुहाग नगर, कोटला रोड, एसएन रोड और विभव नगर में सुरक्षित व सत्यापित घरेलू मेड और रसोइया सेवा।",
    address: "Suhag Nagar / Kotla Road Hub, Firozabad, Uttar Pradesh 283203",
    pincode: "283203",
    geo: { lat: "27.1593", lng: "78.3957" },
    phone: "+919321034262",
    hasGbpVerification: false,
    verifiedStaffCount: 35,
    avgResponseTime: "2 to 4 Hours",
    localities: [
      { slug: "suhag-nagar", name: "Suhag Nagar", hiName: "सुहाग नगर", pincode: "283203", landmarks: ["Sector 1-4", "Gandhi Park Link", "DA Compound"] },
      { slug: "kotla-road", name: "Kotla Road", hiName: "कोटला रोड", pincode: "283203", landmarks: ["Kotla Chauraha", "Dakhin Tola", "Bypass Link"] },
      { slug: "sn-road", name: "SN Road", hiName: "एसएन रोड", pincode: "283203", landmarks: ["Shri Krishna Cinema Area", "Main Market", "Gali Bohran"] },
      { slug: "vibhav-nagar-firozabad", name: "Vibhav Nagar", hiName: "विभव नगर", pincode: "283203", landmarks: ["Jain Mandir Area", "Clerk Colony", "Station Link"] },
      { slug: "gandhi-park", name: "Gandhi Park", hiName: "गांधी पार्क", pincode: "283203", landmarks: ["Club Road", "Collectorate Link", "Hospital Road"] },
    ]
  },
  hathras: {
    slug: "hathras",
    name: "Hathras",
    hiName: "हाथरस",
    state: "Uttar Pradesh",
    hiState: "उत्तर प्रदेश",
    region: "Braj Mandal",
    tagline: "Verified Domestic Maids & Chores Helpers in Hathras",
    hiTagline: "हाथरस में विश्वसनीय घरेलू मेड, सफाई व कुक सेवा",
    description: "Find background-verified domestic maids and cooks across Hathras. Serving Sadabad Gate, Agra Road, Aligarh Road, and Mahaveer Ganj with flexible daily and monthly shifts.",
    hiDescription: "हाथरस में सादाबाद गेट, आगरा रोड, अलीगढ़ रोड और महावीर गंज के परिवारों के लिए सत्यापित घरेलू मेड और कुक।",
    address: "Agra Road / Sadabad Gate Hub, Hathras, Uttar Pradesh 204101",
    pincode: "204101",
    geo: { lat: "27.5968", lng: "78.0519" },
    phone: "+919321034262",
    hasGbpVerification: false,
    verifiedStaffCount: 30,
    avgResponseTime: "2 to 4 Hours",
    localities: [
      { slug: "sadabad-gate", name: "Sadabad Gate", hiName: "सादाबाद गेट", pincode: "204101", landmarks: ["Ramanpur", "Sasni Gate Link", "Main Market"] },
      { slug: "agra-road-hathras", name: "Agra Road", hiName: "आगरा रोड", pincode: "204101", landmarks: ["Bypass Chauraha", "Champa Nagar", "Navgraha Colony"] },
      { slug: "aligarh-road-hathras", name: "Aligarh Road", hiName: "अलीगढ़ रोड", pincode: "204101", landmarks: ["Mandi Samiti Area", "Pariwar Nagar", "Station Link"] },
      { slug: "mahaveer-ganj", name: "Mahaveer Ganj", hiName: "महावीर गंज", pincode: "204101", landmarks: ["Town Hall Area", "Sarafa Gali", "Chini Bazar"] },
      { slug: "navgraha", name: "Navgraha Colony", hiName: "नवग्रह कॉलोनी", pincode: "204101", landmarks: ["Mandir Complex", "Civil Lines Hathras"] },
    ]
  }
};

export const ALL_CITIES = Object.values(CITIES_DATA);
