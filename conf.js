var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
	//The address of a running selenium server.
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  
 //Here we specify the name of the specs files.
  specs: ['test.js'],
    onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'Reports/screenshots'
      }).getJasmine2Reporter());

  
  }
}