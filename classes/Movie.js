// import the Media class:

const Media = require("./Media")

// create your Movie class:

class Movie extends Media {
	constructor(title, year, genre, director, duration, rating) {
		super(title, year, genre)
		this.director = director
		this.duration = duration
		this.rating = rating
	}
	summary() {
		return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
	}

	static longestMovie(arr) {
		let max = 0
		let highest = null

		for (let i = 0; i < arr.length; i++) {
			if (arr[i].duration > max) {
				max = arr[i].duration
				if (arr[i].duration == max) {
					highest = arr[i]
				}
			}
		}

		return highest
	}
}

// don't change below
module.exports = Movie
