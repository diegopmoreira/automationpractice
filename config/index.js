const HtmlReporter = require('protractor-beautiful-reporter');
const path = require('path');
const baseDirectory = path.resolve(__dirname, '../assets/test_results');
const Config = require('./config');
const env = new Config('APP');

const config = {
  framework: 'jasmine',
  directconnect: true,
  capabilities: {
    browserName: 'chrome',
    acceptInsecureCerts: true
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000
  },
  params: {
    environmentUrl: env.url.seleniumAddress
  },
  suites: {
    addProductCart: ['../test_spec/addProduct.js']
  },
  onPrepare () {
    jasmine.getEnv().addReporter(
      new HtmlReporter({
        baseDirectory,
        takeScreenShotsOnlyForFailedSpecs: true,
        docName: 'buildReport.html',
        docTitle: 'Build Report',
        jsonsSubfolder: 'jsons',
        screenshotsSubfolder: 'screenshots'
      }).getJasmine2Reporter()
    );
  }
};

exports.config = config;
