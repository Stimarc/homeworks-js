export const contacts = () => {
    return (
      `
      <div class="contact-page">
        <h1>Contact Us</h1>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required>
  
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required>
  
          <label for="subject">Subject:</label>
          <select id="subject" name="subject">
            <option value="general">General Inquiry</option>
            <option value="support">Customer Support</option>
            <option value="feedback">Feedback</option>
          </select>
  
          <label for="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
  
          <button type="submit">Submit</button>
        </form>
      </div>
      `
    );
  };
  