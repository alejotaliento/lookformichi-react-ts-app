import React from "react";

import BlogCardList from "../../components/BlogCardList";
import { cardArray } from "../../data";
import { hasImage } from "../../utils";
import Service from "../../services/RandomDog";
import type { IBlogCard } from "../../components/types";

const Home = () => {
  const [pupis, setPupis] = React.useState<IBlogCard[]>(cardArray);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!hasImage(pupis)) {
      setIsLoading(true);
      // set all items without image
      (async () => {
        await Service.getImage().then((res) => {
          setPupis((prev) => {
            const newPupis = [...prev];

            newPupis.find((p) => !p.image).image = res;

            return newPupis;
          });
        });
      })();
      setIsLoading(false);
    }
  }, [pupis]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <BlogCardList data={pupis} />;
};

export default Home;
