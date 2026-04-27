function SiteCard({ title, description, image, testimonial, featured }) {
  const hasTestimonial = testimonial && testimonial.text;

  return (
    <div className={`site-card ${featured ? 'featured' : ''}`}>
      <img src={image} alt={title} />
      <div className="Portfolio-desc">
        <h4>{title}</h4>
        <p>{description}</p>

        {hasTestimonial && (
          <div className="testimonial-mini">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <span className="author-name">{testimonial.author}</span>
              <span className="author-role">{testimonial.role}</span>
            </div>
          </div>
        )}

        <span className="view-link">Voir le projet <i className="fa-solid fa-arrow-right"></i></span>
      </div>
    </div>
  );
}

export default SiteCard;