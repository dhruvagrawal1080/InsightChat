import { useState } from "react";
import { BiMessageDetail, BiUser } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login_Signup = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (activeTab === "login") {
      if (!formData.email || !formData.password) {
        toast.error("Please fill in all required fields");
        return;
      }

      // In a real app, you would handle authentication here
      toast.success(`Successfully signed in as ${formData.email}`);
      navigate("/");
    } else {
      // Register validation
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
        toast.error("Please fill in all required fields");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      // In a real app, you would handle registration here with a backend API
      toast.success(`Account created successfully for ${formData.firstName} ${formData.lastName}`);

      // For demonstration purposes, let's switch to login tab after successful registration
      setActiveTab("login");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  const handleGoogleAuth = () => {
    // In a real app, you would implement Google authentication here
    if (activeTab === "login") {
      toast.info("Google sign-in would be implemented here");
    } else {
      toast.info("Google sign-up would be implemented here");
    }
  };

  const handleForgotPassword = () => {
    toast.info("Password reset functionality would be implemented here");
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
      <div className={`bg-white rounded-none sm:rounded-2xl shadow-xl w-full max-w-md p-8 relative overflow-hidden ${activeTab === "register" && "sm:my-8"}`}>

        <div className="text-center mb-8">
          <div className="flex items-end justify-center gap-2 mb-2">
            <BiMessageDetail className="text-indigo-600 text-3xl" />
            <h1 className="text-2xl font-bold text-gray-800">InsightChat</h1>
          </div>
          <p className="text-gray-500">AI-powered conversations</p>
        </div>

        <div className="flex mb-8">

          <button
            className={`flex-1 py-3 border-b-2 ${activeTab === "login"
              ? "border-indigo-600 text-indigo-600"
              : "border-gray-200 text-gray-400"
              } font-medium transition-colors`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>

          <button
            className={`flex-1 py-3 border-b-2 ${activeTab === "register"
              ? "border-indigo-600 text-indigo-600"
              : "border-gray-200 text-gray-400"
              } font-medium transition-colors`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>

        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {
            activeTab === "register" &&
            (
              <div className="grid grid-cols-2 gap-4">

                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                  <div className="relative">
                    <input
                      id="firstName"
                      type="text"
                      className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                    <BiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                  <div className="relative">
                    <input
                      id="lastName"
                      type="text"
                      className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                    <BiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                </div>

              </div>
            )
          }

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <CiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 pl-10 pr-10 rounded-lg border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5 cursor-pointer" />
                ) : (
                  <FaEye className="h-5 w-5 cursor-pointer" />
                )}
              </button>
            </div>
          </div>

          {
            activeTab === "register" &&
            (
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirm Password</label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full px-4 py-3 pl-10 pr-10 rounded-lg border border-gray-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                  <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash className="h-5 w-5 cursor-pointer" />
                    ) : (
                      <FaEye className="h-5 w-5 cursor-pointer" />
                    )}
                  </button>
                </div>
              </div>
            )
          }

          {
            activeTab === "login" &&
            (
              <div className="flex justify-end -mt-3">
                <button
                  type="button"
                  className="text-sm text-indigo-600 hover:text-indigo-700 cursor-pointer"
                  onClick={handleForgotPassword}
                >
                  Forgot password?
                </button>
              </div>
            )
          }

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-medium cursor-pointer"
          >
            {activeTab === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-4 text-sm text-gray-500">Or continue with</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleAuth}
          className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24px"
            height="24px"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
          <span className="font-medium text-gray-700">
            {activeTab === "login" ? "Sign in with Google" : "Sign up with Google"}
          </span>
        </button>

        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-100 rounded-full opacity-50"></div>

      </div >
    </div >
  );
};

export default Login_Signup;