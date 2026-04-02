const Button = ({ children, variant = "", onClick, className = "" }) => {
  const styles = {
    primary: "bg-[#2D5A27] text-white hover:bg-green-900",
    secondary:
      "border border-[#2D5A27] text-[#2D5A27] hover:bg-[#2D5A27] hover:text-white",
    outline:
      "border border-gray-200 text-gray-500 hover:border-[#2D5A27] hover:text-[#2D5A27]",
  };

  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-full font-bold transition-all duration-300 text-sm md:text-base ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
