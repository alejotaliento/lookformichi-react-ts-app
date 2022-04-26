import React from "react";

import BlogCardList from "../../components/BlogCardList";
import { cardArray } from "../../data";
import { hasImage } from "../../utils";
import Service from "../../services/RandomDog";
import type { IBlogCard } from "../../components/types";

const Home = () => {
  const [pupis, setPupis] = React.useState<IBlogCard[]>(cardArray);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>(null);

  React.useEffect(() => {
    if (!hasImage(pupis)) {
      setIsLoading(true);

      // set all items without image
      try {
        Service.getImage().then((res) => {
          setPupis((prev) => {
            const newPupis = [...prev];

            newPupis.find((p) => !p.image).image = res;

            return newPupis;
          });
        });
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    }
  }, [pupis]);

  if (isLoading || error) {
    return <>{isLoading ? <div>Loading...</div> : <div>Error</div>}</>;
  }

  return <BlogCardList data={pupis} />;
};

export default Home;
