import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <SEO 
        title="Privacy Policy" 
        description="Privacy Policy for Ashwanth S. Learn how we collect, use, and protect your personal information."
      />
      
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black transition-colors mb-12 uppercase tracking-widest"
        >
          <ChevronLeft size={16} />
          Back
        </Link>

        <div className="space-y-12">
          <div>
            <h3 className="text-xs font-black text-brand-red uppercase tracking-[0.3em] mb-4">Legal</h3>
            <h1 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase leading-none">
              Privacy <br/>
              <span className="text-brand-red">Policy</span>
            </h1>
            <p className="text-sm text-gray-400 font-bold mt-6 uppercase tracking-widest">
              Last updated: January 15, 2025
            </p>
          </div>

          <div className="prose prose-sm max-w-none text-gray-600 font-medium leading-relaxed space-y-8">
            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">1. Introduction</h2>
              <p>
                Ashwanth S ("Company", "we", "us", or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
              </p>
              <p>
                By using our services, you consent to the collection and use of your information as described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-bold text-black mb-2">Personal Information</h3>
              <p>We may collect the following personal information:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Name, email address, phone number, and job title</li>
                <li>Company name and business information</li>
                <li>Payment information and billing addresses</li>
                <li>Communication preferences and contact history</li>
                <li>Professional credentials and technical expertise information</li>
              </ul>

              <h3 className="text-lg font-bold text-black mt-6 mb-2">Technical Data</h3>
              <p>When you use our services, we may collect:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>IP addresses, browser types, and device information</li>
                <li>Usage data and interaction patterns with our services</li>
                <li>Log files and system performance metrics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-lg font-bold text-black mt-6 mb-2">Client Data</h3>
              <p>In the course of providing AI services, you may provide us with:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Business data and datasets for AI model training</li>
                <li>System configurations and integration requirements</li>
                <li>Performance metrics and operational data</li>
                <li>Any other data necessary for service delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">3. How We Use Your Information</h2>
              <p>We use collected information for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Service Delivery: To provide, maintain, and improve our AI services</li>
                <li>Communication: To respond to inquiries and provide customer support</li>
                <li>Business Operations: To process payments and manage client relationships</li>
                <li>Legal Compliance: To comply with applicable laws and regulations</li>
                <li>Security: To protect our systems and prevent unauthorized access</li>
                <li>Analytics: To understand usage patterns and improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">4. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Service Providers: With trusted third-party vendors who assist in service delivery</li>
                <li>Legal Requirements: When required by law or to protect legal rights</li>
                <li>Business Transfers: In connection with mergers, acquisitions, or asset sales</li>
                <li>Consent: When you have given explicit consent for sharing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">5. Data Security</h2>
              <p>We implement comprehensive security measures to protect your information:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Encryption: Data is encrypted in transit and at rest using industry-standard protocols</li>
                <li>Access Controls: Strict authentication and authorization systems</li>
                <li>Regular Audits: Periodic security assessments and vulnerability testing</li>
                <li>Employee Training: Regular security awareness training for all staff</li>
                <li>Incident Response: Established procedures for security incident management</li>
                <li>Compliance: Adherence to industry-standard security frameworks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">6. Data Retention</h2>
              <p>We retain your information for as long as necessary to provide services and comply with legal obligations:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Client Data: Retained for the duration of service agreement plus 30 days</li>
                <li>Personal Information: Retained for 7 years or as required by law</li>
                <li>Technical Logs: Retained for 12 months for security and troubleshooting</li>
                <li>Financial Records: Retained for 7 years as required by tax regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">7. Your Rights and Choices</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Access: Request access to your personal information we hold</li>
                <li>Correction: Request correction of inaccurate or incomplete information</li>
                <li>Deletion: Request deletion of your personal information (subject to legal requirements)</li>
                <li>Portability: Request transfer of your data to another service provider</li>
                <li>Opt-out: Unsubscribe from marketing communications at any time</li>
                <li>Restrict Processing: Request limitation of how we process your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">8. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar technologies to enhance your experience:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Essential Cookies: Required for basic website functionality</li>
                <li>Analytics Cookies: Help us understand website usage and performance</li>
                <li>Preference Cookies: Remember your settings and preferences</li>
                <li>Marketing Cookies: Used to deliver relevant advertisements (with consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">9. International Data Transfers</h2>
              <p>
                If you are located outside India, please note that your information may be transferred to and processed in India. We ensure appropriate safeguards are in place for international transfers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">10. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">11. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">12. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes by email notification, prominent notice on our website, or direct communication.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">13. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
              <p className="mt-4">
                <strong>Privacy Officer</strong><br/>
                <strong>Email:</strong> me@ashwanth.dev<br/>
                <strong>Address:</strong> Vellore, Tamil Nadu, India - 632014
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">14. Regulatory Compliance</h2>
              <p>We comply with applicable privacy laws and regulations, including:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>GDPR: European Union General Data Protection Regulation</li>
                <li>CCPA: California Consumer Privacy Act</li>
                <li>Data protection laws of India</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
