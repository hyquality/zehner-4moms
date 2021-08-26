module.exports = {
	config: {
		tailwindjs: "./tailwind.config.js",
		port: 9050
	},
	paths: {
		root: "./",
		src: {
			base: "./src",
			fonts: "./src/fonts",
			css: "./src/css",
			js: "./src/js",
			img: "./src/img"
		},
		dist: {
			base: "./dist",
			fonts: "./dist/fonts",
			css: "./dist/css",
			js: "./dist/js",
			img: "./dist/img"
		},
		build: {
			base: "./build",
			fonts: "./build/fonts",
			css: "./build/css",
			js: "./build/js",
			img: "./build/img"
		}
	}
}