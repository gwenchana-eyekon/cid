import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, CheckSquare, Search, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modern Minimalist with Professional Confidence
 * - Clean, professional aesthetic with the brand blue color palette
 * - Generous whitespace and clear hierarchy
 * - Subtle animations and hover effects
 * - Typography: Poppins Bold for headings, Inter for body text
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663599156304/NwtLOTMfPRzaXuJa.jpg"
              alt="Consider It Done"
              className="h-8 w-8"
            />
            <span className="font-bold text-lg text-blue-700">Consider It Done</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-blue-700 transition">
              Services
            </a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-blue-700 transition">
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-blue-700 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663599156304/DS9RThR5mjJALNXUNECyxx/hero-background-59BoQVtZDQhs9HZNLUf6AR.webp)',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Virtual Assistant,{" "}
                <span className="text-blue-700">Always Ready</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Focus on what matters most while we handle the administrative tasks. From email management to project coordination, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-700 text-blue-700 hover:bg-blue-50"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right - Decorative Element */}
            <div className="hidden md:block h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive virtual assistant services tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
              <div className="mb-6">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663599156304/DS9RThR5mjJALNXUNECyxx/service-icon-1-2iPLefMsJctHE9dRWoSZ5F.webp"
                  alt="Email & Calendar Management"
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email & Calendar Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay organized with professional email handling, calendar scheduling, and meeting coordination. We ensure nothing falls through the cracks.
              </p>
            </Card>

            {/* Service Card 2 */}
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
              <div className="mb-6">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663599156304/DS9RThR5mjJALNXUNECyxx/service-icon-2-D4MoJWMNBxb7o2QBP9X7z3.webp"
                  alt="Task & Project Management"
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Task & Project Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Keep projects on track with efficient task organization, deadline management, and progress tracking. We help you stay ahead of schedule.
              </p>
            </Card>

            {/* Service Card 3 */}
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
              <div className="mb-6">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663599156304/DS9RThR5mjJALNXUNECyxx/service-icon-3-W3Ysnx5i4Ef6zTde7iT9o7.webp"
                  alt="Data Entry & Research"
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Entry & Research</h3>
              <p className="text-gray-600 leading-relaxed">
                Accurate data management and thorough research support. We handle the details so you can focus on strategic decisions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckSquare className="h-6 w-6 text-blue-700 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Professional & Reliable</h3>
                    <p className="text-gray-600">Consistent, high-quality service you can depend on</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckSquare className="h-6 w-6 text-blue-700 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Flexible & Scalable</h3>
                    <p className="text-gray-600">Services that grow with your business needs</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckSquare className="h-6 w-6 text-blue-700 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Confidential & Secure</h3>
                    <p className="text-gray-600">Your data and privacy are our top priority</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-700 mb-2">100%</div>
                <p className="text-gray-600">Dedicated to your success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Trusted by businesses to manage their day-to-day operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <Card className="p-8 border-0 bg-white">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Consider It Done has been a game-changer for our business. They handle all our administrative tasks with professionalism and attention to detail. We've saved countless hours!"
              </p>
              <div>
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-600">CEO, Tech Startup</p>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-8 border-0 bg-white">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Reliable, efficient, and always responsive. Consider It Done takes the stress out of managing my schedule and communications. Highly recommended!"
              </p>
              <div>
                <p className="font-semibold text-gray-900">Michael Chen</p>
                <p className="text-sm text-gray-600">Entrepreneur</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-700">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 text-lg">
              Let's discuss how we can help streamline your business operations
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold"
              >
                Contact Us
              </Button>
            </div>
            {submitted && (
              <p className="text-center text-blue-100 text-sm">
                ✓ Thank you! We'll be in touch shortly.
              </p>
            )}
          </form>

          <div className="mt-12 pt-12 border-t border-blue-600 text-center">
            <p className="text-blue-100 mb-4">Or reach out directly:</p>
            <a href="mailto:consideritdone0308@gmail.com" className="text-white font-semibold hover:text-blue-100 transition">
              consideritdone0308@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663599156304/NwtLOTMfPRzaXuJa.jpg"
                alt="Consider It Done"
                className="h-6 w-6"
              />
              <span className="font-semibold text-white">Consider It Done</span>
            </div>
            <p className="text-sm text-center md:text-right">
              © 2026 Consider It Done. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
