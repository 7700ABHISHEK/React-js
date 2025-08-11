const SignUp = () => {
    return (
        <div className="h-[100%] flex items-center justify-center px-4 py-12">
            <form className="w-full max-w-md  p-8 rounded-lg shadow-xl border border-red-500">
                <h2 className="text-2xl font-bold text-white text-center mb-6">Create an Account</h2>

                {/* Email */}
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="you@example.com"
                        required
                        className="bg-gray-900 border border-yellow-600 text-white text-sm rounded-lg focus:ring-white focus:border-white block w-full p-3 placeholder-gray-400"
                    />
                </div>

                {/* Password */}
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-white"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        required
                        className="bg-gray-900 border border-yellow-600 text-white text-sm rounded-lg focus:ring-white focus:border-white block w-full p-3 placeholder-gray-400"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-white text-black font-semibold py-3 px-5 rounded-lg transition"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
