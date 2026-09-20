export interface ServicePageInfo {
  slug: string;
  serviceId: string;
  title: string;
  hiTitle: string;
  tagline: string;
  hiTagline: string;
  heroHeadline: string;
  heroSubhead: string;
  metaTitle: string;
  metaDesc: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICE_PAGES_DATA: Record<string, ServicePageInfo> = {
  "house-maid-in-agra": {
    slug: "house-maid-in-agra",
    serviceId: "house-maid-hourly",
    title: "House Maid Service in Agra",
    hiTitle: "आगरा में घरेलू मेड व झाड़ू-पोछा सेवा",
    tagline: "100% Police-Verified Daily Housemaids with Flexible Hourly & Monthly Shifts",
    hiTagline: "100% पुलिस-सत्यापित घरेलू मेड - दैनिक झाड़ू-पोछा, बर्तन और हाउसकीपिंग",
    heroHeadline: "Trusted & Verified House Maid Service in Agra",
    heroSubhead: "Hire experienced, police-verified daily domestic helpers for sweeping, mopping, dusting, and dishwashing with zero advance payment and free instant replacement guarantee.",
    metaTitle: "House Maid Service in Agra | Verified Daily & Monthly Maids - MaidPro",
    metaDesc: "Hire 100% police-verified housemaids in Agra. Flexible 1-hour to 24-hour shifts, sweeping, mopping, utensil washing with transparent monthly salary slabs & instant free replacement.",
    faqs: [
      {
        question: "How are housemaids background verified in Agra?",
        answer: "Every maid undergoes mandatory UIDAI Aadhaar verification, address verification, and local police verification before being assigned to any home."
      },
      {
        question: "What if the maid takes leaves or is absent?",
        answer: "We offer an instant backup replacement within 24 hours at zero additional cost whenever your regular helper is unwell or unavailable."
      },
      {
        question: "What are the typical charges for housemaids in Agra?",
        answer: "Monthly salary slabs range transparently: 1 to 2 hours daily costs ~₹3,000 to ₹4,500/month, 4 hours ~₹6,000/month, and full-day (8-10 hours) ~₹10,000 to ₹14,000/month."
      }
    ]
  },
  "deep-cleaning-agra": {
    slug: "deep-cleaning-agra",
    serviceId: "deep-clean",
    title: "Deep House Cleaning in Agra",
    hiTitle: "आगरा में डीप हाउस क्लीनिंग सेवा",
    tagline: "Hospital-Grade Intensive Cleaning, Kitchen & Bathroom Descaling",
    hiTagline: "अस्पताल-ग्रेड गहन सफाई, किचन व बाथरूम डीप सैनिटाइजेशन",
    heroHeadline: "Professional Deep House Cleaning in Agra",
    heroSubhead: "Transform your home with industrial single-disc floor scrubbers, high-pressure steam machines, and eco-friendly chemicals. 100% satisfaction guaranteed.",
    metaTitle: "Deep House Cleaning in Agra | 100% Sanitized & Scrubbed - MaidPro",
    metaDesc: "Professional deep cleaning service in Agra for 1BHK to 5BHK villas. Intensive bathroom descaling, kitchen degreasing, sofa & floor scrubbing with modern machines.",
    faqs: [
      {
        question: "Do you bring your own cleaning machines and chemicals?",
        answer: "Yes, our deep cleaning team brings heavy-duty single-disc scrubbers, industrial wet & dry vacuums, steam cleaners, and Diversey eco-friendly cleaning chemicals."
      },
      {
        question: "How much time does a full house deep cleaning take?",
        answer: "A standard 2BHK/3BHK apartment takes approximately 4 to 6 hours with a dedicated team of 3 to 4 trained cleaning professionals."
      },
      {
        question: "Can I book same-day deep cleaning in Agra?",
        answer: "Yes! We can dispatch a cleaning team within 2 to 4 hours across Khandari, Dayalbagh, Kamla Nagar, Sanjay Place, and other major Agra areas."
      }
    ]
  },
  "cook-in-agra": {
    slug: "cook-in-agra",
    serviceId: "all-in-one-help",
    title: "Cook & Kitchen Sanitization in Agra",
    hiTitle: "आगरा में घरेलू रसोइया व कुक सेवा",
    tagline: "Hygienic Vegetarian & Multi-Cuisine Home Cooks in Agra",
    hiTagline: "स्वच्छ शाकाहारी व स्वादिष्ट भोजन बनाने वाले अनुभवी रसोइये",
    heroHeadline: "Experienced Home Cooks & Chefs in Agra",
    heroSubhead: "Enjoy delicious, hygienic home-cooked meals prepared by etiquette-trained cooks. Morning, evening, or all-day cooking shifts with kitchen cleaning included.",
    metaTitle: "Cook in Agra | Hire Verified Home Cooks & Chefs - MaidPro",
    metaDesc: "Hire hygienic, verified home cooks in Agra. North Indian, South Indian, diet-friendly meals for breakfast, lunch & dinner with complete kitchen cleanliness.",
    faqs: [
      {
        question: "Are your cooks trained in hygienic kitchen practices?",
        answer: "Yes. All cooks wear clean aprons and follow strict hand washing, fresh ingredient prep, and post-cooking stove & counter sanitization."
      },
      {
        question: "Can I request a trial before hiring a monthly cook?",
        answer: "Absolutely! We arrange a 1-day cooking trial at your home so you can taste and approve the flavor and hygiene."
      }
    ]
  },
  "babysitter-in-agra": {
    slug: "babysitter-in-agra",
    serviceId: "baby-nanny-care",
    title: "Babysitter & Nanny Care in Agra",
    hiTitle: "आगरा में बेबीसिटर व नानी केयर सेवा",
    tagline: "Compassionate, Verified Nannies & Infant Caretakers in Agra",
    hiTagline: "अनुभवी व स्नेहपूर्ण बेबीसिटर - शिशु देखभाल और सुरक्षा",
    heroHeadline: "Loving & Verified Babysitters in Agra",
    heroSubhead: "Trained child-care attendants who handle infant feeding, diaper changing, bedtime stories, and playful engagement so working parents have total peace of mind.",
    metaTitle: "Babysitter in Agra | Verified Nannies & Child Care - MaidPro",
    metaDesc: "Hire background-verified babysitters and nannies in Agra. Compassionate infant and toddler care, flexible 4 to 12 hour daytime and live-in shifts.",
    faqs: [
      {
        question: "What are the qualifications of your babysitters?",
        answer: "Our nannies have proven prior experience in infant handling, hygiene, bottle sterilization, and undergo complete police background checks."
      }
    ]
  },
  "elderly-care-in-agra": {
    slug: "elderly-care-in-agra",
    serviceId: "elderly-patient-care",
    title: "Elderly & Patient Care in Agra",
    hiTitle: "आगरा में बुजुर्ग व पेशेंट केयर सेवा",
    tagline: "Respectful, Compassionate Attendants for Senior Citizens & Bedridden Patients",
    hiTagline: "बुजुर्गों और मरीजों की समर्पित देखभाल के लिए प्रशिक्षित सहायक",
    heroHeadline: "Compassionate Elderly Care & Patient Attendants in Agra",
    heroSubhead: "Experienced caregivers assisting with mobility, timely medication reminders, feeding, sponge baths, and companionship 12-hour or 24-hour shifts.",
    metaTitle: "Elderly Care in Agra | Patient Attendants & Senior Care - MaidPro",
    metaDesc: "Find compassionate, verified senior citizens caregivers and patient attendants in Agra. 12-hr & 24-hr live-in support with medication and mobility assistance.",
    faqs: [
      {
        question: "Do you offer 24-hour live-in elderly attendants?",
        answer: "Yes, we provide 24-hour live-in attendants as well as 12-hour day/night shift caregivers across Agra."
      }
    ]
  },
  "move-in-cleaning-agra": {
    slug: "move-in-cleaning-agra",
    serviceId: "moving-cleaning",
    title: "Move-In & Shifting Cleaning in Agra",
    hiTitle: "आगरा में शिफ्टिंग व मूव-इन क्लीनिंग सेवा",
    tagline: "Turn New or Vacated Flats Sparkling Clean Before You Move In",
    hiTagline: "नये या खाली घर में शिफ्ट होने से पहले संपूर्ण डीप क्लीनिंग",
    heroHeadline: "Complete Move-In / Move-Out Deep Cleaning in Agra",
    heroSubhead: "Deep vacuuming, paint spot removal, kitchen cabinet degreasing, and bathroom sanitization so you step into a 100% fresh, germ-free home.",
    metaTitle: "Move-In Cleaning in Agra | Shifting Deep Cleaning Service - MaidPro",
    metaDesc: "Book move-in / move-out house cleaning in Agra. Deep scrubbing of floors, wardrobes, kitchen cabinets & sanitized washrooms before you shift.",
    faqs: [
      {
        question: "Does move-in cleaning cover inside cabinets and wardrobes?",
        answer: "Yes, our move-in package includes thorough interior and exterior wipe-down and vacuuming of all kitchen cabinets, bedroom wardrobes, and lofts."
      }
    ]
  },
  "office-cleaning-agra": {
    slug: "office-cleaning-agra",
    serviceId: "office-cleaning",
    title: "Office & Commercial Cleaning in Agra",
    hiTitle: "आगरा में ऑफिस व कार्यस्थल सफाई सेवा",
    tagline: "Professional Sanitization for Corporate Offices, Clinics & Retail Stores",
    hiTagline: "कॉर्पोरेट ऑफिस, क्लीनिक और दुकानों के लिए पेशेवर सफाई सेवा",
    heroHeadline: "Commercial Office Cleaning Services in Agra",
    heroSubhead: "Keep your workstations, meeting rooms, pantry, and washrooms spotless with trained janitorial staff and GST-compliant corporate invoices.",
    metaTitle: "Office Cleaning in Agra | Commercial Housekeeping & Janitorial - MaidPro",
    metaDesc: "Professional office cleaning and commercial janitorial services in Sanjay Place, Civil Lines & across Agra. GST invoicing & verified staff.",
    faqs: [
      {
        question: "Do you provide GST invoices for office cleaning in Agra?",
        answer: "Yes, we provide full GST compliant invoices and flexible daily/monthly corporate service contracts."
      }
    ]
  },
  "hotel-restaurant-cook-agra": {
    slug: "hotel-restaurant-cook-agra",
    serviceId: "hotel-restaurant-cook",
    title: "Restaurant & Hotel Professional Cook in Agra",
    hiTitle: "आगरा में रेस्टोरेंट व होटल प्रोफेशनल कुक सेवा",
    tagline: "Skilled Commercial Chefs for Restaurants & Hotels (North & South Indian)",
    hiTagline: "होटल, रेस्टोरेंट व क्लाउड किचन के लिए पेशेवर शेफ व कुक",
    heroHeadline: "Professional Restaurant & Hotel Chefs in Agra",
    heroSubhead: "Hire verified commercial master cooks & chefs for restaurants, hotels, cafes & cloud kitchens. Authentic North Indian & South Indian cuisines with flexible 6hr (₹12k), 8hr (₹14k), 10hr (₹16k), 12hr (₹18k) & 24hr live-in (₹28k) shifts.",
    metaTitle: "Restaurant & Hotel Cook in Agra | North & South Indian Chefs - MaidPro",
    metaDesc: "Hire professional restaurant, hotel & cloud kitchen cooks in Agra. Authentic North & South Indian food, 6hr (12k), 8hr (14k), 10hr (16k), 12hr (18k) & 24hr live-in (28k).",
    faqs: [
      {
        question: "What cuisines do your hotel & restaurant cooks specialize in?",
        answer: "Our commercial chefs specialize in authentic North Indian (Tandoor, Curries, Biryani, Mughlai) and South Indian (Dosa varieties, Idli, Sambhar, Vada, Chutneys, Thalis) with bulk preparation and commercial kitchen hygiene."
      },
      {
        question: "What are the shift timings and monthly salary rates for restaurant cooks?",
        answer: "We offer transparent monthly slabs: 6 Hours (₹12,000/mo), 8 Hours (₹14,000/mo), 10 Hours (₹16,000/mo), 12 Hours (₹18,000/mo), and 24-Hour Live-in Master Chef (₹28,000/mo)."
      },
      {
        question: "Can we conduct a skill test or trial cooking session?",
        answer: "Yes, we arrange an on-site commercial cooking trial session at your restaurant or hotel kitchen before you finalize the hiring."
      }
    ]
  }
};

export const ALL_SERVICE_PAGES = Object.values(SERVICE_PAGES_DATA);
