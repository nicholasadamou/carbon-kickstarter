import React, { Component } from 'react';

import './App.scss';

import Menu from './components/Menu/Menu'
import Logo from './assets/Logo'
import Card from './components/Card/Card'

import Migrate from '@carbon/icons-react/es/migrate/32';
import Development from '@carbon/icons-react/es/development/32';
import Document from '@carbon/icons-react/es/document/32';

import { Button } from 'carbon-components-react';

class App extends Component {
  render() {
	let links = [
		{ label: 'My Journals', path: '/journals' },
		{ label: 'Consolidation', path: '/consolidation' },
		{ label: 'Allocations', path: '/allocations' },
		{ label: 'Help', path: '/help' }
	];
			return (
			<div className="App">
				<Menu Logo={Logo} title="Global ledger" links={links} />
				<div className="page-header">
				<h1 className="title">Welcome to Global Ledger</h1>
                <div className="body-header">This application is the single entry point to IBM's ledger for all Global Journal activity and is the sole repository of Journal back-up documentation to support the ledger entry.</div>
                    <div className="header-buttons">
							<Button className="header-btn">
								<span className="header-btn-content">MY JOURNALS</span>
							</Button>
						<Button className="header-btn header-btn-cons" >
								<span className="header-btn-content">CONSOLIDATION</span>
						</Button>
                    </div>
				</div>
				<div className="cards-container">
					<div className="cards bx--row">
						<Card>
							<div className="top-card">
								<span><Document  className="icons" /></span><br />
								<h1 className="buttonName">Journals</h1> <br />
								<div className="ButtonClass">
									<Button
										className="buttons"
										iconDescription="View Journals">
											<span>View</span>
									</Button>

									<Button
										className="buttons"
										iconDescription="Edit Journals">
											<span>Edit</span>
										</Button>
								</div>
							</div>
						</Card>
						<Card>
							<div className="top-card">
								<span><Development  className="icons" /></span><br />
								<h1 className="buttonName">Consolidation</h1> <br />
								<div className="ButtonClass">
									<Button
										className="buttons"
										iconDescription="View Journals">
											<span>View</span>
									</Button>

									<Button
										className="buttons"
										iconDescription="Edit Journals">
											<span>Edit</span>
										</Button>
								</div>
							</div>
						</Card>
						<Card>
							<div className="top-card">
								<span><Migrate  className="icons" /></span><br />
								<h1 className="buttonName">Allocations</h1> <br />
								<div className="ButtonClass">
									<Button
										className="buttons"
										iconDescription="View Journals">
											<span>View</span>
									</Button>

									<Button
										className="buttons"
										iconDescription="Edit Journals">
											<span>Edit</span>
										</Button>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
