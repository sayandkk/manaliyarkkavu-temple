export type Language = 'en' | 'ml';

export interface TempleInfo {
  name: string;
  nameMl: string;
  subtitle: string;
  subtitleMl: string;
  tagline: string;
  taglineMl: string;
  location: string;
  locationMl: string;
  description: string;
  descriptionMl: string;
  fullHistory: string;
  fullHistoryMl: string;
  specialSignificance: string;
  specialSignificanceMl: string;
  traditions: string[];
  traditionsMl: string[];
  contact: {
    address: string;
    addressMl: string;
    phone: string;
    email: string;
    whatsapp?: string;
    googleMapsEmbedUrl?: string;
    googleMapsLink?: string;
  };
  timings: {
    morningOpen: string;
    morningClose: string;
    eveningOpen: string;
    eveningClose: string;
  };
}

export interface Deity {
  id: string;
  name: string;
  nameMl: string;
  title: string;
  titleMl: string;
  image: string;
  description: string;
  descriptionMl: string;
  significance: string;
  significanceMl: string;
  rituals: string[];
  ritualsMl: string[];
  specialDays: string[];
  specialDaysMl: string[];
  offerings: string[];
  offeringsMl: string[];
  mantra?: string;
}

export interface DailyScheduleSlot {
  id: string;
  time: string;
  name: string;
  nameMl: string;
  description: string;
  descriptionMl: string;
  period: 'morning' | 'evening';
}

export interface Offering {
  id: string;
  name: string;
  nameMl: string;
  deityId: string;
  deityName: string;
  deityNameMl: string;
  description: string;
  descriptionMl: string;
  price: number;
  category: 'daily' | 'special' | 'archana' | 'lamp' | 'naivedyam';
  categoryLabel: string;
  categoryLabelMl: string;
  bookingAvailable: boolean;
  benefits?: string;
  benefitsMl?: string;
}

export interface SpecialPooja {
  id: string;
  name: string;
  nameMl: string;
  occasion: string;
  occasionMl: string;
  time: string;
  deity: string;
  deityMl: string;
  description: string;
  descriptionMl: string;
  offerings: string[];
  offeringsMl: string[];
}

export interface FestivalEvent {
  day: string;
  dayMl: string;
  title: string;
  titleMl: string;
  description: string;
  descriptionMl: string;
  time: string;
}

export interface Festival {
  id: string;
  name: string;
  nameMl: string;
  month: string;
  monthMl: string;
  malayalamMonth: string;
  duration: string;
  durationMl: string;
  dateRange: string;
  description: string;
  descriptionMl: string;
  mainRituals: string[];
  mainRitualsMl: string[];
  highlights: string[];
  highlightsMl: string[];
  events: FestivalEvent[];
  image: string;
  badge?: string;
}

export interface CalendarEvent {
  id: string;
  date: string; // YYYY-MM-DD
  dayOfMonth: number;
  month: number; // 0-11
  year: number;
  title: string;
  titleMl: string;
  type: 'pooja' | 'festival' | 'special' | 'closure';
  typeLabel: string;
  typeLabelMl: string;
  time?: string;
  description: string;
  descriptionMl: string;
}

export interface Announcement {
  id: string;
  title: string;
  titleMl: string;
  date: string;
  dateMl: string;
  isUrgent?: boolean;
  category: 'festival' | 'pooja' | 'timings' | 'notice';
  categoryLabel: string;
  categoryLabelMl: string;
  summary: string;
  summaryMl: string;
  details: string;
  detailsMl: string;
  actionText?: string;
  actionLink?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleMl: string;
  category: 'temple' | 'festivals' | 'poojas' | 'cultural' | 'historical' | 'devotee';
  categoryLabel: string;
  categoryLabelMl: string;
  imageUrl: string;
  description?: string;
  descriptionMl?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  titleMl: string;
  category: string;
  categoryMl: string;
  duration: string;
  youtubeId?: string;
  thumbnailUrl: string;
  description: string;
  descriptionMl: string;
}

export interface TimelineEvent {
  period: string;
  periodMl: string;
  title: string;
  titleMl: string;
  description: string;
  descriptionMl: string;
  verifiedNote?: string;
  image?: string;
}

export interface DonationOption {
  id: string;
  title: string;
  titleMl: string;
  description: string;
  descriptionMl: string;
  suggestedAmounts: number[];
  category: 'annadanam' | 'development' | 'pooja_sponsor' | 'festival' | 'general';
}

export interface BookingFormData {
  offeringId: string;
  devoteeName: string;
  nakshatra: string;
  gotra?: string;
  phone: string;
  email: string;
  bookingDate: string;
  address?: string;
  specialPrayers?: string;
  paymentMethod: 'counter' | 'online_token';
}

export interface BookingReceipt extends BookingFormData {
  bookingId: string;
  offeringName: string;
  offeringNameMl: string;
  amount: number;
  createdAt: string;
  status: 'Confirmed' | 'Pending Verification';
}
