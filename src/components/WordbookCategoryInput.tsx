import { useAppDispatch } from "@/types/redux";
import { addCategory } from "@/redux/slice/addWordCategorySlice";

export function WordbookCategoryInput() {
  const dispatch = useAppDispatch();

  // 単語を追加する関数
  const addCategoryHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <h2>カテゴリーを追加できます</h2>
      <form onSubmit={addCategoryHandler}>
        <input type="text" name="categoryName" placeholder="カテゴリー名" />
        <input type="text" name="content" placeholder="ディスクリプション" />
        <button type="submit">追加</button>
      </form>
    </div>
  );
}
