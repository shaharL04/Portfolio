

const Section = ({ id, children }) => {
  return (
    <section id={`section-${id}`} className="section">
      {children}
    </section>
  );
};

export default Section;
