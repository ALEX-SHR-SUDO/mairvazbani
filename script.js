// Updated translations with new keys: nav.whyus, nav.cta, hero.cta_secondary, hero.fc1_title, hero.fc1_sub, hero.fc2_title, hero.fc2_sub, hero.scroll, services.section_sub, services.s4_feat, services.learn_more, about.section_sub, about.feat1_desc through feat5_desc, about.cta_text, about.cta_btn, gallery.section_sub, contact.section_sub, contact.service_label, contact.service_placeholder, contact.whatsapp, footer.tagline, footer.services_title, footer.company_title, footer.contact_title

// Example translations in EN, HE, RU 
const translations = {
    en: {
        "nav.whyus": "Why Us",
        "nav.cta": "Book Now",
        // Other keys go here
    },
    he: {
        "nav.whyus": "למה אנחנו",
        "nav.cta": "הזמן עכשיו",
        // Other keys go here
    },
    ru: {
        "nav.whyus": "Почему мы",
        "nav.cta": "Забронируйте сейчас",
        // Other keys go here
    }
};

// Reveal animations and counter animation
function revealElements() {
    // Animation logic goes here
}

function initCounter() {
    // Counter logic goes here
}

// Scroll header shadow
window.onscroll = function() {
    const header = document.getElementById('header');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
};