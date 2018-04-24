/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
        'npm:': 'node_modules/'

    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',
      'tslib': 'npm:tslib/tslib.js',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
      '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.min.js',

      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.min.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.min.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.min.js',
      'rxjs':'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.min.js',
      'moment': 'node_modules/moment/moment.min.js',

      'ng2-google-recaptcha': 'node_modules/ng2-google-recaptcha',
      'ngx-toastr': 'npm:ngx-toastr/bundles/ngx-toastr.umd.min.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
      packages: {
      'ng2-google-recaptcha': { main: 'index.js', defaultExtension: 'js' },
      app: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
        }
      }
  });
})(this);
