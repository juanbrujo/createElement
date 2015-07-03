module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("createElement.json"),
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *\n" +
				" *  <%= pkg.homepage %>\n" +
				" *  Demo: <%= pkg.demo %>\n" +
				" *\n" +
				" *  Author: <%= pkg.author.name %> |  <%= pkg.author.twitter %>\n" +
				" *  License: <%= pkg.licenses[0].type %>\n" +
				" *  <%= pkg.licenses[0].copyright %>\n" +
				" */\n"
		},
		jshint: {
			files: ["src/createElement.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},
		uglify: {
			min: {
				options: {
					banner: "<%= meta.banner %>"
				},
				files: {
					'dist/createElement.min.js': ['src/createElement.js']
				}
			},
			normal: {
				options: {
					banner: "<%= meta.banner %>",
					beautify: true,
					mangle: false
				},
				files: {
					'dist/createElement.js': ['src/createElement.js']
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
		    scripts: {
				files: ["src/*.js"],
				tasks: ["uglify"],
				options: {
					spawn: false
				}
			},
			html: {
				files: ["demo/*.html"],
			},
		    tasks: ["default"]
		}
	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["uglify"]);
	grunt.registerTask("testjs", ["jshint"]);

};
