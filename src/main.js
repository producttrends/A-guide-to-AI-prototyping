<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Artsy Data Analytics Department - Executive Proposal</title>
<style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

    body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #ffffff;
    color: #1a1a1a;
    line-height: 1.5;
    padding: 40px 20px;
}

    .container {
    max-width: 1100px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

    header {
    text-align: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
}

    .logo {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: #6b46c1;
    color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

    h1 {
    font-size: 1.8rem;
    color: #1a1a1a;
    margin-bottom: 5px;
}

    .subtitle {
    color: #666;
    font-size: 1rem;
}

    .executive-summary {
    background: #f8f8f8;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 25px;
    border-left: 4px solid #6b46c1;
}

    .main-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 25px;
}

    .section {
    padding: 20px;
    background: #fafafa;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
}

    .section h2 {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: #333;
}

    .problem { border-top: 3px solid #dc2626; }
    .solution { border-top: 3px solid #059669; }

    .metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin: 15px 0 20px 0;
}

    .metric {
    text-align: center;
    padding: 15px;
    background: white;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
}

    .metric-value {
    font-size: 1.8rem;
    font-weight: bold;
    color: #6b46c1;
}

    .metric-label {
    font-size: 0.85rem;
    color: #666;
    margin-top: 5px;
}

    .bullet-list {
    list-style: none;
    padding: 0;
}

    .bullet-list li {
    padding: 5px 0 5px 20px;
    position: relative;
}

    .bullet-list li:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #6b46c1;
    font-weight: bold;
}

    .team-budget {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
    margin-bottom: 25px;
}

    .team-list {
    background: #fafafa;
    padding: 20px;
    border-radius: 8px;
}

    .team-member {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #e0e0e0;
}

    .team-member:last-child {
    border-bottom: none;
}

    .roi-box {
    background: #10b981;
    color: white;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
}

    .roi-main {
    font-size: 3rem;
    font-weight: bold;
    margin: 10px 0;
}

    .timeline {
    background: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 25px;
}

    .phase {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 15px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
}

    .phase:last-child {
    border-bottom: none;
}

    .phase-time {
    font-weight: bold;
    color: #6b46c1;
}

    .recommendation {
    background: #6b46c1;
    color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    margin-top: 20px;
}

    .recommendation h3 {
    margin-bottom: 10px;
}

    @media print {
    body {
    padding: 0;
}
    .container {
    box-shadow: none;
    padding: 20px;
}
}

    @media (max-width: 768px) {
    .main-content, .team-budget {
    grid-template-columns: 1fr;
}
    .metrics {
    grid-template-columns: 1fr;
}
}
</style>
</head>
<body>
<div class="container">
    <header>
        <div class="logo" style="margin: 0 auto;">A</div>
        <h1>Data Analytics Department Proposal</h1>
        <p class="subtitle">Transforming Editorial Excellence into Revenue Growth</p>
    </header>

    <div class="executive-summary">
        <strong>Executive Summary:</strong> Artsy's editorial content (15K daily views) converts at 0.3% vs marketplace at 5-6%,
        representing a $25M+ annual revenue opportunity. A dedicated data analytics team will unify our content and commerce
        systems, implement ML-driven personalization, and increase editorial conversion to 1.2%+ within 12 months.
    </div>

    <div class="main-content">
        <div class="section problem">
            <h2>🔴 The Problem</h2>
            <ul class="bullet-list">
                <li>Editorial and marketplace exist in separate systems</li>
                <li>No tracking of user journey from content to purchase</li>
                <li>Zero personalization based on reading behavior</li>
                <li>Manual processes, no A/B testing framework</li>
                <li>Competitors (Artnet, Saatchi) gaining market share</li>
            </ul>

            <div style="margin-top: 15px; padding: 10px; background: #fee2e2; border-radius: 5px;">
                <strong>Impact:</strong> Losing $2M+ monthly in potential revenue
            </div>
        </div>

        <div class="section solution">
            <h2>✅ The Solution</h2>
            <ul class="bullet-list">
                <li>Unified data platform connecting all systems</li>
                <li>ML-powered content recommendations</li>
                <li>Real-time user journey tracking</li>
                <li>Automated A/B testing infrastructure</li>
                <li>Predictive models for purchase intent</li>
            </ul>

            <div style="margin-top: 15px; padding: 10px; background: #d1fae5; border-radius: 5px;">
                <strong>Goal:</strong> 4x conversion improvement in Year 1
            </div>
        </div>
    </div>

    <div class="metrics">
        <div class="metric">
            <div class="metric-value">0.3%</div>
            <div class="metric-label">Current Conversion</div>
        </div>
        <div class="metric">
            <div class="metric-value">1.2%</div>
            <div class="metric-label">Year 1 Target</div>
        </div>
        <div class="metric">
            <div class="metric-value">$25M</div>
            <div class="metric-label">Revenue Opportunity</div>
        </div>
    </div>

    <div class="team-budget">
        <div class="team-list">
            <h3 style="margin-bottom: 15px;">Team & Investment</h3>
            <div class="team-member">
                <span>Data Science Lead</span>
                <span>$180K</span>
            </div>
            <div class="team-member">
                <span>Senior Data Engineer</span>
                <span>$170K</span>
            </div>
            <div class="team-member">
                <span>ML Engineer</span>
                <span>$160K</span>
            </div>
            <div class="team-member">
                <span>Analytics Engineer</span>
                <span>$140K</span>
            </div>
            <div class="team-member">
                <span>Product Analyst</span>
                <span>$130K</span>
            </div>
            <div class="team-member" style="margin-top: 10px; padding-top: 10px; border-top: 2px solid #333;">
                <span><strong>Infrastructure & Tools</strong></span>
                <span><strong>$200K</strong></span>
            </div>
            <div class="team-member">
                <span><strong>Total Investment</strong></span>
                <span><strong>$980K</strong></span>
            </div>
        </div>

        <div class="roi-box">
            <h3>Expected Returns</h3>
            <div class="roi-main">3.6x</div>
            <div>First Year ROI</div>
            <div style="margin-top: 15px; font-size: 1.2rem;">$3.5M Revenue</div>
            <div style="font-size: 0.9rem;">9-month payback</div>
        </div>
    </div>

    <div class="timeline">
        <h3 style="margin-bottom: 15px;">Implementation Timeline</h3>
        <div class="phase">
            <div class="phase-time">Months 1-3</div>
            <div>Team hiring, infrastructure setup, baseline metrics, quick win recommendations</div>
        </div>
        <div class="phase">
            <div class="phase-time">Months 4-6</div>
            <div>Data integration, A/B testing framework, basic personalization (0.3% → 0.6%)</div>
        </div>
        <div class="phase">
            <div class="phase-time">Months 7-9</div>
            <div>ML models deployment, advanced personalization (0.6% → 0.9%)</div>
        </div>
        <div class="phase">
            <div class="phase-time">Months 10-12</div>
            <div>Scale & optimize, social features, achieve 1.2%+ conversion target</div>
        </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
        <div class="section" style="border-top: 3px solid #f59e0b;">
            <h3 style="margin-bottom: 15px;">⚠️ Key Risks</h3>
            <ul class="bullet-list" style="font-size: 0.95rem;">
                <li><strong>Talent Acquisition (High):</strong> Competitive market for data talent</li>
                <li><strong>Data Quality (Medium):</strong> Legacy systems with inconsistent data</li>
                <li><strong>Integration Complexity (Medium):</strong> Multiple disconnected platforms</li>
                <li><strong>User Privacy (Low):</strong> CCPA/GDPR compliance requirements</li>
                <li><strong>ROI Timeline (Medium):</strong> Conversion improvements may lag</li>
            </ul>
        </div>
        <div class="section" style="border-top: 3px solid #3b82f6;">
            <h3 style="margin-bottom: 15px;">🛡️ Mitigation Strategies</h3>
            <ul class="bullet-list" style="font-size: 0.95rem;">
                <li><strong>Talent:</strong> Partner with top recruiters, offer competitive equity</li>
                <li><strong>Data:</strong> 3-month data audit & cleaning phase built into timeline</li>
                <li><strong>Integration:</strong> Phased approach, start with read-only access</li>
                <li><strong>Privacy:</strong> Privacy-by-design architecture, legal review</li>
                <li><strong>ROI:</strong> Quick wins in Q1, weekly metrics tracking</li>
            </ul>
        </div>
    </div>

    <div class="recommendation">
        <h3>Recommendation</h3>
        <p>Despite identified risks, the opportunity significantly outweighs challenges. Approve immediate formation
            of Data Analytics Department to capture $25M+ revenue opportunity and establish Artsy as the leader in
            AI-powered art commerce.</p>
    </div>
</div>
</body>
</html>