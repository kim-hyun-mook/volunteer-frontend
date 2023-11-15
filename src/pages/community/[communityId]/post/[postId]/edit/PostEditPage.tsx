import PostForm from '@components/PostForm/PostForm';
import Section from '@components/ui/Section/Section';


const PostEditPage = () => {
	return (
    <Section sectionTitle="게시글 수정">
      <PostForm  />
    </Section>
  );
}

export default PostEditPage