import { useState } from "react"
import { Link } from "react-router-dom";

import { Mail, Lock, Eye, EyeOff } from "lucide-react"

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <h1 className='text-xl font-semibold text-center mb-6 text-gray-800'>
                Sign In
            </h1>

            <form className='space-y-4'>
                {/* Email */}
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Password */}
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                        {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                // disabled={!email || !password ? true : false}
                >
                    Sign In
                </button>
            </form>

            {/* Links */}
            <div className="mt-6 text-center text-sm text-gray-600">
                <p>Don't have an account?{" "}
                    <Link to={"/register"} className="text-blue-600 hover:underline">
                        Sign Up
                    </Link>
                </p>
                <p className="mt-2">
                    <Link to={"/forgot-password"} className="text-blue-600 hover:underline">
                        Forgot Password?
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage