angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("auth/auth.html","");
$templateCache.put("components/list-errors.html","<ul class=\"error-messages\" ng-show=\"$ctrl.errors\">\n  <div ng-repeat=\"(field, errors) in $ctrl.errors\">\n    <li ng-repeat=\"error in errors\">\n      {{field}} {{error}}\n    </li>\n  </div>\n</ul>\n");
$templateCache.put("home/home.html","");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n\n<div ui-view></div>\n\n<app-footer></app-footer>\n");
$templateCache.put("layout/footer.html","<footer>\n  <div class=\"footer_content\">\n    <img src=\"\" alt=\"logo\"/>\n    <form>\n      <input type=\"text\" placeholder=\"dj naam\"/>\n      <button type=\"submit\">zoek</button>\n    </form>\n    <div class=\"footer_menu\">\n      <a class=\"nav-link\"\n        ui-sref-active=\"active\"\n        ui-sref=\"app.contact\">\n        Contact\n      </a>\n  </div>\n  </div>\n  <div class=\"footer_poweredBy\">\n    <span class=\"attribution\">\n      &copy; {{::$ctrl.date | date:\'yyyy\'}} {{$ctrl.appName}}.\n      powered by Cédric Debot.\n    </span>\n  </div>\n</footer>\n");
$templateCache.put("layout/header.html","<header>\n  <div class=\"logo\">\n    <img src=\"../images/logo.png\" alt=\"logo\"/>\n  </div>\n  <div class=\"login-link\">\n    <!--ik ben een dj link (niet-ingelogde gebruiker) -->\n    <a ui-sref=\"app.auth\"\n      show-authed=\"false\">\n      Ik ben een dj\n    </a>\n\n    <!-- log out (ingelogde gebruiker)-->\n    <a show-authed=\"true\">\n      Uitloggen\n    </a>\n  </div>\n\n  <div class=\"navigation\">\n  <nav class=\"navbar\">\n    <!-- nav voor niet-ingelogde gebruikers -->\n      <ul show-authed=\"false\">\n        <li>\n          <a class=\"nav-link\"\n            ui-sref-active=\"active\"\n            ui-sref=\"app.home\">\n            Home\n          </a>\n        </li>\n        <li>\n          <a class=\"nav-link\"\n            ui-sref-active=\"active\"\n            ui-sref=\"app.djs\">\n            DJ\'s\n          </a>\n        </li>\n        <li>\n          <a class=\"nav-link\"\n            ui-sref-active=\"active\"\n            ui-sref=\"app.contact\">\n            Contact\n          </a>\n        </li>\n      </ul>\n\n      <ul show-authed=\"true\">\n        <li>\n          <a class=\"nav-link\"\n            ui-sref-active=\"active\"\n            ui-sref=\"app.home\">\n            Home\n          </a>\n        </li>\n        <li>\n          <a class=\"nav-link\"\n            ui-sref-active=\"active\"\n            ui-sref=\"app.djs\">\n            DJ\'s\n          </a>\n        </li>\n        <li>\n          <a class=\"nav-link\"\n            ui-sref-active=\"active\"\n            ui-sref=\"app.profile\">\n            Profiel\n          </a>\n        </li>\n        <li>\n          <a class=\"nav-link\"\n            ui-sref-active=\"active\"\n            ui-sref=\"app.messages\">\n            Berichten\n          </a>\n        </li>\n        <li>\n          <a class=\"nav-link\"\n            ui-sref-active=\"active\"\n            ui-sref=\"app.contact\">\n            Contact\n          </a>\n        </li>\n      </ul>\n  </nav>\n</div>\n</header>\n");
$templateCache.put("settings/settings.html","<div class=\"auth-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n\n      <div class=\"col-md-6 col-md-offset-3 col-xs-12\">\n        <h1 class=\"text-center form-header\" ng-bind=\"::$ctrl.title\">Login</h1>\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control input-lg\"\n                type=\"text\"\n                placeholder=\"Email\"\n                ng-model=\"$ctrl.formData.email\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control input-lg\"\n                type=\"password\"\n                placeholder=\"Password\"\n                ng-model=\"$ctrl.formData.password\" />\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\" ng-bind=\"::$ctrl.title\"></button>\n\n          </fieldset>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>\n");}]);