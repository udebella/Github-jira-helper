import {declareWebComponent} from '../utils.js'

class CommitList extends HTMLElement {
	static get tagName() {
		return 'gjh-commit-list'
	}

	set list(list) {
		this._list = list
		this.render()
	}

	render() {
		const commits = this._list

		const commitList = commits => commits
			.map(message => `<li>${message}</li>`)
			.reduce((acc, next) => acc + next)

		this.innerHTML = Object.entries(commits)
			.map(([key, commits]) => `<div>
					<span data-test="list-label">${key}</span>
					<ul data-test="list-commits">${commitList(commits)}</ul>
				</div>`)
			.reduce((acc, next) => acc + next)
	}
}

declareWebComponent(CommitList)
