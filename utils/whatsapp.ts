export interface BookingDetails {
  service: string;
  homeSize?: string;
  frequency?: string;
  tasks?: string[];
  shift?: string;
  locality?: string;
  customNotes?: string;
  estimatedPrice?: number | string;
}

export const PHONE_NUMBER = "919321034262";
export const FORMATTED_PHONE = "+91 9321034262";
export const BUSINESS_ADDRESS = "Bodla, Khandari, Agra, Uttar Pradesh - 282002";

export function generateWhatsAppLink(details: BookingDetails): string {
  let message = `*Hi Maid Pro Solution 4 You!* 🧹✨\n\n`;
  message += `I would like to book a service with the following details:\n\n`;
  message += `📌 *Service:* ${details.service}\n`;
  
  if (details.homeSize) {
    message += `🏠 *Property Size:* ${details.homeSize}\n`;
  }
  if (details.frequency) {
    message += `📅 *Frequency:* ${details.frequency}\n`;
  }
  if (details.tasks && details.tasks.length > 0) {
    message += `🛠️ *Specific Tasks:* ${details.tasks.join(", ")}\n`;
  }
  if (details.shift) {
    message += `⏰ *Preferred Shift:* ${details.shift}\n`;
  }
  if (details.locality) {
    message += `📍 *Area in Agra:* ${details.locality}\n`;
  }
  if (details.estimatedPrice) {
    message += `💰 *Estimated Total:* ₹${details.estimatedPrice}\n`;
  }
  if (details.customNotes) {
    message += `📝 *Notes:* ${details.customNotes}\n`;
  }

  message += `\nPlease confirm availability and assign a verified professional. Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
}

export function getDirectWhatsAppChatLink(): string {
  const message = encodeURIComponent(
    "Hi Maid Pro Solution 4 You! I want to inquire about your verified housemaids and home cleaning services in Agra."
  );
  return `https://wa.me/${PHONE_NUMBER}?text=${message}`;
}

export function getDirectPhoneCallLink(): string {
  return `tel:+${PHONE_NUMBER}`;
}
