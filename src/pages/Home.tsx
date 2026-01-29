import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Package,
  ArrowRight,
  Star,
  BarChart3,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Github,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";
import Scene3D from "@/components/Scene3D";
import ErrorBoundary from "@/components/ErrorBoundary";

const Home = () => {
  const { currentUser } = useAuth();

  const features = [
    {
      icon: Package,
      title: "Inventory Management",
      description: "Track stock levels and manage products efficiently"
    },
    {
      icon: BarChart3,
      title: "Sales Analytics",
      description: "Comprehensive sales reports and insights"
    },
    {
      icon: Users,
      title: "Multi-User Support",
      description: "Admin and employee roles with permissions"
    },
    {
      icon: TrendingUp,
      title: "Advanced Reports",
      description: "Detailed business insights and analytics"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and data protection"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Live synchronization across all devices"
    }
  ];

  const developers = [
    {
      name: "Megharaj Dandgavhal",
      role: "Full Stack Developer",
      image: "./src/components/images/Megh.jpg",
      social: {
        github: "https://github.com/meghraj2004",
        linkedin: "https://www.linkedin.com/in/megharaj-dandgavhal-832683259/",
        instagram: "https://instagram.com/megharaj_2004"
      }
    },
    {
      name: "Samruddhi Gore",
      role: "Frontend Developer",
      image: "./src/components/images/Sam.jpg",
      social: {
        github: "https://github.com/Samruddhi1008",
        linkedin: "https://www.linkedin.com/in/samruddhi-gore-b621242b0",
        instagram: "https://www.instagram.com/sam_jain0?igsh=MW1wYTVibnZpczRz"
      }
    },
    {
      name: "Samyak Hirap",
      role: "Backend Developer",
      image: "./src/components/images/Samyak.jpg",
      social: {
        github: "https://github.com/samyak",
        linkedin: "https://www.linkedin.com/in/samyak-hirap-16a8a0259 ",
        instagram: "https://www.instagram.com/samyak.hirap"
      }
    },
    {
      name: "Tanisha Godha",
      role: "UI/UX Designer",
      image: "./src/components/images/Tanisha.jpg",
      social: {
        github: "https://github.com/Tanishagodhaa",
        linkedin: "https://www.linkedin.com/in/tanishagodha ",
        instagram: "https://www.instagram.com/tanu_896"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/20 border-b border-white/30 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 p-2">
                <Package className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                StockEase
              </span>
            </div>

            <div className="flex items-center space-x-4">
              {currentUser ? (
                <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 backdrop-blur-sm">
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              ) : (
                <>
                  <Button variant="outline" asChild className="border-white/40 bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 backdrop-blur-sm">
                    <Link to="/register">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 3D Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* 3D Canvas Background */}
        <ErrorBoundary>
          <Scene3D />
        </ErrorBoundary>

        {/* Blurred Background Overlay */}
        <div className="absolute inset-0 z-5 bg-gradient-to-b from-transparent via-white/10 to-white/20 backdrop-blur-[2px]" />

        {/* Hero Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="backdrop-blur-2xl bg-white/10 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto border border-white/30 shadow-2xl">
            <div className="flex items-center justify-center mb-6">

            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-transparent">
                StockEase
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent text-5xl">
                Smart Inventory Management
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto backdrop-blur-sm bg-white/20 p-4 rounded-2xl border border-white/20">
              Transform your business with StockEase — a smart web-based Inventory and Sales Management System that streamlines operations, reduces errors, and empowers data-driven decisions. With real-time tracking, advanced analytics, and secure multi-user support, StockEase ensures efficiency, accuracy, and growth.            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {currentUser ? (
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-lg px-8 py-6 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300"
                  asChild
                >
                  <Link to="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              ) : (
                <>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-lg px-8 py-6 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300"
                    asChild
                  >
                    <Link to="/register">
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/40 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link to="/login">
                      Sign In
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Everything You Need in One Place
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              StockEase offers a smart and interactive platform that simplifies inventory management, reduces errors, and helps businesses operate more efficiently.            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 backdrop-blur-lg bg-white/60 rounded-2xl border border-white/40 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-white rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Take your inventory management to the next level with StockEase.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Step into the future of inventory management with StockEase.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {currentUser ? (
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
                asChild
              >
                <Link to="/dashboard">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            ) : (
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
                asChild
              >
                <Link to="/register">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
