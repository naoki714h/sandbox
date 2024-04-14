import { CustomHead } from '@/utils/CustomHead';
import { Counter } from '@/components/Counter';

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
    </>
  );
}
