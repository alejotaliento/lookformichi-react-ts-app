import React from "react";

import BlogCardList from "../../components/BlogCardList";
import { cardArray } from "../../data";
import { hasImage } from "../../utils";
import Service from "../../services/RandomDog";
import type { IBlogCard } from "../../components/types";
import NewBlogCard from "../../components/NewBlogCard";

import styles from "./index.module.css";

const Home = () => {
  const [pupis, setPupis] = React.useState<IBlogCard[]>(cardArray);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>(null);

  React.useEffect(() => {
    if (!hasImage(pupis)) {
      setIsLoading(true);

      // set all items without image
      try {
        // if isNew -> false ---Card 1 sin imagen, el resto con

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

  return (
    <div className={styles.root}>
      <NewBlogCard setData={setPupis} />
      <BlogCardList data={pupis} />
    </div>
  );
};

export default Home;
