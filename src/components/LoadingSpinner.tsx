interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'white' | 'gray';
    text?: string;
  }
  
  export function LoadingSpinner({ size = 'md', color = 'primary', text }: LoadingSpinnerProps) {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12'
    };
  
    const colorClasses = {
      primary: 'border-pink-500',
      white: 'border-white',
      gray: 'border-gray-400'
    };
  
    return (
      <div className="flex flex-col items-center justify-center gap-3">
        <div 
          className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-t-transparent rounded-full animate-spin`}
        />
        {text && (
          <p className="text-sm text-gray-600 font-medium">{text}</p>
        )}
      </div>
    );
  }