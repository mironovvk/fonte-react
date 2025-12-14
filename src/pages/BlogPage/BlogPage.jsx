import './BlogPage.scss';
import PostList from '@/modules/PostList';
import { postsMock } from '@/mocks/posts.mock.js';
import Section from '@/components/Section/index.js';

const BlogPage = () => {
  return (
    <>
      <Section title="Блог">
        <PostList cards={postsMock} />
      </Section>
    </>
  );
};

export default BlogPage;
