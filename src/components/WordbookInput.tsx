import { useAppDispatch, useAppSelector } from "@/types/redux";
import { addWord } from "@/redux/slice/addWordSlice";
import { addCategory } from "@/redux/slice/addWordCategorySlice";

export function WordbookInput() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.addCategory.categories);

  // 単語を追加する関数
  const addWordHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    <div>
      <h2>単語を登録できます</h2>
      <form onSubmit={addWordHandler}>
        <input type="text" name="word" placeholder="単語" />
        <input type="text" name="content" placeholder="内容" />
        <select name="category" id="" defaultValue="default">
          <option value="">選択してください</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.categoryName}
            </option>
          ))}
        </select>
        <button type="submit">追加</button>
      </form>
    </div>
  );
}
