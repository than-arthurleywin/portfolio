import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact-to">
        <div className="left">
          <h4>Send Message</h4>
          <form action="">
            <input type="email" placeholder="   Gmail" />
            <br />
            <textarea
              name=""
              id=""
              cols="49"
              rows="5"
              placeholder="   Message"
            ></textarea>
            <br />
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="right">
          <h4>Addres</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.402560892581!2d108.54610779999999!3d-7.375726200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f620d527c3821%3A0xb708fc32209255d5!2sJGFW%2BMFJ%2C%20Pataruman%2C%20Kec.%20Pataruman%2C%20Kota%20Banjar%2C%20Jawa%20Barat%2046323!5e0!3m2!1sid!2sid!4v1715575564127!5m2!1sid!2sid"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
