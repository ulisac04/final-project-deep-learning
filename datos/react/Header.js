import "./Header.scss";
import { Menu } from "semantic-ui-react";
import { useState } from "react";
import { useNavigate , useLocation } from "react-router-dom";

export default function Header(){
    const currentPath = useLocation();
    const finalCurrentPath = currentPath.pathname.replace("/", "");
    const navigate = useNavigate();

    const [activeItem, setActiveItem] = useState(finalCurrentPath);
    const handleItemClick = (e, {name}) => {
        setActiveItem(name);
        navigate(`/${name}`);
    }
    return(
        <div className="header-menu">
            <Menu secondary>
            <Menu.Item name="inicio" active={activeItem === "inicio"} onClick={handleItemClick}/>
            <Menu.Item name="series" active={activeItem === "series"} onClick={handleItemClick}/>
            <Menu.Item name="comics" active={activeItem === "comics"} onClick={handleItemClick}/>
            </Menu>
        </div>
    );
}