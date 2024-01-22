
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import menucloseIcon from "../assets/close-icon.svg"
import menuOpenIcon from "../assets/menu-icon.svg"

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase()
    return (
        <AnchorLink
            className={`${selectedPage  === lowerCasePage ? " text-yellow-500" : "" }
             hover:text-yellow-500  transition duration-500 `}
             href={`#${lowerCasePage}`}
             onClick={() => setSelectedPage(lowerCasePage)}
        >
        {page}
        </AnchorLink>
    )
}


const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage}) => {

    const [isMenuToggled , setIsMenuToggled] = useState(false);
    const isAboveSmallScreen = useMediaQuery("(min-width: 768px )");
    const navbarBackground = isTopOfPage? "" : "bg-primary";

    return (
        <nav className={` ${navbarBackground} z-40 w-full fixed top-0 py-6 `}>
            <div className="flex items-center justify-between mx-auto w-5/6 " >
                <h4 className=" font-extrabold text-3xl font-mono ">RRK</h4>
                {/* Desktop nav */}
                {isAboveSmallScreen ? (
                    <div className="flex  gap-16 font-serif text-sm font-semibold" >
                        <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />

                    </div>
                ) : (
                    <button
                        className="rounded-full bg-teritary p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img src={menuOpenIcon} alt="menu-icon" />
                    </button>
                )}
                {/* Mobile menu popup */}
                { !isAboveSmallScreen && isMenuToggled && (
                    <div className=" fixed right-0 bottom-0 h-full bg-primary w-80 " >
                        {/* close Icon */}
                        <div className=" flex justify-end p-12 " >
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)} >
                                <img src={menucloseIcon} alt="close-icon" />
                            </button>
                        </div>

                        {/* menu item */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl bg-primary " >
                            <Link 
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>

                    </div>
                ) }

            </div>
        </nav>
    )
}

export default Navbar

