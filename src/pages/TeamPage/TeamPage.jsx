import './TeamPage.scss';
import TeamList from '@/modules/TeamList';
import { teamMock } from '@/mocks/team.mock.js';
import Section from '@/components/Section';

const TeamPage = () => {
  return (
    <>
      <Section title="Наша команда">
        <TeamList cards={teamMock} />
      </Section>
    </>
  );
};

export default TeamPage;
