export const contacts = () => {
  return (
    `
    <div class="contact-page">
      <h1 class="contact-heading">Contact Us</h1>
      <form class="contact-form">
        <label for="name" class="contact-label">Name:</label>
        <input type="text" id="name" name="name" class="contact-input" placeholder="Your Name" required>

        <label for="email" class="contact-label">Email:</label>
        <input type="email" id="email" name="email" class="contact-input" placeholder="Your Email" required>

        <label for="phone" class="contact-label">Phone Number:</label>
        <input type="tel" id="phone" name="phone" class="contact-input" placeholder="Your Phone Number" required>

        <label for="subject" class="contact-label">Subject:</label>
        <select id="subject" name="subject" class="contact-input">
          <option value="general">General Inquiry</option>
          <option value="support">Customer Support</option>
          <option value="feedback">Feedback</option>
        </select>

        <label for="message" class="contact-label">Message:</label>
        <textarea id="message" name="message" class="contact-input" placeholder="Your Message" rows="4" required></textarea>

        <button type="submit" class="contact-button">Submit</button>
      </form>
    </div>
    `
  );
};

  