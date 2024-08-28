import React from 'react';
import './About.css';
import MyHeroSlider from '../MyHeroSlider/MyHeroSlider';
import ButtonCard from '../ButtonCard/ButtonCard';
import SixCardColors from '../SixCardColors/SixCardColors';
import ThreeCardSection from '../ThreeCardSection/ThreeCardSection';
import { FaGlobe, FaMapMarkerAlt, FaGavel, FaShieldAlt, FaBriefcase, FaLanguage, FaFileSignature, FaTrademark, FaCopyright } from 'react-icons/fa';

export const About = () => {
  const transactionData = [
    {
      description: "Serve major corporations and mid-sized enterprises domestically and internationally.",
      icon: FaGlobe,
    },
    {
      description: "Situated in the DC metro area just a few minutes away from the USPTO.",
      icon: FaMapMarkerAlt,
    },
    {
      description: "Attorneys with science or technical backgrounds and prior experience as USPTO patent examiners.",
      icon: FaGavel,
    },
    {
      description: "Deliver superior quality work efficiently and cost-effectively.",
      icon: FaBriefcase,
    },
    {
      description: "Secure intellectual property protection efficiently and cost-effectively.",
      icon: FaShieldAlt,
    },
    {
      description: "Proficient in several languages to meet your global business needs.",
      icon: FaLanguage,
    },
  ];

  const serviceCards = [
    {
      title: "Patent",
      description: "Patents are granted for inventions that are novel, non-obvious, and useful. An invention can be any new and useful process, machine, manufacture, or composition of matter, or any new and useful improvement thereof. Examples of patentable inventions include new technologies, products, methods, devices, and chemical compounds.",
      icon: FaFileSignature,
      linkText: "Learn More",
    },
    {
      title: "Trademark",
      description: "A trademark is a distinctive sign or symbol used to identify and distinguish the goods or services of one seller or provider from those of others. Trademarks can take various forms, including words, names, logos, slogans, symbols, designs, colors, or even sounds and smells. Essentially, a trademark serves as a brand identifier, helping consumers recognize and associate certain products or services with a particular source or origin.",
      icon: FaTrademark,
      linkText: "Learn More",
    },
    {
      title: "Copyright",
      description: "Copyright is a form of intellectual property law that grants exclusive rights to the creators of original works, allowing them to control the use and distribution of their creations. It protects a wide range of creative works, including literary, artistic, musical, and dramatic works, as well as software code, architectural designs, and other original expressions.",
      icon: FaCopyright,
      linkText: "Learn More",
    },
  ];

  const serviceColors = ["#D8E8E6", "#D9E3E8", "#E5EAF0"];
  const iconBackgroundColor = ["#5B9A93", "#577C8E", "#2F4157"];

  return (
    <div className='about'>
      <MyHeroSlider/>
      <div className='infoSectionWrapper'>
        <div className="background-image2"></div>
        <div className='buttonCard'>
          <ButtonCard
            backgroundColor="transparent"
            title="About Us"
            content="Muncy, Geissler, Olds & Lowe PC is an intellectual property law firm in the Washington DC metropolitan area. Founded in 2006, the firm has become a top IP law firm, serving a diverse range of domestic and international clients. Our multilingual team, with expertise in science and technology, delivers superior quality work efficiently and cost-effectively."
            buttonText=""
            borderRadius=""
            textColor="#2F4157"
          />
        </div>
        <ThreeCardSection cards={serviceCards} colors={serviceColors} iconBackgroundColor={iconBackgroundColor} />
        <SixCardColors
          data={transactionData}
          colors={["#5B9A93", "#577C8E", "#2F4157", "#577C8E", "#2F4157", "#5B9A93"]}
        />
      </div>
    </div>
  );
};

export default About;
