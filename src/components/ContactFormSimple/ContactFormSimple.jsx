import { useState } from 'react';
import Input from '@/ui/Input';
import Button from '@/ui/Button';
import './ContactFormSimple.scss';

const ContactFormSimple = ({ withMessage = false, buttonTitle = 'Отправить' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ваше имя"
        required
      />

      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />

      <Input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Телефон"
        required
      />

      {withMessage && (
        <Input
          label="Сообщение"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Ваше сообщение"
          multiline
        />
      )}

      <Button type="submit" title={buttonTitle} />
    </form>
  );
};

export default ContactFormSimple;
