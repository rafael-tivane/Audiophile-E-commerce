import { useCallback, useEffect, useRef } from 'react';
import H2 from '../H2';
import './styles.css';

const BestGear = () => {
    const bestGearRef = useRef(null);

    const getImage = url => {
        import('../../assets/images/' + url)
            .then(image => bestGearRef.current.src = image.default)
            .catch(console.log); 
    };

    const setImage = useCallback(width => {
        if(width >= 992) {
            getImage('shared/desktop/image-best-gear.jpg');
        } else if(width >= 501) {
            getImage('shared/tablet/image-best-gear.jpg');
        } else {
            getImage('shared/mobile/image-best-gear.jpg');
        }
    }, []);


    useEffect(() => {
        setImage(window.innerWidth); 

        window.addEventListener('resize', event => {
            setImage(event.target.innerWidth);
        });
    }, [ setImage ]);

    return (
        <section className="align-center flex flex-column px-5 width-100 px-lg justify-between-md 
            align-stretch-md best-gear">
            <figure className="w-100 radius-default best-gear__image-container">
                <img
                    ref={bestGearRef}
                    src=""
                    alt=""
                    className="d-block radius-default height-100 width-100"
                />
            </figure>
            <div className="text-center px-5 best-gear__content">
                <H2
                    customClass="uppercase best-gear__content-title"
                    text="Bringing you the"
                >
                    <em className='best-gear__content-title--highlight'>best</em>
                    audio gear
                </H2>
                <p className="best-gear__content-description">
                    Located at the heart of New York City, Audiophile is the premier store for 
                    high end headphones, earphones, speakers, and audio accessories. We have a 
                    large showroom and luxury demonstration rooms available for you to browse and 
                    experience a wide range of our products. Stop by our store to meet some of the 
                    fantastic people who make Audiophile the best place to buy your portable audio 
                    equipment.
                </p>
            </div>
        </section>
    );
};

export default BestGear;