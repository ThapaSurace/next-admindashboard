"use client";

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-bgSoft">
      <form className="flex flex-col gap-5 bg-[#151c2c] p-5 max-w-md w-full rounded-md">
        <h1 className="text-2xl text-center font-bold">Login</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          className="p-4 border-none focus:outline-none rounded-md bg-bgSoft"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="p-4 border-none focus:outline-none rounded-md bg-bgSoft"
        />
        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-md p-2"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
