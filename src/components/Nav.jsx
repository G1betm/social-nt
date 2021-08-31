import React from "react";
import './css/Nav.css';
import userIcon from '../images/profile-user.svg';
import messagesIcon from '../images/speech-bubble.svg';
import newsIcon from '../images/newspaper.svg';
import musicIcon from '../images/play-button.svg';
import settingsIcon from '../images/settings.svg';

const Nav = () => {
    return (
        <nav className="nav rounded shadow">
			<ul>
				<li className="nav-item">
					<a href="#">
                        <img src={userIcon}/>
                        Profile
                    </a>
				</li>
				<li className="nav-item">
					<a href="#">
                        <img src={messagesIcon}/>
                        Messages
                    </a>
				</li>
				<li className="nav-item">
					<a href="#">
                        <img src={newsIcon}/>
                        News
                    </a>
				</li>
				<li className="nav-item">
					<a href="#">
                        <img src={musicIcon}/>
                        Music
                    </a>
				</li>
				<li className="nav-item">
					<a href="#">
                        <img src={settingsIcon}/>
                        Settings
                    </a>
				</li>
			</ul>
		</nav>

    )
}

export default Nav;