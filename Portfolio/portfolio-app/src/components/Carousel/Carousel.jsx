import { Button } from "flowbite-react";
import { useContext, useEffect, useState } from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import CardComponent from '../Card/Card.jsx';
import { ReposContext } from '../githubRepos/GithubRepos.jsx';
import styles from './Carousel.module.css';

export default function CarouselComponent() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [reposToDisplay, setReposToDisplay] = useState([]);
    const repos = useContext(ReposContext);


    const handleNext = () => {
        if (currentIndex < reposToDisplay.length - 3) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(reposToDisplay.length - 3);
        }
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 3000); 
        return () => clearInterval(interval); 
    }, [currentIndex]); 

    useEffect(() => {
        setReposToDisplay(repos); 
    }, [repos]);

    useEffect(() => {
         handleNext(); 
    }, []);

    return (
        <div className={`${styles.carousel}`}>
            <Button
                onClick={handlePrev}
                className={`${styles.carouselButton} ${styles.left}`}
            >
                <HiOutlineArrowLeft className="h-6 w-6" />
            </Button>

            <div className={`${styles.carouselWrapper} overflow-x-auto no-scrollbar`}>
                <div
                    className={`flex ${styles.carouselGroup} transition-transform duration-300 ease-in-out`}
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / 3}%)`, // Move by 33.33% for 3 cards
                    }}
                >
                    <div className="flex space-x-4">
                        {reposToDisplay.map((card) => (
                            <CardComponent
                                key={card.id}
                                name={card.name}
                                description={card.description}
                                url={card.html_url}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Button
                onClick={handleNext}
                className={`${styles.carouselButton} ${styles.right}`}
            >
                <HiOutlineArrowRight className="h-6 w-6" />
            </Button>
        </div>
    );
}
