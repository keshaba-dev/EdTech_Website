import '/src/Components_CSS/Body.css'

export default function Body() {
    const programs = [
        {
            title: 'Full-stack Development',
            label: '24 weeks',
            text: 'Build production apps with React, APIs, databases, testing, and deployment workflows.',
        },
        {
            title: 'Data Analytics',
            label: '18 weeks',
            text: 'Master spreadsheets, SQL, Python dashboards, and business storytelling with real datasets.',
        },
        {
            title: 'AI Product Skills',
            label: '12 weeks',
            text: 'Learn prompt systems, automation, evaluation, and practical AI workflows for modern teams.',
        },
    ];

    const outcomes = [
        'Portfolio reviews with senior mentors',
        'Interview practice with hiring-style scorecards',
        'Capstone projects shaped around market roles',
        'Career support from enrollment to offer',
    ];

    const stats = [
        ['92%', 'completion rate'],
        ['4.8/5', 'mentor rating'],
        ['38k+', 'learners trained'],
    ];

    return(
        <main className="edtech-page" id="home">
            <section className="hero-section">
                <div className="hero-copy">
                    <span className="eyebrow">Live cohorts for ambitious professionals</span>
                    <h1>Build job-ready skills with mentor-led online programs.</h1>
                    <p>
                        SkillBridge helps learners move from curiosity to career confidence with guided projects,
                        expert feedback, and a platform designed for measurable progress.
                    </p>
                    <div className="hero-actions">
                        <a className="primary-button" href="#programs">Explore programs</a>
                        <a className="secondary-button" href="#outcomes">View outcomes</a>
                    </div>
                    <div className="hero-proof" aria-label="Platform highlights">
                        {stats.map(([value, label]) => (
                            <div key={label}>
                                <strong>{value}</strong>
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="learning-panel" aria-label="Live learning dashboard preview">
                    <div className="panel-top">
                        <span>Today</span>
                        <strong>Product Analytics Cohort</strong>
                    </div>
                    <div className="mentor-card">
                        <div className="avatar">AM</div>
                        <div>
                            <span>Mentor session</span>
                            <strong>Design a retention dashboard</strong>
                        </div>
                    </div>
                    <div className="progress-block">
                        <div>
                            <span>Weekly progress</span>
                            <strong>78%</strong>
                        </div>
                        <div className="progress-track">
                            <span style={{ width: '78%' }}></span>
                        </div>
                    </div>
                    <div className="task-list">
                        <span className="task done">SQL cohort query</span>
                        <span className="task done">Product metric review</span>
                        <span className="task active">Capstone critique</span>
                    </div>
                </div>
            </section>

            <section className="logo-strip" aria-label="Employer aligned curriculum">
                <span>Curriculum shaped for roles at</span>
                <strong>Fintech</strong>
                <strong>SaaS</strong>
                <strong>Healthcare</strong>
                <strong>Retail</strong>
                <strong>AI Labs</strong>
            </section>

            <section className="section" id="programs">
                <div className="section-heading">
                    <span className="eyebrow">Programs</span>
                    <h2>Commercial-grade courses built around real work.</h2>
                    <p>Choose a focused path, learn in weekly sprints, and ship evidence of skill every month.</p>
                </div>
                <div className="program-grid">
                    {programs.map((program) => (
                        <article className="program-card" key={program.title}>
                            <div className="card-icon" aria-hidden="true">+</div>
                            <span>{program.label}</span>
                            <h3>{program.title}</h3>
                            <p>{program.text}</p>
                            <a href="#contact">Download syllabus</a>
                        </article>
                    ))}
                </div>
            </section>

            <section className="experience-section" id="platform">
                <div className="experience-visual">
                    <div className="calendar-card">
                        <span>Next live class</span>
                        <strong>Thursday, 7:00 PM</strong>
                        <p>Debugging React state with mentor walkthroughs and peer review.</p>
                    </div>
                    <div className="score-card">
                        <strong>A</strong>
                        <span>Capstone grade</span>
                    </div>
                </div>
                <div className="experience-copy">
                    <span className="eyebrow">Platform</span>
                    <h2>Everything a serious learner needs, without the noise.</h2>
                    <p>
                        Learners get structured lessons, live support, project spaces, mentor notes, and progress
                        analytics in one calm workspace.
                    </p>
                    <div className="feature-list">
                        <span>Live interactive classes</span>
                        <span>AI-assisted practice labs</span>
                        <span>Mentor feedback loops</span>
                        <span>Career readiness tracker</span>
                    </div>
                </div>
            </section>

            <section className="section outcomes-section" id="outcomes">
                <div className="section-heading">
                    <span className="eyebrow">Outcomes</span>
                    <h2>Designed to convert learning into career momentum.</h2>
                </div>
                <div className="outcome-layout">
                    <div className="quote-card">
                        <p>
                            "The program felt close to working on a real product team. I had projects, feedback,
                            deadlines, and a story I could confidently tell in interviews."
                        </p>
                        <strong>Priya N.</strong>
                        <span>Frontend Developer, 2026 cohort</span>
                    </div>
                    <div className="outcome-list">
                        {outcomes.map((item) => (
                            <div key={item}>
                                <span aria-hidden="true">OK</span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section" id="pricing">
                <div>
                    <span className="eyebrow">Admissions</span>
                    <h2>Start with a guided skills audit.</h2>
                    <p>
                        Get a personalized program recommendation, schedule options, and a transparent fee plan
                        before you enroll.
                    </p>
                </div>
                <a className="primary-button" href="#contact">Talk to admissions</a>
            </section>

            <footer className="footer" id="contact">
                <div>
                    <strong>SkillBridge Career Academy</strong>
                    <span>Mentor-led online education for career builders.</span>
                </div>
                <a href="mailto:hello@skillbridge.example">hello@skillbridge.example</a>
            </footer>
        </main>
    );
}
