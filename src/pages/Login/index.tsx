import LoginRightImage from "assets/images/login/login-right-image.png";
import LoginForm from "forms/Login";

export default function Login() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-xl rounded-xl md:flex-row md:space-y-0">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <LoginForm />
        </div>
        {/* right side */}
        <div className="relative flex items-center justify-center lg:justify-between">
          <img src={LoginRightImage} className="w-60 hidden md:block mr-12" alt="login" />
        </div>
      </div>
    </section>
  );
}
