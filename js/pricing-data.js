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
        hosting: "Shared",
        storage: "1 GB Storage",
        branches: "1 Branch",
        traffic: null, // Do not invent limit
        users: null, // Do not invent limit
      },
      highlights: [
        "Supplier & Purchasing Management",
        "Bank Accounts & MFS (bKash/Nagad) Ledger",
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
      badge: null,
      tagline: "For growing retail shops needing tighter daily control & offline resilience.",
      monthlyPrice: 1000,
      setupFee: 5000,
      limits: {
        products: "250 Products",
        hosting: "VPS",
        storage: "2 GB Storage",
        branches: "1 Branch",
        traffic: "Up to 5,000 visits / mo",
        users: "Up to 5 Admin Users",
      },
      highlights: [
        "All Starter Features included",
        "Smart POS & Offline Sync (Sell without internet)",
        "Single Courier Integration (Pathao or Steadfast)",
        "Sales Return & Exchange Processing",
        "Automatic Barcode Generation & Label Printing",
        "Cash Book, Bank Book & Petty Cash",
        "Daily Expense Tracking & Reports"
      ],
      ctaText: "Choose Basic",
      ctaType: "primary",
      isPopular: false
    },
    {
      id: "medium",
      name: "Medium",
      badge: null,
      tagline: "For established retail & apparel brands selling both online and offline.",
      monthlyPrice: 2000,
      setupFee: 8000,
      limits: {
        products: "350 Products",
        hosting: "AWS",
        storage: "4 GB Storage",
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
        hosting: "AWS",
        storage: "10 GB Storage",
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
          starter: true,
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
          starter: false,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Thermal Receipt (58mm/80mm) & A4 Invoices",
          tooltip: "Print on standard thermal roll printers or full A4 vouchers.",
          starter: false,
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
          starter: false,
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
          starter: true,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Purchase Orders & Goods Receiving Notes (GRN)",
          tooltip: "Formal PO creation, partial and full receiving against orders.",
          starter: true,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Supplier Payable & Due Ledger",
          tooltip: "Track outstanding supplier invoices, advance payments, and payment vouchers.",
          starter: true,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Purchase Return & Cancellation Workflow",
          tooltip: "Process damaged goods returns and debit notes to suppliers.",
          starter: true,
          basic: true,
          medium: true,
          high: true
        },
        {
          name: "Purchase Cost History & Price Fluctuations",
          tooltip: "Monitor vendor price adjustments and automatic product cost updates.",
          starter: true,
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
          starter: true,
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
          medium: true,
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
          tooltip: "Book parcels directly from the order list and print consignment labels. Basic plan includes choice of 1 courier (Pathao or Steadfast).",
          starter: false,
          basic: "1 Courier (Pathao/Steadfast)",
          medium: true,
          high: true
        },
        {
          name: "Steadfast Courier Booking & API",
          tooltip: "Direct API booking, pickup requests, and automated parcel status sync. Basic plan includes choice of 1 courier (Pathao or Steadfast).",
          starter: false,
          basic: "1 Courier (Pathao/Steadfast)",
          medium: true,
          high: true
        },
        {
          name: "REDX & Multi-Courier Simultaneous Dispatch",
          tooltip: "Dispatch through multiple delivery partners concurrently across different branches or zones.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "Courier COD Collection & Settlement Reconciliation",
          tooltip: "Reconcile received cash-on-delivery against courier remittance statements.",
          starter: false,
          basic: true,
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
          tooltip: "Analyze customer return rate history before accepting orders to minimize delivery failure costs.",
          starter: false,
          basic: true,
          medium: true,
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
          medium: true,
          high: true
        },
        {
          name: "AI Stock & Reorder Recommendations",
          tooltip: "AI detects fast/slow-moving goods and predicts reorder requirements.",
          starter: false,
          basic: false,
          medium: true,
          high: true
        },
        {
          name: "AI Shopping Assistant Bot for E-commerce Store",
          tooltip: "Interactive conversational bot on your web store to assist customers and close sales.",
          starter: false,
          basic: true,
          medium: true,
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
          name: "Hosting Infrastructure",
          tooltip: "High-performance deployment server architecture (Shared, VPS, or AWS Cloud).",
          starter: "Shared",
          basic: "VPS",
          medium: "AWS",
          high: "AWS"
        },
        {
          name: "Cloud Storage Capacity",
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

  // Value proposition cards for "Why Choose Our ERP" (কেন YES SME বেছে নেবেন)
  whyChooseUs: [
    {
      icon: "refresh-cw",
      title: "রিয়েল-টাইম স্টক ও সেলস সিঙ্ক",
      desc: "দোকানের কাউন্টারে পণ্য বিক্রি হওয়ার সাথে সাথেই ইনভেন্টরি থেকে স্টক কমে যাবে, অ্যাকাউন্টিংয়ে স্বয়ংক্রিয় ভাউচার পোস্ট হবে এবং অনলাইন স্টোরে লাইভ স্টক আপডেট হয়ে যাবে।"
    },
    {
      icon: "wifi-off",
      title: "জিরো-ডাউনটাইম অফলাইন POS",
      desc: "বিদ্যুৎ বা ইন্টারনেট চলে গেলেও আপনার দোকানের বিক্রি বন্ধ হবে না। ইন্টারনেট ছাড়াই দ্রুত বারকোড স্ক্যান, ক্যাশ মেমো তৈরি ও প্রিন্ট করা যাবে; নেট সংযোগ ফিরে এলে সকল ডাটা অটোমেটিক সিঙ্ক হবে।"
    },
    {
      icon: "map-pin",
      title: "সম্পূর্ণ দেশীয় ইন্টিগ্রেশন",
      desc: "বাংলাদেশের ব্যবসার বাস্তব চাহিদামাফিক বিকাশ ও নগদ পেমেন্ট, পাঠাও, স্টিডফাস্ট ও রেডেক্স কুরিয়ার ট্র্যাকিং এবং দেশীয় মুদ্রায় (BDT ৳) স্বয়ংক্রিয় হিসাবের সুবিধা।"
    },
    {
      icon: "bot",
      title: "বাংলায় এআই (AI) বিজনেস ইনসাইট",
      desc: "সহজ বাংলায় প্রশ্ন করেই জেনে নিন ব্যবসার সার্বিক অবস্থা—যেমন: 'আজকের মোট লাভ কত?', 'কার কাছে সবচেয়ে বেশি বকেয়া?'। এক্সেল শিট খোঁজার ঝামেলা ছাড়াই চোখের পলকে সঠিক উত্তর।"
    },
    {
      icon: "award",
      title: "সেলস টার্গেট ও কমিশন অটোমেশন",
      desc: "বিক্রয়কর্মীদের ব্যক্তিগত টার্গেট নির্ধারণ, পারফরম্যান্স ট্র্যাকিং এবং টিয়ার-ভিত্তিক সেলস কমিশন স্বয়ংক্রিয়ভাবে হিসাব হয়ে সরাসরি মাসিক পে-রোলে যুক্ত হবে।"
    },
    {
      icon: "shield-check",
      title: "নিজস্ব ব্র্যান্ডের মোবাইল অ্যাপ",
      desc: "আমাদের Medium ও High প্যাকেজে আপনার নিজস্ব ব্র্যান্ডিংয়ে ডেডিকেটেড Android এবং iOS মোবাইল অ্যাপ অন্তর্ভুক্ত, যা আপনার কাস্টমারদের আধুনিক কেনাকাটার সেরা অভিজ্ঞতা দেবে।"
    }
  ],

  // Frequently Asked Questions (বাংলায় সহজে বোধগম্য প্রশ্নোত্তর)
  faqs: [
    {
      question: "মাসিক সাবস্ক্রিপশন ফি এবং এককালীন (One-Time) সেটআপ ফির মধ্যে পার্থক্য কী?",
      answer: "মাসিক সাবস্ক্রিপশন ফি ক্লাউড সার্ভার হোস্টিং, নিরবচ্ছিন্ন ডাটা ব্যাকআপ, সিস্টেম রক্ষণাবেক্ষণ, নিয়মিত সফটওয়্যার আপডেট এবং সার্বক্ষণিক টেকনিক্যাল সাপোর্টের জন্য প্রযোজ্য। অপরদিকে, এককালীন সেটআপ ফি-এর মাধ্যমে আপনার দোকানের নামে সম্পূর্ণ ডাটাবেজ কনফিগারেশন, সার্ভার প্রোভিশনিং, চালান (Invoice) ও মেমোতে লোগো-ঠিকানা ব্র্যান্ডিং এবং আপনার টিমকে সফটওয়্যার ব্যবহারের প্রাথমিক ট্রেনিং প্রদান করা হয়।"
    },
    {
      question: "এককালীন সেটআপ ফিতে কী কী সুবিধা অন্তর্ভুক্ত থাকে?",
      answer: "সেটআপ ফি-এর মধ্যে রয়েছে: ক্লাউড সফটওয়্যারের প্রাথমিক ইনস্টলেশন, দোকানের নাম ও লোগো সম্বলিত কাস্টম ক্যাশ মেমো/চালান ডিজাইন, বিকাশ/নগদ ও ব্যাংক পেমেন্ট মেথড কনফিগারেশন, ইউজার ও ক্যাশিয়ার অ্যাকাউন্ট তৈরি এবং আপনার সেলস ও অ্যাকাউন্টস টিমকে সফটওয়্যার ব্যবহারের বিস্তারিত গাইডলাইন প্রদান।"
    },
    {
      question: "ইন্টারনেট সংযোগ না থাকলে বা বিদ্যুৎ চলে গেলে অফলাইন POS কীভাবে কাজ করে?",
      answer: "আমাদের অফলাইন POS সিস্টেমে আপনার সকল পণ্যের তালিকা, স্টক মূল্য এবং বারকোড ব্রাউজারে বা লোকাল ডিভাইসে সংরক্ষিত থাকে। ফলে ইন্টারনেট সংযোগ বিচ্ছিন্ন থাকলেও আপনি স্বাভাবিকভাবে বারকোড স্ক্যান, ক্যাশ মেমো তৈরি, নগদ বিক্রি এবং থার্মাল রসিদ প্রিন্ট করতে পারবেন। পরবর্তীতে ইন্টারনেট সংযোগ ফিরে এলে সকল অফলাইন বিক্রয়ের ডাটা কোনো গড়মিল ছাড়াই স্বয়ংক্রিয়ভাবে মূল ক্লাউড ডাটাবেজে যুক্ত (Sync) হয়ে যাবে।"
    },
    {
      question: "ব্যবসা সম্প্রসারিত হলে কি পরবর্তীতে ছোট প্যাকেজ থেকে বড় প্যাকেজে আপগ্রেড করা যাবে?",
      answer: "হ্যাঁ, যেকোনো সময় আপনি খুব সহজে ছোট প্যাকেজ থেকে বড় প্যাকেজে আপগ্রেড করতে পারবেন। আপনার পূর্বের সকল বিক্রয় হিস্ট্রি, স্টক ডাটা, কাস্টমার বাকি-বকেয়া ও অ্যাকাউন্টিং তথ্য সম্পূর্ণ সুরক্ষিত থাকবে এবং কোনো জটিলতা ছাড়াই স্বয়ংক্রিয়ভাবে নতুন প্যাকেজে স্থানান্তরিত হবে।"
    },
    {
      question: "কোন প্যাকেজগুলোতে নিজস্ব ব্র্যান্ডের মোবাইল অ্যাপ (Android ও iOS) পাওয়া যাবে?",
      answer: "আমাদের Medium (২,০০০ টাকা/মাস) এবং High (৩,০০০ টাকা/মাস) প্যাকেজে আপনার নিজস্ব দোকানের নামে ডেডিকেটেড Android এবং iOS মোবাইল অ্যাপ অন্তর্ভুক্ত রয়েছে। এর মাধ্যমে কাস্টমাররা সরাসরি অ্যাপ থেকে পণ্য অর্ডার করতে পারবেন এবং আপনি যেকোনো স্থান থেকে মোবাইলেই ব্যবসার লাইভ সেলস ও স্টক রিপোর্ট দেখতে পারবেন।"
    },
    {
      question: "বিকাশ, নগদ এবং কুরিয়ার সার্ভিস (পাঠাও, স্টিডফাস্ট ইত্যাদি) কীভাবে সফটওয়্যারের সাথে কাজ করে?",
      answer: "Medium ও High প্যাকেজে আপনার বিকাশ, নগদ ও SSLCommerz মার্চেন্ট অ্যাকাউন্ট সফটওয়্যারের সাথে অটোমেটিক যুক্ত থাকে। এছাড়া পাঠাও, স্টিডফাস্ট ও রেডেক্স (REDX) কুরিয়ারের সাথে সরাসরি ইন্টিগ্রেশন থাকায় আপনি এক ক্লিকেই পার্সেল এন্ট্রি, শিপিং লেবেল প্রিন্ট এবং ক্যাশ-অন-ডেলিভারি (COD) পেমেন্ট রিকনসিলিয়েশন করতে পারবেন।"
    },
    {
      question: "পণ্যের সংখ্যা বা হোস্টিং স্টোরেজ লিমিট শেষ হয়ে গেলে কী করণীয়?",
      answer: "আপনার ব্যবহৃত পণ্যের সংখ্যা বা ক্লাউড স্টোরেজ যখন ৮৫% বা ৯৫% এ পৌঁছাবে, সিস্টেম স্বয়ংক্রিয়ভাবে আপনাকে নোটিফিকেশন প্রদান করবে। আপনার কোনো বিলিং বা সেলস বন্ধ হবে না; আপনি সহজেই পরবর্তী প্যাকেজে আপগ্রেড করতে পারবেন অথবা অতিরিক্ত স্টোরেজ অ্যাড-অন যুক্ত করে নিতে পারবেন।"
    },
    {
      question: "আমাদের ব্যবসার নিজস্ব নিয়ম বা কাস্টম মডিউল কি সফটওয়্যারে যুক্ত করা সম্ভব?",
      answer: "অবশ্যই! আপনার ব্যবসার কাজের ধরন যদি বিশেষায়িত হয় বা নিজস্ব কোনো সফটওয়্যারের সাথে ইন্টিগ্রেশনের প্রয়োজন থাকে, তবে আমাদের Custom / Enterprise প্ল্যানের আওতায় আপনার চাহিদা অনুযায়ী কাস্টম ফিচার বা মডিউল ডেভেলপ করে দেওয়া হবে। বিস্তারিত পরামর্শের জন্য আমাদের সেলস টিমের সাথে যোগাযোগ করুন।"
    }
  ]
};
