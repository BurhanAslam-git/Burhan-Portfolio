import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className = '',
      icon: Icon,
      iconPosition = 'left',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'gradient-primary text-white shadow-lg hover:shadow-glow active:scale-95',
      neutral:
        'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border-2 border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-lg active:scale-95',
      ghost:
        'bg-transparent text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-95',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-lg',
      md: 'px-6 py-3 text-base rounded-xl',
      lg: 'px-8 py-4 text-lg rounded-xl',
    };

    const iconSizes = {
      sm: 16,
      md: 20,
      lg: 24,
    };

    const iconSpacing = {
      sm: 'gap-2',
      md: 'gap-2.5',
      lg: 'gap-3',
    };

    return (
      <motion.button
        ref={ref}
        data-magnetic
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${iconSpacing[size]} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {Icon && iconPosition === 'left' && (
          <Icon size={iconSizes[size]} className="flex-shrink-0" />
        )}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && (
          <Icon size={iconSizes[size]} className="flex-shrink-0" />
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

