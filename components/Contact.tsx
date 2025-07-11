"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const YOUR_EMAIL = "franzewilliamcalleja@gmail.com"; // ← change to your real address

const Contact = () => {
  const [fromEmail, setFromEmail] = useState("");

  const handleSend = () => {
    if (!fromEmail.trim()) {
      // quick nudge that the field is required
      const input = document.getElementById("quick-email");
      input?.classList.add("animate-shake"); // add a simple @keyframes shake in your globals
      setTimeout(() => input?.classList.remove("animate-shake"), 400);
      return;
    }

    const subject = encodeURIComponent("Quick message from portfolio site");
    const body = encodeURIComponent(
      `Hi there,\n\n(Feel free to write your message above this line.)\n\n——\nSender e‑mail: ${fromEmail}`
    );

    window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <footer
      id="contact"
      className="bg-slate-900 border-t border-slate-800 py-8 w-full"
    >
      <div className="max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Let&apos;s Connect
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${YOUR_EMAIL}`}
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{YOUR_EMAIL}</span>
              </a>
              <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-sm">+63 962 858 0637</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Candelaria, Quezon</span>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Message</h3>
            <div className="flex space-x-2">
              <input
                id="quick-email"
                type="email"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-2 rounded-lg transition-all duration-300 flex items-center justify-center group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Drop your e‑mail and I’ll reach out to you soon.
            </p>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-slate-800">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="www.linkedin.com/in/calleja-franze-william-m-b93736258"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/franze-calleja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.facebook.com/franze.calleja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
            >
              Facebook
            </a>
          </div>

          <p className="text-xs text-slate-500">
            © Franze William M. Calleja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
