export interface StaffMember {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  role: string;
  experience: string;
  rating: number;
  reviewsCount: number;
  locality: string;
  specialties: string[];
  languages: string[];
  policeVerified: boolean;
  medicalChecked: boolean;
}

export const VERIFIED_STAFF: StaffMember[] = [
  {
    id: "staff-1",
    name: "Sunita Devi",
    initials: "SD",
    avatarBg: "bg-emerald-700 text-white",
    role: "Senior Housekeeper & Deep Clean Specialist",
    experience: "6+ Years Experience",
    rating: 4.9,
    reviewsCount: 142,
    locality: "Khandari & Bodla, Agra",
    specialties: ["Floor Mopping", "Kitchen Degreasing", "Bathroom Tile Descaling"],
    languages: ["Hindi", "Bhojpuri"],
    policeVerified: true,
    medicalChecked: true,
  },
  {
    id: "staff-2",
    name: "Rameshwar Kumar",
    initials: "RK",
    avatarBg: "bg-teal-800 text-white",
    role: "Expert North & South Indian Cook",
    experience: "8+ Years Experience",
    rating: 5.0,
    reviewsCount: 98,
    locality: "Dayalbagh & Kamla Nagar, Agra",
    specialties: ["North Indian Thali", "South Indian Tiffin", "Diabetic & Less-Oil Meals"],
    languages: ["Hindi", "English (Basic)"],
    policeVerified: true,
    medicalChecked: true,
  },
  {
    id: "staff-3",
    name: "Geeta Sharma",
    initials: "GS",
    avatarBg: "bg-sky-800 text-white",
    role: "Certified Infant & Toddler Caregiver",
    experience: "5+ Years Experience",
    rating: 4.9,
    reviewsCount: 86,
    locality: "Sanjay Place & Bodla, Agra",
    specialties: ["Infant Feeding", "Nap Routine", "Playtime & Safety Supervision"],
    languages: ["Hindi"],
    policeVerified: true,
    medicalChecked: true,
  },
  {
    id: "staff-4",
    name: "Rekha Verma",
    initials: "RV",
    avatarBg: "bg-amber-800 text-white",
    role: "Elderly & Patient Care Companion",
    experience: "7+ Years Experience",
    rating: 5.0,
    reviewsCount: 114,
    locality: "Civil Lines & Khandari, Agra",
    specialties: ["Bedside Assistance", "Medication Reminder", "Mobility Support"],
    languages: ["Hindi"],
    policeVerified: true,
    medicalChecked: true,
  },
];
