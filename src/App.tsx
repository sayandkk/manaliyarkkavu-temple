import { useState, useEffect } from 'react';
import type { Language } from './types';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { MobileBottomNav } from './components/common/MobileBottomNav';
import { Hero } from './components/home/Hero';
import { QuickInfo } from './components/home/QuickInfo';
import { AboutTemple } from './components/sections/AboutTemple';
import { TempleHistory } from './components/sections/TempleHistory';
import { DeitiesSection } from './components/sections/DeitiesSection';
import { PoojasSection } from './components/sections/PoojasSection';
import { DailyScheduleSection } from './components/sections/DailyScheduleSection';
import { FestivalsSection } from './components/sections/FestivalsSection';
import { FestivalCalendarSection } from './components/sections/FestivalCalendarSection';
import { AnnouncementsSection } from './components/sections/AnnouncementsSection';
import { GallerySection } from './components/sections/GallerySection';
import { VideoGallerySection } from './components/sections/VideoGallerySection';
import { PlanVisitSection } from './components/sections/PlanVisitSection';
import { SpecialBlessing } from './components/sections/SpecialBlessing';
import { DonationSection } from './components/sections/DonationSection';
import { ContactSection } from './components/sections/ContactSection';
import { BookingModal } from './components/modals/BookingModal';
import { AdminPreviewModal } from './components/modals/AdminPreviewModal';

export function App() {
  // Default to English on open; users can switch to Malayalam via the language toggle
  const [lang, setLang] = useState<Language>('en');

  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedOfferingId, setSelectedOfferingId] = useState<string | undefined>(undefined);
  const [adminModalOpen, setAdminModalOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('temple_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const handleOpenBookingWithOffering = (offeringId: string) => {
    setSelectedOfferingId(offeringId);
    setBookingModalOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedOfferingId(undefined);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900 pb-14 md:pb-0">
      
      {/* 1. Sticky Navigation Header */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenBooking={handleOpenGeneralBooking}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero 
          lang={lang} 
          onOpenBooking={handleOpenGeneralBooking} 
        />

        {/* 3. Quick Temple Information Cards */}
        <QuickInfo 
          lang={lang} 
          onOpenBooking={handleOpenGeneralBooking} 
        />

        {/* 4. About Temple Section */}
        <AboutTemple lang={lang} />

        {/* 5. Temple History & Heritage Timeline */}
        <TempleHistory lang={lang} />

        {/* 6. Sacred Deities Section */}
        <DeitiesSection 
          lang={lang} 
          onOpenBooking={handleOpenGeneralBooking} 
        />

        {/* 7. Today's Temple Schedule */}
        <DailyScheduleSection lang={lang} />

        {/* 8. Poojas & Vazhipad Section with Search & Booking */}
        <PoojasSection 
          lang={lang} 
          onSelectOfferingToBook={handleOpenBookingWithOffering} 
        />

        {/* 9. Upcoming Festivals & Celebrations */}
        <FestivalsSection lang={lang} />

        {/* 10. Temple & Festival Calendar */}
        <FestivalCalendarSection lang={lang} />

        {/* 11. Announcements & Notice Board */}
        <AnnouncementsSection lang={lang} />

        {/* 12. Photo Gallery with Lightbox */}
        <GallerySection lang={lang} />

        {/* 13. Video Gallery */}
        <VideoGallerySection lang={lang} />

        {/* 14. Plan Your Visit & Devotee Etiquette */}
        <PlanVisitSection 
          lang={lang} 
          onOpenBooking={handleOpenGeneralBooking} 
        />

        {/* 15. Sacred Nilavilakku Blessing Ceremony */}
        <SpecialBlessing lang={lang} />

        {/* 16. Support the Temple / Donation Section */}
        <DonationSection lang={lang} />

        {/* 17. Location & Contact Section with Map */}
        <ContactSection lang={lang} />
      </main>

      {/* 18. Traditional Footer */}
      <Footer
        lang={lang}
        onOpenBooking={handleOpenGeneralBooking}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* 19. Mobile Bottom Quick Nav */}
      <MobileBottomNav
        lang={lang}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* 20. Multi-step Pooja / Vazhipad Booking Wizard Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        lang={lang}
        preselectedOfferingId={selectedOfferingId}
      />

      {/* 21. Admin Data Management Preview Modal */}
      <AdminPreviewModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        lang={lang}
      />

    </div>
  );
}

export default App;
