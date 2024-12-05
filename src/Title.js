import logo from "../public/portal_logo.png";

console.log(logo);

export default function Title() {
  return (
    <header>
      <h1>Rick and Morty Characters</h1>
      <img id="title_photo" src={logo} alt="Logo" />
    </header>
  );
}
