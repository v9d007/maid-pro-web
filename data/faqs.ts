export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Safety" | "Pricing" | "Services" | "Booking";
  hi?: {
    question: string;
    answer: string;
  };
}

export function getFaqDetails(faq: FAQItem, lang: "en" | "hi") {
  if (lang === "hi" && faq.hi) {
    return {
      question: faq.hi.question,
      answer: faq.hi.answer,
    };
  }
  return {
    question: faq.question,
    answer: faq.answer,
  };
}

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "Are your housemaids and cleaning staff background-verified?",
    answer: "Yes, 100%. Every helper, maid, cook, and cleaner undergoes mandatory government ID (Aadhaar Card) verification, address verification, and police background checks before being assigned to any home in Agra.",
    category: "Safety",
    hi: {
      question: "क्या आपकी मेड और सफाई स्टाफ का बैकग्राउंड वेरिफिकेशन होता है?",
      answer: "हाँ, 100%। आगरा में किसी भी घर में भेजने से पहले प्रत्येक घरेलू सहायक, मेड, कुक और क्लीनर का आधार कार्ड, पता और पुलिस वेरिफिकेशन अनिवार्य रूप से किया जाता है।",
    },
  },
  {
    id: "f2",
    question: "What happens if I am not satisfied with the maid or cleaner?",
    answer: "We offer a 100% Free Replacement Guarantee. If you ever feel the helper's work, punctuality, or attitude doesn't match your expectations, we will provide a qualified replacement immediately at zero additional replacement fee.",
    category: "Safety",
    hi: {
      question: "यदि मैं मेड या क्लीनर के काम से संतुष्ट न हूँ तो क्या होगा?",
      answer: "हम 100% मुफ्त रिप्लेसमेंट गारंटी देते हैं। यदि आपको सहायक के काम, समय की पाबंदी या व्यवहार में कोई समस्या आती है, तो बिना किसी अतिरिक्त शुल्क के तुरंत दूसरा योग्य सहायक उपलब्ध कराया जाता है।",
    },
  },
  {
    id: "f3",
    question: "Do you offer both one-time cleaning and monthly maid subscriptions?",
    answer: "Yes! You can book on-demand one-time services (like Deep Cleaning or Move-in Cleaning) for a few hours, or hire monthly housemaids, daily cooks, full-day babysitters, and senior caregivers with flexible shifts.",
    category: "Services",
    hi: {
      question: "क्या आप एक बार की सफाई और मासिक मेड दोनों प्रकार की सेवाएं देते हैं?",
      answer: "हाँ! आप कुछ घंटों के लिए डीप क्लीनिंग या शिफ्टिंग क्लीनिंग जैसी एकमुश्त सेवाएं ले सकते हैं, या मासिक आधार पर दैनिक झाड़ू-पोछा मेड, रसोइया, बेबीसिटर व केयरगिवर रख सकते हैं।",
    },
  },
  {
    id: "f4",
    question: "How quickly can a maid or cleaning team reach my home in Agra?",
    answer: "For on-demand Deep Cleaning, we can often dispatch our team within 2 to 4 hours (same-day booking). For monthly housemaids, cooks, or nannies, we arrange a personal interview/trial session within 24 to 48 hours in your locality.",
    category: "Booking",
    hi: {
      question: "आगरा में बुकिंग के बाद मेड या क्लीनिंग टीम कितनी जल्दी पहुंच सकती है?",
      answer: "ऑन-डिमांड डीप क्लीनिंग के लिए हम उसी दिन 2 से 4 घंटे के भीतर टीम भेज सकते हैं। मासिक मेड, कुक या नानी के लिए आपके क्षेत्र में 24 से 48 घंटे में ट्रायल या इंटरव्यू आयोजित किया जाता है।",
    },
  },
  {
    id: "f5",
    question: "How does the payment work? Are there hidden charges?",
    answer: "We maintain 100% transparent pricing. You only pay the agreed fixed quote or monthly fee. You can pay conveniently via UPI, Google Pay, PhonePe, Net Banking, or Cash after your service is completed satisfactorily.",
    category: "Pricing",
    hi: {
      question: "भुगतान का तरीका क्या है? क्या कोई छिपे हुए चार्ज हैं?",
      answer: "हमारी कीमतें 100% पारदर्शी हैं। आपको केवल तय की गई राशि ही देनी होती है। काम पूरा होने और संतुष्टि मिलने के बाद आप यूपीआई, गूगल पे, फोनपे, नेट बैंकिंग या कैश से भुगतान कर सकते हैं।",
    },
  },
  {
    id: "f6",
    question: "Which areas in Agra do you currently serve?",
    answer: "We cover all major localities across Agra including Khandari, Bodla, Dayalbagh, Kamla Nagar, Sanjay Place, Shahganj, Civil Lines, Fatehabad Road, Sikandra, Tajganj, and Awas Vikas Colony.",
    category: "Services",
    hi: {
      question: "आप आगरा के किन-किन इलाकों में सेवाएं प्रदान करते हैं?",
      answer: "हम खंदारी, बोदला, दयालबाग, कमला नगर, संजय प्लेस, शाहगंज, सिविल लाइंस, फतेहाबाद रोड, सिकंदरा, ताजगंज, आवास विकास कॉलोनी सहित पूरे आगरा में सेवा प्रदान करते हैं।",
    },
  }
];
