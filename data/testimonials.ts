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
    name: "Dr. Ananya Sharma",
    location: "Khandari, Agra",
    serviceUsed: "Daily Housemaid",
    rating: 5,
    comment: "Finding a reliable maid in Khandari used to be such a headache. Maid Pro provided a verified helper within 24 hours. Punctual, respectful, and thorough!",
    verified: true,
    hi: {
      location: "खंदारी, आगरा",
      serviceUsed: "दैनिक घरेलू मेड",
      comment: "खंदारी में एक भरोसेमंद मेड ढूंढना बहुत मुश्किल था। Maid Pro ने 24 घंटे के अंदर सत्यापित मेड भेजी। समय की पाबंद और बहुत मेहनती!",
    },
  },
  {
    id: "r1-2",
    name: "Rajesh & Meenakshi Agarwal",
    location: "Dayalbagh, Agra",
    serviceUsed: "Deep Cleaning",
    rating: 5,
    comment: "The 3-member team came with heavy-duty machines and eco products. Every corner, window glass, and tile was spotless. 100% recommended!",
    verified: true,
    hi: {
      location: "दयालबाग, आगरा",
      serviceUsed: "डीप क्लीनिंग",
      comment: "3 सदस्यों की टीम आधुनिक मशीनों और इको फ्रेंडली क्लीनर्स के साथ आई। हर कोना, खिड़की का कांच और टाइल बिल्कुल चमक उठे। 100% अनुशंसित!",
    },
  },
  {
    id: "r1-3",
    name: "Vikram Singhal",
    location: "Bodla, Agra",
    serviceUsed: "Home Cook",
    rating: 5,
    comment: "The cook prepares delicious, less-oily North Indian meals just like home. Very hygienic and accommodates all our dietary preferences.",
    verified: true,
    hi: {
      location: "बोदला, आगरा",
      serviceUsed: "होम कुक",
      comment: "कुक बिल्कुल घर जैसा स्वादिष्ट और कम तेल वाला शुद्ध उत्तर भारतीय खाना बनाते हैं। बहुत ही स्वच्छ और हमारी पसंद के अनुसार।",
    },
  },
  {
    id: "r1-4",
    name: "Pooja Verma",
    location: "Kamla Nagar, Agra",
    serviceUsed: "Babysitter Care",
    rating: 5,
    comment: "Safety was our biggest worry. Maid Pro did complete police and Aadhaar verification for our nanny. She is so caring with our 2-year-old.",
    verified: true,
    hi: {
      location: "कमला नगर, आगरा",
      serviceUsed: "बेबीसिटर केयर",
      comment: "सुरक्षा हमारी सबसे बड़ी चिंता थी। Maid Pro ने हमारी नानी का पूरा पुलिस व आधार सत्यापन किया। वह हमारे 2 साल के बच्चे का बहुत प्यार से ध्यान रखती हैं।",
    },
  },
  {
    id: "r1-5",
    name: "Col. R.K. Bhatnagar",
    location: "Civil Lines, Agra",
    serviceUsed: "Elderly Care",
    rating: 5,
    comment: "Extremely respectful and trained assistant for my elderly parents. Punctual, courteous, and gives us complete peace of mind.",
    verified: true,
    hi: {
      location: "सिविल लाइंस, आगरा",
      serviceUsed: "बुजुर्गों की देखभाल",
      comment: "मेरे बुजुर्ग माता-पिता के लिए बेहद संस्कारी और प्रशिक्षित सहायक। समय के पाबंद, विनम्र और हमें पूरी मानसिक शांति मिलती है।",
    },
  },
];

export const TESTIMONIALS_ROW_2: TestimonialItem[] = [
  {
    id: "r2-1",
    name: "Sunil & Neha Saxena",
    location: "Sikandra, Agra",
    serviceUsed: "Sofa & Upholstery",
    rating: 5,
    comment: "Our fabric sofa had tough water and tea stains. Their deep foam wash made it look brand new within 2 hours. Very professional staff!",
    verified: true,
    hi: {
      location: "सिकंदरा, आगरा",
      serviceUsed: "सोफा व अपहोल्स्ट्री",
      comment: "हमारे फैब्रिक सोफे पर चाय और पानी के गहरे दाग थे। इनकी डीप फोम वॉश ने इसे 2 घंटे में बिल्कुल नया बना दिया। बहुत ही पेशेवर स्टाफ!",
    },
  },
  {
    id: "r2-2",
    name: "Amit Mathur",
    location: "Sanjay Place, Agra",
    serviceUsed: "Office Cleaning",
    rating: 5,
    comment: "We booked after-hours office sanitization for our commercial clinic. Cleaners were courteous, thorough, and provided GST invoice promptly.",
    verified: true,
    hi: {
      location: "संजय प्लेस, आगरा",
      serviceUsed: "ऑफिस क्लीनिंग",
      comment: "हमने अपने क्लिनिक के लिए ऑफिस सैनिटाइजेशन बुक किया था। क्लीनर्स बहुत विनम्र थे और तुरंत जीएसटी बिल भी प्रदान किया।",
    },
  },
  {
    id: "r2-3",
    name: "Deepa Kushwaha",
    location: "Shahganj, Agra",
    serviceUsed: "Hourly Maid Service",
    rating: 5,
    comment: "Needed urgent help before guests arrived. Booked a 2-hour on-demand maid on WhatsApp and she arrived in 40 minutes. Super convenient!",
    verified: true,
    hi: {
      location: "शाहगंज, आगरा",
      serviceUsed: "प्रति घंटा मेड",
      comment: "मेहमानों के आने से पहले तुरंत मदद चाहिए थी। व्हाट्सएप पर 2 घंटे की ऑन-डिमांड मेड बुक की और वह 40 मिनट में आ गईं। बेहद सुविधाजनक!",
    },
  },
  {
    id: "r2-4",
    name: "Manish Chawla",
    location: "Fatehabad Road, Agra",
    serviceUsed: "Move-in Deep Clean",
    rating: 5,
    comment: "Moved into a newly painted flat. The team removed paint marks, deep-cleaned cabinet interiors, and sanitized all washrooms thoroughly.",
    verified: true,
    hi: {
      location: "फतेहाबाद रोड, आगरा",
      serviceUsed: "मूव-इन डीप क्लीन",
      comment: "नए पेंट हुए फ्लैट में शिफ्ट किया था। टीम ने पेंट के सारे निशान हटा दिए, अलमारियों की डीप क्लीनिंग की और सभी वॉशरूम सैनिटाइज किए।",
    },
  },
  {
    id: "r2-5",
    name: "Suman & Gaurav Gupta",
    location: "Awas Vikas Colony, Agra",
    serviceUsed: "Daily Housekeeping",
    rating: 5,
    comment: "Zero advance payment and free replacement policy gives immense confidence. Our helper has been working for 6 months without any complaints.",
    verified: true,
    hi: {
      location: "आवास विकास कॉलोनी, आगरा",
      serviceUsed: "दैनिक हाउसकीपिंग",
      comment: "जीरो एडवांस पेमेंट और फ्री रिप्लेसमेंट पॉलिसी बहुत भरोसा देती है। हमारी हेल्पर पिछले 6 महीने से बिना किसी शिकायत के काम कर रही हैं।",
    },
  },
];

export const TESTIMONIALS = [...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_2];
