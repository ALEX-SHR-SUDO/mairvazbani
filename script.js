/* ===================================================
   מהיר ועצבני — Premium Automotive Services Israel
   Full JS: i18n, hamburger, reveal, counters, form
   =================================================== */

// ===================================================
// 1. TRANSLATIONS
// ===================================================
const translations = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.whyus": "Why Us",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.cta": "Book Now",
    "hero.badge": "🇮🇱 Israel's Premier Auto Studio",
    "hero.title": "Your Car Deserves<br><span class=\"gradient-text\">World-Class Care</span>",
    "hero.subtitle": "From stunning vinyl wraps to nano ceramic coatings — we transform and protect your vehicle with cutting-edge technology and passion.",
    "hero.cta_button": "Get Free Quote →",
    "hero.cta_secondary": "Explore Services",
    "hero.stat1_num": "500+",
    "hero.stat1_label": "Cars Transformed",
    "hero.stat2_num": "10+",
    "hero.stat2_label": "Years Expert",
    "hero.stat3_num": "100%",
    "hero.stat3_label": "Satisfaction",
    "hero.fc1_title": "5-Year Warranty",
    "hero.fc1_sub": "On all coatings",
    "hero.fc2_title": "1-Day Service",
    "hero.fc2_sub": "Fast turnaround",
    "hero.scroll": "Scroll to explore",
    "services.section_label": "What We Do",
    "services.section_title": "Our Services",
    "services.section_sub": "Everything your car needs under one roof",
    "services.s1_title": "Window Tinting",
    "services.s1_desc": "High-quality tint films that reduce heat, UV rays, and glare — giving your car a sleek look and maximum privacy.",
    "services.s2_title": "Vinyl Wrapping",
    "services.s2_desc": "Transform your vehicle's appearance with premium vinyl wrap in any color or finish — matte, gloss, satin, and more.",
    "services.s3_title": "Designer Wrapping",
    "services.s3_desc": "Custom graphics and designer wrap films to make your car truly unique — from racing stripes to full custom designs.",
    "services.s4_title": "Anti-Gravel / PPF Film",
    "services.s4_desc": "Paint Protection Film shields your car's original paint from stone chips, scratches, and road debris.",
    "services.s4_feat": "Most Popular",
    "services.s5_title": "Headlight Restoration",
    "services.s5_desc": "Restore cloudy, yellowed headlights to crystal clarity — improving visibility and safety.",
    "services.s6_title": "Nano / Ceramic Coating",
    "services.s6_desc": "Advanced ceramic nano coating creates a long-lasting hydrophobic shield, protecting paint from dirt and UV.",
    "services.s7_title": "Car Audio Installation",
    "services.s7_desc": "Professional installation of car audio systems — speakers, subwoofers, amplifiers, and multimedia units for the ultimate sound experience.",
    "services.learn_more": "Get a quote →",
    "about.section_label": "About Us",
    "about.section_title": "Why Choose Us?",
    "about.section_sub": "Israel's most trusted automotive protection studio",
    "about.feature1": "Premium Quality",
    "about.feat1_desc": "We use only world-class brands — 3M, Avery Dennison, XPEL, and more.",
    "about.feature2": "Certified Experts",
    "about.feat2_desc": "Our technicians are internationally certified with 10+ years of hands-on experience.",
    "about.feature4": "Fast Turnaround",
    "about.feat4_desc": "Same-day and next-day service available for most treatments.",
    "about.feature5": "Best Value",
    "about.feat5_desc": "Competitive pricing with transparent quotes — no hidden fees ever.",
    "about.feature3": "Satisfaction Guarantee",
    "about.feat3_desc": "Not happy? We'll make it right. Your satisfaction is our promise.",
    "about.cta_text": "Ready to transform your car?",
    "about.cta_btn": "Book a Free Consultation",
    "about.description": "מהיר ועצבני is a premier automotive services center located in the Tel Aviv area, Israel. With over a decade of hands-on experience, our skilled technicians deliver exceptional results on every vehicle that enters our studio.",
    "gallery.section_label": "Our Work",
    "gallery.section_title": "Before & After",
    "gallery.section_sub": "Real results from real customers",
    "gallery.item1": "Window Tinting",
    "gallery.item2": "Vinyl Wrap",
    "gallery.item3": "PPF Film",
    "gallery.item4": "Ceramic Coating",
    "gallery.item5": "Headlights",
    "gallery.item6": "Car Audio",
    "contact.section_label": "Get In Touch",
    "contact.section_title": "Book Your Service",
    "contact.section_sub": "Fill out the form or reach us directly — we respond within hours",
    "contact.address_title": "Address",
    "contact.address": "Tel Aviv Area, Israel",
    "contact.phone_title": "Phone",
    "contact.phone": "+972-50-123-4567",
    "contact.email_title": "Email",
    "contact.email": "info@mairvazbani.co.il",
    "contact.hours_title": "Hours",
    "contact.hours": "Sun–Thu 09:00–19:00<br>Fri 09:00–14:00<br>Sat Closed",
    "contact.whatsapp": "Chat on WhatsApp",
    "contact.name_label": "Full Name",
    "contact.name_placeholder": "Full Name",
    "contact.phone_label": "Phone",
    "contact.phone_placeholder": "Phone Number",
    "contact.email_label": "Email",
    "contact.email_placeholder": "Email Address",
    "contact.service_label": "Service",
    "contact.service_placeholder": "Choose a service...",
    "contact.message_label": "Message",
    "contact.message_placeholder": "Tell us about your car...",
    "contact.submit_button": "Send Message →",
    "footer.tagline": "Israel's Premier Auto Studio",
    "footer.services_title": "Services",
    "footer.company_title": "Company",
    "footer.contact_title": "Contact",
    "footer.copyright": "© 2025 מהיר ועצבני. All rights reserved."
  },
  he: {
    "nav.home": "בית",
    "nav.services": "שירותים",
    "nav.whyus": "למה אנחנו",
    "nav.gallery": "גלריה",
    "nav.contact": "צור קשר",
    "nav.cta": "הזמן עכשיו",
    "hero.badge": "🇮🇱 סטודיו הרכב המוביל בישראל",
    "hero.title": "הרכב שלך ראוי<br><span class=\"gradient-text\">לטיפול ברמה עולמית</span>",
    "hero.subtitle": "מציפוי ויניל מרהיב ועד ציפוי קרמי ננו — אנחנו משנים ומגנים על הרכב שלך עם טכנולוגיה חדישה ותשוקה.",
    "hero.cta_button": "קבל הצעת מחיר חינם →",
    "hero.cta_secondary": "גלה שירותים",
    "hero.stat1_num": "+500",
    "hero.stat1_label": "רכבים שהושבחו",
    "hero.stat2_num": "+10",
    "hero.stat2_label": "שנות מומחיות",
    "hero.stat3_num": "100%",
    "hero.stat3_label": "שביעות רצון",
    "hero.fc1_title": "אחריות 5 שנים",
    "hero.fc1_sub": "על כל הציפויים",
    "hero.fc2_title": "שירות יום אחד",
    "hero.fc2_sub": "זמן תגובה מהיר",
    "hero.scroll": "גלול לגלות",
    "services.section_label": "מה אנחנו עושים",
    "services.section_title": "השירותים שלנו",
    "services.section_sub": "כל מה שהרכב שלך צריך תחת קורת גג אחת",
    "services.s1_title": "הכהיית חלונות",
    "services.s1_desc": "סרטי הכהייה איכותיים המפחיתים חום, קרינת UV ובוהק — נותנים לרכב שלך מראה מלוטש ופרטיות מרבית.",
    "services.s2_title": "ציפוי ויניל",
    "services.s2_desc": "שנה את מראה הרכב עם ויניל פרמיום בכל צבע או גימור — מט, גלוס, סאטן ועוד.",
    "services.s3_title": "עיצוב ציפוי ויניל",
    "services.s3_desc": "גרפיקה מותאמת אישית וסרטי עיצוב להפיכת הרכב שלך לייחודי — מפסי מרוץ ועד עיצובים מלאים.",
    "services.s4_title": "סרט אנטי-חצץ / PPF",
    "services.s4_desc": "סרט הגנת צבע מגן על הצבע המקורי של הרכב מפני שבבי אבן, שריטות ופסולת כביש.",
    "services.s4_feat": "הכי פופולרי",
    "services.s5_title": "שיקום פנסים",
    "services.s5_desc": "שיקום פנסים מעוננים וצהובים לבהירות קריסטל — שיפור הנראות והבטיחות.",
    "services.s6_title": "ציפוי ננו / קרמי",
    "services.s6_desc": "ציפוי ננו קרמי מתקדם יוצר מחסום הידרופובי עמיד, המגן על הצבע מלכלוך וקרינת UV.",
    "services.s7_title": "התקנת מערכת שמע לרכב",
    "services.s7_desc": "התקנה מקצועית של מערכות שמע לרכב — רמקולים, סאבוופרים, מגברים ויחידות מולטימדיה.",
    "services.learn_more": "קבל הצעה →",
    "about.section_label": "אודות",
    "about.section_title": "למה לבחור בנו?",
    "about.section_sub": "סטודיו הגנה לרכב המהימן ביותר בישראל",
    "about.feature1": "איכות פרמיום",
    "about.feat1_desc": "אנו משתמשים רק במותגים ברמה עולמית — 3M, Avery Dennison, XPEL ועוד.",
    "about.feature2": "מומחים מוסמכים",
    "about.feat2_desc": "הטכנאים שלנו מוסמכים בינלאומית עם +10 שנות ניסיון מעשי.",
    "about.feature4": "זמן תגובה מהיר",
    "about.feat4_desc": "שירות ביום פנייה ובמחרת זמין לרוב הטיפולים.",
    "about.feature5": "הערך הטוב ביותר",
    "about.feat5_desc": "תמחור תחרותי עם הצעות שקופות — ללא עמלות נסתרות לעולם.",
    "about.feature3": "אחריות שביעות רצון",
    "about.feat3_desc": "לא מרוצים? נתקן. שביעות הרצון שלך היא ההבטחה שלנו.",
    "about.cta_text": "מוכן לשנות את הרכב שלך?",
    "about.cta_btn": "הזמן ייעוץ חינם",
    "about.description": "מהיר ועצבני הוא מרכז שירותי רכב מוביל הממוקם באזור תל אביב, ישראל. עם למעלה מעשור של ניסיון מעשי, הטכנאים המיומנים שלנו מספקים תוצאות יוצאות דופן לכל רכב שנכנס לסטודיו שלנו.",
    "gallery.section_label": "העבודות שלנו",
    "gallery.section_title": "לפני ואחרי",
    "gallery.section_sub": "תוצאות אמיתיות מלקוחות אמיתיים",
    "gallery.item1": "הכהיית חלונות",
    "gallery.item2": "ציפוי ויניל",
    "gallery.item3": "סרט PPF",
    "gallery.item4": "ציפוי קרמי",
    "gallery.item5": "פנסים",
    "gallery.item6": "שמע לרכב",
    "contact.section_label": "צור קשר",
    "contact.section_title": "הזמן שירות",
    "contact.section_sub": "מלא את הטופס או פנה אלינו ישירות — אנו מגיבים תוך שעות",
    "contact.address_title": "כתובת",
    "contact.address": "אזור תל אביב, ישראל",
    "contact.phone_title": "טלפון",
    "contact.phone": "050-123-4567",
    "contact.email_title": "אימייל",
    "contact.email": "info@mairvazbani.co.il",
    "contact.hours_title": "שעות פעילות",
    "contact.hours": "א'–ה' 09:00–19:00<br>ו' 09:00–14:00<br>שבת סגור",
    "contact.whatsapp": "שלח הודעה בוואטסאפ",
    "contact.name_label": "שם מלא",
    "contact.name_placeholder": "שם מלא",
    "contact.phone_label": "טלפון",
    "contact.phone_placeholder": "מספר טלפון",
    "contact.email_label": "אימייל",
    "contact.email_placeholder": "כתובת אימייל",
    "contact.service_label": "שירות",
    "contact.service_placeholder": "בחר שירות...",
    "contact.message_label": "הודעה",
    "contact.message_placeholder": "ספר לנו על הרכב שלך...",
    "contact.submit_button": "שלח הודעה →",
    "footer.tagline": "סטודיו הרכב המוביל בישראל",
    "footer.services_title": "שירותים",
    "footer.company_title": "החברה",
    "footer.contact_title": "צור קשר",
    "footer.copyright": "© 2025 מהיר ועצבני. כל הזכויות שמורות."
  },
  ru: {
    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.whyus": "Почему мы",
    "nav.gallery": "Галерея",
    "nav.contact": "Контакты",
    "nav.cta": "Записаться",
    "hero.badge": "🇮🇱 Премиум автостудия Израиля",
    "hero.title": "Ваш автомобиль заслуживает<br><span class=\"gradient-text\">заботы мирового класса</span>",
    "hero.subtitle": "От эффектного винилового рэпа до нано-керамического покрытия — мы преображаем и защищаем ваш автомобиль с передовыми технологиями.",
    "hero.cta_button": "Бесплатная консультация →",
    "hero.cta_secondary": "Наши услуги",
    "hero.stat1_num": "500+",
    "hero.stat1_label": "Авто преображено",
    "hero.stat2_num": "10+",
    "hero.stat2_label": "Лет опыта",
    "hero.stat3_num": "100%",
    "hero.stat3_label": "Довольных клиентов",
    "hero.fc1_title": "Гарантия 5 лет",
    "hero.fc1_sub": "На все покрытия",
    "hero.fc2_title": "Сервис за 1 день",
    "hero.fc2_sub": "Быстрое исполнение",
    "hero.scroll": "Прокрутите вниз",
    "services.section_label": "Что мы делаем",
    "services.section_title": "Наши услуги",
    "services.section_sub": "Всё что нужно вашему авто — под одной крышей",
    "services.s1_title": "Тонировка стёкол",
    "services.s1_desc": "Качественные тонировочные плёнки, снижающие тепло, УФ-лучи и блики — стильный вид и максимальная приватность.",
    "services.s2_title": "Виниловая оклейка",
    "services.s2_desc": "Преобразите внешний вид авто с премиум-виниловой плёнкой в любом цвете и отделке — матовой, глянцевой, сатин и др.",
    "services.s3_title": "Дизайнерская оклейка",
    "services.s3_desc": "Кастомная графика и дизайнерские плёнки для уникального вида — от гоночных полос до полного кастома.",
    "services.s4_title": "Антигравийная плёнка / PPF",
    "services.s4_desc": "Paint Protection Film защищает оригинальное ЛКП от сколов, царапин и дорожного мусора.",
    "services.s4_feat": "Самый популярный",
    "services.s5_title": "Восстановление фар",
    "services.s5_desc": "Восстанавливаем мутные, пожелтевшие фары до кристальной прозрачности — улучшаем видимость и безопасность.",
    "services.s6_title": "Нано / Керамическое покрытие",
    "services.s6_desc": "Передовое нано-керамическое покрытие создаёт долговечный гидрофобный щит, защищая ЛКП от грязи и УФ.",
    "services.s7_title": "Установка автозвука",
    "services.s7_desc": "Профессиональная установка автозвука — динамики, сабвуферы, усилители и мультимедиа для идеального звука.",
    "services.learn_more": "Получить предложение →",
    "about.section_label": "О нас",
    "about.section_title": "Почему выбирают нас?",
    "about.section_sub": "Самая надёжная автостудия защиты в Израиле",
    "about.feature1": "Премиум качество",
    "about.feat1_desc": "Работаем только с мировыми брендами — 3M, Avery Dennison, XPEL и другими.",
    "about.feature2": "Сертифицированные мастера",
    "about.feat2_desc": "Наши техники имеют международные сертификаты и 10+ лет практики.",
    "about.feature4": "Быстрое исполнение",
    "about.feat4_desc": "Сервис в день обращения и на следующий день для большинства услуг.",
    "about.feature5": "Лучшее соотношение цены",
    "about.feat5_desc": "Конкурентные цены и прозрачные сметы — никаких скрытых платежей.",
    "about.feature3": "Гарантия результата",
    "about.feat3_desc": "Не довольны? Исправим. Ваше удовлетворение — наше обещание.",
    "about.cta_text": "Готовы преобразить свой автомобиль?",
    "about.cta_btn": "Записаться на консультацию",
    "about.description": "מהיר ועצבני — ведущий центр автосервиса в районе Тель-Авива, Израиль. Более десяти лет практического опыта, наши квалифицированные техники обеспечивают исключительные результаты для каждого автомобиля.",
    "gallery.section_label": "Наши работы",
    "gallery.section_title": "До и После",
    "gallery.section_sub": "Реальные результаты для реальных клиентов",
    "gallery.item1": "Тонировка стёкол",
    "gallery.item2": "Виниловый рэп",
    "gallery.item3": "PPF плёнка",
    "gallery.item4": "Керамика",
    "gallery.item5": "Фары",
    "gallery.item6": "Автозвук",
    "contact.section_label": "Связаться",
    "contact.section_title": "Запись на сервис",
    "contact.section_sub": "Заполните форму или позвоните — ответим в течение нескольких часов",
    "contact.address_title": "Адрес",
    "contact.address": "Район Тель-Авива, Израиль",
    "contact.phone_title": "Телефон",
    "contact.phone": "+972-50-123-4567",
    "contact.email_title": "Email",
    "contact.email": "info@mairvazbani.co.il",
    "contact.hours_title": "Часы работы",
    "contact.hours": "Вс–Чт 09:00–19:00<br>Пт 09:00–14:00<br>Сб закрыто",
    "contact.whatsapp": "Написать в WhatsApp",
    "contact.name_label": "Полное имя",
    "contact.name_placeholder": "Полное имя",
    "contact.phone_label": "Телефон",
    "contact.phone_placeholder": "Номер телефона",
    "contact.email_label": "Email",
    "contact.email_placeholder": "Email адрес",
    "contact.service_label": "Услуга",
    "contact.service_placeholder": "Выбрать услугу...",
    "contact.message_label": "Сообщение",
    "contact.message_placeholder": "Расскажите о своём автомобиле...",
    "contact.submit_button": "Отправить →",
    "footer.tagline": "Премиум автостудия Израиля",
    "footer.services_title": "Услуги",
    "footer.company_title": "Компания",
    "footer.contact_title": "Контакты",
    "footer.copyright": "© 2025 מהיר ועצבני. Все права защищены."
  }
};

// ===================================================
// 2. LANGUAGE SWITCHER
// ===================================================
let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  // direction
  const isRTL = lang === 'he';
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

  // update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLang(btn.getAttribute('data-lang'));
  });
});

// ===================================================
// 3. HAMBURGER / MOBILE NAV
// ===================================================
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

function toggleMobileNav() {
  const isOpen = mobileNav.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMobileNav);

// Close on link click
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===================================================
// 4. SMOOTH SCROLL (anchors)
// ===================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===================================================
// 5. SCROLL REVEAL (IntersectionObserver)
// ===================================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===================================================
// 6. STICKY HEADER — add .scrolled class
// ===================================================
const header = document.getElementById('header');

function handleHeaderScroll() {
  header.classList.toggle('scrolled', window.scrollY > 50);
}

window.addEventListener('scroll', handleHeaderScroll, { passive: true });

// ===================================================
// 7. SCROLL-TO-TOP BUTTON
// ===================================================
const scrollTopBtn = document.getElementById('scroll-top');

function handleScrollTopVisibility() {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
}

window.addEventListener('scroll', handleScrollTopVisibility, { passive: true });

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===================================================
// 8. COUNTER ANIMATION (hero stats)
// ===================================================
function animateCounter(el, target, suffix, duration) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = Math.round(start) + suffix;
  }, 16);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = el.getAttribute('data-i18n');
      const t = translations[currentLang];
      const val = t[raw] || el.textContent;
      const numMatch = val.match(/\d+/);
      if (!numMatch) return;
      const num = parseInt(numMatch[0], 10);
      const suffix = val.replace(/\d+/, '').trim();
      animateCounter(el, num, suffix, 1200);
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.trust-num').forEach(el => counterObserver.observe(el));

// ===================================================
// 9. FORM SUBMIT
// ===================================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(contactForm).entries());
    console.log('Form submitted:', data);

    // Show success message
    let msg = contactForm.querySelector('.form-success');
    if (!msg) {
      msg = document.createElement('div');
      msg.className = 'form-success';
      msg.textContent = '✅ Message sent! We will contact you shortly.';
      contactForm.appendChild(msg);
    }
    msg.style.display = 'block';
    contactForm.reset();

    setTimeout(() => { msg.style.display = 'none'; }, 5000);
  });
}

// ===================================================
// INIT
// ===================================================
applyLang('en');