export default function Header(state){
    return `
    <div id="header">
      <div class="container">
        <h1>${state[state.active].title}</h1>
        <h2>Feel free to contact me: BgLLC91@gmail.com</h2>
        <h3>IF you are feeling like chatting: https://discord.gg/bsWvQk7</h3>
      </div>
    </div>
  `;
}
