import './Testimonial.css'

interface TestimonialProps {
    name: string
    comment: string
    rating: number
}

const Testimonial = ({ name, comment, rating }: TestimonialProps) => {
    const renderStars = () => {
        return Array(5).fill(0).map((_, i) => (
            <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
        ))
    }

    return (
        <div className="testimonial-card">
            <div className="stars">{renderStars()}</div>
            <p className="comment">"{comment}"</p>
            <p className="name">- {name}</p>
        </div>
    )
}

export default Testimonial