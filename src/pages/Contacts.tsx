import CTA from "../components/CTA";
import ContactDetails from "../components/ContactDetails";
import SecondaryHero from "../components/SecondaryHero";

const Contacts = () => {
  return (
    <>
      <main>
        <SecondaryHero title="Contact Us" bgHero="bg-contacts" />
        <ContactDetails />
        <CTA />
      </main>
    </>
  );
};

export default Contacts;
