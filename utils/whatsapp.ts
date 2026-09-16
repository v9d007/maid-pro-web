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
  const parts: string[] = [];
  if (details.service) parts.push(`Service: ${details.service}`);
  if (details.homeSize) parts.push(`Size: ${details.homeSize}`);
  if (details.locality) parts.push(`Area: ${details.locality}, Agra`);
  if (details.customNotes) parts.push(`Details: ${details.customNotes}`);

  const message = `Hi Maid Pro! I want to book a service:\n• ${parts.join("\n• ")}\n\nPlease share details & availability.`;

  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getDirectWhatsAppChatLink(): string {
  const message = "Hi Maid Pro! I need help with maid / cleaning service in Agra.";
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getDirectPhoneCallLink(): string {
  return `tel:+${PHONE_NUMBER}`;
}
