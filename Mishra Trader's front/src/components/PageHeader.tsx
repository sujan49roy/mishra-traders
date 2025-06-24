import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  className?: string;
}

const PageHeader = ({ 
  title, 
  description, 
  backgroundImage = "https://images.unsplash.com/photo-1581093458791-9d42cc030834?w=1920&h=500&fit=crop",
  className
}: PageHeaderProps) => {
  return (
    <div 
      className={cn(
        "relative py-24 lg:py-32 flex items-center",
        className
      )}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;