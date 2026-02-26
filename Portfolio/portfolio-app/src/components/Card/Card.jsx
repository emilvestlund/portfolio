import { Button, Card } from "flowbite-react";
import styles from './Card.module.css';

export default function CardComponent(props) {
  return (
    <Card className={`max-w-sm rounded-t-4xl grow-0 ${styles.card}`}>
      <img className="object-fill rounded-t-4xl" src={props.image || "https://flowbite-react.com/images/blog/image-1.jpg"} alt={`${props.name} github project`} />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase pl-3">
        {props.name || "Boost your conversion rate"}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 grow overflow-hidden mr-3 ml-3">
        {props.description || "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}
      </p>
      <Button 
        href={props.url || "#"} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${styles.btn} font-bold`}
      > 
        Visit Project
      
      </Button>
    </Card>
  );
}