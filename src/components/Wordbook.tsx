import { useAppSelector } from "@/types/redux";

export function Wordbook() {
  const words = useAppSelector((state) => state.addWord.words);
  const categories = useAppSelector((state) => state.addCategory.categories);
  console.log(words);
  console.log(categories);

  // categoriesをmapして、それぞれのカテゴリーに紐づく単語を表示する
  const wordbookList = categories.map((category) => {
    const wordList = words.filter((word) => word.category_id === category.id);
    return (
      <div key={category.id}>
        <h3>{category.categoryName}</h3>
        <ul>
          {wordList.map((word) => (
            <li key={word.id}>
              <p>{word.word}</p>
              <p>{word.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h2>単語帳</h2>
      {wordbookList}
    </div>
  );
}
