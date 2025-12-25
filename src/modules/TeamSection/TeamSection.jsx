import './TeamSection.scss';
import TeamList from '@/modules/TeamList';
import Section from '@/components/Section';
import { teamMock } from '@/mocks/team.mock.js';

const TeamSection = () => {
  return (
    <Section className="team-section" title="Наша команда">
      <div className='team-list__wrapper'>
        <header className='team-list__header'>Команда Fonte Capital LTD – основа успеха. Каждый сотрудник Компании – это ценный актив в рабочем процессе фонда. Наша цель – создание такой рабочей атмосферы и условий, которые позволят максимально раскрыть потенциал каждого сотрудника для достижения максимального результата.</header>
        <TeamList cards={teamMock} />
      </div>
    </Section>
  );
};

export default TeamSection;
