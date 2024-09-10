// import the Media class:

const Media = require("./Media")

// create your Music class:

class Music extends Media {
	constructor(title, year, genre, artist, length) {
		super(title, year, genre)
		this.artist = artist
		this.length = length
	}

	summary() {
		return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
	}

	static shortestAlbum(arr) {
		let lowest = null
		for (let i = 0; i < arr.length; i++) {
			let min = arr[0].length

			if (arr[i].length < min) {
				min = arr[i].length
				if (arr[i].length == min) {
					lowest = arr[i]
				}
			}
		}
		return lowest
	}
}

// don't change below
module.exports = Music
