import React, { Component } from 'react';

import Settings from '@carbon/icons-react/es/settings/24';
import Search from '@carbon/icons-react/es/search/24';
import Notification from '@carbon/icons-react/es/notification/24';
import UserAvatarFilled from '@carbon/icons-react/es/user--avatar--filled/24';

import './Menu.scss';

class Menu extends Component {
	render() {
		let items = this.props.links.map((link, index) => {
			let item = (
				<a
					href={link.path}
					className="menu__link">
						{link.label.toUpperCase()}
				</a>
			);

			return (
				(link.active ? (
					<li key={index} className="menu__list-item menu__item-active">
						{item}
					</li>
				) : (
					<li key={index} className="menu__list-item">
						{item}
					</li>
				))
			)
		});

		return (
			<nav className="menu">
				<div className="menu__logo">
					<a
						href="https://w3.ibm.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{(this.props.Logo())}
					</a>
				</div>
				<h1>{this.props.title}</h1>

				<span className="menu__spacer">|</span>

				<ul className="menu__list">
					{items}
				</ul>

				<div className="menu__icons">
					<a href="/" rel="noopener noreferrer">
						<Search />
					</a>
					<a href="/" rel="noopener noreferrer">
						<Notification />
					</a>
					<a href="/sso" rel="noopener noreferrer">
						<UserAvatarFilled />
					</a>
					<a href="/" rel="noopener noreferrer">
						<Settings />
					</a>
				</div>
			</nav>
		);
	}
}

export default Menu;
