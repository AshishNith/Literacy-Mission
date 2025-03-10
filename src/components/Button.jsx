import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  fullWidth = false,
  className = '',
  onClick,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300"
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/30",
    secondary: "bg-gray-800 hover:bg-gray-900 text-white shadow-lg hover:shadow-gray-800/30",
    outline: "border-2 border-white/20 hover:bg-white/5 text-white",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
    gradient: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-blue-500/30",
    minimal: "hover:bg-gray-100 text-gray-800"
  }

  const sizes = {
    sm: "text-sm px-4 py-2 rounded-lg",
    md: "text-base px-6 py-3 rounded-lg",
    lg: "text-lg px-8 py-4 rounded-xl",
    pill: "text-base px-6 py-3 rounded-full"
  }

  const iconStyles = {
    left: "flex-row-reverse space-x-reverse",
    right: "flex-row"
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${iconStyles[iconPosition]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:transform hover:scale-[1.02]'}
        ${className}
      `}
      {...props}
    >
      {/* Loading Spinner */}
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
        </svg>
      )}
      
      {/* Icon + Content */}
      <span className="flex items-center gap-2">
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
      </span>

      {/* Hover Effect (for gradient variant) */}
      {variant === 'gradient' && (
        <span className="absolute inset-0 rounded-lg bg-white/30 opacity-0 hover:opacity-20 transition-opacity" />
      )}
    </button>
  )
}

export default Button
