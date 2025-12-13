import './BlogPage.scss';
import PostList from '@/modules/PostList';
import { postsMock } from '@/mocks/posts.mock.js';

const BlogPage = () => {
  return (
    <>
      <PostList cards={postsMock} />
    </>
  );
};

export default BlogPage;
