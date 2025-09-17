import { useState } from "react"
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const RegisterPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1 className="text-xl font-semibold text-center mb-6">
                Create an Account
            </h1>

            <form onSubmit={handleRegister} className="space-y-4">
                <div className="flex items-center border rounded-lg px-3 py-2">
                    <Mail size={20} className="text-gray-500 mr-2" />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 outline-none"
                    />
                </div>

                <div className="flex items-center border rounded-lg px-3 py-2">
                    <Lock size={20} className="text-gray-500 mr-2" />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        className="flex-1 outline-none"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="text-gray-500 cursor-pointer"
                    >
                        {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                </div>

                <div className="flex items-center border rounded-lg px-3 py-2">
                    <Lock size={20} className="text-gray-500 mr-2" />
                    <input
                        type="password"
                        name="confirm"
                        id="confirm"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="flex-1 outline-none"
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="text-gray-500 cursor-pointer"
                    >
                        {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                </div>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                    Sign In
                </Link>
            </div>
        </div>
    )
}

export default RegisterPage