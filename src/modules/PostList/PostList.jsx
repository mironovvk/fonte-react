import './PostList.scss';
import classNames from 'classnames';
import PostCard from '@/components/PostCard';

const PostList = ({ className, cards }) => {
  return (
    <div className={classNames('post-list', className)}>
      {cards.map(({ id, theme, image, title, date, text }) => (
        <PostCard theme={theme} image={image} title={title} date={date} text={text} key={id} />
      ))}
    </div>
  );
};

export default PostList;
