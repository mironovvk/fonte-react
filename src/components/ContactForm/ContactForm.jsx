import { useState } from 'react';
import Input from '@/ui/Input';
import Textarea from '@/ui/Textarea';
import Button from '@/ui/Button';
import './ContactForm.scss';

const ContactForm = ({ buttonTitle = 'Получить консультацию' }) => {
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
    alert('Форма отправлена!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <form className="contact-form-large" onSubmit={handleSubmit}>
      <Input
        label="Имя"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ваше имя"
        required
      />

      <div className="contact-form-large__row">
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <Input
          label="Телефон"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Телефон"
          required
        />
      </div>

      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Текст сообщения"
        required
      />

      <Button type="submit" title={buttonTitle} />
    </form>
  );
};

export default ContactForm;
