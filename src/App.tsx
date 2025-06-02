import {useState} from 'react'
import './App.css'
import WhatsAppButton from './components/WhatsAppButton'
import ServiceCard from './components/ServiceCard'
import Testimonial from './components/Testimonial'
import ContactForm from './components/ContactForm'

function App() {
    const [formSubmitted, setFormSubmitted] = useState(false)

    const services = [
        {
            title: "Creación de Páginas Web",
            description: "Diseño y desarrollo de sitios web profesionales, responsivos y optimizados para SEO.",
            icon: "💻"
        },
        {
            title: "Instalación de Cámaras de Seguridad",
            description: "Sistemas de videovigilancia con monitoreo local y remoto para tu seguridad.",
            icon: "📹"
        },
        {
            title: "Reparación de Equipos de Informática",
            description: "Diagnóstico y solución de problemas en hardware y software para PCs y laptops.",
            icon: "🔧"
        },
        {
            title: "Domótica a la Medida",
            description: "Automatización de viviendas con sistemas inteligentes de iluminación, climatización y seguridad integrados.",
            icon: "🏠"
        }
    ]

    const testimonials = [
        {
            name: "María González",
            comment: "Excelente servicio de instalación de cámaras, muy profesional y puntual.",
            rating: 5
        },
        {
            name: "Juan Pérez",
            comment: "Me resolvió problemas de red que otros no pudieron, altamente recomendado.",
            rating: 5
        },
        {
            name: "Laura Martínez",
            comment: "Mi página web quedó exactamente como la quería, muy satisfecha con el trabajo.",
            rating: 4
        }
    ]

    const handleFormSubmit = () => {
        setFormSubmitted(true)
    }

    return (
        <div className="app">
            <WhatsAppButton phoneNumber="524422660863"
                            message="Hola, estoy interesado en sus servicios de consultoría informática."/>

            {/* Hero Section */}
            <header className="hero">
                <div className="hero-content">
                    <h1>AlainWare</h1>
                    <h2>Consultoría en Informática Profesional</h2>
                    <p>Soluciones tecnológicas a medida para hogares y negocios en Querétaro</p>
                    <a href="#contacto" className="cta-button">Contáctame</a>
                </div>
            </header>

            {/* About Section */}
            <section className="about-section">
                <div className="about-content">
                    <h2>Ing. Irving Alain Aguilar Pérez</h2>
                    <p>Ingeniero en Sistemas Computacionales y Maestro en Ingeniería de Software con más de 5 años de
                        experiencia en soluciones informáticas.</p>
                    <p>Mi misión es brindar soluciones tecnológicas accesibles y de calidad para particulares y
                        empresas en Querétaro.</p>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section" id="servicios">
                <h2>Nuestros Servicios</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <h2>Lo que dicen nuestros clientes</h2>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial
                            key={index}
                            name={testimonial.name}
                            comment={testimonial.comment}
                            rating={testimonial.rating}
                        />
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section" id="contacto">
                <h2>Contáctame</h2>
                {formSubmitted ? (
                    <div className="success-message">
                        <h3>¡Gracias por tu mensaje!</h3>
                        <p>Me pondré en contacto contigo a la brevedad.</p>
                    </div>
                ) : (
                    <ContactForm onSubmit={handleFormSubmit}/>
                )}
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© {new Date().getFullYear()} AlainWare - Consultoría en Informática</p>
                <p>Querétaro, México</p>
                <p>Ing. Irving Alain Aguilar Pérez</p>
            </footer>
        </div>
    )
}

export default App