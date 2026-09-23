import { useEffect, useState } from "react";

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedGuide, setSelectedGuide] = useState(null);

  const company = {
    name: "Kiran Packers And Movers",
    shortName: "Kiran Packers",
    phone: "08128538551",
    whatsapp: "918128538551",
    email: "kiranpackersandmovers@gmail.com",
    address:
      "9-1-218, Street No. 7, Mukarampura, Mahalaxmi Supermarket, Karimnagar-505002, Telangana",
    maps:
      "https://www.google.com/maps/search/?api=1&query=Nain+Packers+And+Movers%2C+9-1-218%2C+Street+No.+7%2C+Mukarampura%2C+Karimnagar%2C+Telangana",
  };

  const services = [
    {
      icon: "🏠",
      title: "House Shifting",
      text: "Complete residential relocation with careful packing, loading, transportation and unloading.",
    },
    {
      icon: "🏢",
      title: "Office Relocation",
      text: "Organised office shifting designed to reduce downtime and keep your workplace move smooth.",
    },
    {
      icon: "📦",
      title: "Packing & Unpacking",
      text: "Careful packing solutions for furniture, household items, electronics, documents and valuables.",
    },
    {
      icon: "🚚",
      title: "Local Shifting",
      text: "Reliable moving assistance for local household and commercial relocations within Karimnagar.",
    },
    {
      icon: "🛣️",
      title: "Intercity Relocation",
      text: "Door-to-door relocation support for moving between cities with organised transportation.",
    },
    {
      icon: "🏍️",
      title: "Vehicle Transportation",
      text: "Transportation assistance for bikes, scooters and other personal vehicles.",
    },
  ];

  const advantages = [
    {
      icon: "📦",
      title: "Careful Packing",
      text: "Items are organised and packed according to their type and handling requirements.",
    },
    {
      icon: "🚛",
      title: "Reliable Transportation",
      text: "Planned transportation support for local and long-distance movement.",
    },
    {
      icon: "👷",
      title: "Moving Assistance",
      text: "A practical team approach for loading, unloading and shifting activities.",
    },
    {
      icon: "📍",
      title: "Door-to-Door Support",
      text: "From pickup to delivery, we help coordinate the important stages of your move.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Share Your Requirement",
      text: "Tell us your pickup location, destination and the type of items you need to move.",
    },
    {
      number: "02",
      title: "Plan The Move",
      text: "We understand the shifting requirement and organise the appropriate moving support.",
    },
    {
      number: "03",
      title: "Pack & Load",
      text: "Your belongings are packed, arranged and loaded carefully for transportation.",
    },
    {
      number: "04",
      title: "Transport",
      text: "The packed items are transported towards the destination as planned.",
    },
    {
      number: "05",
      title: "Unload & Settle",
      text: "Items are unloaded at the destination and the move is brought to completion.",
    },
  ];

  const areas = [
    "Mukarampura",
    "Karimnagar",
    "Mankammathota",
    "Vidyanagar",
    "Rekurthi",
    "Bhagatnagar",
    "Kothapalli",
    "Choppadandi",
    "Huzurabad",
    "Jagtial",
    "Peddapalli",
    "Warangal",
  ];

  const guides = [
    {
      icon: "💰",
      category: "Cost Guide",
      time: "6 min",
      title:
        "How Much Do Packers and Movers Charge in Karimnagar? [2026 Price Guide]",
      text:
        "Realistic 2026 price guidance for 1BHK, 2BHK and 3BHK moves in Karimnagar — plus the factors that can change your quote and ways to avoid unexpected charges.",
    },
    {
      icon: "✅",
      category: "Checklists",
      time: "7 min",
      title:
        "Moving from Karimnagar to Hyderabad: Complete Checklist",
      text:
        "A practical checklist for Karimnagar–Hyderabad moves covering permissions, utility transfers, packing order and moving-day preparation.",
    },
    {
      icon: "📦",
      category: "Packing Tips",
      time: "5 min",
      title:
        "Top 10 Tips for Packing Fragile Items During Monsoon",
      text:
        "Simple packing tips to help protect glassware, electronics, décor and other fragile belongings during humid and rainy conditions.",
    },
  ];

  const faqs = [
    {
      q: "What types of shifting services are available?",
      a: "We provide household shifting, office relocation, packing and unpacking, local shifting, intercity relocation and vehicle transportation assistance.",
    },
    {
      q: "Do you provide packing services?",
      a: "Yes. Packing support can be arranged for household goods, furniture, electronics, kitchen items, documents and other belongings.",
    },
    {
      q: "Can I request a moving quotation?",
      a: "Yes. Use the Get Free Quote button and provide your basic moving details. Our team can then discuss your requirement.",
    },
    {
      q: "Do you provide local shifting in Karimnagar?",
      a: "Yes. Local relocation support is available for shifting requirements around Karimnagar and nearby areas.",
    },
    {
      q: "How can I contact Nain Packers And Movers?",
      a: "You can call the listed number, use WhatsApp, or visit the Mukarampura location using the Google Maps button.",
    },
  ];

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.08,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.background = "#eef5ff";
    document.body.style.fontFamily =
      "Inter, Arial, Helvetica, sans-serif";
  }, []);

  const scrollToSection = (id) => {
    setMobileMenu(false);

    const element = document.getElementById(id);

    if (element) {
      const headerHeight =
        window.innerWidth <= 850 ? 72 : 94;

      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Nain Packers And Movers, I would like to know more about your packing and moving services."
    );

    window.open(
      `https://wa.me/${company.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  const callNow = () => {
    window.location.href = `tel:${company.phone}`;
  };

  const openMaps = () => {
    window.open(company.maps, "_blank");
  };

  const submitQuote = (e) => {
    e.preventDefault();

    alert(
      "Thank you for contacting Nain Packers And Movers. Your enquiry has been submitted."
    );

    setShowQuote(false);
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          overflow-x: hidden;
        }

        button,
        input,
        textarea,
        select {
          font: inherit;
        }

        a {
          text-decoration: none;
        }

        /* =========================
           MAIN
        ========================= */

        .app {
          min-height: 100vh;
          color: #17243b;
          background: linear-gradient(
            180deg,
            #eef5ff 0%,
            #ffffff 45%,
            #edf5fc 100%
          );
        }

        @keyframes totalBlink {
          0% {
            opacity: 1;
          }

          46% {
            opacity: 1;
          }

          50% {
            opacity: 0.72;
          }

          54% {
            opacity: 0.98;
          }

          100% {
            opacity: 1;
          }
        }

        @keyframes floatUp {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-9px);
          }
        }

        .blink-text {
          animation: totalBlink 3.8s ease-in-out infinite;
        }

        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }

        .container {
          width: min(1240px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* =========================
           TOP BAR
        ========================= */

        .topbar {
          background: #0B2A4A;
          color: #ffffff;
          min-height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7px 20px;
          font-size: 13px;
          letter-spacing: 0.3px;
          border-bottom: 1px solid
            rgba(217, 107, 39, 0.5);
        }

        .topbar-inner {
          width: min(1240px, 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .topbar span {
          opacity: 0.95;
        }

        .topbar strong {
          color: #E18443;
        }

        /* =========================
           HEADER / NAVBAR
        ========================= */

        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #061A30;
          border-bottom: 1px solid
            rgba(217, 107, 39, 0.45);
          box-shadow:
            0 8px 30px rgba(0, 0, 0, 0.18);
        }

        .nav {
          width: min(1240px, calc(100% - 40px));
          margin: 0 auto;
          min-height: 94px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          min-width: max-content;
        }

        .logo-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #071D36;
          border: 3px solid #D96B27;
          color: #ffffff;
          font-size: 23px;
          box-shadow:
            0 6px 18px rgba(0, 0, 0, 0.2);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .logo-text strong {
          color: #ffffff;
          font-family: Georgia, serif;
          font-size: 20px;
          line-height: 1.1;
        }

        .logo-text span {
          color: #E18443;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-top: 4px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .nav-links button {
          border: 0;
          background: transparent;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          padding: 8px 0;
          transition: 0.25s;
        }

        .nav-links button:hover {
          color: #E18443;
        }

        .nav-quote {
          background: #D96B27 !important;
          color: #ffffff !important;
          padding: 12px 18px !important;
          border-radius: 8px;
          box-shadow:
            0 7px 18px rgba(217, 107, 39, 0.3);
        }

        .nav-quote:hover {
          background: #B9541E !important;
          color: #ffffff !important;
          transform: translateY(-2px);
        }

        .menu-button {
          display: none;
          width: 44px;
          height: 44px;
          border: 1px solid
            rgba(255, 255, 255, 0.3);
          background: #123D63;
          border-radius: 8px;
          font-size: 23px;
          cursor: pointer;
          color: #ffffff;
        }

        /* =========================
           HERO / HOMEPAGE
        ========================= */

        .hero {
          min-height: calc(100vh - 132px);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;

          background:
            radial-gradient(
              circle at 88% 20%,
              rgba(217, 107, 39, 0.45),
              transparent 28%
            ),
            linear-gradient(
              115deg,
              #061A30 0%,
              #061A30 54%,
              #D96B27 100%
            );
        }

        .hero::before {
          content: "";
          position: absolute;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          border: 80px solid
            rgba(255, 255, 255, 0.07);
          right: -190px;
          top: 40px;
        }

        .hero::after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          left: -130px;
          bottom: -120px;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: min(1240px, calc(100% - 40px));
          margin: 0 auto;
          padding: 70px 0;
          text-align: left;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 14px;
          border: 1px solid
            rgba(255, 255, 255, 0.35);
          background: rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          color: #ffffff;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .hero h1 {
          max-width: 900px;
          margin: 0;
          color: #ffffff;
          font-family: Georgia, serif;
          font-size: clamp(45px, 6vw, 82px);
          line-height: 1.03;
          letter-spacing: -2px;
          text-align: left;
        }

        .hero h1 span {
          color: #E18443;
        }

        .hero p {
          max-width: 700px;
          color: #e7f1ff;
          font-size: 18px;
          line-height: 1.75;
          margin: 28px 0 0;
          text-align: left;
        }

        .hero-actions {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 13px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .btn {
          border: 0;
          cursor: pointer;
          border-radius: 8px;
          padding: 14px 21px;
          font-weight: 700;
          transition: 0.3s;
        }

        .btn-primary {
          background: #D96B27;
          color: #ffffff;
          box-shadow:
            0 10px 25px rgba(217, 107, 39, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          background: #B9541E;
        }

        .btn-light {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border: 1px solid
            rgba(255, 255, 255, 0.35);
        }

        .btn-light:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.2);
        }

        .hero-contact {
          margin-top: 45px;
          display: flex;
          justify-content: flex-start;
          gap: 30px;
          flex-wrap: wrap;
        }

        .hero-contact-item {
          color: #e7f0fb;
          font-size: 14px;
          text-align: left;
        }

        .hero-contact-item strong {
          color: #E18443;
          display: block;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        /* =========================
           TRUST
        ========================= */

        .trust-strip {
          background: #0B2A4A;
          color: #ffffff;
          padding: 18px 0;
        }

        .trust-grid {
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 20px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
          padding: 8px 14px;
          border-right: 1px solid
            rgba(255, 255, 255, 0.13);
          text-align: left;
        }

        .trust-item:last-child {
          border-right: 0;
        }

        .trust-icon {
          font-size: 25px;
        }

        .trust-item strong {
          display: block;
          color: #E18443;
          font-size: 13px;
        }

        .trust-item span {
          display: block;
          color: #d8e6f5;
          font-size: 11px;
          margin-top: 3px;
        }

        /* =========================
           SECTIONS
        ========================= */

        .section {
          padding: 72px 0;
        }

        .section.alt {
          background: #edf5fd;
        }

        .section.dark {
          background: #0B2A4A;
          color: #ffffff;
        }

        .section-heading {
          width: 100%;
          max-width: 780px;
          margin: 0 0 40px;
          text-align: left;
        }

        .eyebrow {
          color: #D96B27;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
          text-align: left;
        }

        .dark .eyebrow {
          color: #E18443;
        }

        .section-heading h2 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.08;
          color: #0B2A4A;
          text-align: left;
        }

        .dark .section-heading h2 {
          color: #ffffff;
        }

        .section-heading p {
          color: #66768b;
          line-height: 1.75;
          margin: 15px 0 0;
          font-size: 16px;
          text-align: left;
        }

        .dark .section-heading p {
          color: #d2dfed;
        }

        /* =========================
           ABOUT
        ========================= */

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .about-image {
          min-height: 470px;
          border-radius: 18px;

          background:
            linear-gradient(
              rgba(11, 42, 74, 0.3),
              rgba(11, 42, 74, 0.6)
            ),
            url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85")
              center / cover;

          border: 5px solid #ffffff;

          box-shadow:
            0 20px 45px rgba(11, 42, 74, 0.18);
        }

        .about-content {
          text-align: left;
        }

        .about-content h3 {
          color: #0B2A4A;
          font-family: Georgia, serif;
          font-size: 34px;
          line-height: 1.2;
          margin: 0 0 15px;
          text-align: left;
        }

        .about-content p {
          color: #5f6f84;
          line-height: 1.8;
          margin: 0 0 16px;
          text-align: left;
        }

        .about-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 25px;
        }

        .point {
          background: #ffffff;
          border: 1px solid #d5e4f3;
          padding: 15px;
          border-radius: 10px;
          color: #243b58;
          font-size: 13px;
          font-weight: 700;
          text-align: left;
          transition: 0.25s;
        }

        .point:hover {
          transform: translateY(-3px);
          border-color: #D96B27;
        }

        /* =========================
           SERVICES
        ========================= */

        .service-grid {
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 18px;
          align-items: stretch;
        }

        .service-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background: #ffffff;
          border: 1px solid #d8e5f1;
          border-radius: 15px;
          padding: 27px;
          min-height: 260px;
          text-align: left;
          transition: 0.35s;
        }

        .service-card:hover {
          transform: translateY(-7px);
          border-color: #D96B27;
          box-shadow:
            0 18px 35px rgba(11, 42, 74, 0.12);
        }

        .service-icon {
          width: 55px;
          height: 55px;
          border-radius: 13px;
          display: grid;
          place-items: center;
          background: #e7f1ff;
          border: 2px solid #c9ddf2;
          font-size: 26px;
          margin-bottom: 20px;
        }

        .service-card h3 {
          width: 100%;
          margin: 0 0 10px;
          color: #0B2A4A;
          font-family: Georgia, serif;
          font-size: 22px;
          line-height: 1.25;
          text-align: left;
        }

        .service-card p {
          width: 100%;
          margin: 0;
          color: #66768b;
          line-height: 1.65;
          font-size: 14px;
          text-align: left;
        }

        .service-link {
          margin-top: auto;
          padding-top: 17px;
          color: #D96B27;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          text-align: left;
        }

        .service-link:hover {
          color: #B9541E;
        }

        /* =========================
           ADVANTAGES
        ========================= */

        .advantage-grid {
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 18px;
          align-items: stretch;
        }

        .advantage-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 25px;
          background: #123D63;
          border-radius: 15px;
          border: 1px solid
            rgba(255, 255, 255, 0.14);
          text-align: left;
          transition: 0.3s;
        }

        .advantage-card:hover {
          transform: translateY(-6px);
          background: #174A73;
        }

        .advantage-icon {
          width: 53px;
          height: 53px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: rgba(217, 107, 39, 0.16);
          font-size: 27px;
          margin-bottom: 16px;
        }

        .advantage-card h3 {
          width: 100%;
          margin: 0 0 9px;
          color: #E18443;
          font-family: Georgia, serif;
          font-size: 20px;
          text-align: left;
        }

        .advantage-card p {
          width: 100%;
          color: #d3e1ef;
          line-height: 1.65;
          font-size: 13px;
          margin: 0;
          text-align: left;
        }

        /* =========================
           PROCESS
        ========================= */

        .process-grid {
          display: grid;
          grid-template-columns:
            repeat(5, 1fr);
          gap: 13px;
          align-items: stretch;
        }

        .process-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background: #ffffff;
          border: 1px solid #d5e3f1;
          padding: 23px;
          border-radius: 14px;
          min-height: 235px;
          text-align: left;
          transition: 0.3s;
        }

        .process-card:hover {
          transform: translateY(-6px);
          border-color: #D96B27;
          box-shadow:
            0 15px 30px rgba(11, 42, 74, 0.1);
        }

        .process-number {
          color: #D96B27;
          font-size: 29px;
          font-family: Georgia, serif;
          font-weight: bold;
        }

        .process-card h3 {
          width: 100%;
          color: #0B2A4A;
          font-family: Georgia, serif;
          font-size: 19px;
          line-height: 1.3;
          margin: 16px 0 9px;
          text-align: left;
        }

        .process-card p {
          width: 100%;
          color: #69788c;
          font-size: 13px;
          line-height: 1.65;
          margin: 0;
          text-align: left;
        }

        /* =========================
           AREAS
        ========================= */

        .areas-grid {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .area-pill {
          padding: 11px 16px;
          background: #ffffff;
          border: 1px solid #d3e2f1;
          border-radius: 999px;
          color: #354a65;
          font-size: 13px;
          font-weight: 700;
          text-align: left;
          transition: 0.25s;
        }

        .area-pill:hover {
          background: #fff1e6;
          border-color: #D96B27;
          color: #B9541E;
          transform: translateY(-2px);
        }

        /* =========================
           JOURNAL
        ========================= */

        .journal-section {
          background: #f4f7fb;
        }

        .journal-grid {
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 20px;
          align-items: stretch;
        }

        .journal-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-height: 330px;
          padding: 28px;
          background: #ffffff;
          border: 1px solid #d7e3ef;
          border-radius: 16px;
          text-align: left;
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .journal-card:hover {
          transform: translateY(-8px);
          border-color: #D96B27;
          box-shadow:
            0 20px 40px rgba(11, 42, 74, 0.12);
        }

        .journal-icon {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: #edf5fd;
          border: 2px solid #d4e4f3;
          font-size: 27px;
          margin-bottom: 20px;
          animation: floatUp 3.5s ease-in-out infinite;
        }

        .journal-meta {
          color: #D96B27;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .journal-card h3 {
          margin: 0;
          color: #0B2A4A;
          font-family: Georgia, serif;
          font-size: 22px;
          line-height: 1.3;
          text-align: left;
        }

        .journal-card p {
          margin: 14px 0 0;
          color: #66768b;
          font-size: 14px;
          line-height: 1.7;
          text-align: left;
        }

        .journal-read {
          margin-top: auto;
          padding-top: 20px;
          border: 0;
          background: transparent;
          color: #D96B27;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          padding-left: 0;
          transition: 0.25s;
        }

        .journal-read:hover {
          color: #B9541E;
          transform: translateX(4px);
        }

        .journal-modal-meta {
          color: #D96B27;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .journal-modal-text {
          color: #5f6f84;
          line-height: 1.8;
          font-size: 15px;
          margin: 0 0 22px;
        }

        .journal-modal-note {
          padding: 16px;
          margin-bottom: 22px;
          border-left: 4px solid #D96B27;
          background: #f4f7fb;
          border-radius: 8px;
          color: #40536b;
          line-height: 1.7;
          font-size: 13px;
        }

        /* =========================
           CTA
        ========================= */

        .cta {
          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(217, 107, 39, 0.45),
              transparent 28%
            ),
            linear-gradient(
              120deg,
              #071D36,
              #0B2A4A,
              #D96B27
            );

          color: #ffffff;
          padding: 70px 0;
          position: relative;
          overflow: hidden;
        }

        .cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 35px;
        }

        .cta-inner > div:first-child {
          text-align: left;
        }

        .cta h2 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: clamp(33px, 4vw, 54px);
          line-height: 1.1;
          text-align: left;
        }

        .cta p {
          max-width: 650px;
          color: #e7f1ff;
          line-height: 1.7;
          margin: 14px 0 0;
          text-align: left;
        }

        .cta-actions {
          display: flex;
          justify-content: flex-start;
          gap: 10px;
          flex-wrap: wrap;
        }

        /* =========================
           FAQ
        ========================= */

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          align-items: stretch;
        }

        .faq-item {
          background: #ffffff;
          border: 1px solid #d7e4f0;
          border-radius: 13px;
          padding: 21px;
          text-align: left;
          transition: 0.3s;
        }

        .faq-item:hover {
          border-color: #D96B27;
          box-shadow:
            0 12px 25px rgba(11, 42, 74, 0.08);
        }

        .faq-item h3 {
          margin: 0 0 9px;
          color: #0B2A4A;
          font-family: Georgia, serif;
          font-size: 18px;
          line-height: 1.4;
          text-align: left;
        }

        .faq-item p {
          margin: 0;
          color: #66768b;
          line-height: 1.7;
          font-size: 13px;
          text-align: left;
        }

        /* =========================
           CONTACT
        ========================= */

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 28px;
          align-items: stretch;
        }

        .contact-card {
          background:
            linear-gradient(
              145deg,
              #0B2A4A,
              #174A73
            );
          border-radius: 18px;
          padding: 34px;
          color: #ffffff;
          text-align: left;
        }

        .contact-card h2 {
          font-family: Georgia, serif;
          font-size: 34px;
          line-height: 1.2;
          margin: 0 0 12px;
          text-align: left;
        }

        .contact-card > p {
          color: #d1dfed;
          line-height: 1.7;
          text-align: left;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 13px;
          margin-top: 20px;
          text-align: left;
        }

        .contact-item-icon {
          width: 39px;
          height: 39px;
          border-radius: 9px;
          display: grid;
          place-items: center;
          background: rgba(217, 107, 39, 0.18);
          color: #E18443;
          flex-shrink: 0;
        }

        .contact-item strong {
          display: block;
          color: #E18443;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }

        .contact-item span {
          display: block;
          color: #e0e9f2;
          line-height: 1.55;
          font-size: 13px;
        }

        .contact-actions {
          display: flex;
          justify-content: flex-start;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 27px;
        }

        /* =========================
           FULL GOOGLE MAP
        ========================= */

        .map-card {
          min-height: 430px;
          height: 100%;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          border: 1px solid #cbddec;
          background: #ffffff;
        }

        .map-card iframe {
          width: 100%;
          height: 100%;
          min-height: 430px;
          border: 0;
          display: block;
        }

        /* =========================
           FOOTER
        ========================= */

        .footer {
          background: #061A30;
          color: #c8d6e5;
          padding: 42px 0 25px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns:
            1.4fr 1fr 1fr;
          gap: 45px;
          padding-bottom: 30px;
          border-bottom: 1px solid
            rgba(255,255,255,0.1);
          text-align: left;
        }

        .footer h3 {
          color: #E18443;
          font-family: Georgia, serif;
          margin: 0 0 13px;
          font-size: 21px;
          text-align: left;
        }

        .footer p {
          line-height: 1.7;
          font-size: 13px;
          margin: 0;
          text-align: left;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 9px;
          text-align: left;
        }

        .footer-links button {
          border: 0;
          background: transparent;
          text-align: left;
          color: #c9d8e8;
          padding: 0;
          cursor: pointer;
          font-size: 13px;
        }

        .footer-links button:hover {
          color: #E18443;
        }

        .astroidea {
          color: #E18443;
          font-weight: 800;
        }

        .footer-bottom {
          padding-top: 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          font-size: 12px;
          text-align: left;
        }

        /* =========================
           FLOATING BUTTONS
        ========================= */

        .floating-buttons {
          position: fixed;
          right: 18px;
          bottom: 18px;
          z-index: 1200;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .floating-button {
          width: 51px;
          height: 51px;
          border: 0;
          border-radius: 50%;
          cursor: pointer;
          display: grid;
          place-items: center;
          font-size: 22px;
          box-shadow:
            0 10px 25px rgba(0,0,0,0.18);
          transition: 0.3s;
        }

        .floating-button:hover {
          transform: translateY(-4px);
        }

        .float-call {
          background: #0B2A4A;
          color: #ffffff;
        }

        .float-whatsapp {
          background: #D96B27;
          color: #ffffff;
        }

        /* =========================
           MODAL
        ========================= */

        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(3, 20, 43, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          backdrop-filter: blur(7px);
        }

        .modal {
          width: min(650px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          background: #ffffff;
          border-radius: 18px;
          border: 2px solid #D96B27;
          padding: 30px;
          text-align: left;
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 23px;
        }

        .modal-header h2 {
          margin: 0;
          color: #0B2A4A;
          font-family: Georgia, serif;
          font-size: 32px;
          line-height: 1.2;
          text-align: left;
        }

        .modal-header p {
          margin: 7px 0 0;
          color: #697486;
          font-size: 13px;
          text-align: left;
        }

        .close-button {
          width: 37px;
          height: 37px;
          border-radius: 50%;
          border: 1px solid #cbddec;
          background: #edf5fd;
          color: #0B2A4A;
          cursor: pointer;
          font-size: 18px;
          flex-shrink: 0;
        }

        .close-button:hover {
          background: #fff0e5;
          color: #D96B27;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 7px;
          text-align: left;
        }

        .form-group.full {
          grid-column: 1 / -1;
        }

        .form-group label {
          color: #34445a;
          font-size: 12px;
          font-weight: 800;
          text-align: left;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          border: 1px solid #cbddec;
          background: #ffffff;
          color: #25354c;
          border-radius: 8px;
          padding: 12px 13px;
          outline: none;
          text-align: left;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #D96B27;
          box-shadow:
            0 0 0 3px rgba(217, 107, 39, 0.1);
        }

        .form-group textarea {
          min-height: 105px;
          resize: vertical;
        }

        .form-submit {
          width: 100%;
          margin-top: 17px;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 1050px) {

          .nav-links {
            gap: 16px;
          }

          .nav-links button {
            font-size: 13px;
          }

          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .advantage-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .process-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .journal-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        @media (max-width: 850px) {

          .topbar {
            display: none;
          }

          .nav {
            min-height: 72px;
          }

          .nav-links {
            display: none;
            position: absolute;
            top: 72px;
            left: 0;
            width: 100%;
            background: #061A30;
            padding: 18px 20px 25px;
            border-bottom: 1px solid
              rgba(217, 107, 39, 0.45);
            box-shadow:
              0 18px 30px rgba(0, 0, 0, 0.2);
            flex-direction: column;
            align-items: stretch;
          }

          .nav-links.mobile-open {
            display: flex;
          }

          .nav-links button {
            color: #ffffff;
            text-align: left;
            padding: 12px 0;
          }

          .nav-links button:hover {
            color: #E18443;
          }

          .nav-quote {
            text-align: center !important;
          }

          .menu-button {
            display: block;
          }

          .hero {
            min-height: auto;
          }

          .hero-content {
            padding: 65px 0;
          }

          .about-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .about-image {
            min-height: 350px;
          }

          .trust-grid {
            grid-template-columns: 1fr 1fr;
          }

          .trust-item {
            border-right: 0;
          }

          .cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }

          .map-card {
            min-height: 430px;
          }

          .map-card iframe {
            min-height: 430px;
          }

        }

        @media (max-width: 600px) {

          .container,
          .nav,
          .hero-content {
            width: min(100% - 28px, 1240px);
          }

          .hero h1 {
            font-size: 46px;
            letter-spacing: -1px;
          }

          .hero p {
            font-size: 15px;
          }

          .section {
            padding: 52px 0;
          }

          .service-grid,
          .advantage-grid,
          .process-grid,
          .trust-grid,
          .journal-grid {
            grid-template-columns: 1fr;
          }

          .about-points {
            grid-template-columns: 1fr;
          }

          .footer-grid {
            grid-template-columns: 1fr;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-group.full {
            grid-column: auto;
          }

          .footer-bottom {
            align-items: flex-start;
            flex-direction: column;
          }

          .floating-buttons {
            right: 12px;
            bottom: 12px;
          }

          .floating-button {
            width: 47px;
            height: 47px;
          }

          .modal {
            padding: 22px;
          }

          .hero-actions {
            align-items: stretch;
          }

          .hero-actions .btn {
            width: 100%;
          }

          .hero-contact {
            gap: 18px;
          }

        }

        @media (prefers-reduced-motion: reduce) {

          html {
            scroll-behavior: auto;
          }

          .reveal {
            opacity: 1;
            transform: none;
          }

          .blink-text {
            animation: none;
          }

          .journal-icon {
            animation: none;
          }

        }
      `}</style>

      <div className="app">

        {/* TOP BAR */}

        <div className="topbar">

          <div className="topbar-inner">

            <span>

              <strong>
                Kiran Packers And Movers
              </strong>{" "}

              — Moving made organised and simple.

            </span>

            <span>

              📍 Mukarampura, Karimnagar
              &nbsp; | &nbsp;
              📞 {company.phone}

            </span>

          </div>

        </div>

        {/* HEADER */}

        <header className="header">

          <nav className="nav">

            <div
              className="logo"
              onClick={() =>
                scrollToSection("home")
              }
            >

              <div className="logo-icon">
                📦
              </div>

              <div className="logo-text">

                <strong>
                  Kiran Packers
                </strong>

                <span>
                  Packers & Movers
                </span>

              </div>

            </div>

            <button
              className="menu-button"
              onClick={() =>
                setMobileMenu(!mobileMenu)
              }
            >
              {mobileMenu ? "✕" : "☰"}
            </button>

            <div
              className={`nav-links ${
                mobileMenu
                  ? "mobile-open"
                  : ""
              }`}
            >

              <button
                onClick={() =>
                  scrollToSection("home")
                }
              >
                Home
              </button>

              <button
                onClick={() =>
                  scrollToSection("about")
                }
              >
                About
              </button>

              <button
                onClick={() =>
                  scrollToSection("services")
                }
              >
                Services
              </button>

              <button
                onClick={() =>
                  scrollToSection("process")
                }
              >
                Process
              </button>

              <button
                onClick={() =>
                  scrollToSection("areas")
                }
              >
                Areas
              </button>

              <button
                onClick={() =>
                  scrollToSection("journal")
                }
              >
                Journal
              </button>

              <button
                onClick={() =>
                  scrollToSection("contact")
                }
              >
                Contact
              </button>

              <button
                className="nav-quote"
                onClick={() =>
                  setShowQuote(true)
                }
              >
                Get Free Quote
              </button>

            </div>

          </nav>

        </header>

        {/* HERO */}

        <section
          id="home"
          className="hero"
        >

          <div className="hero-content reveal show">

            <div className="hero-badge blink-text">
              🚚 PACKING • MOVING • RELOCATION
            </div>

            <h1 className="blink-text">

              Move with{" "}

              <span>
                confidence.
              </span>

              <br />

              Settle with ease.

            </h1>

            <p className="blink-text">

              Kiran Packers And Movers provides
              practical packing, shifting and
              relocation support for homes,
              offices and personal belongings
              in Karimnagar and beyond.

            </p>

            <div className="hero-actions">

              <button
                className="btn btn-primary"
                onClick={() =>
                  setShowQuote(true)
                }
              >
                📦 Get Free Quote
              </button>

              <button
                className="btn btn-light"
                onClick={openWhatsApp}
              >
                💬 WhatsApp Us
              </button>

              <button
                className="btn btn-light"
                onClick={openMaps}
              >
                📍 Get Directions
              </button>

            </div>

            <div className="hero-contact">

              <div className="hero-contact-item">

                <strong>
                  Location
                </strong>

                Mukarampura,
                Karimnagar

              </div>

              <div className="hero-contact-item">

                <strong>
                  Call
                </strong>

                {company.phone}

              </div>

              <div className="hero-contact-item">

                <strong>
                  Support
                </strong>

                Local & Intercity
                Moves

              </div>

            </div>

          </div>

        </section>

        {/* TRUST */}

        <section className="trust-strip">

          <div className="container trust-grid">

            <div className="trust-item">

              <div className="trust-icon">
                📦
              </div>

              <div>

                <strong>
                  Safe Packing
                </strong>

                <span>
                  Organised handling
                </span>

              </div>

            </div>

            <div className="trust-item">

              <div className="trust-icon">
                🚚
              </div>

              <div>

                <strong>
                  Moving Support
                </strong>

                <span>
                  Planned transportation
                </span>

              </div>

            </div>

            <div className="trust-item">

              <div className="trust-icon">
                📍
              </div>

              <div>

                <strong>
                  Door-to-Door
                </strong>

                <span>
                  Pickup to delivery
                </span>

              </div>

            </div>

            <div className="trust-item">

              <div className="trust-icon">
                📞
              </div>

              <div>

                <strong>
                  Easy Contact
                </strong>

                <span>
                  Call or WhatsApp
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* ABOUT */}

        <section
          id="about"
          className="section"
        >

          <div className="container">

            <div className="about-grid">

              <div className="about-image reveal" />

              <div className="about-content reveal">

                <div className="eyebrow">
                  ABOUT US
                </div>

                <h3 className="blink-text">
                  A smoother way to
                  handle your move.
                </h3>

                <p>
                  Moving home or shifting
                  a workplace involves many
                  small details. Kiran Packers
                  And Movers is focused on
                  making those steps easier
                  through organised packing,
                  loading, transportation and
                  unloading support.
                </p>

                <p>
                  Based in Mukarampura,
                  Karimnagar, we provide
                  moving assistance for local
                  requirements as well as
                  relocation needs beyond
                  the city.
                </p>

                <div className="about-points">

                  <div className="point">
                    ✓ Household Relocation
                  </div>

                  <div className="point">
                    ✓ Office Shifting
                  </div>

                  <div className="point">
                    ✓ Packing Assistance
                  </div>

                  <div className="point">
                    ✓ Loading & Unloading
                  </div>

                  <div className="point">
                    ✓ Local Moving
                  </div>

                  <div className="point">
                    ✓ Intercity Moving
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* SERVICES */}

        <section
          id="services"
          className="section alt"
        >

          <div className="container">

            <div className="section-heading reveal">

              <div className="eyebrow">
                OUR SERVICES
              </div>

              <h2 className="blink-text">
                Moving solutions for
                different requirements.
              </h2>

              <p>
                From household belongings
                to office equipment, our
                services are designed around
                the practical stages of
                relocation.
              </p>

            </div>

            <div className="service-grid">

              {services.map(
                (service, index) => (

                  <div
                    className="service-card reveal"
                    key={service.title}
                    style={{
                      transitionDelay:
                        `${index * 70}ms`,
                    }}
                  >

                    <div className="service-icon">
                      {service.icon}
                    </div>

                    <h3 className="blink-text">
                      {service.title}
                    </h3>

                    <p>
                      {service.text}
                    </p>

                    <span
                      className="service-link"
                      onClick={() =>
                        setSelectedService(
                          service
                        )
                      }
                    >
                      Learn More →
                    </span>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

        {/* ADVANTAGES */}

        <section className="section dark">

          <div className="container">

            <div className="section-heading reveal">

              <div className="eyebrow">
                WHY CHOOSE US
              </div>

              <h2 className="blink-text">
                Practical support at
                every stage.
              </h2>

              <p>
                A relocation becomes easier
                when packing, loading,
                transportation and delivery
                are planned properly.
              </p>

            </div>

            <div className="advantage-grid">

              {advantages.map(
                (item, index) => (

                  <div
                    className="advantage-card reveal"
                    key={item.title}
                    style={{
                      transitionDelay:
                        `${index * 80}ms`,
                    }}
                  >

                    <div className="advantage-icon">
                      {item.icon}
                    </div>

                    <h3 className="blink-text">
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

        {/* PROCESS */}

        <section
          id="process"
          className="section"
        >

          <div className="container">

            <div className="section-heading reveal">

              <div className="eyebrow">
                OUR PROCESS
              </div>

              <h2 className="blink-text">
                Simple steps from pickup
                to delivery.
              </h2>

              <p>
                We keep the moving process
                easy to understand so you know
                what happens at each stage.
              </p>

            </div>

            <div className="process-grid">

              {process.map(
                (item, index) => (

                  <div
                    className="process-card reveal"
                    key={item.number}
                    style={{
                      transitionDelay:
                        `${index * 70}ms`,
                    }}
                  >

                    <div className="process-number blink-text">
                      {item.number}
                    </div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

        {/* AREAS */}

        <section
          id="areas"
          className="section alt"
        >

          <div className="container">

            <div className="section-heading reveal">

              <div className="eyebrow">
                SERVICE AREAS
              </div>

              <h2 className="blink-text">
                Moving support around
                Karimnagar.
              </h2>

              <p>
                We can discuss your pickup
                and destination requirements
                for Karimnagar and surrounding
                areas.
              </p>

            </div>

            <div className="areas-grid reveal">

              {areas.map((area) => (

                <div
                  className="area-pill"
                  key={area}
                >
                  📍 {area}
                </div>

              ))}

            </div>

          </div>

        </section>

        {/* MOVING JOURNAL */}

        <section
          id="journal"
          className="section journal-section"
        >

          <div className="container">

            <div className="section-heading reveal">

              <div className="eyebrow">
                THE MOVING JOURNAL
              </div>

              <h2 className="blink-text">
                Guides worth packing.
              </h2>

              <p>
                Helpful moving guides,
                checklists and packing tips
                to make your next relocation
                more organised.
              </p>

            </div>

            <div className="journal-grid">

              {guides.map(
                (guide, index) => (

                  <article
                    className="journal-card reveal"
                    key={guide.title}
                    style={{
                      transitionDelay:
                        `${index * 100}ms`,
                    }}
                  >

                    <div className="journal-icon">
                      {guide.icon}
                    </div>

                    <div className="journal-meta">
                      {guide.category}
                      {" "}•{" "}
                      {guide.time}
                    </div>

                    <h3 className="blink-text">
                      {guide.title}
                    </h3>

                    <p>
                      {guide.text}
                    </p>

                    <button
                      className="journal-read"
                      onClick={() =>
                        setSelectedGuide(
                          guide
                        )
                      }
                    >
                      Read Guide →
                    </button>

                  </article>

                )
              )}

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="cta">

          <div className="container cta-inner">

            <div className="reveal">

              <h2 className="blink-text">
                Planning your next move?
              </h2>

              <p>
                Share your shifting
                requirement with Kiran
                Packers And Movers and
                let us discuss the right
                moving support for you.
              </p>

            </div>

            <div className="cta-actions reveal">

              <button
                className="btn btn-primary"
                onClick={() =>
                  setShowQuote(true)
                }
              >
                Get Free Quote
              </button>

              <button
                className="btn btn-light"
                onClick={openWhatsApp}
              >
                WhatsApp
              </button>

            </div>

          </div>

        </section>

        {/* FAQ */}

        <section className="section">

          <div className="container">

            <div className="section-heading reveal">

              <div className="eyebrow">
                FAQ
              </div>

              <h2 className="blink-text">
                Frequently asked
                questions.
              </h2>

              <p>
                A few common questions
                about packing and moving
                services.
              </p>

            </div>

            <div className="faq-grid">

              {faqs.map(
                (faq, index) => (

                  <div
                    className="faq-item reveal"
                    key={faq.q}
                    style={{
                      transitionDelay:
                        `${index * 60}ms`,
                    }}
                  >

                    <h3 className="blink-text">
                      {faq.q}
                    </h3>

                    <p>
                      {faq.a}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="section alt"
        >

          <div className="container">

            <div className="contact-grid">

              <div className="contact-card reveal">

                <div className="eyebrow">
                  CONTACT US
                </div>

                <h2 className="blink-text">
                  Let's plan your move.
                </h2>

                <p>
                  Contact Kiran Packers
                  And Movers for your
                  packing, moving and
                  relocation requirement.
                </p>

                <div className="contact-item">

                  <div className="contact-item-icon">
                    📍
                  </div>

                  <div>

                    <strong>
                      Address
                    </strong>

                    <span>
                      {company.address}
                    </span>

                  </div>

                </div>

                <div className="contact-item">

                  <div className="contact-item-icon">
                    📞
                  </div>

                  <div>

                    <strong>
                      Phone
                    </strong>

                    <span>
                      {company.phone}
                    </span>

                  </div>

                </div>

                <div className="contact-item">

                  <div className="contact-item-icon">
                    ✉️
                  </div>

                  <div>

                    <strong>
                      Email
                    </strong>

                    <span>
                      {company.email}
                    </span>

                  </div>

                </div>

                <div className="contact-actions">

                  <button
                    className="btn btn-primary"
                    onClick={callNow}
                  >
                    📞 Call Now
                  </button>

                  <button
                    className="btn btn-light"
                    onClick={openWhatsApp}
                  >
                    💬 WhatsApp
                  </button>

                </div>

              </div>

              <div className="map-card reveal">

                <iframe
                  title="Kiran Packers And Movers Location"
                  src="https://www.google.com/maps?q=Kiran+Packers+And+Movers,+9-1-218,+Street+No.+7,+Mukarampura,+Karimnagar,+Telangana&output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>

            </div>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="footer">

          <div className="container">

            <div className="footer-grid">

              <div>

                <h3>
                  Kiran Packers And Movers
                </h3>

                <p>
                  Packing, moving and
                  relocation support for
                  households, offices and
                  personal belongings.
                  Based in Mukarampura,
                  Karimnagar.
                </p>

              </div>

              <div>

                <h3>
                  Quick Links
                </h3>

                <div className="footer-links">

                  <button
                    onClick={() =>
                      scrollToSection("home")
                    }
                  >
                    Home
                  </button>

                  <button
                    onClick={() =>
                      scrollToSection("about")
                    }
                  >
                    About
                  </button>

                  <button
                    onClick={() =>
                      scrollToSection("services")
                    }
                  >
                    Services
                  </button>

                  <button
                    onClick={() =>
                      scrollToSection("process")
                    }
                  >
                    Process
                  </button>

                  <button
                    onClick={() =>
                      scrollToSection("areas")
                    }
                  >
                    Areas
                  </button>

                  <button
                    onClick={() =>
                      scrollToSection("journal")
                    }
                  >
                    Journal
                  </button>

                  <button
                    onClick={() =>
                      scrollToSection("contact")
                    }
                  >
                    Contact
                  </button>

                </div>

              </div>

              <div>

                <h3>
                  Contact
                </h3>

                <div className="footer-links">

                  <button onClick={callNow}>
                    📞 {company.phone}
                  </button>

                  <button
                    onClick={openWhatsApp}
                  >
                    💬 WhatsApp
                  </button>

                  <button
                    onClick={openMaps}
                  >
                    📍 Google Maps
                  </button>

                  <span>
                    {company.address}
                  </span>

                </div>

              </div>

            </div>

            <div className="footer-bottom">

              <span>

                © {new Date().getFullYear()}
                {" "}
                Kiran Packers And Movers.
                All Rights Reserved.

              </span>

              <span>

                Designed & Developed by{" "}

                <a
                  className="astroidea"
                  href="https://www.astroideasoftway.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  AstroIdea Softway LLP
                </a>

              </span>

            </div>

          </div>

        </footer>

        {/* FLOATING BUTTONS */}

        <div className="floating-buttons">

          <button
            className="floating-button float-call"
            onClick={callNow}
            title="Call Kiran Packers And Movers"
          >
            📞
          </button>

          <button
            className="floating-button float-whatsapp"
            onClick={openWhatsApp}
            title="WhatsApp Nain Packers And Movers"
          >
            💬
          </button>

        </div>

        {/* QUOTE MODAL */}

        {showQuote && (

          <div
            className="modal-backdrop"
            onClick={() =>
              setShowQuote(false)
            }
          >

            <div
              className="modal"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <div className="modal-header">

                <div>

                  <h2 className="blink-text">
                    Get Your Free Quote
                  </h2>

                  <p>
                    Tell us a few details
                    about your moving
                    requirement.
                  </p>

                </div>

                <button
                  className="close-button"
                  onClick={() =>
                    setShowQuote(false)
                  }
                >
                  ✕
                </button>

              </div>

              <form
                onSubmit={submitQuote}
              >

                <div className="form-grid">

                  <div className="form-group">

                    <label>
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                    />

                  </div>

                  <div className="form-group">

                    <label>
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      required
                    />

                  </div>

                  <div className="form-group">

                    <label>
                      From Location
                    </label>

                    <input
                      type="text"
                      placeholder="Pickup location"
                      required
                    />

                  </div>

                  <div className="form-group">

                    <label>
                      To Location
                    </label>

                    <input
                      type="text"
                      placeholder="Destination"
                      required
                    />

                  </div>

                  <div className="form-group">

                    <label>
                      Moving Type
                    </label>

                    <select
                      required
                      defaultValue=""
                    >

                      <option
                        value=""
                        disabled
                      >
                        Select service
                      </option>

                      <option>
                        House Shifting
                      </option>

                      <option>
                        Office Relocation
                      </option>

                      <option>
                        Local Shifting
                      </option>

                      <option>
                        Intercity Relocation
                      </option>

                      <option>
                        Vehicle Transportation
                      </option>

                      <option>
                        Packing & Unpacking
                      </option>

                    </select>

                  </div>

                  <div className="form-group">

                    <label>
                      Preferred Date
                    </label>

                    <input
                      type="date"
                    />

                  </div>

                  <div className="form-group full">

                    <label>
                      Additional Details
                    </label>

                    <textarea
                      placeholder="Tell us about your items or moving requirement..."
                    />

                  </div>

                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                >
                  Submit Enquiry
                </button>

              </form>

            </div>

          </div>

        )}

        {/* SERVICE MODAL */}

        {selectedService && (

          <div
            className="modal-backdrop"
            onClick={() =>
              setSelectedService(null)
            }
          >

            <div
              className="modal"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <div className="modal-header">

                <div>

                  <h2>
                    {selectedService.icon}{" "}
                    {selectedService.title}
                  </h2>

                  <p>
                    Kiran Packers And Movers
                  </p>

                </div>

                <button
                  className="close-button"
                  onClick={() =>
                    setSelectedService(null)
                  }
                >
                  ✕
                </button>

              </div>

              <p>
                {selectedService.text}
              </p>

              <button
                className="btn btn-primary"
                onClick={() => {
                  setSelectedService(null);
                  setShowQuote(true);
                }}
              >
                Request A Quote
              </button>

            </div>

          </div>

        )}

        {/* JOURNAL MODAL */}

        {selectedGuide && (

          <div
            className="modal-backdrop"
            onClick={() =>
              setSelectedGuide(null)
            }
          >

            <div
              className="modal"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <div className="modal-header">

                <div>

                  <div className="journal-modal-meta">

                    {selectedGuide.icon}{" "}

                    {selectedGuide.category}

                    {" "}•{" "}

                    {selectedGuide.time}

                  </div>

                  <h2>
                    {selectedGuide.title}
                  </h2>

                </div>

                <button
                  className="close-button"
                  onClick={() =>
                    setSelectedGuide(null)
                  }
                >
                  ✕
                </button>

              </div>

              <p className="journal-modal-text">
                {selectedGuide.text}
              </p>

              <div className="journal-modal-note">

                📦 Helpful moving information
                from Kiran Packers And Movers.
                Plan your packing, pickup,
                transportation and delivery
                carefully for a smoother move.

              </div>

              <button
                className="btn btn-primary"
                onClick={() => {
                  setSelectedGuide(null);
                  setShowQuote(true);
                }}
              >
                Get Free Quote
              </button>

            </div>

          </div>

        )}

      </div>
    </>
  );
}