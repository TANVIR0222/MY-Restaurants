
import { Helmet } from "react-helmet-async";
import contact from "../../assets/contact/contact.jpg";
import SectionTitel from "../../components/SectionTitel";
import Cover from "../shared/Cover";
import ContactCard from "./ContactCard";
import ContactFrom from "./ContactFrom";
const Contact = () => {
  return (
    <div>
        <Helmet>
            <title>Contact</title>
        </Helmet>
      <Cover img={contact} title={"contect"} />
      <SectionTitel subHeading={"visit us"} heading={"OUR LOCATION"} />
      <div className="text-center grid md:grid-cols-3 grid-cols-1  my-8">
      <ContactCard title={'Opening Hours'} location={'Open 9.00 am to 5.00pm Everyday'} />
      <ContactCard title={'Our Locations'} location={'Dhanmondi 17, Dhaka -1200, Bangladesh'} />
      <ContactCard title={'Contact Us'} location={'+88 01750 00 00 00 '} />
      </div>
      <ContactFrom></ContactFrom>
    </div>
  );
};

export default Contact;
