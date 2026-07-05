import { Button } from "./Button";
import { Paragraph } from "./Paragraph";
import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="header">
      <Logo />
      <Title />
      <Paragraph
        content={
          "Clipboard allows you to track and organize everything you. Instantly acess you clipboard on all devices"
        }
      />
      <div className="download-buttons">
        <Button style="button-ios" content="Download for iOS" />
        <Button style="button-mac" content="Download for Mac" />
      </div>
    </header>
  );
}

export function Logo() {
  return <img src={logo} width="125px" height="125px" />;
}

function Title() {
  return <h1>A history of everything you copy</h1>;
}
