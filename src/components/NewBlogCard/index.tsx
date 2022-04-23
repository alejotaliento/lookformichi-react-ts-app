import { mockNewItem } from "../../data";

import { IBlogCard } from "./types";

export interface Props {
  data: IBlogCard[];
  setData: any;
}

const NewBlogCard = ({ setData }: Props) => {
  const handleClick = (newItem: IBlogCard) => {
    setData((prevState: IBlogCard[]) => [...prevState, newItem]);
  };

  return (
    <div className="card">
      <button onClick={() => handleClick(mockNewItem)}>Crear</button>
    </div>
  );
};

export default NewBlogCard;
