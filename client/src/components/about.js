import React from 'react';
import '../styles/_about.scss';

export default () => {
    return (
        <div>
            Hey! My name's Alex. I'm a software developer. Everyone knows software developers need their own websites, and this one is mine.
            <br />
            <br />
            If you'd like to contact me, you can do so at <a href="mailto:alexbainter@gmail.com?Subject=Hello!">alexbainter@gmail.com</a>.
            <br />
            <br />
            You can also find me at these other places:
            <ul className="link-container">
                <li className="link-container__link"><a href="https://github.com/metalex9"><i className="fa fa-github" /></a></li>
                <li className="link-container__link"><a href="http://stackoverflow.com/users/1762237/metalex9?tab=profile"><i className="fa fa-stack-overflow" /></a></li>
                <li className="link-container__link"><a href="https://medium.com/@metalex9"><i className="fa fa-medium" /></a></li>
                <li className="link-container__link"><a href="https://www.linkedin.com/in/alexbainter/"><i className="fa fa-linkedin" /></a></li>
            </ul>
        </div>
    );
}
