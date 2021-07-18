import './styles.css';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../../js/store/selectors';
import { useDispatch } from 'react-redux';
import { getLocalStorageData } from '../../js/store/actions';
import { useEffect, useMemo } from 'react';
import CurrentPage from '../../js/models/CurrentPage.js';
import CartModel from '../../js/models/CartModel';

const Header = ({ modalRef }) => {
    const cart = useSelector(selectCart);
    
    const dispatch = useDispatch();

    const cartModel = useMemo(() => {
        return new CartModel(cart);
    }, [ cart ]);

    useEffect(() => {
        dispatch(getLocalStorageData());
    }, [ dispatch ]);

    const clickHandler = () => {
        modalRef.current.classList.toggle('cart-modal--toggle');
        CurrentPage.page.classList.toggle('modal-opened');
        CurrentPage.page.addEventListener('click', event => {
            modalRef.current.classList.remove('cart-modal--toggle');
            CurrentPage.page.classList.remove('modal-opened');
        })
    };

    return (
        <header id="header" className="flex px-5 width-100 px-lg header">
            <div className="align-center flex justify-between width-100 header__division">
                <div className="align-center flex justify-start header__division-2">
                    <button
                        className="fa fas fa-bars fa-icon background-transparent border-none outline-none
                        text-white d-none-md header__menu-button"
                        aria-label="Menu button">
                    </button>
                    <Logo customClass="d-none d-block-tablet logo--tablet"/>
                </div>
                <Logo customClass="logo__header-mobile d-none-tablet" />
                <nav className="d-none header__navigation d-flex-md">
                    <ul className="align-center flex justify-between header__list">
                        <li className="header__item">
                            <Link to="/" className="block uppercase text-white font-weight-7 header__link">Home</Link>
                        </li>
                        <li className="header__item">
                            <Link to="./headphones" className="block uppercase text-white font-weight-7 header__link">
                                Headphones
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to="./speakers" className="block uppercase text-white font-weight-7 header__link">
                                Speakers
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to="./earphones" className="block uppercase text-white font-weight-7 header__link">
                                Earphones
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button onClick={clickHandler}
                    className="fa fas fa-shopping-cart fa-icon background-transparent border-none outline-none text-white"
                    aria-label="Menu button">
                        <sup className="bg-orange cart-itens">{ cartModel.totalItens() }</sup>
                </button>
            </div>
        </header>
    );
};

export default Header;