"use client";
import Card from "./Card";

interface CardSection {
  item: any;
}

const CardSection: React.FC<CardSection> = ({ item }) => {
  return(
    <div className="mb-16">
      <Card items={item} />
    </div>
  ) 
};

export default CardSection;
