import { useAppSelector } from "@/types/redux";
import styles from "@/components/Wordbook.module.scss";

export function Wordbook() {
  const words = useAppSelector((state) => state.addWord.words);
  const categories = useAppSelector((state) => state.addCategory.categories);
  console.log({ words }, { categories });

  const wordbookList = categories.map((category) => {
    const wordList = words.filter((word) => word.category_id === category.id);
    return (
      <div key={category.id} className={styles.wordbookContent}>
        <h3 className={styles.categoryTitle}>{category.categoryName}</h3>
        <ul>
          {wordList.map((word) => (
            <li key={word.id} className={styles.wordbookItem}>
              <div>
                <p className={styles.wordbookItemTitle}>{word.word}</p>
              </div>
              <div>
                <p className={styles.wordbookItemText}>{word.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div className={styles.wordbook}>
      <h2 className={styles.wordbookTitle}>単語一覧</h2>
      {wordbookList}
    </div>
  );
}
