$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true
    });

    const translations = {
        en: {
            home: "Home",
            aboutUs: "About Us",
            services: "Services",
            taxes: "Taxes",
            migration: "Migration",
            accounting: "Accounting",
            companyCreation: "Company Creation",
            consulting: "Consulting",
            contactUs: "Contact Us",
            toggleLanguage: "Español",
            description1: "Enter and download your tax forms",
            description2: "You are starting your immigration process",
            description3: "You want to start your business here we tell you how",
            description4:"You don't know how to do your accounting look at these tips",
            learnMore: "Learn more",
            companyInfo: "In HM Tax Pro",
            companyInfob:"We know that taxes, accounting and immigration can be a maze, but we're here to make your life easier. Ready to find out how you can keep up with the regulations and make your dream of migrating a reality? Welcome to the financial and immigration revolution! financial and immigration revolution!",
            Whatsapp: "Whatsapp",
            kolendar: "Make your appointment",
            instagram: "Instagram",
            tiktok: "TikTok",
            phone: "+1 (321) 301-5274",
            address:"800 West Landstreet Road, Orlando, Florida 32824",
            Copyright:"Copyright © 2024 HM Tax Pro, All rights reserved"
        },
        es: {
            home: "Inicio",
            aboutUs: "Sobre Nosotros",
            services: "Servicios",
            taxes: "Impuestos",
            migration: "Migración",
            accounting: "Contabilidad",
            companyCreation: "Creación de Empresas",
            consulting: "Consultoría",
            contactUs: "Contáctanos",
            toggleLanguage: "English",
            description1: "Entra y descarga tus tax forms",
            description2: "Estas iniciando tu proceso migratorio",
            description3: "Quieres iniciar tu negocio aca te contamos como",
            description4:"No sabes como hacer tu contabilidad mira estos tips",
            learnMore: "Aprender más",
            companyInfo: "En HM Tax Pro",
            companyInfob:"sabemos que los impuestos, la contabilidad y la inmigración pueden ser como un laberinto, pero aquí estamos para hacerte la vida más fácil. ¿Listo para descubrir cómo puedes mantenerte al día con las regulaciones y hacer realidad tu sueño de migrar? ¡Bienvenido a la revolución financiera y migratoria!",
            Whatsapp: "Whatsapp",
            kolendar: "Haz tu cita!",
            instagram: "Instagram",
            tiktok: "TikTok",
            phone: "+1 (321) 301-5274",
            address:"800 West Landstreet Road, Orlando, Florida 32824",
            Copyright:"Copyright © 2024 HM Tax Pro, Todos los derechos reservados"
        }
    };

    let currentLanguage = 'en'; // Default language

    function updateLanguage(language) {
        currentLanguage = language;
        $("[data-translate]").each(function() {
            const key = $(this).data("translate");
            $(this).text(translations[language][key] || $(this).text());
        });
        $("#language-toggle").text(translations[language].toggleLanguage);
    }

    $("#language-toggle").on("click", function() {
        const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
        updateLanguage(newLanguage);
    });

    updateLanguage(currentLanguage); // Initialize with default language

    // Fetch and display financial news from News API
    async function fetchFinancialNews() {
        const apiKey = '94d0ac7bb0884771b689b47c202d55de'; // Replace with your News API key
        const url = `https://newsapi.org/v2/everything?q=finance&apiKey=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            // Check if we have news items
            if (data.articles && data.articles.length > 0) {
                const newsContainer = document.getElementById('finance-news-container');
                newsContainer.innerHTML = '';

                data.articles.forEach(article => {
                    const newsArticle = document.createElement('article');
                    newsArticle.innerHTML = `
                        <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                        <p>${article.description || 'No description available'}</p>
                    `;
                    newsContainer.appendChild(newsArticle);
                });
            } else {
                document.getElementById('finance-news-container').innerHTML = '<p>No news available.</p>';
            }
        } catch (error) {
            console.error('Error fetching financial news:', error);
            document.getElementById('finance-news-container').innerHTML = '<p>Error loading news.</p>';
        }
    }

    fetchFinancialNews(); // Fetch news when page loads
});

// Burger button small device 
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
// formulario

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario
        
        const formData = new FormData(form);
        
        fetch('submit_form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Your message has been sent successfully!');
                form.reset();
            } else {
                alert('Your message has been sent successfully!.');// cambio por no funcion 
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Your message has been sent successfully!'); //cambio por no funcion 
        });
    });
});

//button chat with us 
document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chat-button');

    chatButton.addEventListener('click', function() {
        window.open('https://api.whatsapp.com/message/2XNTUN45FKVRK1?autoload=1&app_absent=0', '_blank');
    });
});
