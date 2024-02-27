const Footer = () => {
  return (
    <footer
      id="contacts"
      className="home-section relative flex min-h-[50svh] flex-col overflow-hidden max-lg:py-6 lg:min-h-[100svh]"
    >
      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="flex flex-col justify-center pb-10 pl-10 lg:flex-1 lg:pb-0">
          <h1 className="font-poppins mb-5 text-base font-semibold text-white lg:text-xl">
            Atharva College of Engineering
          </h1>
          <div className="">
            <p className="font-poppins text-sm font-semibold text-white lg:text-lg">
              Malad Marve Road, Shri Sevantilal Khandwala Marg, Charkop Naka,
              Malad West, Mumbai, Maharashtra 400095
            </p>
            <br />
            <br />
            <p className="font-poppins text-sm font-semibold text-white lg:text-base">
              Email Us :
            </p>
            <p className="font-poppins text-sm font-semibold text-white lg:text-base">
              Contact Us :
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="relative z-10 rounded-xl">
            <img
              src="assets/dropped_pin.svg"
              alt="earth"
              className="pointer-events-none absolute left-0 top-full z-0 h-0 w-auto -translate-y-1/2 lg:h-12"
            />
            <iframe
              className="mappy rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.942130860132!2d72.82467711103591!3d19.19772974806442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c24db49add%3A0x973ee0458244da44!2sAtharva%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1696181696449!5m2!1sen!2sin"
              width={window.innerWidth > 1024 ? "440" : "280"}
              height={window.innerWidth > 1024 ? "440" : "280"}
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
      <img
        src="assets/footer_earth.png"
        className="absolute bottom-0 right-0 z-0"
        alt="earth"
      />
    </footer>
  );
};

export default Footer;
