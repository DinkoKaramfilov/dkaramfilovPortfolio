export default function Header(state){
    return `
    <div id="header">
      <div class="container">
        <h1>${state[state.active].title}</h1>
        <h2>Feel free to contact me: BgLLC91@gmail.com</h2>
        <h3>one more for good measure</h3>
      </div>
    </div>
  `;
}
