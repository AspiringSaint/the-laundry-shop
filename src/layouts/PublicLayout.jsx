import { Outlet } from "react-router-dom";
import { WashingMachine } from "lucide-react";

// import backgroundImage from '../images/l2.jpg';

const PublicLayout = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
            // style={{ backgroundImage: `url(${backgroundImage})`}}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 to-blue-200/80 backdrop-blur-sm"></div>

            {/* Card */}
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                {/* Logo + App Title */}
                <div className="flex flex-col items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-3">
                        <WashingMachine size={32} strokeWidth={1.5} />
                    </div>
                    <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
                        The Laundry Shop
                    </h1>
                    <p className="text-sm text-gray-500">
                        Manage your laundry with ease
                    </p>
                </div>

                {/* Auth Pages Render Here */}
                <Outlet />
            </div>
        </div>
    );
};

export default PublicLayout;
