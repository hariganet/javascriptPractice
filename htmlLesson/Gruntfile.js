// 'use strict';

module.exports = function(grunt){
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //grunt-contrib-connectの設定(webサーバの設定)
    connect: {
      site: { // オプション未設定のため、からオブジェクト
        options: {
          hostname: '*',
          port: 8000
        }
      } 
    },

    // grunt-contrib-watchの設定(ウォッチ対象の設定)
    watch: {
      static_files: {
        files: ['**/*.html','**/*.css'] //ウォッチ対象として、ディレクトリは以下の*.htmlを指定
      },
      js_files: {
        files: '**/*.js'
      },
      options: {
        livereload: true  // 変更があればリロードするよ  
      }  
    }
  });

  // Load tasks(grunt実行時に読み込むプラグイン)
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks(grunt実行時に実行するタスク)
  grunt.registerTask('default', ['connect', 'watch']);
};
