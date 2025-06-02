import * as React from "react";
import { useState } from 'react'
import './ContactForm.css'


interface ContactFormProps {
    onSubmit: () => void
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Formulario enviado:', formData)
        onSubmit()
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Correo electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Teléfono:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="service">Servicio de interés:</label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecciona un servicio</option>
                    <option value="web">Creación de Páginas Web</option>
                    <option value="redes">Instalación de Redes Domésticas</option>
                    <option value="camaras">Instalación de Cámaras</option>
                    <option value="reparacion">Reparación de Equipos</option>
                    <option value="domotica">Domótica a la Medida</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message">Mensaje:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit" className="submit-button">Enviar Mensaje</button>
        </form>
    )
}

export default ContactForm