import './AboutSection.scss';
import Section from '@/components/Section/index.js';
import Button from '@/ui/Button';

const AboutSection = () => {
	return (
		<Section title="О нас">
			<div className="about-section">
				<div className="about-section__image">
					{ <img src='@/assets/images/about.jpg' alt='О нас' /> }
				</div>
				<div className="about-section__content">
					<div className='about-section__text'>
						<p>Наша Команда успешно осуществляет деятельность на нескольких рынках инвестиций. Богатство выбора инструментов этих рынков позволяет Нам успешно сохранять и преумножать капитал клиентов. </p>
						<p>Вступить в партнерство с Fonte могут как профессиональные инвестора, так и частные лица, только начинающие открывать для себя новые перспективы. Наша юрисдикция - Международный финансовый центр «Астана» (МФЦА). Комфортные налоговые условия и регуляторные политики обеспечивают необходимые свободы и преимущества для достижения целей инвестиций. </p>
						<p>В партнерстве с Fonte Capital LTD, инвесторы имеют возможность воспользоваться не только проверенными стратегиями, но и смогут совместно разработать персональные инвестиционные решения.</p>
					</div>
					<Button type="submit" title='Лицензии' />
				</div>
			</div>
		</Section>
	);
};

export default AboutSection;
