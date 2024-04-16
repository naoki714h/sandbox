import { CustomHead } from "@/utils/CustomHead";
// import { Counter } from "@/components/Counter";
import { Wordbook } from "@/components/Wordbook";
import { WordbookInput } from "@/components/WordbookInput";
import { WordbookCategoryInput } from "@/components/WordbookCategoryInput";
import { Weather } from "@/components/Weather";
import { TideInfo } from "@/components/TideInfo";

import styles from "@/pages/index.module.scss";

export default function Home() {
  return (
    <div>
      <CustomHead
        title="Home Page Title"
        description="Home Page Description"
        keywords="home,page,keywords"
        url="https://exsample.com"
      />
      <h1 className={styles.title}>ポートフォリオ</h1>
      {/* <Counter /> */}

      <div className={styles.inputContent}>
        <WordbookCategoryInput />
        <WordbookInput />
      </div>

      <Wordbook />

      <Weather />
      <TideInfo />
    </div>
  );
}
