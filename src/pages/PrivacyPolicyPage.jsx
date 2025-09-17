import { Link } from "react-router-dom";
import {
    Shield,
    FileText,
    User,
    Database,
    Lock,
    Share2,
    Trash2,
    Gavel,
    Mail,
} from "lucide-react";

export default function PrivacyPolicy() {
    const sections = [
        {
            icon: User,
            title: "Information We Collect",
            content: (
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Personal Details:</strong> Name, email, phone number, address.</li>
                    <li><strong>Order Details:</strong> Laundry type, pickup/delivery schedule.</li>
                    <li><strong>Payment Information:</strong> Processed securely via third-party providers.</li>
                    <li><strong>Usage Data:</strong> Device, browser type, IP address, and interaction logs for service improvement.</li>
                </ul>
            ),
        },
        {
            icon: Database,
            title: "How We Use Your Data",
            content: (
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>To provide, manage, and improve our laundry services.</li>
                    <li>To process orders, payments, and deliveries.</li>
                    <li>To communicate updates, promotions, or service alerts.</li>
                    <li>To analyze trends and enhance customer experience.</li>
                </ul>
            ),
        },
        {
            icon: Lock,
            title: "Data Protection & Security",
            content: (
                <p className="text-gray-700">
                    We comply with the <strong>Data Privacy Act of 2012 (RA 10173)</strong> and implement
                    industry-standard security measures to protect your personal information.
                    Access is restricted to authorized personnel only.
                </p>
            ),
        },
        {
            icon: Share2,
            title: "Sharing & Disclosure",
            content: (
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>We do not sell or rent your data to third parties.</li>
                    <li>We may share data with trusted partners for payment processing, delivery, or legal compliance.</li>
                    <li>We may disclose information if required by law or to protect our legal rights.</li>
                </ul>
            ),
        },
        {
            icon: Trash2,
            title: "Data Retention & Deletion",
            content: (
                <p className="text-gray-700">
                    We keep your data only as long as necessary for providing services or as required by law.
                    You may request data deletion by contacting us at{" "}
                    <a href="mailto:support@laundryshop.com" className="text-blue-600 hover:underline">
                        support@laundryshop.com
                    </a>.
                </p>
            ),
        },
        {
            icon: Gavel,
            title: "Your Rights",
            content: (
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Right to Access:</strong> Request a copy of your personal data.</li>
                    <li><strong>Right to Rectification:</strong> Request corrections to inaccurate data.</li>
                    <li><strong>Right to Erasure:</strong> Request deletion of your data.</li>
                    <li><strong>Right to Withdraw Consent:</strong> Opt-out of marketing communications anytime.</li>
                </ul>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <Shield className="w-14 h-14 text-blue-700 mx-auto mb-4" />
                    <h1 className="text-4xl font-extrabold text-blue-800">
                        Privacy Policy
                    </h1>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        Your privacy matters to us. This policy explains how <strong>The Laundry Shop</strong> collects, uses, and protects your data in compliance with the Philippine Data Privacy Act of 2012.
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
                        <h2 className="text-xl font-bold text-blue-700 mb-2">Have Questions?</h2>
                        <p className="text-gray-700">
                            Email us at{" "}
                            <a href="mailto:support@laundryshop.com" className="text-blue-600 hover:underline">
                                support@laundryshop.com
                            </a>{" "}
                            or read our{" "}
                            <Link to="/terms" className="text-blue-600 hover:underline">
                                Terms & Conditions
                            </Link>{" "}
                            for more details.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
