angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("auth/auth.html","<body>\n    <div class=\"form_auth\">\n      <div class=\"form_header\">\n      <h1 ng-bind=\"::$ctrl.title\"></h1>\n      <p>\n        <a ui-sref=\"app.register\"\n          ng-show=\"$ctrl.authType === \'login\'\">\n           Een account aanmaken\n        </a>\n        <a ui-sref=\"app.login\"\n          ng-show=\"$ctrl.authType === \'register\'\">\n          Ik heb al een account\n        </a>\n      </p>\n    </div>\n\n      <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n            <fieldset class=\"form-group\">\n                <input class=\"form-control\"\n                  type=\"email\"\n                  placeholder=\"E-mail\"\n                  ng-model=\"$ctrl.formData.email\">\n            </fieldset>\n            <fieldset class=\"form-group\">\n                <input class=\"form-control\"\n                  type=\"password\"\n                  placeholder=\"Wachtwoord\"\n                  ng-model=\"$ctrl.formData.password\">\n            </fieldset>\n            <fieldset class=\"form-group\"\n              ng-show=\"$ctrl.authType === \'register\'\">\n                <input class=\"form-control\"\n                  type=\"password\"\n                  placeholder=\"Bevestig wachtwoord\">\n            </fieldset>\n            <fieldset class=\"form-group\"\n              ng-show=\"$ctrl.authType === \'register\'\">\n                <input class=\"form-control\"\n                  type=\"text\"\n                  placeholder=\"Voornaam\"\n                  ng-model=\"$ctrl.formData.firstName\">\n            </fieldset>\n            <fieldset class=\"form-group\"\n              ng-show=\"$ctrl.authType === \'register\'\">\n                <input class=\"form-control\"\n                  type=\"text\"\n                  placeholder=\"Naam\"\n                  ng-model=\"$ctrl.formData.name\">\n            </fieldset>\n            <fieldset class=\"form-group\"\n              ng-show=\"$ctrl.authType === \'register\'\">\n                <input class=\"form-control\"\n                  type=\"text\"\n                  placeholder=\"Regio\"\n                  list=\"datalistRegions\"\n                  ng-model=\"$ctrl.formData.region\">\n                  <datalist id=\"datalistRegions\">\n                    <option value=\"Antwerpen\">Antwerpen</option>\n                    <option value=\"Henegouwen\">Henegouwen</option>\n                    <option value=\"Limburg\">Limburg</option>\n                    <option value=\"Luik\">Luik</option>\n                    <option value=\"Luxemburg\">Luxemburg</option>\n                    <option value=\"Namen\">Namen</option>\n                    <option value=\"Oost-Vlaanderen\">Oost-Vlaanderen</option>\n                    <option value=\"Vlaam-Brabant\">Vlaams-Brabant</option>\n                    <option value=\"Waals-Brabant\">Waals-Brabant</option>\n                    <option value=\"West-Vlaanderen\">West-Vlaanderen</option>\n                  </datalist>\n            </fieldset>\n            <fieldset class=\"form-group\"\n              ng-show=\"$ctrl.authType === \'register\'\">\n                <input class=\"form-control\"\n                  type=\"text\"\n                  placeholder=\"DJ-naam\"\n                  ng-model=\"$ctrl.formData.djName\">\n            </fieldset>\n            <fieldset class=\"form-group\"\n              ng-show=\"$ctrl.authType === \'register\'\">\n              <input class=\"form-control\"\n                  type=\"text\"\n                  placeholder=\"Genre\"\n                  ng-model=\"$ctrl.formData.genres\">\n            </fieldset>\n            <fieldset class=\"form-group\"\n              ng-show=\"$ctrl.authType === \'register\'\">\n                <input class=\"form-control\"\n                  type=\"text\"\n                  placeholder=\"Prijs per uur\"\n                  ng-model=\"$ctrl.formData.price\">\n            </fieldset>\n        </fieldset>\n          <button class=\"btn btn-lg btn-primary pull-xs-right\"\n            type=\"submit\"\n            ng-bind=::$ctrl.title></button>\n        </form>\n    </div>\n</body>\n");
$templateCache.put("booking/booking.html","<div class=\"bookings-page\">\n      <div class=\"form_header\">\n        <h1 class=\"text-xs-center\">Boek {{::$ctrl.profile.djName}}</h1>\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n      </div>\n        <form ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"naam\"\n                ng-model=\"$ctrl.formData.name\"/>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"voornaam\"\n                ng-model=\"$ctrl.formData.firstName\"/>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"email\"\n                placeholder=\"email\"\n                ng-model=\"$ctrl.formData.email\"/>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"tel of gsm\"\n                ng-model=\"$ctrl.formData.tel\"/>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n              type=\"text\"\n              placeholder=\"naam van de activiteit\"\n              ng-model=\"$ctrl.formData.activity\"/>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n              type=\"date\"\n              placeholder=\"Datum van de activiteit\"\n              ng-model=\"$ctrl.formData.date\"/>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n              type=\"text\"\n              placeholder=\"adres\"\n              ng-model=\"$ctrl.formData.adres\"/>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n              type=\"text\"\n              placeholder=\"locatie\"\n              ng-model=\"$ctrl.formData.location\"/>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control form-control-lg\"\n                rows=\"8\"\n                placeholder=\"Uw bericht \"\n                ng-model=\"$ctrl.formData.message\"/>\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n                type=\"submit\">\n                Boek\n            </button>\n          </fieldset>\n        </form>\n</div>\n");
$templateCache.put("components/list-errors.html","<ul class=\"error-messages\" ng-show=\"$ctrl.errors\">\n  <div ng-repeat=\"(field, errors) in $ctrl.errors\">\n    <li ng-repeat=\"error in errors\">\n      {{field}} {{error}}\n    </li>\n  </div>\n</ul>\n");
$templateCache.put("home/home.html","<body>\n  <div class=\"form_search\">\n    <div>\n      <div class=\"form_header\">\n        <h1>Zoek de DJ die bij u past</h1>\n      </div>\n      <form ng-submit=\"$ctrl.submitForm()\">\n        <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n          <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"Genre\"\n                list=\"datalistGenres\"\n                ng-model=\"$ctrl.formData.genre\"/>\n              <datalist id=\"datalistGenres\">\n              </datalist>\n          </fieldset>\n\n          <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"Regio\"\n                list=\"datalistRegions\"\n                ng-model=\"$ctrl.formData.region\"/>\n                <datalist id=\"datalistRegions\">\n                  <option value=\"Antwerpen\">Antwerpen</option>\n                  <option value=\"Henegouwen\">Henegouwen</option>\n                  <option value=\"Limburg\">Limburg</option>\n                  <option value=\"Luik\">Luik</option>\n                  <option value=\"Luxemburg\">Luxemburg</option>\n                  <option value=\"Namen\">Namen</option>\n                  <option value=\"Oost-Vlaanderen\">Oost-Vlaanderen</option>\n                  <option value=\"Vlaam-Brabant\">Vlaams-Brabant</option>\n                  <option value=\"Waals-Brabant\">Waals-Brabant</option>\n                  <option value=\"West-Vlaanderen\">West-Vlaanderen</option>\n                </datalist>\n          </fieldset>\n\n          <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"Prijs\"\n                ng-model=\"$ctrl.formData.price\"/>\n          </fieldset>\n      </fieldset>\n        <button class=\"btn btn-lg btn-primary pull-xs-right\"\n          type=\"submit\">Zoek</button>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"in_the_picture\">\n    <div class=\"in_the_picture_header\">\n      <h1>Artiesten in de kijker</h1>\n    </div>\n    <div class=\"profile_preview\"\n      ng-repeat=\"profile in $ctrl.profile\"\n      show-image\n      image=\"profile.image\"\n      ng-click=\"$ctrl.clickDj(profile.djName)\">\n        <div class=\"name_block\">\n          <h3 class=\"name\" ng-bind=\"profile.djName\"></h3>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"form_search\"\n    id=\"last_form\">\n    <div class=\"form_header\">\n    <h1>Zoek een DJ bij naam</h1>\n  </div>\n    <form ng-submit=\"$ctrl.submitFormDjName()\">\n      <fieldset class=\"form-group\" ng-disabled=\"$ctrl.isSubmitting\">\n        <input class=\"form-control\"\n          type=\"text\"\n          placeholder=\"Naam\"\n          ng-model=\"$ctrl.formDataName.djName\"/>\n      </fieldset>\n      <button class=\"btn btn-lg btn-primary pull-xs-right\"\n        type=\"submit\">Zoek</button>\n    </form>\n  </div>\n</body>\n");
$templateCache.put("contact/contact.html","<body>\n  <div class=\"form_contact\">\n    <div class=\"form_header\">\n    <h1>Vragen?</h1>\n    <p>\n      <a ui-sref=\"app.register\">\n        Een account aanmaken\n      </a>\n    </p>\n  </div>\n    <form>\n      <fieldset class=\"form_group\">\n          <input class=\"form-control\"\n            type=\"text\"\n            placeholder=\"Naam en voornaam\">\n      </fieldset>\n      <fieldset class=\"form_group\">\n          <input class=\"form-control\"\n            type=\"email\"\n            placeholder=\"E-mail\">\n      </fieldset>\n      <fieldset class=\"form_group\">\n          <input class=\"form-control\"\n            type=\"text\"\n            placeholder=\"Tel. of GSM\">\n      </fieldset>\n      <fieldset class=\"form_group\">\n          <textarea class=\"form-control\"\n            cols=\"25\"\n            rows=\"10\"\n            placeholder=\"Uw bericht\"/>\n      </fieldset>\n      <button class=\"btn btn-lg btn-primary pull-xs-right\"\n        type=\"submit\">Verzenden</button>\n    </form>\n  </div>\n</body>\n");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n\n<div ui-view></div>\n\n<app-footer></app-footer>\n");
$templateCache.put("layout/footer.html","<footer>\n  <div class=\"footer_content\">\n    <img src=\"../../images/logo.png\" alt=\"logo\"/>\n  </div>\n  <div class=\"footer_poweredBy\">\n    <span class=\"attribution\">\n      &copy; {{::$ctrl.date | date:\'yyyy\'}} {{$ctrl.appName}}.\n      powered by Cédric Debot.\n    </span>\n  </div>\n</footer>\n");
$templateCache.put("layout/header.html","<header>\n  <div class=\"logo\">\n    <img src=\"../../images/logo.png\" alt=\"logo\"/>\n  </div>\n  <div class=\"login-link\">\n    <!--ik ben een dj link (niet-ingelogde gebruiker) -->\n    <a ui-sref=\"app.login\"\n      show-authed=\"false\">\n      Ik ben een dj\n    </a>\n\n    <!-- log out (ingelogde gebruiker)-->\n    <a ui-sref=\"app.login\"\n      ng-click=\"$ctrl.logout()\"\n    show-authed=\"true\">\n      Uitloggen\n    </a>\n  </div>\n\n  <div class=\"navigation\">\n  <nav class=\"navbar\">\n    <!-- nav voor niet-ingelogde gebruikers -->\n      <ul show-authed=\"false\">\n        <li>\n          <a class=\"nav-link\"\n            ui-sref-active=\"active\"\n            ui-sref=\"app.home\">\n            Home\n          </a>\n        </li>\n        <li>\n          <a class=\"nav-link\"\n            ui-sref-active=\"active\"\n            ui-sref=\"app.overview\">\n            DJ\'s\n          </a>\n        </li>\n        <li>\n          <a class=\"nav-link\"\n            ui-sref-active=\"active\"\n            ui-sref=\"app.contact\">\n            Contact\n          </a>\n        </li>\n      </ul>\n\n      <ul show-authed=\"true\">\n        <li>\n          <a class=\"nav-link\"\n            ui-sref-active=\"active\"\n            ui-sref=\"app.profile({djName: $ctrl.currentUser.djName})\">\n            Mijn Profiel\n          </a>\n        </li>\n        <li>\n          <a class=\"nav-link\"\n            ui-sref-active=\"active\"\n            ui-sref=\"app.settings\">\n            Settings\n          </a>\n        </li>\n        <li>\n          <a class=\"nav-link\"\n            ui-sref-active=\"active\"\n            ui-sref=\"app.contact\">\n            Contact\n          </a>\n        </li>\n      </ul>\n  </nav>\n</div>\n</header>\n");
$templateCache.put("overview/overview.html","<div class=\"overview\">\n  <div class=\"overview_header\">\n    <h1>Gevonden DJ\'s</h1>\n    <div class=\"overview_profile_preview\"\n      ng-repeat=\"profile in $ctrl.profile\"\n      show-image\n      image=\"profile.image\"\n      ng-click=\"$ctrl.clickDj(profile.djName)\">\n      <div class=\"overview_name_block\">\n        <h3 class=\"name\" ng-bind=\"profile.djName\"></h3>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("profile/profile.html","<div class=\"profile\">\n  <div class=\"left_container\">\n  <div class=\"profile_pic\"\n    show-image\n    image=\"$ctrl.profile.image\">\n    <div class=\"profile_name_block\">\n      <h3 class=\"name\" ng-bind=\"$ctrl.profile.djName\"></h3>\n    </div>\n  </div>\n\n  <div class=\"profile_genres\">\n    <ul>\n      <li ng-repeat=\"genre in $ctrl.profile.genres\">\n          {{genre}}\n      </li>\n    </ul>\n  </div>\n  <div class=\"profile_price\">\n    <h3>€ {{::$ctrl.profile.price}} / uur</h3>\n  </div>\n</div>\n\n  <div class=\"profile_bio\">\n    <p ng-bind=\"::$ctrl.profile.biography\"></p>\n  </div>\n\n  <div class=\"profile_references\">\n    <h2>Referenties</h2>\n    <ul>\n      <li ng-repeat=\"reference in $ctrl.profile.references\">\n        {{reference}}\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"profile_button\">\n    <button class=\"btn btn-lg btn-primary pull-xs-right\"\n      ng-click=\"$ctrl.book()\">\n      Boeken\n    </button>\n</div>\n</div>\n");
$templateCache.put("settings/settings.html","<div class=\"form_settings\">\n  <div class=\"form_header\">\n    <h1>Your settings</h1>\n  </div>\n\n  <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n  <form ng-submit=\"$ctrl.submitForm()\">\n    <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n      <fieldset class=\"form-group\">\n        <p>Profiel foto</p>\n        <input class=\"form-control\"\n          type=\"text\"\n          placeholder=\"URL of profile picture\"\n          ng-model=\"$ctrl.formData.image\"/>\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n        <p>DJ-naam\n        <input class=\"form-control\"\n          type=\"text\"\n          placeholder=\"dj-naam\"\n          ng-model=\"$ctrl.formData.djName\"/>\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n        <p>Regio</p>\n        <input class=\"form-control\"\n          type=\"text\"\n          placeholder=\"regio\"\n          list=\"datalistRegions\"\n          ng-model=\"$ctrl.formData.region\"/>\n          <datalist id=\"datalistRegions\">\n            <option value=\"Antwerpen\">Antwerpen</option>\n            <option value=\"Henegouwen\">Henegouwen</option>\n            <option value=\"Limburg\">Limburg</option>\n            <option value=\"Luik\">Luik</option>\n            <option value=\"Luxemburg\">Luxemburg</option>\n            <option value=\"Namen\">Namen</option>\n            <option value=\"Oost-Vlaanderen\">Oost-Vlaanderen</option>\n            <option value=\"Vlaam-Brabant\">Vlaams-Brabant</option>\n            <option value=\"Waals-Brabant\">Waals-Brabant</option>\n            <option value=\"West-Vlaanderen\">West-Vlaanderen</option>\n          </datalist>\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n        <p>Prijs per uur</p>\n        <input class=\"form-control\"\n          type=\"number\"\n          placeholder=\"prijs per uur\"\n          ng-model=\"$ctrl.formData.price\"/>\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n        <p>Korte biografie</p>\n        <textarea class=\"form-control form-control-lg\"\n          rows=\"8\"\n          placeholder=\"Korte biografie\"\n          ng-model=\"$ctrl.formData.biography\"/>\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n        <p>Genres</p>\n        <input class=\"form-control\"\n          type=\"text\"\n          placeholder=\"genre\"\n          ng-model=\"$ctrl.formData.genres\"/>\n      </fieldset>\n\n      <fieldset class=\"form-group\">\n        <p>Referenties</p>\n        <input class=\"form-control\"\n          type=\"text\"\n          placeholder=\"referentie\"\n          ng-model=\"$ctrl.formData.references\"/>\n      </fieldset>\n\n      <button class=\"btn btn-lg btn-primary pull-xs-right\"\n          type=\"submit\">\n          Update profiel\n      </button>\n    </fieldset>\n  </form>\n</div>\n");}]);