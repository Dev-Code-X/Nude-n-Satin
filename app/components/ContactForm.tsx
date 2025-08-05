export default function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/el/milaji"
      method="POST"
      className="bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col gap-5 justify-center"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="Новое сообщение с сайта Nude’n Satin!" />
      <input
        name="name"
        type="text"
        placeholder="Enter your full name*"
        className="p-3 border border-[#57382d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bca485] transition"
        required
      />
      <input
        name="phone"
        type="tel"
        placeholder="Enter your phone number*"
        className="p-3 border border-[#57382d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bca485] transition"
      />
      <input
        name="email"
        type="email"
        placeholder="Enter your e-mail*"
        className="p-3 border border-[#57382d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bca485] transition"
        required
      />
      <textarea
        name="message"
        placeholder="Type your message"
        className="p-3 border border-[#57382d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bca485] transition"
        rows={4}
      ></textarea>
      <button type="submit" className="btn-primary">
        Send message
      </button>
    </form>
  );
}