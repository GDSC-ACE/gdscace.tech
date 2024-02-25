const Footer = () => {
  return (
    <footer
      id="contacts"
      className="home-section flex min-h-[100svh] flex-col overflow-hidden"
    >
      <div className="flex flex-1 flex-row">
        <div className="flex flex-1 flex-col justify-center pl-10">
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
          <div style={{ position: "relative", borderRadius: "20px" }}>
            <img
              src="assets/dropped_pin.svg"
              alt="earth"
              height="50px"
              width="50px"
              style={{
                position: "absolute",
                zIndex: 1,
                top: "400px",
                left: "65px",
              }}
            />
            <iframe
              className="mappy rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.942130860132!2d72.82467711103591!3d19.19772974806442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c24db49add%3A0x973ee0458244da44!2sAtharva%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1696181696449!5m2!1sen!2sin"
              width="440"
              height="440"
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
        className="ml-60 mt-[-500px]"
        alt="earth"
        height="1013px"
        width="1013px"
      />
    </footer>
  );
};

export default Footer;
