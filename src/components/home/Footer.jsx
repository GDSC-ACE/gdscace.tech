const Footer = () => {
  return (
    <section className="flex min-h-[100svh] flex-col overflow-hidden">
  <div className="flex flex-1 flex-row">
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="mb-11 flex flex-row items-center justify-center">
        <h1 className="font-poppins mb-5 text-center text-2xl font-semibold text-white">
          Atharva College of Engineering
        </h1>
      </div>
      <div className="">
        <p className="font-poppins text-center text-2xl font-semibold text-white">
          Malad Marve Road, Shri Sevantilal Khandwala Marg, Charkop Naka,
          Malad West, Mumbai, Maharashtra 400095
        </p>
        <br />
        <br />
        <p className="font-poppins text-center text-2xl font-semibold text-white">
          Email Us :
        </p>
        <p className="font-poppins text-center text-2xl font-semibold text-white">
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
          style={{ position: "absolute", zIndex: 1 , top: "400px" , left: "65px"}}
        />
        <iframe
          className="mappy rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.942130860132!2d72.82467711103591!3d19.19772974806442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c24db49add%3A0x973ee0458244da44!2sAtharva%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1696181696449!5m2!1sen!2sin"
          width="440"
          height="440"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
  <img
    src="assets/footer_earth.png"
    class="ml-60 mt-[-500px]"
    alt="earth"
    height="1013px"
    width="1013px"
  />
</section>

  );
};

export default Footer;
