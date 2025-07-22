const biServicesData = {
    siteInfo: {
        title: "BI Services Menu",
        description: "Your guide to Business Intelligence capabilities",
        footer: "© 2025 Business Intelligence Team"
    },
    quickActions: [
        {
            title: "Request a Dashboard",
            description: "Need data visualization? Start here",
            action: "mailto:bi-team@company.com?subject=Dashboard Request"
        },
        {
            title: "Report an Issue",
            description: "Something not working? Let us know",
            action: "mailto:bi-support@company.com?subject=BI Issue Report"
        },
        {
            title: "Schedule Consultation",
            description: "Discuss your data needs with our team",
            action: "https://calendly.com/bi-team"
        },
        {
            title: "View Documentation",
            description: "Access guides and tutorials",
            action: "/bi-docs"
        }
    ],
    categories: [
        {
            id: "data-services",
            name: "Data Services",
            description: "Connect, clean, and organize your information",
            icon: "🔄",
            services: [
                {
                    id: "data-integration",
                    title: "Data Integration",
                    icon: "🔄",
                    summary: "Connect data from different systems for unified viewing",
                    description: "We connect data from different systems so you can see everything in one place.",
                    timeframe: "2-3 weeks",
                    example: "We connected policy data with claims history to show how different policy types perform over time.",
                    requirements: ["Source system access", "Data dictionary", "Business rules documentation"],
                    tags: ["automation", "connectivity", "ETL", "integration"]
                },
                {
                    id: "document-ingestion",
                    title: "Document Ingestion",
                    icon: "📄",
                    summary: "Automatically process and extract information from documents",
                    description: "We can automatically process documents you receive and extract the important information.",
                    timeframe: "2 weeks",
                    example: "We built a system that reads incoming certificates of insurance and updates our compliance tracking automatically.",
                    requirements: ["Sample documents", "Extraction rules", "Output format specifications"],
                    tags: ["OCR", "automation", "documents", "processing"]
                },
                {
                    id: "data-cleanup",
                    title: "Data Cleanup",
                    icon: "🧹",
                    summary: "Fix messy data and ensure consistency",
                    description: "We fix messy data and create consistent information you can trust.",
                    timeframe: "1-2 weeks",
                    example: "We standardized all the different school location formats so you can reliably search and filter by location.",
                    requirements: ["Data quality requirements", "Business rules", "Sample data"],
                    tags: ["quality", "standardization", "cleansing", "accuracy"]
                },
                {
                    id: "data-warehouse",
                    title: "Data Warehouse",
                    icon: "🏢",
                    summary: "Organize historical data for trend analysis",
                    description: "We organize historical data to make it easy to analyze trends over time.",
                    timeframe: "3-4 weeks",
                    example: "We built a data warehouse that lets you analyze 5 years of policy performance at the touch of a button.",
                    requirements: ["Data sources", "Reporting needs", "Retention policies"],
                    tags: ["analytics", "history", "storage", "performance"]
                },
                {
                    id: "custom-extracts",
                    title: "Custom Data Extracts",
                    icon: "📋",
                    summary: "Pull specific information for one-time analysis",
                    description: "We can pull specific information you need for one-time projects or analysis.",
                    timeframe: "2-3 days",
                    example: "We provided Finance with a custom extract of all claims over $100K with specific details for their audit process.",
                    requirements: ["Exact fields needed", "Filter criteria", "Output format"],
                    tags: ["reporting", "custom", "ad-hoc", "extraction"]
                }
            ]
        },
        {
            id: "reporting-dashboards",
            name: "Reporting & Dashboards",
            description: "Visualize insights and automate your analytics",
            icon: "📊",
            services: [
                {
                    id: "interactive-dashboard",
                    title: "Interactive Dashboard",
                    icon: "📊",
                    summary: "Clickable dashboards for data exploration",
                    description: "We build clickable dashboards that let you explore your data and find insights.",
                    timeframe: "2-3 weeks",
                    example: "We created a dashboard that shows policy renewal rates by region, with drill-down capability to see individual school performance.",
                    requirements: ["KPIs", "Metrics", "User stories", "Access requirements"],
                    tags: ["visualization", "interactive", "analytics", "insights"]
                },
                {
                    id: "automated-reports",
                    title: "Automated Reports",
                    icon: "📅",
                    summary: "Scheduled reports delivered to your inbox",
                    description: "We set up reports that run automatically and deliver to your inbox when you need them.",
                    timeframe: "1 week",
                    example: "We automated the monthly claims reserve report that used to take 2 days to create manually.",
                    requirements: ["Report examples", "Schedule", "Recipients", "Delivery preferences"],
                    tags: ["automation", "scheduling", "efficiency", "delivery"]
                },
                {
                    id: "self-service-analytics",
                    title: "Self-Service Analytics",
                    icon: "🔍",
                    summary: "Tools to answer your own data questions",
                    description: "We build tools that let you answer your own data questions without needing IT help.",
                    timeframe: "3-4 weeks",
                    example: "We created a self-service tool that lets underwriters analyze loss ratios across different variables they can select themselves.",
                    requirements: ["User skill level", "Data needs", "Training requirements"],
                    tags: ["empowerment", "self-service", "flexibility", "user-friendly"]
                },
                {
                    id: "data-visualizations",
                    title: "Data Visualizations",
                    icon: "📈",
                    summary: "Turn complex data into clear visuals",
                    description: "We turn complex information into clear, compelling visuals that tell a story.",
                    timeframe: "1-2 weeks",
                    example: "We visualized our market penetration across school districts on an interactive map that highlights opportunities.",
                    requirements: ["Data sources", "Visualization goals", "Audience"],
                    tags: ["visualization", "storytelling", "clarity", "design"]
                }
            ]
        },
        {
            id: "process-automation",
            name: "Process Automation",
            description: "Streamline workflows and eliminate manual tasks",
            icon: "⚙️",
            services: [
                {
                    id: "workflow-automation",
                    title: "Workflow Automation",
                    icon: "⚙️",
                    summary: "Automate multi-step processes",
                    description: "We automate multi-step processes to reduce manual work and errors.",
                    timeframe: "3-4 weeks",
                    example: "We automated the entire policy renewal workflow, reducing processing time from 2 days to 2 hours.",
                    requirements: ["Process documentation", "Business rules", "Exception handling"],
                    tags: ["efficiency", "automation", "workflow", "productivity"]
                },
                {
                    id: "notifications-alerts",
                    title: "Notifications & Alerts",
                    icon: "🔔",
                    summary: "Automatic alerts for important events",
                    description: "We set up automatic alerts when important events happen or thresholds are crossed.",
                    timeframe: "1-2 weeks",
                    example: "We created an alert system that notifies underwriters when a school's claims exceed 80% of expected annual total.",
                    requirements: ["Alert conditions", "Recipients", "Delivery method", "Escalation rules"],
                    tags: ["monitoring", "alerts", "proactive", "notifications"]
                },
                {
                    id: "file-processing",
                    title: "File Processing",
                    icon: "📁",
                    summary: "Automatically process incoming files",
                    description: "We build systems that automatically process files when they arrive and route them correctly.",
                    timeframe: "2 weeks",
                    example: "We automated processing of loss run files from carriers, extracting key data and updating our systems overnight.",
                    requirements: ["File examples", "Processing rules", "Error handling"],
                    tags: ["automation", "file-handling", "processing", "integration"]
                },
                {
                    id: "scheduled-jobs",
                    title: "Scheduled Jobs",
                    icon: "⏱️",
                    summary: "Automated processes that run on schedule",
                    description: "We set up processes that run on a schedule without anyone needing to start them.",
                    timeframe: "1 week",
                    example: "We set up automated monthly premium calculations that run the first weekend of each month and alert if there are any issues.",
                    requirements: ["Job specifications", "Schedule", "Error handling", "Monitoring needs"],
                    tags: ["scheduling", "automation", "batch", "maintenance"]
                },
                {
                    id: "form-automation",
                    title: "Form Automation",
                    icon: "📝",
                    summary: "Digital forms with automated processing",
                    description: "We create digital forms that collect information and automatically process it.",
                    timeframe: "2-3 weeks",
                    example: "We built a digital form for collecting building updates from schools that automatically updates our property schedules.",
                    requirements: ["Form fields", "Workflow", "Integration points", "Validation rules"],
                    tags: ["forms", "automation", "data-collection", "workflow"]
                }
            ]
        },
        {
            id: "application-development",
            name: "Application Development",
            description: "Build custom tools and integrate systems",
            icon: "💻",
            services: [
                {
                    id: "custom-applications",
                    title: "Custom Applications",
                    icon: "💻",
                    summary: "Specialized tools for unique business needs",
                    description: "We build specialized tools designed specifically for your unique business needs.",
                    timeframe: "4-8 weeks",
                    example: "We built the Quote Book application that assembles carrier quotes into professional client presentations.",
                    requirements: ["Detailed requirements", "User stories", "Mockups", "Integration needs"],
                    tags: ["custom", "development", "solutions", "applications"]
                },
                {
                    id: "system-integration",
                    title: "System Integration",
                    icon: "🔌",
                    summary: "Connect different software systems",
                    description: "We connect different software systems so they can share information automatically.",
                    timeframe: "3-4 weeks",
                    example: "We connected our claims system with our policy system so claims automatically check for valid coverage.",
                    requirements: ["System documentation", "Integration points", "Data mapping", "Security requirements"],
                    tags: ["integration", "connectivity", "API", "systems"]
                },
                {
                    id: "web-portals",
                    title: "Web Portals",
                    icon: "🌐",
                    summary: "Secure websites for information access",
                    description: "We create secure websites where employees, clients, or partners can access information.",
                    timeframe: "6-8 weeks",
                    example: "We built a portal where schools can submit their property updates directly, saving hundreds of hours of manual data entry.",
                    requirements: ["User roles", "Functionality", "Security requirements", "Branding guidelines"],
                    tags: ["portal", "web", "collaboration", "security"]
                },
                {
                    id: "mobile-solutions",
                    title: "Mobile Solutions",
                    icon: "📱",
                    summary: "Tools for phones and tablets",
                    description: "We develop tools that work on phones and tablets for people who aren't at a desk.",
                    timeframe: "6-8 weeks",
                    example: "We created a mobile app for field adjusters to document property inspections with photos and notes that sync automatically.",
                    requirements: ["Device requirements", "Offline capabilities", "User workflows", "Sync requirements"],
                    tags: ["mobile", "field-work", "apps", "responsive"]
                },
                {
                    id: "legacy-enhancement",
                    title: "Legacy System Enhancement",
                    icon: "🔧",
                    summary: "Improve existing systems with new features",
                    description: "We improve existing systems with new features and capabilities.",
                    timeframe: "3-6 weeks",
                    example: "We enhanced the claims management system with a new module that tracks subrogation opportunities.",
                    requirements: ["System documentation", "Enhancement specs", "Testing requirements"],
                    tags: ["enhancement", "legacy", "improvement", "upgrade"]
                }
            ]
        },
        {
            id: "support-maintenance",
            name: "Support & Maintenance",
            description: "Keep your solutions running smoothly",
            icon: "🔨",
            services: [
                {
                    id: "report-fixes",
                    title: "Report Fixes",
                    icon: "🔨",
                    summary: "Fix reports that aren't working correctly",
                    description: "We fix reports or dashboards that aren't working correctly.",
                    timeframe: "2-5 days",
                    example: "We fixed the claims trending report that was showing incorrect totals for certain claim types.",
                    requirements: ["Issue description", "Expected behavior", "Sample data"],
                    tags: ["support", "fixes", "maintenance", "troubleshooting"]
                },
                {
                    id: "data-troubleshooting",
                    title: "Data Troubleshooting",
                    icon: "🔍",
                    summary: "Investigate and fix data issues",
                    description: "We investigate and fix data issues or discrepancies.",
                    timeframe: "3-7 days",
                    example: "We resolved why the policy count in the sales dashboard didn't match the count in the underwriting system.",
                    requirements: ["Examples of discrepancies", "Expected values", "Data sources"],
                    tags: ["troubleshooting", "investigation", "data-quality", "resolution"]
                },
                {
                    id: "performance-optimization",
                    title: "Performance Optimization",
                    icon: "⚡",
                    summary: "Make slow systems run faster",
                    description: "We make slow systems, reports, or processes run faster.",
                    timeframe: "1-3 weeks",
                    example: "We optimized the renewal processing workflow, reducing run time from 4 hours to 30 minutes.",
                    requirements: ["Performance expectations", "Current issues", "Usage patterns"],
                    tags: ["performance", "optimization", "speed", "efficiency"]
                },
                {
                    id: "user-training",
                    title: "User Training",
                    icon: "👩‍🏫",
                    summary: "Teach your team to use BI tools effectively",
                    description: "We teach your team how to use the tools we build effectively.",
                    timeframe: "1-2 days",
                    example: "We provided hands-on training for the claims team on how to use the new dashboard to identify cost-saving opportunities.",
                    requirements: ["Training audience", "Knowledge gaps", "Learning objectives"],
                    tags: ["training", "education", "support", "enablement"]
                },
                {
                    id: "documentation",
                    title: "Documentation",
                    icon: "📚",
                    summary: "Create clear instructions and guides",
                    description: "We create clear instructions on how systems work and how to use them.",
                    timeframe: "1-2 weeks",
                    example: "We created a comprehensive guide for the submission intake process with step-by-step instructions for new employees.",
                    requirements: ["Documentation audience", "Systems to document", "Format preferences"],
                    tags: ["documentation", "guides", "knowledge", "reference"]
                }
            ]
        },
        {
            id: "compliance-security",
            name: "Compliance & Security",
            description: "Protect data and meet regulatory requirement",
            icon: "✅",
            services: [
                {
                    id: "compliance-reporting",
                    title: "Compliance Reporting",
                    icon: "✅",
                    summary: "Reports for regulatory requirements",
                    description: "We build reports that help you meet regulatory requirements and audits.",
                    timeframe: "2-4 weeks",
                    example: "We created an automated report that shows all policies that need updated certificates, helping maintain compliance with state regulations.",
                    requirements: ["Regulatory requirements", "Reporting frequency", "Audit trails"],
                    tags: ["compliance", "regulatory", "reporting", "audit"]
                },
                {
                    id: "security-controls",
                    title: "Security Controls",
                    icon: "🔒",
                    summary: "Protect sensitive data with proper access",
                    description: "We implement systems to protect sensitive data and ensure proper access.",
                    timeframe: "2-3 weeks",
                    example: "We built role-based security for the claims system so users only see information appropriate for their position.",
                    requirements: ["Security requirements", "User roles", "Access matrix"],
                    tags: ["security", "access-control", "protection", "roles"]
                },
                {
                    id: "audit-support",
                    title: "Audit Support",
                    icon: "📋",
                    summary: "Tools to prepare for and respond to audits",
                    description: "We create tools to help you prepare for and respond to audits.",
                    timeframe: "2-4 weeks",
                    example: "We built a system that tracks all changes to policy data with timestamps and user information for audit purposes.",
                    requirements: ["Audit requirements", "Data retention needs", "Reporting formats"],
                    tags: ["audit", "tracking", "compliance", "history"]
                },
                {
                    id: "phi-pii-protection",
                    title: "PHI/PII Protection",
                    icon: "🛡️",
                    summary: "Safeguards for personal information",
                    description: "We implement special safeguards for personal and health information.",
                    timeframe: "2-3 weeks",
                    example: "We created a secure system to handle sensitive employee health information for workers comp claims while maintaining HIPAA compliance.",
                    requirements: ["Data elements", "Protection requirements", "Compliance standards"],
                    tags: ["privacy", "HIPAA", "PII", "protection"]
                },
                {
                    id: "data-governance",
                    title: "Data Governance",
                    icon: "📏",
                    summary: "Rules and processes for data management",
                    description: "We help establish rules and processes for managing data quality and access.",
                    timeframe: "3-5 weeks",
                    example: "We implemented a master data management system for school information to ensure consistency across all our systems.",
                    requirements: ["Governance objectives", "Data standards", "Stakeholder buy-in"],
                    tags: ["governance", "quality", "standards", "management"]
                }
            ]
        }
    ]
};