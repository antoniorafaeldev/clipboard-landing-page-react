import { Subtitle } from "./Subtitle";
import { Paragraph } from "./Paragraph";
import { Image } from "./Image";
import { Button } from "./Button";
import imageComputer from "../assets/image-computer.png";
import imageDevices from "../assets/image-devices.png";
import iconBlacklist from "../assets/icon-blacklist.svg";
import iconText from "../assets/icon-text.svg";
import iconPreview from "../assets/icon-preview.svg";
import logoGoogle from "../assets/logo-google.png";
import logoIbm from "../assets/logo-ibm.png";
import logoMicrosoft from "../assets/logo-microsoft.png";
import logoHp from "../assets/logo-hp.png";
import logoVectorGraphics from "../assets/logo-vector-graphics.png";

export function Main() {
  return (
    <main>
      <MainHeader />
      <MainFeatures />
      <AcessClipboardSection />
      <SuperchargeWorkflowSection />
      <EnterprisesSection />
      <DownloadSection />
    </main>
  );
}

function MainHeader() {
  return (
    <section className="main-header">
      <Subtitle content="Keep Track of your snippets" />
      <Paragraph content="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything." />
    </section>
  );
}

function MainFeatures() {
  return (
    <section className="main-features">
      <div className="feature-img">
        <Image src={imageComputer} alt="Image of a computer" />
      </div>
      <div className="features-container">
        <div className="feature">
          <Feature
            title="Quick Search"
            paragraphContent="Easily search your snippets by content, category, web address, application, and more."
          />
        </div>
        <div className="feature">
          <Feature
            title="iCloud Sync"
            paragraphContent="Instantly saves and syncs snippets across all your devices."
          />
        </div>
        <div className="feature">
          <Feature
            title="Complete History"
            paragraphContent="Retrieve any snippets from the first moment you started using the app."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, paragraphContent }) {
  return (
    <>
      <h3 className="subtitle">{title}</h3>
      <Paragraph content={paragraphContent} />
    </>
  );
}

function AcessClipboardSection() {
  return (
    <section className="acess-clipboard-section">
      <div className="acess-clipboard-header">
        <Subtitle content="Access Clipboard anywhere" />
        <Paragraph content="Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks." />
      </div>
      <div className="feature-img">
        <Image src={imageDevices} alt="Image of a tablet and a phone" />
      </div>
    </section>
  );
}

function SuperchargeWorkflowSection() {
  return (
    <section className="supercharge-workflow-section">
      <div className="supercharge-workflow-header">
        <Subtitle content="Supercharge your workflow" />
        <Paragraph content="We've got the tools to boost your productivity" />
      </div>
      <div className="supercharge-workflow-tools">
        <div className="tool">
          <Tool
            src={iconBlacklist}
            alt="Icon of a blacklist"
            title="Create blacklists"
            description="Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
          />
        </div>
        <div className="tool">
          <Tool
            src={iconText}
            alt="Icon of an A with the cursor next to it"
            title="Plain text snippets"
            description="Remove unwanted formatting from copied text for a consistent look."
          />
        </div>
        <div className="tool">
          <Tool
            src={iconPreview}
            alt="Sneak preview"
            title="Sneak preview"
            description="Quick preview of all snippets on your Clipboard for easy access."
          />
        </div>
      </div>
    </section>
  );
}

function Tool({ src, alt, title, description }) {
  return (
    <>
      <Image src={src} alt={alt} />
      <h3 className="subtitle">{title}</h3>
      <Paragraph content={description} />
    </>
  );
}

function EnterprisesSection() {
  return (
    <section className="enterprises-section">
      <Image src={logoGoogle} alt="Logo of Google" />
      <Image src={logoIbm} alt="Logo of IBM" />
      <Image src={logoMicrosoft} alt="Logo of Microsoft" />
      <Image src={logoHp} alt="Logo of Hewlett Packard Enterprise" />
      <Image src={logoVectorGraphics} alt="Logo of Vector Graphics" />
    </section>
  );
}

function DownloadSection() {
  return (
    <section className="download-section">
      <Subtitle content="Clipboard for iOS and Mac OS" />
      <Paragraph content="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard." />
      <div className="download-buttons">
        <Button style="button-ios" content="Download for iOS" />
        <Button style="button-mac" content="Download for Mac" />
      </div>
    </section>
  );
}
