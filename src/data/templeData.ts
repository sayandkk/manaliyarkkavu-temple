import type {
  TempleInfo,
  Deity,
  DailyScheduleSlot,
  SpecialPooja,
  Offering,
  Festival,
  TimelineEvent,
  CalendarEvent,
  Announcement,
  GalleryItem,
  VideoItem,
  DonationOption
} from '../types';

export const templeInfo: TempleInfo = {
  name: "Manalyarkavu Kaladithara Temple",
  nameMl: "മണല്യാർകാവ് കളരിത്തറ ക്ഷേത്രം",
  subtitle: "A Sacred Abode of Faith, Tradition & Devotion",
  subtitleMl: "ഭക്തിയുടെയും പാരമ്പര്യത്തിന്റെയും പുണ്യ സങ്കേതം",
  tagline: "A Sacred Place of Faith, Tradition and Devotion",
  taglineMl: "ഭക്തിയും പാരമ്പര്യവും കേരളീയ സംസ്കാരവും ഒത്തുചേരുന്ന പുണ്യഭൂമി",
  location: "Kaladithara, Malappuram, Kerala",
  locationMl: "കളരിത്തറ, മലപ്പുറം, കേരളം",
  description: "Manalyarkavu Kaladithara Temple is an ancient and revered sacred shrine located at Vadakke Manaliyarkkavu, Kaladithara, Malappuram, embodying the pristine spiritual aura, Vedic traditions, and rich architectural heritage of God's Own Country. Devotees gather here in profound reverence seeking divine protection, peace, and spiritual illumination.",
  descriptionMl: "മലപ്പുറം ജില്ലയിലെ കളരിത്തറയിൽ തൃശൂർ റോഡിൽ സ്ഥിതിചെയ്യുന്ന വടക്കേ മണല്യാർകാവ് കളരിത്തറ ക്ഷേത്രം പുരാതനവും ഭക്തിസാന്ദ്രവുമായ പുണ്യസങ്കേതമാണ്. നൂറ്റാണ്ടുകളുടെ ആചാരപ്പെരുമയും ഭക്തിസാന്ദ്രമായ അനുഭവവും ഈ ക്ഷേത്രം ഭക്തർക്ക് സമ്മാനിക്കുന്നു.",
  fullHistory: "[Official temple history records to be updated by Temple Authorities / Verified Devaswom records]. The temple stands rooted in generations of uninterrupted spiritual customs, ancestral vows, and regular sacred rites performed for universal welfare.",
  fullHistoryMl: "[ക്ഷേത്ര ചരിത്രത്തെക്കുറിച്ചുള്ള ഔദ്യോഗിക വിവരങ്ങൾ ക്ഷേത്ര അധികാരികൾ രേഖപ്പെടുത്തുന്നതാണ്]. തലമുറകളായി പകർന്നുപോന്ന ആചാരാനുഷ്ഠാനങ്ങളോടെ ലോകശാന്തിക്കും ഐശ്വര്യത്തിനുമായി ഇവിടെ പൂജകൾ നടന്നുപോരുന്നു.",
  specialSignificance: "Celebrated for the powerful divine presence of the Mother Goddess (Sree Bhagavathy) and the Kaladithara heritage, where ancestral warrior traditions and sacred Tantric rites harmonize for spiritual upliftment.",
  specialSignificanceMl: "ആദിപരാശക്തിയായ ശ്രീ ഭഗവതിയുടെ ചൈതന്യവും കളരിത്തറയുടെ പവിത്രമായ പാരമ്പര്യവും ഒത്തുചേരുന്ന വിശേഷ പുണ്യ സങ്കേതം.",
  traditions: [
    "Strict adherence to traditional Kerala Tantric rituals and Thanthri rites",
    "Daily Deeparadhana illuminated by traditional brass Nilavilakku lamps",
    "Sacred offering of Paalpayasam and floral Pushpanjalis for divine blessings",
    "Grand Annual Utsavam celebrated with Panchavadyam and traditional Chenda Melam"
  ],
  traditionsMl: [
    "കേരളീയ താന്ത്രിക വിധിപ്രകാരമുള്ള ശുദ്ധമായ പൂജാക്രമങ്ങൾ",
    "പരമ്പരാഗത പിച്ചള നിലവിളക്കുകളുടെ പ്രഭയിൽ നിത്യേന നടക്കുന്ന ഭക്തിസാന്ദ്രമായ ദീപാരാധന",
    "വിശേഷാൽ പാൽപ്പായസ നിവേദ്യവും പുഷ്പാഞ്ജലിയും",
    "പഞ്ചവാദ്യവും ചെണ്ടമേളവും ദീപോത്സവവും ചേർന്ന വാർഷിക മഹോത്സവം"
  ],
  contact: {
    address: "Vadakke Manaliyarkkavu, Kaladithara, Thrissur Road, Malappuram, Kerala - 679576, India",
    addressMl: "വടക്കേ മണല്യാർകാവ്, കളരിത്തറ, തൃശൂർ റോഡ്, മലപ്പുറം, കേരളം - 679576",
    phone: "+91 94470 00000",
    email: "devaswom@manalyarkkavutemple.org",
    whatsapp: "+919447000000",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Vadakke+Manaliyarkkavu,+Kaladithara,+Thrissur+Road,+Malappuram,+Kerala+679576&t=&z=16&ie=UTF8&iwloc=&output=embed",
    googleMapsLink: "https://maps.app.goo.gl/5xocgLDWjwwNhpfh7"
  },
  timings: {
    morningOpen: "05:00 AM",
    morningClose: "11:30 AM",
    eveningOpen: "05:00 PM",
    eveningClose: "08:00 PM"
  }
};

export const deities: Deity[] = [
  {
    id: "bhagavathy",
    name: "Sree Bhagavathy (Mother Goddess)",
    nameMl: "ശ്രീ ഭഗവതി (ആദിപരാശക്തി)",
    title: "Presiding Divine Mother",
    titleMl: "പ്രധാന പ്രതിഷ്ഠ",
    image: "/images/deity_bhagavathy.jpg",
    description: "The supreme manifestation of feminine divinity and maternal compassion, Sree Bhagavathy dispels darkness, protects devotees from all planetary afflictions, and bestows prosperity and peace of mind.",
    descriptionMl: "സർവ്വാഭീഷ്ടവരദായിനിയും സർവ്വദുരിതനിവാരിണിയുമായ ജഗദംബിക. ഭക്തജനങ്ങൾക്ക് ഐശ്വര്യവും ആയുരാരോഗ്യസൗഖ്യവും പ്രധാനം ചെയ്യുന്ന അമ്മ.",
    significance: "Revered as the supreme guardian deity whose watchful grace brings protection to the land and removes obstacles for families.",
    significanceMl: "കുടുംബൈശ്വര്യത്തിനും സകല ദോഷങ്ങൾ നീങ്ങുന്നതിനുമായി ഭക്തർ ഭഗവതിയുടെ കാൽക്കൽ അഭയം തേടുന്നു.",
    rituals: ["Nirmalya Darshanam", "Usha Pooja", "Deeparadhana", "Bhagavathy Seva", "Chuttuvilakku"],
    ritualsMl: ["നിർമ്മാല്യ ദർശനം", "ഉഷഃപൂജ", "ദീപാരാധന", "ഭഗവതി സേവ", "ചുറ്റുവിളക്ക്"],
    specialDays: ["Tuesdays & Fridays", "Pournami (Full Moon)", "Bharani Star", "Maha Pongala & Kalam Pattu"],
    specialDaysMl: ["ചൊവ്വ, വെള്ളി ദിവസങ്ങൾ", "പൗർണ്ണമി", "ഭരണി നാൾ", "മഹാ പൊങ്കാല & കളമെഴുത്തുപാട്ട്"],
    offerings: ["Raktha Pushpanjali", "Bhagavathy Seva", "Neyyvilakku", "Kadumpayasam", "Silk Pattu"],
    offeringsMl: ["രക്തപുഷ്പാഞ്ജലി", "ഭഗവതി സേവ", "നെയ്‌വിളക്ക്", "കടുംപായസം", "പട്ട് ചാർത്തൽ"],
    mantra: "സർവ്വമംഗള മാംഗല്യേ ശിവേ സർവ്വാർത്ഥ സാധികേ | ശരണ്യേ ത്ര്യംബകേ ഗൗരി നാരായണി നമോസ്തുതേ ||"
  },
  {
    id: "ayyappa",
    name: "Lord Sree Ayyappa (Dharma Sastha)",
    nameMl: "ശ്രീ ധർമ്മശാസ്താവ് (അയ്യപ്പൻ)",
    title: "Lord of Sabarimala & Divine Protector",
    titleMl: "കലിയുഗവരദൻ",
    image: "/images/deity_ayyappa.png",
    description: "The beloved Lord of Kali Yuga, Dharma Sastha, who bestows courage, protection from planetary afflictions (especially Saturn / Shani dosha), and spiritual liberation.",
    descriptionMl: "ശനിദോഷ നിവാരണത്തിനും ആത്മധൈര്യത്തിനും സർവ്വ അഭീഷ്ടസിദ്ധിക്കുമായി ഭക്തർ ശരണഘോഷത്തോടെ വണങ്ങുന്ന കലിയുഗവരദനായ ധർമ്മശാസ്താവ്.",
    significance: "Worshipped with Ghee lamps (Neyyvilakku), Neeranjanam, and Ayyappan Vilakku during the sacred Mandala-Makaravilakku season.",
    significanceMl: "മണ്ഡലകാലത്തും ശനിയാഴ്ചകളിലും വിശേഷാൽ നീരാജനവും നെയ്യഭിഷേകവും നടക്കുന്നു.",
    rituals: ["Neeranjanam", "Neyyabhishekam", "Sastha Pooja", "Padi Pooja", "Ayyappan Pattu"],
    ritualsMl: ["നീരാജനം", "നെയ്യഭിഷേകം", "ശാസ്താപൂജ", "പടിപൂജ", "അയ്യപ്പൻ പാട്ട്"],
    specialDays: ["Saturdays", "Uthram Star", "Mandala Season (Vrischikam-Dhanu)", "Makaravilakku"],
    specialDaysMl: ["ശനിയാഴ്ചകൾ", "ഉത്രം നാൾ", "മണ്ഡലകാലം", "മകരവിളക്ക്"],
    offerings: ["Neeranjanam", "Appam", "Aravana Naivedyam", "Neyyvilakku", "Karuppu Pattu"],
    offeringsMl: ["നീരാജനം", "അപ്പം", "അരവണ നിവേദ്യം", "നെയ്‌വിളക്ക്", "കറുപ്പ് പട്ട് ചാർത്തൽ"],
    mantra: "ഓം സ്വാമിയേ ശരണമയ്യപ്പാ | ഭൂതനാഥ സദാനന്ദ സർവ്വഭൂത ദയാപര | രക്ഷ രക്ഷ മഹാബാഹോ ശാസ്ത്രേ തുഭ്യം നമോ നമഃ ||"
  },
  {
    id: "bhadrakali",
    name: "Sree Bhadrakali",
    nameMl: "ശ്രീ ഭദ്രകാളി",
    title: "Fierce Protector & Vanquisher of Evil",
    titleMl: "വീരമാതാവ്",
    image: "/images/deity_bhadrakali.png",
    description: "The formidable form of the Mother Goddess who vanquishes demons of ego, sickness, sorcery, and injustice. She surrounds her devotees with an impenetrable shield of divine grace.",
    descriptionMl: "ദുഷ്ടശക്തികളെ നിഗ്രഹിച്ച് ഭക്തർക്ക് അഭയമേകുന്ന ഉഗ്രപ്രതാപിനിയായ അമ്മ. ശത്രുദോഷങ്ങളും ഗ്രഹപ്പിഴകളും അകറ്റി വിജയം നൽകുന്നു.",
    significance: "Worshipped with Guruthi pooja, Raktha Pushpanjali, and flame offerings to cut through negative energies and bestow unyielding protection.",
    significanceMl: "ശത്രുദോഷ ശമനത്തിനും ആഭിചാര ബാധകളിൽ നിന്നുള്ള മോചനത്തിനുമായി വലിയ ഗുരുതി പൂജയും രക്തപുഷ്പാഞ്ജലിയും നടത്തുന്നു.",
    rituals: ["Guruthi Pooja", "Kalam Pattu", "Raktha Pushpanjali", "Mudiyezhunnallathu"],
    ritualsMl: ["ഗുരുതി പൂജ", "കളമെഴുത്തും പാട്ടും", "രക്തപുഷ്പാഞ്ജലി", "മുടിയെഴുന്നള്ളത്ത്"],
    specialDays: ["Tuesdays & Fridays", "Bharani Star", "Amavasi (New Moon)", "Meena Bharani"],
    specialDaysMl: ["ചൊവ്വ, വെള്ളി", "ഭരണി നാൾ", "അമാവാസി", "മീനഭരണി"],
    offerings: ["Shatrusamhara Pushpanjali", "Guruthi", "Kadumpayasam", "Kunkuma Archana", "Thechi Garland"],
    offeringsMl: ["ശത്രുസംഹാര പുഷ്പാഞ്ജലി", "വലിയ ഗുരുതി", "കടുംപായസം", "കുങ്കുമാർച്ചന", "ചുവന്ന തെച്ചിമാല"],
    mantra: "കാളി കാളി മഹാകാളി ഭദ്രകാളി നമോസ്തുതേ | കുലം ച കുലധർമ്മം ച മാം ച പാലയ നിത്യശഃ ||"
  },
  {
    id: "cherukunnilamma",
    name: "Cherukunnilamma (Annapoorneshwari)",
    nameMl: "ചെറുകുന്നിലമ്മ (ശ്രീ അന്നപൂർണ്ണേശ്വരി)",
    title: "Benevolent Mother & Giver of Sustenance",
    titleMl: "അന്നദാത്രിയായ അമ്മ",
    image: "/images/deity_bhagavathy.jpg",
    description: "The compassionate Mother Goddess Cherukunnilamma, venerated as the deity of bounty, agriculture, and abundance who ensures that no devotee ever suffers hunger or poverty.",
    descriptionMl: "ഐശ്വര്യവും സമൃദ്ധിയും അന്നവും പ്രദാനം ചെയ്യുന്ന കാരുണ്യമയിയായ അമ്മ. കുടുംബങ്ങളിൽ ദാരിദ്ര്യമകറ്റി സദാ അന്നദാതൃത്വം ഉറപ്പാക്കുന്നു.",
    significance: "Revered with special rice and payasam offerings, invoked for agrarian bounty, food security, and family well-being.",
    significanceMl: "കുടുംബങ്ങളിൽ അന്നസമൃദ്ധിക്കും ഐശ്വര്യ വർദ്ധനവിനുമായി വിശേഷാൽ പൂജകൾ സമർപ്പിക്കുന്നു.",
    rituals: ["Nithya Annadanam Seva", "Paalpayasa Pooja", "Thrikkala Pooja", "Deeparadhana"],
    ritualsMl: ["നിത്യ അന്നദാന സേവ", "പാൽപ്പായസ പൂജ", "ത്രികാല പൂജ", "ദീപാരാധന"],
    specialDays: ["Fridays", "Pournami (Full Moon)", "Akshaya Tritiya", "Vishu"],
    specialDaysMl: ["വെള്ളിയാഴ്ചകൾ", "പൗർണ്ണമി", "അക്ഷയ തൃതീയ", "വിഷു"],
    offerings: ["Annadanam Contribution", "Paalpayasam", "Neyyappam", "Pattu", "Malar Para"],
    offeringsMl: ["അന്നദാന സമർപ്പണം", "പാൽപ്പായസം", "നെയ്യപ്പം", "പട്ട് സമർപ്പണം", "മലർ പറ"],
    mantra: "അന്നപൂർണ്ണേ സദാപൂർണ്ണേ ശങ്കരപ്രാണവല്ലഭേ | ജ്ഞാനവൈരാഗ്യസിദ്ധ്യർത്ഥം ഭിക്ഷാം ദേഹി ച പാർവ്വതി ||"
  },
  {
    id: "hanuman",
    name: "Sree Hanuman Swami (Anjaneya)",
    nameMl: "ശ്രീ ഹനുമാൻ സ്വാമി (ആഞ്ജനേയൻ)",
    title: "Embodiment of Devotion & Strength",
    titleMl: "ധീരതയുടെയും ഭക്തിയുടെയും മൂർത്തി",
    image: "/images/deity_hanuman.png",
    description: "The supreme embodiment of unwavering devotion, immense valor, and humility. Sree Hanuman protects devotees from fear, evil spirits, and enemies, conferring physical and mental vigor.",
    descriptionMl: "ഭക്തിയുടെയും ശക്തിയുടെയും ആൾരൂപമായ ആഞ്ജനേയ സ്വാമി. സർവ്വവിധ ഭയങ്ങളും ദുരിതങ്ങളും അകറ്റി ആത്മവിശ്വാസവും ധൈര്യവും പ്രധാനം ചെയ്യുന്നു.",
    significance: "Worshipped with betel leaf garlands (Vethila Mala), butter alankaram, and Vada Mala for overcoming impossible odds and speech/educational prosperity.",
    significanceMl: "ശനിദോഷ ശാന്തിക്കും കാര്യവിജയത്തിനുമായി വെറ്റിലമാലയും വെണ്ണക്കാപ്പും വടമാലയും സമർപ്പിക്കുന്നു.",
    rituals: ["Vadamala Charthal", "Vethila Mala Pooja", "Sindoorarchana", "Hanuman Chalisa Parayanam"],
    ritualsMl: ["വടമാല ചാർത്തൽ", "വെറ്റിലമാല സമർപ്പണം", "സിന്ദൂരാർച്ചന", "ഹനുമാൻ ചാലിസ പാരായണം"],
    specialDays: ["Tuesdays & Saturdays", "Moolam Star", "Hanuman Jayanti"],
    specialDaysMl: ["ചൊവ്വ, ശനി ദിവസങ്ങൾ", "മൂലം നാൾ", "ഹനുമാൻ ജയന്തി"],
    offerings: ["Vethila Mala", "Vadamala", "Venna Kappe (Butter Adornment)", "Avil Naivedyam", "Sindooram"],
    offeringsMl: ["വെറ്റില മാല", "വടമാല", "വെണ്ണക്കാപ്പ്", "അവിൽ നിവേദ്യം", "സിന്ദൂരം ചാർത്തൽ"],
    mantra: "മനോജവം മാരുതതുല്യവേഗം ജിതേന്ദ്രിയം ബുദ്ധിമതാം വരിഷ്ഠം | വാതാത്മജം വാനരയൂഥമുഖ്യം ശ്രീരാമദൂതം ശരണം പ്രപദ്യേ ||"
  },
  {
    id: "vettekkaran",
    name: "Lord Vettekkaran (Vettakkorumakan)",
    nameMl: "വേട്ടേക്കരൻ (ശ്രീ വേട്ടക്കൊരുമകൻ)",
    title: "Lord of Martial Valor & Divine Warrior",
    titleMl: "കളരിത്തറയുടെ പരദേവത",
    image: "/images/deity_vettakkaran.jpg",
    description: "The heroic warrior deity born of the divine Kiratha avatars. A pivotal deity for the Kaladithara martial tradition who grants victory, courage, and protection from adversarial threats.",
    descriptionMl: "കിരാതമൂർത്തി ഭാവത്തിലുള്ള ധീരയോദ്ധാവ്. കളരിത്തറയുടെ പവിത്രമായ ആയോധന പരദേവതയായി സർവ്വ വിജയങ്ങളും പ്രധാനം ചെയ്യുന്നു.",
    significance: "Worshipped with Pantheerayiram Thenga Udakkal (breaking coconuts) and martial rites for land protection and victory in legal and personal struggles.",
    significanceMl: "കാര്യവിജയത്തിനും ശത്രുഭയം നീങ്ങുന്നതിനുമായി നാളികേരം ഉടയ്ക്കലും വിശേഷാൽ വേട്ടേക്കരൻ പാട്ടും നടത്തപ്പെടുന്നു.",
    rituals: ["Thenga Udakkal (Coconut Breaking)", "Vettekkaran Pattu", "Kalam Ezhuthu", "Kudumba Pooja"],
    ritualsMl: ["നാളികേരം ഉടയ്ക്കൽ", "വേട്ടേക്കരൻ പാട്ട്", "കളമെഴുത്ത്", "കുളമ്പടി പൂജ"],
    specialDays: ["Mondays & Thursdays", "Ayilyam & Rohini Stars", "Annual Vettekkaran Pattu"],
    specialDaysMl: ["തിങ്കൾ, വ്യാഴം ദിവസങ്ങൾ", "രോഹിണി നാൾ", "വാർഷിക പാട്ടുത്സവം"],
    offerings: ["Thenga Udakkal", "Vettekkaran Pattu", "Choroonu / Anna Prasadam", "Vilakku"],
    offeringsMl: ["നാളികേരം ഉടയ്ക്കൽ", "വേട്ടേക്കരൻ പാട്ട്", "നെയ്‌വിളക്ക്", "അവിലും മലരും"],
    mantra: "കിരാതമൂർത്തി തനയം വിഷ്ണുഭക്തി സമന്വിതം | ശരചാപധരം വീരം വേട്ടേക്കരമഹം ഭജേ ||"
  },
  {
    id: "upadevathas",
    name: "Nagarajavu, Brahmarakshass & Kshetrapalakan",
    nameMl: "നാഗരാജാവ്, ബ്രഹ്മരക്ഷസ്സ് & ക്ഷേത്രപാലകൻ",
    title: "Sacred Upadevathas & Guardian Shrines",
    titleMl: "ഉപദേവതകളും കാവൽ മൂർത്തികളും",
    image: "/images/temple_courtyard.png",
    description: "The venerable guardian and sacred grove deities of the temple precinct: Nagarajavu presiding over the sylvan Sarpa Kavu, Brahmarakshass ensuring ancestral solace and family concord, and Kshetrapalakan safeguarding the temple borders and devotees with unyielding protective grace.",
    descriptionMl: "ക്ഷേത്ര സങ്കേതത്തിലെ പവിത്രമായ ഉപദേവതാ സന്നിധികൾ: സർപ്പദോഷ ശമനത്തിനായി സർപ്പക്കാവിൽ കുടികൊള്ളുന്ന നാഗരാജാവ്, കുടുംബ ശാന്തിയും കുലരക്ഷയും നൽകുന്ന ബ്രഹ്മരക്ഷസ്സ്, ക്ഷേത്രാതിരുകളെ സംരക്ഷിക്കുന്ന ഉഗ്രമൂർത്തിയായ ക്ഷേത്രപാലകൻ.",
    significance: "Worshipped with Ayilyam Noorum Palum, Paalpayasam, and evening Malar Deepam to preserve spiritual peace, remove planetary afflictions, and secure homes from danger.",
    significanceMl: "ആയില്യം നാളുകളിലെ നൂറുംപാലും, വിശേഷാൽ ബ്രഹ്മരക്ഷസ്സ് പാൽപ്പായസ പൂജയും, സന്ധ്യാവേളയിലെ ക്ഷേത്രപാലക മലർ നിവേദ്യവും കുടുംബത്തിനും നാടിനും സർവ്വ ഐശ്വര്യങ്ങളും കാവലും പ്രധാനം ചെയ്യുന്നു.",
    rituals: ["Sarpa Kavu Noorum Palum", "Brahmarakshass Pooja & Paalpayasam", "Kshetrapala Pooja & Malar Nivedyam", "Sandhya Deepam"],
    ritualsMl: ["സർപ്പക്കാവ് നൂറും പാലും", "ബ്രഹ്മരക്ഷസ്സ് പൂജ & പാൽപ്പായസം", "ക്ഷേത്രപാലക പൂജ & മലർ നിവേദ്യം", "സന്ധ്യാദീപം"],
    specialDays: ["Ayilyam Stars (Every month)", "Tuesdays & Saturdays", "Amavasi (New Moon)"],
    specialDaysMl: ["പ്രതിമാസ ആയില്യം നാൾ", "ചൊവ്വ, ശനി ദിവസങ്ങൾ", "അമാവാസി നാളുകൾ"],
    offerings: ["Noorum Palum", "Paalpayasam (Brahmarakshass)", "Malar Nivedyam", "Manjal Podi Charthal", "Neyyvilakku"],
    offeringsMl: ["നൂറും പാലും", "ബ്രഹ്മരക്ഷസ്സിന് പാൽപ്പായസം", "മലർ നിവേദ്യം", "മഞ്ഞൾപ്പൊടി ചാർത്തൽ", "നെയ്‌വിളക്ക്"],
    mantra: "ഓം നമോ നാഗരാജായ നമഃ | ഓം നമോ ബ്രഹ്മരക്ഷസ്സേ നമഃ | ക്ഷേത്രപാല മഹാശൂര സർവ്വരിപുനിവാരണ മമ രക്ഷാം കുരു ദേവ ||"
  }
];

export const dailySchedule: DailyScheduleSlot[] = [
  {
    id: "slot-1",
    time: "05:00 AM",
    name: "Nadayil Thirunada Thurakkal & Nirmalya Darshanam",
    nameMl: "നടതുറക്കലും നിർമ്മാല്യ ദർശനവും",
    description: "Temple doors open with the ringing of sanctum bells, followed by auspicious darshan of deity in yesterday's floral adornment.",
    descriptionMl: "ശംഖനാദത്തോടും മണിനാദത്തോടും കൂടി നടതുറക്കൽ. ഇന്നലത്തെ ചന്ദനക്കാപ്പും പൂമാലകളും അണിഞ്ഞുള്ള നിർമ്മാല്യ ദർശനം.",
    period: "morning"
  },
  {
    id: "slot-2",
    time: "05:30 AM",
    name: "Abhishekam & Malar Naivedyam",
    nameMl: "അഭിഷേകവും മലർ നിവേദ്യവും",
    description: "Sacred holy water ablutions, fresh flower offerings, and traditional roasted puffed rice naivedyam.",
    descriptionMl: "പുണ്യതീർത്ഥ അഭിഷേകം, തിരുമുൽക്കാഴ്ച, മലർ നിവേദ്യം.",
    period: "morning"
  },
  {
    id: "slot-3",
    time: "06:00 AM",
    name: "Usha Pooja & Deeparadhana",
    nameMl: "ഉഷഃപൂജയും ദീപാരാധനയും",
    description: "Morning Tantric pooja and sacred Deeparadhana with sounding of bells and blowing of conch.",
    descriptionMl: "പ്രഭാത പൂജയും ശംഖനാദത്തോടും മണിനാദത്തോടും കൂടിയുള്ള വിശേഷാൽ ദീപാരാധനയും.",
    period: "morning"
  },
  {
    id: "slot-4",
    time: "07:30 AM",
    name: "Pantheeradi Pooja & Pushpanjali Seva",
    nameMl: "പന്തീരടി പൂജയും പുഷ്പാഞ്ജലി സേവകളും",
    description: "Mid-morning pooja followed by individual devotee pushpanjali and archana offerings.",
    descriptionMl: "പന്തീരടി പൂജയും ഭക്തജനങ്ങളുടെ പുഷ്പാഞ്ജലി സമർപ്പണങ്ങളും.",
    period: "morning"
  },
  {
    id: "slot-5",
    time: "10:30 AM",
    name: "Ucha Pooja & Maha Naivedyam",
    nameMl: "ഉച്ചപൂജയും മഹാ നിവേദ്യവും",
    description: "Grand noon pooja with Paalpayasam, Kadumpayasam, and midday naivedyam.",
    descriptionMl: "മധുര പായസ നിവേദ്യങ്ങളോടെയുള്ള വിശേഷാൽ ഉച്ചപൂജ.",
    period: "morning"
  },
  {
    id: "slot-6",
    time: "11:30 AM",
    name: "Ucha Pooja Deeparadhana & Morning Nadayadakkal",
    nameMl: "ഉച്ച ദീപാരാധനയും നടയടപ്പും",
    description: "Noon Deeparadhana and closure of the sanctum for the afternoon recess.",
    descriptionMl: "ഉച്ച ദീപാരാധനയ്ക്ക് ശേഷം ക്ഷേത്രനട അടയ്ക്കൽ.",
    period: "morning"
  },
  {
    id: "slot-7",
    time: "05:00 PM",
    name: "Evening Nada Thurakkal",
    nameMl: "വൈകുന്നേരത്തെ നടതുറക്കൽ",
    description: "Temple doors re-open for evening darshan as dusk approaches.",
    descriptionMl: "സന്ധ്യാ ദർശനത്തിനായി ക്ഷേത്ര തിരുനട തുറക്കൽ.",
    period: "evening"
  },
  {
    id: "slot-8",
    time: "06:30 PM",
    name: "Sandhya Deeparadhana (Sacred Lamp Illuminations)",
    nameMl: "സന്ധ്യാ ദീപാരാധന & ചുറ്റുവിളക്ക്",
    description: "The most sacred evening spectacle with traditional brass lamps burning bright to the rhythms of the temple bell.",
    descriptionMl: "മണിമുഴക്കവും ശംഖനാദവും അകമ്പടിയായി പിച്ചള നിലവിളക്കുകളുടെ പ്രഭയിൽ നടക്കുന്ന ഭക്തിസാന്ദ്രമായ ദീപാരാധന.",
    period: "evening"
  },
  {
    id: "slot-9",
    time: "07:30 PM",
    name: "Athazha Pooja (Night Offering)",
    nameMl: "അത്താഴപൂജ & തൃപ്പുക",
    description: "Night worship offering followed by the sacred fragrant incense offering (Thrippuka).",
    descriptionMl: "രാത്രിയിലെ നിവേദ്യ സമർപ്പണവും സുഗന്ധധൂപം പുകയ്ക്കുന്ന തൃപ്പുക ചടങ്ങും.",
    period: "evening"
  },
  {
    id: "slot-10",
    time: "08:00 PM",
    name: "Night Nadayadakkal",
    nameMl: "രാത്രി നടയടയ്ക്കൽ",
    description: "Final evening prayers and closing of the sanctum sanctorum for the night.",
    descriptionMl: "രാത്രിയിലെ പ്രാർത്ഥനകൾക്ക് ശേഷം ക്ഷേത്രനട അടയ്ക്കൽ.",
    period: "evening"
  }
];

export const specialPoojas: SpecialPooja[] = [
  {
    id: "bhagavathy-seva",
    name: "Sree Bhagavathy Seva",
    nameMl: "ശ്രീ ഭഗവതി സേവ",
    occasion: "Conducted at dusk on Fridays, Pournami, and Mandala season",
    occasionMl: "വെള്ളിയാഴ്ചകൾ, പൗർണ്ണമി, മണ്ഡലകാല സന്ധ്യകളിൽ",
    time: "07:00 PM",
    deity: "Sree Bhagavathy",
    deityMl: "ശ്രീ ഭഗവതി",
    description: "Intricate Tantric ritual performed around a sacred Padma kolam invoking the benevolent grace of the Supreme Mother Goddess for family prosperity, disease cure, and positive energy.",
    descriptionMl: "പദ്മമിട്ട് വിളക്കുവെച്ച് സർവ്വ മംഗളങ്ങൾക്കുമായി ഭഗവതിയെ പ്രസാദിപ്പിക്കുന്ന താന്ത്രിക ചടങ്ങ്.",
    offerings: ["Silk Cloth", "Ghee Lamp", "Sweet Rice Naivedyam", "Thechi Flower Garland"],
    offeringsMl: ["പട്ട് സമർപ്പണം", "നെയ്‌വിളക്ക്", "ശർക്കരപ്പായസം", "തെച്ചിമാല"]
  },
  {
    id: "ayyappan-vilakku-special",
    name: "Ayyappan Vilakku & Padi Pooja",
    nameMl: "അയ്യപ്പൻ വിളക്കും പടിപൂജയും",
    occasion: "Saturdays, Mandala season & special vow days",
    occasionMl: "ശനിയാഴ്ചകളിലും മണ്ഡലകാലത്തും വിശേഷാൽ വ്രത ദിനങ്ങളിലും",
    time: "06:30 PM",
    deity: "Lord Sree Ayyappa",
    deityMl: "ശ്രീ ധർമ്മശാസ്താവ്",
    description: "Sacred lamps illumination and traditional Padi Pooja accompanied by Sastha Ashtakam and Ayyappan Pattu for removal of Saturn afflictions.",
    descriptionMl: "ശനിദോഷ ശാന്തിക്കും ആഗ്രഹസിദ്ധിക്കുമായി ശാസ്താവിന് സമർപ്പിക്കുന്ന വിശേഷാൽ അയ്യപ്പൻ വിളക്കും പടിപൂജയും.",
    offerings: ["Neeranjanam", "Appam", "Aravana", "Ghee Lamps"],
    offeringsMl: ["നീരാജനം", "അപ്പം", "അരവണ", "നെയ്‌വിളക്ക്"]
  },
  {
    id: "ayilyam-sarpa-pooja",
    name: "Sarpa Kavu Ayilyam Pooja & Noorum Palum",
    nameMl: "ആയില്യം പൂജയും നൂറും പാലും",
    occasion: "Every month on Ayilyam asterism",
    occasionMl: "എല്ലാ മാസത്തിലെയും ആയില്യം നാളിൽ",
    time: "09:30 AM",
    deity: "Nagarajavu & Upadevathas",
    deityMl: "നാഗരാജാവ് & ഉപദേവതകൾ",
    description: "Traditional serpent grove ritual where turmeric, milk, tender coconut, and rice flour are offered to appease Sarpa deities for progeny and domestic tranquility.",
    descriptionMl: "നാഗപ്രീതിക്കായി മഞ്ഞൾപ്പൊടിയും പാലും ചേർത്തുള്ള നൂറുംപാലും നിവേദ്യം.",
    offerings: ["Milk (Palum)", "Turmeric Powder", "Kadali Plantains", "Ghee Lamps"],
    offeringsMl: ["പാലും നൂറും", "മഞ്ഞൾപ്പൊടി", "കദളിപ്പഴം", "നെയ്‌വിളക്ക്"]
  },
  {
    id: "chuttuvilakku-mahotsavam",
    name: "Chuttuvilakku & Niramala",
    nameMl: "ചുറ്റുവിളക്കും നിറമാലയും",
    occasion: "Special vow days, Utsavam days, and Karthika star",
    occasionMl: "വിശേഷ വഴിപാട് ദിനങ്ങളിലും കാർത്തിക നാളിലും",
    time: "06:30 PM",
    deity: "All Deities",
    deityMl: "സർവ്വ ദേവതകൾക്കും",
    description: "Hundreds of bronze lamps along the exterior wooden balustrade (Vilakkumadam) of the Nalambalam are lit with sesame oil, turning the temple into a glowing celestial jewel.",
    descriptionMl: "ക്ഷേത്ര നാലമ്പലത്തിലെ വിളക്കുമാടങ്ങളിൽ നൂറുകണക്കിന് ദീപങ്ങൾ തെളിയിക്കുന്ന നയനമനോഹരമായ വഴിപാട്.",
    offerings: ["Sesame Oil", "Floral Garlands", "Naivedyam", "Incense"],
    offeringsMl: ["നല്ലെണ്ണ", "പൂമാലകൾ", "നിവേദ്യം", "സുഗന്ധധൂപം"]
  }
];

export const offerings: Offering[] = [
  {
    id: "off-1",
    name: "Raktha Pushpanjali",
    nameMl: "രക്തപുഷ്പാഞ്ജലി",
    deityId: "bhagavathy",
    deityName: "Sree Bhagavathy",
    deityNameMl: "ശ്രീ ഭഗവതി",
    description: "Sacred archana performed with red thechi (ixora) and hibiscus flowers chanting Bhagavathy Moola Mantra for removal of enemies, obstacles, and mental stress.",
    descriptionMl: "ശത്രുദോഷ ശമനത്തിനും ആഗ്രഹസാഫല്യത്തിനുമായി ചുവന്ന തെച്ചിപ്പൂക്കൾ കൊണ്ട് ഭഗവതിക്ക് ചെയ്യുന്ന പുഷ്പാഞ്ജലി.",
    price: 30,
    category: "archana",
    categoryLabel: "Pushpanjali",
    categoryLabelMl: "പുഷ്പാഞ്ജലി",
    bookingAvailable: true,
    benefits: "Removes negative vibrations, brings courage and mental clarity.",
    benefitsMl: "ദൃഷ്ടിദോഷങ്ങൾ മാറാനും മനശാന്തിക്കും ഉത്തമം."
  },
  {
    id: "off-2",
    name: "Bhagya Sooktha Pushpanjali",
    nameMl: "ഭാഗ്യസൂക്ത പുഷ്പാഞ്ജലി",
    deityId: "bhagavathy",
    deityName: "Sree Bhagavathy",
    deityNameMl: "ശ്രീ ഭഗവതി",
    description: "Vedic hymns of Bhagya Sooktham chanted with fragrant flowers for wealth, business luck, and career elevation.",
    descriptionMl: "ധനധാന്യ സമൃദ്ധിക്കും തൊഴിൽ പുരോഗതിക്കും ഐശ്വര്യത്തിനുമായി വേദമന്ത്രങ്ങളോടെ ചെയ്യുന്ന പുഷ്പാഞ്ജലി.",
    price: 50,
    category: "archana",
    categoryLabel: "Pushpanjali",
    categoryLabelMl: "പുഷ്പാഞ്ജലി",
    bookingAvailable: true,
    benefits: "Brings prosperity, family fortune, and victory.",
    benefitsMl: "ഭാഗ്യവർദ്ധനവും തൊഴിൽ വിജയവും."
  },
  {
    id: "off-3",
    name: "Ayyappa Neeranjanam",
    nameMl: "അയ്യപ്പന് നീരാജനം",
    deityId: "ayyappa",
    deityName: "Lord Sree Ayyappa",
    deityNameMl: "ശ്രീ ധർമ്മശാസ്താവ്",
    description: "Sacred sesame seed (ellu) lamp lit in broken coconut half with pure gingelly oil to pacify Shani dosha and bring peace.",
    descriptionMl: "ശനിദോഷ ശാന്തിക്കും ആഗ്രഹസാഫല്യത്തിനുമായി എള്ളുതിരി കത്തിച്ചു നടത്തുന്ന വിശേഷാൽ നീരാജനം സമർപ്പണം.",
    price: 60,
    category: "lamp",
    categoryLabel: "Vilakku",
    categoryLabelMl: "വിളക്ക്",
    bookingAvailable: true,
    benefits: "Protection from Shani dosha, relieves hardship, brings mental fortitude.",
    benefitsMl: "ശനിദോഷ ശമനത്തിനും ആത്മശാന്തിക്കും ഉത്തമം."
  },
  {
    id: "off-4",
    name: "Sree Bhagavathy Seva",
    nameMl: "സന്ധ്യാ ഭഗവതി സേവ",
    deityId: "bhagavathy",
    deityName: "Sree Bhagavathy",
    deityNameMl: "ശ്രീ ഭഗവതി",
    description: "Detailed evening Tantric pooja performed in front of a ceremonial lamp with sacred floral mandalam.",
    descriptionMl: "കുടുംബൈശ്വര്യത്തിനും സകല ആപത്തുകൾ നീങ്ങുന്നതിനുമായി സന്ധ്യയ്ക്ക് ചെയ്യുന്ന വിശേഷാൽ ഭഗവതി സേവ.",
    price: 500,
    category: "special",
    categoryLabel: "Special Seva",
    categoryLabelMl: "വിശേഷാൽ സേവ",
    bookingAvailable: true,
    benefits: "Bestows divine grace, cures ailments, and safeguards the household.",
    benefitsMl: "കുടുംബ സുരക്ഷിതത്വവും ശാന്തിയും."
  },
  {
    id: "off-5",
    name: "Paalpayasam (Sweet Milk Porridge)",
    nameMl: "വിശേഷാൽ പാൽപ്പായസം",
    deityId: "bhagavathy",
    deityName: "Sree Bhagavathy",
    deityNameMl: "ശ്രീ ഭഗവതി",
    description: "Traditional Kerala sweet rice porridge cooked slowly in pure cow's milk and unrefined sugar in bronze uruli.",
    descriptionMl: "പശുവിൻ പാലിലും പഞ്ചസാരയിലും പാരമ്പര്യമായി തയ്യാറാക്കുന്ന വിശിഷ്ട നിവേദ്യ പായസം.",
    price: 120,
    category: "naivedyam",
    categoryLabel: "Naivedyam",
    categoryLabelMl: "നിവേദ്യം",
    bookingAvailable: true,
    benefits: "Auspicious offering for health, children, and peace.",
    benefitsMl: "ആയുരാരോഗ്യത്തിനും സന്താനഭാഗ്യത്തിനും."
  },
  {
    id: "off-6",
    name: "Kadumpayasam / Neipayasam",
    nameMl: "കടുംപായസം (നെയ്പായസം)",
    deityId: "bhagavathy",
    deityName: "Sree Bhagavathy",
    deityNameMl: "ശ്രീ ഭഗവതി",
    description: "Rich dark jaggery, rice, and pure ghee delicacy offered to Mother Bhagavathy during noon pooja.",
    descriptionMl: "ശർക്കരയും ശുദ്ധമായ പശുവിൻ നെയ്യും ചേർത്തുണ്ടാക്കുന്ന ദേവിയുടെ ഇഷ്ട നിവേദ്യം.",
    price: 150,
    category: "naivedyam",
    categoryLabel: "Naivedyam",
    categoryLabelMl: "നിവേദ്യം",
    bookingAvailable: true,
    benefits: "Fulfilment of earnest desires and protection from evil eyes.",
    benefitsMl: "കാര്യസിദ്ധിക്കും ശത്രുദോഷ ശമനത്തിനും."
  },
  {
    id: "off-7",
    name: "Neyyvilakku (Ghee Lamp)",
    nameMl: "നെയ്‌വിളക്ക് സമർപ്പണം",
    deityId: "bhagavathy",
    deityName: "All Deities",
    deityNameMl: "എല്ലാ പ്രതിഷ്ഠകൾക്കും",
    description: "Lighting pure cow's ghee in sanctum brass lamp for inner light, wisdom, and auspiciousness.",
    descriptionMl: "ശുദ്ധമായ പശുവിൻ നെയ്യ് ഒഴിച്ച് ശ്രീകോവിലിന് മുന്നിൽ ദീപം തെളിയിക്കുന്ന സമർപ്പണം.",
    price: 40,
    category: "lamp",
    categoryLabel: "Vilakku",
    categoryLabelMl: "വിളക്ക്",
    bookingAvailable: true,
    benefits: "Illuminates life with divine grace and removes spiritual darkness.",
    benefitsMl: "ആത്മീയ ഉണർവ്വിനും നേത്രരോഗ ശമനത്തിനും."
  },
  {
    id: "off-8",
    name: "Chuttuvilakku (Complete Sanctum Illumination)",
    nameMl: "ചുറ്റുവിളക്ക് സമർപ്പണം",
    deityId: "bhagavathy",
    deityName: "Sree Bhagavathy",
    deityNameMl: "ശ്രീ ഭഗവതി",
    description: "Lighting the entire perimeter of brass oil lamps surrounding the temple nalambalam during evening Deeparadhana.",
    descriptionMl: "സന്ധ്യാ ദീപാരാധന വേളയിൽ ക്ഷേത്ര ചുറ്റുമതിലിലെ മുഴുവൻ വിളക്കുകളും തെളിയിക്കുന്ന മഹത്തായ വഴിപാട്.",
    price: 2500,
    category: "lamp",
    categoryLabel: "Vilakku",
    categoryLabelMl: "വിളക്ക്",
    bookingAvailable: true,
    benefits: "Universal blessings, celebration of milestones, and immense divine merit.",
    benefitsMl: "സകല ഐശ്വര്യങ്ങൾക്കും കുടുംബ നന്മയ്ക്കും."
  },
  {
    id: "off-9",
    name: "Noorum Palum for Serpents",
    nameMl: "നൂറും പാലും നിവേദ്യം",
    deityId: "upadevathas",
    deityName: "Nagarajavu & Upadevathas",
    deityNameMl: "നാഗരാജാവ്",
    description: "Sacred mixture of rice powder, turmeric, and fresh milk offered at the Sarpa Kavu.",
    descriptionMl: "സർപ്പക്കാവിൽ നാഗരാജാവിനും നാഗയക്ഷിക്കും നൽകുന്ന വിശേഷ സമർപ്പണം.",
    price: 100,
    category: "special",
    categoryLabel: "Sarpa Vazhipad",
    categoryLabelMl: "സർപ്പ വഴിപാട്",
    bookingAvailable: true,
    benefits: "Relief from Sarpa Dosha and fertility blessings.",
    benefitsMl: "സർപ്പദോഷ ശമനത്തിനും സന്താനലബ്ധിക്കും."
  },
  {
    id: "off-10",
    name: "Thalappoli Vazhipad",
    nameMl: "താലപ്പൊലി സമർപ്പണം",
    deityId: "bhagavathy",
    deityName: "Sree Bhagavathy",
    deityNameMl: "ശ്രീ ഭഗവതി",
    description: "Traditional procession holding brass plates with lit lamps, rice, and flowers during festival evenings.",
    descriptionMl: "ഉത്സവ സന്ധ്യയിൽ താലമേന്തി ഭഗവതിയെ തൊഴുന്ന ഭക്തിനിർഭരമായ സമർപ്പണം.",
    price: 200,
    category: "special",
    categoryLabel: "Festival Vazhipad",
    categoryLabelMl: "ഉത്സവ വഴിപാട്",
    bookingAvailable: true,
    benefits: "Blessings for marriage, prosperity, and joy for women and youth.",
    benefitsMl: "മാംഗല്യഭാഗ്യത്തിനും കുടുംബ ക്ഷേമത്തിനും."
  },
  {
    id: "off-11",
    name: "Thenga Udakkal (Coconut Breaking)",
    nameMl: "വേട്ടേക്കരന് നാളികേരം ഉടയ്ക്കൽ",
    deityId: "vettekkaran",
    deityName: "Lord Vettekkaran",
    deityNameMl: "ശ്രീ വേട്ടേക്കരൻ",
    description: "Traditional breaking of auspicious coconut on the sacred stone altar to smash obstacles and ensure victory in struggles.",
    descriptionMl: "കാര്യവിജയത്തിനും ശത്രുദോഷ നിവാരണത്തിനുമായി കളരിത്തറ പരദേവതയായ വേട്ടേക്കരന് നാളികേരം ഉടയ്ക്കുന്ന പ്രാർത്ഥന.",
    price: 50,
    category: "special",
    categoryLabel: "Special Vazhipad",
    categoryLabelMl: "വിശേഷാൽ വഴിപാട്",
    bookingAvailable: true,
    benefits: "Victory in endeavours, protection of family and property, dispels fear.",
    benefitsMl: "കാര്യവിജയത്തിനും ആപത്തുക്കളിൽ നിന്നുള്ള രക്ഷയ്ക്കും."
  },
  {
    id: "off-12",
    name: "Vethila Mala & Venna Kappu",
    nameMl: "വെറ്റിലമാല & വെണ്ണക്കാപ്പ്",
    deityId: "hanuman",
    deityName: "Sree Hanuman Swami",
    deityNameMl: "ശ്രീ ഹനുമാൻ സ്വാമി",
    description: "Offering of fresh green betel leaf garland and sacred butter adornment for physical endurance, intellect, and overcoming obstacles.",
    descriptionMl: "കാര്യതടസ്സങ്ങൾ നീങ്ങാനും വിദ്യവിജയത്തിനും ആത്മധൈര്യത്തിനുമായി ഹനുമാൻ സ്വാമിക്ക് സമർപ്പിക്കുന്ന വെറ്റിലമാലയും വെണ്ണക്കാപ്പും.",
    price: 70,
    category: "archana",
    categoryLabel: "Alankaram",
    categoryLabelMl: "അലങ്കാരം",
    bookingAvailable: true,
    benefits: "Removes fears, bestows courage, wisdom, and victory over challenges.",
    benefitsMl: "ഭയനിവാരണത്തിനും ധൈര്യത്തിനും വിദ്യോന്നതിക്കും."
  },
  {
    id: "off-13",
    name: "Shatrusamhara Pushpanjali",
    nameMl: "ശത്രുസംഹാര പുഷ്പാഞ്ജലി",
    deityId: "bhadrakali",
    deityName: "Sree Bhadrakali",
    deityNameMl: "ശ്രീ ഭദ്രകാളി",
    description: "Potent Tantric archana invoking the fierce grace of Mother Bhadrakali to shatter negative influences, jealousy, and adversity.",
    descriptionMl: "ശത്രുദോഷങ്ങൾ, കണ്ണേറ്, ആഭിചാര ദോഷങ്ങൾ എന്നിവ അകറ്റി പൂർണ്ണ സംരക്ഷണം ലഭിക്കാനായി ഭദ്രകാളിക്ക് സമർപ്പിക്കുന്ന പുഷ്പാഞ്ജലി.",
    price: 50,
    category: "archana",
    categoryLabel: "Pushpanjali",
    categoryLabelMl: "പുഷ്പാഞ്ജലി",
    bookingAvailable: true,
    benefits: "Shields against negative forces, grants fearlessness, and clears life obstacles.",
    benefitsMl: "ശത്രുദോഷ ശമനത്തിനും ആത്മധൈര്യത്തിനും."
  },
  {
    id: "off-14",
    name: "Nithya Annadanam Seva",
    nameMl: "ചെറുകുന്നിലമ്മയ്ക്ക് അന്നദാന സമർപ്പണം",
    deityId: "cherukunnilamma",
    deityName: "Cherukunnilamma",
    deityNameMl: "ചെറുകുന്നിലമ്മ",
    description: "Holy food offering to Annapoorneshwari Cherukunnilamma ensuring prosperity, eradication of hunger, and continuous abundance.",
    descriptionMl: "കുടുംബങ്ങളിൽ ദാരിദ്ര്യമകറ്റി അന്നസമൃദ്ധിയും ഐശ്വര്യവും നിലനിൽക്കുന്നതിനായി ചെറുകുന്നിലമ്മയ്ക്ക് സമർപ്പിക്കുന്ന അന്നദാനം.",
    price: 101,
    category: "special",
    categoryLabel: "Annadanam",
    categoryLabelMl: "അന്നദാനം",
    bookingAvailable: true,
    benefits: "Brings inexhaustible food bounty, health, and familial harmony.",
    benefitsMl: "കുടുംബൈശ്വര്യത്തിനും അന്നസമൃദ്ധിക്കും."
  },
  {
    id: "off-15",
    name: "Malar Nivedyam & Aroor Deepam",
    nameMl: "മലർ നിവേദ്യവും സന്ധ്യാദീപവും",
    deityId: "upadevathas",
    deityName: "Kshetrapalakan",
    deityNameMl: "ക്ഷേത്രപാലകൻ",
    description: "Traditional roasted puffed rice and sacred oil deepam offered to the vigilant compound sentinel to guard life and safe journeys.",
    descriptionMl: "യാത്രാരക്ഷയ്ക്കും വീടിന്റെയും നാടിന്റെയും കാവലിനുമായി ക്ഷേത്രപാലകന് സമർപ്പിക്കുന്ന മലർ നിവേദ്യവും ദീപവും.",
    price: 35,
    category: "naivedyam",
    categoryLabel: "Naivedyam",
    categoryLabelMl: "നിവേദ്യം",
    bookingAvailable: true,
    benefits: "Protects during journeys, secures homes, dispels unseen dangers.",
    benefitsMl: "യാത്രാസുരക്ഷിതത്വത്തിനും സർവ്വതോന്മുഖമായ കാവലിനും."
  },
  {
    id: "off-16",
    name: "Brahmarakshass Paalpayasa Pooja",
    nameMl: "ബ്രഹ്മരക്ഷസ്സിന് പൂജയും പാൽപ്പായസവും",
    deityId: "upadevathas",
    deityName: "Brahmarakshass",
    deityNameMl: "ബ്രഹ്മരക്ഷസ്സ്",
    description: "Special white sweet rice milk porridge and floral archana offered to Brahmarakshass for family harmony, mental peace, and ancestral grace.",
    descriptionMl: "കുടുംബശാന്തിക്കും കുലദോഷങ്ങൾ നീങ്ങി മനസ്സിന് ശാന്തി ലഭിക്കുന്നതിനുമായി ബ്രഹ്മരക്ഷസ്സിന് സമർപ്പിക്കുന്ന പാൽപ്പായസം.",
    price: 75,
    category: "naivedyam",
    categoryLabel: "Naivedyam",
    categoryLabelMl: "നിവേദ്യം",
    bookingAvailable: true,
    benefits: "Dissolves ancestral afflictions, brings household tranquility and well-being.",
    benefitsMl: "കുലദോഷ ശമനത്തിനും കുടുംബ സമാധാനത്തിനും."
  }
];

export const festivals: Festival[] = [
  {
    id: "annual-utsavam",
    name: "Annual Temple Utsavam (Makaram 30)",
    nameMl: "വാർഷിക തിരുവാഭരണ മഹോത്സവം (മകരം 30)",
    month: "February",
    monthMl: "ഫെബ്രുവരി",
    malayalamMonth: "Makaram 30 (മകരം 30)",
    duration: "Annual Celebration",
    durationMl: "വാർഷിക മഹോത്സവം",
    dateRange: "February 12 – February 13, 2026 (Makaram 30)",
    description: "The premier flagship spiritual festival of Manalyarkavu Kaladithara Temple celebrated on Makaram 30 in the month of February with grand kodiyettam, caparisoned elephants, renowned percussion ensembles (Panchavadyam, Melam), Thalappoli, and divine Pallivetta / Aaraattu.",
    descriptionMl: "ഫെബ്രുവരി മാസത്തിലെ മകരം 30-ാം തീയതി കൊടിയേറ്റത്തോടെ തുടങ്ങി ആറാട്ടോടെ സമാപിക്കുന്ന തിരുവാഭരണ വാർഷിക മഹോത്സവം. വിസ്തൃതമായ പഞ്ചവാദ്യവും പാണ്ടിമേളവും ദീപോത്സവവും താലപ്പൊലിയും ഇതിന്റെ മുഖ്യ ആകർഷണങ്ങളാണ്.",
    mainRituals: [
      "Thirukodiyettam (Sacred Flag Hoisting on Dwajasthambham)",
      "Daily Utsavabali & Sreebhoothabali",
      "Panchavadyam & Pandi Melam by master percussionists",
      "Grand Thalappoli Procession by hundreds of women devotees",
      "Pallivetta (Royal Divine Hunt ritual) & Holy Aaraattu at temple sacred pond"
    ],
    mainRitualsMl: [
      "തൃക്കൊടിയേറ്റ്",
      "നിത്യേനയുള്ള ഉത്സവബലിയും ശ്രീഭൂതബലിയും",
      "പ്രശസ്ത വാദ്യകലാകാരന്മാരുടെ പഞ്ചവാദ്യവും പാണ്ടിമേളവും",
      "നൂറുകണക്കിന് ഭക്തവനിതകൾ പങ്കെടുക്കുന്ന മഹാ താലപ്പൊലി",
      "പള്ളിവേട്ടയും പുണ്യ തീർത്ഥക്കടവിൽ നടക്കുന്ന തിരു ആറാട്ടും"
    ],
    highlights: ["Elephant Procession", "Chenda Melam", "Deepotsavam", "Cultural Stage Programs", "Annadanam"],
    highlightsMl: ["ഗജവീരന്മാരുടെ എഴുന്നള്ളിപ്പ്", "ചെണ്ടമേളം", "ദീപോത്സവം", "കലാപരിപാടികൾ", "മഹാ അന്നദാനം"],
    image: "/images/festival_utsavam.jpg",
    badge: "Flagship Annual Festival",
    events: [
      { day: "Makaram 29 Evening", dayMl: "മകരം 29 സന്ധ്യ", title: "Kodiyettam & Tantric Kalasha Pooja", titleMl: "തൃക്കൊടിയേറ്റം & തന്ത്രി പൂജകൾ", description: "Flag hoisting by Temple Thanthri, opening ceremonies, and evening Melam.", descriptionMl: "ക്ഷേത്ര തന്ത്രിയുടെ മുഖ്യകാർമ്മികത്വത്തിൽ കൊടിയേറ്റം, ദീപാരാധന, മേളം.", time: "06:30 PM" },
      { day: "Makaram 30 Day", dayMl: "മകരം 30 പകൽ", title: "Grand Utsavam, Melam & Ezhunnallathu", titleMl: "ഉത്സവ എഴുന്നള്ളിപ്പും പഞ്ചവാദ്യവും", description: "Caparisoned elephant procession accompanied by master percussionists.", descriptionMl: "ഗജവീരന്മാരുടെ അകമ്പടിയോടെ പഞ്ചവാദ്യവും പാണ്ടിമേളവും.", time: "10:00 AM" },
      { day: "Makaram 30 Evening", dayMl: "മകരം 30 സന്ധ്യ", title: "Maha Deeparadhana, Thalappoli & Chuttuvilakku", titleMl: "മഹാ ദീപാരാധന, താലപ്പൊലി & ചുറ്റുവിളക്ക്", description: "Illumination of thousands of oil lamps and grand women devotee Thalappoli.", descriptionMl: "ആയിരക്കണക്കിന് ദീപങ്ങൾ തെളിയുന്ന ദീപോത്സവവും താലപ്പൊലിയും.", time: "06:30 PM" },
      { day: "Makaram 30 Night", dayMl: "മകരം 30 രാത്രി", title: "Pallivetta Rites", titleMl: "പള്ളിവേട്ട", description: "Sacred royal divine hunt ceremony.", descriptionMl: "ഭക്തിസാന്ദ്രമായ പള്ളിവേട്ട ചടങ്ങുകൾ.", time: "09:30 PM" },
      { day: "Kumbham 1 Morning", dayMl: "കുംഭം 1 പുലർച്ചെ", title: "Aaraattu (Holy Bath) & Kodi Irakkal", titleMl: "തിരു ആറാട്ടും കൊടിയിറക്കലും", description: "Auspicious immersion in holy pond followed by lowering of the flag.", descriptionMl: "പുണ്യതീർത്ഥത്തിൽ തിരു ആറാട്ട്, തിരുമുൽക്കാഴ്ച, കൊടിയിറക്കൽ.", time: "06:00 AM" }
    ]
  },
  {
    id: "nira-puthari",
    name: "Nira Puthari (Harvest Festival Near Onam)",
    nameMl: "നിറപുത്തരി മഹോത്സവം (ഓണത്തിന് മുന്നോടിയായി)",
    month: "August – September",
    monthMl: "ആഗസ്റ്റ് – സെപ്റ്റംബർ",
    malayalamMonth: "Chingam (ചിങ്ങം)",
    duration: "1 Sacred Day",
    durationMl: "1 പുണ്യദിനം",
    dateRange: "Chingam Month (Preceding Thiruvonam)",
    description: "Auspicious Kerala agrarian thanksgiving festival celebrated ahead of Onam where freshly harvested golden paddy sheaves (Kattir) are brought into the temple in joyous procession, consecrated before Mother Bhagavathy, and distributed to devotees to usher inexhaustible abundance and fortune into every household.",
    descriptionMl: "ഓണത്തിന് മുന്നോടിയായി ചിങ്ങമാസത്തിൽ നടക്കുന്ന പവിത്രമായ നിറപുത്തരി ചടങ്ങ്. കതിർക്കറ്റകൾ വാദ്യമേളങ്ങളുടെ അകമ്പടിയോടെ ക്ഷേത്രത്തിൽ എത്തിച്ച് പൂജിച്ച് ഭക്തർക്ക് സമൃദ്ധിയുടെ അടയാളമായി വിതരണം ചെയ്യുന്നു.",
    mainRituals: [
      "Kattir Ezhunnallippu (Paddy Sheaf Procession with Panchavadyam)",
      "Nel Kathir Tantric Pooja (Sanctifying Sheaves at Sanctum)",
      "Special Puthari Payasa Naivedyam",
      "Prasadam Distribution to Devotee Homes for Bounteous Harvest"
    ],
    mainRitualsMl: [
      "കതിർക്കറ്റ എഴുന്നള്ളിപ്പ്",
      "ശ്രീകോവിലിൽ വിശേഷാൽ നെൽക്കതിർ പൂജ",
      "പുത്തരി പായസ നിവേദ്യം",
      "ഭവനങ്ങളിലേക്ക് ഐശ്വര്യദായകമായ കതിർ പ്രസാദ വിതരണം"
    ],
    highlights: ["Fresh Paddy Sheaves", "Traditional Puthari Payasam", "Tantric Blessings for Prosperity", "Devotee Annadanam"],
    highlightsMl: ["ഐശ്വര്യ നെൽക്കതിരുകൾ", "രുചികരമായ പുത്തരി പായസം", "സമ്പൽ സമൃദ്ധി", "മഹാ അന്നദാനം"],
    image: "/images/temple_courtyard_rain.png",
    badge: "Harvest & Abundance Blessing",
    events: [
      { day: "Chingam Dawn", dayMl: "ചിങ്ങപ്പുലരി", title: "Kattir Varavelpu", titleMl: "കതിർ വരവേൽപ്പ്", description: "Paddy sheaves welcomed with conch blowing and sanctum bells.", descriptionMl: "ശംഖനാദത്തോടും വാദ്യങ്ങളോടും കൂടി കതിർക്കറ്റകൾ സ്വീകരിക്കുന്നു.", time: "05:30 AM" },
      { day: "Morning", dayMl: "രാവിലെ", title: "Puthari Pooja & Distribution", titleMl: "പുത്തരി പൂജയും പ്രസാദ വിതരണവും", description: "Sanctification of fresh paddy and offering of Puthari Payasam.", descriptionMl: "കതിർ പൂജയും വിശേഷാൽ പുത്തരി പായസ നിവേദ്യവും.", time: "07:30 AM" }
    ]
  },
  {
    id: "ayyappan-vilakku",
    name: "Ayyappan Vilakku & Padi Pooja",
    nameMl: "അയ്യപ്പൻ വിളക്കും പടിപൂജയും",
    month: "November – December",
    monthMl: "നവംബർ – ഡിസംബർ",
    malayalamMonth: "Vrischikam (വൃശ്ചികം)",
    duration: "Mandala Season",
    durationMl: "മണ്ഡലകാലം",
    dateRange: "Mandala Season (November 16 – December 26, 2026)",
    description: "Soul-stirring celebration in reverence of Lord Sree Ayyappa (Dharma Sastha) during the Mandala pilgrimage season. Illuminated with hundreds of ghee-filled coconuts, Padi Pooja, Sastha Pattu, and traditional drum beats to absolve planetary afflictions and bestow courage.",
    descriptionMl: "മണ്ഡലകാലത്ത് ശ്രീ ധർമ്മശാസ്താവിന്റെ പ്രീതിക്കായി നടത്തുന്ന ഭക്തിസാന്ദ്രമായ അയ്യപ്പൻ വിളക്കും പടിപൂജയും. നെയ്‌വിളക്കുകളാലും ശരണഘോഷങ്ങളാലും ക്ഷേത്രസന്നിധി പുണ്യധന്യമാകുന്നു.",
    mainRituals: [
      "Sastha Pooja & Ashtakam Chanting",
      "Special Padi Pooja (18 Sacred Steps Floral Adornment)",
      "Ayyappan Vilakku & Traditional Sastha Pattu",
      "Ghee Abhishekam & Neeranjanam Offering"
    ],
    mainRitualsMl: [
      "ശാസ്താ പൂജയും അഷ്ടക ജപവും",
      "വിശേഷാൽ 18 പടിപൂജ",
      "അയ്യപ്പൻ വിളക്കും പാട്ടും",
      "നെയ്യഭിഷേകവും നീരാജനവും"
    ],
    highlights: ["18 Sacred Padi Pooja", "Neeranjanam Offering", "Traditional Sastha Pattu", "Sabarimala Pilgrim Seva"],
    highlightsMl: ["18 പടിപൂജ", "നീരാജന സമർപ്പണം", "ശാസ്താ പാട്ട്", "തീർത്ഥാടക സേവ"],
    image: "/images/deity_ayyappa.png",
    badge: "Sacred Sastha Worship",
    events: [
      { day: "Saturday Twilight", dayMl: "ശനി സന്ധ്യ", title: "Ayyappan Vilakku & Padi Pooja", titleMl: "അയ്യപ്പൻ വിളക്കും പടിപൂജയും", description: "Ceremonial 18 steps floral worship with glowing brass lamps.", descriptionMl: "18 പടികളിലും ദീപങ്ങൾ തെളിയിച്ച് വിശേഷാൽ പടിപൂജ.", time: "06:30 PM" },
      { day: "Night", dayMl: "രാത്രി", title: "Sastha Pattu & Deeparadhana", titleMl: "ശാസ്താ പാട്ടും ദീപാരാധനയും", description: "Rendition of traditional Ayyappan songs and concluding aarti.", descriptionMl: "പാരമ്പര്യ അയ്യപ്പൻ പാട്ടും കർപ്പൂര ദീപാരാധനയും.", time: "08:30 PM" }
    ]
  },
  {
    id: "vettakkaran-pattu",
    name: "Vettakkaran Pattu & Kalam Ezhuthu",
    nameMl: "വേട്ടേക്കരൻ പാട്ടും കളമെഴുത്തും",
    month: "January – February",
    monthMl: "ജനുവരി – ഫെബ്രുവരി",
    malayalamMonth: "Makaram (മകരം)",
    duration: "Special Annual Observance",
    durationMl: "വിശേഷാൽ പാട്ടുത്സവം",
    dateRange: "Annual Ritual Season (Makaram Month)",
    description: "Solemn martial invocation dedicated to Lord Vettekkaran, the supreme tutelary deity of the Kaladithara martial lineage. Features intricate multi-colored powder Kalam Ezhuthu, traditional Kallattu Kurup chanting, and the breaking of auspicious coconuts to eradicate all obstacles, litigation, and evil forces.",
    descriptionMl: "കളരിത്തറയുടെ പരദേവതയായ വേട്ടേക്കരന് സമർപ്പിക്കുന്ന വിശേഷാൽ പാട്ടുത്സവവും കളമെഴുത്തും നാളികേരം ഉടയ്ക്കലും. സർവ്വവിധ ശത്രുദോഷങ്ങളും കോടതി വ്യവഹാര തടസ്സങ്ങളും നീങ്ങുന്നതിന് ഉത്തമം.",
    mainRituals: [
      "Kalamezhuthu (Five-color powder deity portrait)",
      "Kallattu Kurup Vettekkaran Pattu with traditional nanthuni",
      "Pantheerayiram Thenga Udakkal (Coconut Breaking on Sacred Stone)",
      "Kalam Maaykkal & Sanctified Prasada Distribution"
    ],
    mainRitualsMl: [
      "പഞ്ചവർണ്ണ കളമെഴുത്ത്",
      "കല്ലാറ്റുകുറുപ്പന്മാരുടെ വേട്ടേക്കരൻ പാട്ട്",
      "നാളികേരം ഉടയ്ക്കൽ വഴിപാട്",
      "കളം മായ്ക്കലും പ്രസാദ വിതരണവും"
    ],
    highlights: ["Traditional Kalam Artwork", "Martial Heritage Rites", "Thenga Udakkal Ceremony", "Courage & Protection Blessing"],
    highlightsMl: ["വർണ്ണാഭമായ കളമെഴുത്ത്", "ആയോധന പൈതൃക ചടങ്ങുകൾ", "നാളികേരം ഉടയ്ക്കൽ", "വിജയാനുഗ്രഹം"],
    image: "/images/deity_vettakkaran.jpg",
    badge: "Kaladithara Martial Heritage",
    events: [
      { day: "Evening", dayMl: "സന്ധ്യ", title: "Kalamezhuthu Darshan", titleMl: "കളമെഴുത്ത് ദർശനം", description: "Spectacular drawing of Lord Vettekkaran with natural herbal powders.", descriptionMl: "സ്വാഭാവിക പൊടികളാൽ തയ്യാറാക്കുന്ന കളമെഴുത്ത് ദർശനം.", time: "05:00 PM" },
      { day: "Night", dayMl: "രാത്രി", title: "Thenga Udakkal & Kalam Pattu", titleMl: "നാളികേരം ഉടയ്ക്കലും പാട്ടും", description: "Rhythmic breaking of coconuts on sacred stone altar with vocal chanting.", descriptionMl: "താളബദ്ധമായി നാളികേരം ഉടയ്ക്കലും വേട്ടേക്കരൻ പാട്ടും.", time: "08:00 PM" }
    ]
  },
  {
    id: "kalam-pattu",
    name: "Bhagavathy Kalam Pattu & Thottampattu",
    nameMl: "ഭഗവതി കളം പാട്ടും തോറ്റംപാട്ടും",
    month: "November – January",
    monthMl: "നവംബർ – ജനുവരി",
    malayalamMonth: "Vrischikam – Dhanu (വൃശ്ചികം – ധനു)",
    duration: "Sacred Seasonal Rites",
    durationMl: "വിശേഷാൽ പൂജാകാലം",
    dateRange: "Mandala Season (Twilight Observance)",
    description: "Ancient ritual art where the majestic form of Mother Bhagavathy and Bhadrakali is depicted on the temple floor using natural herbal powders (rice powder, turmeric, charcoal, manayola, green leaf powder). Chanting of divine praise evokes immense maternal grace and drives away all malevolence.",
    descriptionMl: "ഭഗവതിയുടെ രൗദ്ര-ശാന്ത ഭാവങ്ങൾ പഞ്ചവർണ്ണപ്പൊടികളാൽ നിലത്ത് വരച്ചുണ്ടാക്കി തോറ്റംപാടിയും ദീപാരാധന നടത്തിയും അമ്മയെ പ്രീതിപ്പെടുത്തുന്ന പുരാതന അനുഷ്ഠാനം.",
    mainRituals: [
      "Panchavarna Kalamezhuthu with herbal color powders",
      "Thottam Pattu Recitation with sacred bronze cymbals",
      "Sandhya Deeparadhana with flame worship",
      "Kalam Pradakshinam & Sacred Powder Prasadam"
    ],
    mainRitualsMl: [
      "പഞ്ചവർണ്ണ കളമെഴുത്ത്",
      "തോറ്റംപാട്ട്",
      "സന്ധ്യാ ദീപാരാധന",
      "കളം പ്രദക്ഷിണവും പ്രസാദവും"
    ],
    highlights: ["Traditional Color Artwork", "Ancient Kerala Devotional Ballads", "Divine Mother Grace", "Disease & Fear Removal"],
    highlightsMl: ["പാരമ്പര്യ ചിത്രകല", "പുരാതന സ്തുതിഗീതങ്ങൾ", "ദേവീ കാരുണ്യം", "ഭയരോഗ നിവാരണം"],
    image: "/images/deity_bhadrakali.png",
    badge: "Sacred Tantric Art",
    events: [
      { day: "Dusk", dayMl: "സന്ധ്യ", title: "Kalam Pooja", titleMl: "കളം പൂജ", description: "Tantric oblations upon the sacred floral mandalam.", descriptionMl: "കളത്തിൽ ദീപം വെച്ച് താന്ത്രിക പൂജകൾ.", time: "06:30 PM" },
      { day: "Night", dayMl: "രാത്രി", title: "Kalam Maaykkal & Thottam", titleMl: "കളം മായ്ക്കലും തോറ്റവും", description: "Singing of holy ballads and distributing sanctified powder.", descriptionMl: "തോറ്റംപാട്ടിന് ശേഷം വിശുദ്ധ കളം മായ്ക്കൽ.", time: "09:00 PM" }
    ]
  },
  {
    id: "pongala-mahotsavam",
    name: "Maha Pongala Mahotsavam",
    nameMl: "മഹാ പൊങ്കാല മഹോത്സവം",
    month: "February – March",
    monthMl: "ഫെബ്രുവരി – മാർച്ച്",
    malayalamMonth: "Kumbham (കുംഭം)",
    duration: "1 Sacred Day",
    durationMl: "1 പുണ്യദിനം",
    dateRange: "Auspicious Festival Day (Kumbham Month)",
    description: "Devout women devotees gather in vast numbers around the temple grounds to prepare sweet rice, jaggery, and coconut pudding in earthen pots over sacred wood fires, offering the sweet dish directly to Mother Bhagavathy for marital bliss, family health, and abundance.",
    descriptionMl: "നൂറുകണക്കിന് ഭക്തവനിതകൾ മൺകലങ്ങളിൽ ശർക്കരയും പായസക്കൂട്ടും വെച്ച് ഭഗവതിക്ക് സമർപ്പിക്കുന്ന മഹാ പുണ്യ കർമ്മം. കുടുംബ ഐശ്വര്യത്തിനും ആയുരാരോഗ്യത്തിനും മംഗല്യഭാഗ്യത്തിനും ഉത്തമം.",
    mainRituals: [
      "Aduppuvettu (Lighting Sanctum Fire from Sreekovil)",
      "Devotee Pongala Cooking in Earthen Hearth Pots",
      "Holy Theertham Sprinkle & Resounding Deeparadhana",
      "Maha Annadanam for all Devotees"
    ],
    mainRitualsMl: [
      "അടുപ്പുവെട്ട് (ശ്രീകോവിലിൽ നിന്നുള്ള ദീപം)",
      "പൊങ്കാല നിവേദ്യം തയ്യാറാക്കൽ",
      "തീർത്ഥം തളിക്കലും ദീപാരാധനയും",
      "മഹാ അന്നദാനം"
    ],
    highlights: ["Thousands of Sacred Earthen Pots", "Devi Prasadam Distribution", "Special Floral Alankaram", "Blessings for Families"],
    highlightsMl: ["പവിത്രമായ പൊങ്കാല അടുപ്പുകൾ", "പ്രസാദ വിതരണം", "പുഷ്പാലങ്കാരം", "സന്തുഷ്ട കുടുംബജീവിതം"],
    image: "/images/deity_bhagavathy.jpg",
    badge: "Divine Women's Devotional Festival",
    events: [
      { day: "Morning", dayMl: "രാവിലെ", title: "Aduppu Vettu", titleMl: "പൊങ്കാല അടുപ്പുവെട്ട്", description: "Priests hand over sacred sanctum flame to initiate cooking.", descriptionMl: "മേൽശാന്തി ശ്രീകോവിലിൽ നിന്ന് പകർന്നു നൽകുന്ന ദീപം കൊണ്ട് അടുപ്പുകളിൽ അഗ്നി പകരൽ.", time: "08:30 AM" },
      { day: "Noon", dayMl: "ഉച്ചയ്ക്ക്", title: "Pongala Nivedyam", titleMl: "പൊങ്കാല തളിക്കൽ", description: "Holy theertham sprinkled over all pongala pots with resounding chants.", descriptionMl: "ശംഖനാദത്തോടും പുഷ്പവൃഷ്ടിയോടും കൂടി പുണ്യതീർത്ഥം തളിക്കൽ.", time: "11:30 AM" }
    ]
  },
  {
    id: "chuttuvilakku-mahotsavam",
    name: "Chuttuvilakku & Lakshadeepam",
    nameMl: "ചുറ്റുവിളക്കും ലക്ഷദീപ മഹോത്സവവും",
    month: "Special Vow Days",
    monthMl: "വിശേഷാൽ പുണ്യദിനങ്ങൾ",
    malayalamMonth: "All Auspicious Stars (വിശേഷ നാളുകൾ)",
    duration: "Evening Illumination",
    durationMl: "സന്ധ്യാ ദീപോത്സവം",
    dateRange: "Karthika Stars & Special Temple Festivals",
    description: "Spectacular illumination where all the hundreds of bronze oil lamps around the temple wooden vilakkumadam and courtyard are lit with pure sesame oil, creating a breathtaking celestial aura that dispels inner and outer darkness.",
    descriptionMl: "ക്ഷേത്ര നാലമ്പലത്തിലെയും ചുറ്റുമതിലിലെയും മുഴുവൻ പിച്ചള വിളക്കുകളിലും നല്ലെണ്ണയൊഴിച്ച് ദീപങ്ങൾ തെളിയിക്കുന്ന നയനമനോഹരമായ വഴിപാട്. സകല ആപത്തുകളും നീക്കി കുടുംബങ്ങളിൽ ഐശ്വര്യം നിറയ്ക്കുന്നു.",
    mainRituals: [
      "Vilakkumadam Cleaning & Sacred Wicking",
      "Lighting from Sanctum Perpetual Kedavilakku",
      "Maha Deeparadhana with Conch Blowing & Percussion",
      "Devotee Chuttuvilakku Samarppanam"
    ],
    mainRitualsMl: [
      "വിളക്കുമാടത്തിൽ തിരിയിടൽ",
      "കെടാവിളക്കിൽ നിന്ന് അഗ്നി പകരൽ",
      "മഹാ ദീപാരാധനയും ശംഖനാദവും",
      "ചുറ്റുവിളക്ക് സമർപ്പണം"
    ],
    highlights: ["Thousands of Glowing Flames", "Celestial Temple Glow", "Devotee Oil Sponsorship", "Removal of Sins & Afflictions"],
    highlightsMl: ["ആയിരക്കണക്കിന് ദീപപ്രഭ", "ദിവ്യമായ ആത്മീയ അന്തരീക്ഷം", "നല്ലെണ്ണ സമർപ്പണം", "സർവ്വ ഐശ്വര്യം"],
    image: "/images/temple_lamp_vilakku.jpg",
    badge: "Grand Festival of Lights",
    events: [
      { day: "Twilight", dayMl: "സന്ധ്യ", title: "Lighting of Vilakkumadam", titleMl: "വിളക്കുമാടം തെളിയിക്കൽ", description: "Hundreds of lamps lit simultaneously along temple perimeter.", descriptionMl: "നാലമ്പലത്തിൽ ഒരേസമയം മുഴുവൻ വിളക്കുകളും തെളിയിക്കുന്നു.", time: "06:15 PM" },
      { day: "Dusk", dayMl: "ദീപാരാധന", title: "Maha Deeparadhana", titleMl: "മഹാ ദീപാരാധന", description: "Resplendent arati with temple drums and bell chimes.", descriptionMl: "മണിമുഴക്കത്തോടും ശംഖനാദത്തോടും കൂടിയുള്ള ദീപാരാധന.", time: "06:45 PM" }
    ]
  },
  {
    id: "akhanda-namajapam",
    name: "Akhanda Namajapa Yajnam (24 Hours)",
    nameMl: "അഖണ്ഡ നാമജപ യജ്ഞം (24 മണിക്കൂർ)",
    month: "Special Sundays & Pournamis",
    monthMl: "വിശേഷാൽ ഞായറാഴ്ചകൾ & പൗർണ്ണമി",
    malayalamMonth: "Monthly / Periodic Observance",
    duration: "24 Hours Continuous",
    durationMl: "24 മണിക്കൂർ അഖണ്ഡം",
    dateRange: "Periodic Temple Prayer Yajnams",
    description: "Unbroken 24-hour continuous collective chanting of sacred divine names (Lalitha Sahasranamam, Ayyappa Namam, Mahishasuramardini Stotram, Vishnu Sahasranamam) by devotees and spiritual groups to purify the atmosphere and radiate peace, health, and harmony.",
    descriptionMl: "24 മണിക്കൂർ നിർത്താതെ ഭക്തജനങ്ങളും മാതൃസമിതികളും ചേർന്ന് നടത്തുന്ന പവിത്രമായ നാമജപ യജ്ഞം. നാടിനും വീടിനും ശാന്തിയും ആത്മീയ ശുദ്ധിയും പ്രധാനം ചെയ്യുന്നു.",
    mainRituals: [
      "Akhanda Deepam Lighting Ceremony",
      "Relay Namajapam by Devotee Groups & Mathrusamithis",
      "Lalitha Sahasranama Archana & Pushpanjali",
      "Maha Annadanam & Prasada Oottu"
    ],
    mainRitualsMl: [
      "അഖണ്ഡദീപം തെളിയിക്കൽ",
      "തുടർച്ചയായ നാമജപം",
      "ലളിതാ സഹസ്രനാമാർച്ചന",
      "മഹാ അന്നദാന വിതരണം"
    ],
    highlights: ["Continuous 24-Hour Chanting", "Community Devotional Unity", "Maha Prasadam Distribution", "Inner Peace & Protection"],
    highlightsMl: ["24 മണിക്കൂർ നിരന്തര ജപം", "സാമൂഹിക ആത്മീയ ഐക്യം", "മഹാ പ്രസാദം", "മനശാന്തി"],
    image: "/images/temple_courtyard.png",
    badge: "Divine Name Chanting Yajna",
    events: [
      { day: "Morning", dayMl: "രാവിലെ", title: "Yajna Arambham", titleMl: "യജ്ഞാരംഭം", description: "Lighting of Akhanda Deepam and beginning of 24-hour chanting.", descriptionMl: "അഖണ്ഡദീപം തെളിയിച്ച് നാമജപത്തിന് തുടക്കം.", time: "06:00 AM" },
      { day: "Following Morning", dayMl: "പിറ്റേന്ന് രാവിലെ", title: "Yajna Samapanam", titleMl: "യജ്ഞ സമാപനം", description: "Concluding prayers, poornahuti, and Annadanam.", descriptionMl: "മംഗളാരതിയും പൂർണ്ണാഹുതിയും മഹാ അന്നദാനവും.", time: "06:00 AM" }
    ]
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    period: "Antiquity & Ancient Lore",
    periodMl: "പ്രാചീന ഐതിഹ്യ കാലം",
    title: "Sacred Origins & Kaladithara Heritage",
    titleMl: "ക്ഷേത്ര ഉത്ഭവവും കളരിത്തറ പൈതൃകവും",
    description: "Centuries ago, the holy grounds were revered as a sacred center of spiritual power (Sadhana) and traditional Kerala Kalari martial lore. The presiding Mother Goddess manifested Her divine presence to protect the land and its righteous inhabitants.",
    descriptionMl: "നൂറ്റാണ്ടുകൾക്ക് മുൻപ് ആത്മീയ സാധനകളുടെയും കളരി പാരമ്പര്യത്തിന്റെയും കേന്ദ്രമായിരുന്ന പുണ്യഭൂമിയിൽ ഭഗവതിയുടെ ദിവ്യചൈതന്യം കുടികൊണ്ടു.",
    verifiedNote: "Ground in trusted local lore and centuries of oral traditions recorded in devaswom archives.",
    image: "/images/temple_courtyard.png"
  },
  {
    period: "Temple Prathishta Era",
    periodMl: "പ്രതിഷ്ഠാ കാലഘട്ടം",
    title: "Sreekovil Consecration & Tantric Lineage",
    titleMl: "ശ്രീകോവിൽ നിർമ്മാണവും താന്ത്രിക പ്രതിഷ്ഠയും",
    description: "The sanctum sanctorum (Sreekovil) was consecrated in strict accord with ancient Kerala Vastu Shastra and Thantra Vidya, establishing the daily pooja paddhathi followed faithfully to this day.",
    descriptionMl: "കേരളീയ വാസ്തു ശാസ്ത്ര വിധിപ്രകാരം ശ്രീകോവിൽ പണിതുയർത്തുകയും താന്ത്രിക വിധിപ്രകാരം ദേവീചൈതന്യ പ്രതിഷ്ഠ നടത്തുകയും ചെയ്തു.",
    verifiedNote: "Recorded in the temple's official ceremonial registers and thantri lineage documents.",
    image: "/images/temple_courtyard.png"
  },
  {
    period: "Development & Renovation",
    periodMl: "വികസനവും പുനരുദ്ധാരണവും",
    title: "Nalambalam & Vilakkumadam Expansion",
    titleMl: "നാലമ്പല നവീകരണവും വിളക്കുമാട നിർമ്മാണവും",
    description: "With contributions from devoted families and patrons, the Nalambalam, bronze Vilakkumadam, sacred well, and temple pond were restored, preserving authentic timber and stone craftsmanship.",
    descriptionMl: "ഭക്തജനങ്ങളുടെ കൂട്ടായ്മയിൽ നാലമ്പലവും വിളക്കുമാടവും പുനരുദ്ധരിക്കുകയും ക്ഷേത്രക്കുളം സംരക്ഷിക്കുകയും ചെയ്തു.",
    verifiedNote: "Preserved through community records and devaswom committee proceedings.",
    image: "/images/temple_courtyard_rain.png"
  },
  {
    period: "Present Day & Future",
    periodMl: "വർത്തമാന കാലം",
    title: "A Vibrant Spiritual Sanctuary",
    titleMl: "ആധുനിക കാലത്തെ ഭക്തിസങ്കേതം",
    description: "Today, Manalyarkavu Kaladithara Temple shines as a vibrant pilgrimage destination, hosting daily Annadanam, cultural programs, grand annual Utsavam, and serving thousands of devout souls.",
    descriptionMl: "ഇന്ന് പതിനായിരക്കണക്കിന് ഭക്തർക്ക് അഭയവും ശാന്തിയും നൽകുന്ന പ്രധാന ആരാധനാ കേന്ദ്രമായി ക്ഷേത്രം നിലകൊള്ളുന്നു.",
    verifiedNote: "Official information managed by Manalyarkavu Kaladithara Temple Devaswom."
  }
];

export const calendarEvents: CalendarEvent[] = [
  { id: "cal-1", date: "2026-02-12", dayOfMonth: 12, month: 1, year: 2026, title: "Annual Utsavam (Makaram 30) Kodiyettam & Melam", titleMl: "വാർഷിക ഉത്സവം കൊടിയേറ്റം & മേളം (മകരം 30)", type: "festival", typeLabel: "Grand Festival", typeLabelMl: "മഹാ ഉത്സവം", time: "06:00 AM", description: "The premier spiritual festival of the temple with Kodiyettam, Pandi Melam, and Thalappoli.", descriptionMl: "മകരം 30 ലെ പ്രധാന വാർഷിക തിരുവാഭരണ മഹോത്സവം, പഞ്ചവാദ്യം, പാണ്ടിമേളം, താലപ്പൊലി." },
  { id: "cal-2", date: "2026-02-12", dayOfMonth: 12, month: 1, year: 2026, title: "Makaram 30 Maha Deeparadhana & Chuttuvilakku", titleMl: "മകരം 30 മഹാ ദീപാരാധന & ചുറ്റുവിളക്ക്", type: "pooja", typeLabel: "Pooja", typeLabelMl: "പൂജ", time: "06:30 PM", description: "Grand illumination of thousands of bronze lamps on Makaram 30.", descriptionMl: "മകരം 30 സന്ധ്യയിൽ ആയിരക്കണക്കിന് ദീപങ്ങൾ തെളിയുന്ന ദീപോത്സവം." },
  { id: "cal-3", date: "2026-02-13", dayOfMonth: 13, month: 1, year: 2026, title: "Makaram 30 Holy Aaraattu & Flag Lowering", titleMl: "മകരം 30 തിരു ആറാട്ടും കൊടിയിറക്കലും", type: "festival", typeLabel: "Festival", typeLabelMl: "ഉത്സവം", time: "06:00 PM", description: "Auspicious temple holy dip and conclusion of Utsavam.", descriptionMl: "ഉത്സവ സമാപനവും തിരു ആറാട്ടും." },
  { id: "cal-4", date: "2026-04-14", dayOfMonth: 14, month: 3, year: 2026, title: "Vishu Kani Darshanam & Kaineettam", titleMl: "വിഷുക്കണി ദർശനവും കൈനീട്ടവും", type: "special", typeLabel: "Special", typeLabelMl: "വിശേഷം", time: "04:30 AM", description: "Sacred Vishu Kani darshan in the morning followed by prasadam distribution.", descriptionMl: "പുലർച്ചെയുള്ള വിഷുക്കണി ദർശനവും നാണയ കൈനീട്ടവും." },
  { id: "cal-5", date: "2026-05-02", dayOfMonth: 2, month: 4, year: 2026, title: "Prathishta Dinam Special Poojas", titleMl: "പ്രതിഷ്ഠാ ദിന വിശേഷാൽ പൂജകൾ", type: "pooja", typeLabel: "Pooja", typeLabelMl: "പൂജ", time: "07:00 AM", description: "Special Dravya Kalasha Abhishekam on Prathishta anniversary.", descriptionMl: "പ്രതിഷ്ഠാ വാർഷികത്തോടനുബന്ധിച്ച് വിശേഷാൽ കലശാഭിഷേകം." },
  { id: "cal-6", date: "2026-12-15", dayOfMonth: 15, month: 11, year: 2026, title: "Mandala Kalam Ayyappan Vilakku & Padi Pooja", titleMl: "മണ്ഡലകാല അയ്യപ്പൻ വിളക്കും പടിപൂജയും", type: "festival", typeLabel: "Special Ritual", typeLabelMl: "വിശേഷാൽ പൂജ", time: "06:30 PM", description: "Grand Ayyappan Vilakku, Padi Pooja, and traditional Sastha Pattu for Lord Ayyappa.", descriptionMl: "മണ്ഡലകാലത്ത് ശ്രീ ധർമ്മശാസ്താവിന് സമർപ്പിക്കുന്ന വിശേഷാൽ അയ്യപ്പൻ വിളക്കും പടിപൂജയും." },
  { id: "cal-7", date: "2026-08-22", dayOfMonth: 22, month: 7, year: 2026, title: "Nira Puthari Mahotsavam (Pre-Onam Auspicious Harvest Offering)", titleMl: "നിറപുത്തരി മഹോത്സവം (ഓണത്തിന് മുന്നോടിയായി)", type: "festival", typeLabel: "Harvest Festival", typeLabelMl: "നിറപുത്തരി", time: "06:30 AM", description: "Sacred offering of freshly harvested golden paddy spikes, blessing homes with abundance before Onam.", descriptionMl: "പുതിയ നെൽക്കതിരുകൾ ശ്രീകോവിലിൽ പൂജിച്ച് ഭവനങ്ങളിലേക്ക് കൊണ്ടുപോകുന്ന ഐശ്വര്യപ്രദമായ നിറപുത്തരി ചടങ്ങ്." },
  { id: "cal-8", date: "2026-01-28", dayOfMonth: 28, month: 0, year: 2026, title: "Vettakkaran Pattu & Kalam Ezhuthu", titleMl: "വേട്ടയ്ക്കൊരുമകൻ പാട്ടും കളമെഴുത്തും", type: "special", typeLabel: "Ritual Song & Kalam", typeLabelMl: "കളമെഴുത്തുപാട്ട്", time: "05:30 PM", description: "Vibrant natural powder Kalam drawing and traditional percussion devotional songs for Lord Vettakkaran.", descriptionMl: "പഞ്ചവർണ്ണപ്പൊടികളാൽ വേട്ടയ്ക്കൊരുമകന്റെ കളം വരച്ചു സ്തുതിഗീതങ്ങൾ പാടുന്ന പരമ്പരാഗത തനിമയാർന്ന അനുഷ്ഠാനം." },
  { id: "cal-9", date: "2026-11-23", dayOfMonth: 23, month: 10, year: 2026, title: "Chuttuvilakku & Thrikkarthika Deeparadhana", titleMl: "ചുറ്റുവിളക്കും തൃക്കാർത്തിക ദീപാരാധനയും", type: "special", typeLabel: "Festival of Lights", typeLabelMl: "ചുറ്റുവിളക്ക്", time: "06:30 PM", description: "Illumination of hundreds of bronze lamps across the temple perimeter dispelling all darkness.", descriptionMl: "നാലമ്പലത്തിൽ ആയിരക്കണക്കിന് ദീപങ്ങൾ തെളിയുന്ന മനോഹരമായ ചുറ്റുവിളക്കും ദീപാരാധനയും." },
  { id: "cal-10", date: "2026-03-05", dayOfMonth: 5, month: 2, year: 2026, title: "Maha Pongala Mahotsavam", titleMl: "മഹാ പൊങ്കാല മഹോത്സവം", type: "festival", typeLabel: "Grand Festival", typeLabelMl: "മഹാ പൊങ്കാല", time: "08:30 AM", description: "Devout women preparing sacred sweet rice offerings in earthen pots across temple grounds.", descriptionMl: "ഭക്തവനിതകൾ മൺകലങ്ങളിൽ ഭഗവതിക്ക് നിവേദ്യമർപ്പിക്കുന്ന ഭക്തിസാന്ദ്രമായ മഹാ പൊങ്കാല സമർപ്പണം." },
  { id: "cal-11", date: "2026-07-19", dayOfMonth: 19, month: 6, year: 2026, title: "Akhanda Namajapa Yajnam (24 Hours Non-Stop)", titleMl: "അഖണ്ഡ നാമജപ യജ്ഞം (24 മണിക്കൂർ)", type: "special", typeLabel: "Devotional Yajna", typeLabelMl: "നാമജപ യജ്ഞം", time: "06:00 AM", description: "Unbroken 24-hour collective chanting of sacred mantras and stotras radiating divine peace.", descriptionMl: "നാടിന്റെയും ഭവനങ്ങളുടെയും ശാന്തിക്കായി 24 മണിക്കൂർ തുടർച്ചയായി നടക്കുന്ന പുണ്യ നാമജപം." },
  { id: "cal-12", date: "2026-11-20", dayOfMonth: 20, month: 10, year: 2026, title: "Bhagavathy Kalam Pattu & Thottampattu", titleMl: "ഭഗവതി കളമെഴുത്തുപാട്ടും തോട്ടംപാട്ടും", type: "pooja", typeLabel: "Pooja & Kalam", typeLabelMl: "കളംപാട്ട്", time: "06:00 PM", description: "Intricate floor art and traditional Kurup songs honoring Devi Bhadrakali.", descriptionMl: "ഭഗവതിയുടെ ദിവ്യരൂപം പഞ്ചവർണ്ണപ്പൊടികളാൽ വരച്ചു തോറ്റംപാട്ടോടെ നടത്തുന്ന വിശേഷാൽ പൂജ." }
];

export const announcements: Announcement[] = [
  {
    id: "ann-1",
    title: "Annual Temple Utsavam (Makaram 30) Dates Announced",
    titleMl: "വാർഷിക തിരുവാഭരണ മഹോത്സവം (മകരം 30) തീയതികൾ പ്രഖ്യാപിച്ചു",
    date: "2026-01-20",
    dateMl: "2026 ജനുവരി 20",
    isUrgent: true,
    category: "festival",
    categoryLabel: "Festival Notice",
    categoryLabelMl: "ഉത്സവ അറിയിപ്പ്",
    summary: "The auspicious Annual Utsavam will be held on Makaram 30 in the month of February with traditional rituals, Chenda Melam, and Thalappoli.",
    summaryMl: "ഫെബ്രുവരി മാസത്തിലെ മകരം 30-ാം തീയതി വാർഷിക തിരുവാഭരണ മഹോത്സവം വിപുലമായ പരിപാടികളോടെ ആഘോഷിക്കുന്നു.",
    details: "Devotees wishing to sponsor poojas, Annadanam, Thalappoli, or festival fireworks may register at the temple office counter or online booking section.",
    detailsMl: "ഉത്സവ വഴിപാടുകൾ, താലപ്പൊലി, അന്നദാനം എന്നിവ ബുക്ക് ചെയ്യുവാൻ ആഗ്രഹിക്കുന്ന ഭക്തർ ക്ഷേത്ര ഓഫീസുമായി ബന്ധപ്പെടുക."
  },
  {
    id: "ann-2",
    title: "Special Friday Bhagavathy Seva Booking Open",
    titleMl: "വെള്ളിയാഴ്ചകളിലെ വിശേഷാൽ ഭഗവതി സേവ ബുക്കിംഗ് ആരംഭിച്ചു",
    date: "2026-03-10",
    dateMl: "2026 മാർച്ച് 10",
    isUrgent: false,
    category: "pooja",
    categoryLabel: "Pooja Booking",
    categoryLabelMl: "പൂജാ ബുക്കിംഗ്",
    summary: "Advance bookings are now open for the twilight Bhagavathy Seva performed every Friday for family prosperity.",
    summaryMl: "കുടുംബൈശ്വര്യത്തിനായുള്ള വെള്ളിയാഴ്ചകളിലെ സന്ധ്യാ ഭഗവതി സേവ മുൻകൂട്ടി ബുക്ക് ചെയ്യാവുന്നതാണ്.",
    details: "Limited slots available per Friday to ensure complete personal attention during the Tantric sankalpam.",
    detailsMl: "ഓരോ വെള്ളിയാഴ്ചയും നിശ്ചിത എണ്ണം ഭക്തർക്ക് മാത്രമാണ് സങ്കൽപം നടത്തുന്നത്."
  },
  {
    id: "ann-3",
    title: "Temple Darshan Guidelines & Dress Code Reminder",
    titleMl: "ക്ഷേത്ര ദർശന മര്യാദകളും വസ്ത്രധാരണ രീതിയും",
    date: "2026-03-15",
    dateMl: "2026 മാർച്ച് 15",
    isUrgent: false,
    category: "notice",
    categoryLabel: "Devotee Notice",
    categoryLabelMl: "പൊതു അറിയിപ്പ്",
    summary: "Devotees are cordially requested to follow the traditional Kerala temple dress code (Mundu for men, Saree/Set Mundu for women).",
    summaryMl: "ക്ഷേത്രത്തിന്റെ പവിത്രത കാത്തുസൂക്ഷിക്കാൻ പരമ്പരാഗത വസ്ത്രധാരണ രീതി പാലിക്കാൻ എല്ലാ ഭക്തജനങ്ങളും ശ്രദ്ധിക്കുക.",
    details: "Mobile phone usage and photography inside the Nalambalam are strictly prohibited.",
    detailsMl: "നാലമ്പലത്തിനകത്ത് മൊബൈൽ ഫോൺ ഉപയോഗവും ചിത്രീകരണവും പൂർണ്ണമായി ഒഴിവാക്കുക."
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Traditional Temple Courtyard & Sreekovil",
    titleMl: "ക്ഷേത്രാങ്കണവും ശ്രീകോവിലും",
    category: "temple",
    categoryLabel: "Temple",
    categoryLabelMl: "ക്ഷേത്രം",
    imageUrl: "/images/temple_courtyard.png",
    description: "Authentic view of Manalyarkavu Kaladithara Temple courtyard under tropical Kerala skies.",
    descriptionMl: "മണല്യാർകാവ് കളരിത്തറ ക്ഷേത്രാങ്കണത്തിന്റെയും ശ്രീകോവിലിന്റെയും മനോഹരമായ ദൃശ്യം."
  },
  {
    id: "gal-1b",
    title: "Temple Courtyard After Monsoon Rain",
    titleMl: "മഴ തോർന്ന ക്ഷേത്രാങ്കണം",
    category: "temple",
    categoryLabel: "Temple",
    categoryLabelMl: "ക്ഷേത്രം",
    imageUrl: "/images/temple_courtyard_rain.png",
    description: "Serene view of Manalyarkavu Kaladithara Temple courtyard washed in gentle rain, reflecting divine peace and timeless Kerala architecture.",
    descriptionMl: "മഴ നനഞ്ഞ ക്ഷേത്രാങ്കണത്തിന്റെയും ശ്രീകോവിലിന്റെയും അതീവ പ്രശാന്തസുന്ദരമായ ദൃശ്യം."
  },
  {
    id: "gal-2",
    title: "Sree Bhagavathy Sacred Floral Alankaram",
    titleMl: "ശ്രീ ഭഗവതിയുടെ പുഷ്പാലങ്കാരം",
    category: "poojas",
    categoryLabel: "Poojas",
    categoryLabelMl: "പൂജകൾ",
    imageUrl: "/images/deity_bhagavathy.jpg",
    description: "Mother Goddess adorned with fresh thechi, jasmine garlands, and gold ornaments.",
    descriptionMl: "സുഗന്ധ പുഷ്പങ്ങളാലും പവിത്രമായ ചന്ദനക്കാപ്പാലും അണിഞ്ഞൊരുങ്ങിയ ദേവീ ദർശനം."
  },
  {
    id: "gal-3",
    title: "Annual Utsavam Grand Elephant Procession",
    titleMl: "ഉത്സവ എഴുന്നള്ളിപ്പും ചെണ്ടമേളവും",
    category: "festivals",
    categoryLabel: "Festivals",
    categoryLabelMl: "ഉത്സവം",
    imageUrl: "/images/festival_utsavam.jpg",
    description: "Caparisoned elephants, golden nettipattams, and master chenda percussionists.",
    descriptionMl: "നെറ്റിപ്പട്ടം കെട്ടിയ ഗജവീരന്മാരും താളവിസ്മയം തീർക്കുന്ന വാദ്യമേളങ്ങളും."
  },
  {
    id: "gal-4",
    title: "Sacred Kerala Nilavilakku (Five-Wick Brass Lamp)",
    titleMl: "പവിത്രമായ പിച്ചള നിലവിളക്ക്",
    category: "poojas",
    categoryLabel: "Poojas",
    categoryLabelMl: "പൂജകൾ",
    imageUrl: "/images/temple_lamp_vilakku.jpg",
    description: "Burning bright with pure sesame oil and floral offerings on the stone floor.",
    descriptionMl: "ക്ഷേത്രാങ്കണത്തിൽ പൂക്കൾക്ക് നടുവിൽ തെളിഞ്ഞുനിൽക്കുന്ന പുണ്യ നിലവിളക്ക്."
  },
  {
    id: "gal-5",
    title: "Consecrated Lord Vettakkaran Shrine",
    titleMl: "ശ്രീ വേട്ടയ്ക്കൊരുമകൻ സന്നിധി",
    category: "temple",
    categoryLabel: "Temple",
    categoryLabelMl: "ക്ഷേത്രം",
    imageUrl: "/images/deity_vettakkaran.jpg",
    description: "Sacred shrine of Lord Vettakkorumakan adorned with traditional Kerala brass lamps and floral garlands.",
    descriptionMl: "പവിത്രമായ നിലവിളക്കുകളും പൂമാലകളും ചാർത്തിയ ശ്രീ വേട്ടയ്ക്കൊരുമകന്റെ ശ്രീകോവിൽ സന്നിധി."
  },
  {
    id: "gal-6",
    title: "Golden Sree Ayyappa Shrine & Sanctum",
    titleMl: "സ്വർണ്ണപ്രഭയിൽ ശ്രീ അയ്യപ്പ സന്നിധി",
    category: "temple",
    categoryLabel: "Temple",
    categoryLabelMl: "ക്ഷേത്രം",
    imageUrl: "/images/deity_ayyappa.png",
    description: "Sacred golden shrine of Lord Sree Ayyappa glowing with consecrated oil lamps and ceremonial offerings.",
    descriptionMl: "നെയ്‌വിളക്കുകളാലും ദീപപ്രഭയാലും തിളങ്ങിനിൽക്കുന്ന ശ്രീ ധർമ്മശാസ്താവിന്റെ പവിത്ര സന്നിധി."
  },
  {
    id: "gal-7",
    title: "Radiant Sree Bhadrakali Devi Shrine",
    titleMl: "ശ്രീ ഭദ്രകാളി ദേവി സന്നിധി",
    category: "poojas",
    categoryLabel: "Poojas",
    categoryLabelMl: "പൂജകൾ",
    imageUrl: "/images/deity_bhadrakali.png",
    description: "Radiant darshan of Mother Sree Bhadrakali adorned in golden glory with sacred red floral garlands.",
    descriptionMl: "സ്വർണ്ണാലങ്കാരങ്ങളാലും ചുവന്ന തെച്ചിപ്പൂമാലകളാലും പ്രശോഭിതമായ ശ്രീ ഭദ്രകാളി ദേവി സന്നിധി."
  },
  {
    id: "gal-8",
    title: "Radiant Sree Hanuman Swami Golden Shrine",
    titleMl: "ശ്രീ ഹനുമാൻ സ്വാമി സന്നിധി",
    category: "temple",
    categoryLabel: "Temple",
    categoryLabelMl: "ക്ഷേത്രം",
    imageUrl: "/images/deity_hanuman.png",
    description: "Lord Anjaneya Swami in radiant golden shrine adorned with sacred malas, bestowing strength, courage, and fearlessness.",
    descriptionMl: "ഭക്തിസാന്ദ്രമായ ദീപപ്രഭയിൽ ധീരതയും ആത്മവിശ്വാസവും നൽകി അനുഗ്രഹിക്കുന്ന ശ്രീ ഹനുമാൻ സ്വാമിയുടെ സന്നിധി."
  }
];

export const videoItems: VideoItem[] = [
  {
    id: "vid-1",
    title: "Annual Utsavam Panchavadyam & Melam Highlights",
    titleMl: "വാർഷിക ഉത്സവ മേളപ്പെരുക്കം",
    category: "Festival & Percussion",
    categoryMl: "ഉത്സവ വാദ്യമേളം",
    duration: "12:45",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailUrl: "/images/festival_utsavam.jpg",
    description: "Thrilling traditional rhythms of Kerala Panchavadyam and Pandi Melam performed by leading percussion masters.",
    descriptionMl: "കേരളത്തിലെ പ്രഗത്ഭ വാദ്യകലാകാരന്മാർ അണിനിരന്ന പഞ്ചവാദ്യ വിരുന്ന്."
  },
  {
    id: "vid-2",
    title: "Sacred Deeparadhana & Chuttuvilakku Darshan",
    titleMl: "ഭക്തിസാന്ദ്രമായ ദീപാരാധനയും ചുറ്റുവിളക്കും",
    category: "Rituals & Darshan",
    categoryMl: "പൂജാ കർമ്മങ്ങൾ",
    duration: "08:20",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailUrl: "/images/temple_lamp_vilakku.jpg",
    description: "Serene evening Deeparadhana with hundreds of glowing lamps and bell chimes.",
    descriptionMl: "മണിനാദത്തിന്റെയും ശംഖനാദത്തിന്റെയും അകമ്പടിയോടെയുള്ള സന്ധ്യാ ദീപാരാധന."
  },
  {
    id: "vid-3",
    title: "Heritage & Spiritual Legacy Documentary",
    titleMl: "ക്ഷേത്ര പൈതൃക ഡോക്യുമെന്ററി",
    category: "History & Heritage",
    categoryMl: "ചരിത്ര പൈതൃകം",
    duration: "15:10",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailUrl: "/images/temple_courtyard_rain.png",
    description: "Visual journey through the antiquity, Kaladithara lineage, and architectural splendour of the temple.",
    descriptionMl: "മണല്യാർകാവ് കളരിത്തറ ക്ഷേത്രത്തിന്റെ ചരിത്ര നാൾവഴികൾ."
  }
];

export const donationOptions: DonationOption[] = [
  {
    id: "annadanam",
    title: "Nithya Annadanam (Sacred Food Seva)",
    titleMl: "നിത്യ അന്നദാനം",
    description: "Feed thousands of visiting devotees daily with blessed vegetarian meals. Serving food is revered as the highest form of virtue (Maha Daana).",
    descriptionMl: "ക്ഷേത്രത്തിൽ എത്തുന്ന ഭക്തർക്ക് അന്നദാനം നൽകുന്നതിലേക്ക് സംഭാവന നൽകാം. അന്നദാനം മഹാദാനം.",
    suggestedAmounts: [501, 1001, 2501, 5001, 10001],
    category: "annadanam"
  },
  {
    id: "development",
    title: "Temple Renovation & Kalari Heritage Fund",
    titleMl: "ക്ഷേത്ര നവീകരണവും കളരിത്തറ സംരക്ഷണവും",
    description: "Contributions towards preserving the traditional timber architecture, stone carvings, roof maintenance, and temple pond purification.",
    descriptionMl: "ക്ഷേത്ര ശ്രീകോവിൽ, നാലമ്പലം, കൽത്തൂണുകൾ, ക്ഷേത്രക്കുളം എന്നിവയുടെ സംരക്ഷണത്തിനും വികസനത്തിനുമായി.",
    suggestedAmounts: [1000, 2500, 5000, 10000, 25000],
    category: "development"
  },
  {
    id: "deepam",
    title: "Nithya Deepam & Oil Fund",
    titleMl: "നിത്യ ദീപവും നല്ലെണ്ണ ഫണ്ടും",
    description: "Support the continuous lighting of the sanctum's perpetual flame (Kedavilakku) and daily evening Nilavilakkus with pure sesame oil and ghee.",
    descriptionMl: "ശ്രീകോവിലിലെ കെടാവിളക്കിലേക്കും നിത്യ നിലവിളക്കുകളിലേക്കുമുള്ള ശുദ്ധമായ നല്ലെണ്ണയും നെയ്യും സമർപ്പിക്കാൻ.",
    suggestedAmounts: [250, 500, 1000, 2000, 5000],
    category: "pooja_sponsor"
  },
  {
    id: "festival-fund",
    title: "Annual Utsavam Sponsorship",
    titleMl: "വാർഷിക ഉത്സവ സ്പോൺസർഷിപ്പ്",
    description: "Contribute to the grand celebrations including Chenda Melam, Thalappoli, elephant procession, and illumination.",
    descriptionMl: "വാർഷിക തിരുവാഭരണ മഹോത്സവത്തിന്റെ ചടങ്ങുകളിലേക്കും വാദ്യമേളങ്ങളിലേക്കും സംഭാവന നൽകുക.",
    suggestedAmounts: [1001, 3001, 5001, 15001, 50001],
    category: "festival"
  }
];
