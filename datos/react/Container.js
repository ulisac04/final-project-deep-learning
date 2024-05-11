import {Container as Content}  from "semantic-ui-react";
import "./Container.scss";

export default function Container({children, bg}){
    return (
        <div className={bg === "light" ? null : 'container-bg'}>
            <Content>{children}</Content>
        </div>
    );
}