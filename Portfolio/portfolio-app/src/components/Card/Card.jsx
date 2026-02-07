import { Button, Card } from "flowbite-react";
import styles from './Card.module.css';

export default function CardComponent(props) {

  return (
    <Card className={`max-w-sm flex-none shrink-0 grow-0 ${styles.card}`}>
      <img src={props.image || "https://flowbite-react.com/images/blog/image-1.jpg"} alt={`${props.name} github project`} />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
        {props.name || "Boost your conversion rate"}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 h-24 overflow-hidden">
        {props.description || "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}
      </p>
      <Button href={props.url || "#"} target="_blank" rel="noopener noreferrer" className="mt-4"> 
        Visit Project
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
  );
}

