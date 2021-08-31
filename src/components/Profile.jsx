import React from "react";
import cl from './css/Profile.module.css';

const Profile = () => {
    return (
		<div className="content">
			<div className={`${cl.contentBanner} ${'shadow'}`}>
				<img src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM" />
			</div>
			<div className={`${cl.user} ${'rounded'} ${'shadow'} ${'content-flat'}`}>
				<div className={cl.userAvatar}>
					<img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt="123" />
				</div>
				<div className={cl.userInfo}>
					<h2>User Name</h2>
					<ul>
						<li>
							Date of Birth: 2 january
						</li>
						<li>
							City: Minsk
						</li>
						<li>
							Education: BSU'11
						</li>
						<li>
							Website: test.com
						</li>
					</ul>
				</div>
			</div>

			<div className="rounded shadow content-flat posts">
				<div className="page-title">My Posts</div>
				<div className={cl.newPost}>
					<textarea placeholder="Your News..." className="rounded" />
					<button type="button" className="btn">Send</button>
				</div>
				<div className={cl.currentPosts}>
					<div className={cl.currentPostsAvatar}>
						<img src="https://image.flaticon.com/icons/png/512/147/147144.png" />
					</div>
					<div className={cl.currentPostsText}>
						Some text here
					</div>
				</div>
			</div>
		</div>
    )
}

export default Profile;