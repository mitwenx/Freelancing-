import Link from 'next/link';

export default function TermsPage() {
  return (
    <section className="section" style={{ paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link href="/" className="btn btn-outline" style={{ marginBottom: '32px', display: 'inline-flex', padding: '8px 20px' }}>
          ← Back to Home
        </Link>
        
        <h1 className="section-title">Terms & Conditions</h1>
        <p className="section-subtitle" style={{ margin: '0 0 40px 0' }}>Last updated: January 2026</p>
        
        <div style={{ lineHeight: '1.8', color: 'var(--md-on-surface-variant)' }}>
          <p style={{ marginBottom: '24px' }}>
            Welcome to mitwen.com By accessing our website and purchasing our services, you agree to be bound by the following Terms and Conditions.
          </p>

          <h3 style={{ color: 'var(--md-on-surface)', marginTop: '30px', marginBottom: '12px' }}>1. Services</h3>
          <p style={{ marginBottom: '24px' }}>
            We provides professional graphic design services, specifically YouTube thumbnails. All services are digital; no physical products will be shipped.
          </p>

          <h3 style={{ color: 'var(--md-on-surface)', marginTop: '30px', marginBottom: '12px' }}>2. Payments and Refunds</h3>
          <p style={{ marginBottom: '16px' }}>
            <strong>Payment:</strong> Payment terms will be agreed upon via email invoice or platform (e.g., Upwork) before work commences.
          </p>
          <p style={{ marginBottom: '24px' }}>
            <strong>Refunds:</strong> Due to the custom nature of digital design work, refunds are generally not provided once the design process has started. However, we offer revisions to ensure satisfaction.
          </p>

          <h3 style={{ color: 'var(--md-on-surface)', marginTop: '30px', marginBottom: '12px' }}>3. Revisions</h3>
          <p style={{ marginBottom: '24px' }}>
            Each package comes with a specific number of revisions. "Unlimited Revisions" (where applicable) applies to the active project scope. Major changes to the initial concept or brief may incur additional fees.
          </p>

          <h3 style={{ color: 'var(--md-on-surface)', marginTop: '30px', marginBottom: '12px' }}>4. Intellectual Property</h3>
          <p style={{ marginBottom: '24px' }}>
            Upon full payment, the client is granted exclusive rights to use the final design for their content. mitwen.com retains the right to display the work in portfolios for promotional purposes unless otherwise agreed in writing.
          </p>

          <h3 style={{ color: 'var(--md-on-surface)', marginTop: '30px', marginBottom: '12px' }}>5. Source Files</h3>
          <p style={{ marginBottom: '24px' }}>
            Source files are included only in specific packages. They are not included in the Trial or Basic packages unless purchased as an add-on.
          </p>

          <h3 style={{ color: 'var(--md-on-surface)', marginTop: '30px', marginBottom: '12px' }}>6. Contact</h3>
          <p>
            For any inquiries regarding these terms, please contact us at:<br/>
            <strong>Email:</strong> contact@mitwen.com
          </p>
        </div>
      </div>
    </section>
  );
}
