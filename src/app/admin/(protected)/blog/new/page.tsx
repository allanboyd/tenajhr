import styles from '../../../admin.module.css';
import BlogForm from '../BlogForm';

export default function NewBlogPost() {
  return (
    <>
      <div className={styles.header}>
        <div>
          <div className={styles.title}>New <span className={styles.titleEm}>blog post</span></div>
          <div className={styles.subtitle}>Add a new article to your insights section.</div>
        </div>
      </div>
      <div className={styles.card}>
        <BlogForm />
      </div>
    </>
  );
}
