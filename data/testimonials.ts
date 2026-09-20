export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  serviceUsed: string;
  rating: number;
  comment: string;
  verified: boolean;
  hi?: {
    location: string;
    serviceUsed: string;
    comment: string;
  };
}

export function getTestimonialDetails(item: TestimonialItem, lang: "en" | "hi") {
  if (lang === "hi" && item.hi) {
    return {
      name: item.name,
      location: item.hi.location,
      serviceUsed: item.hi.serviceUsed,
      comment: item.hi.comment,
      rating: item.rating,
      verified: item.verified,
    };
  }
  return {
    name: item.name,
    location: item.location,
    serviceUsed: item.serviceUsed,
    comment: item.comment,
    rating: item.rating,
    verified: item.verified,
  };
}

export const TESTIMONIALS_ROW_1: TestimonialItem[] = [
  {
    id: "r1-1",
    name: "Gagan Thakur",
    location: "Sikandra & Kamla Nagar, Agra",
    serviceUsed: "Verified Maid",
    rating: 5,
    comment: "Great team work, and provide highly experienced maid with full document verification. Nice service agency in Agra. I took service in Sikandra and Kamla Nagar for my relatives and parents. Thank you for your trust and hard work.",
    verified: true,
    hi: {
      location: "सिकंदरा व कमला नगर, आगरा",
      serviceUsed: "सत्यापित मेड",
      comment: "शानदार टीम वर्क, पूर्ण दस्तावेज सत्यापन के साथ अत्यधिक अनुभवी मेड प्रदान की। आगरा में बहुत अच्छी सेवा एजेंसी। मैंने सिकंदरा और कमला नगर में अपने रिश्तेदारों और माता-पिता के लिए सेवा ली।",
    },
  },
  {
    id: "r1-2",
    name: "Khushi Kuchala",
    location: "Agra",
    serviceUsed: "Deep Cleaning",
    rating: 5,
    comment: "Very good and reliable cleaning service. The staff is polite, hardworking, and professional. They completed the work neatly and on time. I am satisfied with their service and would recommend Maid Pro Solution4 You to others.",
    verified: true,
    hi: {
      location: "आगरा",
      serviceUsed: "डीप क्लीनिंग",
      comment: "बहुत अच्छी और भरोसेमंद सफाई सेवा। स्टाफ विनम्र, मेहनती और पेशेवर है। उन्होंने समय पर और सफाई से काम पूरा किया। मैं Maid Pro Solution4 You की सेवा से पूरी तरह संतुष्ट हूँ।",
    },
  },
  {
    id: "r1-3",
    name: "Popli",
    location: "Agra",
    serviceUsed: "Home Deep Clean",
    rating: 5,
    comment: "Extremely professional and efficient. My home is spotless and smells amazing! The team was punctual, thorough, and exceeded all expectations.",
    verified: true,
    hi: {
      location: "आगरा",
      serviceUsed: "होम डीप क्लीन",
      comment: "अत्यधिक पेशेवर और कुशल। मेरा घर बेदाग और खुशबूदार हो गया! टीम समय की पाबंद थी और अपेक्षा से कहीं बेहतर काम किया।",
    },
  },
  {
    id: "r1-4",
    name: "Sonali Shukla",
    location: "Agra",
    serviceUsed: "House Maid Service",
    rating: 5,
    comment: "Very excellent service. Rachna maid is very good at her job. I am satisfied with the support and dedication of the team.",
    verified: true,
    hi: {
      location: "आगरा",
      serviceUsed: "घरेलू मेड सेवा",
      comment: "बहुत ही उत्कृष्ट सेवा। रचना मेड अपने काम में बहुत अच्छी हैं। टीम के सहयोग और समर्पण से मैं पूरी तरह संतुष्ट हूँ।",
    },
  },
  {
    id: "r1-5",
    name: "Vishal Singh",
    location: "Agra",
    serviceUsed: "Maid Service",
    rating: 5,
    comment: "Very good service and cooperative staff. The background verification and prompt assistance make them highly trustworthy in Agra.",
    verified: true,
    hi: {
      location: "आगरा",
      serviceUsed: "मेड सेवा",
      comment: "बहुत अच्छी सेवा और सहयोगी स्टाफ। पृष्ठभूमि सत्यापन और त्वरित सहायता उन्हें आगरा में अत्यधिक भरोसेमंद बनाती है।",
    },
  },
];

export const TESTIMONIALS_ROW_2: TestimonialItem[] = [
  {
    id: "r2-1",
    name: "Prof. D.K. Sharma",
    location: "Lohamandi & Khandari, Agra",
    serviceUsed: "Maid Service",
    rating: 5,
    comment: "Very nice service agency in Agra, polite and educated persons. Working for women empowerment to make them self-dependent. Got service in Lohamandi and Khandari. Thank you so much for your dedication and work.",
    verified: true,
    hi: {
      location: "लोहामंडी व खंदारी, आगरा",
      serviceUsed: "मेड सेवा",
      comment: "आगरा में बहुत अच्छी सेवा एजेंसी, विनम्र और शिक्षित लोग। महिलाओं को आत्मनिर्भर बनाने के लिए समर्पित। लोहामंडी और खंदारी में सेवा ली। आपके समर्पण के लिए बहुत-बहुत धन्यवाद।",
    },
  },
  {
    id: "r2-2",
    name: "Tarun Rajput",
    location: "Agra",
    serviceUsed: "Housekeeping",
    rating: 5,
    comment: "The staff was polite and well-trained, and the service felt very reliable. Pricing was also reasonable for the quality of work provided. Keep up the good work!",
    verified: true,
    hi: {
      location: "आगरा",
      serviceUsed: "हाउसकीपिंग",
      comment: "स्टाफ विनम्र और अच्छी तरह से प्रशिक्षित था। सेवा बहुत भरोसेमंद लगी और काम की गुणवत्ता के हिसाब से दरें भी उचित थीं।",
    },
  },
  {
    id: "r2-3",
    name: "Ishika Singh",
    location: "Agra",
    serviceUsed: "Deep House Cleaning",
    rating: 5,
    comment: "Amazing service! The team was very professional, thorough, and left my house sparkling clean. I would highly recommend them to anyone looking for home services in Agra!",
    verified: true,
    hi: {
      location: "आगरा",
      serviceUsed: "डीप हाउस क्लीनिंग",
      comment: "कमाल की सेवा! टीम बहुत पेशेवर थी और पूरे घर को चमका दिया। मैं आगरा में होम सर्विसेज की तलाश कर रहे किसी भी व्यक्ति को इनकी सेवा की सिफारिश करती हूँ!",
    },
  },
  {
    id: "r2-4",
    name: "Manikya Singh",
    location: "Agra",
    serviceUsed: "Deep Cleaning",
    rating: 5,
    comment: "Nice service and customer executive is also good, feasible service prices. Overall I am completely satisfied with their thorough cleaning and timely response.",
    verified: true,
    hi: {
      location: "आगरा",
      serviceUsed: "डीप क्लीनिंग",
      comment: "बढ़िया सेवा और कस्टमर सपोर्ट भी अच्छा है, कीमतें भी वाजिब हैं। कुल मिलाकर मैं उनकी गहन सफाई और समय पर प्रतिक्रिया से पूरी तरह संतुष्ट हूँ।",
    },
  },
  {
    id: "r2-5",
    name: "Ayush Kumar",
    location: "Agra",
    serviceUsed: "Deep Cleaning",
    rating: 5,
    comment: "The staff was very good and polite, they cleaned every corner of my house in Agra with utmost care and attention to detail.",
    verified: true,
    hi: {
      location: "आगरा",
      serviceUsed: "डीप क्लीनिंग",
      comment: "स्टाफ बहुत अच्छा और विनम्र था, उन्होंने आगरा में मेरे घर के हर कोने की बहुत बारीकी और सावधानी से सफाई की।",
    },
  },
];

export const TESTIMONIALS = [...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_2];
