export function Button({ children, onClick, className, type = "button" }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition ${className}`}
      >
        {children}
      </button>
    );
  }
  