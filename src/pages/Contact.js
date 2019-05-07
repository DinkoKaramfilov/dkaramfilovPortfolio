export default function Contact(){
    return `
    <form class="container" action="https://formspree.io/bgllc91@gmail.com" method="POST">
      <label for="firstname">First Name:</label>
      <input type="text" name="firstname" required>

      <label for="lastname">Last Name:</label>
      <input type="text" name="lastname" required>

      <hr>

      <label for="Whats is this regarding">Services Requested:</label>
      <input type="text" name="Service Requested" required>

      <label for="email">Email:</label>
      <input type="email" name="email" required>

      <div>
      <input type="radio" name="intent" value="hire" checked><span>Hire me</span>
      <input type="radio" name="intent" value="communication"><span>Selling Services</span>
      <input type="radio" name="intent" value="Services"><span>Magic crysals</span>
      </div>

      <input type="submit" value="Submit">
    </form>
  `;
}
