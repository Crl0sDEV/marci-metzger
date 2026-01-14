"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const YelpIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.15 10.74a6.45 6.45 0 0 0-.17-.79l-.11-.42-6.52.54 1.14-5.24-.09-.04a2.23 2.23 0 0 0-.3-.11 2.94 2.94 0 0 0-3.32 1.1l-1.48 2.5 1.83 5.35-4.22-3.18-.32.22a2.66 2.66 0 0 0-1.21 2.14 2.63 2.63 0 0 0 .86 2.08l.33.26 4.67 1.5-3.38 4.29.28.24a2.91 2.91 0 0 0 3.73-.39l.23-.21 2.61-4.72 2.85 5.08.36-.11a2.89 2.89 0 0 0 2-2.73 2.76 2.76 0 0 0-.39-1.44l-.16-.25-4.52-3.8 5.48 1.1.34-.34a2.84 2.84 0 0 0 .69-3.34l-.06-.11z" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }
    const phoneRegex = /^[0-9+\-\s()]*$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (
      !phoneRegex.test(formData.phone) ||
      formData.phone.length < 10
    ) {
      newErrors.phone = "Invalid phone number";
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(false);
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="relative bg-white">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 bg-luxury-dark text-white p-8 md:p-12 lg:p-24 flex flex-col">
          <div>
            <p className="text-luxury-gold tracking-[0.2em] text-xs font-bold uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">
              Let&apos;s Discuss Your <br /> Next Move.
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-12">
              Marci Metzger - THE RIDGE REALTY GROUP
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-luxury-gold transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Visit Office</h4>
                  <p className="text-gray-400 text-sm">
                    3190 HW-160, Suite F, Pahrump,
                    <br />
                    Nevada 89048, United States
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-luxury-gold transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Call Me</h4>
                  <p className="text-gray-400 text-sm">(206) 919-6886</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-luxury-gold transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Email</h4>
                  <p className="text-gray-400 text-sm">
                    marcimetzger@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 bg-gray-50 p-8 md:p-12 lg:p-24 flex flex-col justify-between">
          
          <div className="max-w-2xl w-full mx-auto mb-8 animate-fade-in-up">
             <h3 className="text-2xl md:text-3xl font-serif text-luxury-dark">
                Online Inquiry
             </h3>
             <div className="w-12 h-1 bg-luxury-gold mt-2"></div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl w-full mx-auto space-y-8"
            noValidate
          >
            {isSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md flex items-center gap-2 animate-fade-in-up">
                <CheckCircle size={18} className="text-green-600" />
                <span className="text-sm font-medium">
                  Message sent successfully!
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  className={`peer w-full bg-transparent border-b py-3 outline-none transition-colors ${
                    errors.name
                      ? "border-red-500 text-red-600"
                      : "border-gray-300 focus:border-luxury-gold"
                  }`}
                />
                <label
                  className={`absolute left-0 text-sm transition-all pointer-events-none uppercase tracking-wider 
                  ${
                    formData.name
                      ? "-top-4 text-xs text-luxury-gold"
                      : "top-3 peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3"
                  } 
                  ${
                    errors.name
                      ? "text-red-500 peer-focus:text-red-500"
                      : "text-gray-400 peer-focus:text-luxury-gold"
                  }`}
                >
                  Full Name
                </label>
                {errors.name && (
                  <p className="text-red-500 text-[10px] mt-1 flex gap-1">
                    <AlertCircle size={10} /> {errors.name}
                  </p>
                )}
              </div>

              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=" "
                  className={`peer w-full bg-transparent border-b py-3 outline-none transition-colors ${
                    errors.phone
                      ? "border-red-500 text-red-600"
                      : "border-gray-300 focus:border-luxury-gold"
                  }`}
                />
                <label
                  className={`absolute left-0 text-sm transition-all pointer-events-none uppercase tracking-wider
                  ${
                    formData.phone
                      ? "-top-4 text-xs text-luxury-gold"
                      : "top-3 peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3"
                  } 
                  ${
                    errors.phone
                      ? "text-red-500 peer-focus:text-red-500"
                      : "text-gray-400 peer-focus:text-luxury-gold"
                  }`}
                >
                  Phone Number
                </label>
                {errors.phone && (
                  <p className="text-red-500 text-[10px] mt-1 flex gap-1">
                    <AlertCircle size={10} /> {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="relative group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className={`peer w-full bg-transparent border-b py-3 outline-none transition-colors ${
                  errors.email
                    ? "border-red-500 text-red-600"
                    : "border-gray-300 focus:border-luxury-gold"
                }`}
              />
              <label
                className={`absolute left-0 text-sm transition-all pointer-events-none uppercase tracking-wider
                ${
                  formData.email
                    ? "-top-4 text-xs text-luxury-gold"
                    : "top-3 peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3"
                } 
                ${
                  errors.email
                    ? "text-red-500 peer-focus:text-red-500"
                    : "text-gray-400 peer-focus:text-luxury-gold"
                }`}
              >
                Email Address
              </label>
              {errors.email && (
                <p className="text-red-500 text-[10px] mt-1 flex gap-1">
                  <AlertCircle size={10} /> {errors.email}
                </p>
              )}
            </div>

            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder=" "
                className={`peer w-full bg-transparent border-b py-3 outline-none transition-colors resize-none ${
                  errors.message
                    ? "border-red-500 text-red-600"
                    : "border-gray-300 focus:border-luxury-gold"
                }`}
              ></textarea>
              <label
                className={`absolute left-0 text-sm transition-all pointer-events-none uppercase tracking-wider
                ${
                  formData.message
                    ? "-top-4 text-xs text-luxury-gold"
                    : "top-3 peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3"
                } 
                ${
                  errors.message
                    ? "text-red-500 peer-focus:text-red-500"
                    : "text-gray-400 peer-focus:text-luxury-gold"
                }`}
              >
                How can I help you?
              </label>
              {errors.message && (
                <p className="text-red-500 text-[10px] mt-1 flex gap-1">
                  <AlertCircle size={10} /> {errors.message}
                </p>
              )}
            </div>

            <div className="pt-4 pb-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-luxury-dark text-white px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-luxury-gold transition-colors flex items-center gap-2 ${
                  isSubmitting ? "opacity-70" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={14} />}
              </button>
            </div>
          </form>

          <div className="max-w-2xl w-full mx-auto mt-8 md:mt-12 pt-8 md:pt-12 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3 text-luxury-gold">
                <Clock size={20} />
                <h4 className="font-serif text-lg text-luxury-dark font-bold">
                  Office Hours
                </h4>
              </div>
              <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                <span className="text-gray-500 uppercase tracking-wider text-xs font-bold">
                  Mon - Sun
                </span>
                <span className="text-gray-800 font-medium">
                  8:00 AM - 7:00 PM
                </span>
              </div>
              <p className="text-xs text-luxury-gold italic">
                *Appointments outside office hours available upon request.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <h4 className="font-serif text-lg text-luxury-dark font-bold pl-1">
                Connect With Me
              </h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/MarciHomes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gray-300 rounded-full text-gray-600 hover:bg-luxury-dark hover:text-white transition-all"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/marciandlauren_nvrealtors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gray-300 rounded-full text-gray-600 hover:bg-luxury-dark hover:text-white transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/marci-metzger-30642496/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gray-300 rounded-full text-gray-600 hover:bg-luxury-dark hover:text-white transition-all"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://wa.me/14259412560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gray-300 rounded-full text-gray-600  hover:bg-luxury-dark hover:text-white transition-all"
                >
                  <WhatsAppIcon size={18} />
                </a>
                <a
                  href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gray-300 rounded-full text-gray-600  hover:bg-luxury-dark hover:text-white transition-all"
                >
                  <YelpIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-64 md:h-96 lg:h-125">
        <iframe
          src="https://maps.google.com/maps?q=3190+S+Highway+160,+Pahrump,+NV&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}