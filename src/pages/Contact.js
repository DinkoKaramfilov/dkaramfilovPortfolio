export default function Contact(){
    return `
    <form class="container" action="https://formspree.io/bgllc91@gmail.com" method="POST">
      <label for="firstname">First Name:</label>
      <input type="text" name="firstname" required>

      <label for="lastname">Last Name:</label>
      <input type="text" name="lastname" required>

      <label for="Whats is this regarding">Service Requested</label>
      <input type="text" name="Service Requested" required>

      <label for="email">Email:</label>
      <input type="email" name="email" required>

      <input type="submit" value="Submit">
    </form>
  `;
}
