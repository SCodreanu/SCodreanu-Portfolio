import './HoverLink.css';

const HoverLink = ({ href, children }) => (
  <a href={href} className="hover-link" data-cursor="hover">
    <span className="hover-link-track">
      <span className="hover-link-line">{children}</span>
      <span className="hover-link-line hover-link-line--accent" aria-hidden="true">
        {children}
      </span>
    </span>
  </a>
);

export default HoverLink;
