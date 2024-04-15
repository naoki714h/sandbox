import { CustomHead } from "@/utils/CustomHead";
import { Counter } from "@/components/Counter";
import { Wordbook } from "@/components/Wordbook";
import { WordbookInput } from "@/components/WordbookInput";
import { WordbookCategoryInput } from "@/components/WordbookCategoryInput";
import { Weather } from "@/components/Weather";
import { TideInfo } from "@/components/TideInfo";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Home Page Title"
        description="Home Page Description"
        keywords="home,page,keywords"
        url="https://exsample.com"
      />
      <p>top</p>
      <Counter />
      <WordbookCategoryInput />
      <WordbookInput />
      <Wordbook />

      <Weather />
      <TideInfo />
    </>
  );
}
