"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi";

export interface Translations {
  nav: {
    homeServices: string;
    aboutUs: string;
    faqs: string;
    themeLight: string;
    themeDark: string;
    selectLanguage: string;
    english: string;
    hindi: string;
  };
  hero: {
    headingLine1: string;
    headingLine2: string;
    subtitle: string;
    verifiedStaff: string;
    satisfactionGuaranteed: string;
    instantReplacement: string;
    payAfterWork: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    allServices: string;
    maidCleaning: string;
    cooking: string;
    childcare: string;
    elderlyCare: string;
    deepCleaning: string;
    startingFrom: string;
    perMonth: string;
    perSession: string;
    bookService: string;
    includedHighlights: string;
    viewAllServices: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    verifiedResident: string;
  };
  about: {
    badge: string;
    title: string;
    story1: string;
    story2: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
    callbackTitle: string;
    callbackSubtitle: string;
    fullName: string;
    phoneNumber: string;
    serviceNeeded: string;
    selectServicePlaceholder: string;
    requestCallback: string;
    callbackSuccess: string;
  };
  faqs: {
    badge: string;
    title: string;
    subtitle: string;
    allCategory: string;
    safetyCategory: string;
    pricingCategory: string;
    bookingCategory: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    services: string;
    contact: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    serviceAreas: string;
    allRightsReserved: string;
  };
  booking: {
    modalTitle: string;
    modalSubtitle: string;
    serviceLabel: string;
    homeSizeLabel: string;
    localityLabel: string;
    yourNameLabel: string;
    yourNamePlaceholder: string;
    yourPhoneLabel: string;
    yourPhonePlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitButton: string;
    successTitle: string;
    successMessage: string;
    successDetailsTitle: string;
    chatWhatsApp: string;
    doneClose: string;
  };
  mobileBar: {
    call: string;
    whatsapp: string;
    book: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      homeServices: "Home Services",
      aboutUs: "About Us",
      faqs: "FAQs",
      themeLight: "Light Mode",
      themeDark: "Dark Mode",
      selectLanguage: "Language",
      english: "English",
      hindi: "हिन्दी",
    },
    hero: {
      headingLine1: "Spotless Homes,",
      headingLine2: "Absolute Peace of Mind.",
      subtitle:
        "Serving Agra's finest neighborhoods including Bodla, Khandari, Dayalbagh, and Kamla Nagar. We bring 100% police-verified, reliable, and meticulous domestic help, home cooks, and cleaning services directly to your doorstep.",
      verifiedStaff: "Verified Staff",
      satisfactionGuaranteed: "Satisfaction Guaranteed",
      instantReplacement: "Free Instant Replacement",
      payAfterWork: "Zero Advance • Pay After Work",
    },
    services: {
      badge: "Transparent Pricing & Verified Care",
      title: "Our Trusted Home Services",
      subtitle:
        "Transparent monthly packages and one-time deep cleaning. No advance payment required.",
      allServices: "All Services",
      maidCleaning: "Maid & Cleaning",
      cooking: "Cooking & Meals",
      childcare: "Baby & Childcare",
      elderlyCare: "Elderly Care",
      deepCleaning: "Deep Cleaning",
      startingFrom: "Starting from",
      perMonth: "/month",
      perSession: "/session",
      bookService: "Book Service",
      includedHighlights: "What's Included",
      viewAllServices: "Explore All 6 Services",
    },
    testimonials: {
      badge: "Real Agra Customer Reviews",
      title: "Trusted by Families Across Agra",
      subtitle:
        "See what families in Khandari, Bodla, Dayalbagh & Kamla Nagar have to say about our verified staff.",
      verifiedResident: "Verified Agra Resident",
    },
    about: {
      badge: "Our Mission & Standards",
      title: "Redefining Home Care in Agra with Trust & Safety",
      story1:
        "MaidPro Solution 4 You was founded to bring professional security, police verification, and fair wages to Agra's domestic service sector.",
      story2:
        "Every housekeeper, cook, and caregiver is thoroughly background-checked with Aadhaar & Police ID verification, trained in hygiene and polite etiquette.",
      stat1Label: "Verified Helpers",
      stat1Value: "500+",
      stat2Label: "Agra Families Served",
      stat2Value: "5,000+",
      stat3Label: "Customer Rating",
      stat3Value: "4.9/5",
      callbackTitle: "Request a Quick Callback",
      callbackSubtitle:
        "Get a customized quote and matched helper in Agra within 30 minutes.",
      fullName: "Full Name",
      phoneNumber: "Phone / WhatsApp Number",
      serviceNeeded: "Service Required",
      selectServicePlaceholder: "Select a service...",
      requestCallback: "Request Free Callback",
      callbackSuccess: "Thank you! Our Agra coordinator will call you shortly.",
    },
    faqs: {
      badge: "Common Questions",
      title: "Frequently Asked Questions",
      subtitle:
        "Everything you need to know about police verification, replacement guarantees, and fair pricing.",
      allCategory: "All Questions",
      safetyCategory: "Safety & Verification",
      pricingCategory: "Pricing & Billing",
      bookingCategory: "Booking & Replacement",
    },
    footer: {
      tagline:
        "Agra's #1 trusted domestic helper and home cleaning service. 100% police-verified staff, free instant replacements, and pay-after-service transparency.",
      quickLinks: "Quick Navigation",
      services: "Popular Services",
      contact: "Contact & Office Hub",
      addressLabel: "Shop No. 12, Khandari Crossing, Near St. Peter's School, Agra, UP - 282002",
      phoneLabel: "+91 98765 43210",
      emailLabel: "contact@maidproagra.in",
      serviceAreas: "Serving Bodla, Khandari, Dayalbagh, Kamla Nagar, Sanjay Place & All Agra",
      allRightsReserved: "All rights reserved. Maid Pro Solution 4 You.",
    },
    booking: {
      modalTitle: "Enquire for Home Service",
      modalSubtitle: "Share your requirement to arrange a prompt callback from our Agra team",
      serviceLabel: "Service You Are Enquiring For",
      homeSizeLabel: "Home Size",
      localityLabel: "Locality in Agra",
      yourNameLabel: "Your Full Name",
      yourNamePlaceholder: "e.g. Dr. Rajesh Sharma",
      yourPhoneLabel: "Phone / WhatsApp Number",
      yourPhonePlaceholder: "e.g. +91 98765 43210",
      notesLabel: "Special Notes / Requirements (Optional)",
      notesPlaceholder: "e.g. Preferred morning shift, Hindi-speaking maid, etc.",
      submitButton: "Request Callback from Team",
      successTitle: "Enquiry Submitted Successfully!",
      successMessage: "Thank you! Our Agra coordinator will call you back shortly to assist you.",
      successDetailsTitle: "Your Enquiry Details",
      chatWhatsApp: "Chat on WhatsApp Directly",
      doneClose: "Done / Close",
    },
    mobileBar: {
      call: "Call Us",
      whatsapp: "WhatsApp",
      book: "Book Service",
    },
  },
  hi: {
    nav: {
      homeServices: "घरेलू सेवाएं",
      aboutUs: "हमारे बारे में",
      faqs: "अक्सर पूछे जाने वाले सवाल",
      themeLight: "लाइट मोड",
      themeDark: "डार्क मोड",
      selectLanguage: "भाषा चुनें",
      english: "English",
      hindi: "हिन्दी",
    },
    hero: {
      headingLine1: "चमकता घर,",
      headingLine2: "पूरी मन की शांति।",
      subtitle:
        "आगरा के प्रमुख क्षेत्रों जैसे बोदला, खंदारी, दयालबाग और कमला नगर में सेवा उपलब्ध। हम आपके घर लाते हैं 100% पुलिस-सत्यापित, भरोसेमंद और प्रशिक्षित मेड, कुक व सफाई विशेषज्ञ बिना किसी अग्रिम भुगतान के।",
      verifiedStaff: "सत्यापित स्टाफ",
      satisfactionGuaranteed: "संतुष्टि की गारंटी",
      instantReplacement: "मुफ्त तत्काल रिप्लेसमेंट",
      payAfterWork: "जीरो एडवांस • काम के बाद भुगतान",
    },
    services: {
      badge: "पारदर्शी दरें और प्रमाणित सेवा",
      title: "हमारी विश्वसनीय घरेलू सेवाएं",
      subtitle:
        "मासिक पैकेज और एकमुश्त डीप क्लीनिंग। कोई एडवांस भुगतान नहीं - काम पसंद आने पर ही पैसे दें।",
      allServices: "सभी सेवाएं",
      maidCleaning: "मेड व झाड़ू-पोछा",
      cooking: "कुक व खाना बनाना",
      childcare: "शिशु व बाल देखभाल",
      elderlyCare: "बुजुर्गों की देखभाल",
      deepCleaning: "डीप क्लीनिंग",
      startingFrom: "शुरुआती दर",
      perMonth: "/माह",
      perSession: "/विज़िट",
      bookService: "सर्विस बुक करें",
      includedHighlights: "शामिल कार्य",
      viewAllServices: "सभी 6 सेवाएं देखें",
    },
    testimonials: {
      badge: "आगरा के ग्राहकों के अनुभव",
      title: "आगरा के 5,000+ परिवारों का भरोसा",
      subtitle:
        "जानिए खंदारी, बोदला, दयालबाग और कमला नगर के परिवार हमारे सत्यापित स्टाफ के बारे में क्या कहते हैं।",
      verifiedResident: "प्रमाणित आगरा निवासी",
    },
    about: {
      badge: "हमारा उद्देश्य और सुरक्षा मानक",
      title: "आगरा में घरेलू सहायता को सुरक्षा और सम्मान के साथ जोड़ना",
      story1:
        "MaidPro Solution 4 You की शुरुआत आगरा में घरेलू सहायकों की भर्ती में सुरक्षा और पारदर्शिता लाने के उद्देश्य से की गई थी।",
      story2:
        "प्रत्येक मेड, रसोइया और केयरगिवर का आधार कार्ड व पुलिस सत्यापन अनिवार्य रूप से किया जाता है तथा स्वच्छता व शिष्टाचार का प्रशिक्षण दिया जाता है।",
      stat1Label: "सत्यापित सहायक",
      stat1Value: "500+",
      stat2Label: "संतुष्ट परिवार",
      stat2Value: "5,000+",
      stat3Label: "ग्राहक रेटिंग",
      stat3Value: "4.9/5",
      callbackTitle: "त्वरित कॉलबैक का अनुरोध करें",
      callbackSubtitle:
        "30 मिनट के भीतर उचित दर और अपनी पसंद का सत्यापित स्टाफ प्राप्त करें।",
      fullName: "आपका पूरा नाम",
      phoneNumber: "फोन / व्हाट्सएप नंबर",
      serviceNeeded: "आवश्यक सेवा",
      selectServicePlaceholder: "सेवा चुनें...",
      requestCallback: "मुफ्त कॉलबैक पाएं",
      callbackSuccess: "धन्यवाद! हमारे आगरा प्रतिनिधि जल्द ही आपसे संपर्क करेंगे।",
    },
    faqs: {
      badge: "सामान्य प्रश्न",
      title: "अक्सर पूछे जाने वाले सवाल",
      subtitle:
        "पुलिस वेरिफिकेशन, रिप्लेसमेंट गारंटी और दरों से जुड़े आपके सभी सवालों के जवाब।",
      allCategory: "सभी प्रश्न",
      safetyCategory: "सुरक्षा व सत्यापन",
      pricingCategory: "कीमत व भुगतान",
      bookingCategory: "बुकिंग व रिप्लेसमेंट",
    },
    footer: {
      tagline:
        "आगरा का #1 विश्वसनीय घरेलू सहायक और होम क्लीनिंग नेटवर्क। 100% पुलिस-सत्यापित स्टाफ, मुफ्त तत्काल रिप्लेसमेंट और काम के बाद भुगतान।",
      quickLinks: "महत्वपूर्ण लिंक्स",
      services: "लोकप्रिय सेवाएं",
      contact: "कार्यालय व संपर्क",
      addressLabel: "दुकान नं. 12, खंदारी चौराहा, सेंट पीटर्स स्कूल के पास, आगरा, यूपी - 282002",
      phoneLabel: "+91 98765 43210",
      emailLabel: "contact@maidproagra.in",
      serviceAreas: "बोदला, खंदारी, दयालबाग, कमला नगर, संजय प्लेस और पूरे आगरा में सेवा उपलब्ध",
      allRightsReserved: "सर्वाधिकार सुरक्षित। Maid Pro Solution 4 You.",
    },
    booking: {
      modalTitle: "घरेलू सेवा के लिए पूछताछ",
      modalSubtitle: "हमारी आगरा टीम से तुरंत कॉलबैक प्राप्त करने के लिए अपनी जानकारी दर्ज करें",
      serviceLabel: "आवश्यक सेवा",
      homeSizeLabel: "घर का आकार",
      localityLabel: "आगरा में क्षेत्र / इलाका",
      yourNameLabel: "आपका पूरा नाम",
      yourNamePlaceholder: "उदा. डॉ. राजेश शर्मा",
      yourPhoneLabel: "फोन / व्हाट्सएप नंबर",
      yourPhonePlaceholder: "उदा. 9876543210",
      notesLabel: "विशेष निर्देश या समय (वैकल्पिक)",
      notesPlaceholder: "उदा. सुबह का समय, हिन्दी भाषी मेड आदि",
      submitButton: "टीम से कॉलबैक का अनुरोध करें",
      successTitle: "पूछताछ सफलतापूर्वक दर्ज की गई!",
      successMessage: "धन्यवाद! हमारी आगरा टीम जल्द ही आपको कॉल करके सहायता करेगी।",
      successDetailsTitle: "आपकी पूछताछ का विवरण",
      chatWhatsApp: "व्हाट्सएप पर सीधे बात करें",
      doneClose: "पूर्ण / बंद करें",
    },
    mobileBar: {
      call: "कॉल करें",
      whatsapp: "व्हाट्सएप",
      book: "बुक करें",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("maidpro-language") as Language | null;
    if (savedLang && (savedLang === "en" || savedLang === "hi")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("maidpro-language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
