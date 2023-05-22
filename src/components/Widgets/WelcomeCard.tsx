import WelcomeCardVector from "assets/images/home/welcome-card-vector.png";

export default function WelcomeCard () {
  return (
    <div className="rounded-md py-8 px-7.5 bg-teal-400">
      <div className="flex flex-col items-start lg:flex-row">
        <div className="pl-12 pr-12 lg:w-2/3">
          <h3 className="mb-4 font-semibold">Welcome to your Dashboard!</h3>
          <p className="text-gray-600 font-light text-sm leading-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
        </div>
        <div className="pt-4 pl-14 mb-4 lg:pl-6 lg:pr-10 order-first lg:order-last">
          <img src={WelcomeCardVector} alt="Logo" className="w-64" />
        </div>
      </div>
    </div>
  );
}
