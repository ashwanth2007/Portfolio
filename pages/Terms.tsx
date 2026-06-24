import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <SEO 
        title="Terms of Service" 
        description="Terms of Service for Ashwanth S AI consulting and development services."
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
              Terms of <br/>
              <span className="text-brand-red">Service</span>
            </h1>
            <p className="text-sm text-gray-400 font-bold mt-6 uppercase tracking-widest">
              Last updated: January 15, 2025
            </p>
          </div>

          <div className="prose prose-sm max-w-none text-gray-600 font-medium leading-relaxed space-y-8">
            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services provided by Ashwanth S ("Company", "we", "us", or "our"), you ("Client", "you", or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">2. Description of Services</h2>
              <p>
                Ashwanth S provides artificial intelligence consulting, development, deployment, and related services including but not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Custom AI model development and training</li>
                <li>Machine learning algorithm implementation</li>
                <li>AI system integration and deployment</li>
                <li>Data processing and analytics services</li>
                <li>Technical consulting and support</li>
                <li>Cloud infrastructure setup and management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">3. Client Responsibilities</h2>
              <p>The Client agrees to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Provide accurate and complete information necessary for service delivery</li>
                <li>Ensure legal compliance of all data provided to us</li>
                <li>Maintain confidentiality of access credentials and system information</li>
                <li>Use our services in compliance with applicable laws and regulations</li>
                <li>Pay all fees according to the agreed payment schedule</li>
                <li>Provide timely feedback and approvals as required for project progression</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">4. Intellectual Property Rights</h2>
              <p>
                <strong>Client Data:</strong> You retain all rights to your data, content, and materials provided to us. We will use your data solely for the purpose of delivering our services.
              </p>
              <p>
                <strong>Custom Developments:</strong> Upon full payment, you will own the custom AI models, algorithms, and applications developed specifically for your project, excluding our proprietary tools and methodologies.
              </p>
              <p>
                <strong>Our IP:</strong> We retain ownership of our proprietary methodologies, frameworks, tools, and general knowledge used in service delivery.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">5. Confidentiality</h2>
              <p>
                Both parties agree to maintain strict confidentiality of all non-public information shared during the course of our business relationship. This includes but is not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Technical specifications and system architectures</li>
                <li>Business strategies and operational data</li>
                <li>Customer information and proprietary datasets</li>
                <li>Financial information and commercial terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">6. Payment Terms</h2>
              <p>Payment terms will be specified in individual service agreements. Generally:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Invoices are due within 30 days of receipt unless otherwise specified</li>
                <li>Late payments may incur interest charges of 1.5% per month</li>
                <li>Services may be suspended for accounts past due by more than 60 days</li>
                <li>All prices are exclusive of applicable taxes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">7. Service Level Agreements</h2>
              <p>We strive to provide high-quality services with the following commitments:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>99.9% uptime for deployed AI systems (excluding scheduled maintenance)</li>
                <li>24-hour response time for critical support issues</li>
                <li>Regular progress updates and milestone deliveries</li>
                <li>Quality assurance testing for all deliverables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Ashwanth S shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from or related to our services.
              </p>
              <p>
                Our total liability for any claims arising from our services shall not exceed the total amount paid by the Client for the specific service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">9. Data Security and Privacy</h2>
              <p>
                We implement industry-standard security measures to protect your data, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Access controls and authentication systems</li>
                <li>Regular security audits and updates</li>
                <li>Compliance with applicable data protection regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">10. Termination</h2>
              <p>Either party may terminate the service agreement with 30 days written notice. Upon termination:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>All outstanding fees become immediately due and payable</li>
                <li>We will provide reasonable assistance in transitioning services</li>
                <li>Confidentiality obligations continue indefinitely</li>
                <li>You retain ownership of your data and custom developments (upon full payment)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">11. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be communicated to clients via email at least 30 days before taking effect. Continued use of our services after changes take effect constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved through binding arbitration in Vellore, Tamil Nadu, India.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-black text-black uppercase tracking-tight mb-4">13. Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us at:</p>
              <p className="mt-4">
                <strong>Email:</strong> work@ashwanth.dev<br/>
                <strong>Address:</strong> Vellore, Tamil Nadu, India - 632014
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
