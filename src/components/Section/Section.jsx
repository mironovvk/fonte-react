import './Section.scss';
import IconSectionLineRight from '@/assets/icons/section_line/sectionLineRigth.svg?react';
import IconSectionLineLeft from '@/assets/icons/section_line/sectionLineleft.svg?react';

const Section = ({ title, children, hasLine, directionLineRight }) => {
  const LineIcon = directionLineRight ? IconSectionLineRight : IconSectionLineLeft;

  return (
    <section className="section container">
      <div className="section__header">
        <h3 className="section__header-title">{title}</h3>
      </div>
      <div className="section__body">{children}</div>

      <span
        className={
          directionLineRight
            ? 'section__line section__line--right'
            : 'section__line section__line--left'
        }
      >
        {hasLine && <LineIcon />}
      </span>
    </section>
  );
};

export default Section;
