// GradientText.jsx
import "./GradientText.css";

export default function GradientText({
  children,
  className = "",
  colors = ["#6a6dff", "#c084fc", "#f472b6", "#6a6dff", "#c084fc"],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <span className={`animated-gradient-text ${className}`}>
      {showBorder && (
        <span className="gradient-overlay" style={gradientStyle}></span>
      )}
      <span className="text-content" style={gradientStyle}>
        {children}
      </span>
    </span>
  );
}
