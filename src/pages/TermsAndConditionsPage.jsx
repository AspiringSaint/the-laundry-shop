import { Link } from "react-router-dom";
import {
    FileText,
    UserCheck,
    Package,
    CreditCard,
    AlertTriangle,
    Shield,
    Gavel,
    Mail,
    Ban,
    RefreshCw,
    Copyright,
    Edit3,
    Users,
    Truck,
    ExternalLink,
    Scissors,
    Scale,
} from "lucide-react";

export default function TermsAndConditions() {
    const sections = [
        {
            icon: FileText,
            title: "Definitions",
            content: (
                <p className="text-gray-700">
                    “We,” “our,” and “us” refer to <strong>The Laundry Shop</strong>.
                    “You” refers to the customer using our services.
                    “Services” means laundry pickup, cleaning, delivery, and any use of our website or mobile app.
                </p>
            ),
        },
        {
            icon: UserCheck,
            title: "Acceptance of Terms",
            content: (
                <p className="text-gray-700">
                    By accessing or booking our services, you confirm that you are at least 18 years old
                    and legally capable of entering into this agreement.
                    If you are under 18, you must have the consent and supervision of a parent or legal guardian.
                </p>
            ),
        },
        {
            icon: Users,
            title: "Customer Responsibilities",
            content: (
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Ensure all items are ready and available for pickup at the scheduled time.</li>
                    <li>Separate delicate or special-care items and provide written instructions if needed.</li>
                    <li>Remove valuables, loose change, and personal belongings from pockets.</li>
                    <li>Provide accurate delivery address and contact information.</li>
                </ul>
            ),
        },
        {
            icon: Package,
            title: "Service Scope",
            content: (
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Pickup and delivery schedules may vary by location.</li>
                    <li>
                        We take care of your clothes but are not responsible for:
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Pre-existing damage, stains, or fabric defects.</li>
                            <li>Normal wear, tear, or manufacturer faults.</li>
                            <li>Items left in pockets (please check before pickup).</li>
                        </ul>
                    </li>
                    <li>Special instructions must be communicated before pickup.</li>
                </ul>
            ),
        },
        {
            icon: Truck,
            title: "Turnaround Time & Delivery",
            content: (
                <p className="text-gray-700">
                    Standard turnaround time is typically 24-48 hours, unless otherwise communicated.
                    Delays may occur during holidays or unforeseen events.
                    We will notify you of any schedule adjustments.
                </p>
            ),
        },
        {
            icon: Scissors,
            title: "Lost or Damaged Items",
            content: (
                <p className="text-gray-700">
                    We exercise utmost care but are not liable for:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Items that shrink, stretch, or fade due to manufacturer defects.</li>
                        <li>Items with dry-clean-only labels sent for washing.</li>
                        <li>Color bleeding due to poor fabric quality.</li>
                    </ul>
                    In cases of proven negligence, compensation is limited to five (5) times the service charge of the affected item.
                </p>
            ),
        },
        {
            icon: CreditCard,
            title: "Pricing & Payment",
            content: (
                <p className="text-gray-700">
                    Prices are displayed on our website/app and may change at any time without prior notice.
                    Payments must be made via cash, card, or approved online payment channels.
                    Failure to pay on time may result in suspension of services.
                </p>
            ),
        },
        {
            icon: RefreshCw,
            title: "Cancellations & Refunds",
            content: (
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>You may cancel or reschedule pickups up to 2 hours before the scheduled time.</li>
                    <li>No refunds for services already completed or in progress.</li>
                    <li>Refund requests must be made within 7 days of the original service date.</li>
                </ul>
            ),
        },
        {
            icon: Ban,
            title: "Prohibited Items",
            content: (
                <p className="text-gray-700">
                    Customers must not submit:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Hazardous or flammable items (e.g., fuel-soaked fabrics).</li>
                        <li>Items infested with bedbugs or other pests.</li>
                        <li>Items containing valuables, cash, or documents.</li>
                    </ul>
                    We reserve the right to refuse service if such items are discovered.
                </p>
            ),
        },
        {
            icon: AlertTriangle,
            title: "Liability",
            content: (
                <>
                    <p className="text-gray-700 mb-3">
                        Our liability is limited to five (5) times the cost of cleaning the item,
                        in accordance with Philippine industry standards.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>We are not liable for delays caused by natural disasters or force majeure.</li>
                        <li>We are not responsible for damage caused by customer-provided incorrect information.</li>
                    </ul>
                </>
            ),
        },
        {
            icon: ExternalLink,
            title: "Third-Party Services",
            content: (
                <p className="text-gray-700">
                    Our website or app may contain links to third-party services.
                    We are not responsible for the content, policies, or practices of these external sites.
                </p>
            ),
        },
        {
            icon: Shield,
            title: "Privacy Policy",
            content: (
                <p className="text-gray-700">
                    Your data is processed according to the Data Privacy Act of 2012 (RA 10173).
                    Read our <Link to={"/privacy-policy"} className="text-blue-600 hover:underline">Privacy Policy </Link>
                    to learn how we collect, use, and store your information.
                </p>
            ),
        },
        {
            icon: Copyright,
            title: "Intellectual Property",
            content: (
                <p className="text-gray-700">
                    All logos, branding, website design, and content are the property of <strong>The Laundry Shop </strong>
                    and may not be copied, modified, or used without prior written permission.
                </p>
            ),
        },
        {
            icon: Edit3,
            title: "Modifications to Terms",
            content: (
                <p className="text-gray-700">
                    We may update these terms from time to time. Changes will be posted on this page,
                    and continued use of our services constitutes acceptance of updated terms.
                </p>
            ),
        },
        {
            icon: Scale,
            title: "Severability & Entire Agreement",
            content: (
                <p className="text-gray-700">
                    If any provision of these terms is found invalid, the remaining provisions shall still apply.
                    These terms constitute the entire agreement between you and us regarding the use of our services.
                </p>
            ),
        },
        {
            icon: Gavel,
            title: "Governing Law",
            content: (
                <p className="text-gray-700">
                    These terms are governed by the laws of the Republic of the Philippines.
                    Any disputes will be handled by the courts where our business is registered.
                </p>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <FileText className="w-14 h-14 text-blue-700 mx-auto mb-4" />
                    <h1 className="text-4xl font-extrabold text-blue-800">
                        Terms & Conditions
                    </h1>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        Please read these terms carefully before using our services.
                        By booking with <span className="font-semibold">The Laundry Shop</span>, you agree to these terms.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-8">
                    {sections.map((sec, i) => {
                        const Icon = sec.icon;
                        return (
                            <section
                                key={i}
                                className="bg-white rounded-2xl shadow-md p-6"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold">
                                        {i + 1}
                                    </div>
                                    <Icon className="w-6 h-6 text-blue-600" />
                                    <h2 className="text-xl font-bold text-blue-700">{sec.title}</h2>
                                </div>
                                {sec.content}
                            </section>
                        );
                    })}

                    {/* Contact Section */}
                    <section className="bg-white rounded-2xl shadow-md p-6 text-center">
                        <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                        <h2 className="text-xl font-bold text-blue-700 mb-2">Questions?</h2>
                        <p className="text-gray-700">
                            Email us at <span className="font-semibold">support@laundryshop.com </span>
                            or call us at <span className="font-semibold">(123) 456-7890</span>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
