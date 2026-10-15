/**
 * YES SME - ERP & E-commerce SaaS Pricing & Package Data
 * Centralized Single Source of Truth
 */

const PRICING_DATA = {
  currency: {
    symbol: "৳",
    code: "BDT",
    label: "BDT (Bangladeshi Taka)"
  },

  packages: [
    {
      id: "starter",
      name: "Starter",
      badge: null,
      tagline: "For small shops & startups beginning their digital journey.",
      monthlyPrice: 500,
      setupFee: 3000,
      limits: {
        products: "200 Products",
        hosting: "1 GB Storage",
        branches: "1 Branch",
        traffic: null, // Do not invent limit
        users: null, // Do not invent limit
      },
      highlights: [
        "Essential POS & Sales Management",
        "Basic Inventory Management",
        "Simple Stock Adjustment & Opening Stock",
        "AI-Powered Sales Reporting",
        "Customer Due Reminder SMS",
        "Mobile-Responsive Admin Panel"
      ],
      ctaText: "Get Started",
      ctaType: "primary",
      isPopular: false
    },
    {
      id: "basic",
      name: "Basic",
      badge: "Popular Choice",
      tagline: "For growing retail shops needing tighter daily control & offline resilience.",
      monthlyPrice: 1000,
      setupFee: 5000,
      limits: {
        products: "250 Products",
        hosting: "2 GB Storage",
        branches: "1 Branch",
        traffic: "Up to 5,000 visits / mo",
        users: "Up to 5 Admin Users",
      },
      highlights: [
        "All Starter Features included",
        "Offline POS with Automatic Sync (Sell without internet)",
        "Sales Return & Exchange Processing",
        "Automatic Barcode Generation & Label Printing",
        "Purchase & Supplier Management",
        "Cash Book, Bank Book & Petty Cash",
        "Daily Expense Tracking & Reports"
      ],
      ctaText: "Choose Basic",
      ctaType: "accent",
      isPopular: true
    },
    {
      id: "medium",
      name: "Medium",
      badge: "Best Value",
      tagline: "For established retail & apparel brands selling both online and offline.",
      monthlyPrice: 2000,
      setupFee: 8000,
      limits: {
        products: "350 Products",
        hosting: "4 GB Storage",
        branches: "2 Branches",
        traffic: "Up to 10,000 visits / mo",
        users: "Up to 10 Admin Users",
      },
      highlights: [
        "All Basic Features included",
        "Dedicated E-commerce Website",
        "Dedicated Mobile Apps (Android & iOS)",
        "Online Payment Integration (bKash, Nagad, SSLCommerz)",
        "Pathao, Steadfast & REDX Courier Integration",
        "Advanced Accounting & Financial Reports",
        "Multi-Warehouse Inventory Management",
        "CRM, Sales Team & Loyalty Management"
      ],
      ctaText: "Choose Medium",
      ctaType: "primary",
      isPopular: false
    },
    {
      id: "high",
      name: "High",
      badge: "Complete Suite",
      tagline: "For large retail chains, super shops & enterprises demanding total automation.",
      monthlyPrice: 3000,
      setupFee: 15000,
      limits: {
        products: "Unlimited Products",
        hosting: "10 GB Storage",
        branches: "5 Branches",
        traffic: "Unlimited (Subject to fair-use)",
        users: "Unlimited Admin Users",
      },
      highlights: [
        "All Medium Features included",
        "Dedicated Mobile Apps (Android & iOS)",
        "Unlimited Product Capacity",
        "Multi-Branch & Centralized Management",
        "AI-Powered Business Intelligence (Sales, Stock & Accounts)",
        "AI Shopping Assistant for E-commerce",
        "Facebook & Instagram Marketing Automation",
        "Advanced Security, Permissions & Audit Trails"
      ],
      ctaText: "Upgrade to High",
      ctaType: "primary",
      isPopular: false
    }
  ],

  // Enterprise / Custom plan (presented separately, excluded from comparison table)
  customEnterprise: {
    id: "custom",
    name: "Custom / Enterprise",
    badge: "Tailored Architecture",
    tagline: "For businesses requiring specialized workflows, private infrastructure, or tailored ERP modules.",
    priceDisplay: "Custom Pricing",
    setupFeeDisplay: "Scope-based setup & migration",
    highlights: [
      "Custom Modules & Workflows",
      "Tailored Integrations (Custom APIs & Systems)",
      "Flexible Business Requirements & Logic",
      "Custom Implementation, Cloud Architecture & Dedicated Support"
    ],
    ctaText: "Contact Sales",
    ctaType: "outline"
  },

  // 13 Detailed Comparison Categories (Only Starter, Basic, Medium, High)
  comparisonCategories: [
    {
      id: "product_ecommerce",
      title: "Product & E-commerce",
      icon: "shopping-bag",
      features: [
        {
          name: "Product Capacity",
          tooltip: "Total number of active products allowed in the catalog.",
          starter: "200 Products",
          basic: "250 Products",
          medium: "350 Products",
          high: "Unlimited"
        },
        {
          name: "Product Variants (Size, Color, Weight)",
          tooltip: "Manage variant-level SKU, barcodes, pricing, and stock.",
          starter: false,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Automatic Barcode Generation & Printing",
          tooltip: "Generate Code-128 / EAN barcodes and print thermal sticker labels.",
          starter: false,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Bulk Excel / CSV Product Import & Export",
          tooltip: "Upload hundreds of items at once with batch price update.",
          starter: false,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Integrated E-commerce Web Storefront",
          tooltip: "Full responsive online shop directly connected to your ERP inventory.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "E-commerce Website Themes & Custom Branding",
          tooltip: "Custom logo, hero banners, brand colors, and promotional sections.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "Customer Reviews, Wishlist & Order Tracking",
          tooltip: "Engage online buyers with live delivery status and reviews.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        }
      ]
    },
    {
      id: "pos_sales",
      title: "POS & Sales Operations",
      icon: "terminal",
      features: [
        {
          name: "Smart POS Billing System",
          tooltip: "Quick barcode scanning, search by SKU/name, touchscreen cart.",
          starter: true,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Thermal Receipt (58mm/80mm) & A4 Invoices",
          tooltip: "Print on standard thermal roll printers or full A4 vouchers.",
          starter: true,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Offline POS with Automatic Sync",
          tooltip: "Record sales without internet connectivity; automatically synchronizes when connection returns.",
          starter: false,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Multiple Payment Split (Cash, bKash, Nagad, Card, Due)",
          tooltip: "Accept split payments on a single invoice (e.g. 50% Cash + 50% bKash).",
          starter: "Basic Cash/Due",
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Sales Return & Exchange Management",
          tooltip: "Effortlessly process customer returns, refunds, or replacement items.",
          starter: false,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Hold & Resume Invoices / Draft Sales",
          tooltip: "Save pending carts during peak counter rushes and retrieve anytime.",
          starter: true,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Cashier Shift & Cash Register Closing",
          tooltip: "Track opening cash, expected cash vs actual cash, shortage reports.",
          starter: false,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Installment (কিস্তি) Sales Tracking",
          tooltip: "Scheduled installment due dates, down-payment, and payment reminders.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        }
      ]
    },
    {
      id: "inventory_warehousing",
      title: "Inventory & Warehousing",
      icon: "archive",
      features: [
        {
          name: "Real-time Stock Tracking",
          tooltip: "Stock balance updates immediately after each sale, purchase, or return.",
          starter: true,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Low-Stock & Out-of-Stock Alerts",
          tooltip: "Automated notifications when inventory drops below reorder thresholds.",
          starter: true,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Stock Adjustment & Opening Balance",
          tooltip: "Manually adjust stock counts or set initial inventory balances.",
          starter: true,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Multi-Warehouse Management",
          tooltip: "Manage separate physical warehouses with dedicated stock levels.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "Inter-Warehouse Stock Transfer & In-Transit Tracking",
          tooltip: "Dispatch and receive stock across godowns with approval workflows.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "Batch, Lot & Expiry Date Tracking",
          tooltip: "Essential for medicine, cosmetics, and perishable packaged foods.",
          starter: false,
          basic: false,
          medium: "To Be Confirmed",
          high: true
        },
        {
          name: "Serial Number & Warranty Management",
          tooltip: "Track unique serial numbers for electronics and track warranty periods.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "Dead Stock & Slow-Moving Stock Analysis",
          tooltip: "Identify non-performing inventory to prevent locked capital.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        }
      ]
    },
    {
      id: "purchasing_suppliers",
      title: "Purchasing & Suppliers",
      icon: "truck",
      features: [
        {
          name: "Supplier Profiles & Contact Database",
          tooltip: "Maintain complete vendor details and opening balances.",
          starter: false,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Purchase Orders & Goods Receiving Notes (GRN)",
          tooltip: "Formal PO creation, partial and full receiving against orders.",
          starter: false,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Supplier Payable & Due Ledger",
          tooltip: "Track outstanding supplier invoices, advance payments, and payment vouchers.",
          starter: false,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Purchase Return & Cancellation Workflow",
          tooltip: "Process damaged goods returns and debit notes to suppliers.",
          starter: false,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Purchase Cost History & Price Fluctuations",
          tooltip: "Monitor vendor price adjustments and automatic product cost updates.",
          starter: false,
          basic: true,
          medium: true,
          high: true
        }
      ]
    },
    {
      id: "accounting_finance",
      title: "Accounting & Finance",
      icon: "dollar-sign",
      features: [
        {
          name: "Cash Book & Daily Expense Tracker",
          tooltip: "Record daily operational expenses and petty cash movements.",
          starter: "Basic Notes",
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Bank Accounts & MFS (bKash/Nagad) Ledger",
          tooltip: "Manage multiple bank and mobile money accounts in one view.",
          starter: false,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Full Double-Entry Accounting Engine",
          tooltip: "Chart of accounts, general ledger, journal vouchers, and contra entries.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "Automated Financial Statements (P&L, Balance Sheet, Cash Flow)",
          tooltip: "Generate real-time Profit & Loss and Balance Sheets without manual bookkeeping.",
          starter: false,
          basic: "Standard Summary",
          medium: true,
          high: true
        },
        {
          name: "Bangladesh VAT Configuration & Mushak Reports",
          tooltip: "NBR-aligned VAT calculations, sales/purchase VAT ledgers, and audit files.",
          starter: "Simple VAT %",
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Fixed Assets & Depreciation Tracking",
          tooltip: "Record company assets, schedules, and asset write-offs.",
          starter: false,
          basic: false,
          medium: false,
          high: true
        }
      ]
    },
    {
      id: "courier_logistics",
      title: "Courier & Logistics",
      icon: "send",
      features: [
        {
          name: "Direct Pathao Courier Booking & API",
          tooltip: "Book parcels directly from the order list and print consignment labels.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "Steadfast & REDX Courier Integration",
          tooltip: "Multi-courier dispatch with automated tracking code sync.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "Courier COD Collection & Settlement Reconciliation",
          tooltip: "Reconcile received cash-on-delivery against courier remittance statements.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "Automated Shipping Label & Invoice Generation",
          tooltip: "Bulk thermal label printing with barcoded consignment numbers.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "Courier Fraud / Delivery Risk Assessment",
          tooltip: "Analyze customer return rate history before accepting orders.",
          starter: false,
          basic: false,
          medium: false,
          high: true
        }
      ]
    },
    {
      id: "crm_loyalty",
      title: "CRM & Customer Loyalty",
      icon: "heart",
      features: [
        {
          name: "Customer Profiles & Purchase History",
          tooltip: "Maintain complete customer records, addresses, and order records.",
          starter: true,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Customer Due Tracking & Credit Limit Alerts",
          tooltip: "Set maximum credit caps and monitor overdue receivable aging.",
          starter: "Basic Due",
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Due Reminder SMS Notification",
          tooltip: "Send automated SMS reminders for pending customer balances.",
          starter: true,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Digital Loyalty Card & QR Code Membership",
          tooltip: "Customer membership cards with unique QR/barcode for scan-to-identify.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "Loyalty Points Engine & Tiered Membership",
          tooltip: "Reward points per ৳100 spent; Silver, Gold, Platinum VIP tiers.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "Customer Segmentation (Retail, Wholesale, VIP)",
          tooltip: "Group customers for personalized marketing and custom price tiers.",
          starter: false,
          basic: true,
          medium: true,
          high: true
        }
      ]
    },
    {
      id: "mobile_applications",
      title: "Mobile Applications",
      icon: "smartphone",
      features: [
        {
          name: "Mobile-Responsive Admin Web Panel",
          tooltip: "Optimized dashboard accessible on any mobile or tablet browser.",
          starter: true,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Dedicated Mobile Apps (Android & iOS)",
          tooltip: "Dedicated branded native/hybrid mobile apps published on Play Store & App Store.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "PWA (Progressive Web App) Installable Support",
          tooltip: "Install app icon on desktop and phone home screens directly from browser.",
          starter: true,
          basic: true,
          medium: true,
          high: true
        }
      ]
    },
    {
      id: "hr_payroll",
      title: "HR, Employees & Payroll",
      icon: "users",
      features: [
        {
          name: "Employee Profiles & Role Assignments",
          tooltip: "Designate cashiers, managers, and salesmen to specific branches.",
          starter: false,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Employee-wise Sales Performance Tracking",
          tooltip: "Track which salesperson generated each invoice, volume, and gross profit.",
          starter: false,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Sales Targets, Leaderboards & Commissions",
          tooltip: "Define individual or branch sales targets and percentage commissions.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "Automated Monthly Payroll & Salary Sheets",
          tooltip: "Calculate base pay, overtime, commissions, bonus, and deductions.",
          starter: false,
          basic: false,
          medium: "To Be Confirmed",
          high: true
        },
        {
          name: "Attendance & Leave Management Calendar",
          tooltip: "Check-in/out logging, paid/unpaid leaves, and holiday calendars.",
          starter: false,
          basic: false,
          medium: false,
          high: true
        }
      ]
    },
    {
      id: "ai_automation",
      title: "AI & Business Intelligence",
      icon: "cpu",
      features: [
        {
          name: "AI-Powered Sales Reporting",
          tooltip: "Smart sales analytics and instant summary generation.",
          starter: true,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Bilingual AI Business Assistant (Bangla & English)",
          tooltip: "Ask questions in conversational Bangla (আজ কত টাকার বিক্রি হয়েছে?) and get live data.",
          starter: false,
          basic: false,
          medium: false,
          high: true
        },
        {
          name: "AI Stock & Reorder Recommendations",
          tooltip: "AI detects fast/slow-moving goods and predicts reorder requirements.",
          starter: false,
          basic: false,
          medium: false,
          high: true
        },
        {
          name: "AI Shopping Assistant Bot for E-commerce Store",
          tooltip: "Interactive conversational bot on your web store to assist customers and close sales.",
          starter: false,
          basic: false,
          medium: false,
          high: true
        },
        {
          name: "Meta Ads (Facebook/Instagram) Automation & AI Copy",
          tooltip: "Automated ad campaign creation, AI headlines, copy variations, and competitor ad library research.",
          starter: false,
          basic: false,
          medium: false,
          high: true
        }
      ]
    },
    {
      id: "multi_branch",
      title: "Multi-Branch Management",
      icon: "layers",
      features: [
        {
          name: "Single Outlet / Store Management",
          tooltip: "Manage a single shop location or online-only outlet.",
          starter: true,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Multi-Branch Outlets & Branch Managers",
          tooltip: "Add multiple physical outlets with dedicated branch manager permissions.",
          starter: "1 Branch",
          basic: "1 Branch",
          medium: "2 Branches",
          high: "5 Branches"
        },
        {
          name: "Centralized Product Catalog & Pricing",
          tooltip: "Control products globally or allow branch-specific price tiers.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "Head Office Master Dashboard & Branch P&L Comparison",
          tooltip: "Compare revenue, expenses, and profits across all branches side-by-side.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        }
      ]
    },
    {
      id: "security_reporting",
      title: "Security, Roles & Advanced Reporting",
      icon: "shield",
      features: [
        {
          name: "Admin User Limit",
          tooltip: "Number of staff accounts with administrative access.",
          starter: "To Be Confirmed",
          basic: "Up to 5 Users",
          medium: "Up to 10 Users",
          high: "Unlimited Users"
        },
        {
          name: "Cloud Hosting Capacity",
          tooltip: "Dedicated cloud storage for catalog images, databases, and invoices.",
          starter: "1 GB",
          basic: "2 GB",
          medium: "4 GB",
          high: "10 GB"
        },
        {
          name: "Monthly Web Traffic",
          tooltip: "E-commerce and admin web traffic bandwidth.",
          starter: "Fair Usage",
          basic: "Up to 5,000 visits",
          medium: "Up to 10,000 visits",
          high: "Unlimited (Fair-use)"
        },
        {
          name: "Granular Role-Based Permissions (RBAC)",
          tooltip: "Restrict cashier from seeing purchase costs, delete permissions, or financial reports.",
          starter: "Standard",
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Complete Audit Trail & User Activity Logs",
          tooltip: "Track who created, modified, or canceled any invoice or transaction.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "Automated Daily Cloud Backups",
          tooltip: "Nightly automated encrypted backups to protect business records.",
          starter: true,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Export to PDF, Excel & CSV",
          tooltip: "Download financial and inventory reports in formatted spreadsheets and PDFs.",
          starter: "PDF Only",
          basic: true,
          medium: true,
          high: true
        }
      ]
    }
  ],

  // Value proposition cards for "Why Choose Our ERP"
  whyChooseUs: [
    {
      icon: "refresh-cw",
      title: "True All-in-One Synchronization",
      desc: "When a sale happens at the counter, your stock decreases, accounting entries are auto-posted, sales commission is recorded, and e-commerce inventory syncs in real time."
    },
    {
      icon: "wifi-off",
      title: "Zero-Downtime Offline POS",
      desc: "Never lose a sale during internet outages or power cuts. The POS continues barcode scanning and cash billing offline, auto-syncing seamlessly when connection returns."
    },
    {
      icon: "map-pin",
      title: "Built Specially for Bangladesh",
      desc: "Pre-integrated with bKash, Nagad, SSLCommerz, Pathao, Steadfast courier logistics, and native BDT currency formatting."
    },
    {
      icon: "bot",
      title: "Conversational AI Intelligence",
      desc: "Ask business questions in natural Bangla or English ('আজকের মোট লাভ কত?') to get instant insights without digging through complex accounting books."
    },
    {
      icon: "award",
      title: "Sales Target & Bonus Automation",
      desc: "Empower your sales team with automated target tracking, tier-based commissions, and dynamic bonuses calculated directly into payroll."
    },
    {
      icon: "shield-check",
      title: "Enterprise Security & Audit Trail",
      desc: "Granular role permissions, cashier cash reconciliation, two-factor authentication, and tamper-proof transaction logs safeguard your business."
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      question: "What is the difference between the monthly subscription and the one-time setup fee?",
      answer: "The monthly subscription covers continuous cloud hosting, system maintenance, software updates, data backups, and technical support. The one-time setup fee covers initial account configuration, cloud server provisioning, database setup, branding integration, and initial onboarding assistance for your team."
    },
    {
      question: "What exactly is included in the one-time setup fee?",
      answer: "The setup fee covers full initial environment deployment, custom invoice and receipt template branding with your store logo and address, configuration of payment methods, user account setups, and hands-on guidance to help your team start operating smoothly."
    },
    {
      question: "How does the Offline POS work when the internet is down?",
      answer: "Our Offline POS caches your product catalog, prices, and barcodes locally in the browser/device. You can continue scanning barcodes, generating customer bills, taking cash payments, and printing receipts without an internet connection. Once your connection is restored, all offline transactions automatically synchronize to the central cloud database with built-in conflict prevention."
    },
    {
      question: "Can I upgrade or downgrade my package as my business grows?",
      answer: "Yes, absolutely! You can upgrade to a higher tier at any time as your transaction volume, product count, or branch network expands. All your historical sales, inventory, and accounting data will remain completely intact and transition seamlessly."
    },
    {
      question: "Which plans include the Dedicated Mobile Apps (Android & iOS)?",
      answer: "Both the Medium (৳2,000/mo) and High (৳3,000/mo) packages explicitly include dedicated mobile applications for both Android and iOS platforms, allowing your business to provide a branded shopping and management app experience."
    },
    {
      question: "How do online payment gateways and couriers integrate with the ERP?",
      answer: "For Medium and High plans, you can connect your merchant accounts for bKash, Nagad, and SSLCommerz for automated online payment validation. Courier integrations with Pathao, Steadfast, and REDX allow you to book consignments with a single click, print shipping labels, track parcels, and reconcile cash-on-delivery payments."
    },
    {
      question: "What happens if I exceed my product or hosting storage limits?",
      answer: "We will proactively notify you when you approach 85% and 95% of your plan's storage or product limit. You can seamlessly upgrade to the next tier or request a flexible storage add-on without experiencing any downtime or disruption."
    },
    {
      question: "Can I request custom modules or tailored enterprise integrations?",
      answer: "Yes! Our Custom / Enterprise tier is tailored specifically for businesses with unique operating procedures, specialized production pipelines, or legacy system integrations. Contact our sales team for an architecture consultation and tailored proposal."
    }
  ]
};
