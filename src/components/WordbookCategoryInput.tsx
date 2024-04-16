import { useAppDispatch } from "@/types/redux";
import { addCategory } from "@/redux/slice/addWordCategorySlice";

import styles from "@/components/WordbookCategoryInput.module.scss";

export function WordbookCategoryInput() {
  const dispatch = useAppDispatch();

  // 単語を追加する関数
  const addCategoryHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.categoryName.value) return;

    const id = Math.random().toString(32).substring(2);
    const categoryName = e.currentTarget.categoryName.value;
    const content = e.currentTarget.content.value;
    dispatch(addCategory({ id, categoryName, content }));
    // フォームを空にする
    e.currentTarget.categoryName.value = "";
    e.currentTarget.content.value = "";
  };

  return (
    <div>
      <h2 className={styles.title}>カテゴリーを追加</h2>
      <form onSubmit={addCategoryHandler}>
        <div className={styles.item}>
          <label htmlFor="categoryName">カテゴリー名※</label>
          <input
            type="text"
            name="categoryName"
            id="categoryName"
            placeholder="入力してください"
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="content">説明</label>
          <input
            type="text"
            name="content"
            id="content"
            placeholder="入力してください"
          />
        </div>
        <button type="submit" className={styles.button}>
          追加
        </button>
      </form>
    </div>
  );
}
