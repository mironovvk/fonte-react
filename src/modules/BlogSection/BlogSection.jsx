import './BlogSection.scss';
import useSlider from '@/hooks/useSlider.js';
import { postsMock } from '@/mocks/posts.mock.js';
import PostCard from '@/components/PostCard/index.js';
import SliderButton from '@/ui/SliderButton/';
import Section from '@/components/Section/index.js';

const BlogSection = () => {
  const { handlePrev, handleNext } = useSlider(postsMock);
  return (
    <Section title="Блог компании">
      <div className="blog-section">
        <SliderButton onClick={handlePrev} />
        <div className="blog-section__slides">
          {postsMock.map(({ id, theme, image, title, date, text }) => (
            <PostCard
              onSlider
              theme={theme}
              image={image}
              title={title}
              date={date}
              text={text}
              key={id}
            />
          ))}
        </div>
        <SliderButton directionRight onClick={handleNext} />
      </div>
    </Section>
  );
};

export default BlogSection;
