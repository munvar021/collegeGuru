// theme.js
export const theme = {
  colors: {
    primary: "#3b82f6",
    secondary: "#1a1a1a",
    text: {
      primary: "#1a1a1a",
      secondary: "#4a4a4a",
      light: "#666666",
    },
    background: {
      primary: "#ffffff",
      secondary: "#f7f7f7",
      hover: "rgba(255, 255, 255, 0.95)",
    },
    border: "rgba(209, 213, 219, 0.3)",
  },
  shadows: {
    small: "0 2px 4px rgba(0, 0, 0, 0.1)",
    medium:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    large:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
  transitions: {
    default: "0.3s ease",
    slow: "0.5s ease",
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
  },
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1200px",
  },
  typography: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.6,
    },
  },
};
