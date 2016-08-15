/*module.exports = function(grunt){
	grunt.registerTask('default',function(){
		console.log('grunt');
	})
}*/
/*module.exports=function(grunt){
	grunt.registerTask('task1',function(name){
		if (name.length<2) {
			grunt.fatal('too short ~~');

		}
		console.log('hello '+name);
	})
	grunt.registerTask('task2',function(){
		console.log('task2');
	})
	grunt.registerTask('all',['task1','task2']);
}*/


	/*grunt.initConfig({
		task2:{
			name:'fsd',
			age:'12',
			country:'china'
		}
	});*/
/*	grunt.registerMultiTask('task2',function(){
		console.log(this.target+":"+this.data);
	})*/
	/*grunt.registerTask('task2',function(){
		console.log(grunt.config.get('task2.name'));

	})*/

/*	grunt.registerTask('mkdir',function(){
		grunt.file.mkdir('dist/k');
	})*/
	/*	grunt.registerTask('remove',function(){
		grunt.file.delete('dist/');
	})*/
	/*grunt.initConfig({
		pkg:grunt.file.readJSON('package.json')
	});
	grunt.registerTask('read',function(){
		var fileTxt=grunt.file.readJSON('package.json');
		console.log(fileTxt.name);
		var content=grunt.template.process('项目名称:<%=pkg.name%> 版本号:<%=pkg.version%>');
		grunt.file.write('file.txt',content);

	})*/
module.exports=function(grunt){
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.initConfig({
		/*copy:{
			html:{
				src:'index.html',
				dest:'dest/'
			}
		},
		sass:{
			css:{
				src:'sass/style.scss',
				dest:'dest/style.css'
			}
		},
		watch:{
			html:{
				files:'index.html',
				tasks:['copy']
			}
		},
		connect:{
			sever:{
				options:{
					port:'8000',
					base:'dest/',
				}
			}
		},
		concat:{
			css:{
				src:['dest/index.css','dest/style.css'],
				dest:'common.css'
			}
		},
		cssmin:{
			dist:{
				src:'dest/style.css',
				dest:'index.min.css'
			}
		}*/
		/*connect:{
			html:{
				options:{
					port:8000,
					base:'dest/',
					livereload:true,
				}
			},
			copy:{
				html:{
					src:'index.html',
					dest:'dest/'
				}
			},
			watch:{
				html:{
					files:'index.html',
					tasks:['copy']
					options:{
						livereload:true,
					}
				},
				css:{
					files:'sass/*.scss',
					tasks:['sass']
				}
			}
			sass:{
				dist:{
					files:[{
					expand:true,
					cwd:'sass/',
					src:[*.scss],
					dest:'dest/',
					ext:'.css'
					}]
				}
				
			}
		}*/


	})
	grunt.registerTask('default',['connect','watch']);

}
/*concat:{
			css:{
				src:['dest/index.css','dest/style.css'],
				dest:'common.css'
			}
		},
		compress:{
			css:{
				src:['dest/index.css','dest/style.css'],
				dest:'common.css'
			}
		}*/