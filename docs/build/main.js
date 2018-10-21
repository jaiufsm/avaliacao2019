webpackJsonp([3],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_pergunta__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_avaliacao__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_local_data_local_data__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_ufsm_api_ufsm__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionsPage = /** @class */ (function () {
    function QuestionsPage(navCtrl, navParams, toastCtrl, keyboard, localDataProvider, apiUfsmProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.keyboard = keyboard;
        this.localDataProvider = localDataProvider;
        this.apiUfsmProvider = apiUfsmProvider;
        this.alertCtrl = alertCtrl;
    }
    QuestionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionsPage');
    };
    QuestionsPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.navParams.data.trabalho) {
            this.trabalho = this.navParams.data.trabalho;
            var avaliador = this.navParams.data.avaliador;
            if (this.trabalho.evento.includes('Fórum Extensão Conta')) {
                this.questions = __WEBPACK_IMPORTED_MODULE_2__interfaces_pergunta__["a" /* Perguntas */].perguntasExt;
            }
            else {
                this.questions = __WEBPACK_IMPORTED_MODULE_2__interfaces_pergunta__["a" /* Perguntas */].perguntasIC;
            }
            this.slidesIndex = 1;
            this.slidesLength = this.questions.length + 1;
            this.initQuestions();
            this.avaliacao = {
                trabalho: this.trabalho.id,
                tituloTrabalho: this.trabalho.titulo,
                avaliador: avaliador,
                estado: __WEBPACK_IMPORTED_MODULE_3__interfaces_avaliacao__["a" /* Estado */]["Não Avaliado"],
                respostas: new Array(this.questions.length)
            };
            this.localDataProvider.getAvaliacao(this.avaliacao.trabalho).then(function (avaliacao) {
                if (avaliacao) {
                    _this.avaliacao = avaliacao;
                }
            });
        }
    };
    QuestionsPage.prototype.initQuestions = function () {
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].discursiva == true) {
                this.questions[i].tipo = 1;
            }
            else {
                this.questions[i].listaRespostas = this.questions[i].respostas.split(';');
                this.questions[i].tipo = this.getQuestionType(this.questions[i].listaRespostas);
            }
        }
    };
    QuestionsPage.prototype.getQuestionType = function (listaRespostas) {
        for (var i = 0; i < listaRespostas.length; i++) {
            if (Number.isNaN(Number(listaRespostas[i]))) {
                return 3;
            }
            else {
                return 2;
            }
        }
    };
    QuestionsPage.prototype.setAvaliacao = function () {
        var _this = this;
        this.slides.getActiveIndex();
        console.log('setavaliacao');
        var respostasPendentes = 0;
        for (var i = 0; i < this.avaliacao.respostas.length; i++) {
            if (this.avaliacao.respostas[i] == undefined) {
                respostasPendentes += 1;
            }
        }
        if (respostasPendentes == 0) {
            this.avaliacao.avaliadorReal = "teste";
            this.apiUfsmProvider.setAvaliacao(this.avaliacao).then(function () {
                _this.presentToast('Avaliação enviada com sucesso.');
                _this.navCtrl.pop();
            }, function (err) {
                _this.presentToast('Não foi possível enviar a avaliação. Uma nova tentativa de envio será feita automaticamente quando houver conexão a internet.');
                _this.navCtrl.pop();
            });
        }
        else {
            this.showAlert('Responda todas as perguntas', '');
        }
    };
    QuestionsPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    QuestionsPage.prototype.showAlert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        alert.present();
    };
    QuestionsPage.prototype.slidesBack = function () {
        this.slides.slidePrev();
    };
    QuestionsPage.prototype.slidesForward = function () {
        this.slides.slideNext();
    };
    QuestionsPage.prototype.slideTo = function (index) {
        this.slides.slideTo(index);
    };
    QuestionsPage.prototype.slideChanged = function () {
        this.slidesIndex = this.slides.getActiveIndex() + 1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]) === "function" && _a || Object)
    ], QuestionsPage.prototype, "slides", void 0);
    QuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questions',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\questions\questions.html"*/'<!--\n  Generated template for the QuestionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Perguntas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n    <ion-slide *ngFor="let question of questions; let i = index">\n      <h2>{{question.nome}}</h2>\n      <ion-textarea *ngIf="question.tipo == 1" placeholder="Resposta" [(ngModel)]="avaliacao.respostas[i]"></ion-textarea>\n      <ion-range *ngIf="question.tipo == 2" [(ngModel)]="avaliacao.respostas[i]" min="0" max="5" pin="true" snaps="true"></ion-range>\n      <ion-list *ngIf="question.tipo == 3" radio-group [(ngModel)]="avaliacao.respostas[i]">\n        <ion-item *ngFor="let resposta of question.listaRespostas">\n          <ion-label>{{resposta}}</ion-label>\n          <ion-radio value="{{resposta}}"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n    <ion-slide>\n      <h2>Respostas:</h2>\n      <ion-list>\n        <ion-item text-wrap *ngFor="let question of questions; let i = index" (click)="slideTo(i)">\n          <h2>{{question.nome}}</h2>\n          <p>{{avaliacao.respostas[i]}}</p>\n          <p *ngIf="!avaliacao.respostas[i]" style="color:red">Não respondido</p>\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n\n<ion-footer *ngIf="!keyboard.isOpen()">\n    <ion-toolbar color="primary">\n      <ion-title>{{slidesIndex}}/{{slidesLength}}</ion-title>\n      <ion-buttons end>\n        <button ion-button outline *ngIf="slidesIndex == slidesLength" (click)="setAvaliacao($event)">Enviar Respostas</button>\n        <button ion-button icon-only (click)="slidesBack()">\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n        <button ion-button icon-only (click)="slidesForward()">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\questions\questions.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Keyboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Keyboard */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_local_data_local_data__["a" /* LocalDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_local_data_local_data__["a" /* LocalDataProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_api_ufsm_api_ufsm__["a" /* ApiUfsmProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_api_ufsm_api_ufsm__["a" /* ApiUfsmProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object])
    ], QuestionsPage);
    return QuestionsPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		288,
		2
	],
	"../pages/questions/questions.module": [
		289,
		1
	],
	"../pages/trabalhos/trabalhos.module": [
		290,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngforage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_trabalhos_trabalhos__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_questions_questions__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_api_ufsm_api_ufsm__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_local_data_local_data__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_trabalhos_trabalhos__["a" /* TrabalhosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_questions_questions__["a" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questions/questions.module#QuestionsPageModule', name: 'QuestionsPage', segment: 'questions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trabalhos/trabalhos.module#TrabalhosPageModule', name: 'TrabalhosPage', segment: 'trabalhos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3_ngforage__["b" /* NgForageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_trabalhos_trabalhos__["a" /* TrabalhosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_questions_questions__["a" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_api_ufsm_api_ufsm__["a" /* ApiUfsmProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_local_data_local_data__["a" /* LocalDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Perguntas; });
var Perguntas = /** @class */ (function () {
    function Perguntas() {
    }
    Perguntas.perguntasIC = [
        {
            "discursiva": false,
            "id": 101,
            "nome": "1) O título do trabalho reflete seu conteúdo e as palavras usadas são adequadas?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 102,
            "nome": "2) O tema do trabalho é relevante na sua respectiva área do conhecimento?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 103,
            "nome": "3) A contextualização do trabalho com a literatura e/ou processos criativos existentes é feita de forma satisfatória?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 104,
            "nome": "4) A metodologia empregada no trabalho reflete o atual estado da arte na sua respectiva área do conhecimento?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 105,
            "nome": "5) Os resultados são apresentados de forma clara, estruturada e coerente, utilizando-se dos meios adequados (tabelas, gráficos, etc.)?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 106,
            "nome": "6) A discussão dos resultados enfatizou seus aspectos mais relevantes e suas limitações?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 107,
            "nome": "7) As conclusões do trabalho são coerentes com seus resultados, métodos e objetivos?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 108,
            "nome": "8) O pôster ou os slides continham as informações necessárias de forma sintética e objetiva?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 109,
            "nome": "9) O apresentador domina o conteúdo do trabalho apresentado?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 110,
            "nome": "10) Qual conceito o(a) Sr(a) daria para o trabalho/apresentador como um todo?",
            "respostas": "A;B;C;D;E"
        }
    ];
    Perguntas.perguntasExt = [
        {
            "discursiva": false,
            "id": 101,
            "nome": "1) O título do trabalho reflete seu conteúdo e as palavras usadas são adequadas?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 102,
            "nome": "2) O tema do trabalho é relevante na sua respectiva área do conhecimento e/ou apresenta possibilidade de trabalho interdisciplinar com outras áreas?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 103,
            "nome": "3) A proposta do trabalho compromete-se com as demandas da sociedade, promovendo intercâmbio de experiências e saberes entre Universidade e demais setores da sociedade?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 104,
            "nome": "4) As ações realizadas contribuem com: inclusão de grupos sociais; desenvolvimento de meios e processos de produção; inovação e construção de conhecimento; ou à ampliação de oportunidades educacionais e formativas?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 105,
            "nome": "5) Os resultados são apresentados de forma clara, estruturada e coerente, utilizando-se dos meios adequados?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 106,
            "nome": "6) A sistematização dos resultados enfatizou seus aspectos mais relevantes e suas limitações?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 107,
            "nome": "7) As conclusões do trabalho são coerentes com seus objetivos, ações e resultados?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 108,
            "nome": "8) O pôster ou os slides continham as informações necessárias de forma sintética e objetiva?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 109,
            "nome": "9) O apresentador domina o conteúdo do trabalho apresentado?",
            "respostas": "A;B;C;D;E"
        },
        {
            "discursiva": false,
            "id": 110,
            "nome": "10) Qual nota o(a) Sr(a) daria para o trabalho/apresentador como um todo?",
            "respostas": "A;B;C;D;E"
        }
    ];
    return Perguntas;
}());

//# sourceMappingURL=pergunta.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_trabalhos_trabalhos__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Trabalhos', component: __WEBPACK_IMPORTED_MODULE_6__pages_trabalhos_trabalhos__["a" /* TrabalhosPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Estado; });
var Estado;
(function (Estado) {
    Estado[Estado["N\u00E3o Avaliado"] = 0] = "N\u00E3o Avaliado";
    Estado[Estado["Avaliado mas n\u00E3o enviado"] = 1] = "Avaliado mas n\u00E3o enviado";
    Estado[Estado["Avaliado e Enviado"] = 2] = "Avaliado e Enviado";
})(Estado || (Estado = {}));
//# sourceMappingURL=avaliacao.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngforage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_avaliacao__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LocalDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocalDataProvider = /** @class */ (function () {
    function LocalDataProvider(http, ngf) {
        this.http = http;
        this.ngf = ngf;
        console.log('Hello LocalDataProvider Provider');
        this.trabalhosDB = 'trabalhos';
        this.avaliacoesDB = 'avaliacoes';
    }
    LocalDataProvider.prototype.ngOnInit = function () {
        this.ngf.name = 'JAI';
    };
    LocalDataProvider.prototype.getTrabalhos = function () {
        //this.ngf.storeName = 'trabalhos';
        return this.ngf.getItem(this.trabalhosDB);
    };
    LocalDataProvider.prototype.setTrabalhos = function (trabalhos) {
        //this.ngf.storeName = 'trabalhos';
        return this.ngf.setItem(this.trabalhosDB, trabalhos);
    };
    LocalDataProvider.prototype.getAvaliacao = function (id) {
        //this.ngf.storeName = 'avaliacoes';
        return this.ngf.getItem(String(id));
    };
    LocalDataProvider.prototype.setAvaliacao = function (id, avaliacao) {
        console.log('localdata>setavaliacao');
        //this.ngf.storeName = 'avaliacoes';
        return this.ngf.setItem(String(id), avaliacao);
    };
    LocalDataProvider.prototype.setAvaliacoes = function (avaliacoes) {
        var avaliacaoPromiseList = new Array();
        for (var i = 0; i < avaliacoes.length; i++) {
            var promise = this.ngf.setItem(String(avaliacoes[i].trabalho), avaliacoes[i]);
            avaliacaoPromiseList.push(promise);
        }
        return Promise.all(avaliacaoPromiseList);
    };
    LocalDataProvider.prototype.getAvaliacoesPendentes = function () {
        var _this = this;
        //this.ngf.storeName = 'avaliacoes';
        var getAvaliacoesPromise = new Promise(function (resolve, reject) {
            var avaliacoes = new Array();
            _this.ngf.iterate(function (value, key, iterationNumber) {
                if (value.estado == __WEBPACK_IMPORTED_MODULE_3__interfaces_avaliacao__["a" /* Estado */]["Avaliado mas não enviado"]) {
                    avaliacoes.push(value);
                }
            }).then(function () {
                resolve(avaliacoes);
            }, function (err) {
                reject();
            });
        });
        return getAvaliacoesPromise;
    };
    LocalDataProvider.prototype.getEstados = function () {
        var _this = this;
        var getEstadosPromise = new Promise(function (resolve, reject) {
            var estados = new Array();
            _this.ngf.iterate(function (value, key, iterationNumber) {
                estados.push(__WEBPACK_IMPORTED_MODULE_3__interfaces_avaliacao__["a" /* Estado */][value.estado]);
            }).then(function () {
                resolve(estados);
            }, function (err) {
                reject();
            });
        });
        return getEstadosPromise;
    };
    LocalDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngforage__["a" /* NgForage */]])
    ], LocalDataProvider);
    return LocalDataProvider;
}());

//# sourceMappingURL=local-data.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trabalhos_trabalhos__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var url = "https://jai-ufsm.herokuapp.com/jai/avaliacaoRest/login";
        //let url = "http://127.0.0.1:5000/jai/avaliacaoRest/login";
        var body = {
            "login": this.login,
            "password": this.password
        };
        var postLogin = this.http.post(url, body);
        postLogin.subscribe(function (response) {
            if (response.success) {
                var data = { nome: response.nome, trabalhos: response.trabalhos };
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__trabalhos_trabalhos__["a" /* TrabalhosPage */], data);
            }
            else {
                _this.showAlert("Erro ao entrar", response.erro);
            }
        }, function (err) {
            console.log(err);
            if (!navigator.onLine) {
                _this.showAlert("Erro ao entrar", "Não há conexão com a internet");
            }
            else {
                _this.showAlert("Erro ao entrar", "Tente novamente mais tarde");
            }
        });
    };
    LoginPage.prototype.showAlert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n        <ion-item>\n\n          <ion-label color="primary" stacked>Usuário</ion-label>\n\n          <ion-input type="text" placeholder="Usuário" [(ngModel)]="login"></ion-input>\n\n        </ion-item>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-item>\n\n          <ion-label color="primary" stacked>Senha</ion-label>\n\n          <ion-input type="password" placeholder="Senha" [(ngModel)]="password"></ion-input>\n\n        </ion-item>\n\n    </ion-row>\n\n    <ion-row></ion-row>\n\n    <ion-row justify-content-center>\n\n      <button ion-button round (click)="doLogin()">Entrar</button>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabalhosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questions_questions__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_avaliacao__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_ufsm_api_ufsm__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_local_data_local_data__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TrabalhosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrabalhosPage = /** @class */ (function () {
    function TrabalhosPage(navCtrl, navParams, apiUfsmProvider, localDataProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiUfsmProvider = apiUfsmProvider;
        this.localDataProvider = localDataProvider;
        this.loadingCtrl = loadingCtrl;
    }
    TrabalhosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrabalhosPage');
    };
    TrabalhosPage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Carregando...",
            duration: 10000
        });
        loader.present();
        /*this.apiUfsmProvider.getTrabalhos().subscribe(trabalhos => {
          this.trabalhos = trabalhos;
          this.localDataProvider.getEstados().then(estados => {
            this.estados = estados;
            loader.dismiss().catch(() => {});
          });
        });*/
        this.nome = this.navParams.get('nome');
        this.trabalhos = this.navParams.get('trabalhos');
        console.log(this.nome);
        console.log(this.trabalhos);
        var avaliacoes = new Array();
        var _loop_1 = function (i) {
            this_1.localDataProvider.getAvaliacao(this_1.trabalhos[i].id).then(function (avaliacao) {
                if (!avaliacao) {
                    var avaliacao_1 = {
                        trabalho: _this.trabalhos[i].id,
                        tituloTrabalho: _this.trabalhos[i].titulo,
                        avaliador: _this.nome,
                        estado: __WEBPACK_IMPORTED_MODULE_3__interfaces_avaliacao__["a" /* Estado */]["Não Avaliado"],
                        respostas: new Array(10)
                    };
                    avaliacoes.push(avaliacao_1);
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.trabalhos.length; i++) {
            _loop_1(i);
        }
        this.localDataProvider.setTrabalhos(this.trabalhos).then(function () {
            _this.localDataProvider.setAvaliacoes(avaliacoes).then(function () {
                _this.localDataProvider.getEstados().then(function (estados) {
                    _this.estados = estados;
                    loader.dismiss().catch(function () { });
                });
            });
        });
    };
    TrabalhosPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.localDataProvider.getEstados().then(function (estados) {
            _this.estados = estados;
        });
    };
    TrabalhosPage.prototype.goToQuestions = function (trabalho) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__questions_questions__["a" /* QuestionsPage */], { trabalho: trabalho, avaliador: this.nome });
    };
    TrabalhosPage.prototype.doLogout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    TrabalhosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trabalhos',template:/*ion-inline-start:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\trabalhos\trabalhos.html"*/'<!--\n\n  Generated template for the TrabalhosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Trabalhos</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-end (click)="doLogout()">\n\n        Sair\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let trabalho of trabalhos; let i = index" (click)="goToQuestions(trabalho)">\n\n      <h2>{{trabalho.titulo}}</h2>\n\n      <h3>{{trabalho.apresentador}}</h3>\n\n      <p *ngIf="estados">{{estados[i]}}</p>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\felip\Documents\GitHub\pwa-jai-ufsm\src\pages\trabalhos\trabalhos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_api_ufsm_api_ufsm__["a" /* ApiUfsmProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_api_ufsm_api_ufsm__["a" /* ApiUfsmProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_local_data_local_data__["a" /* LocalDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_local_data_local_data__["a" /* LocalDataProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _e || Object])
    ], TrabalhosPage);
    return TrabalhosPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=trabalhos.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUfsmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_avaliacao__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_data_local_data__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ApiUfsmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiUfsmProvider = /** @class */ (function () {
    function ApiUfsmProvider(http, localDataProvider) {
        var _this = this;
        this.http = http;
        this.localDataProvider = localDataProvider;
        console.log('Hello ApiUfsmProvider Provider');
        this.url = "https://raw.githubusercontent.com/Felipe-Marin/pwa-jai-ufsm/master/api.json";
        /*let token = "";
        let deviceID = "";
        this.headers = new HttpHeaders({
          'X-UFSM-Access-Token': token,
          'X-UFSM-Device-ID': deviceID
        });*/
        this.trabalhosObs = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent__["fromEvent"])(window, 'online').subscribe(function () {
            _this.sendAvaliacoes();
        });
    }
    ApiUfsmProvider.prototype.ngOnInit = function () {
        if (navigator.onLine) {
            this.sendAvaliacoes();
        }
    };
    /*
      public getTrabalhos(){
        this.http.get(this.url).subscribe((response: JsonResponse) => {
          if(!response.error){
            let trabalhos = response.trabalhos;
            let avaliacoes = new Array<Avaliacao>();
            for(let i = 0; i < trabalhos.length; i++){
              this.localDataProvider.getAvaliacao(trabalhos[i].id).then(avaliacao => {
                if(!avaliacao){
                  let avaliacao = {
                    trabalho: trabalhos[i].id,
                    tituloTrabalho: trabalhos[i].titulo,
                    avaliador: '',
                    estado: Estado["Não Avaliado"],
                    respostas: new Array<string>(trabalhos[i].perguntas.length)
                  }
                  avaliacoes.push(avaliacao);
                }
              });
            }
            this.localDataProvider.setTrabalhos(trabalhos).then(()=>{
              this.localDataProvider.setAvaliacoes(avaliacoes).then(()=>{
                this.trabalhosObs.next(trabalhos);
              });
            });
          }else{
            this.getTrabalhosLocal();
          }
        }, err => {
          console.log(err);
          this.getTrabalhosLocal();
        });
        return this.trabalhosObs;
      }*/
    ApiUfsmProvider.prototype.getTrabalhosLocal = function () {
        var _this = this;
        this.localDataProvider.getTrabalhos().then(function (trabalhos) {
            _this.trabalhosObs.next(trabalhos);
        });
    };
    ApiUfsmProvider.prototype.setAvaliacao = function (avaliacao) {
        var _this = this;
        console.log('setavaliacao');
        var sendAvaliacao = new Promise(function (resolve, reject) {
            if (navigator.onLine) {
                console.log('online');
                /// Begin googleForms test
                var formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfc1V0zMpY4E49ZfPT6g7ok0oZ707fAZH_V9VgCjqLbuyvAjg/formResponse";
                var respostas = avaliacao.respostas;
                var formBody = "";
                //respostas
                formBody += "entry.931167567=" + respostas[0]
                    + "&entry.1091362213=" + respostas[1]
                    + "&entry.459559554=" + respostas[2]
                    + "&entry.1977341862=" + respostas[3]
                    + "&entry.673029848=" + respostas[4]
                    + "&entry.1465874438=" + respostas[5]
                    + "&entry.1043619085=" + respostas[6]
                    + "&entry.667784152=" + respostas[7]
                    + "&entry.339752743=" + respostas[8]
                    + "&entry.1977078333=" + respostas[9]
                    + "&entry.291279887=" + avaliacao.tituloTrabalho
                    + "&entry.1952743550=" + avaliacao.avaliador
                    + "&entry.1725844449=" + avaliacao.avaliadorReal;
                /*
                        let formBody = {
                          "entry.931167567":"testecomtypescript",
                          "entry.1091362213":"testando",
                          "entry.459559554":"C",
                          "entry.1977341862":"D",
                          "entry.673029848":"E",
                          "entry.1465874438":"A",
                          "entry.1043619085":"B",
                          "entry.667784152":"3",
                          "entry.339752743":"4",
                          "entry.1977078333":"5",
                          "entry.291279887":"trab",
                          "entry.1952743550":"aval",
                          "entry.1725844449":"eu"
                        };
                */
                // let formBody="entry.931167567=A&entry.1091362213=B&entry.459559554=C&entry.1977341862=D&entry.673029848=E&entry.1465874438=A&entry.1043619085=B&entry.667784152=3&entry.339752743=4&entry.1977078333=5&entry.291279887=trab&entry.1952743550=aval&entry.1725844449=eu"
                var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                    'Content-Type': 'application/x-www-form-urlencoded'
                });
                var options = { headers: headers };
                var postOnGoogleForms = _this.http.post(formUrl, formBody, options);
                postOnGoogleForms.subscribe(function (response) {
                    if (response.success) {
                        console.log('postOnGoogleForms');
                    }
                    else {
                        //console.log(response.erro);
                        console.log('erro no postOnGoogleForms');
                    }
                }, function (err) {
                    console.log(err);
                    if (err.statusText == "Unknown Error") {
                        avaliacao.estado = __WEBPACK_IMPORTED_MODULE_2__interfaces_avaliacao__["a" /* Estado */]["Avaliado e Enviado"];
                        _this.localDataProvider.setAvaliacao(avaliacao.trabalho, avaliacao).then(function () {
                            console.log('success');
                            resolve();
                        }, function (err) {
                            console.log('erro');
                            console.log(err);
                        });
                    }
                    else {
                        console.log("Erro: Tente novamente mais tarde");
                        avaliacao.estado = __WEBPACK_IMPORTED_MODULE_2__interfaces_avaliacao__["a" /* Estado */]["Avaliado mas não enviado"];
                        _this.localDataProvider.setAvaliacao(avaliacao.trabalho, avaliacao).then(function () {
                            reject();
                        });
                    }
                });
                /// End GoogleForms test
            }
            else {
                console.log('offline');
                avaliacao.estado = __WEBPACK_IMPORTED_MODULE_2__interfaces_avaliacao__["a" /* Estado */]["Avaliado mas não enviado"];
                _this.localDataProvider.setAvaliacao(avaliacao.trabalho, avaliacao).then(function () {
                    reject();
                });
            }
        });
        return sendAvaliacao;
    };
    ApiUfsmProvider.prototype.sendAvaliacoes = function () {
        var _this = this;
        this.localDataProvider.getAvaliacoesPendentes().then(function (avaliacoesPendentes) {
            for (var i = 0; i < avaliacoesPendentes.length; i++) {
                _this.setAvaliacao(avaliacoesPendentes[i]).then(function () {
                    console.log('avaliacao pendente enviada');
                });
            }
        });
    };
    ApiUfsmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__local_data_local_data__["a" /* LocalDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_data_local_data__["a" /* LocalDataProvider */]) === "function" && _b || Object])
    ], ApiUfsmProvider);
    return ApiUfsmProvider;
    var _a, _b;
}());

//# sourceMappingURL=api-ufsm.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map