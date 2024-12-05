import "./timeline.css";

const Timeline = ({ activeSection }) => {
  return (
    <div className="timeline">
      {[1, 2, 3].map((section) => (
        <div
          key={section}
          className={`timeline-marker ${
            activeSection === section ? "active" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default Timeline;
