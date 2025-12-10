import './PostList.scss'
import classNames from "classnames";
import PostCard from "@/components/PostCard";

const PostList = ({className, cards}) => {
  return (
    <section className={classNames("post-list", className, "container")}>
      {cards.map(({id, theme, image, title, date, text}) => (
        <PostCard
          theme={theme}
          image={image}
          title={title}
          date={date}
          text={text}
          key={id}
        />
      ))}
    </section>
  )
}

export default PostList