import './ContactPage.scss';
import { contacts } from '@/mocks/contacts.mock.js';
import Section from '@/components/Section/index.js';
import ContactMap from '@/components/ContactMap/index.js';
import ContactsList from '@/modules/ContactsList/index.js';
import ContactFormSimple from '@/components/ContactFormSimple/index.js';

const ContactPage = () => {
  return (
    <>
      <Section title="Контакты">
        <div className="contact-section">
          <ContactsList cards={contacts} />
        </div>
        <ContactFormSimple />
      </Section>
      <Section>
        <div className="contact-section">
          <ContactMap
            text="Астана"
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.573714683764!2d76.92509177638948!3d43.218429671126074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f30f7a99069%3A0x7adb88ae41e2c540!2sEsentai%20Mall!5e0!3m2!1sru!2snl!4v1765990949191!5m2!1sru!2snl"
          />
          <ContactMap
            text="Алматы"
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.9872778391054!2d71.41681179118437!3d51.090242298807404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585ab1a2fc967%3A0x17d41fb10cf3547!2zMjAsIDNDUUMrWE1GLCDQv9GALdGCLiDQnNCw0L3Qs9C40LvQuNC6INCV0LsuIDU1LCDQkNGB0YLQsNC90LAgMDIwMDAwLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2snl!4v1765990995082!5m2!1sru!2snl"
          />
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
