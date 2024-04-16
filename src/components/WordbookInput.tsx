import { useAppDispatch, useAppSelector } from "@/types/redux";
import { addWord } from "@/redux/slice/addWordSlice";
import { addCategory } from "@/redux/slice/addWordCategorySlice";

import styles from "@/components/WordbookInput.module.scss";

export function WordbookInput() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.addCategory.categories);

  // 単語を追加する関数
  const addWordHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.word.value || !e.currentTarget.content.value) return;

    selectUnCategorized();
    const id = Math.random().toString(32).substring(2);
    const category_id = e.currentTarget.category.value || "uncategorized";
    const word = e.currentTarget.word.value;
    const content = e.currentTarget.content.value;
    dispatch(addWord({ id, category_id, word, content }));
    // reset input
    e.currentTarget.word.value = "";
    e.currentTarget.content.value = "";
  };

  const selectUnCategorized = () => {
    const isUncategorized = categories.some(
      (category) => category.id === "uncategorized",
    );
    if (!isUncategorized) {
      dispatch(
        addCategory({
          id: "uncategorized",
          categoryName: "カテゴリー未選択",
          content: "",
        }),
      );
    }
  };

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>単語を登録</h2>
      <form onSubmit={addWordHandler}>
        <div className={styles.item}>
          <label htmlFor="word">単語※</label>
          <input
            type="text"
            name="word"
            id="word"
            placeholder="入力してください"
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="content">内容※</label>
          <input
            type="text"
            name="content"
            id="content"
            placeholder="入力してください"
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="category">カテゴリー</label>
          <select name="category" id="category">
            <option value="">選択してください</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className={styles.button}>
          追加
        </button>
      </form>
    </div>
  );
}
