import './ServiceCard.css'

interface ServiceCardProps {
    title: string
    description: string
    icon: string
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
    return (
        <div className="service-card">
            <div className="service-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard