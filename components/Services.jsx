import { 
  PenTool, 
  Code, 
  Video, 
  TrendingUp, 
  Lightbulb, 
  Search,
  Box,
  ShoppingCart,
  DollarSign,
  Zap,
  Monitor,
  Globe,
  Network,
  ShoppingBag,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Graphic Design",
      description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
      link: "Read More",
      featured: false
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web & Software Development",
      description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
      link: "Read More",
      featured: true
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Multimedia & Video Editing",
      description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
      link: "Read More",
      featured: false
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
      link: "Read More",
      featured: false
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Writing Solution",
      description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
      link: "Read More",
      featured: false
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO",
      description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
      link: "Read More",
      featured: false
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "3D Animation & Visualization",
      description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
      link: "Read More",
      featured: false
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Solution",
      description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
      link: "Read More",
      featured: false
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Accounting",
      description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
      link: "Read More",
      featured: false
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Special Combo",
      description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
      link: "Read More",
      featured: false
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Premium Website",
      description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
      link: "Read More",
      featured: false
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Premium Domains",
      description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
      link: "Read More",
      featured: false
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Proxy",
      description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
      link: "Read More",
      featured: false
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Merchandise",
      description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
      link: "Read More",
      featured: false
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Academy",
      description: "We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is",
      link: "Read More",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable within click assistance
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                service.featured
                  ? 'bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-2 border-purple-500/50'
                  : 'bg-gray-900/50 border border-gray-800 hover:border-purple-500/50'
              } backdrop-blur-sm`}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl mb-4 ${
                service.featured 
                  ? 'bg-purple-600/30' 
                  : 'bg-purple-600/20'
              }`}>
                <div className="text-purple-400">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Read More Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors group"
              >
                {service.link}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50">
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
}