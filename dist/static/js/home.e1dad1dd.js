/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 31853:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en.js": [
		61735
	],
	"./es_ES.js": [
		99352
	],
	"./es_LA.js": [
		20678,
		619
	],
	"./es_shared.js": [
		27101
	],
	"./zh_CN.js": [
		15046
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 31853;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46700:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 42786,
	"./af.js": 42786,
	"./ar": 30867,
	"./ar-dz": 14130,
	"./ar-dz.js": 14130,
	"./ar-kw": 96135,
	"./ar-kw.js": 96135,
	"./ar-ly": 56440,
	"./ar-ly.js": 56440,
	"./ar-ma": 47702,
	"./ar-ma.js": 47702,
	"./ar-sa": 16040,
	"./ar-sa.js": 16040,
	"./ar-tn": 37100,
	"./ar-tn.js": 37100,
	"./ar.js": 30867,
	"./az": 31083,
	"./az.js": 31083,
	"./be": 9808,
	"./be.js": 9808,
	"./bg": 68338,
	"./bg.js": 68338,
	"./bm": 67438,
	"./bm.js": 67438,
	"./bn": 8905,
	"./bn-bd": 76225,
	"./bn-bd.js": 76225,
	"./bn.js": 8905,
	"./bo": 11560,
	"./bo.js": 11560,
	"./br": 1278,
	"./br.js": 1278,
	"./bs": 80622,
	"./bs.js": 80622,
	"./ca": 2468,
	"./ca.js": 2468,
	"./cs": 5822,
	"./cs.js": 5822,
	"./cv": 50877,
	"./cv.js": 50877,
	"./cy": 47373,
	"./cy.js": 47373,
	"./da": 24780,
	"./da.js": 24780,
	"./de": 59740,
	"./de-at": 60217,
	"./de-at.js": 60217,
	"./de-ch": 60894,
	"./de-ch.js": 60894,
	"./de.js": 59740,
	"./dv": 5300,
	"./dv.js": 5300,
	"./el": 50837,
	"./el.js": 50837,
	"./en-au": 78348,
	"./en-au.js": 78348,
	"./en-ca": 77925,
	"./en-ca.js": 77925,
	"./en-gb": 22243,
	"./en-gb.js": 22243,
	"./en-ie": 46436,
	"./en-ie.js": 46436,
	"./en-il": 47207,
	"./en-il.js": 47207,
	"./en-in": 44175,
	"./en-in.js": 44175,
	"./en-nz": 76319,
	"./en-nz.js": 76319,
	"./en-sg": 31662,
	"./en-sg.js": 31662,
	"./eo": 92915,
	"./eo.js": 92915,
	"./es": 55655,
	"./es-do": 55251,
	"./es-do.js": 55251,
	"./es-mx": 96112,
	"./es-mx.js": 96112,
	"./es-us": 71146,
	"./es-us.js": 71146,
	"./es.js": 55655,
	"./et": 5603,
	"./et.js": 5603,
	"./eu": 77763,
	"./eu.js": 77763,
	"./fa": 76959,
	"./fa.js": 76959,
	"./fi": 11897,
	"./fi.js": 11897,
	"./fil": 42549,
	"./fil.js": 42549,
	"./fo": 94694,
	"./fo.js": 94694,
	"./fr": 94470,
	"./fr-ca": 63049,
	"./fr-ca.js": 63049,
	"./fr-ch": 52330,
	"./fr-ch.js": 52330,
	"./fr.js": 94470,
	"./fy": 5044,
	"./fy.js": 5044,
	"./ga": 29295,
	"./ga.js": 29295,
	"./gd": 2101,
	"./gd.js": 2101,
	"./gl": 38794,
	"./gl.js": 38794,
	"./gom-deva": 27884,
	"./gom-deva.js": 27884,
	"./gom-latn": 23168,
	"./gom-latn.js": 23168,
	"./gu": 95349,
	"./gu.js": 95349,
	"./he": 24206,
	"./he.js": 24206,
	"./hi": 30094,
	"./hi.js": 30094,
	"./hr": 30316,
	"./hr.js": 30316,
	"./hu": 22138,
	"./hu.js": 22138,
	"./hy-am": 11423,
	"./hy-am.js": 11423,
	"./id": 29218,
	"./id.js": 29218,
	"./is": 90135,
	"./is.js": 90135,
	"./it": 90626,
	"./it-ch": 10150,
	"./it-ch.js": 10150,
	"./it.js": 90626,
	"./ja": 39183,
	"./ja.js": 39183,
	"./jv": 24286,
	"./jv.js": 24286,
	"./ka": 12105,
	"./ka.js": 12105,
	"./kk": 47772,
	"./kk.js": 47772,
	"./km": 18758,
	"./km.js": 18758,
	"./kn": 79282,
	"./kn.js": 79282,
	"./ko": 33730,
	"./ko.js": 33730,
	"./ku": 1408,
	"./ku.js": 1408,
	"./ky": 33291,
	"./ky.js": 33291,
	"./lb": 36841,
	"./lb.js": 36841,
	"./lo": 55466,
	"./lo.js": 55466,
	"./lt": 57010,
	"./lt.js": 57010,
	"./lv": 37595,
	"./lv.js": 37595,
	"./me": 39861,
	"./me.js": 39861,
	"./mi": 35493,
	"./mi.js": 35493,
	"./mk": 95966,
	"./mk.js": 95966,
	"./ml": 87341,
	"./ml.js": 87341,
	"./mn": 5115,
	"./mn.js": 5115,
	"./mr": 10370,
	"./mr.js": 10370,
	"./ms": 9847,
	"./ms-my": 41237,
	"./ms-my.js": 41237,
	"./ms.js": 9847,
	"./mt": 72126,
	"./mt.js": 72126,
	"./my": 56165,
	"./my.js": 56165,
	"./nb": 64924,
	"./nb.js": 64924,
	"./ne": 16744,
	"./ne.js": 16744,
	"./nl": 93901,
	"./nl-be": 59814,
	"./nl-be.js": 59814,
	"./nl.js": 93901,
	"./nn": 83877,
	"./nn.js": 83877,
	"./oc-lnc": 92135,
	"./oc-lnc.js": 92135,
	"./pa-in": 15858,
	"./pa-in.js": 15858,
	"./pl": 64495,
	"./pl.js": 64495,
	"./pt": 89520,
	"./pt-br": 57971,
	"./pt-br.js": 57971,
	"./pt.js": 89520,
	"./ro": 96459,
	"./ro.js": 96459,
	"./ru": 21793,
	"./ru.js": 21793,
	"./sd": 40950,
	"./sd.js": 40950,
	"./se": 10490,
	"./se.js": 10490,
	"./si": 90124,
	"./si.js": 90124,
	"./sk": 64249,
	"./sk.js": 64249,
	"./sl": 14985,
	"./sl.js": 14985,
	"./sq": 51104,
	"./sq.js": 51104,
	"./sr": 49131,
	"./sr-cyrl": 79915,
	"./sr-cyrl.js": 79915,
	"./sr.js": 49131,
	"./ss": 85893,
	"./ss.js": 85893,
	"./sv": 98760,
	"./sv.js": 98760,
	"./sw": 91172,
	"./sw.js": 91172,
	"./ta": 27333,
	"./ta.js": 27333,
	"./te": 23110,
	"./te.js": 23110,
	"./tet": 52095,
	"./tet.js": 52095,
	"./tg": 27321,
	"./tg.js": 27321,
	"./th": 9041,
	"./th.js": 9041,
	"./tk": 19005,
	"./tk.js": 19005,
	"./tl-ph": 75768,
	"./tl-ph.js": 75768,
	"./tlh": 89444,
	"./tlh.js": 89444,
	"./tr": 72397,
	"./tr.js": 72397,
	"./tzl": 28254,
	"./tzl.js": 28254,
	"./tzm": 51106,
	"./tzm-latn": 30699,
	"./tzm-latn.js": 30699,
	"./tzm.js": 51106,
	"./ug-cn": 9288,
	"./ug-cn.js": 9288,
	"./uk": 67691,
	"./uk.js": 67691,
	"./ur": 13795,
	"./ur.js": 13795,
	"./uz": 6791,
	"./uz-latn": 60588,
	"./uz-latn.js": 60588,
	"./uz.js": 6791,
	"./vi": 65666,
	"./vi.js": 65666,
	"./x-pseudo": 14378,
	"./x-pseudo.js": 14378,
	"./yo": 75805,
	"./yo.js": 75805,
	"./zh-cn": 83839,
	"./zh-cn.js": 83839,
	"./zh-hk": 55726,
	"./zh-hk.js": 55726,
	"./zh-mo": 99807,
	"./zh-mo.js": 99807,
	"./zh-tw": 74152,
	"./zh-tw.js": 74152
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 18647:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// NAMESPACE OBJECT: ./src/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  ageIncrease: () => (ageIncrease)
});

// NAMESPACE OBJECT: ./src/store/getters.js
var getters_namespaceObject = {};
__webpack_require__.r(getters_namespaceObject);
__webpack_require__.d(getters_namespaceObject, {
  name: () => (getters_name)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js + 1 modules
var runtime_dom_esm_bundler = __webpack_require__(58061);
// EXTERNAL MODULE: ./node_modules/@adc/vigour-ui/lib/spl.js
var spl = __webpack_require__(92025);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(22201);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(66252);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(56612);
;// CONCATENATED MODULE: ./src/assets/ico/home.png
const home_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFSSURBVHgB5ZOxTsMwEIZ9jqWseYQunSqkDuyQjY0MbaJO5BHKm/AI6VSlC34D8ghBolLHPAIbpCoxd1EMGRrbqdj4Jcvns+/T+XxmzEGr5fImWSzuXc5yKyyOHxjnBfc82doWgRUGkDGlSpzJNUc73e52m589UucjU7jAPo7HMEBf7fsv5MM9phib6GzI1nHCBSalfCd/GkWhhgJlfUbcFUbK0PbrOkSTSjC3Ak2ws1AT0AU2BMUaBnrPGwvTKg+Hz+vpNP8S4g4AoqvZrHrb71+BGpZ6bAysL3yooH2orqU4wta4qC6BkfT18dqVAkjbGtLiElgfij1ZkW39emMlTJtJHD9jwYO+DzMpt3n+OBRjzJDj60H3xboxwWltjGEWKaUyzCikQbbt/J/X8B8C27bB17tdJYlyDTKcLQTCnhqliqFgfjplvwu+UU3DBrMDkN+o7cxe7MxC/AAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./src/assets/ico/site.png
const site_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADySURBVHgB7VXBDYMwDHQQgzAKU0B4wSalm9BPKXmwQhklnQNEaqdJG7USiQSoH+4DsmWfkzvFADuDwQYosqxUAInTVLZCXMz/+ubAWPOTUKoikhhWgianKduuew9b5LmyJ4pgZxwE/ycIchHPshNjrHZjSqn6JsTZVxtEQM3RdgN2HUwgNYTbEGhgczsxnkiThJQdLvJCa8A5T/CO78x5EVFUGY1jeu37B6zAS+R5LtEVCVnPJsglcxxXEOAUP4GB62t8EWvYAIeLvNAa0A6lL20iN2njCEmif+kiQ2o/a25hcWsbo9PcBtE0NdbCS7W74wkdyWAD0kcnIQAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./src/assets/ico/site-cat.png
const site_cat_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASqSURBVHgB7ZyPVdtADMblTsAIZoLCBrABTIAzQcMETSeATmAzQdmg2QA2wCOwgXv/Akka2yed7nzX6vdeX5NAjLFynz7pZAAEQRAEQRAEQRAEQRAEoQDatm3arnuAgqmgUNTFr6GqXtTDM/XvFYbhdrVa9VAYX6BUquo32IuvudDPVVAuoDCKDED79PRd/VcfvWxWhArCGgqiOAkyn3IrPVM8rprmHgqgqAA43dfSU3t8exF5oSgJqqrqlPSMUUReKCYA2nIOAA3gyD4vFCFBR5aTSpZ5oYwAdN0b+EvPFNnlhewlaMRyUskuL2S9AjwtJ41huFcr4REWJtsV4HT/F8Siqh5y6CNlGwCk5aSyVkF4McFeiCwDQLScVBbNC9nlACbLSWOBvIAOgNHNYfihTvQdIsBoORdB1Rqoa0qRoLWrLmtghtlyFgE1B7CX+EaDh2ED/xkhSfhsZ+XUxQvS6+iWM2M4XFCwJCWynFnCZUPJkpTYcmYHZx2AliQnPaRqVFmNLfwDxCjE/CXpcGPdG33xm6a51nYYCidWJTwrSQGWsx+GYaUfqFpko4JwrV+DQonZihiVpCDLaYvAfvdUPd66ILxCgaToBR1IUpDltBe/O35ZB0RVoJfq6z+hMFI14z4kKcBy9kZyJlBfX+t+jnoYpU0Sg5TdUCNJRMv57mRmFtNMG4ZLKCQvlDEVcaT7c5jvtQF7hszBB8Au8ZR0lBaxywu3uVtVdADcEj+HNEu8D72AzqreQqaSRJKgvSW+hZgwjZCoYzznWi8E74gpZ7MB62x4sbq/AWbU+T6q8/0GkUixIXP4A+0S15Upm/XTrQafi0+5Q2bPqmYBiwsyxRGf9ftoNUyx18jTkw1vmHZ44jw2CZsNdXlBV6NPEIKv5Txs5NVusuEGPEmWx2aIMhVBzguqlWAkYu74upE31kuqqs3q7g7lnDjzGDYHRBtLcWOFuudTe75F+/Zzj+PeePSSnt2ISQ+e6HziJC1oezV5Eh5D/fKvqC6lR6sBsYFz4ySpBk+Y85g36ABgXMdel3JaEnw/rfbi1+AHepuULY8hoAxmqX4afs7eXAirs8dLvFNBmnc9U7o/D/rmDGpeSCVB6HnKkS6lV6vBSEnYzBB6CNfVN9ElKSQHUJf4Z5fSYxWZ3TRrOUPZfWiufN+AzmMEwpMwcs5+r0t5bX7B2cOjdH8OWy/Y/WgvvPMYEWoOOAX7/VfOGrYQh84lf+8WykQe+2BJG8o6Zx8yM+RJg53oi7Hbxl0H8A3tEmeGkOzOt/F9A/duW5xCLPD+q8Rj6jrJt4S8wLLbxpkDTkGpF3xaDbGgnO+Vy1O1fp5NK8KBygsJdH8OSn2zDdltSzEV4Z8XeC0nFXu+eEk6pwyGxZagY0ZbAoGthligrSqW1AHQ/KWzTnreIE96VzT2EIElBrMOdJax1RALtFXFsMQK+EQtb9Vq+FrMHTKE3bbZQwIS1gCUiXY9Ky5JKvfPVi7HFXa3bQoJAA1jGjhaLhKAEBjuk5YAhBN0n7QEgAf0YNgOCQAfpHvfJAALIwFYGAnAwkgAFkYCIAiCIAiCIAiCIAiCIAiCIAiCEJk/kF+2+Hb57lgAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./src/assets/img/logo/huawei.png
const huawei_namespaceObject = __webpack_require__.p + "static/img/huawei.eacd8791.png";
;// CONCATENATED MODULE: ./src/assets/img/navbar/Left.png
const Left_namespaceObject = __webpack_require__.p + "static/img/Left.316e43ee.png";
;// CONCATENATED MODULE: ./src/assets/img/navbar/Right.png
const Right_namespaceObject = __webpack_require__.p + "static/img/Right.88506b7d.png";
;// CONCATENATED MODULE: ./src/assets/img/logo/ioh.png
const ioh_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAuCAYAAADk3cFoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAp8SURBVHgB7VzfbxxHHf/M2U5sx6EbEiCJUL2peIiA1kdLiUQR3kg8IKjkkwCJN29eEG82DzwiX/+COOKNF18kUB8Q2OEBeEC9DVJFJVrsVPBQUuk2EqWqotRXJ2qS+u6m872dvZubm9ndi+uzz9qPNLnZ+fGd+c58dna+3xmHIceRBd+Eg8b4EhjzweHK5C2RE2Csscqex524LEOOI4Oa4zrOiWOzYC1n8uWz3tjX7y1PXHrXMZfmdXBWZt/avUZPORGOALa//JX5JlAWk1kUjw6//yzw0Uud/GPefzD509cx8UKtv3ILPru0ez0nwgjj/bMX3YnxxpqYRK+T2DwJ/sGPxQQf7yt//OW3MP2zv6Fwrq6kipVhvHFhDDlGEkSCY2PNKmPtVaADTivBJ18y1mn+9zw+Cb6G42KFYCcfyVQ2iVbhUU6EEURMAjDu9mXuvChWg2lrXf5gqp8MnLkF5Bg5TIw1V4wkIOyeRhpa75/Cg/JPugkMORFGDbQxZIz72CN2//UMdt+60HnOiTBiaHLhE0jC+H1kxcPffE/G+FZOhBEDK/BSbwLqLa5YCNPvICsat89FEc62xpFjZLDtXnRbjYazy09iu/kcHvALEPG2w6jAHmOG1XBm6h2xKDwWk3s8VR6/P4Xme6fqY0/vlHMijBIajdkPm8/iXutFtLSJpucdfhE7uIjTJx7h9INsIh/97tvlmd9v3Mk/DSOEV5//pXu3+Z0+Eui4Nz0pApIhVhA4r+PhP/59ix7zFWFEUPzLq+6Ne6xcfCPbq35vhmF65jVMPTgPPD7f9ji2QZvJyRCYeRtMxFuctd2M45xz+sasiECbkADks2bsDnIcKhSOHVu8exbuw+kCpj5uZaqzUziP6c9Xk4rUv/je7S2K0IqwhogEBF8EV4TLOEAIcs6h2ydCXZDzGo4ghK4rWlLF9CKKciUmTIQ3vjuDy3/dQRbcb13AWSQQgfGNOEpEKGnZHg4e3xChrDyHIhxJIqBXT8JNEfqIIEjg0u/b35zOTIQWjrf3E2RRmDA93irHcdosbmn5W8hxaHH7q5Oofv9z2DMYr0zVah3CERF8RG8c5K+PHIcOHKzzgv75Rw4+PJO+z58QxqRxNWA8VFcDQkF8j26JQE7nC/RLz8hx6CDOF4I4/vBEAdd+dTaVDFOF/xsEtUngqatBlMz5LNC5z0ao28ggLYxFRPuI+AoUMTUQdW5gAAhZ84j2J66URWbMhpBzXeT5iDaxMUJJ1qyy4n6RvJtI7wvVWUCkl6vU36L+IAMs+pCMSpIVJupxLSlAd4VuP1MfitV1p9Bs1dDVD6fvNvCDP9Rx6e9mk/KZid9ignXPHhgT4zHWuHIqDOt6WSICDbivpFHHr2idjU3MZdgRIjI9EwdOyKIBX0Uv+XQ5gdYnIxGkdUGyPDxhv+QE0u7ZSahfSng5SJ9KQn3I/LLFGuBIRmc+iq/9caHQ6u70Y8SEeO7Njzum5emxf+LM2JvtswjRyobwF1z/wv/eDWyNpBJB5Lvih2wQF9lACr9iypCmUhmDo48IQhatTBVkR1+/JAmCDHXpDfJ0MgyoTwgDoQYhAqFNBs5XlVvJPXi69rj+wubd1Z//6dc3G+ON8FwYhsiALETYBHqvQ2WApy/JeyABoYcI8i3cwOBYVv0RQg4tta5WJl429TeclujLSt0n0YdkF9WVYVAiEMRnwi20WkuMM4+DR3PD2kSr8MnJyuZLPxzcIUhE4L1YU/IWeT9qIiyJUBTBM9TncoDVNlxuBtUtSVkli6weeVJWzVCmKmV4Cf3a5tGeCLJNHUtKO1cN+c6A+lQNZara2OhYkPLj4GAY4MlEqGl59DxrkLFiUiihDcKipT8mWSoRFg35KxZZS4ayV2WeiQhzSl1X9lsNMRHW+d70mVfydXg4CHALEbiZ9YsJcrZNcmQet+VZZFW18rWEvDRZa1r5bZnuGPpc4xHRZhPkOXzv+iSNjYcDQNIxtGkwkkzEivbc/nZxhf0K0tzFSZaHN0BZQkV7pomcFd9d+l6XtTxXlg8lKWgCdfLPGdpI00ffz3g4ZEgiQp+5JgfPBj0v6du2jWTUkB31lHzTxukU/SM3jmVLPRfRhFW45ZMYQ8hJc8sferf9MC6mfGRIO5VSx0V2zD5BfoeI0qQk0ldgnzAX3ZWlT58kkij1syJN1r5gGEQI0f/WLqTU8RPy9MkqYTBZdd2xI57JPL0iAp16EknJTAy1emSJFA3ppjYGyQ8HKLtv2HciyM+JPnlly94hts892KF/b31u37FTum+qL/LmeLSj74S4vyIEiI7CdcR7iwD9+sxZ+jCoPh63WEH7Cm63Gnx9O5siZ0Urru7057kZazJvVv5WLeVUWabdvknWmkVW7EdYMOSpJq/J9PT2QR83RdbB+hH4Z0gES/4g0GUt8ifDiiLDRqgaNzus9D5c5U+OQWStYQgY2i1muSlbzVi8niKLTMYyBkPPWYPFfCS4MG/ulrU+/ALZ9QmTMqWsCg4QQ73OLhX2kTwwtJ9I2wDGxPJSZAHdw55XDDLIfFxOkUGE8U3H7Bn1CZBhAyjPE8o4INChE23aVJ8B7aADHp06ej2FGavYBPFos6RusLaT7ijwaCPnofsGxvcH6D4CfRdLA8giOfR9b/+PIYgmLxThutz4JULqGt8ncGTYkuF6iv9E1UetHyI6MLoxiD5aXygeSMLlyJEjx5DA6B/evapFCHSHi/x8uIicMTeUdEqL/QFhfAdBfiaKiogbtLzyrr3fKWtpJzTcZ4j72PZLMMv1L9mnp+ILIFLmLdn+gtb/eWrH0F9Vl47ucbtpbYj4TRm3jqtNV0P9OZbhut1eUeDdG0jUKLlPV3nvuXx8RY3yyObd5F3b1pOBCLWsTHRJSWdKe6vymY6Aq1xxzfLoAown2/F5r6lHg7Mu61LbFW53686i93vsi/CUjC9rZctKnMnnuA3IcSgrevgJbRSVNuL21qU+RAAXXX3WbbrK+vGzg2F5GqUNu6g8O7zX4aHbvEsxUXjka1iU8XnePetf4QZvH+93MsXlF+O4kl/l3fP/TY008zb7WuapJFrjXSdSVW9jkOeUNjyl37N6XCm7oPddlisq8XXZhsuH6EegwQ7iBLlDDnnkHXPR706lnbS6jPqys6votauX5QAZXa+I3pJYjmtoJ1DyHXVZlUulCzt8OaA0kR72B1naaJuEGiFcmHVVCVOWYTheRURECKEsP3LyabDv0GEMIt+32iGanEB5rsgQat/tVXmQY/s7CfpGxmcQAfoH00f3ODrUVoQFJNvuZLZdlncMAyW9rqwyLtLhcruL19ZGB/FhloiqzifS2dOKltB7HhM7u4Z25kB/IUFOlaocmFB2qqyUKcv8DUQMLTLlEidBbrj8ePMlk0vKYF+TK40jl1SSQ3nLSv2SXFlCRAO1qhCLylVEfiDresjgdDKgoujiId2bR22sK7q7TLtImgSpawjF8SV19TRdNwwnou0xwRBXhTZ499KnY8hzZF7RkO5Y4m4clPJ9aZo819YHpY9FpOvimOJaG25SPU1Ho+5aGceQ7tr6bNM17Xm/8CnzpA1c+TAidgAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/page/index.vue?vue&type=template&id=1a6fe402










const _hoisted_1 = {
  id: "wrapper",
  class: "toggled",
  ref: "sidebarToggler"
}
const _hoisted_2 = { id: "sidebar-wrapper" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col-12 px-4" }
const _hoisted_5 = {
  key: 0,
  href: "https://1057-sg.teleows.com/adc-static/static/procodeComp/1057/homepage/homepage/homepage/latest/dist/index.html#/",
  target: "_blank",
  class: "btn btn-sidebar ioh-dash d-flex",
  style: {"gap":"10px"}
}
const _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: home_namespaceObject,
  alt: ""
}, null, -1)
const _hoisted_7 = {
  key: 1,
  disabled: "",
  type: "button",
  target: "_blank",
  class: "btn btn-sidebar ioh-dash d-flex",
  style: {"gap":"10px"}
}
const _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: home_namespaceObject,
  alt: ""
}, null, -1)
const _hoisted_9 = { class: "col-12 px-4 mt-2" }
const _hoisted_10 = {
  key: 0,
  type: "button",
  ref: "sidebarCloseButton",
  id: "close-sidebar-btn",
  "data-bs-toggle": "modal",
  "data-bs-target": "#siteStatisticModal",
  class: "btn btn-sidebar ioh-dash d-flex",
  style: {"gap":"10px"}
}
const _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: site_namespaceObject,
  alt: ""
}, null, -1)
const _hoisted_12 = {
  key: 1,
  disabled: "",
  type: "button",
  ref: "sidebarCloseButton",
  id: "close-sidebar-btn",
  "data-bs-toggle": "modal",
  "data-bs-target": "#siteStatisticModal",
  class: "btn btn-sidebar ioh-dash d-flex",
  style: {"gap":"10px"}
}
const _hoisted_13 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: site_namespaceObject,
  alt: ""
}, null, -1)
const _hoisted_14 = { class: "col-12 px-4 mt-2" }
const _hoisted_15 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: site_cat_namespaceObject,
  alt: "",
  style: {"width":"30px","height":"30px"}
}, null, -1)
const _hoisted_16 = {
  key: 1,
  disabled: "",
  type: "button",
  class: "btn btn-sidebar ioh-dash d-flex",
  style: {"gap":"10px"}
}
const _hoisted_17 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: site_cat_namespaceObject,
  alt: "",
  style: {"width":"30px","height":"30px"}
}, null, -1)
const _hoisted_18 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)("<div class=\"row\"><div class=\"col-12 px-6\"><hr></div></div><div class=\"row\"><div class=\"col-12 px-custom\"><h4 class=\"sidebar-title px-3\">Search</h4></div></div>", 2)
const _hoisted_20 = { class: "sidebar-nav px-4 mt-3 mt-20" }
const _hoisted_21 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("label", {
  class: "sidebar-filter-title",
  for: "mcCluster"
}, "MC Cluster", -1)
const _hoisted_22 = { class: "input-group mb-3 mt-2 flex-nowrap" }
const _hoisted_23 = {
  key: 1,
  disabled: "",
  type: "text",
  class: "form-control px-4",
  id: "mcCluster",
  placeholder: "Search MC Cluster"
}
const _hoisted_24 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("label", {
  class: "sidebar-filter-title",
  for: "siteName"
}, "Site Name", -1)
const _hoisted_25 = { class: "input-group mb-3 mt-2 mt-25 flex-nowrap" }
const _hoisted_26 = {
  key: 1,
  disabled: "",
  type: "text",
  class: "form-control px-4",
  id: "siteName",
  placeholder: "Search Site Name"
}
const _hoisted_27 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("label", {
  class: "sidebar-filter-title",
  for: "fmeName"
}, "FME Name", -1)
const _hoisted_28 = { class: "input-group mb-3 mt-2 mt-25 flex-nowrap" }
const _hoisted_29 = {
  key: 1,
  disabled: "",
  type: "text",
  class: "form-control px-4",
  id: "fmeName",
  placeholder: "Search FME Name"
}
const _hoisted_30 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)("<div class=\"row\"><div class=\"col-12 px-6\"><hr></div></div><div class=\"row\"><div class=\"col-12 px-4\"><h4 class=\"sidebar-title px-3\">Filter</h4></div></div>", 2)
const _hoisted_32 = { class: "sidebar-nav px-4 mt-3 d-flex flex-row col-gap-10 justify-content-between" }
const _hoisted_33 = {
  key: 0,
  class: "btn btn-primary btn-clear-filter btn-15",
  disabled: ""
}
const _hoisted_34 = {
  key: 1,
  class: "btn btn-primary btn-apply-filter btn-16",
  disabled: ""
}
const _hoisted_35 = { class: "sidebar-nav px-4 mt-3" }
const _hoisted_36 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "sidebar-filter-title" }, "Site", -1)
const _hoisted_37 = { class: "mb-2" }
const _hoisted_38 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", {
  class: "collapse-btn mb-2 px-4 d-flex flex-row justify-content-between align-items-center",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#siteOptions",
  "aria-expanded": "false",
  "aria-controls": "siteOptions",
  style: {"text-indent":"0px"}
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Select Duration"),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", {
    class: "fa fa-chevron-down",
    "aria-hidden": "true"
  })
], -1)
const _hoisted_39 = {
  class: "collapse",
  id: "siteOptions"
}
const _hoisted_40 = { class: "card card-body card-sidebar px-4 py-3 row-gap-15" }
const _hoisted_41 = {
  for: "poiImpacted",
  class: "checkbox-p"
}
const _hoisted_42 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "font-checkbox" }, "All", -1)
const _hoisted_43 = {
  for: "poiImpacted",
  class: "checkbox-p"
}
const _hoisted_44 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", {
  class: "fa-solid fa-square",
  "aria-hidden": "true",
  style: {"color":"#0076CE"}
}, null, -1)
const _hoisted_45 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "font-checkbox" }, /*#__PURE__*/(0,shared_esm_bundler/* toDisplayString */.zw)("<1 H Site Down"), -1)
const _hoisted_46 = {
  for: "poiImpacted",
  class: "checkbox-p"
}
const _hoisted_47 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", {
  class: "fa-solid fa-square",
  "aria-hidden": "true",
  style: {"color":"#62B230"}
}, null, -1)
const _hoisted_48 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "font-checkbox" }, /*#__PURE__*/(0,shared_esm_bundler/* toDisplayString */.zw)("1-4 H Site Down"), -1)
const _hoisted_49 = {
  for: "poiImpacted",
  class: "checkbox-p"
}
const _hoisted_50 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", {
  class: "fa-solid fa-square",
  "aria-hidden": "true",
  style: {"color":"#FFA500"}
}, null, -1)
const _hoisted_51 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "font-checkbox" }, /*#__PURE__*/(0,shared_esm_bundler/* toDisplayString */.zw)("4-8 H Site Down"), -1)
const _hoisted_52 = {
  for: "poiImpacted",
  class: "checkbox-p"
}
const _hoisted_53 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", {
  class: "fa-solid fa-square",
  "aria-hidden": "true",
  style: {"color":"#ED1C24"}
}, null, -1)
const _hoisted_54 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "font-checkbox" }, /*#__PURE__*/(0,shared_esm_bundler/* toDisplayString */.zw)("8-24 H Site Down"), -1)
const _hoisted_55 = {
  for: "poiImpacted",
  class: "checkbox-p"
}
const _hoisted_56 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", {
  class: "fa-solid fa-square",
  "aria-hidden": "true",
  style: {"color":"#313131"}
}, null, -1)
const _hoisted_57 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "font-checkbox" }, /*#__PURE__*/(0,shared_esm_bundler/* toDisplayString */.zw)(">24 H Site Down"), -1)
const _hoisted_58 = { class: "sidebar-nav px-4 mt-3" }
const _hoisted_59 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "sidebar-filter-title" }, "Site Category", -1)
const _hoisted_60 = { class: "mb-2" }
const _hoisted_61 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", {
  class: "collapse-btn mb-2 px-4 d-flex flex-row justify-content-between align-items-center",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#siteCategoryOption",
  "aria-expanded": "false",
  "aria-controls": "siteCategoryOption",
  style: {"text-indent":"0px"}
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Select Site Category"),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", {
    class: "fa fa-chevron-down",
    "aria-hidden": "true"
  })
], -1)
const _hoisted_62 = {
  class: "collapse",
  id: "siteCategoryOption"
}
const _hoisted_63 = { class: "card card-body card-sidebar px-4 py-3 row-gap-15" }
const _hoisted_64 = {
  for: "poiImpacted",
  class: "checkbox-p"
}
const _hoisted_65 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "font-checkbox" }, "All", -1)
const _hoisted_66 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { style: {"margin-left":"-33px"} }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "POI")
], -1)
const _hoisted_67 = {
  for: "poiImpacted",
  class: "checkbox-p"
}
const _hoisted_68 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "font-checkbox" }, "POI Sites Down", -1)
const _hoisted_69 = {
  for: "poiImpacted",
  class: "checkbox-p"
}
const _hoisted_70 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "font-checkbox" }, "POI SitesUp", -1)
const _hoisted_71 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "mt-2",
  style: {"margin-left":"-33px"}
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "Route")
], -1)
const _hoisted_72 = {
  for: "poiImpacted",
  class: "checkbox-p"
}
const _hoisted_73 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "font-checkbox" }, "Route Sites Down", -1)
const _hoisted_74 = {
  for: "poiImpacted",
  class: "checkbox-p"
}
const _hoisted_75 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "font-checkbox" }, "Route Sites Up", -1)
const _hoisted_76 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "mt-2",
  style: {"margin-left":"-33px"}
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "CTI")
], -1)
const _hoisted_77 = {
  for: "poiImpacted",
  class: "checkbox-p"
}
const _hoisted_78 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "font-checkbox" }, "CTI Sites Down", -1)
const _hoisted_79 = {
  for: "poiImpacted",
  class: "checkbox-p"
}
const _hoisted_80 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "font-checkbox" }, "CTI Sites Up", -1)
const _hoisted_81 = { class: "sidebar-nav px-4 mt-3 pb-5" }
const _hoisted_82 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "sidebar-filter-title" }, "FME", -1)
const _hoisted_83 = { class: "mb-2" }
const _hoisted_84 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", {
  class: "collapse-btn mb-2 px-4 d-flex flex-row justify-content-between align-items-center",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#fmeOptions",
  "aria-expanded": "false",
  "aria-controls": "fmeOptions",
  style: {"text-indent":"0px"}
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Select FME"),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", {
    class: "fa fa-chevron-down",
    "aria-hidden": "true"
  })
], -1)
const _hoisted_85 = {
  class: "collapse",
  id: "fmeOptions"
}
const _hoisted_86 = { class: "card card-body card-sidebar px-4 py-3 row-gap-15" }
const _hoisted_87 = {
  for: "poiImpacted",
  class: "checkbox-p"
}
const _hoisted_88 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "font-checkbox" }, "All", -1)
const _hoisted_89 = {
  for: "poiImpacted",
  class: "checkbox-p"
}
const _hoisted_90 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", {
  class: "fa-solid fa-square",
  style: {"color":"#de4b4d"}
}, null, -1)
const _hoisted_91 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "font-checkbox" }, "Busy", -1)
const _hoisted_92 = {
  for: "poiImpacted",
  class: "checkbox-p"
}
const _hoisted_93 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", {
  class: "fa-solid fa-square",
  style: {"color":"#6bcd1f"}
}, null, -1)
const _hoisted_94 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "font-checkbox" }, "Idle", -1)
const _hoisted_95 = { id: "page-content-wrapper" }
const _hoisted_96 = { class: "main-app" }
const _hoisted_97 = { class: "navbar navbar-expand-lg netdrone-nav justify-content-between px-2 py-0" }
const _hoisted_98 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)("<div class=\"navbar-brand\"><a href=\"#menu-toggle\" class=\"btn\" id=\"menu-toggle\"><i class=\"fa fa-bars text-white\" aria-hidden=\"true\"></i></a><img src=\"" + huawei_namespaceObject + "\" class=\"navbar-logo\" alt=\"\"></div><img src=\"" + Left_namespaceObject + "\" style=\"width:300px;margin-left:105px;\"><h3 class=\"netdrone-title mb-0\">NetDrone Eid Fitr 2024</h3><img src=\"" + Right_namespaceObject + "\" style=\"width:300px;\">", 4)
const _hoisted_102 = { class: "navbar-brand d-flex flex-row" }
const _hoisted_103 = { class: "col-6 align-self-center text-right me-2" }
const _hoisted_104 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "last-updated-title mb-2" }, "Last Updated Time", -1)
const _hoisted_105 = { class: "last-updated mb-0 ms-2" }
const _hoisted_106 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-6 text-webkit-right" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
    src: ioh_namespaceObject,
    class: "navbar-logo",
    alt: ""
  })
], -1)
const _hoisted_107 = { style: {"width":"100%","height":"90vh","position":"fixed"} }
const _hoisted_108 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "map-google",
  id: "map-google"
}, null, -1)
const _hoisted_109 = { class: "row row-map ps-2 pt-0 mt-2" }
const _hoisted_110 = { class: "col-3 pe-1" }
const _hoisted_111 = { class: "col-9 ps-1 pe-1" }
const _hoisted_112 = { class: "row row-right ps-2 pt-0 mt-2" }
const _hoisted_113 = {
  key: 0,
  class: "load_parent",
  style: {"top":"50%","position":"absolute","left":"44%","z-index":"999999999999"}
}
const _hoisted_114 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", { class: "loader" }, null, -1)
const _hoisted_115 = [
  _hoisted_114
]
const _hoisted_116 = {
  key: 1,
  class: "load_parent",
  style: {"top":"50%","position":"absolute","left":"44%","z-index":"999999999999"}
}
const _hoisted_117 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", { class: "loader" }, null, -1)
const _hoisted_118 = [
  _hoisted_117
]
const _hoisted_119 = {
  type: "button",
  ref: "siteDetailButton",
  class: "btn download-button",
  "data-bs-toggle": "modal",
  "data-bs-target": "#siteDetail",
  style: {"display":"none","visibility":"hidden"}
}
const _hoisted_120 = {
  type: "button",
  ref: "siteSearchButton",
  class: "btn download-button",
  "data-bs-toggle": "modal",
  "data-bs-target": "#siteSearch",
  style: {"display":"none","visibility":"hidden"}
}
const _hoisted_121 = {
  type: "button",
  ref: "fmeDetailButton",
  class: "btn download-button",
  "data-bs-toggle": "modal",
  "data-bs-target": "#fmeDetail",
  style: {"display":"none","visibility":"hidden"}
}
const _hoisted_122 = {
  type: "button",
  ref: "mcClusterSearchButton",
  class: "btn download-button",
  "data-bs-toggle": "modal",
  "data-bs-target": "#mcClusterSearch",
  style: {"display":"none","visibility":"hidden"}
}
const _hoisted_123 = {
  type: "button",
  ref: "fmeSearchButton",
  class: "btn download-button",
  "data-bs-toggle": "modal",
  "data-bs-target": "#fmeSearch",
  style: {"display":"none","visibility":"hidden"}
}
const _hoisted_124 = {
  type: "button",
  ref: "siteSearchDetailButton",
  class: "btn download-button",
  "data-bs-toggle": "modal",
  "data-bs-target": "#siteSearchDetail",
  style: {"display":"none","visibility":"hidden"}
}
const _hoisted_125 = {
  type: "button",
  ref: "fmeSearchDetailButton",
  class: "btn download-button",
  "data-bs-toggle": "modal",
  "data-bs-target": "#fmeSearchDetail",
  style: {"display":"none","visibility":"hidden"}
}
const _hoisted_126 = {
  type: "button",
  ref: "etaDetailsData",
  class: "btn download-button",
  "data-bs-toggle": "modal",
  "data-bs-target": "#etaDetailsData",
  style: {"display":"none","visibility":"hidden"}
}
const _hoisted_127 = {
  type: "button",
  ref: "sidebarCloseButton",
  class: "btn download-button",
  id: "close-sidebar-btn",
  style: {"display":"none","visibility":"hidden"}
}
const _hoisted_128 = {
  class: "modal fade",
  id: "mcClusterSearch",
  tabindex: "-1",
  role: "dialog"
}
const _hoisted_129 = {
  class: "modal-dialog d-flex flex-column align-items-center justify-content-center",
  role: "document"
}
const _hoisted_130 = { class: "modal-content modal-details-mc-cluster" }
const _hoisted_131 = { class: "modal-header" }
const _hoisted_132 = {
  type: "button",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  ref: "mcClusterSearchDismiss"
}
const _hoisted_133 = { class: "modal-body" }
const _hoisted_134 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("label", {
  class: "modal-search-label px-3",
  for: "mcCluster"
}, "Search MC Cluster", -1)
const _hoisted_135 = { class: "input-group px-3 flex-nowrap mt-2" }
const _hoisted_136 = { class: "row px-3" }
const _hoisted_137 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)("<div class=\"col-12 px-0\"><h4 class=\"text-search-result-top mb-3 mt-3 px-3\">Search Result</h4></div><div class=\"row mb-3\"><div class=\"col-12 px-0\"><p class=\"text-search-title\" style=\"margin-left:-11px !important;\">MC Cluster Name</p></div></div>", 2)
const _hoisted_139 = { class: "container container-content" }
const _hoisted_140 = {
  key: 0,
  class: "row"
}
const _hoisted_141 = ["id", "onClick"]
const _hoisted_142 = { class: "row px-2 py-2" }
const _hoisted_143 = { class: "col-12 px-0" }
const _hoisted_144 = { class: "mb-0 a-result-fme text-link-search" }
const _hoisted_145 = {
  class: "modal fade",
  id: "siteSearch",
  tabindex: "-1",
  role: "dialog"
}
const _hoisted_146 = {
  class: "modal-dialog d-flex flex-column align-items-center justify-content-center",
  role: "document"
}
const _hoisted_147 = { class: "modal-content modal-details" }
const _hoisted_148 = { class: "modal-header" }
const _hoisted_149 = {
  type: "button",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  ref: "siteSearchDismiss"
}
const _hoisted_150 = { class: "modal-body" }
const _hoisted_151 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("label", {
  class: "modal-search-label px-3",
  for: "mcCluster"
}, "Search Site Name", -1)
const _hoisted_152 = { class: "input-group px-3 flex-nowrap mt-2" }
const _hoisted_153 = { class: "row px-3" }
const _hoisted_154 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)("<div class=\"col-12 px-0\"><h4 class=\"text-search-result-top mb-3 mt-3 px-3\">Search Result</h4></div><div class=\"row mb-3\"><div class=\"col-6 px-0\"><p class=\"text-search-title\">Site Name</p></div><div class=\"col-3 px-0\"><p class=\"text-search-title\">Site ID</p></div><div class=\"col-3 px-0\"><p class=\"text-search-title\">Region Name</p></div></div>", 2)
const _hoisted_156 = { class: "container container-content" }
const _hoisted_157 = {
  key: 0,
  class: "row"
}
const _hoisted_158 = ["id", "onClick"]
const _hoisted_159 = { class: "row py-3" }
const _hoisted_160 = { class: "col-6 px-0" }
const _hoisted_161 = { class: "mb-0 a-result-fme text-link-search" }
const _hoisted_162 = { class: "col-3 px-0" }
const _hoisted_163 = { class: "mb-0 a-result-fme text-search-result" }
const _hoisted_164 = { class: "col-3 px-0" }
const _hoisted_165 = { class: "mb-0 a-result-fme text-search-result" }
const _hoisted_166 = {
  class: "modal fade",
  id: "fmeSearch",
  tabindex: "-1",
  role: "dialog"
}
const _hoisted_167 = {
  class: "modal-dialog d-flex flex-column align-items-center justify-content-center",
  role: "document"
}
const _hoisted_168 = { class: "modal-content modal-details" }
const _hoisted_169 = { class: "modal-header" }
const _hoisted_170 = {
  type: "button",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  ref: "fmeSearchDismiss"
}
const _hoisted_171 = { class: "modal-body" }
const _hoisted_172 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("label", {
  class: "modal-search-label px-3",
  for: "mcCluster"
}, "Search FME Name", -1)
const _hoisted_173 = { class: "input-group px-3 flex-nowrap mt-2" }
const _hoisted_174 = { class: "row px-3" }
const _hoisted_175 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)("<div class=\"col-12 px-0\"><h4 class=\"text-search-result-top mb-3 mt-3 px-3\">Search Result</h4></div><div class=\"row mb-3\"><div class=\"col-6\"><p class=\"text-search-title\">FME Name</p></div><div class=\"col-3 px-0\"><p class=\"text-search-title\">FME ID</p></div><div class=\"col-3\"><p class=\"text-search-title\">Task Id</p></div></div>", 2)
const _hoisted_177 = { class: "container container-content" }
const _hoisted_178 = {
  key: 0,
  class: "row"
}
const _hoisted_179 = ["id", "onClick"]
const _hoisted_180 = { class: "row px-2 py-2" }
const _hoisted_181 = { class: "col-6 px-0" }
const _hoisted_182 = { class: "mb-0 a-result-fme text-link-search" }
const _hoisted_183 = { class: "col-3 px-0" }
const _hoisted_184 = { class: "mb-0 a-result-fme text-search-result" }
const _hoisted_185 = { class: "col-3 px-0" }
const _hoisted_186 = { class: "mb-0 a-result-fme text-search-result" }
const _hoisted_187 = {
  class: "modal fade",
  id: "siteDetail",
  tabindex: "-1",
  role: "dialog"
}
const _hoisted_188 = {
  class: "modal-dialog d-flex flex-column align-items-center justify-content-center",
  role: "document"
}
const _hoisted_189 = { class: "modal-content modal-details" }
const _hoisted_190 = { class: "modal-header" }
const _hoisted_191 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h4", null, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "Site Details")
], -1)
const _hoisted_192 = {
  type: "button",
  ref: "closeSiteDetailModal",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}
const _hoisted_193 = { class: "modal-body" }
const _hoisted_194 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "Site")
], -1)
const _hoisted_195 = { class: "row mb-2" }
const _hoisted_196 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-2 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Site Name")
], -1)
const _hoisted_197 = { class: "col-8 font-right" }
const _hoisted_198 = { key: 0 }
const _hoisted_199 = { class: "row mb-2" }
const _hoisted_200 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-2 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Site ID")
], -1)
const _hoisted_201 = { class: "col-8 font-right" }
const _hoisted_202 = { key: 0 }
const _hoisted_203 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-3" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "Site Issues")
], -1)
const _hoisted_204 = { class: "row px-3 row-steps" }
const _hoisted_205 = {
  key: 0,
  class: "list-group horizontal-steps d-flex flex-row"
}
const _hoisted_206 = { class: "fit-content mb-3 ps-4 ms-2" }
const _hoisted_207 = { class: "list-group-item completed" }
const _hoisted_208 = { class: "ps-4 ms-2" }
const _hoisted_209 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-3 mt-3" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "Task List")
], -1)
const _hoisted_210 = {
  key: 0,
  class: "row justify-content-center"
}
const _hoisted_211 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "text-center" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "There is no task list.")
], -1)
const _hoisted_212 = [
  _hoisted_211
]
const _hoisted_213 = { class: "container-fluid container-modal" }
const _hoisted_214 = {
  key: 0,
  class: "row row-gap-15"
}
const _hoisted_215 = {
  class: "accordion accordion-border",
  id: "accordionExample"
}
const _hoisted_216 = { class: "accordion-item" }
const _hoisted_217 = { class: "accordion-header py-1" }
const _hoisted_218 = ["data-bs-target", "aria-controls"]
const _hoisted_219 = ["id"]
const _hoisted_220 = { class: "accordion-body" }
const _hoisted_221 = { class: "row mb-2" }
const _hoisted_222 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left align-self-center align-items-center" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "TT ID")
], -1)
const _hoisted_223 = { class: "col-8 font-right d-flex flex-row align-self-center align-items-center" }
const _hoisted_224 = {
  class: "d-flex flex-row w-fit-content",
  id: "site-detail-tt"
}
const _hoisted_225 = { class: "row mb-2" }
const _hoisted_226 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "WO ID")
], -1)
const _hoisted_227 = { class: "col-8 font-right" }
const _hoisted_228 = { class: "row mb-2" }
const _hoisted_229 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "FME")
], -1)
const _hoisted_230 = { class: "col-8 font-right" }
const _hoisted_231 = ["onClick"]
const _hoisted_232 = { class: "row mb-2" }
const _hoisted_233 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Phone Number")
], -1)
const _hoisted_234 = { class: "col-8 font-right" }
const _hoisted_235 = { class: "row mb-2" }
const _hoisted_236 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Title")
], -1)
const _hoisted_237 = { class: "col-8 font-right overflow-break" }
const _hoisted_238 = { class: "font-right" }
const _hoisted_239 = { class: "row mb-2" }
const _hoisted_240 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "SLA Site Class")
], -1)
const _hoisted_241 = { class: "col-8 font-right" }
const _hoisted_242 = { class: "row mb-2" }
const _hoisted_243 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "SLA Duration")
], -1)
const _hoisted_244 = { class: "col-8 font-right" }
const _hoisted_245 = { class: "row mb-2" }
const _hoisted_246 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "SLA Remain")
], -1)
const _hoisted_247 = { class: "col-8 font-right" }
const _hoisted_248 = { class: "row mb-2" }
const _hoisted_249 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Status")
], -1)
const _hoisted_250 = { class: "col-8 font-right" }
const _hoisted_251 = { class: "row mb-2" }
const _hoisted_252 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Suspect Cause")
], -1)
const _hoisted_253 = { class: "col-8 font-right" }
const _hoisted_254 = { class: "row mb-2" }
const _hoisted_255 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Update")
], -1)
const _hoisted_256 = { class: "col-8 font-right" }
const _hoisted_257 = {
  class: "modal fade",
  id: "siteSearchDetail",
  tabindex: "-1",
  role: "dialog"
}
const _hoisted_258 = {
  class: "modal-dialog d-flex flex-column align-items-center justify-content-center",
  role: "document"
}
const _hoisted_259 = { class: "modal-content modal-details" }
const _hoisted_260 = { class: "modal-header" }
const _hoisted_261 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h4", null, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "Site Details")
], -1)
const _hoisted_262 = {
  type: "button",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  ref: "closeSiteDetailModalSearch"
}
const _hoisted_263 = { class: "modal-body" }
const _hoisted_264 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "Site")
], -1)
const _hoisted_265 = { class: "row mb-2" }
const _hoisted_266 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-2 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Site Name")
], -1)
const _hoisted_267 = { class: "col-8 font-right" }
const _hoisted_268 = { key: 0 }
const _hoisted_269 = { key: 1 }
const _hoisted_270 = { class: "row mb-2" }
const _hoisted_271 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-2 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Site ID")
], -1)
const _hoisted_272 = { class: "col-8 font-right" }
const _hoisted_273 = { key: 0 }
const _hoisted_274 = { key: 1 }
const _hoisted_275 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-3" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "Site Issues")
], -1)
const _hoisted_276 = { class: "row px-3 row-steps" }
const _hoisted_277 = {
  key: 0,
  class: "list-group horizontal-steps d-flex flex-row"
}
const _hoisted_278 = { class: "fit-content mb-3 ps-4 ms-2" }
const _hoisted_279 = { class: "list-group-item completed" }
const _hoisted_280 = { class: "ps-4 ms-2" }
const _hoisted_281 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-3 mt-3" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "Task List")
], -1)
const _hoisted_282 = {
  key: 0,
  class: "row justify-content-center"
}
const _hoisted_283 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "text-center" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "There is no task list.")
], -1)
const _hoisted_284 = [
  _hoisted_283
]
const _hoisted_285 = { class: "container-fluid container-modal" }
const _hoisted_286 = {
  key: 0,
  class: "row row-gap-15"
}
const _hoisted_287 = {
  class: "accordion accordion-border",
  id: "accordionExample"
}
const _hoisted_288 = { class: "accordion-item" }
const _hoisted_289 = { class: "accordion-header px-2 py-1" }
const _hoisted_290 = ["data-bs-target", "aria-controls"]
const _hoisted_291 = ["id"]
const _hoisted_292 = { class: "accordion-body" }
const _hoisted_293 = { class: "row mb-2" }
const _hoisted_294 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left align-self-center align-items-center" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "TT ID")
], -1)
const _hoisted_295 = { class: "col-8 font-right d-flex flex-row align-self-center align-items-center" }
const _hoisted_296 = {
  class: "d-flex flex-row w-fit-content",
  id: "site-search-detail-tt"
}
const _hoisted_297 = { class: "row mb-2" }
const _hoisted_298 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "WO ID")
], -1)
const _hoisted_299 = { class: "col-8 font-right" }
const _hoisted_300 = { class: "row mb-2" }
const _hoisted_301 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "FME")
], -1)
const _hoisted_302 = { class: "col-8 font-right" }
const _hoisted_303 = ["onClick"]
const _hoisted_304 = { class: "row mb-2" }
const _hoisted_305 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Phone Number")
], -1)
const _hoisted_306 = { class: "col-8 font-right" }
const _hoisted_307 = { class: "row mb-2" }
const _hoisted_308 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Title")
], -1)
const _hoisted_309 = { class: "col-8 font-right" }
const _hoisted_310 = { class: "row mb-2" }
const _hoisted_311 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "SLA Site Class")
], -1)
const _hoisted_312 = { class: "col-8 font-right" }
const _hoisted_313 = { class: "row mb-2" }
const _hoisted_314 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "SLA Duration")
], -1)
const _hoisted_315 = { class: "col-8 font-right" }
const _hoisted_316 = { class: "row mb-2" }
const _hoisted_317 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "SLA Remain")
], -1)
const _hoisted_318 = { class: "col-8 font-right" }
const _hoisted_319 = { class: "row mb-2" }
const _hoisted_320 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Status")
], -1)
const _hoisted_321 = { class: "col-8 font-right" }
const _hoisted_322 = { class: "row mb-2" }
const _hoisted_323 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Suspect Cause")
], -1)
const _hoisted_324 = { class: "col-8 font-right" }
const _hoisted_325 = { class: "row mb-2" }
const _hoisted_326 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, "Update")
], -1)
const _hoisted_327 = { class: "col-8 font-right" }
const _hoisted_328 = {
  class: "modal fade",
  id: "fmeDetail",
  tabindex: "-1",
  role: "dialog"
}
const _hoisted_329 = {
  class: "modal-dialog d-flex flex-column align-items-center justify-content-center",
  role: "document"
}
const _hoisted_330 = { class: "modal-content modal-details" }
const _hoisted_331 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "modal-header" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h4", null, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "FME Details")
  ]),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    type: "button",
    class: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })
], -1)
const _hoisted_332 = { class: "modal-body" }
const _hoisted_333 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "FME")
], -1)
const _hoisted_334 = { class: "row" }
const _hoisted_335 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2 font-left" }, "Name")
], -1)
const _hoisted_336 = { class: "col-8 font-right" }
const _hoisted_337 = {
  key: 0,
  class: "font-right mb-2"
}
const _hoisted_338 = { class: "row" }
const _hoisted_339 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2 font-left" }, "Status")
], -1)
const _hoisted_340 = { class: "col-8 font-right" }
const _hoisted_341 = {
  key: 0,
  class: "font-right mb-2"
}
const _hoisted_342 = { class: "row" }
const _hoisted_343 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2 font-left" }, "User Name")
], -1)
const _hoisted_344 = { class: "col-8 font-right" }
const _hoisted_345 = {
  key: 0,
  class: "font-right mb-2"
}
const _hoisted_346 = { class: "row" }
const _hoisted_347 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2 font-left" }, "Default FM Office")
], -1)
const _hoisted_348 = { class: "col-8 font-right" }
const _hoisted_349 = {
  key: 0,
  class: "font-right mb-2"
}
const _hoisted_350 = { class: "row" }
const _hoisted_351 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2 font-left" }, "Contractor")
], -1)
const _hoisted_352 = { class: "col-8 font-right" }
const _hoisted_353 = {
  key: 0,
  class: "font-right mb-2"
}
const _hoisted_354 = { class: "row" }
const _hoisted_355 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2 font-left" }, "Skills")
], -1)
const _hoisted_356 = { class: "col-8 font-right" }
const _hoisted_357 = {
  key: 0,
  class: "font-right mb-2"
}
const _hoisted_358 = { class: "row" }
const _hoisted_359 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2 font-left" }, "Task Type")
], -1)
const _hoisted_360 = { class: "col-8 font-right" }
const _hoisted_361 = {
  key: 0,
  class: "font-right mb-2"
}
const _hoisted_362 = { class: "row" }
const _hoisted_363 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2 font-left" }, "Phone Number")
], -1)
const _hoisted_364 = { class: "col-8 font-right" }
const _hoisted_365 = {
  key: 0,
  class: "font-right mb-2"
}
const _hoisted_366 = { class: "container-fluid container-modal" }
const _hoisted_367 = { class: "row row-ticket-fme" }
const _hoisted_368 = {
  key: 0,
  class: "col-12 text-center align-self-center align-items-center"
}
const _hoisted_369 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "There is no Ticket List")
], -1)
const _hoisted_370 = [
  _hoisted_369
]
const _hoisted_371 = {
  class: "accordion accordion-border",
  id: "accordionExample"
}
const _hoisted_372 = { class: "accordion-item" }
const _hoisted_373 = { class: "accordion-header px-2 py-1 pb-0" }
const _hoisted_374 = ["data-bs-target", "aria-controls"]
const _hoisted_375 = { class: "row" }
const _hoisted_376 = { class: "col-12" }
const _hoisted_377 = {
  class: "row px-2",
  style: {"gap":"10px"}
}
const _hoisted_378 = { class: "task-types-class mb-2" }
const _hoisted_379 = {
  key: 0,
  class: "fault-lv1 mb-2"
}
const _hoisted_380 = {
  key: 1,
  class: "fault-lv2 mb-2"
}
const _hoisted_381 = {
  key: 2,
  class: "fault-lv3 mb-2"
}
const _hoisted_382 = {
  key: 3,
  class: "fault-lv4 mb-2"
}
const _hoisted_383 = {
  key: 0,
  id: "fme-detail-ticket-id"
}
const _hoisted_384 = {
  key: 1,
  id: "fme-detail-task-id"
}
const _hoisted_385 = ["id", "data-bs-parent"]
const _hoisted_386 = { class: "accordion-body" }
const _hoisted_387 = { class: "row mb-4" }
const _hoisted_388 = { class: "col-6 px-1" }
const _hoisted_389 = { class: "row mb-2" }
const _hoisted_390 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "fme-detail-accordion font-left" }, "Site ID")
], -1)
const _hoisted_391 = { class: "col-8" }
const _hoisted_392 = ["onClick"]
const _hoisted_393 = { class: "row mb-2" }
const _hoisted_394 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "fme-detail-accordion font-left" }, "Title")
], -1)
const _hoisted_395 = { class: "col-8 overflow-break" }
const _hoisted_396 = { class: "fme-detail-accordion font-right" }
const _hoisted_397 = { class: "row mb-2" }
const _hoisted_398 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 pe-0" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "fme-detail-accordion font-left" }, "Task Type")
], -1)
const _hoisted_399 = { class: "col-8" }
const _hoisted_400 = { class: "fme-detail-accordion font-right" }
const _hoisted_401 = { class: "row mb-2" }
const _hoisted_402 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 pe-0" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "fme-detail-accordion font-left" }, "Task Status")
], -1)
const _hoisted_403 = { class: "col-8" }
const _hoisted_404 = { class: "fme-detail-accordion font-right" }
const _hoisted_405 = { class: "row mb-2" }
const _hoisted_406 = ["onClick"]
const _hoisted_407 = {
  class: "modal fade",
  id: "fmeSearchDetail",
  tabindex: "-1",
  role: "dialog"
}
const _hoisted_408 = {
  class: "modal-dialog d-flex flex-column align-items-center justify-content-center",
  role: "document"
}
const _hoisted_409 = { class: "modal-content modal-details" }
const _hoisted_410 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "modal-header" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h4", null, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "FME Details")
  ]),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    type: "button",
    class: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })
], -1)
const _hoisted_411 = { class: "modal-body" }
const _hoisted_412 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "FME")
], -1)
const _hoisted_413 = { class: "row" }
const _hoisted_414 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2 font-left" }, "Name")
], -1)
const _hoisted_415 = { class: "col-8 font-right" }
const _hoisted_416 = {
  key: 0,
  class: "font-right mb-2"
}
const _hoisted_417 = { class: "row" }
const _hoisted_418 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2 font-left" }, "Status")
], -1)
const _hoisted_419 = { class: "col-8 font-right" }
const _hoisted_420 = {
  key: 0,
  class: "font-right mb-2"
}
const _hoisted_421 = { class: "row" }
const _hoisted_422 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2 font-left" }, "User Name")
], -1)
const _hoisted_423 = { class: "col-8 font-right" }
const _hoisted_424 = {
  key: 0,
  class: "font-right mb-2"
}
const _hoisted_425 = { class: "row" }
const _hoisted_426 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2 font-left" }, "Default FM Office")
], -1)
const _hoisted_427 = { class: "col-8 font-right" }
const _hoisted_428 = {
  key: 0,
  class: "font-right mb-2"
}
const _hoisted_429 = { class: "row" }
const _hoisted_430 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2 font-left" }, "Contractor")
], -1)
const _hoisted_431 = { class: "col-8 font-right" }
const _hoisted_432 = {
  key: 0,
  class: "font-right mb-2"
}
const _hoisted_433 = { class: "row" }
const _hoisted_434 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2 font-left" }, "Skills")
], -1)
const _hoisted_435 = { class: "col-8 font-right" }
const _hoisted_436 = {
  key: 0,
  class: "font-right mb-2"
}
const _hoisted_437 = { class: "row" }
const _hoisted_438 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2 font-left" }, "Task Type")
], -1)
const _hoisted_439 = { class: "col-8 font-right" }
const _hoisted_440 = {
  key: 0,
  class: "font-right mb-2"
}
const _hoisted_441 = { class: "row" }
const _hoisted_442 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 font-left" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "mb-2 font-left" }, "Phone Number")
], -1)
const _hoisted_443 = { class: "col-8 font-right" }
const _hoisted_444 = {
  key: 0,
  class: "font-right mb-2"
}
const _hoisted_445 = { class: "container-fluid container-modal" }
const _hoisted_446 = { class: "row row-ticket-fme" }
const _hoisted_447 = {
  key: 0,
  class: "col-12 text-center align-self-center align-items-center"
}
const _hoisted_448 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "There is no Ticket List")
], -1)
const _hoisted_449 = [
  _hoisted_448
]
const _hoisted_450 = {
  class: "accordion accordion-border",
  id: "accordionExample"
}
const _hoisted_451 = { class: "accordion-item" }
const _hoisted_452 = { class: "accordion-header px-2 py-1 pb-0" }
const _hoisted_453 = ["data-bs-target", "aria-controls"]
const _hoisted_454 = { class: "row" }
const _hoisted_455 = { class: "col-12" }
const _hoisted_456 = {
  class: "row px-2",
  style: {"gap":"10px"}
}
const _hoisted_457 = { class: "task-types-class mb-2" }
const _hoisted_458 = {
  key: 0,
  class: "fault-lv1 mb-2"
}
const _hoisted_459 = {
  key: 1,
  class: "fault-lv2 mb-2"
}
const _hoisted_460 = {
  key: 2,
  class: "fault-lv3 mb-2"
}
const _hoisted_461 = {
  key: 3,
  class: "fault-lv4 mb-2"
}
const _hoisted_462 = {
  key: 0,
  id: "fme-search-detail-ticket-id"
}
const _hoisted_463 = {
  key: 1,
  id: "fme-search-detail-ticket-id"
}
const _hoisted_464 = ["id", "data-bs-parent"]
const _hoisted_465 = { class: "accordion-body" }
const _hoisted_466 = { class: "row mb-4" }
const _hoisted_467 = { class: "col-6 px-1" }
const _hoisted_468 = { class: "row mb-2" }
const _hoisted_469 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "fme-detail-accordion font-left" }, "Site ID")
], -1)
const _hoisted_470 = { class: "col-8" }
const _hoisted_471 = ["onClick"]
const _hoisted_472 = { class: "row mb-2" }
const _hoisted_473 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "fme-detail-accordion font-left" }, "Title")
], -1)
const _hoisted_474 = { class: "col-8 overflow-break" }
const _hoisted_475 = { class: "fme-detail-accordion font-right" }
const _hoisted_476 = { class: "row mb-2" }
const _hoisted_477 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 pe-0" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "fme-detail-accordion font-left" }, "Task Type")
], -1)
const _hoisted_478 = { class: "col-8" }
const _hoisted_479 = { class: "fme-detail-accordion font-right" }
const _hoisted_480 = { class: "row mb-2" }
const _hoisted_481 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-4 pe-0" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "fme-detail-accordion font-left" }, "Task Status")
], -1)
const _hoisted_482 = { class: "col-8" }
const _hoisted_483 = { class: "fme-detail-accordion font-right" }
const _hoisted_484 = { class: "row mb-2" }
const _hoisted_485 = ["onClick"]
const _hoisted_486 = {
  class: "modal fade",
  id: "etaDetails",
  tabindex: "-1",
  role: "dialog"
}
const _hoisted_487 = {
  class: "modal-dialog d-flex flex-column align-items-center justify-content-center",
  role: "document"
}
const _hoisted_488 = { class: "modal-content modal-details" }
const _hoisted_489 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "modal-header" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h4", null, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "Task Details")
  ]),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    type: "button",
    class: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })
], -1)
const _hoisted_490 = { class: "modal-body" }
const _hoisted_491 = { class: "row" }
const _hoisted_492 = { class: "col-6" }
const _hoisted_493 = { class: "row" }
const _hoisted_494 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)("<div class=\"col-4\"><p class=\"font-left font-16 mb-2 color-black\"><b>Task</b></p><p class=\"font-left font-16 mb-3\">Task ID</p><p class=\"font-left font-16 mb-2 color-black\"><b>Site</b></p><p class=\"font-left font-16 mb-2\">Site ID</p><p class=\"font-left font-16 mb-2\">Lat</p><p class=\"font-left font-16 mb-3\">Lon</p><p class=\"font-left font-16 mb-2 color-black\"><b>User</b></p><p class=\"font-left font-16 mb-2\">User</p><p class=\"font-left font-16 mb-2\">User ID</p><p class=\"font-left font-16 mb-2\">Phone Number</p><p class=\"font-left font-16 mb-2\">Lat</p><p class=\"font-left font-16 mb-3\">Lon</p><p class=\"font-left font-16 mb-2 color-black\"><b>User Distance</b></p><p class=\"font-left font-16 mb-2\">Distance</p><p class=\"font-left font-16 mb-2\">ETA</p></div>", 1)
const _hoisted_495 = { class: "col-8" }
const _hoisted_496 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "font-right font-16 mb-2" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, " ")
], -1)
const _hoisted_497 = {
  key: 0,
  class: "font-right font-16 mb-3"
}
const _hoisted_498 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "font-right font-16 mb-2" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, " ")
], -1)
const _hoisted_499 = {
  key: 1,
  class: "font-right font-16 mb-2"
}
const _hoisted_500 = {
  key: 2,
  class: "font-right font-16 mb-2"
}
const _hoisted_501 = {
  key: 3,
  class: "font-right font-16 mb-3"
}
const _hoisted_502 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "font-right font-16 mb-2" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, " ")
], -1)
const _hoisted_503 = {
  key: 4,
  class: "font-right font-16 mb-2"
}
const _hoisted_504 = {
  key: 5,
  class: "font-right font-16 mb-2"
}
const _hoisted_505 = {
  key: 6,
  class: "font-right font-16 mb-2"
}
const _hoisted_506 = {
  key: 7,
  class: "font-right font-16 mb-2"
}
const _hoisted_507 = {
  key: 8,
  class: "font-right font-16 mb-3"
}
const _hoisted_508 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "font-right font-16 mb-2" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, " ")
], -1)
const _hoisted_509 = {
  key: 9,
  class: "font-right font-16 mb-3"
}
const _hoisted_510 = {
  key: 10,
  class: "font-right font-16 mb-3"
}
const _hoisted_511 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "col-6",
  id: "petal-map-col"
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
    class: "site-map-petal-hw",
    style: {"width":"100%","height":"500px","cursor":"pointer","background-color":"whitesmoke"},
    id: "site-map-petal-hw"
  })
], -1)
const _hoisted_512 = {
  class: "modal fade",
  id: "etaDetailsData",
  tabindex: "-1",
  role: "dialog"
}
const _hoisted_513 = {
  class: "modal-dialog d-flex flex-column align-items-center justify-content-center",
  role: "document"
}
const _hoisted_514 = { class: "modal-content modal-details" }
const _hoisted_515 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "modal-header" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h4", null, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "Task Details")
  ]),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    type: "button",
    class: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })
], -1)
const _hoisted_516 = { class: "modal-body" }
const _hoisted_517 = { class: "row" }
const _hoisted_518 = { class: "col-6" }
const _hoisted_519 = { class: "row" }
const _hoisted_520 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)("<div class=\"col-4\"><p class=\"font-left font-16 mb-2 color-black\"><b>Task</b></p><p class=\"font-left font-16 mb-3\">Task ID</p><p class=\"font-left font-16 mb-2 color-black\"><b>Site</b></p><p class=\"font-left font-16 mb-2\">Site ID</p><p class=\"font-left font-16 mb-2\">Lat</p><p class=\"font-left font-16 mb-3\">Lon</p><p class=\"font-left font-16 mb-2 color-black\"><b>User</b></p><p class=\"font-left font-16 mb-2\">User</p><p class=\"font-left font-16 mb-2\">User ID</p><p class=\"font-left font-16 mb-2\">Phone Number</p><p class=\"font-left font-16 mb-2\">Lat</p><p class=\"font-left font-16 mb-3\">Lon</p><p class=\"font-left font-16 mb-2 color-black\"><b>User Distance</b></p><p class=\"font-left font-16 mb-2\">Distance</p><p class=\"font-left font-16 mb-2\">ETA</p></div>", 1)
const _hoisted_521 = { class: "col-8" }
const _hoisted_522 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "font-right font-16 mb-2" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, " ")
], -1)
const _hoisted_523 = {
  key: 0,
  class: "font-right font-16 mb-3"
}
const _hoisted_524 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "font-right font-16 mb-2" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, " ")
], -1)
const _hoisted_525 = {
  key: 1,
  class: "font-right font-16 mb-2"
}
const _hoisted_526 = {
  key: 2,
  class: "font-right font-16 mb-2"
}
const _hoisted_527 = {
  key: 3,
  class: "font-right font-16 mb-3"
}
const _hoisted_528 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "font-right font-16 mb-2" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, " ")
], -1)
const _hoisted_529 = {
  key: 4,
  class: "font-right font-16 mb-2"
}
const _hoisted_530 = {
  key: 5,
  class: "font-right font-16 mb-2"
}
const _hoisted_531 = {
  key: 6,
  class: "font-right font-16 mb-2"
}
const _hoisted_532 = {
  key: 7,
  class: "font-right font-16 mb-2"
}
const _hoisted_533 = {
  key: 8,
  class: "font-right font-16 mb-3"
}
const _hoisted_534 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "font-right font-16 mb-2" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, " ")
], -1)
const _hoisted_535 = {
  key: 9,
  class: "font-right font-16 mb-3"
}
const _hoisted_536 = {
  key: 10,
  class: "font-right font-16 mb-3"
}
const _hoisted_537 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "col-6",
  id: "petal-map-col-eta-detail"
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
    class: "site-map-petal-hw-eta-detail",
    style: {"width":"100%","height":"500px","cursor":"pointer","background-color":"whitesmoke"},
    id: "site-map-petal-hw-eta-detail"
  })
], -1)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ButtonSidebarClose = (0,runtime_core_esm_bundler/* resolveComponent */.up)("ButtonSidebarClose")
  const _component_OutagesCard = (0,runtime_core_esm_bundler/* resolveComponent */.up)("OutagesCard")
  const _component_DurationRangeCard = (0,runtime_core_esm_bundler/* resolveComponent */.up)("DurationRangeCard")
  const _component_RegionWiseCard = (0,runtime_core_esm_bundler/* resolveComponent */.up)("RegionWiseCard")
  const _component_SiteStatistic = (0,runtime_core_esm_bundler/* resolveComponent */.up)("SiteStatistic")

  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_1, [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_ButtonSidebarClose),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [
            (this.loadingFilter == false)
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("a", _hoisted_5, [
                  _hoisted_6,
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" IOH Dashboard ")
                ]))
              : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", _hoisted_7, [
                  _hoisted_8,
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" IOH Dashboard ")
                ]))
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_9, [
            (this.loadingFilter == false)
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", _hoisted_10, [
                  _hoisted_11,
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Site Statistic ")
                ], 512))
              : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", _hoisted_12, [
                  _hoisted_13,
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Site Statistic ")
                ], 512))
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_14, [
            (this.loadingFilter == false)
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
                  key: 0,
                  onClick: _cache[0] || (_cache[0] = $event => ($options.exportByCategory())),
                  type: "button",
                  class: "btn btn-sidebar ioh-dash d-flex",
                  style: {"gap":"10px"}
                }, [
                  _hoisted_15,
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Site Statistic By Filter ")
                ]))
              : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", _hoisted_16, [
                  _hoisted_17,
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Site Statistic By Filter ")
                ]))
          ])
        ]),
        _hoisted_18,
        (0,runtime_core_esm_bundler/* createElementVNode */._)("ul", _hoisted_20, [
          _hoisted_21,
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_22, [
            ($data.loading == false)
              ? (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("input", {
                  key: 0,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($data.clusterSearch) = $event)),
                  onKeyup: _cache[2] || (_cache[2] = (0,runtime_dom_esm_bundler/* withKeys */.D2)($event => ($options.searchCluster()), ["enter"])),
                  type: "text",
                  class: "form-control px-4",
                  id: "mcCluster",
                  placeholder: "Search MC Cluster"
                }, null, 544)), [
                  [runtime_dom_esm_bundler/* vModelText */.nr, $data.clusterSearch]
                ])
              : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
              onClick: _cache[3] || (_cache[3] = $event => ($options.clearSearchCluster())),
              class: "input-group-text",
              id: "addon-wrapping"
            }, "✖"),
            ($data.loading == true)
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("input", _hoisted_23))
              : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
          ]),
          _hoisted_24,
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_25, [
            ($data.loading == false)
              ? (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("input", {
                  key: 0,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($data.siteNameSearch) = $event)),
                  onKeyup: _cache[5] || (_cache[5] = (0,runtime_dom_esm_bundler/* withKeys */.D2)($event => ($options.searchSiteName()), ["enter"])),
                  type: "text",
                  class: "form-control px-4",
                  id: "siteName",
                  placeholder: "Search Site Name"
                }, null, 544)), [
                  [runtime_dom_esm_bundler/* vModelText */.nr, $data.siteNameSearch]
                ])
              : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
              onClick: _cache[6] || (_cache[6] = $event => ($options.clearSearchSite())),
              class: "input-group-text",
              id: "addon-wrapping"
            }, "✖"),
            ($data.loading == true)
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("input", _hoisted_26))
              : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
          ]),
          _hoisted_27,
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_28, [
            ($data.loading == false)
              ? (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("input", {
                  key: 0,
                  type: "text",
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (($data.fmeNameSearch) = $event)),
                  onKeyup: _cache[8] || (_cache[8] = (0,runtime_dom_esm_bundler/* withKeys */.D2)($event => ($options.searchFmeName()), ["enter"])),
                  class: "form-control px-4",
                  id: "fmeName",
                  placeholder: "Search FME Name"
                }, null, 544)), [
                  [runtime_dom_esm_bundler/* vModelText */.nr, $data.fmeNameSearch]
                ])
              : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
              onClick: _cache[9] || (_cache[9] = $event => ($options.clearSearchFme())),
              class: "input-group-text",
              id: "addon-wrapping"
            }, "✖"),
            ($data.loading == true)
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("input", _hoisted_29))
              : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
          ])
        ]),
        _hoisted_30,
        (0,runtime_core_esm_bundler/* createElementVNode */._)("ul", _hoisted_32, [
          ($data.loading == true)
            ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", _hoisted_33, "Clear Filter"))
            : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
          ($data.loading == true)
            ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", _hoisted_34, "Apply Filter"))
            : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
          ($data.loading == false)
            ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
                key: 2,
                class: "btn btn-primary btn-clear-filter btn-15",
                onClick: _cache[10] || (_cache[10] = $event => ($options.handleClearFilter()))
              }, " Clear Filter "))
            : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
          ($data.loading == false)
            ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
                key: 3,
                class: "btn btn-primary btn-apply-filter btn-16",
                onClick: _cache[11] || (_cache[11] = $event => ($options.handleApplyFilter()))
              }, " Apply Filter "))
            : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
        ]),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("ul", _hoisted_35, [
          _hoisted_36,
          (0,runtime_core_esm_bundler/* createElementVNode */._)("li", _hoisted_37, [
            _hoisted_38,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_39, [
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_40, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_41, [
                  (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                    onChange: _cache[12] || (_cache[12] = $event => ($options.checkSites($event, 'all'))),
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => (($data.allSiteCheck) = $event)),
                    type: "checkbox",
                    class: "sidebar-checkbox",
                    id: "site_all",
                    name: "site_all",
                    value: "Bike"
                  }, null, 544), [
                    [runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.allSiteCheck]
                  ]),
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)("   "),
                  _hoisted_42
                ]),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_43, [
                  (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                    onChange: _cache[14] || (_cache[14] = $event => ($options.checkSites($event, '1hr'))),
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => (($data.oneHourCheck) = $event)),
                    type: "checkbox",
                    class: "sidebar-checkbox",
                    id: "site_all",
                    name: "site_all",
                    value: "Bike"
                  }, null, 544), [
                    [runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.oneHourCheck]
                  ]),
                  _hoisted_44,
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)("   "),
                  _hoisted_45
                ]),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_46, [
                  (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                    onChange: _cache[16] || (_cache[16] = $event => ($options.checkSites($event, '4hr'))),
                    "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => (($data.fourHourCheck) = $event)),
                    type: "checkbox",
                    class: "sidebar-checkbox",
                    id: "site_all",
                    name: "site_all",
                    value: "Bike"
                  }, null, 544), [
                    [runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.fourHourCheck]
                  ]),
                  _hoisted_47,
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)("   "),
                  _hoisted_48
                ]),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_49, [
                  (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                    onChange: _cache[18] || (_cache[18] = $event => ($options.checkSites($event, '8hr'))),
                    "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => (($data.eightHourCheck) = $event)),
                    type: "checkbox",
                    class: "sidebar-checkbox",
                    id: "site_all",
                    name: "site_all",
                    value: "Bike"
                  }, null, 544), [
                    [runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.eightHourCheck]
                  ]),
                  _hoisted_50,
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)("   "),
                  _hoisted_51
                ]),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_52, [
                  (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                    onChange: _cache[20] || (_cache[20] = $event => ($options.checkSites($event, '24hr'))),
                    "onUpdate:modelValue": _cache[21] || (_cache[21] = $event => (($data.twentyFourHourCheck) = $event)),
                    type: "checkbox",
                    class: "sidebar-checkbox",
                    id: "site_all",
                    name: "site_all",
                    value: "Bike"
                  }, null, 544), [
                    [runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.twentyFourHourCheck]
                  ]),
                  _hoisted_53,
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)("   "),
                  _hoisted_54
                ]),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_55, [
                  (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                    onChange: _cache[22] || (_cache[22] = $event => ($options.checkSites($event, 'moreDay'))),
                    "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => (($data.moreDayCheck) = $event)),
                    type: "checkbox",
                    class: "sidebar-checkbox",
                    id: "site_all",
                    name: "site_all",
                    value: "Bike"
                  }, null, 544), [
                    [runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.moreDayCheck]
                  ]),
                  _hoisted_56,
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)("   "),
                  _hoisted_57
                ])
              ])
            ])
          ])
        ]),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("ul", _hoisted_58, [
          _hoisted_59,
          (0,runtime_core_esm_bundler/* createElementVNode */._)("li", _hoisted_60, [
            _hoisted_61,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_62, [
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_63, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_64, [
                  (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                    onChange: _cache[24] || (_cache[24] = $event => ($options.checkSiteCategory($event, 'all'))),
                    "onUpdate:modelValue": _cache[25] || (_cache[25] = $event => (($data.allCatSiteCheck) = $event)),
                    type: "checkbox",
                    class: "sidebar-checkbox",
                    id: "site_all",
                    name: "site_all",
                    value: "Bike"
                  }, null, 544), [
                    [runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.allCatSiteCheck]
                  ]),
                  _hoisted_65
                ]),
                _hoisted_66,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_67, [
                  (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                    onChange: _cache[26] || (_cache[26] = $event => ($options.checkSiteCategory($event, 'poiSiteCheckDown'))),
                    "onUpdate:modelValue": _cache[27] || (_cache[27] = $event => (($data.poiSiteCheckDown) = $event)),
                    type: "checkbox",
                    class: "sidebar-checkbox"
                  }, null, 544), [
                    [runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.poiSiteCheckDown]
                  ]),
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)("   "),
                  _hoisted_68
                ]),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_69, [
                  (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                    onChange: _cache[28] || (_cache[28] = $event => ($options.checkSiteCategory($event, 'poiSiteCheckUp'))),
                    "onUpdate:modelValue": _cache[29] || (_cache[29] = $event => (($data.poiSiteCheckUp) = $event)),
                    type: "checkbox",
                    class: "sidebar-checkbox"
                  }, null, 544), [
                    [runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.poiSiteCheckUp]
                  ]),
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)("   "),
                  _hoisted_70
                ]),
                _hoisted_71,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_72, [
                  (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                    onChange: _cache[30] || (_cache[30] = $event => ($options.checkSiteCategory($event, 'routeSiteCheckDown'))),
                    "onUpdate:modelValue": _cache[31] || (_cache[31] = $event => (($data.routeSiteCheckDown) = $event)),
                    type: "checkbox",
                    class: "sidebar-checkbox"
                  }, null, 544), [
                    [runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.routeSiteCheckDown]
                  ]),
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)("   "),
                  _hoisted_73
                ]),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_74, [
                  (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                    onChange: _cache[32] || (_cache[32] = $event => ($options.checkSiteCategory($event, 'routeSiteCheckUp'))),
                    "onUpdate:modelValue": _cache[33] || (_cache[33] = $event => (($data.routeSiteCheckUp) = $event)),
                    type: "checkbox",
                    class: "sidebar-checkbox"
                  }, null, 544), [
                    [runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.routeSiteCheckUp]
                  ]),
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)("   "),
                  _hoisted_75
                ]),
                _hoisted_76,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_77, [
                  (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                    onChange: _cache[34] || (_cache[34] = $event => ($options.checkSiteCategory($event, 'ctiSiteCheckDown'))),
                    "onUpdate:modelValue": _cache[35] || (_cache[35] = $event => (($data.ctiSiteCheckDown) = $event)),
                    type: "checkbox",
                    class: "sidebar-checkbox"
                  }, null, 544), [
                    [runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.ctiSiteCheckDown]
                  ]),
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)("   "),
                  _hoisted_78
                ]),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_79, [
                  (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                    onChange: _cache[36] || (_cache[36] = $event => ($options.checkSiteCategory($event, 'ctiSiteCheckUp'))),
                    "onUpdate:modelValue": _cache[37] || (_cache[37] = $event => (($data.ctiSiteCheckUp) = $event)),
                    type: "checkbox",
                    class: "sidebar-checkbox"
                  }, null, 544), [
                    [runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.ctiSiteCheckUp]
                  ]),
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)("   "),
                  _hoisted_80
                ])
              ])
            ])
          ])
        ]),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("ul", _hoisted_81, [
          _hoisted_82,
          (0,runtime_core_esm_bundler/* createElementVNode */._)("li", _hoisted_83, [
            _hoisted_84,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_85, [
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_86, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_87, [
                  (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                    onChange: _cache[38] || (_cache[38] = $event => ($options.checkFmeAll($event))),
                    "onUpdate:modelValue": _cache[39] || (_cache[39] = $event => (($data.allFmeCheck) = $event)),
                    type: "checkbox",
                    class: "sidebar-checkbox"
                  }, null, 544), [
                    [runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.allFmeCheck]
                  ]),
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)("   "),
                  _hoisted_88
                ]),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_89, [
                  (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                    onChange: _cache[40] || (_cache[40] = $event => ($options.checkFmeBusy($event))),
                    "onUpdate:modelValue": _cache[41] || (_cache[41] = $event => (($data.fmeBusyCheck) = $event)),
                    type: "checkbox",
                    class: "sidebar-checkbox"
                  }, null, 544), [
                    [runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.fmeBusyCheck]
                  ]),
                  _hoisted_90,
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)("   "),
                  _hoisted_91
                ]),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("label", _hoisted_92, [
                  (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                    onChange: _cache[42] || (_cache[42] = $event => ($options.checkFmeIdle($event))),
                    "onUpdate:modelValue": _cache[43] || (_cache[43] = $event => (($data.fmeIdleCheck) = $event)),
                    type: "checkbox",
                    class: "sidebar-checkbox"
                  }, null, 544), [
                    [runtime_dom_esm_bundler/* vModelCheckbox */.e8, $data.fmeIdleCheck]
                  ]),
                  _hoisted_93,
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)("   "),
                  _hoisted_94
                ])
              ])
            ])
          ])
        ])
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_95, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_96, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("nav", _hoisted_97, [
            _hoisted_98,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_102, [
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_103, [
                _hoisted_104,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_105, "   " + (0,shared_esm_bundler/* toDisplayString */.zw)(this.todayDate) + "   " + (0,shared_esm_bundler/* toDisplayString */.zw)(this.lastUpdated), 1)
              ]),
              _hoisted_106
            ])
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_107, [
            _hoisted_108,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_109, [
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_110, [
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_OutagesCard, { propsSiteCategory: $data.propsPassedCategory }, null, 8, ["propsSiteCategory"])
              ]),
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_111, [
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_DurationRangeCard, { propsSiteCategory: $data.propsPassedCategory }, null, 8, ["propsSiteCategory"])
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_112, [
              (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_RegionWiseCard, { propsSiteCategory: $data.propsPassedCategory }, null, 8, ["propsSiteCategory"])
            ])
          ])
        ])
      ])
    ], 512),
    (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_SiteStatistic),
    ($data.loading == true)
      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_113, _hoisted_115))
      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
    (this.loadingFilter == true)
      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_116, _hoisted_118))
      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("button", _hoisted_119, null, 512),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("button", _hoisted_120, null, 512),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("button", _hoisted_121, null, 512),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("button", _hoisted_122, null, 512),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("button", _hoisted_123, null, 512),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("button", _hoisted_124, null, 512),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("button", _hoisted_125, null, 512),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("button", _hoisted_126, null, 512),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("button", _hoisted_127, null, 512),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_128, [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_129, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_130, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_131, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("button", _hoisted_132, null, 512)
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_133, [
            _hoisted_134,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_135, [
              (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                "onUpdate:modelValue": _cache[44] || (_cache[44] = $event => (($data.clusterSearch) = $event)),
                onKeyup: _cache[45] || (_cache[45] = (0,runtime_dom_esm_bundler/* withKeys */.D2)($event => ($options.searchMcClusterModal()), ["enter"])),
                type: "text",
                class: "form-control",
                id: "fmeName",
                placeholder: "Search FME Name"
              }, null, 544), [
                [runtime_dom_esm_bundler/* vModelText */.nr, $data.clusterSearch]
              ]),
              (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                onClick: _cache[46] || (_cache[46] = $event => ($options.clearSearchCluster())),
                class: "input-group-text",
                id: "addon-wrapping"
              }, "✖")
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_136, [
              _hoisted_137,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_139, [
                (this.clusterSearchResult != null || this.clusterSearchResult != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_140, [
                      ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(this.clusterSearchResult, (data) => {
                        return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("a", {
                          type: "button",
                          ref_for: true,
                          ref: "sidebarCloseButton",
                          class: "link-a-select",
                          key: data.str_128_1,
                          id: data.task_id,
                          onClick: $event => ($options.mcSelectById(data.latitude, data.longitude, data.str_128_1))
                        }, [
                          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_142, [
                            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_143, [
                              (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_144, (0,shared_esm_bundler/* toDisplayString */.zw)(data.str_128_1), 1)
                            ])
                          ])
                        ], 8, _hoisted_141))
                      }), 128))
                    ]))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ])
          ])
        ])
      ])
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_145, [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_146, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_147, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_148, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("button", _hoisted_149, null, 512)
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_150, [
            _hoisted_151,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_152, [
              (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                "onUpdate:modelValue": _cache[47] || (_cache[47] = $event => (($data.siteNameSearch) = $event)),
                onKeyup: _cache[48] || (_cache[48] = (0,runtime_dom_esm_bundler/* withKeys */.D2)($event => ($options.searchSiteNameModal()), ["enter"])),
                type: "text",
                class: "form-control",
                id: "siteName",
                placeholder: "Search Site Name"
              }, null, 544), [
                [runtime_dom_esm_bundler/* vModelText */.nr, $data.siteNameSearch]
              ]),
              (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                onClick: _cache[49] || (_cache[49] = $event => ($options.clearSearchSite())),
                class: "input-group-text",
                id: "addon-wrapping"
              }, "✖")
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_153, [
              _hoisted_154,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_156, [
                (this.siteSearchResult != null || this.siteSearchResult != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_157, [
                      ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(this.siteSearchResult, (data) => {
                        return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("a", {
                          type: "button",
                          ref_for: true,
                          ref: "sidebarCloseButton",
                          class: "link-a-select",
                          key: data.site_id,
                          id: data.site_id,
                          onClick: $event => ($options.siteSelectByID(data.latitude, data.longitude, data.src, data.site_id, data.site_name))
                        }, [
                          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_159, [
                            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_160, [
                              (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_161, (0,shared_esm_bundler/* toDisplayString */.zw)(data.site_name), 1)
                            ]),
                            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_162, [
                              (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_163, (0,shared_esm_bundler/* toDisplayString */.zw)(data.site_id), 1)
                            ]),
                            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_164, [
                              (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_165, (0,shared_esm_bundler/* toDisplayString */.zw)(data.region_name), 1)
                            ])
                          ])
                        ], 8, _hoisted_158))
                      }), 128))
                    ]))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ])
          ])
        ])
      ])
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_166, [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_167, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_168, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_169, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("button", _hoisted_170, null, 512)
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_171, [
            _hoisted_172,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_173, [
              (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("input", {
                "onUpdate:modelValue": _cache[50] || (_cache[50] = $event => (($data.fmeNameSearch) = $event)),
                onKeyup: _cache[51] || (_cache[51] = (0,runtime_dom_esm_bundler/* withKeys */.D2)($event => ($options.searchFmeNameModal()), ["enter"])),
                type: "text",
                class: "form-control",
                id: "fmeName",
                placeholder: "Search FME Name"
              }, null, 544), [
                [runtime_dom_esm_bundler/* vModelText */.nr, $data.fmeNameSearch]
              ]),
              (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                onClick: _cache[52] || (_cache[52] = $event => ($options.clearSearchFme())),
                class: "input-group-text",
                id: "addon-wrapping"
              }, "✖")
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_174, [
              _hoisted_175,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_177, [
                (this.fmeNameSearchResult != null || this.fmeNameSearchResult != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_178, [
                      ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(this.fmeNameSearchResult, (data) => {
                        return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("a", {
                          type: "button",
                          ref_for: true,
                          ref: "sidebarCloseButton",
                          class: "link-a-select",
                          key: data.task_id,
                          id: data.task_id,
                          onClick: $event => ($options.fmeSelectByID(data.lat, data.lon, data.src, data.assign_to_fme_name))
                        }, [
                          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_180, [
                            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_181, [
                              (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_182, (0,shared_esm_bundler/* toDisplayString */.zw)(data.fullname), 1)
                            ]),
                            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_183, [
                              (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_184, (0,shared_esm_bundler/* toDisplayString */.zw)(data.assign_to_fme_name), 1)
                            ]),
                            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_185, [
                              (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_186, (0,shared_esm_bundler/* toDisplayString */.zw)(data.task_id), 1)
                            ])
                          ])
                        ], 8, _hoisted_179))
                      }), 128))
                    ]))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ])
          ])
        ])
      ])
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_187, [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_188, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_189, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_190, [
            _hoisted_191,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("button", _hoisted_192, null, 512)
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_193, [
            _hoisted_194,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_195, [
              _hoisted_196,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_197, [
                (this.siteItem != null || this.siteItem != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_198, (0,shared_esm_bundler/* toDisplayString */.zw)(this.siteItem.site_name), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_199, [
              _hoisted_200,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_201, [
                (this.siteItem != null || this.siteItem != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_202, (0,shared_esm_bundler/* toDisplayString */.zw)(this.siteItem.title), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            _hoisted_203,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_204, [
              (this.siteAlarmList != null || this.siteAlarmList != undefined)
                ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("ol", _hoisted_205, [
                    ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(this.siteAlarmList, (data) => {
                      return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
                        class: "d-flex flex-column",
                        key: data.alarmid
                      }, [
                        (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_206, (0,shared_esm_bundler/* toDisplayString */.zw)(data.lastoccurrence), 1),
                        (0,runtime_core_esm_bundler/* createElementVNode */._)("li", _hoisted_207, [
                          (0,runtime_core_esm_bundler/* createElementVNode */._)("span", _hoisted_208, (0,shared_esm_bundler/* toDisplayString */.zw)(data.alarmname), 1)
                        ])
                      ]))
                    }), 128))
                  ]))
                : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
            ]),
            _hoisted_209,
            (this.siteTicketList == null || this.siteTicketList == undefined)
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_210, _hoisted_212))
              : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_213, [
              (this.siteTicketList != null || this.siteTicketList != undefined)
                ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_214, [
                    ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(this.siteTicketList, (data) => {
                      return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
                        class: "col-6",
                        key: data.tt_orderid
                      }, [
                        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_215, [
                          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_216, [
                            (0,runtime_core_esm_bundler/* createElementVNode */._)("h2", _hoisted_217, [
                              (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                                class: "accordion-button",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": '#collapseOne' + data.tt_orderid,
                                "aria-expanded": "true",
                                "aria-controls": 'collapseOne' + data.tt_orderid
                              }, [
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.tt_orderid), 1)
                              ], 8, _hoisted_218)
                            ]),
                            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
                              id: 'collapseOne' + data.tt_orderid,
                              class: "accordion-collapse collapse",
                              "data-bs-parent": "#accordionExample"
                            }, [
                              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_220, [
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_221, [
                                  _hoisted_222,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_223, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_224, (0,shared_esm_bundler/* toDisplayString */.zw)(data.tt_orderid), 1),
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                                      class: "btn btn-primary btn-copy",
                                      onClick: _cache[53] || (_cache[53] = $event => ($options.copyTextSiteDetail()))
                                    }, "Copy ")
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_225, [
                                  _hoisted_226,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_227, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.wo_id), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_228, [
                                  _hoisted_229,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_230, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("a", {
                                      "data-bs-dismiss": "modal",
                                      "aria-label": "Close",
                                      onClick: $event => ($options.getFmePosition(data.username, data.wo_id, data.fullname)),
                                      class: "select-by-fme"
                                    }, (0,shared_esm_bundler/* toDisplayString */.zw)(data.fullname), 9, _hoisted_231)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_232, [
                                  _hoisted_233,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_234, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.phone_number), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_235, [
                                  _hoisted_236,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_237, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_238, (0,shared_esm_bundler/* toDisplayString */.zw)(data.tt_title), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_239, [
                                  _hoisted_240,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_241, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.site_class), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_242, [
                                  _hoisted_243,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_244, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.hour), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_245, [
                                  _hoisted_246,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_247, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.sla_remain == undefined ? "NA" : data.sla_remain), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_248, [
                                  _hoisted_249,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_250, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.businessstatus), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_251, [
                                  _hoisted_252,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_253, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.rootcause == undefined ? "NA" : data.rootcause), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_254, [
                                  _hoisted_255,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_256, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.tt_update), 1)
                                  ])
                                ])
                              ])
                            ], 8, _hoisted_219)
                          ])
                        ])
                      ]))
                    }), 128))
                  ]))
                : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
            ])
          ])
        ])
      ])
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_257, [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_258, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_259, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_260, [
            _hoisted_261,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("button", _hoisted_262, null, 512)
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_263, [
            _hoisted_264,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_265, [
              _hoisted_266,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_267, [
                (this.siteItemSearch.sitename != '')
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_268, (0,shared_esm_bundler/* toDisplayString */.zw)(this.siteItemSearch.sitename), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                (this.siteItemSearch.sitename == '')
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_269, "Loading..."))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_270, [
              _hoisted_271,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_272, [
                (this.siteItemSearch.siteid != '')
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_273, (0,shared_esm_bundler/* toDisplayString */.zw)(this.siteItemSearch.siteid), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                (this.siteItemSearch.siteid == '')
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_274, "Loading..."))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            _hoisted_275,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_276, [
              (this.siteAlarmListSearch != null || this.siteAlarmListSearch != undefined)
                ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("ol", _hoisted_277, [
                    ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(this.siteAlarmListSearch, (data) => {
                      return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
                        class: "d-flex flex-column",
                        key: data.alarmid
                      }, [
                        (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_278, (0,shared_esm_bundler/* toDisplayString */.zw)(data.lastoccurrence), 1),
                        (0,runtime_core_esm_bundler/* createElementVNode */._)("li", _hoisted_279, [
                          (0,runtime_core_esm_bundler/* createElementVNode */._)("span", _hoisted_280, (0,shared_esm_bundler/* toDisplayString */.zw)(data.alarmname), 1)
                        ])
                      ]))
                    }), 128))
                  ]))
                : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
            ]),
            _hoisted_281,
            (this.siteTicketListSearch == null || this.siteTicketListSearch == undefined)
              ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_282, _hoisted_284))
              : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_285, [
              (this.siteTicketListSearch != null || this.siteTicketListSearch != undefined)
                ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_286, [
                    ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(this.siteTicketListSearch, (data) => {
                      return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
                        class: "col-6",
                        key: data.tt_orderid
                      }, [
                        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_287, [
                          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_288, [
                            (0,runtime_core_esm_bundler/* createElementVNode */._)("h2", _hoisted_289, [
                              (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                                class: "accordion-button",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": '#collapseOne' + data.tt_orderid,
                                "aria-expanded": "true",
                                "aria-controls": 'collapseOne' + data.tt_orderid
                              }, [
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.tt_orderid), 1)
                              ], 8, _hoisted_290)
                            ]),
                            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
                              id: 'collapseOne' + data.tt_orderid,
                              class: "accordion-collapse collapse",
                              "data-bs-parent": "#accordionExample"
                            }, [
                              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_292, [
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_293, [
                                  _hoisted_294,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_295, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_296, (0,shared_esm_bundler/* toDisplayString */.zw)(data.tt_orderid), 1),
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                                      class: "btn btn-primary btn-copy",
                                      onClick: _cache[54] || (_cache[54] = $event => ($options.copyTextSearchSiteDetail()))
                                    }, "Copy ")
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_297, [
                                  _hoisted_298,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_299, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.wo_id), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_300, [
                                  _hoisted_301,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_302, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("a", {
                                      "data-bs-dismiss": "modal",
                                      "aria-label": "Close",
                                      onClick: $event => ($options.getFmePosition(data.username, data.wo_id, data.fullname)),
                                      class: "select-by-fme"
                                    }, (0,shared_esm_bundler/* toDisplayString */.zw)(data.fullname), 9, _hoisted_303)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_304, [
                                  _hoisted_305,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_306, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.phone_number), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_307, [
                                  _hoisted_308,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_309, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.tt_title), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_310, [
                                  _hoisted_311,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_312, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.site_class), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_313, [
                                  _hoisted_314,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_315, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.hour), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_316, [
                                  _hoisted_317,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_318, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.sla_remain == undefined ? "NA" : data.sla_remain), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_319, [
                                  _hoisted_320,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_321, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.businessstatus), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_322, [
                                  _hoisted_323,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_324, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.rootcause == undefined ? "NA" : data.rootcause), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_325, [
                                  _hoisted_326,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_327, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", null, (0,shared_esm_bundler/* toDisplayString */.zw)(data.tt_update), 1)
                                  ])
                                ])
                              ])
                            ], 8, _hoisted_291)
                          ])
                        ])
                      ]))
                    }), 128))
                  ]))
                : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
            ])
          ])
        ])
      ])
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_328, [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_329, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_330, [
          _hoisted_331,
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_332, [
            _hoisted_333,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_334, [
              _hoisted_335,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_336, [
                (this.fmeDetails != null || this.fmeDetails != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_337, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeDetails[0].fullname), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_338, [
              _hoisted_339,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_340, [
                (this.fmeDetails != null || this.fmeDetails != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_341, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeDetails[0].status), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_342, [
              _hoisted_343,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_344, [
                (this.fmeDetails != null || this.fmeDetails != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_345, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeDetails[0].username), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_346, [
              _hoisted_347,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_348, [
                (this.fmeDetails != null || this.fmeDetails != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_349, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeDetails[0].default_fm_office), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_350, [
              _hoisted_351,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_352, [
                (this.fmeDetails != null || this.fmeDetails != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_353, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeDetails[0].contractor_name), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_354, [
              _hoisted_355,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_356, [
                (this.fmeDetails != null || this.fmeDetails != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_357, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeDetails[0].skills), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_358, [
              _hoisted_359,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_360, [
                (this.fmeDetails != null || this.fmeDetails != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_361, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeDetails[0].task_types), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_362, [
              _hoisted_363,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_364, [
                (this.fmeDetails != null || this.fmeDetails != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_365, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeDetails[0].phone_number), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_366, [
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_367, [
                (this.woListFme == null)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_368, _hoisted_370))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                (this.woListFme != null || this.woListFme != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, { key: 1 }, (0,runtime_core_esm_bundler/* renderList */.Ko)(this.woListFme, (data) => {
                      return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
                        class: "col-4",
                        key: data.site_id
                      }, [
                        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_371, [
                          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_372, [
                            (0,runtime_core_esm_bundler/* createElementVNode */._)("h2", _hoisted_373, [
                              (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                                class: "accordion-button px-2",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": '#fmeCollapse' + data.task_id,
                                "aria-expanded": "true",
                                "aria-controls": 'fmeCollapse' + data.task_id
                              }, [
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_375, [
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_376, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_377, [
                                      (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_378, (0,shared_esm_bundler/* toDisplayString */.zw)(data.task_type), 1),
                                      (data.cm_fault_level == 'P1')
                                        ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_379, "P1 "))
                                        : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                                      (data.cm_fault_level == 'P2')
                                        ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_380, "P2 "))
                                        : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                                      (data.cm_fault_level == 'P3')
                                        ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_381, "P3 "))
                                        : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                                      (data.cm_fault_level == 'P4')
                                        ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_382, "P4 "))
                                        : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
                                    ]),
                                    (data.task_type == 'CM')
                                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_383, (0,shared_esm_bundler/* toDisplayString */.zw)(data.ticket_id), 1))
                                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                                    (data.task_type != 'CM')
                                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_384, (0,shared_esm_bundler/* toDisplayString */.zw)(data.task_id), 1))
                                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
                                  ])
                                ])
                              ], 8, _hoisted_374)
                            ]),
                            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
                              id: 'fmeCollapse' + data.task_id,
                              class: "accordion-collapse collapse",
                              "data-bs-parent": '#fmeCollapse' + data.task_id
                            }, [
                              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_386, [
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_387, [
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_388, [
                                    (data.task_type == 'CM')
                                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
                                          key: 0,
                                          class: "btn btn-primary btn-copy",
                                          onClick: _cache[55] || (_cache[55] = $event => ($options.copyFmeTicketId()))
                                        }, "Copy Ticket ID "))
                                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                                    (data.task_type != 'CM')
                                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
                                          key: 1,
                                          class: "btn btn-primary btn-copy",
                                          onClick: _cache[56] || (_cache[56] = $event => ($options.copyFmeTaskId()))
                                        }, "Copy Task ID "))
                                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_389, [
                                  _hoisted_390,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_391, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("a", {
                                      "data-bs-dismiss": "modal",
                                      "aria-label": "Close",
                                      onClick: $event => ($options.siteSelectInAlarm(data.site_id)),
                                      class: "select-by-fme"
                                    }, (0,shared_esm_bundler/* toDisplayString */.zw)(data.site_id), 9, _hoisted_392)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_393, [
                                  _hoisted_394,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_395, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_396, (0,shared_esm_bundler/* toDisplayString */.zw)(data.title), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_397, [
                                  _hoisted_398,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_399, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_400, (0,shared_esm_bundler/* toDisplayString */.zw)(data.task_type), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_401, [
                                  _hoisted_402,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_403, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_404, (0,shared_esm_bundler/* toDisplayString */.zw)(data.task_status), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_405, [
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                                    onClick: $event => ($options.getFmeTicketDetail(data.task_id, this.fmeDetails[0].phone_number)),
                                    type: "button",
                                    ref_for: true,
                                    ref: "etaDetailButton",
                                    id: "btnid",
                                    class: "btn btn-primary btn-apply-filter btn-16 mt-3",
                                    "data-bs-toggle": "modal",
                                    "data-bs-target": "#etaDetails",
                                    style: {"width":"100%","font-weight":"700"}
                                  }, " ETA ", 8, _hoisted_406)
                                ])
                              ])
                            ], 8, _hoisted_385)
                          ])
                        ])
                      ]))
                    }), 128))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ])
          ])
        ])
      ])
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_407, [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_408, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_409, [
          _hoisted_410,
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_411, [
            _hoisted_412,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_413, [
              _hoisted_414,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_415, [
                (this.fmeDetailsSearch != null || this.fmeDetailsSearch != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_416, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeDetailsSearch[0].fullname), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_417, [
              _hoisted_418,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_419, [
                (this.fmeDetailsSearch != null || this.fmeDetailsSearch != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_420, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeDetailsSearch[0].status), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_421, [
              _hoisted_422,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_423, [
                (this.fmeDetailsSearch != null || this.fmeDetailsSearch != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_424, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeDetailsSearch[0].username), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_425, [
              _hoisted_426,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_427, [
                (this.fmeDetailsSearch != null || this.fmeDetailsSearch != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_428, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeDetailsSearch[0].default_fm_office), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_429, [
              _hoisted_430,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_431, [
                (this.fmeDetailsSearch != null || this.fmeDetailsSearch != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_432, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeDetailsSearch[0].contractor_name), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_433, [
              _hoisted_434,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_435, [
                (this.fmeDetailsSearch != null || this.fmeDetailsSearch != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_436, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeDetailsSearch[0].skills), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_437, [
              _hoisted_438,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_439, [
                (this.fmeDetailsSearch != null || this.fmeDetailsSearch != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_440, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeDetailsSearch[0].task_types), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_441, [
              _hoisted_442,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_443, [
                (this.fmeDetailsSearch != null || this.fmeDetailsSearch != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_444, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeDetailsSearch[0].phone_number), 1))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_445, [
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_446, [
                (this.woListFmeSearch == null)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_447, _hoisted_449))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                (this.woListFmeSearch != null || this.woListFmeSearch != undefined)
                  ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, { key: 1 }, (0,runtime_core_esm_bundler/* renderList */.Ko)(this.woListFmeSearch, (data) => {
                      return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
                        class: "col-4",
                        key: data.site_id
                      }, [
                        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_450, [
                          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_451, [
                            (0,runtime_core_esm_bundler/* createElementVNode */._)("h2", _hoisted_452, [
                              (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                                class: "accordion-button px-2",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": '#fmeCollapse' + data.task_id,
                                "aria-expanded": "true",
                                "aria-controls": 'fmeCollapse' + data.task_id
                              }, [
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_454, [
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_455, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_456, [
                                      (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_457, (0,shared_esm_bundler/* toDisplayString */.zw)(data.task_type), 1),
                                      (data.cm_fault_level == 'P1')
                                        ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_458, "P1 "))
                                        : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                                      (data.cm_fault_level == 'P2')
                                        ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_459, "P2 "))
                                        : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                                      (data.cm_fault_level == 'P3')
                                        ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_460, "P3 "))
                                        : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                                      (data.cm_fault_level == 'P4')
                                        ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_461, "P4 "))
                                        : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
                                    ]),
                                    (data.task_type == 'CM')
                                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_462, (0,shared_esm_bundler/* toDisplayString */.zw)(data.ticket_id), 1))
                                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                                    (data.task_type != 'CM')
                                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_463, (0,shared_esm_bundler/* toDisplayString */.zw)(data.task_id), 1))
                                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
                                  ])
                                ])
                              ], 8, _hoisted_453)
                            ]),
                            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
                              id: 'fmeCollapse' + data.task_id,
                              class: "accordion-collapse collapse",
                              "data-bs-parent": '#fmeCollapse' + data.task_id
                            }, [
                              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_465, [
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_466, [
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_467, [
                                    (data.task_type == 'CM')
                                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
                                          key: 0,
                                          class: "btn btn-primary btn-copy",
                                          onClick: _cache[57] || (_cache[57] = $event => ($options.copyFmeSearchTicketId()))
                                        }, "Copy Ticket ID "))
                                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                                    (data.task_type != 'CM')
                                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
                                          key: 1,
                                          class: "btn btn-primary btn-copy",
                                          onClick: _cache[58] || (_cache[58] = $event => ($options.copyFmeSearchTaskId()))
                                        }, "Copy Task ID "))
                                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_468, [
                                  _hoisted_469,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_470, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("a", {
                                      "data-bs-dismiss": "modal",
                                      "aria-label": "Close",
                                      onClick: $event => ($options.siteSelectInAlarm(data.site_id)),
                                      class: "select-by-fme"
                                    }, (0,shared_esm_bundler/* toDisplayString */.zw)(data.site_id), 9, _hoisted_471)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_472, [
                                  _hoisted_473,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_474, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_475, (0,shared_esm_bundler/* toDisplayString */.zw)(data.title), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_476, [
                                  _hoisted_477,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_478, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_479, (0,shared_esm_bundler/* toDisplayString */.zw)(data.task_type), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_480, [
                                  _hoisted_481,
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_482, [
                                    (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_483, (0,shared_esm_bundler/* toDisplayString */.zw)(data.task_status), 1)
                                  ])
                                ]),
                                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_484, [
                                  (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                                    onClick: $event => ($options.getFmeSearchTicketDetail(data.task_id, this.fmeDetailsSearch[0].phone_number)),
                                    type: "button",
                                    ref_for: true,
                                    ref: "etaDetailButton",
                                    id: "btnid",
                                    class: "btn btn-primary btn-apply-filter btn-16 mt-3",
                                    "data-bs-toggle": "modal",
                                    "data-bs-target": "#etaDetails",
                                    style: {"width":"100%","font-weight":"700"}
                                  }, " ETA ", 8, _hoisted_485)
                                ])
                              ])
                            ], 8, _hoisted_464)
                          ])
                        ])
                      ]))
                    }), 128))
                  : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
              ])
            ])
          ])
        ])
      ])
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_486, [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_487, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_488, [
          _hoisted_489,
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_490, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_491, [
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_492, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_493, [
                  _hoisted_494,
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_495, [
                    _hoisted_496,
                    (this.getSingleTicketDetail != null || this.getSingleTicketDetail != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_497, (0,shared_esm_bundler/* toDisplayString */.zw)(this.getSingleTicketDetail.task_id), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    _hoisted_498,
                    (this.getSingleTicketDetail != null || this.getSingleTicketDetail != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_499, (0,shared_esm_bundler/* toDisplayString */.zw)(this.getSingleTicketDetail.site_id), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    (this.getSingleTicketDetail != null || this.getSingleTicketDetail != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_500, (0,shared_esm_bundler/* toDisplayString */.zw)(this.getSingleTicketDetail.site_latitude), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    (this.getSingleTicketDetail != null || this.getSingleTicketDetail != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_501, (0,shared_esm_bundler/* toDisplayString */.zw)(this.getSingleTicketDetail.site_longitude), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    _hoisted_502,
                    (this.getSingleTicketDetail != null || this.getSingleTicketDetail != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_503, (0,shared_esm_bundler/* toDisplayString */.zw)(this.getSingleTicketDetail.assign_to_fme), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    (this.getSingleTicketDetail != null || this.getSingleTicketDetail != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_504, (0,shared_esm_bundler/* toDisplayString */.zw)(this.getSingleTicketDetail.assign_to_fme_name), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    (this.fmePhoneNumber != null || this.fmePhoneNumber != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_505, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmePhoneNumber), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    (this.getSingleTicketDetail != null || this.getSingleTicketDetail != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_506, (0,shared_esm_bundler/* toDisplayString */.zw)(this.getSingleTicketDetail.fme_latitude), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    (this.getSingleTicketDetail != null || this.getSingleTicketDetail != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_507, (0,shared_esm_bundler/* toDisplayString */.zw)(this.getSingleTicketDetail.fme_longitude), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    _hoisted_508,
                    (this.travelDistance != null || this.travelDistance != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_509, (0,shared_esm_bundler/* toDisplayString */.zw)(this.travelDistance), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    (this.timeInTraffic != null || this.timeInTraffic != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_510, (0,shared_esm_bundler/* toDisplayString */.zw)(this.timeInTraffic), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
                  ])
                ])
              ]),
              _hoisted_511
            ])
          ])
        ])
      ])
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_512, [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_513, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_514, [
          _hoisted_515,
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_516, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_517, [
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_518, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_519, [
                  _hoisted_520,
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_521, [
                    _hoisted_522,
                    (this.etaTaskId != null || this.etaTaskId != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_523, (0,shared_esm_bundler/* toDisplayString */.zw)(this.etaTaskId), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    _hoisted_524,
                    (this.fmePositionData != null || this.fmePositionData != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_525, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmePositionData.site_id), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    (this.fmePositionData != null || this.fmePositionData != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_526, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmePositionData.site_latitude), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    (this.fmePositionData != null || this.fmePositionData != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_527, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmePositionData.site_longitude), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    _hoisted_528,
                    (this.etaFullname != null || this.etaFullname != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_529, (0,shared_esm_bundler/* toDisplayString */.zw)(this.etaFullname), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    (this.etaUserId != null || this.etaUserId != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_530, (0,shared_esm_bundler/* toDisplayString */.zw)(this.etaUserId), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    (this.fmeSearchPhoneNumber != null || this.fmeSearchPhoneNumber != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_531, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmeSearchPhoneNumber), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    (this.fmePositionData != null || this.fmePositionData != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_532, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmePositionData.fme_latitude), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    (this.fmePositionData != null || this.fmePositionData != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_533, (0,shared_esm_bundler/* toDisplayString */.zw)(this.fmePositionData.fme_longitude), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    _hoisted_534,
                    (this.travelDistanceEta != null || this.travelDistanceEta != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_535, (0,shared_esm_bundler/* toDisplayString */.zw)(this.travelDistanceEta), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true),
                    (this.timeInTrafficEta != null || this.timeInTrafficEta != undefined)
                      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("p", _hoisted_536, (0,shared_esm_bundler/* toDisplayString */.zw)(this.timeInTrafficEta), 1))
                      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
                  ])
                ])
              ]),
              _hoisted_537
            ])
          ])
        ])
      ])
    ])
  ], 64))
}
;// CONCATENATED MODULE: ./src/views/page/index.vue?vue&type=template&id=1a6fe402

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js + 1 modules
var reactivity_esm_bundler = __webpack_require__(62931);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ButtonSidebarClose.vue?vue&type=template&id=014de6c0


const ButtonSidebarClosevue_type_template_id_014de6c0_hoisted_1 = { class: "row sidebar-brand row-brand mt-4 mb-4 justify-content-between" }
const ButtonSidebarClosevue_type_template_id_014de6c0_hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", { class: "sidebar-title" }, " Menu ", -1)
const ButtonSidebarClosevue_type_template_id_014de6c0_hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", {
  class: "btn-close",
  type: "button",
  id: "close-btn"
}, null, -1)
const ButtonSidebarClosevue_type_template_id_014de6c0_hoisted_4 = [
  ButtonSidebarClosevue_type_template_id_014de6c0_hoisted_2,
  ButtonSidebarClosevue_type_template_id_014de6c0_hoisted_3
]

function ButtonSidebarClosevue_type_template_id_014de6c0_render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", ButtonSidebarClosevue_type_template_id_014de6c0_hoisted_1, ButtonSidebarClosevue_type_template_id_014de6c0_hoisted_4))
}
;// CONCATENATED MODULE: ./src/components/ButtonSidebarClose.vue?vue&type=template&id=014de6c0

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ButtonSidebarClose.vue?vue&type=script&lang=js

/* harmony default export */ const ButtonSidebarClosevue_type_script_lang_js = ({
    name: 'ButtonSidebarClose'
});

;// CONCATENATED MODULE: ./src/components/ButtonSidebarClose.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(48118);
;// CONCATENATED MODULE: ./src/components/ButtonSidebarClose.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ButtonSidebarClosevue_type_script_lang_js, [['render',ButtonSidebarClosevue_type_template_id_014de6c0_render]])

/* harmony default export */ const ButtonSidebarClose = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ButtonSidebarIohHome.vue?vue&type=template&id=7e48fd4c





const ButtonSidebarIohHomevue_type_template_id_7e48fd4c_hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", { class: "col-12 px-4" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", {
    href: "https://1057-sg.teleows.com/adc-static/static/procodeComp/1057/homepage/homepage/homepage/latest/dist/index.html#/",
    target: "_blank",
    class: "btn btn-sidebar ioh-dash d-flex",
    style: {"gap":"10px"}
  }, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
      src: home_namespaceObject,
      alt: ""
    }),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" IOH Dashboard ")
  ])
], -1)
const ButtonSidebarIohHomevue_type_template_id_7e48fd4c_hoisted_2 = { class: "col-12 px-4 mt-2" }
const ButtonSidebarIohHomevue_type_template_id_7e48fd4c_hoisted_3 = {
  type: "button",
  ref: "sidebarCloseButton",
  id: "close-sidebar-btn",
  "data-bs-toggle": "modal",
  "data-bs-target": "#siteStatisticModal",
  class: "btn btn-sidebar ioh-dash d-flex",
  style: {"gap":"10px"}
}
const ButtonSidebarIohHomevue_type_template_id_7e48fd4c_hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: site_namespaceObject,
  alt: ""
}, null, -1)

function ButtonSidebarIohHomevue_type_template_id_7e48fd4c_render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [
    ButtonSidebarIohHomevue_type_template_id_7e48fd4c_hoisted_1,
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", ButtonSidebarIohHomevue_type_template_id_7e48fd4c_hoisted_2, [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("button", ButtonSidebarIohHomevue_type_template_id_7e48fd4c_hoisted_3, [
        ButtonSidebarIohHomevue_type_template_id_7e48fd4c_hoisted_4,
        (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Site Statistic ")
      ], 512)
    ])
  ], 64))
}
;// CONCATENATED MODULE: ./src/components/ButtonSidebarIohHome.vue?vue&type=template&id=7e48fd4c

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ButtonSidebarIohHome.vue?vue&type=script&lang=js

/* harmony default export */ const ButtonSidebarIohHomevue_type_script_lang_js = ({
    name: 'ButtonSidebarIohHome',
});

;// CONCATENATED MODULE: ./src/components/ButtonSidebarIohHome.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/ButtonSidebarIohHome.vue




;
const ButtonSidebarIohHome_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ButtonSidebarIohHomevue_type_script_lang_js, [['render',ButtonSidebarIohHomevue_type_template_id_7e48fd4c_render]])

/* harmony default export */ const ButtonSidebarIohHome = (ButtonSidebarIohHome_exports_);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/DurationRangeCard.vue?vue&type=template&id=2f265bff


const DurationRangeCardvue_type_template_id_2f265bff_hoisted_1 = {
  class: "accordion accordion-bg-statistic",
  id: "accordionExample"
}
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_2 = { class: "accordion-item" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h4", { class: "accordion-header" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    class: "accordion-button px-3 py-4",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#durationRange",
    "aria-expanded": "true",
    "aria-controls": "durationRange",
    style: {"color":"#005D52"}
  }, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "fa-solid fa-clock fa-mr-3" }),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Duration Range ")
  ])
], -1)
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_4 = {
  id: "durationRange",
  class: "accordion-collapse collapse show",
  "data-bs-parent": "#accordionExample"
}
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_5 = { class: "accordion-body px-3" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_6 = { class: "card-body card-body-flex flex-row" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_7 = { class: "card card-flex py-3 px-2" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "card-title-text mb-3 text-center" }, "Below 1 Hour", -1)
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_9 = { class: "row" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_10 = { class: "col-lg-12 col-md-12" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_11 = {
  class: "card-counting text-center",
  style: {"color":"#0076CE"}
}
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_12 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "subtitle text-center" }, "Sites Down", -1)
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_13 = { class: "card card-flex py-3 px-2" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_14 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "card-title-text mb-3 text-center" }, "1 - 4 Hour", -1)
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_15 = { class: "row" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_16 = { class: "col-lg-12 col-md-12" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_17 = {
  class: "card-counting text-center",
  style: {"color":"#62B230"}
}
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_18 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "subtitle text-center" }, "Sites Down", -1)
const _hoisted_19 = { class: "card card-flex py-3 px-2" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_20 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "card-title-text mb-3 text-center" }, "4 - 8 Hour", -1)
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_21 = { class: "row" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_22 = { class: "col-lg-12 col-md-12" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_23 = {
  class: "card-counting text-center",
  style: {"color":"#FFA500"}
}
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_24 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "subtitle text-center" }, "Sites Down", -1)
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_25 = { class: "card card-flex py-3 px-2" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_26 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "card-title-text mb-3 text-center" }, "8 - 24 Hour", -1)
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_27 = { class: "row" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_28 = { class: "col-lg-12 col-md-12" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_29 = {
  class: "card-counting text-center",
  style: {"color":"#ED1C24"}
}
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_30 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "subtitle text-center" }, "Sites Down", -1)
const _hoisted_31 = { class: "card card-flex py-3 px-2" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_32 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "card-title-text mb-3 text-center" }, "Above 24 Hour", -1)
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_33 = { class: "row" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_34 = { class: "col-lg-12 col-md-12" }
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_35 = {
  class: "card-counting text-center",
  style: {"color":"#313131"}
}
const DurationRangeCardvue_type_template_id_2f265bff_hoisted_36 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "subtitle text-center" }, "Sites Down", -1)

function DurationRangeCardvue_type_template_id_2f265bff_render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_1, [
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_2, [
      DurationRangeCardvue_type_template_id_2f265bff_hoisted_3,
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_4, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_5, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_6, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_7, [
              DurationRangeCardvue_type_template_id_2f265bff_hoisted_8,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_9, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_10, [
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("h3", DurationRangeCardvue_type_template_id_2f265bff_hoisted_11, (0,shared_esm_bundler/* toDisplayString */.zw)(this.hour1Sd), 1),
                  DurationRangeCardvue_type_template_id_2f265bff_hoisted_12
                ])
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_13, [
              DurationRangeCardvue_type_template_id_2f265bff_hoisted_14,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_15, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_16, [
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("h3", DurationRangeCardvue_type_template_id_2f265bff_hoisted_17, (0,shared_esm_bundler/* toDisplayString */.zw)(this.hour4Sd), 1),
                  DurationRangeCardvue_type_template_id_2f265bff_hoisted_18
                ])
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_19, [
              DurationRangeCardvue_type_template_id_2f265bff_hoisted_20,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_21, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_22, [
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("h3", DurationRangeCardvue_type_template_id_2f265bff_hoisted_23, (0,shared_esm_bundler/* toDisplayString */.zw)(this.hour48Sd), 1),
                  DurationRangeCardvue_type_template_id_2f265bff_hoisted_24
                ])
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_25, [
              DurationRangeCardvue_type_template_id_2f265bff_hoisted_26,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_27, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_28, [
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("h3", DurationRangeCardvue_type_template_id_2f265bff_hoisted_29, (0,shared_esm_bundler/* toDisplayString */.zw)(this.hour824Sd), 1),
                  DurationRangeCardvue_type_template_id_2f265bff_hoisted_30
                ])
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_31, [
              DurationRangeCardvue_type_template_id_2f265bff_hoisted_32,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_33, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", DurationRangeCardvue_type_template_id_2f265bff_hoisted_34, [
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("h3", DurationRangeCardvue_type_template_id_2f265bff_hoisted_35, (0,shared_esm_bundler/* toDisplayString */.zw)(this.hourMore24Sd), 1),
                  DurationRangeCardvue_type_template_id_2f265bff_hoisted_36
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ]))
}
;// CONCATENATED MODULE: ./src/views/sections/DurationRangeCard.vue?vue&type=template&id=2f265bff

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/DurationRangeCard.vue?vue&type=script&lang=js

// IMPORT MODULE



/* harmony default export */ const DurationRangeCardvue_type_script_lang_js = ({
    name: 'DurationRangeCard',
    props: {
        propsSiteCategory: [],
    },
    watch: {
        propsSiteCategory: function (newVal, oldVal) {
            this.dataSiteCategory = newVal;
            this.getDurationRange();
        }
    },
    data() {
        return {
            dataSiteCategory: [],

            hour1Sd: '...',
            hour4Sd: '...',
            hour48Sd: '...',
            hour824Sd: '...',
            hourMore24Sd: '...',

            lastUpdatedDurationData: null,
            todayDateDurationData: null,
            dataParent: ['BIG HUB SITE', 'MEDIUM HUB SITE', 'SMALL HUB SITE'],
            fetching: null,

            // REFETCH
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,

        }
    },
    async mounted() {
        await spl.U.initCsrfToken();
        await this.getDurationRange();

        this.updateLastUpdatedTime();
        this.checkRefetchData();
    },
    methods: {
        async breakDownSiteDown() {
            spl.MessageProcessor.process({
                serviceId: 'netdrone_maps_lebaran_site_down_duration_range_breakdown',
                data: {
                    hub_type: this.dataParent,
                    category: this.dataSiteCategory,
                },
                showErrorMessage: false,
                success: (json) => {
                    console.log(json, 'json duration range card');
                    var res = json.results;
                    this.hour1Sd = res.less_than_1_hour;
                    this.hour4Sd = res.one_to_4_hour;
                    this.hour48Sd = res.four_to_8_hour;
                    this.hour824Sd = res.eight_to_24_hour;
                    this.hourMore24Sd = res.more_than_24_hours;
                },
                error: (error) => {
                    console.log(error, 'error breakdown sitedown duration range');
                }
            });
        },
        async getDurationRange() {
            // NULLABLE
            this.hour1Sd = '...';
            this.hour4Sd = '...';
            this.hour48Sd = '...';
            this.hour824Sd = '...';
            this.hourMore24Sd = '...';

            await this.breakDownSiteDown();
        },

        // REFETCH DATA QUARTER HOUR
        updateLastUpdatedTime() {
            console.log("terpanggil");
            const now = new Date();
            const today = new Date();

            today.setHours(0, 0, 0, 0);

            const hours = now.getHours().toString().padStart(2, "0");
            let minutes = now.getMinutes();

            if (minutes >= 0 && minutes < 15) {
                minutes = 0;
            } else if (minutes >= 15 && minutes < 30) {
                minutes = 15;
            } else if (minutes >= 30 && minutes < 45) {
                minutes = 30;
            } else {
                minutes = 45;
            }

            this.todayDate = today.toLocaleDateString();
            console.log(hours, "hours", minutes, "minutes");
            this.lastUpdated = `${hours}:${minutes.toString().padStart(2, "0")}`;
            console.log(this.todayDate, "today date");
            console.log(this.lastUpdated, "today date");
        },
        async checkMinutes() {
            const now = new Date();
            const minutes = now.getMinutes();
            console.log(minutes, "minutes only");
            this.refetch = false;
            if ([2, 17, 32, 47].includes(minutes)) {
                this.updateLastUpdatedTime();
                this.refetch = true;
                await this.getDurationRange();
            }
        },
        checkRefetchData() {
            this.fetching = setInterval(() => {
                console.log("check fetching refetch");
                this.checkMinutes();
                this.refetch = false;
                console.log(this.refetch, "will be false");
            }, 30 * 1000);
            console.log(this.fetching, "check refetch data");
        },
    },


});

;// CONCATENATED MODULE: ./src/views/sections/DurationRangeCard.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/views/sections/DurationRangeCard.vue




;
const DurationRangeCard_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(DurationRangeCardvue_type_script_lang_js, [['render',DurationRangeCardvue_type_template_id_2f265bff_render]])

/* harmony default export */ const DurationRangeCard = (DurationRangeCard_exports_);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/OutagesCard.vue?vue&type=template&id=1aa9ddf5


const OutagesCardvue_type_template_id_1aa9ddf5_hoisted_1 = {
  class: "accordion accordion-bg-statistic",
  id: "accordionExample"
}
const OutagesCardvue_type_template_id_1aa9ddf5_hoisted_2 = { class: "accordion-item" }
const OutagesCardvue_type_template_id_1aa9ddf5_hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h4", { class: "accordion-header" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    class: "accordion-button px-3 py-4",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#outagesCard",
    "aria-expanded": "true",
    "aria-controls": "outagesCard",
    style: {"color":"#005D52"}
  }, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "fa fa-location-arrow fa-mr-3" }),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Total Outages Down ")
  ])
], -1)
const OutagesCardvue_type_template_id_1aa9ddf5_hoisted_4 = {
  id: "outagesCard",
  class: "accordion-collapse collapse show",
  "data-bs-parent": "#accordionExample"
}
const OutagesCardvue_type_template_id_1aa9ddf5_hoisted_5 = { class: "accordion-body px-3" }
const OutagesCardvue_type_template_id_1aa9ddf5_hoisted_6 = { class: "row" }
const OutagesCardvue_type_template_id_1aa9ddf5_hoisted_7 = { class: "col-12" }
const OutagesCardvue_type_template_id_1aa9ddf5_hoisted_8 = { class: "card card-outages px-3 py-3" }
const OutagesCardvue_type_template_id_1aa9ddf5_hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "card-title-text mb-3 text-center" }, "Site Down", -1)
const OutagesCardvue_type_template_id_1aa9ddf5_hoisted_10 = { class: "row" }
const OutagesCardvue_type_template_id_1aa9ddf5_hoisted_11 = { class: "col-12" }
const OutagesCardvue_type_template_id_1aa9ddf5_hoisted_12 = { class: "card-counting text-center" }
const OutagesCardvue_type_template_id_1aa9ddf5_hoisted_13 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", { class: "subtitle text-center" }, "Tota Sites Down", -1)

function OutagesCardvue_type_template_id_1aa9ddf5_render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", OutagesCardvue_type_template_id_1aa9ddf5_hoisted_1, [
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", OutagesCardvue_type_template_id_1aa9ddf5_hoisted_2, [
      OutagesCardvue_type_template_id_1aa9ddf5_hoisted_3,
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", OutagesCardvue_type_template_id_1aa9ddf5_hoisted_4, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", OutagesCardvue_type_template_id_1aa9ddf5_hoisted_5, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", OutagesCardvue_type_template_id_1aa9ddf5_hoisted_6, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", OutagesCardvue_type_template_id_1aa9ddf5_hoisted_7, [
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", OutagesCardvue_type_template_id_1aa9ddf5_hoisted_8, [
                OutagesCardvue_type_template_id_1aa9ddf5_hoisted_9,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", OutagesCardvue_type_template_id_1aa9ddf5_hoisted_10, [
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("div", OutagesCardvue_type_template_id_1aa9ddf5_hoisted_11, [
                    (0,runtime_core_esm_bundler/* createElementVNode */._)("h3", OutagesCardvue_type_template_id_1aa9ddf5_hoisted_12, (0,shared_esm_bundler/* toDisplayString */.zw)(this.siteDown), 1),
                    OutagesCardvue_type_template_id_1aa9ddf5_hoisted_13
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ]))
}
;// CONCATENATED MODULE: ./src/views/sections/OutagesCard.vue?vue&type=template&id=1aa9ddf5

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/OutagesCard.vue?vue&type=script&lang=js




/* harmony default export */ const OutagesCardvue_type_script_lang_js = ({
    name: 'OutagesCard',
    props: {
        propsSiteCategory: [],
    },
    watch: {
        propsSiteCategory: function (newVal, oldVal) {
            this.dataSiteCategory = newVal;
            this.outagesData = null;
            this.siteDown = "...";
            this.totalNe2gDown = '...';
            this.totalNe4gDown = '...';
            this.getOutageData();
        }
    },
    data() {
        return {
            outagesData: null,
            cellsImpacted: 0,
            siteDown: "...",
            lastUpdatedOutagesData: null,
            todayDateOutagesData: null,
            dataParent: ['BIG HUB SITE', 'MEDIUM HUB SITE', 'SMALL HUB SITE'],
            dataSiteCategory: [],
        }
    },
    async mounted() {
        await spl.U.initCsrfToken();
        await this.getOutageData();

        // this.updateLastUpdatedTime();
        this.checkRefetchData();
    },
    methods: {
        async getOutageData() {
            spl.MessageProcessor.process({
                serviceId: 'netdrone_maps_lebaran_site_down_duration_range_breakdown',
                data: {
                    hub_type: this.dataParent,
                    category: this.dataSiteCategory,
                },
                showErrorMessage: false,
                success: (json) => {
                    console.log(json, 'json outages card');
                    var res = json.results;
                    this.siteDown = res.total_sitedown;
                },
                error: (error) => {
                    console.log(error, 'error Outages Card');
                }
            });
        },
        // REFETCH DATA QUARTER HOUR
        async checkMinutes() {
            const now = new Date();
            const minutes = now.getMinutes();
            if ([2, 17, 32, 47].includes(minutes)) {
                this.outagesData = null;
                this.cellsImpacted = '...';
                this.siteDown = '...';
                this.getOutageData();
            }
        },
        checkRefetchData() {
            this.fetching = setInterval(() => {
                this.checkMinutes()
            }, 30 * 1000)
        },

    }
});

;// CONCATENATED MODULE: ./src/views/sections/OutagesCard.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/views/sections/OutagesCard.vue




;
const OutagesCard_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(OutagesCardvue_type_script_lang_js, [['render',OutagesCardvue_type_template_id_1aa9ddf5_render]])

/* harmony default export */ const OutagesCard = (OutagesCard_exports_);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/RegionWiseCard.vue?vue&type=template&id=8ff95f20


const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_1 = {
  class: "accordion accordion-bg-statistic p-0",
  id: "accordionExample"
}
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_2 = { class: "accordion-item" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h4", { class: "accordion-header" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    class: "accordion-button px-3 py-4",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#regionWiseCard",
    "aria-expanded": "true",
    "aria-controls": "regionWiseCard",
    style: {"color":"#005D52"}
  }, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "fa-solid fa-earth-asia fa-mr-3" }),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Region Wise ")
  ])
], -1)
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_4 = {
  id: "regionWiseCard",
  class: "accordion-collapse collapse show",
  "data-bs-parent": "#accordionExample"
}
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_5 = { class: "accordion-body px-3" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)("<div class=\"row align-items-center justify-content-around mb-2 mt-1 px-2\"><a class=\"index-Region\"><i class=\"fa-solid fa-square\" style=\"color:#0076CE;\"></i> &lt;1 Hr</a><a class=\"index-Region\"><i class=\"fa-solid fa-square\" style=\"color:#62B230;\"></i> 1-4 Hr</a><a class=\"index-Region\"><i class=\"fa-solid fa-square\" style=\"color:#FFA500;\"></i> 4-8 Hr</a><a class=\"index-Region\"><i class=\"fa-solid fa-square\" style=\"color:#ED1C24;\"></i> 8-24 Hr</a><a class=\"index-Region\"><i class=\"fa-solid fa-square\" style=\"color:#313131;\"></i>&gt;24Hr</a></div>", 1)
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_7 = { class: "row row-region" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_8 = { class: "card card-region-wise" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_9 = { class: "row" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "col-3 align-self-center text-center",
  id: "region-chart-1"
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("canvas", {
    id: "regionChart1",
    style: {"height":"65px","width":"65px"}
  })
], -1)
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "col-6",
  id: "region-bar-chart-1"
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("canvas", {
    id: "regionBarChart1",
    style: {"height":"75px","width":"175px"}
  })
], -1)
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_12 = { class: "col-3 align-self-center text-center" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_13 = { class: "total-site-count" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_14 = { class: "row" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_15 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "col-3 align-self-center text-center",
  id: "region-chart-2"
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("canvas", {
    id: "regionChart2",
    style: {"height":"65px","width":"65px"}
  })
], -1)
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_16 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "col-6",
  id: "region-bar-chart-2"
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("canvas", {
    id: "regionBarChart2",
    style: {"height":"75px","width":"175px"}
  })
], -1)
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_17 = { class: "col-3 align-self-center text-center" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_18 = { class: "total-site-count" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_19 = { class: "row" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_20 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "col-3 align-self-center text-center",
  id: "region-chart-3"
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("canvas", {
    id: "regionChart3",
    style: {"height":"65px","width":"65px"}
  })
], -1)
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_21 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "col-6",
  id: "region-bar-chart-3"
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("canvas", {
    id: "regionBarChart3",
    style: {"height":"75px","width":"175px"}
  })
], -1)
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_22 = { class: "col-3 align-self-center text-center" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_23 = { class: "total-site-count" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_24 = { class: "row" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_25 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "col-3 align-self-center text-center",
  id: "region-chart-4"
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("canvas", {
    id: "regionChart4",
    style: {"height":"65px","width":"65px"}
  })
], -1)
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_26 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "col-6",
  id: "region-bar-chart-4"
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("canvas", {
    id: "regionBarChart4",
    style: {"height":"75px","width":"175px"}
  })
], -1)
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_27 = { class: "col-3 align-self-center text-center" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_28 = { class: "total-site-count" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_29 = { class: "row" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_30 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "col-3 align-self-center text-center",
  id: "region-chart-5"
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("canvas", {
    id: "regionChart5",
    style: {"height":"65px","width":"65px"}
  })
], -1)
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_31 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "col-6",
  id: "region-bar-chart-5"
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("canvas", {
    id: "regionBarChart5",
    style: {"height":"75px","width":"175px"}
  })
], -1)
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_32 = { class: "col-3 align-self-center text-center" }
const RegionWiseCardvue_type_template_id_8ff95f20_hoisted_33 = { class: "total-site-count" }

function RegionWiseCardvue_type_template_id_8ff95f20_render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_1, [
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_2, [
      RegionWiseCardvue_type_template_id_8ff95f20_hoisted_3,
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_4, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_5, [
          RegionWiseCardvue_type_template_id_8ff95f20_hoisted_6,
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_7, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_8, [
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_9, [
                RegionWiseCardvue_type_template_id_8ff95f20_hoisted_10,
                RegionWiseCardvue_type_template_id_8ff95f20_hoisted_11,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_12, [
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("p", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_13, [
                    (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Total "),
                    (0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, (0,shared_esm_bundler/* toDisplayString */.zw)(this.totalJbro), 1)
                  ])
                ])
              ]),
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_14, [
                RegionWiseCardvue_type_template_id_8ff95f20_hoisted_15,
                RegionWiseCardvue_type_template_id_8ff95f20_hoisted_16,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_17, [
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("p", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_18, [
                    (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Total "),
                    (0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, (0,shared_esm_bundler/* toDisplayString */.zw)(this.totalSmtr), 1)
                  ])
                ])
              ]),
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_19, [
                RegionWiseCardvue_type_template_id_8ff95f20_hoisted_20,
                RegionWiseCardvue_type_template_id_8ff95f20_hoisted_21,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_22, [
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("p", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_23, [
                    (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Total "),
                    (0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, (0,shared_esm_bundler/* toDisplayString */.zw)(this.totalCjwj), 1)
                  ])
                ])
              ]),
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_24, [
                RegionWiseCardvue_type_template_id_8ff95f20_hoisted_25,
                RegionWiseCardvue_type_template_id_8ff95f20_hoisted_26,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_27, [
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("p", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_28, [
                    (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Total "),
                    (0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, (0,shared_esm_bundler/* toDisplayString */.zw)(this.totalEjbn), 1)
                  ])
                ])
              ]),
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_29, [
                RegionWiseCardvue_type_template_id_8ff95f20_hoisted_30,
                RegionWiseCardvue_type_template_id_8ff95f20_hoisted_31,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("div", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_32, [
                  (0,runtime_core_esm_bundler/* createElementVNode */._)("p", RegionWiseCardvue_type_template_id_8ff95f20_hoisted_33, [
                    (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Total "),
                    (0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, (0,shared_esm_bundler/* toDisplayString */.zw)(this.totalKsmp), 1)
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ]))
}
;// CONCATENATED MODULE: ./src/views/sections/RegionWiseCard.vue?vue&type=template&id=8ff95f20

// EXTERNAL MODULE: ./node_modules/echarts/index.js + 540 modules
var echarts = __webpack_require__(11360);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/RegionWiseCard.vue?vue&type=script&lang=js

// import echarts






/* harmony default export */ const RegionWiseCardvue_type_script_lang_js = ({
    name: 'RegionWiseCard',
    data() {
        return {
            regionWiseData: null,
            sdSMTR: 0,
            cdSMTR: 0,
            sdJBRO: 0,
            cdJBRO: 0,
            sdKSMP: 0,
            cdKSMP: 0,
            sdEJBN: 0,
            cdEJBN: 0,
            sdCJWJ: 0,
            cdCJWJ: 0,

            totalCjwj: 0,
            totalEjbn: 0,
            totalJbro: 0,
            totalKsmp: 0,
            totalSmtr: 0,

            cellDownArrayKSMP: [],
            siteDownArrayKSMP: [],
            cellDownArrayJBRO: [],
            siteDownArrayJBRO: [],
            cellDownArrayCJWJ: [],
            siteDownArrayCJWJ: [],
            cellDownArraySMTR: [],
            siteDownArraySMTR: [],
            cellDownArrayEJBN: [],
            siteDownArrayEJBN: [],

            arraySMTR: [],
            arrayKSMP: [],
            arrayJBRO: [],
            arrayCJWJ: [],
            arrayEJBN: [],

            dataParent: ['BIG HUB SITE', 'MEDIUM HUB SITE', 'SMALL HUB SITE'],

            // REFETCH
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,

            dataSiteCategory: [],
        }
    },
    props: {
        propsSiteCategory: [],
    },
    watch: {
        propsSiteCategory: function (newVal, oldVal) {
            this.dataSiteCategory = newVal;
            this.clearData();
            this.refetchRegionWiseData();
        },
        arrayKSMP(newKSMP) {
            this.updateBarChart("regionBarChart5", newKSMP);
        },
        arrayJBRO(newJBRO) {
            this.updateBarChart("regionBarChart1", newJBRO);
        },
        arrayCJWJ(newCJWJ) {
            this.updateBarChart("regionBarChart3", newCJWJ);
        },
        arraySMTR(newSMTR) {
            this.updateBarChart("regionBarChart2", newSMTR);
        },
        arrayEJBN(newEJBN) {
            this.updateBarChart("regionBarChart4", newEJBN);
        },
    },
    created() {
        (0,runtime_core_esm_bundler/* watch */.YP)(() => [this.sdSMTR, this.cdSMTR], ([newSdSMTR, newCdSMTR], [oldSdSMTR, oldCdSMTR]) => {
            this.updateCircleChart("regionChart3", newSdSMTR, newCdSMTR);
        });
        (0,runtime_core_esm_bundler/* watch */.YP)(() => [this.sdJBRO, this.cdJBRO], ([newSdJBRO, newCdJBRO], [oldSdJBRO, oldCdJBRO]) => {
            this.updateCircleChart("regionChart3", newSdJBRO, newCdJBRO);
        });
        (0,runtime_core_esm_bundler/* watch */.YP)(() => [this.sdKSMP, this.cdKSMP], ([newSdKSMP, newCdKSMP], [oldSdKSMP, oldCdKSMP]) => {
            this.updateCircleChart("regionChart3", newSdKSMP, newCdKSMP);
        });
        (0,runtime_core_esm_bundler/* watch */.YP)(() => [this.sdCJWJ, this.cdCJWJ], ([newSdCJWJ, newCdCJWJ], [oldSdCJWJ, oldCdCJWJ]) => {
            this.updateCircleChart("regionChart3", newSdCJWJ, newCdCJWJ);
        });
        (0,runtime_core_esm_bundler/* watch */.YP)(() => [this.sdEJBN, this.cdEJBN], ([newSdEJBN, newCdEJBN], [oldSdEJBN, oldCdEJBN]) => {
            this.updateCircleChart("regionChart3", newSdEJBN, newCdEJBN);
        });
    },
    async mounted() {
        await spl.U.initCsrfToken();
        await this.getRegionWiseData();

        this.checkRefetchData();
    },
    methods: {
        async getRegionWiseData() {
            spl.MessageProcessor.process({
                serviceId: 'netdrone_maps_lebaran_site_down_aging_by_region',
                data: {
                    hub_type: this.dataParent,
                    category: this.dataSiteCategory,
                },
                showErrorMessage: false,
                success: (json) => {
                    this.regionWiseData = json.results;
                    console.log(json, 'json region wise');
                    for (var i = 0; i < this.regionWiseData.length; i++) {
                        if (this.regionWiseData[i].location == "SMTR") {
                            this.cdSMTR = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdSMTR = this.regionWiseData[i].unique_sitedown;
                            console.log(this.cdSMTR, 'cd smtr');
                            console.log(this.sdSMTR, 'sd SMTR');

                            this.cellDownArraySMTR.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArraySMTR.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArraySMTR.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArraySMTR.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArraySMTR.push(this.regionWiseData[i].less_than_1_hour_cell)

                            this.siteDownArraySMTR.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArraySMTR.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArraySMTR.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArraySMTR.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArraySMTR.push(this.regionWiseData[i].more_than_24_hours_unq)
                            this.siteDownArraySMTR.reverse();

                            this.arraySMTR = this.siteDownArraySMTR;

                            this.totalSmtr = this.regionWiseData[i].unique_sitedown;

                            this.getCharts("regionChart2", this.sdSMTR, this.cdSMTR);
                            this.getBarChart("regionBarChart2", this.arraySMTR);
                        } else if (this.regionWiseData[i].location == "JBRO") {
                            this.cdJBRO = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdJBRO = this.regionWiseData[i].unique_sitedown;

                            this.cellDownArrayJBRO.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArrayJBRO.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArrayJBRO.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArrayJBRO.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArrayJBRO.push(this.regionWiseData[i].less_than_1_hour_cell)
                            // this.cellDownArrayJBRO.reverse();

                            this.siteDownArrayJBRO.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArrayJBRO.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArrayJBRO.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArrayJBRO.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArrayJBRO.push(this.regionWiseData[i].more_than_24_hours_unq)
                            this.siteDownArrayJBRO.reverse();

                            this.arrayJBRO = this.siteDownArrayJBRO;

                            this.totalJbro = this.regionWiseData[i].unique_sitedown;

                            this.getCharts("regionChart1", this.sdJBRO, this.cdJBRO);
                            this.getBarChart("regionBarChart1", this.arrayJBRO);
                        } else if (this.regionWiseData[i].location == "KSMP") {
                            this.cdKSMP = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdKSMP = this.regionWiseData[i].unique_sitedown;

                            this.cellDownArrayKSMP.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArrayKSMP.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArrayKSMP.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArrayKSMP.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArrayKSMP.push(this.regionWiseData[i].less_than_1_hour_cell)
                            // this.cellDownArrayKSMP.reverse();

                            this.siteDownArrayKSMP.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArrayKSMP.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArrayKSMP.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArrayKSMP.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArrayKSMP.push(this.regionWiseData[i].more_than_24_hours_unq)

                            this.siteDownArrayKSMP.reverse();

                            this.arrayKSMP = this.siteDownArrayKSMP;

                            this.totalKsmp = this.regionWiseData[i].unique_sitedown;

                            this.getCharts("regionChart5", this.sdKSMP, this.cdKSMP);
                            this.getBarChart("regionBarChart5", this.arrayKSMP);
                        } else if (this.regionWiseData[i].location == "CJWJ") {
                            this.cdCJWJ = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdCJWJ = this.regionWiseData[i].unique_sitedown;

                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].less_than_1_hour_cell)
                            // this.cellDownArrayCJWJ.reverse();

                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].more_than_24_hours_unq)

                            this.siteDownArrayCJWJ.reverse();

                            this.arrayCJWJ = this.siteDownArrayCJWJ;

                            this.totalCjwj = this.regionWiseData[i].unique_sitedown;

                            this.getCharts("regionChart3", this.sdCJWJ, this.cdCJWJ);
                            this.getBarChart("regionBarChart3", this.arrayCJWJ);
                        } else if (this.regionWiseData[i].location == "EJBN") {
                            this.cdEJBN = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdEJBN = this.regionWiseData[i].unique_sitedown;

                            this.cellDownArrayEJBN.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArrayEJBN.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArrayEJBN.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArrayEJBN.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArrayEJBN.push(this.regionWiseData[i].less_than_1_hour_cell)
                            // this.cellDownArrayEJBN.reverse();

                            this.siteDownArrayEJBN.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArrayEJBN.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArrayEJBN.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArrayEJBN.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArrayEJBN.push(this.regionWiseData[i].more_than_24_hours_unq)

                            this.siteDownArrayEJBN.reverse();

                            this.arrayEJBN = this.siteDownArrayEJBN;

                            this.totalEjbn = this.regionWiseData[i].unique_sitedown;

                            this.getCharts("regionChart4", this.sdEJBN, this.cdEJBN);
                            this.getBarChart("regionBarChart4", this.arrayEJBN);
                        }
                    }

                },
                error: (error) => {
                    console.log(error, 'error breakdown sitedown duration range');
                }
            });
        },

        async refetchRegionWiseData() {
            this.siteDownArrayKSMP = [];
            this.siteDownArrayJBRO = [];
            this.siteDownArrayCJWJ = [];
            this.siteDownArraySMTR = [];
            this.siteDownArrayEJBN = [];

            spl.MessageProcessor.process({
                serviceId: 'netdrone_maps_lebaran_site_down_aging_by_region',
                data: {
                    hub_type: this.dataParent,
                    category: this.dataSiteCategory,
                },
                showErrorMessage: false,
                success: (json) => {
                    this.regionWiseData = json.results;
                    console.log(json, 'json region wise');
                    for (var i = 0; i < this.regionWiseData.length; i++) {
                        if (this.regionWiseData[i].location == "SMTR") {
                            this.cdSMTR = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdSMTR = this.regionWiseData[i].unique_sitedown;
                            console.log(this.cdSMTR, 'cd smtr');
                            console.log(this.sdSMTR, 'sd SMTR');

                            this.cellDownArraySMTR.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArraySMTR.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArraySMTR.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArraySMTR.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArraySMTR.push(this.regionWiseData[i].less_than_1_hour_cell)

                            this.siteDownArraySMTR.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArraySMTR.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArraySMTR.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArraySMTR.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArraySMTR.push(this.regionWiseData[i].more_than_24_hours_unq)
                            this.siteDownArraySMTR.reverse();

                            this.arraySMTR = this.siteDownArraySMTR;

                            this.totalSmtr = this.regionWiseData[i].unique_sitedown;

                        } else if (this.regionWiseData[i].location == "JBRO") {
                            this.cdJBRO = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdJBRO = this.regionWiseData[i].unique_sitedown;

                            this.cellDownArrayJBRO.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArrayJBRO.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArrayJBRO.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArrayJBRO.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArrayJBRO.push(this.regionWiseData[i].less_than_1_hour_cell)
                            // this.cellDownArrayJBRO.reverse();

                            this.siteDownArrayJBRO.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArrayJBRO.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArrayJBRO.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArrayJBRO.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArrayJBRO.push(this.regionWiseData[i].more_than_24_hours_unq)
                            this.siteDownArrayJBRO.reverse();

                            this.arrayJBRO = this.siteDownArrayJBRO;

                            this.totalJbro = this.regionWiseData[i].unique_sitedown;

                        } else if (this.regionWiseData[i].location == "KSMP") {
                            this.cdKSMP = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdKSMP = this.regionWiseData[i].unique_sitedown;

                            this.cellDownArrayKSMP.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArrayKSMP.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArrayKSMP.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArrayKSMP.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArrayKSMP.push(this.regionWiseData[i].less_than_1_hour_cell)
                            // this.cellDownArrayKSMP.reverse();

                            this.siteDownArrayKSMP.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArrayKSMP.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArrayKSMP.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArrayKSMP.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArrayKSMP.push(this.regionWiseData[i].more_than_24_hours_unq)

                            this.siteDownArrayKSMP.reverse();

                            this.arrayKSMP = this.siteDownArrayKSMP;

                            this.totalKsmp = this.regionWiseData[i].unique_sitedown;

                        } else if (this.regionWiseData[i].location == "CJWJ") {
                            this.cdCJWJ = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdCJWJ = this.regionWiseData[i].unique_sitedown;

                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].less_than_1_hour_cell)
                            // this.cellDownArrayCJWJ.reverse();

                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].more_than_24_hours_unq)

                            this.siteDownArrayCJWJ.reverse();

                            this.arrayCJWJ = this.siteDownArrayCJWJ;

                            this.totalCjwj = this.regionWiseData[i].unique_sitedown;

                        } else if (this.regionWiseData[i].location == "EJBN") {
                            this.cdEJBN = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdEJBN = this.regionWiseData[i].unique_sitedown;

                            this.cellDownArrayEJBN.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArrayEJBN.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArrayEJBN.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArrayEJBN.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArrayEJBN.push(this.regionWiseData[i].less_than_1_hour_cell)
                            // this.cellDownArrayEJBN.reverse();

                            this.siteDownArrayEJBN.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArrayEJBN.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArrayEJBN.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArrayEJBN.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArrayEJBN.push(this.regionWiseData[i].more_than_24_hours_unq)

                            this.siteDownArrayEJBN.reverse();

                            this.arrayEJBN = this.siteDownArrayEJBN;

                            this.totalEjbn = this.regionWiseData[i].unique_sitedown;

                        }
                    }

                },
                error: (error) => {
                    console.log(error, 'error breakdown sitedown duration range');
                }
            });
        },

        async clearData() {
            this.regionWiseData = null;
            this.sdSMTR = 0;
            this.cdSMTR = 0;
            this.sdJBRO = 0;
            this.cdJBRO = 0;
            this.sdKSMP = 0;
            this.cdKSMP = 0;
            this.sdEJBN = 0;
            this.cdEJBN = 0;
            this.sdCJWJ = 0;
            this.cdCJWJ = 0;

            this.totalCjwj = 0;
            this.totalEjbn = 0;
            this.totalJbro = 0;
            this.totalKsmp = 0;
            this.totalSmtr = 0;

            this.cellDownArrayKSMP = [];
            this.siteDownArrayKSMP = [];
            this.cellDownArrayJBRO = [];
            this.siteDownArrayJBRO = [];
            this.cellDownArrayCJWJ = [];
            this.siteDownArrayCJWJ = [];
            this.cellDownArraySMTR = [];
            this.siteDownArraySMTR = [];
            this.cellDownArrayEJBN = [];
            this.siteDownArrayEJBN = [];
        },

        updateCircleChart(id, sd, cd) {
            var chartDom = document.getElementById(id);
            var myChart = echarts/* getInstanceByDom */.JE(chartDom);
            var option = myChart.getOption();

            // Update the values of data array for both layers
            option.series[0].data[0].value = sd;
            option.series[0].data[1].value = cd;

            // Set the updated option to the chart
            myChart.setOption(option);
        },

        updateBarChart(id, data) {
            var chartDom = document.getElementById(id);
            var myChart = echarts/* getInstanceByDom */.JE(chartDom);
            var option = myChart.getOption();
            option.series[0].data = data; // Update data
            myChart.setOption(option);
        },

        async getCharts(id, sd, cd) {
            var chartDom = document.getElementById(id);
            var myChart = echarts/* init */.S1(chartDom);
            var option;
            if (myChart !== null) {
                myChart.clear();
            }

            let colorPrimary = '#BE161D';
            let title = String;

            if (id == 'regionChart1') {
                title = 'JBRO';
            } else if (id == 'regionChart2') {
                title = 'SMTR';
            } else if (id == 'regionChart3') {
                title = 'CJWJ';
            } else if (id == 'regionChart4') {
                title = 'EJBN';
            } else if (id == 'regionChart5') {
                title = 'KSMP';
            }
            option = {
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    show: false,
                },
                graphic: [
                    {
                        type: 'text', // Change type to 'text'
                        id: 'chart-text',
                        left: 'center',
                        top: 'center',
                        style: {
                            text: title, // Set the text content
                            fontSize: 12, // Set the font size
                            fontWeight: 'bold', // Set the font weight
                            fill: '#000', // Set the text color
                        },
                    },
                ],
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['65%', '85%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            label: {
                                show: false, // Disable label on hover
                            },
                            itemStyle: {
                                opacity: 1, // Disable opacity change on hover
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        data: [
                            {
                                // Create the blue layer to represent the data to be shown
                                value: sd, // Set the actual value you want to display
                                name: 'Search Engine', // Name should match the bottom layer
                                itemStyle: {
                                    color: colorPrimary,
                                    borderRadius: [15, 15, 15, 15], // Set border radius for top corners
                                },
                            },
                            {
                                value: cd, // Set value to 0 for the bottom layer
                                name: 'Search Engine',
                                itemStyle: {
                                    color: '#D8D8D8', // Set the color for the bottom layer
                                    borderRadius: [15, 15, 15, 15], // Set border radius for top corners
                                },
                            },
                        ],
                    },
                ],
            };
            myChart.hideLoading();
            myChart.resize();

            option && myChart.setOption(option);
        },
        async getBarChart(id, arraySite) {
            var chartDom = document.getElementById(id);
            var myChart;
            console.log(myChart, 'my chart init');
            myChart = echarts/* init */.S1(chartDom);
            console.log(myChart, 'my chart dom');
            var option;

            if (myChart && myChart != null) {
                myChart.clear();
            }

            // black, red, orange, green, blue
            var colors = ['#313131', '#ED1C24', '#FFA500', '#62B230', '#0076CE'];

            let xAxisData = [];


            var emphasisStyle = {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,0.3)',
                },
            };
            option = {
                legend: {
                    show: false,
                },
                brush: {
                    show: false,
                },
                toolbox: {
                    show: false,
                },
                tooltip: {},
                yAxis: {
                    data: xAxisData,
                    name: '', // Set xAxis label to an empty string
                    axisLine: { onZero: true },
                    splitLine: { show: false },
                    splitArea: { show: false },
                    axisLabel: {
                        show: false, // Hide xAxis labels
                    },
                },
                xAxis: {
                    show: false,
                },
                grid: {
                    width: '70%', // Set the width of the grid
                    height: '80%', // Set the height of the grid
                    left: '15%', // Set the left margin
                    top: '11.5%', // Set the top margin
                },
                series: [
                    {
                        name: 'bar',
                        type: 'bar',
                        stack: 'one',
                        emphasis: emphasisStyle,
                        data: arraySite, // Specify data as an array of values
                        itemStyle: {
                            color: function (params) {
                                return colors[params.dataIndex];
                            },
                            barBorderRadius: [0, 0, 0, 0],
                        },
                        label: {
                            show: true,
                            position: 'right', // Position of data labels
                            formatter: function (params) {
                                return params.value;
                            },
                            color: 'black', // Label color
                            fontWeight: 'bold', // Bold font weight
                            fontSize: '11px'
                        },
                    },
                ],
            };

            myChart.on('brushSelected', function (params) {
                var brushed = [];
                var brushComponent = params.batch[0];
                for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
                    var rawIndices = brushComponent.selected[sIdx].dataIndex;
                    // Check if the selected indices contain 0; if not, then display them
                    if (!rawIndices.includes(0)) {
                        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
                    }
                }
                myChart.setOption({
                    title: {
                        text: '', // Set an empty string to remove the title
                    },
                });
            });

            option && myChart.setOption(option);
            myChart.hideLoading();
            myChart.resize();
        },

        async checkMinutes() {
            const now = new Date();
            const minutes = now.getMinutes();
            console.log(minutes, "minutes only");
            this.refetch = false;
            if ([2, 17, 32, 47].includes(minutes)) {
                this.updateLastUpdatedTime();
                this.refetch = true;
                await this.refetchRegionWiseData();
                console.log(this.refetch, "will be true");
                console.log("update refetch data");
            }
        },
        checkRefetchData() {
            this.fetching = setInterval(() => {
                console.log("check fetching refetch");
                this.checkMinutes();
                this.refetch = false;
                console.log(this.refetch, "will be false");
            }, 30 * 1000);
            console.log(this.fetching, "check refetch data");
        },
    }
});

;// CONCATENATED MODULE: ./src/views/sections/RegionWiseCard.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/views/sections/RegionWiseCard.vue




;
const RegionWiseCard_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(RegionWiseCardvue_type_script_lang_js, [['render',RegionWiseCardvue_type_template_id_8ff95f20_render]])

/* harmony default export */ const RegionWiseCard = (RegionWiseCard_exports_);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/SiteStatisticCard.vue?vue&type=template&id=15c668ae


const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_1 = {
  class: "modal fade",
  id: "siteStatisticModal",
  tabindex: "-1",
  role: "dialog"
}
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_2 = {
  class: "modal-dialog modal-dialog-centered d-flex flex-column align-items-center justify-content-center",
  role: "document"
}
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_3 = {
  class: "modal-content modal-details px-3 py-2",
  style: {"width":"1350px !important"}
}
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_4 = { class: "modal-header" }
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h4", null, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", null, "Site Statistic")
], -1)
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_6 = {
  type: "button",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  ref: "siteStatisticModalDismiss"
}
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_7 = {
  class: "modal-body justify-content-around row",
  style: {"gap":"10px"}
}
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_8 = {
  type: "button",
  ref: "siteDataDetailButton",
  class: "btn download-button",
  "data-bs-toggle": "modal",
  "data-bs-target": "#siteDataDetail",
  style: {"display":"none","visibility":"hidden"}
}
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_9 = {
  class: "modal fade",
  id: "siteDataDetail",
  tabindex: "-1",
  "aria-labelledby": "overalDataLabel",
  "aria-hidden": "true"
}
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_10 = {
  class: "modal-dialog modal-dialog-centered",
  role: "document"
}
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_11 = { class: "modal-content content-site-id" }
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_12 = { class: "modal-body" }
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_13 = { class: "row mt-3 px-3" }
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_14 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "col-12 mb-2",
  style: {"justify-content":"end","text-align":"end"}
}, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
    type: "button",
    class: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })
], -1)
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_15 = {
  class: "col-6 mt-2",
  style: {"text-align":"left"}
}
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_16 = { style: {"margin-left":"15px","font-size":"26px","font-weight":"800"} }
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_17 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("br", null, null, -1)
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_18 = {
  class: "col-6 mt-2",
  style: {"text-align":"right"}
}
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_19 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "fa-solid fa-download" }, null, -1)
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_20 = {
  class: "row justify-content-center",
  style: {"padding":"0px 25px","height":"100%","max-height":"500px","overflow-y":"scroll","overflow-x":"hidden"}
}
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_21 = { class: "content-table" }
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_22 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("thead", null, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("tr", null, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("td", {
      rowspan: "2",
      style: {"text-align":"center"}
    }, "Area Name"),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("td", {
      rowspan: "2",
      style: {"text-align":"center"}
    }, "Roh"),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("td", {
      colspan: "2",
      style: {"text-align":"center"}
    }, "Cell Down"),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("td", {
      rowspan: "2",
      style: {"text-align":"center"}
    }, "Site Down")
  ]),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("tr", null, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("td", { style: {"text-align":"center"} }, "2G"),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("td", { style: {"text-align":"center"} }, "4G")
  ])
], -1)
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_23 = {
  key: 0,
  class: "load_parent",
  style: {"top":"50%","position":"absolute","left":"44%","z-index":"999999999999"}
}
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_24 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", { class: "loader" }, null, -1)
const SiteStatisticCardvue_type_template_id_15c668ae_hoisted_25 = [
  SiteStatisticCardvue_type_template_id_15c668ae_hoisted_24
]

function SiteStatisticCardvue_type_template_id_15c668ae_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CardSiteComponent = (0,runtime_core_esm_bundler/* resolveComponent */.up)("CardSiteComponent")

  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_1, [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_2, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_3, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_4, [
            SiteStatisticCardvue_type_template_id_15c668ae_hoisted_5,
            (0,runtime_core_esm_bundler/* createElementVNode */._)("button", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_6, null, 512)
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_7, [
            (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_CardSiteComponent, {
              cardTitle: 'National',
              onClick: () => $options.showTableModal('National', 'national'),
              uniqueSiteDown: $data.uniqSdNational,
              percentNeDown2G: $data.pct2gNeDownNational,
              neDown2G: $data.neDown2gNational,
              siteImpacted2G: $data.siteImpacted2gNational,
              cellDown2G: $data.cellDown2gNational,
              totalSite2G: $data.total2gSiteNational,
              percentageNeDown4G: $data.pct4gNeDownNational,
              neDown4G: $data.neDown4gNational,
              siteImpacted4G: $data.siteImpacted4gNational,
              cellDown4G: $data.cellDown4gNational,
              totalSite4G: $data.total4gSiteNational
            }, null, 8, ["onClick", "uniqueSiteDown", "percentNeDown2G", "neDown2G", "siteImpacted2G", "cellDown2G", "totalSite2G", "percentageNeDown4G", "neDown4G", "siteImpacted4G", "cellDown4G", "totalSite4G"]),
            (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_CardSiteComponent, {
              cardTitle: 'EJBN',
              onClick: () => $options.showTableModal('EJBN', 'EAST JAVA & BALI NUSRA'),
              uniqueSiteDown: $data.uniqSdEjbn,
              percentNeDown2G: $data.pct2gNeDownSmtr,
              neDown2G: $data.neDown2gEjbn,
              siteImpacted2G: $data.siteImpacted2gEjbn,
              cellDown2G: $data.cellDown2gEjbn,
              totalSite2G: $data.total2gSiteEjbn,
              percentageNeDown4G: $data.pct4gNeDownEjbn,
              neDown4G: $data.neDown4gEjbn,
              siteImpacted4G: $data.siteImpacted4gEjbn,
              cellDown4G: $data.cellDown4gEjbn,
              totalSite4G: $data.total4gSiteEjbn
            }, null, 8, ["onClick", "uniqueSiteDown", "percentNeDown2G", "neDown2G", "siteImpacted2G", "cellDown2G", "totalSite2G", "percentageNeDown4G", "neDown4G", "siteImpacted4G", "cellDown4G", "totalSite4G"]),
            (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_CardSiteComponent, {
              cardTitle: 'JBRO',
              onClick: () => $options.showTableModal('JBRO', 'JABOTABEK'),
              uniqueSiteDown: $data.uniqSdJbro,
              percentNeDown2G: $data.pct2gNeDownJbro,
              neDown2G: $data.neDown2gJbro,
              siteImpacted2G: $data.siteImpacted2gJbro,
              cellDown2G: $data.cellDown2gJbro,
              totalSite2G: $data.total2gSiteJbro,
              percentageNeDown4G: $data.pct4gNeDownJbro,
              neDown4G: $data.neDown4gJbro,
              siteImpacted4G: $data.siteImpacted4gJbro,
              cellDown4G: $data.cellDown4gJbro,
              totalSite4G: $data.total4gSiteJbro
            }, null, 8, ["onClick", "uniqueSiteDown", "percentNeDown2G", "neDown2G", "siteImpacted2G", "cellDown2G", "totalSite2G", "percentageNeDown4G", "neDown4G", "siteImpacted4G", "cellDown4G", "totalSite4G"]),
            (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_CardSiteComponent, {
              cardTitle: 'KSMP',
              onClick: () => $options.showTableModal('KSMP', 'KALIMANTAN & SULAMPAPUA'),
              uniqueSiteDown: $data.uniqSdKsmp,
              percentNeDown2G: $data.pct2gNeDownKsmp,
              neDown2G: $data.neDown2gKsmp,
              siteImpacted2G: $data.siteImpacted2gKsmp,
              cellDown2G: $data.cellDown2gKsmp,
              totalSite2G: $data.total2gSiteKsmp,
              percentageNeDown4G: $data.pct4gNeDownKsmp,
              neDown4G: $data.neDown4gKsmp,
              siteImpacted4G: $data.siteImpacted4gKsmp,
              cellDown4G: $data.cellDown4gKsmp,
              totalSite4G: $data.total4gSiteKsmp
            }, null, 8, ["onClick", "uniqueSiteDown", "percentNeDown2G", "neDown2G", "siteImpacted2G", "cellDown2G", "totalSite2G", "percentageNeDown4G", "neDown4G", "siteImpacted4G", "cellDown4G", "totalSite4G"]),
            (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_CardSiteComponent, {
              cardTitle: 'SMTR',
              onClick: () => $options.showTableModal('SMTR', 'SUMATERA'),
              uniqueSiteDown: $data.uniqSdSmtr,
              percentNeDown2G: $data.pct2gNeDownSmtr,
              neDown2G: $data.neDown2gSmtr,
              siteImpacted2G: $data.siteImpacted2gSmtr,
              cellDown2G: $data.cellDown2gSmtr,
              totalSite2G: $data.total2gSiteSmtr,
              percentageNeDown4G: $data.pct4gNeDownSmtr,
              neDown4G: $data.neDown4gSmtr,
              siteImpacted4G: $data.siteImpacted4gSmtr,
              cellDown4G: $data.cellDown4gSmtr,
              totalSite4G: $data.total4gSiteSmtr
            }, null, 8, ["onClick", "uniqueSiteDown", "percentNeDown2G", "neDown2G", "siteImpacted2G", "cellDown2G", "totalSite2G", "percentageNeDown4G", "neDown4G", "siteImpacted4G", "cellDown4G", "totalSite4G"]),
            (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_CardSiteComponent, {
              cardTitle: 'CJWJ',
              onClick: () => $options.showTableModal('CJWJ', 'WEST JAVA & CENTRAL JAVA'),
              uniqueSiteDown: $data.uniqSdCjwj,
              percentNeDown2G: $data.pct2gNeDownCjwj,
              neDown2G: $data.neDown2gCjwj,
              siteImpacted2G: $data.siteImpacted2gCjwj,
              cellDown2G: $data.cellDown2gCjwj,
              totalSite2G: $data.total2gSiteCjwj,
              percentageNeDown4G: $data.pct4gNeDownCjwj,
              neDown4G: $data.neDown4gCjwj,
              siteImpacted4G: $data.siteImpacted4gCjwj,
              cellDown4G: $data.cellDown4gCjwj,
              totalSite4G: $data.total4gSiteCjwj
            }, null, 8, ["onClick", "uniqueSiteDown", "percentNeDown2G", "neDown2G", "siteImpacted2G", "cellDown2G", "totalSite2G", "percentageNeDown4G", "neDown4G", "siteImpacted4G", "cellDown4G", "totalSite4G"])
          ])
        ])
      ])
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("button", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_8, null, 512),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_9, [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_10, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_11, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_12, [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_13, [
              SiteStatisticCardvue_type_template_id_15c668ae_hoisted_14,
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_15, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("b", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_16, (0,shared_esm_bundler/* toDisplayString */.zw)(this.titleModal), 1),
                SiteStatisticCardvue_type_template_id_15c668ae_hoisted_17
              ]),
              (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_18, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
                  onClick: _cache[0] || (_cache[0] = $event => ($options.openTabExport())),
                  class: "btn btn-primary btn-apply-filter btn-16",
                  style: {"margin-right":"12px","font-size":"12px","width":"180px"}
                }, [
                  SiteStatisticCardvue_type_template_id_15c668ae_hoisted_19,
                  (0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" Download Data ")
                ])
              ])
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_20, [
              (0,runtime_core_esm_bundler/* createElementVNode */._)("table", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_21, [
                SiteStatisticCardvue_type_template_id_15c668ae_hoisted_22,
                (0,runtime_core_esm_bundler/* createElementVNode */._)("tbody", null, [
                  ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(this.dataTable, (item) => {
                    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("tr", null, [
                      (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(item.area_name), 1),
                      (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(item.roh_name) + " " + (0,shared_esm_bundler/* toDisplayString */.zw)(item.roh_phone), 1),
                      (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(item.celldown_2g), 1),
                      (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(item.celldown_4g), 1),
                      (0,runtime_core_esm_bundler/* createElementVNode */._)("td", null, (0,shared_esm_bundler/* toDisplayString */.zw)(item.sitedown), 1)
                    ]))
                  }), 256))
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    (this.loadingModal == true)
      ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", SiteStatisticCardvue_type_template_id_15c668ae_hoisted_23, SiteStatisticCardvue_type_template_id_15c668ae_hoisted_25))
      : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)
  ], 64))
}
;// CONCATENATED MODULE: ./src/views/sections/SiteStatisticCard.vue?vue&type=template&id=15c668ae

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CardSiteComponent.vue?vue&type=template&id=55296419


const CardSiteComponentvue_type_template_id_55296419_hoisted_1 = { class: "col-site" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_2 = { class: "d-flex justify-content-between mb-2" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_3 = { class: "card-title-site align-self-center" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("i", { class: "fa-solid fa-file-arrow-down" }, null, -1)
const CardSiteComponentvue_type_template_id_55296419_hoisted_5 = [
  CardSiteComponentvue_type_template_id_55296419_hoisted_4
]
const CardSiteComponentvue_type_template_id_55296419_hoisted_6 = { class: "d-flex justify-content-between" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", { class: "card-title-left" }, "Unique Site Down", -1)
const CardSiteComponentvue_type_template_id_55296419_hoisted_8 = { class: "card-title-right" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", { class: "d-flex justify-content-between my-2" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", { class: "card-subtitle-site" }, "2G")
], -1)
const CardSiteComponentvue_type_template_id_55296419_hoisted_10 = { class: "d-flex justify-content-between" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", { class: "card-title-left" }, "Percentage NE Down", -1)
const CardSiteComponentvue_type_template_id_55296419_hoisted_12 = { class: "card-title-right" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_13 = { class: "d-flex justify-content-between" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_14 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", { class: "card-title-left" }, "NE Down", -1)
const CardSiteComponentvue_type_template_id_55296419_hoisted_15 = { class: "card-title-right" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_16 = { class: "d-flex justify-content-between" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_17 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", { class: "card-title-left" }, "Site Impacted", -1)
const CardSiteComponentvue_type_template_id_55296419_hoisted_18 = { class: "card-title-right" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_19 = { class: "d-flex justify-content-between" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_20 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", { class: "card-title-left" }, "Cell Down", -1)
const CardSiteComponentvue_type_template_id_55296419_hoisted_21 = { class: "card-title-right" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_22 = { class: "d-flex justify-content-between" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_23 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", { class: "card-title-left" }, "Total Site", -1)
const CardSiteComponentvue_type_template_id_55296419_hoisted_24 = { class: "card-title-right" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_25 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("span", { class: "d-flex justify-content-between my-2" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("b", { class: "card-subtitle-site" }, "4G")
], -1)
const CardSiteComponentvue_type_template_id_55296419_hoisted_26 = { class: "d-flex justify-content-between" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_27 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", { class: "card-title-left" }, "Percentage NE Down", -1)
const CardSiteComponentvue_type_template_id_55296419_hoisted_28 = { class: "card-title-right" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_29 = { class: "d-flex justify-content-between" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_30 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", { class: "card-title-left" }, "NE Down", -1)
const CardSiteComponentvue_type_template_id_55296419_hoisted_31 = { class: "card-title-right" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_32 = { class: "d-flex justify-content-between" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_33 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", { class: "card-title-left" }, "Site Impacted", -1)
const CardSiteComponentvue_type_template_id_55296419_hoisted_34 = { class: "card-title-right" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_35 = { class: "d-flex justify-content-between" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_36 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", { class: "card-title-left" }, "Cell Down", -1)
const CardSiteComponentvue_type_template_id_55296419_hoisted_37 = { class: "card-title-right" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_38 = { class: "d-flex justify-content-between" }
const CardSiteComponentvue_type_template_id_55296419_hoisted_39 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("a", { class: "card-title-left" }, "Total Site", -1)
const CardSiteComponentvue_type_template_id_55296419_hoisted_40 = { class: "card-title-right" }

function CardSiteComponentvue_type_template_id_55296419_render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", CardSiteComponentvue_type_template_id_55296419_hoisted_1, [
    (0,runtime_core_esm_bundler/* createElementVNode */._)("span", CardSiteComponentvue_type_template_id_55296419_hoisted_2, [
      (0,runtime_core_esm_bundler/* createElementVNode */._)("b", CardSiteComponentvue_type_template_id_55296419_hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)($props.cardTitle), 1),
      (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
        onClick: _cache[0] || (_cache[0] = $event => ($options.handleClick())),
        class: "btn-export-data-excel px-2 py-1"
      }, CardSiteComponentvue_type_template_id_55296419_hoisted_5)
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("span", CardSiteComponentvue_type_template_id_55296419_hoisted_6, [
      CardSiteComponentvue_type_template_id_55296419_hoisted_7,
      (0,runtime_core_esm_bundler/* createElementVNode */._)("a", CardSiteComponentvue_type_template_id_55296419_hoisted_8, (0,shared_esm_bundler/* toDisplayString */.zw)($props.uniqueSiteDown), 1)
    ]),
    CardSiteComponentvue_type_template_id_55296419_hoisted_9,
    (0,runtime_core_esm_bundler/* createElementVNode */._)("span", CardSiteComponentvue_type_template_id_55296419_hoisted_10, [
      CardSiteComponentvue_type_template_id_55296419_hoisted_11,
      (0,runtime_core_esm_bundler/* createElementVNode */._)("a", CardSiteComponentvue_type_template_id_55296419_hoisted_12, (0,shared_esm_bundler/* toDisplayString */.zw)($props.percentNeDown2G) + "%", 1)
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("span", CardSiteComponentvue_type_template_id_55296419_hoisted_13, [
      CardSiteComponentvue_type_template_id_55296419_hoisted_14,
      (0,runtime_core_esm_bundler/* createElementVNode */._)("a", CardSiteComponentvue_type_template_id_55296419_hoisted_15, (0,shared_esm_bundler/* toDisplayString */.zw)($props.neDown2G), 1)
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("span", CardSiteComponentvue_type_template_id_55296419_hoisted_16, [
      CardSiteComponentvue_type_template_id_55296419_hoisted_17,
      (0,runtime_core_esm_bundler/* createElementVNode */._)("a", CardSiteComponentvue_type_template_id_55296419_hoisted_18, (0,shared_esm_bundler/* toDisplayString */.zw)($props.siteImpacted2G), 1)
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("span", CardSiteComponentvue_type_template_id_55296419_hoisted_19, [
      CardSiteComponentvue_type_template_id_55296419_hoisted_20,
      (0,runtime_core_esm_bundler/* createElementVNode */._)("a", CardSiteComponentvue_type_template_id_55296419_hoisted_21, (0,shared_esm_bundler/* toDisplayString */.zw)($props.cellDown2G), 1)
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("span", CardSiteComponentvue_type_template_id_55296419_hoisted_22, [
      CardSiteComponentvue_type_template_id_55296419_hoisted_23,
      (0,runtime_core_esm_bundler/* createElementVNode */._)("a", CardSiteComponentvue_type_template_id_55296419_hoisted_24, (0,shared_esm_bundler/* toDisplayString */.zw)($props.totalSite2G), 1)
    ]),
    CardSiteComponentvue_type_template_id_55296419_hoisted_25,
    (0,runtime_core_esm_bundler/* createElementVNode */._)("span", CardSiteComponentvue_type_template_id_55296419_hoisted_26, [
      CardSiteComponentvue_type_template_id_55296419_hoisted_27,
      (0,runtime_core_esm_bundler/* createElementVNode */._)("a", CardSiteComponentvue_type_template_id_55296419_hoisted_28, (0,shared_esm_bundler/* toDisplayString */.zw)($props.percentageNeDown4G) + "%", 1)
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("span", CardSiteComponentvue_type_template_id_55296419_hoisted_29, [
      CardSiteComponentvue_type_template_id_55296419_hoisted_30,
      (0,runtime_core_esm_bundler/* createElementVNode */._)("a", CardSiteComponentvue_type_template_id_55296419_hoisted_31, (0,shared_esm_bundler/* toDisplayString */.zw)($props.neDown4G), 1)
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("span", CardSiteComponentvue_type_template_id_55296419_hoisted_32, [
      CardSiteComponentvue_type_template_id_55296419_hoisted_33,
      (0,runtime_core_esm_bundler/* createElementVNode */._)("a", CardSiteComponentvue_type_template_id_55296419_hoisted_34, (0,shared_esm_bundler/* toDisplayString */.zw)($props.siteImpacted4G), 1)
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("span", CardSiteComponentvue_type_template_id_55296419_hoisted_35, [
      CardSiteComponentvue_type_template_id_55296419_hoisted_36,
      (0,runtime_core_esm_bundler/* createElementVNode */._)("a", CardSiteComponentvue_type_template_id_55296419_hoisted_37, (0,shared_esm_bundler/* toDisplayString */.zw)($props.cellDown4G), 1)
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("span", CardSiteComponentvue_type_template_id_55296419_hoisted_38, [
      CardSiteComponentvue_type_template_id_55296419_hoisted_39,
      (0,runtime_core_esm_bundler/* createElementVNode */._)("a", CardSiteComponentvue_type_template_id_55296419_hoisted_40, (0,shared_esm_bundler/* toDisplayString */.zw)($props.totalSite4G), 1)
    ])
  ]))
}
;// CONCATENATED MODULE: ./src/components/CardSiteComponent.vue?vue&type=template&id=55296419

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/CardSiteComponent.vue?vue&type=script&lang=js




/* harmony default export */ const CardSiteComponentvue_type_script_lang_js = ({
    name: 'CardSiteComponent',
    props: {
        cardTitle: String,
        uniqueSiteDown: Number,
        percentNeDown2G: String,
        neDown2G: String,
        siteImpacted2G: Number,
        cellDown2G: Number,
        totalSite2G: Number,
        percentageNeDown4G: String,
        neDown4G: String,
        siteImpacted4G: Number,
        cellDown4G: Number,
        totalSite4G: Number,
        onClick: Function,
    },

    async mounted() {
        await spl.U.initCsrfToken();
    },
    methods: {
        handleClick() {
            // Trigger the function passed as prop
            if (typeof this.onClick === 'function') {
                this.onClick();
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/components/CardSiteComponent.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/CardSiteComponent.vue




;
const CardSiteComponent_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(CardSiteComponentvue_type_script_lang_js, [['render',CardSiteComponentvue_type_template_id_55296419_render]])

/* harmony default export */ const CardSiteComponent = (CardSiteComponent_exports_);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/sections/SiteStatisticCard.vue?vue&type=script&lang=js

// COMPONENT

// MODULE



/* harmony default export */ const SiteStatisticCardvue_type_script_lang_js = ({
    name: 'SiteStatisticCard',
    components: {
        CardSiteComponent: CardSiteComponent,
    },
    data() {
        return {
            siteStatsDataNational: null,
            SiteStatsDataRegion: null,

            uniqSdNational: 0,
            pct2gNeDownNational: 0,
            neDown2gNational: 0,
            siteImpacted2gNational: 0,
            cellDown2gNational: 0,
            total2gSiteNational: 0,
            pct4gNeDownNational: 0,
            neDown4gNational: 0,
            siteImpacted4gNational: 0,
            cellDown4gNational: 0,
            total4gSiteNational: 0,

            uniqSdSmtr: 0,
            pct2gNeDownSmtr: 0,
            neDown2gSmtr: 0,
            siteImpacted2gSmtr: 0,
            cellDown2gSmtr: 0,
            total2gSiteSmtr: 0,
            pct4gNeDownSmtr: 0,
            neDown4gSmtr: 0,
            siteImpacted4gSmtr: 0,
            cellDown4gSmtr: 0,
            total4gSiteSmtr: 0,

            uniqSdKsmp: 0,
            pct2gNeDownKsmp: 0,
            neDown2gKsmp: 0,
            siteImpacted2gKsmp: 0,
            cellDown2gKsmp: 0,
            total2gSiteKsmp: 0,
            pct4gNeDownKsmp: 0,
            neDown4gKsmp: 0,
            siteImpacted4gKsmp: 0,
            cellDown4gKsmp: 0,
            total4gSiteKsmp: 0,

            uniqSdJbro: 0,
            pct2gNeDownJbro: 0,
            neDown2gJbro: 0,
            siteImpacted2gJbro: 0,
            cellDown2gJbro: 0,
            total2gSiteJbro: 0,
            pct4gNeDownJbro: 0,
            neDown4gJbro: 0,
            siteImpacted4gJbro: 0,
            cellDown4gJbro: 0,
            total4gSiteJbro: 0,

            uniqSdEjbn: 0,
            pct2gNeDownEjbn: 0,
            neDown2gEjbn: 0,
            siteImpacted2gEjbn: 0,
            cellDown2gEjbn: 0,
            total2gSiteEjbn: 0,
            pct4gNeDownEjbn: 0,
            neDown4gEjbn: 0,
            siteImpacted4gEjbn: 0,
            cellDown4gEjbn: 0,
            total4gSiteEjbn: 0,

            uniqSdCjwj: 0,
            pct2gNeDownCjwj: 0,
            neDown2gCjwj: 0,
            siteImpacted2gCjwj: 0,
            cellDown2gCjwj: 0,
            total2gSiteCjwj: 0,
            pct4gNeDownCjwj: 0,
            neDown4gCjwj: 0,
            siteImpacted4gCjwj: 0,
            cellDown4gCjwj: 0,
            total4gSiteCjwj: 0,

            lastUpdatedSiteStatisticData: null,
            todayDateSiteStatisticData: null,
            titleChart: null,
            current_region_detail: null,
            datatablex: null,
            loading_table: false,

            // MODAL
            currentRegionDetail: null,
            titleModal: null,
            dataTable: null,

            // REFETCH
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,

            loadingModal: false,
        }
    },
    async mounted() {
        await spl.U.initCsrfToken();
        await this.getSiteStatsData();

        this.updateLastUpdatedTime();
        this.checkRefetchData();
    },
    methods: {
        async getSiteStatsData() {
            spl.MessageProcessor.process({
                serviceId: 'netdrone_maps_lebaran_get_region_site_down_count',
                data: {
                    hub_type: ["BIG HUB SITE", "MEDIUM HUB SITE", "SMALL HUB SITE"]
                },
                showErrorMessage: false,
                success: (json) => {
                    console.log(json, 'json count celldown site down stats region');
                    this.SiteStatsDataRegion = json.results;
                    console.log(this.SiteStatsDataRegion, 'json site stats');
                    for (var i = 0; i < this.SiteStatsDataRegion.length; i++) {
                        if (this.SiteStatsDataRegion[i].location == "SMTR") {
                            this.uniqSdSmtr = this.SiteStatsDataRegion[i].unique_sitedown;
                            this.pct2gNeDownSmtr = this.SiteStatsDataRegion[i].pct_down_2g.toFixed(3);
                            this.neDown2gSmtr = this.SiteStatsDataRegion[i].nedown_2g;
                            this.siteImpacted2gSmtr = this.SiteStatsDataRegion[i].site_impacted_2g;
                            this.cellDown2gSmtr = this.SiteStatsDataRegion[i].celldown_2g;
                            this.total2gSiteSmtr = this.SiteStatsDataRegion[i].total_2g_site;
                            this.pct4gNeDownSmtr = this.SiteStatsDataRegion[i].pct_down_4g.toFixed(3);
                            this.neDown4gSmtr = this.SiteStatsDataRegion[i].nedown_4g;
                            this.siteImpacted4gSmtr = this.SiteStatsDataRegion[i].site_impacted_4g;
                            this.cellDown4gSmtr = this.SiteStatsDataRegion[i].celldown_4g;
                            this.total4gSiteSmtr = this.SiteStatsDataRegion[i].total_4g_site;
                        } else if (this.SiteStatsDataRegion[i].location == "JBRO") {
                            this.uniqSdJbro = this.SiteStatsDataRegion[i].unique_sitedown;
                            this.pct2gNeDownJbro = this.SiteStatsDataRegion[i].pct_down_2g.toFixed(3);
                            this.neDown2gJbro = this.SiteStatsDataRegion[i].nedown_2g;
                            this.siteImpacted2gJbro = this.SiteStatsDataRegion[i].site_impacted_2g;
                            this.cellDown2gJbro = this.SiteStatsDataRegion[i].celldown_2g;
                            this.total2gSiteJbro = this.SiteStatsDataRegion[i].total_2g_site;
                            this.pct4gNeDownJbro = this.SiteStatsDataRegion[i].pct_down_4g.toFixed(3);
                            this.neDown4gJbro = this.SiteStatsDataRegion[i].nedown_4g;
                            this.siteImpacted4gJbro = this.SiteStatsDataRegion[i].site_impacted_4g;
                            this.cellDown4gJbro = this.SiteStatsDataRegion[i].celldown_4g;
                            this.total4gSiteJbro = this.SiteStatsDataRegion[i].total_4g_site;
                        } else if (this.SiteStatsDataRegion[i].location == "KSMP") {
                            this.uniqSdKsmp = this.SiteStatsDataRegion[i].unique_sitedown;
                            this.pct2gNeDownKsmp = this.SiteStatsDataRegion[i].pct_down_2g.toFixed(3);
                            this.neDown2gKsmp = this.SiteStatsDataRegion[i].nedown_2g;
                            this.siteImpacted2gKsmp = this.SiteStatsDataRegion[i].site_impacted_2g;
                            this.cellDown2gKsmp = this.SiteStatsDataRegion[i].celldown_2g;
                            this.total2gSiteKsmp = this.SiteStatsDataRegion[i].total_2g_site;
                            this.pct4gNeDownKsmp = this.SiteStatsDataRegion[i].pct_down_4g.toFixed(3);
                            this.neDown4gKsmp = this.SiteStatsDataRegion[i].nedown_4g;
                            this.siteImpacted4gKsmp = this.SiteStatsDataRegion[i].site_impacted_4g;
                            this.cellDown4gKsmp = this.SiteStatsDataRegion[i].celldown_4g;
                            this.total4gSiteKsmp = this.SiteStatsDataRegion[i].total_4g_site;
                        } else if (this.SiteStatsDataRegion[i].location == "CJWJ") {
                            this.uniqSdCjwj = this.SiteStatsDataRegion[i].unique_sitedown;
                            this.pct2gNeDownCjwj = this.SiteStatsDataRegion[i].pct_down_2g.toFixed(3);
                            this.neDown2gCjwj = this.SiteStatsDataRegion[i].nedown_2g;
                            this.siteImpacted2gCjwj = this.SiteStatsDataRegion[i].site_impacted_2g;
                            this.cellDown2gCjwj = this.SiteStatsDataRegion[i].celldown_2g;
                            this.total2gSiteCjwj = this.SiteStatsDataRegion[i].total_2g_site;
                            this.pct4gNeDownCjwj = this.SiteStatsDataRegion[i].pct_down_4g.toFixed(3);
                            this.neDown4gCjwj = this.SiteStatsDataRegion[i].nedown_4g;
                            this.siteImpacted4gCjwj = this.SiteStatsDataRegion[i].site_impacted_4g;
                            this.cellDown4gCjwj = this.SiteStatsDataRegion[i].celldown_4g;
                            this.total4gSiteCjwj = this.SiteStatsDataRegion[i].total_4g_site;
                        } else if (this.SiteStatsDataRegion[i].location == "EJBN") {
                            this.uniqSdEjbn = this.SiteStatsDataRegion[i].unique_sitedown;
                            this.pct2gNeDownEjbn = this.SiteStatsDataRegion[i].pct_down_2g.toFixed(3);
                            this.neDown2gEjbn = this.SiteStatsDataRegion[i].nedown_2g;
                            this.siteImpacted2gEjbn = this.SiteStatsDataRegion[i].site_impacted_2g;
                            this.cellDown2gEjbn = this.SiteStatsDataRegion[i].celldown_2g;
                            this.total2gSiteEjbn = this.SiteStatsDataRegion[i].total_2g_site;
                            this.pct4gNeDownEjbn = this.SiteStatsDataRegion[i].pct_down_4g.toFixed(3);
                            this.neDown4gEjbn = this.SiteStatsDataRegion[i].nedown_4g;
                            this.siteImpacted4gEjbn = this.SiteStatsDataRegion[i].site_impacted_4g;
                            this.cellDown4gEjbn = this.SiteStatsDataRegion[i].celldown_4g;
                            this.total4gSiteEjbn = this.SiteStatsDataRegion[i].total_4g_site;
                        } else if (this.SiteStatsDataRegion[i].location == "NATIONAL") {
                            this.uniqSdNational = this.SiteStatsDataRegion[i].unique_sitedown;
                            this.pct2gNeDownNational = this.SiteStatsDataRegion[i].pct_down_2g.toFixed(3);
                            this.neDown2gNational = this.SiteStatsDataRegion[i].nedown_2g;
                            this.siteImpacted2gNational = this.SiteStatsDataRegion[i].site_impacted_2g;
                            this.cellDown2gNational = this.SiteStatsDataRegion[i].celldown_2g;
                            this.total2gSiteNational = this.SiteStatsDataRegion[i].total_2g_site;
                            this.pct4gNeDownNational = this.SiteStatsDataRegion[i].pct_down_4g.toFixed(3);
                            this.neDown4gNational = this.SiteStatsDataRegion[i].nedown_4g;
                            this.siteImpacted4gNational = this.SiteStatsDataRegion[i].site_impacted_4g;
                            this.cellDown4gNational = this.SiteStatsDataRegion[i].celldown_4g;
                            this.total4gSiteNational = this.SiteStatsDataRegion[i].total_4g_site;
                        }
                    }
                },
                error: (error) => {
                    console.log(error, 'error site statistic national');
                }
            });

        },
        openTabExport() {
            window.open(
                "https://1057-sg.teleows.com/app/1057/spl/netdrone_maps_v3/netdrone_maps_lebaran/export_alarm.spl?regions=" +
                this.currentRegionDetail,
                "_blank"
            );
        },
        async showTableModal(title, region) {
            this.loadingModal = true;
            this.currentRegionDetail = region.replace("&", "%26");
            this.titleModal = title;
            this.dataTable = null;
            spl.MessageProcessor.process({
                serviceId: 'netdrone_maps_lebaran_get_site_statistic',
                data: {
                    region: region
                },
                showErrorMessage: false,
                success: (json) => {
                    this.loadingModal = false;
                    this.dataTable = json.results;
                    this.$refs.siteDataDetailButton.click();
                },
                error: (error) => {
                    console.log(error, 'error breakdown sitedown duration range');
                }
            });
        },

        updateLastUpdatedTime() {
            console.log("terpanggil");
            const now = new Date();
            const today = new Date();

            today.setHours(0, 0, 0, 0);

            const hours = now.getHours().toString().padStart(2, "0");
            let minutes = now.getMinutes();

            if (minutes >= 0 && minutes < 15) {
                minutes = 0;
            } else if (minutes >= 15 && minutes < 30) {
                minutes = 15;
            } else if (minutes >= 30 && minutes < 45) {
                minutes = 30;
            } else {
                minutes = 45;
            }

            this.todayDate = today.toLocaleDateString();
            console.log(hours, "hours", minutes, "minutes");
            this.lastUpdated = `${hours}:${minutes.toString().padStart(2, "0")}`;
            console.log(this.todayDate, "today date");
            console.log(this.lastUpdated, "today date");
        },
        async checkMinutes() {
            const now = new Date();
            const minutes = now.getMinutes();
            console.log(minutes, "minutes only");
            this.refetch = false;
            if ([2, 17, 32, 47].includes(minutes)) {
                this.updateLastUpdatedTime();
                this.refetch = true;
                await this.getSiteStatsData();
                console.log(this.refetch, "will be true");
                console.log("update refetch data");
            }
        },
        checkRefetchData() {
            this.fetching = setInterval(() => {
                console.log("check fetching refetch");
                this.checkMinutes();
                this.refetch = false;
                console.log(this.refetch, "will be false");
            }, 30 * 1000);
            console.log(this.fetching, "check refetch data");
        },
    }
});

;// CONCATENATED MODULE: ./src/views/sections/SiteStatisticCard.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/views/sections/SiteStatisticCard.vue




;
const SiteStatisticCard_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SiteStatisticCardvue_type_script_lang_js, [['render',SiteStatisticCardvue_type_template_id_15c668ae_render]])

/* harmony default export */ const SiteStatisticCard = (SiteStatisticCard_exports_);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/page/index.vue?vue&type=script&lang=js

// IMPORT MODULE




// IMPORT COMPONENT



// SECTIONS





var map;
var mapFMe;
var coverageCluster = null;
var coverageFme = null;
var coverageSite = null;
var siteSearchMarker = null;
var fmeSearchMarker = null;
var fmeSelectMarker = null;

/* harmony default export */ const pagevue_type_script_lang_js = ({
    name: "home",
    components: {
        ButtonSidebarClose: ButtonSidebarClose,
        ButtonSidebarIohHome: ButtonSidebarIohHome,

        DurationRangeCard: DurationRangeCard,
        OutagesCard: OutagesCard,
        RegionWiseCard: RegionWiseCard,
        SiteStatistic: SiteStatisticCard,
    },
    data() {
        return {
            // SITEDOWN MARKER
            allSiteCheck: false,
            oneHourCheck: true,
            fourHourCheck: true,
            eightHourCheck: false,
            twentyFourHourCheck: false,
            moreDayCheck: false,

            // SITE CATEGORY MARKER
            allCatSiteCheck: false,
            poiSiteCheckDown: false,
            poiSiteCheckUp: false,
            routeSiteCheckDown: false,
            routeSiteCheckUp: false,
            ctiSiteCheckDown: false,
            ctiSiteCheckUp: false,

            // FME MARKER
            allFmeCheck: false,
            fmeBusyCheck: false,
            fmeIdleCheck: false,

            selectedHubValues: ["BIG HUB SITE", "MEDIUM HUB SITE", "SMALL HUB SITE"],

            // SITE MARKER
            oneHourMarker: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "site"
            },
            fourHourMarker: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "site"
            },
            eightHourMarker: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "site"
            },
            twentyFourHourMarker: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "site"
            },
            moreDayMarker: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "site"
            },

            // CATEGORY MARKER
            ctiMarkerDown: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 4,
                panelType: "site"
            },
            poiMarkerDown: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 4,
                panelType: "site"
            },
            routeMarkerDown: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 4,
                panelType: "site"
            },
            ctiMarkerUp: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 4,
                panelType: "site"
            },
            poiMarkerUp: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 4,
                panelType: "site"
            },
            routeMarkerUp: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 4,
                panelType: "site"
            },

            propsSiteCategory: [],
            propsPassedCategory: [],

            // MC CLUSTER MARKEr
            mcClusterMarker: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "site"
            },

            // FME MARKER
            fmeLocationIdle: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "fme"
            },
            fmeLocationBusy: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "fme"
            },
            fmeSearchMarker: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "fme"
            },
            // REFETCH
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,

            // SITE DETAILS
            siteItem: null,
            siteAlarmList: null,
            ticketList: null,
            alarmIdList: null,

            // SITE DETAILS SEARCH
            siteItemSearch: {
                siteid: "",
                sitename: ""
            },
            siteAlarmListSearch: null,
            siteTicketListSearch: null,
            ticketListSearch: null,
            alarmIdListSearch: null,

            // FME DETAILS
            woListFme: null,
            fmeDetails: null,

            // FME DETAIL SEARCH
            woListFmeSearch: null,
            fmeDetailsSearch: null,

            // ETA DETAIL
            getSingleTicketDetail: null,
            getOriginData: { lat: 0, lng: 0 },
            getDestinationData: { lat: 0, lng: 0 },
            travelDistance: null,
            estimatedTime: null,
            timeInTraffic: null,

            getOriginDataFmeEta: { lat: 0, lng: 0 },
            getDestinationDataFmeEta: { lat: 0, lng: 0 },
            etaFullname: null,
            etaTaskId: null,
            etaUserId: null,
            travelDistanceEta: null,
            estimatedTimeEta: null,
            timeInTrafficEta: null,
            fmePositionData: null,

            // SEARCHING
            clusterSearch: "",
            clusterSearchResult: null,
            siteNameSearch: "",
            siteSearchResult: null,
            fmeNameSearch: "",
            fmeNameSearchResult: null,

            loading: false,
            loadingFilter: false,

            petalMap: null,

            markerCategory: [],

            fmeSearchPhoneNumber: "",
            fmePhoneNumber: "",
        };
    },
    async mounted() {
        await spl.U.initCsrfToken();
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
        $("#close-btn").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
        $("#close-sidebar-btn").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });

        await this.petalMapsInit();
        await this.fetchSiteData();
        this.updateLastUpdatedTime();
        this.checkRefetchData();
    },
    methods: {
        // EXPORT BY CATEGORY
        exportByCategory() {
            console.log('props category: ', this.propsSiteCategory);
            window.open(
                "https://1057-sg.teleows.com/app/1057/spl/netdrone_maps_v3/netdrone_maps_lebaran/export_alarm.spl?regions=national&category=" + this.propsPassedCategory,
                "_blank"
            );
        },
        // COPY TEXT
        copyFmeTaskId() {
            var copyText = document.getElementById("fme-detail-task-id");
            var textToCopy = copyText.textContent || copyText.innerText;

            navigator.clipboard.writeText(textToCopy).then(function () {
                alert(textToCopy + " Copied");
            }).catch(function (error) {
                console.error('Failed to copy: ', error);
            });
        },
        copyFmeTicketId() {
            var copyText = document.getElementById("fme-detail-ticket-id");
            var textToCopy = copyText.textContent || copyText.innerText;

            navigator.clipboard.writeText(textToCopy).then(function () {
                alert(textToCopy + " Copied");
            }).catch(function (error) {
                console.error('Failed to copy: ', error);
            });
        },

        copyFmeSearchTaskId() {
            var copyText = document.getElementById("fme-search-detail-task-id");
            var textToCopy = copyText.textContent || copyText.innerText;

            navigator.clipboard.writeText(textToCopy).then(function () {
                alert(textToCopy + " Copied");
            }).catch(function (error) {
                console.error('Failed to copy: ', error);
            });
        },
        copyFmeSearchTicketId() {
            var copyText = document.getElementById("fme-search-detail-ticket-id");
            var textToCopy = copyText.textContent || copyText.innerText;

            navigator.clipboard.writeText(textToCopy).then(function () {
                alert(textToCopy + " Copied");
            }).catch(function (error) {
                console.error('Failed to copy: ', error);
            });
        },

        copyTextSiteDetail() {
            var copyText = document.getElementById("site-detail-tt");
            var textToCopy = copyText.textContent || copyText.innerText;

            navigator.clipboard.writeText(textToCopy).then(function () {
                alert(textToCopy + " Copied");
            }).catch(function (error) {
                console.error('Failed to copy: ', error);
            });
        },

        copyTextSearchSiteDetail() {
            var copyText = document.getElementById("site-search-detail-tt");
            var textToCopy = copyText.textContent || copyText.innerText;

            navigator.clipboard.writeText(textToCopy).then(function () {
                alert(textToCopy + " Copied");
            }).catch(function (error) {
                console.error('Failed to copy: ', error);
            });
        },

        // INITIATE FETCH DATA
        async fetchSiteData() {
            try {
                this.loading = true;
                await this.getAllMarkers();
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
                this.updateLastUpdatedTime();
            }
        },
        // GET ALL MARKERS
        async getAllMarkers() {
            try {
                // if (this.poiSiteCheckDown == true) {
                //     this.hideLayer(this.poiMarkerDown);
                //     MessageProcessor.process({
                //         serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                //         data: {
                //             hub_type: this.selectedHubValues,
                //             status: "",
                //             category: "POI"
                //         },
                //         showErrorMessage: false,
                //         success: (json) => {
                //             this.poiMarkerDown.data = json.results;
                //             console.log(json, "json poi site up check");
                //             this.addLayer(this.poiMarkerDown);
                //         },
                //         error: (error) => {
                //             console.log(error, "error wo list");
                //         }
                //     });
                // }
                // if (this.routeSiteCheckDown == true) {
                //     this.hideLayer(this.routeMarkerDown);
                //     MessageProcessor.process({
                //         serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                //         data: {
                //             hub_type: this.selectedHubValues,
                //             status: "",
                //             category: "ROUTE"
                //         },
                //         showErrorMessage: false,
                //         success: (json) => {
                //             this.routeMarkerDown.data = json.results;
                //             console.log(json, "json poi site up check");
                //             this.addLayer(this.routeMarkerDown);
                //         },
                //         error: (error) => {
                //             console.log(error, "error wo list");
                //         }
                //     });
                // }
                if (this.oneHourCheck == true) {
                    this.hideLayer(this.oneHourMarker);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "1",
                            category: ""
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.oneHourMarker.data = json.results;
                            console.log(json, "json marker check 1 hour");
                            this.addLayer(this.oneHourMarker);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.fourHourCheck == true) {
                    this.hideLayer(this.fourHourMarker);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "1_4",
                            category: ""
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.fourHourMarker.data = json.results;
                            console.log(json, "json marker check 1-4 hour");
                            this.addLayer(this.fourHourMarker);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.eightHourCheck == true) {
                    this.hideLayer(this.eightHourMarker);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "4_8",
                            category: ""
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.eightHourMarker.data = json.results;
                            console.log(json, "json marker check 1 hour");
                            this.addLayer(this.eightHourMarker);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.twentyFourHourCheck == true) {
                    this.hideLayer(this.twentyFourHourMarker);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "8_24",
                            category: ""
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.twentyFourHourMarker.data = json.results;
                            console.log(json, "json marker check 1 hour");
                            this.addLayer(this.twentyFourHourMarker);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.moreDayCheck == true) {
                    this.hideLayer(this.moreDayMarker);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "m24",
                            category: ""
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.moreDayMarker.data = json.results;
                            console.log(json, "json marker check 1 hour");
                            this.addLayer(this.moreDayMarker);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
            } catch (error) {
                console.log(error);
            }
        },

        //CLEAR SEARCHING
        async clearSearchFme() {
            this.fmeNameSearch = "";
        },
        async clearSearchSite() {
            this.siteNameSearch = "";
        },
        async clearSearchCluster() {
            this.clusterSearch = "";
        },

        // SEARCHING
        async searchCluster() {
            var ref = this;
            ref.loading = true;
            try {
                // Assume you have replaced 'google.maps.LatLng' with 'H.geo.Point'
                var resultsx;
                spl.MessageProcessor.process({
                    serviceId: "netdrone_maps_lebaran_mc_cluster_list",
                    data: {
                        cluster: ref.clusterSearch
                    },
                    showErrorMessage: false,
                    success: (json) => {
                        console.log(json, "json search cluster");
                        resultsx = json.results;
                        ref.clusterSearchResult = resultsx;
                        if (resultsx.length != 0 && ref.clusterSearchResult != "") {
                            ref.loading = false;
                            ref.triggerMcClusterModal();
                            console.log(ref.clusterSearchResult, "resultsx cluster console");
                        } else {
                            ref.loading = false;
                            console.log("site lon lat not found!");
                            ref.$swal("Error", "MC Cluster Not Found", "Try to search with the correct MC Cluster");
                        }
                    },
                    error: (error) => {
                        ref.loading = false;
                        ref.$swal("Error", "MC Cluster Not Found", "Try to search with the correct MC Cluster");
                        // console.log(error, "error seach cluster");
                    }
                });
            } catch (e) {
                ref.loading = false;
                console.error(e);
            }
        },
        async searchMcClusterModal() {
            this.loading = true;
            try {
                // Assume you have replaced 'google.maps.LatLng' with 'H.geo.Point'
                var resultsx;
                spl.MessageProcessor.process({
                    serviceId: "netdrone_maps_lebaran_mc_cluster_list",
                    data: {
                        cluster: this.clusterSearch
                    },
                    showErrorMessage: false,
                    success: (json) => {
                        console.log(json, "json search cluster");
                        resultsx = json.results;
                        this.clusterSearchResult = resultsx;
                        if (resultsx.length != 0 && this.clusterSearchResult != "") {
                            this.loading = false;
                            console.log(this.clusterSearchResult, "resultsx cluster console");
                        } else {
                            this.loading = false;
                            console.log("site lon lat not found!");
                            this.$swal("Error", "MC Cluster Not Found", "Try to search with the correct MC Cluster");
                        }
                    },
                    error: (error) => {
                        this.loading = false;
                        this.$swal("Error", "MC Cluster Not Found", "Try to search with the correct MC Cluster");
                        // console.log(error, "error seach cluster");
                    }
                });
            } catch (e) {
                this.loading = false;
                console.error(e);
            }
        },
        async searchSiteName() {
            var ref = this;
            ref.loading = true;
            try {
                var resultsx;
                var wrapper;
                spl.MessageProcessor.process({
                    serviceId: "netdrone_maps_lebaran_get_site_name",
                    data: {
                        sitename: ref.siteNameSearch
                    },
                    showErrorMessage: false,
                    success: (json) => {
                        console.log(json, "search site name");
                        resultsx = json.results;
                        if (resultsx.length != 0 && ref.siteNameSearch != "") {
                            ref.siteSearchResult = resultsx;
                            ref.triggerSiteSearchModal();
                        } else {
                            console.log("site lon lat not found!");
                            ref.$swal("Error", "Site Name Not Found", "Try to search with the correct Site Name");
                        }
                        ref.loading = false;
                    },
                    error: (error) => {
                        ref.loading = false;
                        console.log(error, "error search site name");
                        ref.$swal("Error", "Site Name Not Found", "Try to search with the correct Site Name");
                    }
                });
            } catch (e) {
                ref.loading = false;
                console.error(e);
            }
        },
        async searchSiteNameModal() {
            this.loading = true;
            try {
                var resultsx;
                var wrapper;
                spl.MessageProcessor.process({
                    serviceId: "netdrone_maps_lebaran_get_site_name",
                    data: {
                        sitename: this.siteNameSearch
                    },
                    showErrorMessage: false,
                    success: (json) => {
                        console.log(json, "search site name");
                        resultsx = json.results;
                        if (resultsx.length != 0 && this.siteNameSearch != "") {
                            this.siteSearchResult = resultsx;
                        } else {
                            console.log("site lon lat not found!");
                            this.$swal("Error", "Site Name Not Found", "Try to search with the correct Site Name");
                        }
                        this.loading = false;
                    },
                    error: (error) => {
                        this.loading = false;
                        console.log(error, "error search site name");
                        this.$swal("Error", "Site Name Not Found", "Try to search with the correct Site Name");
                    }
                });
            } catch (e) {
                this.loading = false;
                console.error(e);
            }
        },
        async searchFmeNameModal() {
            this.loading = true;
            try {
                var resultsx;
                spl.MessageProcessor.process({
                    serviceId: "netdrone_maps_lebaran_get_fme_list",
                    data: {
                        username: this.fmeNameSearch,
                        status: "inprocess"
                    },
                    showErrorMessage: false,
                    success: (json) => {
                        console.log(json, "search FME name");
                        resultsx = json.results;
                        if (resultsx.length != 0 && this.fmeNameSearchResult != "") {
                            this.fmeNameSearchResult = resultsx;
                        } else {
                            console.log("FME NOT FOUND");
                            this.$swal("Error", "FME Name Not Found", "Try to search with the correct FME Name");
                        }
                        this.loading = false;
                    },
                    error: (error) => {
                        this.loading = false;
                        console.log(error, "error search FME name");
                        this.$swal("Error", "FME Name Not Found", "Try to search with the correct FME Name");
                    }
                });
            } catch (e) {
                this.loading = false;
                console.log(error, "error");
            }
        },
        async searchFmeName() {
            var ref = this;
            ref.loading = true;
            console.log(ref.loading, "loading");
            try {
                var resultsx;
                spl.MessageProcessor.process({
                    serviceId: "netdrone_maps_lebaran_get_fme_list",
                    data: {
                        username: ref.fmeNameSearch,
                        status: "inprocess"
                    },
                    showErrorMessage: false,
                    success: (json) => {
                        console.log(json, "search FME name");
                        resultsx = json.results;
                        if (resultsx.length != 0 && ref.fmeNameSearchResult != "") {
                            ref.fmeNameSearchResult = resultsx;
                            ref.triggerFmeSearchModal();
                        } else {
                            console.log("FME NOT FOUND");
                            ref.$swal("Error", "FME Name Not Found", "Try to search with the correct FME Name");
                        }
                        ref.loading = false;
                        console.log(ref.loading, "loading");
                    },
                    error: (error) => {
                        ref.loading = false;
                        console.log(ref.loading, "loading");
                        console.log(error, "error search FME name");
                        ref.$swal("Error", "FME Name Not Found", "Try to search with the correct FME Name");
                    }
                });
            } catch (e) {
                ref.loading = false;
                console.log(ref.loading, "loading");
                console.log(error, "error");
            }
            console.log(ref.loading, "loading");
        },

        // AFTER SEARCHING
        async siteSelectByID(resultLat, resultLng, src, siteid, sitename) {
            this.loading = true;
            this.siteItemSearch.siteid = siteid.toString();
            this.siteItemSearch.sitename = sitename.toString();
            if (resultLat !== "" && resultLng !== "") {
                var coord = { lat: parseFloat(resultLat), lng: parseFloat(resultLng) };
            }

            map.panTo(coord);
            map.setZoom(10);
            map.setCenter(coord);

            this.$refs.siteSearchDismiss.click();

            if (coverageSite != null) {
                coverageSite.setMap(null);
            }
            coverageSite = new HWMapJsSDK.HWCircle({
                map: map,
                center: coord, // LatLng object
                radius: 12000, // in meters
                fillColor: "rgba(237, 109, 0, 0.1)",
                strokeColor: "rgba(237, 109, 0, 0.8)",
                strokeWeight: 2
            });

            var iconStr = "";
            iconStr = src;

            if (siteSearchMarker != null) {
                (0,reactivity_esm_bundler/* toRaw */.IU)(siteSearchMarker).setMap(null);
            }

            siteSearchMarker = new HWMapJsSDK.HWMarker({
                map: map,
                position: coord,
                zIndex: 10,
                icon: {
                    scale: 0.07,
                    url: iconStr
                }
            });

            this.loading = false;

            siteSearchMarker.addListener("click", async () => {
                this.loading = true;
                console.log("masuk");
                var alarmListSearch = [];
                var alarmIdListSearch = "";
                spl.MessageProcessor.process({
                    serviceId: "netdrone_maps_lebaran_get_list_alarm_by_site",
                    data: {
                        siteid: siteid
                    },
                    showErrorMessage: false,
                    success: (json) => {
                        alarmListSearch = json.results;
                        console.log(alarmListSearch, 'alarm list search');
                        // SITE NAME GET FROM HERE site_name
                        for (var i = 0; i < alarmListSearch.length; i++) {
                            if (i != alarmListSearch.length - 1) {
                                alarmIdListSearch += "'" + alarmListSearch[i].alarmid + "',";
                            } else {
                                alarmIdListSearch += "'" + alarmListSearch[i].alarmid + "'";
                            }
                        }
                        console.log(alarmIdListSearch, 'alarm list search');
                        if (alarmIdListSearch == '' || alarmIdListSearch == null || alarmIdListSearch == undefined) {
                            this.loading = false;
                            this.triggerSiteSearchDetailModal();
                        } else {
                            var ticketListSearch = [];
                            spl.MessageProcessor.process({
                                serviceId: "netdrone_maps_lebaran_get_list_ticket",
                                data: {
                                    start: 0,
                                    limit: 3,
                                    siteid: siteid,
                                    alarmid: alarmIdListSearch
                                },
                                showErrorMessage: false,
                                success: (json) => {
                                    ticketListSearch = json.results;
                                    this.siteAlarmListSearch = alarmListSearch;
                                    for (let i = 0; i < this.siteAlarmListSearch.length; i++) {
                                        const timestamp = this.siteAlarmListSearch[i].lastoccurrence;
                                        const date = new Date(timestamp);
                                        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
                                        this.siteAlarmListSearch[i].lastoccurrence = formattedDate;
                                    }
                                    this.siteTicketListSearch = ticketListSearch;
                                    if (this.siteAlarmListSearch != null || this.siteTicketListSearch != null) {
                                        this.triggerSiteSearchDetailModal();
                                        this.loading = false;
                                    }
                                },
                                error: (error) => {
                                    this.loading = false;
                                    console.log(error, "error site down layer");
                                }
                            });
                        }
                    },
                    error: (error) => {
                        this.loading = false;
                        console.log(error, "json ALARM GET LIST");
                    }
                });
            });
        },

        async siteSelectInAlarm(siteid) {
            this.loading = true;
            spl.MessageProcessor.process({
                serviceId: "netdrone_maps_lebaran_get_site_by_id",
                data: {
                    site_id: siteid,
                },
                showErrorMessage: false,
                success: (json) => {
                    this.loading = false;

                    var res;
                    res = json.results;
                    if (res.latitude !== "" && res.longitude !== "") {
                        var coord = { lat: parseFloat(res.latitude), lng: parseFloat(res.longitude) };
                    }
                    map.panTo(coord);
                    map.setZoom(10);
                    map.setCenter(coord);

                    if (coverageSite != null) {
                        coverageSite.setMap(null);
                    }

                    coverageSite = new HWMapJsSDK.HWCircle({
                        map: map,
                        center: coord, // LatLng object
                        radius: 12000, // in meters
                        fillColor: "rgba(237, 109, 0, 0.1)",
                        strokeColor: "rgba(237, 109, 0, 0.8)",
                        strokeWeight: 2
                    });

                    var iconStr = "";
                    iconStr = res.src;

                    if (siteSearchMarker != null) {
                        (0,reactivity_esm_bundler/* toRaw */.IU)(siteSearchMarker).setMap(null);
                    }

                    siteSearchMarker = new HWMapJsSDK.HWMarker({
                        map: map,
                        position: coord,
                        zIndex: 10,
                        icon: {
                            scale: 0.07,
                            url: iconStr
                        }
                    });

                    siteSearchMarker.addListener("click", async () => {
                        this.loading = true;
                        console.log("masuk");
                        var alarmListSearch = [];
                        var alarmIdListSearch = "";
                        spl.MessageProcessor.process({
                            serviceId: "netdrone_maps_lebaran_get_list_alarm_by_site",
                            data: {
                                siteid: siteid
                            },
                            showErrorMessage: false,
                            success: (json) => {
                                alarmListSearch = json.results;
                                console.log(alarmListSearch, 'alarm list search');
                                // SITE NAME GET FROM HERE site_name
                                for (var i = 0; i < alarmListSearch.length; i++) {
                                    if (i != alarmListSearch.length - 1) {
                                        alarmIdListSearch += "'" + alarmListSearch[i].alarmid + "',";
                                    } else {
                                        alarmIdListSearch += "'" + alarmListSearch[i].alarmid + "'";
                                    }
                                }
                                console.log(alarmIdListSearch, 'alarm list search');
                                if (alarmIdListSearch == '' || alarmIdListSearch == null || alarmIdListSearch == undefined) {
                                    this.loading = false;
                                    this.triggerSiteSearchDetailModal();
                                } else {
                                    var ticketListSearch = [];
                                    spl.MessageProcessor.process({
                                        serviceId: "netdrone_maps_lebaran_get_list_ticket",
                                        data: {
                                            start: 0,
                                            limit: 3,
                                            siteid: siteid,
                                            alarmid: alarmIdListSearch
                                        },
                                        showErrorMessage: false,
                                        success: (json) => {
                                            ticketListSearch = json.results;
                                            this.siteAlarmListSearch = alarmListSearch;
                                            for (let i = 0; i < this.siteAlarmListSearch.length; i++) {
                                                const timestamp = this.siteAlarmListSearch[i].lastoccurrence;
                                                const date = new Date(timestamp);
                                                const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
                                                this.siteAlarmListSearch[i].lastoccurrence = formattedDate;
                                            }
                                            this.siteTicketListSearch = ticketListSearch;
                                            if (this.siteAlarmListSearch != null || this.siteTicketListSearch != null) {
                                                this.triggerSiteSearchDetailModal();
                                                this.loading = false;
                                            }
                                        },
                                        error: (error) => {
                                            this.loading = false;
                                            console.log(error, "error site down layer");
                                        }
                                    });
                                }
                            },
                            error: (error) => {
                                this.loading = false;
                                console.log(error, "json ALARM GET LIST");
                            }
                        });
                    });
                },
            });
        },

        async fmeSelectByID(resultLat, resultLng, src, userId) {
            this.loading = true;
            if (resultLat !== "" && resultLng !== "") {
                var coord = { lat: parseFloat(resultLat), lng: parseFloat(resultLng) };
            }

            map.panTo(coord);
            map.setZoom(10);
            map.setCenter(coord);

            this.$refs.fmeSearchDismiss.click();

            if (coverageFme != null) {
                coverageFme.setMap(null);
            }
            coverageFme = new HWMapJsSDK.HWCircle({
                map: map,
                center: coord, // LatLng object
                radius: 1, // in meters
                fillColor: "rgba(237, 109, 0, 0.1)",
                strokeColor: "rgba(237, 109, 0, 0.8)",
                strokeWeight: 2
            });

            var iconStr = "";
            iconStr = src;

            if (fmeSearchMarker != null) {
                (0,reactivity_esm_bundler/* toRaw */.IU)(fmeSearchMarker).setMap(null);
            }

            fmeSearchMarker = new HWMapJsSDK.HWMarker({
                map: map,
                position: coord,
                zIndex: 10,
                icon: {
                    scale: 0.9,
                    url: iconStr
                }
            });

            this.loading = false;

            var ref = this;
            fmeSearchMarker.addListener("click", async function (param) {
                ref.loading = true;
                var fmeDetailVar = {};
                var woListVar = {};
                spl.MessageProcessor.process({
                    serviceId: "netdrone_maps_lebaran_get_fme_basic_information",
                    data: {
                        user_id: userId
                    },
                    showErrorMessage: false,
                    success: (json) => {
                        fmeDetailVar = json.results;
                        console.log(fmeDetailVar, "FME DETAILS");
                        setTimeout(() => {
                            try {
                                spl.MessageProcessor.process({
                                    serviceId: "netdrone_maps_lebaran_get_task_work_list",
                                    data: {
                                        start: 0,
                                        limit: 1000,
                                        task_status: ['accepted', 'inprocess'],
                                        assign_to_fme_name: userId
                                    },
                                    showErrorMessage: false,
                                    success: (json) => {
                                        woListVar = json.results;
                                        console.log(woListVar, "WO LIST");
                                        if (fmeDetailVar != {} && woListVar != {}) {
                                            ref.triggerFmeSearchDetailModal(fmeDetailVar, woListVar);
                                        }
                                        ref.loading = false;
                                    },
                                    error: (error) => {
                                        ref.loading = false;
                                        console.log(error, "error wo list");
                                    }
                                });
                            } catch (error) {
                                ref.loading = false;
                                console.log(error, "error fme details");
                            }
                        }, 5000);
                    },
                    error: (error) => {
                        ref.loading = false;
                        console.log(error, "error fme details");
                    }
                });
            });
        },

        async mcSelectById(lat, lon, siteName) {
            this.$refs.mcClusterSearchDismiss.click();
            this.loading = true;

            var coord = { lat: parseFloat(1), lng: parseFloat(1) };
            if (lat !== "" && lon !== "") {
                coord = { lat: parseFloat(lat), lng: parseFloat(lon) };
                console.log(coord, 'lon lat mc select');
                // console.log(lon, 'longitude mc select');
            }
            map.panTo(coord);
            map.setZoom(10);

            this.hideLayer(this.oneHourMarker);
            this.hideLayer(this.fourHourMarker);
            this.hideLayer(this.eightHourMarker);
            this.hideLayer(this.twentyFourHourMarker);
            this.hideLayer(this.moreDayMarker);
            this.hideLayer(this.mcClusterMarker);

            spl.MessageProcessor.process({
                serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                data: {
                    hub_type: this.selectedHubValues,
                    status: "",
                    mc_cluster: siteName,
                },
                showErrorMessage: false,
                success: (json) => {
                    this.mcClusterMarker.data = json.results;
                    console.log(json, "mc cluster console");
                    this.addLayer(this.mcClusterMarker);
                    this.loading = false;
                },
                error: (error) => {
                    this.loading = false;
                    console.log(error, "error wo list");
                }
            });
        },

        async getFmeTicketDetail(taskId, phoneNumber) {
            this.loading = true;
            const ticketDetails = this.woListFme.find((item) => item.task_id === taskId);
            this.fmePhoneNumber = phoneNumber;
            if (ticketDetails) {
                this.getSingleTicketDetail = ticketDetails;
                this.getOriginData = { lat: ticketDetails.fme_latitude, lng: ticketDetails.fme_longitude };
                this.getDestinationData = { lat: ticketDetails.site_latitude, lng: ticketDetails.site_longitude };
            }
            await this.fmePetalMapsInit(this.getOriginData, this.getDestinationData);
            this.loading = false;
        },

        async getFmeEtaData(datax) {
            await this.$refs.etaDetailsData.click();
            this.loading = true;
            this.getOriginDataFmeEta = { lat: parseFloat(datax.fme_latitude), lng: parseFloat(datax.fme_longitude) };
            this.getDestinationDataFmeEta = { lat: parseFloat(datax.site_latitude), lng: parseFloat(datax.site_longitude) };

            await this.fmePetalMapsInitEtaData(this.getOriginDataFmeEta, this.getDestinationDataFmeEta);
            this.loading = false;
        },

        async getFmeSearchTicketDetail(taskId, phoneNumber) {
            this.loading = true;
            const ticketDetails = this.woListFmeSearch.find((item) => item.task_id === taskId);
            this.fmeSearchPhoneNumber = phoneNumber;
            if (ticketDetails) {
                this.getSingleTicketDetail = ticketDetails;
                this.getOriginData = { lat: parseFloat(ticketDetails.fme_latitude), lng: parseFloat(ticketDetails.fme_longitude) };
                this.getDestinationData = { lat: parseFloat(ticketDetails.site_latitude), lng: parseFloat(ticketDetails.site_longitude) };
            }
            await this.fmePetalMapsInit(this.getOriginData, this.getDestinationData);
            this.loading = false;
        },

        async getFmePosition(fmeUserName, taskId, fmeFullName) {
            this.loading = true;
            console.log(fmeUserName, 'user id')
            var resultsx;
            spl.MessageProcessor.process({
                serviceId: "netdrone_maps_lebaran_get_fme_position",
                data: {
                    username: fmeUserName,
                    task_id: taskId,
                },
                showErrorMessage: false,
                success: (json) => {
                    console.log(json, 'resultsx get fme position');
                    resultsx = json.results[0];
                    this.fmePositionData = resultsx;
                    console.log(this.fmePositionData, 'this fme position data');
                    this.etaFullname = fmeFullName;
                    this.etaTaskId = taskId;
                    this.etaUserId = fmeUserName;
                    this.getFmeEtaData(this.fmePositionData);
                    this.loading = false;
                },
                error: (error) => {
                    this.loading = false;
                    this.$swal("Error", error, "Try to search with the correct FME Name");
                }
            });
        },

        // HANDLE APPLY FILTER
        async handleApplyFilter() {
            try {
                this.loadingFilter = true;
                // SITE DURATION
                if (this.oneHourCheck == false) {
                    await this.hideLayer(this.oneHourMarker);
                }
                if (this.oneHourCheck == true) {
                    this.hideLayer(this.oneHourMarker);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "1",
                            category: ""
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.oneHourMarker.data = json.results;
                            console.log(json, "json marker check 1 hour");
                            this.addLayer(this.oneHourMarker);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.fourHourCheck == false) {
                    await this.hideLayer(this.fourHourMarker);
                }
                if (this.fourHourCheck == true) {
                    this.hideLayer(this.fourHourMarker);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "1_4",
                            category: ""
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.fourHourMarker.data = json.results;
                            console.log(json, "json marker check 1-4 hour");
                            this.addLayer(this.fourHourMarker);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.eightHourCheck == false) {
                    await this.hideLayer(this.eightHourMarker);
                }
                if (this.eightHourCheck == true) {
                    this.hideLayer(this.eightHourMarker);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "4_8",
                            category: ""
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.eightHourMarker.data = json.results;
                            console.log(json, "json marker check 1-4 hour");
                            this.addLayer(this.eightHourMarker);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.twentyFourHourCheck == false) {
                    await this.hideLayer(this.twentyFourHourMarker);
                }
                if (this.twentyFourHourCheck == true) {
                    this.hideLayer(this.twentyFourHourMarker);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "8_24",
                            category: ""
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.twentyFourHourMarker.data = json.results;
                            console.log(json, "json marker check 1-4 hour");
                            this.addLayer(this.twentyFourHourMarker);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.moreDayCheck == false) {
                    await this.hideLayer(this.moreDayMarker);
                }
                if (this.moreDayCheck == true) {
                    this.hideLayer(this.moreDayMarker);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "m24",
                            category: ""
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.moreDayMarker.data = json.results;
                            console.log(json, "json marker check 1-4 hour");
                            this.addLayer(this.moreDayMarker);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }

                // SITE CATEGORY
                if (this.poiSiteCheckDown == false) {
                    this.hideLayer(this.poiMarkerDown);
                }
                if (this.poiSiteCheckDown == true) {
                    this.hideLayer(this.poiMarkerDown);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            category: "POI"
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.poiMarkerDown.data = json.results;
                            console.log(json, "json poi site up check");
                            this.addLayer(this.poiMarkerDown);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.poiSiteCheckUp == false) {
                    this.hideLayer(this.poiMarkerUp);
                }
                if (this.poiSiteCheckUp == true) {
                    this.hideLayer(this.poiMarkerUp);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            category: "POI"
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.poiMarkerUp.data = json.site_up;
                            console.log(json, "json poi site up check");
                            this.addLayer(this.poiMarkerUp);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.routeSiteCheckDown == false) {
                    this.hideLayer(this.routeMarkerDown);
                }
                if (this.routeSiteCheckDown == true) {
                    this.hideLayer(this.routeMarkerDown);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            category: "ROUTE"
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.routeMarkerDown.data = json.results;
                            console.log(json, "Route Marker");
                            this.addLayer(this.routeMarkerDown);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.routeSiteCheckUp == false) {
                    this.hideLayer(this.routeMarkerUp);
                }
                if (this.routeSiteCheckUp == true) {
                    this.hideLayer(this.routeMarkerUp);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            category: "ROUTE"
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.routeMarkerUp.data = json.site_up;
                            console.log(json, "Route Marker");
                            this.addLayer(this.routeMarkerUp);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.ctiSiteCheckDown == false) {
                    this.hideLayer(this.ctiMarkerDown);
                }
                if (this.ctiSiteCheckDown == true) {
                    this.hideLayer(this.ctiMarkerDown);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            category: "CTI"
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.ctiMarkerDown.data = json.results;
                            console.log(json, "json marker check 1-4 hour");
                            this.addLayer(this.ctiMarkerDown);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.ctiSiteCheckUp == false) {
                    this.hideLayer(this.ctiMarkerUp);
                }
                if (this.ctiSiteCheckUp == true) {
                    this.hideLayer(this.ctiMarkerUp);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            category: "CTI"
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.ctiMarkerUp.data = json.site_up;
                            console.log(json, "json marker check 1-4 hour");
                            this.addLayer(this.ctiMarkerUp);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }

                if (this.poiSiteCheckDown || this.poiSiteCheckUp) {
                    if (Array.isArray(this.propsSiteCategory)) {
                        console.log(this.propsSiteCategory, 'check array poi');
                        // Remove 'POI' if it exists in the array
                        this.propsSiteCategory = this.propsSiteCategory.filter(item => item !== 'POI');
                        // Add 'POI' to the array if it's not already present
                        if (!this.propsSiteCategory.includes('POI')) {
                            this.propsSiteCategory.push('POI');
                            console.log(this.propsSiteCategory, 'push array poi');
                        }
                    }
                } else {
                    // If both poiSiteCheckDown and poiSiteCheckUp are false
                    if (Array.isArray(this.propsSiteCategory)) {
                        // Remove 'POI' from the array if it exists
                        this.propsSiteCategory = this.propsSiteCategory.filter(item => item !== 'POI');
                    }
                }

                if (this.routeSiteCheckDown || this.routeSiteCheckUp) {
                    if (Array.isArray(this.propsSiteCategory)) {
                        console.log(this.propsSiteCategory, 'check array ROUTE');
                        // Remove 'ROUTE' if it exists in the array
                        this.propsSiteCategory = this.propsSiteCategory.filter(item => item !== 'ROUTE');
                        // Add 'ROUTE' to the array if it's not already present
                        if (!this.propsSiteCategory.includes('ROUTE')) {
                            this.propsSiteCategory.push('ROUTE');
                            console.log(this.propsSiteCategory, 'push array ROUTE');
                        }
                    }
                } else {
                    // If both ROUTESiteCheckDown and ROUTESiteCheckUp are false
                    if (Array.isArray(this.propsSiteCategory)) {
                        // Remove 'ROUTE' from the array if it exists
                        this.propsSiteCategory = this.propsSiteCategory.filter(item => item !== 'ROUTE');
                    }
                }

                if (this.ctiSiteCheckDown || this.ctiSiteCheckUp) {
                    if (Array.isArray(this.propsSiteCategory)) {
                        console.log(this.propsSiteCategory, 'check array CTI');
                        // Remove 'CTI' if it exists in the array
                        this.propsSiteCategory = this.propsSiteCategory.filter(item => item !== 'CTI');
                        // Add 'CTI' to the array if it's not already present
                        if (!this.propsSiteCategory.includes('CTI')) {
                            this.propsSiteCategory.push('CTI');
                            console.log(this.propsSiteCategory, 'push array CTI');
                        }
                    }
                } else {
                    // If both CTISiteCheckDown and CTISiteCheckUp are false
                    if (Array.isArray(this.propsSiteCategory)) {
                        // Remove 'CTI' from the array if it exists
                        this.propsSiteCategory = this.propsSiteCategory.filter(item => item !== 'CTI');
                    }
                }

                // FME
                if (this.fmeIdleCheck == false) {
                    this.hideLayer(this.fmeLocationIdle);
                }
                if (this.fmeIdleCheck == true) {
                    this.hideLayer(this.fmeLocationIdle);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_fme_list",
                        data: {
                            status: "accepted"
                        },
                        success: (json) => {
                            this.fmeLocationIdle.data = json.results;
                            console.log(this.fmeLocationIdle, "fme idle");
                            this.addLayer(this.fmeLocationIdle);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.fmeBusyCheck == false) {
                    this.hideLayer(this.fmeLocationBusy);
                }
                if (this.fmeBusyCheck == true) {
                    console.log("masuk");
                    this.hideLayer(this.fmeLocationBusy);
                    spl.MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_fme_list",
                        data: {
                            status: "inprocess"
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.fmeLocationBusy.data = json.results;
                            console.log(this.fmeLocationBusy, "fme busy");
                            this.addLayer(this.fmeLocationBusy);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                setTimeout(() => {
                    this.loadingFilter = false;
                }, 10000);

                setTimeout(() => {
                    this.propsPassedCategory = this.propsSiteCategory;
                }, 3000);
            } catch (error) {
                console.log(error);
            }
        },
        // HANDLE CLEAR FILTER
        async handleClearFilter() {
            // CLEAR ALL MARKER
            this.allSiteCheck = false;
            this.oneHourCheck = false;
            this.fourHourCheck = false;
            this.eightHourCheck = false;
            this.twentyFourHourCheck = false;
            this.moreDayCheck = false;

            this.allCatSiteCheck = false;
            // this.poiSiteCheckDown = true;
            this.poiSiteCheckUp = false;
            // this.routeSiteCheckDown = true;
            this.routeSiteCheckUp = false;
            this.ctiSiteCheckDown = false;
            this.ctiSiteCheckUp = false;

            this.moreDayCheck = false;
            this.fmeBusyCheck = false;
            this.fmeIdleCheck = false;

            if (coverageSite != null) {
                coverageSite.setMap(null);
            }
            if (fmeSearchMarker != null) {
                (0,reactivity_esm_bundler/* toRaw */.IU)(fmeSearchMarker).setMap(null);
            }

            this.hideLayer(this.oneHourMarker);
            this.hideLayer(this.fourHourMarker);
            this.hideLayer(this.eightHourMarker);
            this.hideLayer(this.twentyFourHourMarker);
            this.hideLayer(this.moreDayMarker);

            this.hideLayer(this.poiMarkerDown);
            this.hideLayer(this.poiMarkerUp);
            this.hideLayer(this.routeMarkerDown);
            this.hideLayer(this.routeMarkerUp);
            this.hideLayer(this.ctiMarkerDown);
            this.hideLayer(this.ctiMarkerUp);


            if (siteSearchMarker != null) {
                (0,reactivity_esm_bundler/* toRaw */.IU)(siteSearchMarker).setMap(null);
            }


            if (fmeSelectMarker != null) {
                (0,reactivity_esm_bundler/* toRaw */.IU)(fmeSelectMarker).setMap(null);
            }

            if (coverageFme != null) {
                coverageFme.setMap(null);
            }

            this.hideLayer(this.fmeLocationBusy);
            this.hideLayer(this.fmeLocationIdle);
            this.hideLayer(this.mcClusterMarker);

            // THEN SET TO DEFAULT
            this.poiSiteCheckDown = true;
            this.routeSiteCheckDown = true;

            this.handleApplyFilter();
        },


        // FILTER CHECK SITES
        async checkSites(event, type) {
            const check = event.target.checked;
            if (check == true) {
                this.allCatSiteCheck = false;
                this.poiSiteCheckDown = false;
                this.poiSiteCheckUp = false;
                this.routeSiteCheckDown = false;
                this.routeSiteCheckUp = false;
                this.ctiSiteCheckDown = false;
                this.ctiSiteCheckUp = false;
            }
            switch (type) {
                case 'all':
                    this.allSiteCheck = check;
                    this.oneHourCheck = check;
                    this.fourHourCheck = check;
                    this.eightHourCheck = check;
                    this.twentyFourHourCheck = check;
                    this.moreDayCheck = check;
                    break;
                case '1hr':
                    this.oneHourCheck = check;
                    break;
                case '4hr':
                    this.fourHourCheck = check;
                    break;
                case '8hr':
                    this.eightHourCheck = check;
                    break;
                case '24hr':
                    this.twentyFourHourCheck = check;
                    break;
                case 'moreDay':
                    this.moreDayCheck = check;
                    break;
                default:
                    break;
            }
        },

        // FILTER CHECK SITE CATEGORY
        async checkSiteCategory(event, category) {
            const check = event.target.checked;
            if (check == true) {
                this.allSiteCheck = false;
                this.oneHourCheck = false;
                this.fourHourCheck = false;
                this.eightHourCheck = false;
                this.twentyFourHourCheck = false;
                this.moreDayCheck = false;
            }
            switch (category) {
                case 'all':
                    this.allCatSiteCheck = check;
                    this.poiSiteCheckDown = check;
                    this.poiSiteCheckUp = check;
                    this.routeSiteCheckDown = check;
                    this.routeSiteCheckUp = check;
                    this.ctiSiteCheckDown = check;
                    this.ctiSiteCheckUp = check;
                    break;
                case 'poiSiteCheckDown':
                    this.poiSiteCheckDown = check;
                    console.log(this.propsSiteCategory);
                    break;
                case 'poiSiteCheckUp':
                    this.poiSiteCheckUp = check;
                    break;
                case 'routeSiteCheckDown':
                    this.routeSiteCheckDown = check;
                    break;
                case 'routeSiteCheckUp':
                    this.routeSiteCheckUp = check;
                    break;
                case 'ctiSiteCheckDown':
                    this.ctiSiteCheckDown = check;
                    break;
                case 'ctiSiteCheckUp':
                    this.ctiSiteCheckUp = check;
                    break;
                default:
                    break;
            }
        },


        // FILTER CHECK FME
        async checkFmeAll(event) {
            var check = event.target.checked;
            if (check == false) {
                this.fmeBusyCheck = false;
                this.fmeIdleCheck = false;
            } else {
                this.fmeBusyCheck = true;
                this.fmeIdleCheck = true;
            }
        },
        async checkFmeBusy(event) {
            var check = event.target.checked;
            if (check == false) {
                this.fmeBusyCheck = false;
            } else {
                this.fmeBusyCheck = true;
            }
        },
        async checkFmeIdle(event) {
            var check = event.target.checked;
            if (check == false) {
                this.fmeIdleCheck = false;
            } else {
                this.fmeIdleCheck = true;
            }
        },

        // BACKGROUND FUNCTION
        addLayer(datax) {
            var ref = this;
            datax.data.forEach(async function (item) {
                console.log(item, 'item item item');
                let iconStr = item.src !== undefined ? item.src : item.url;
                let coord = { lat: parseFloat(1), lng: parseFloat(1) };

                if (item.lat !== "" && item.lon !== "") {
                    coord = { lat: parseFloat(item.lat), lng: parseFloat(item.lon) };
                }

                let MM = null;

                if (datax.panelType === "site") {
                    MM = new HWMapJsSDK.HWMarker({
                        map: map,
                        position: coord,
                        zIndex: 10,
                        icon: {
                            scale: 0.30,
                            url: iconStr
                        }
                    });
                }

                if (datax.panelType === "fme") {
                    MM = new HWMapJsSDK.HWMarker({
                        map: map,
                        position: coord,
                        zIndex: 10,
                        icon: {
                            scale: 0.5,
                            url: iconStr
                        }
                    });
                }

                datax.markers.push(MM);

                MM.addListener("click", async () => {
                    if (datax.panelType === "site") {
                        ref.loading = true;
                        var alarmList = [];
                        var alarmIdList = "";
                        map.panTo({ lat: parseFloat(item.lat), lng: parseFloat(item.lon) });
                        map.setZoom(12);
                        spl.MessageProcessor.process({
                            serviceId: "netdrone_maps_lebaran_get_list_alarm_by_site",
                            data: {
                                siteid: item.title
                            },
                            showErrorMessage: false,
                            success: (json) => {
                                alarmList = json.results;
                                // SITE NAME GET FROM HERE site_name
                                console.log(alarmList, "json ALARM GET LIST");
                                console.log(item.title, "item title2");
                                for (var i = 0; i < alarmList.length; i++) {
                                    if (i != alarmList.length - 1) {
                                        alarmIdList += "'" + alarmList[i].alarmid + "',";
                                    } else {
                                        alarmIdList += "'" + alarmList[i].alarmid + "'";
                                    }
                                }
                                console.log(alarmIdList, 'alarm id list');
                                var ticketList = [];
                                spl.MessageProcessor.process({
                                    serviceId: "netdrone_maps_lebaran_get_list_ticket",
                                    data: {
                                        start: 0,
                                        limit: 3,
                                        siteid: item.title,
                                        alarmid: alarmIdList
                                    },
                                    showErrorMessage: false,
                                    success: (json) => {
                                        console.log(item.title, "item title3");
                                        console.log(json, "json mentahan Site Down Layer");
                                        ticketList = json.results;
                                        console.log(ticketList, "json Site Down layer");
                                        ref.loading = false;
                                        ref.triggerSiteDetailModal(item, alarmList, ticketList);
                                    },
                                    error: (error) => {
                                        ref.loading = false;
                                        console.log(error, "error site down layer");
                                    }
                                });
                            },
                            error: (error) => {
                                ref.loading = false;
                                console.log(error, "json ALARM GET LIST");
                            }
                        });
                    }
                    if (datax.panelType === "fme") {
                        ref.loading = true;
                        var fmeDetails = {};
                        var woList = {};
                        map.panTo({ lat: parseFloat(item.lat), lng: parseFloat(item.lon) });
                        map.setZoom(12);
                        spl.MessageProcessor.process({
                            serviceId: "netdrone_maps_lebaran_get_fme_basic_information",
                            data: {
                                user_id: item.assign_to_fme_name
                            },
                            showErrorMessage: false,
                            success: (json) => {
                                fmeDetails = json.results;
                                console.log(fmeDetails, "FME DETAILS");
                                setTimeout(() => {
                                    try {
                                        spl.MessageProcessor.process({
                                            serviceId: "netdrone_maps_lebaran_get_task_work_list",
                                            data: {
                                                start: 0,
                                                limit: 1000,
                                                task_status: ['accepted', 'inprocess'],
                                                assign_to_fme_name: item.assign_to_fme_name
                                            },
                                            showErrorMessage: false,
                                            success: (json) => {
                                                woList = json.results;
                                                console.log(woList, "WO LIST");
                                                if (fmeDetails != {} && woList != {}) {
                                                    ref.loading = false;
                                                    ref.triggerFmeDetailModal(woList, fmeDetails);
                                                }
                                            },
                                            error: (error) => {
                                                ref.loading = false;
                                                console.log(error, "error wo list");
                                            }
                                        });
                                    } catch (error) {
                                        ref.loading = false;
                                        console.log(error, "error fme details");
                                    }
                                }, 5000);
                            },
                            error: (error) => {
                                ref.loading = false;
                                console.log(error, "error fme details");
                            }
                        });
                    }
                });
            });
        },

        hideLayer(layerObj) {
            if (layerObj.markers && layerObj.markers.length > 0) {
                layerObj.markers.map((marker) => (0,reactivity_esm_bundler/* toRaw */.IU)(marker).setMap(null));
            }
            layerObj.markers = [];
        },

        // MODAL TRIGGER
        async triggerMcClusterModal() {
            await this.$refs.mcClusterSearchButton.click();
        },
        async triggerSiteDetailModal(item, alarmList, ticketList) {
            this.siteAlarmList = alarmList;
            for (let i = 0; i < this.siteAlarmList.length; i++) {
                const timestamp = this.siteAlarmList[i].lastoccurrence;
                const date = new Date(timestamp);
                const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
                this.siteAlarmList[i].lastoccurrence = formattedDate;
            }
            this.siteTicketList = ticketList;
            console.log(this.siteTicketList, 'site ticket list');
            this.siteItem = item;
            console.log(item, 'item');
            await this.$refs.siteDetailButton.click();
        },
        async triggerSiteSearchDetailModal() {
            await this.$refs.siteSearchDetailButton.click();
        },
        async triggerFmeSearchDetailModal(fmeDetailVar, woListVar) {
            console.log(fmeDetailVar, "fme detail var");
            console.log(woListVar, "wo list var");
            this.fmeDetailsSearch = fmeDetailVar;
            this.woListFmeSearch = woListVar;
            await this.$refs.fmeSearchDetailButton.click();
        },
        async triggerFmeDetailModal(listWo, detailFme) {
            this.woListFme = listWo;
            this.fmeDetails = detailFme;
            console.log(this.fmeDetails, "fmeDetails");
            console.log(this.woListFme, "wo list fme");
            if (this.woListFme != null && this.fmeDetails != null) {
                await this.$refs.fmeDetailButton.click();
            }
        },
        async triggerSiteSearchModal() {
            await this.$refs.siteSearchButton.click();
        },
        async triggerFmeSearchModal() {
            await this.$refs.fmeSearchButton.click();
        },

        // REFETCH DATA QUARTER HOUR
        updateLastUpdatedTime() {
            console.log("terpanggil");
            const now = new Date();
            const today = new Date();

            today.setHours(0, 0, 0, 0);

            const hours = now.getHours().toString().padStart(2, "0");
            let minutes = now.getMinutes();

            if (minutes >= 0 && minutes < 15) {
                minutes = 0;
            } else if (minutes >= 15 && minutes < 30) {
                minutes = 15;
            } else if (minutes >= 30 && minutes < 45) {
                minutes = 30;
            } else {
                minutes = 45;
            }

            this.todayDate = today.toLocaleDateString();
            console.log(hours, "hours", minutes, "minutes");
            this.lastUpdated = `${hours}:${minutes.toString().padStart(2, "0")}`;
            console.log(this.todayDate, "today date");
            console.log(this.lastUpdated, "today date");
        },
        async checkMinutes() {
            const now = new Date();
            const minutes = now.getMinutes();
            console.log(minutes, "minutes only");
            this.refetch = false;
            if ([2, 17, 32, 47].includes(minutes)) {
                this.loading = true;
                this.updateLastUpdatedTime();
                this.refetch = true;

                this.hideLayer(this.oneHourMarker);
                this.hideLayer(this.fourHourMarker);
                this.hideLayer(this.eightHourMarker);
                this.hideLayer(this.twentyFourHourMarker);
                this.hideLayer(this.moreDayMarker);

                this.hideLayer(this.fmeLocationIdle);
                this.hideLayer(this.fmeLocationBusy);

                this.hideLayer(this.poiMarkerDown);
                this.hideLayer(this.poiMarkerUp);
                this.hideLayer(this.ctiMarkerDown);
                this.hideLayer(this.ctiMarkerUp);
                this.hideLayer(this.routeMarkerDown);
                this.hideLayer(this.routeMarkerUp);

                await this.handleApplyFilter();
                console.log(this.refetch, "will be true");
                console.log("update refetch data");
                this.loading = false;
            }
        },
        checkRefetchData() {
            this.fetching = setInterval(() => {
                console.log("check fetching refetch");
                this.checkMinutes();
                this.refetch = false;
                console.log(this.refetch, "will be false");
            }, 30 * 1000);
            console.log(this.fetching, "check refetch data");
        },

        // BACKGROUND PROCESS
        async petalMapsInit() {
            var mapOptions = {};
            // mapOptions.center = { lat: -0.2228782, lng: 127.832282 };
            mapOptions.center = { lat: 0.55942, lng: 125.348276 };
            mapOptions.zoom = 5.0;
            mapOptions.language = "ENG";
            mapOptions.sourceType = "raster";
            mapOptions.zoomControl = false;
            map = new HWMapJsSDK.HWMap(document.getElementById("map-google"), mapOptions);
            this.petalMap = map;
        },
        async fmePetalMapsInit(originData, destinationData) {
            var mapOptions = {};

            mapOptions.center = { lat: parseFloat(originData.lat), lng: parseFloat(originData.lng) };
            mapOptions.zoom = 10;
            mapOptions.language = "ENG";
            mapOptions.sourceType = "raster";

            let mapContainer = document.getElementById("site-map-petal-hw");

            if (mapContainer) {
                mapContainer.parentNode.removeChild(mapContainer);
            }

            // Create a new map container
            mapContainer = document.createElement("div");
            mapContainer.id = "site-map-petal-hw";
            mapContainer.classList.add("site-map-petal-hw");
            mapContainer.style.width = "100%";
            mapContainer.style.height = "500px";
            mapContainer.style.cursor = "pointer";
            mapContainer.style.backgroundColor = "whitesmoke";
            document.getElementById("petal-map-col").appendChild(mapContainer);

            let mapFme = new HWMapJsSDK.HWMap(mapContainer, mapOptions);
            let direction = new HWMapJsSDK.HWDirectionsService(mapFme);

            const request = {
                origin: originData,
                destination: destinationData
            };

            direction.routeDriving(request, (DirectionsResult, StatusCode) => {
                // Origin marker
                var result = DirectionsResult.routes[0].paths[0];
                this.travelDistance = result.distanceText;
                this.timeInTraffic = result.durationInTrafficText;
                this.estimatedTime = result.durationText;
                let originMarker = new HWMapJsSDK.HWMarker({
                    map: mapFme,
                    position: { lat: parseFloat(originData.lat), lng: parseFloat(originData.lng) },
                    zIndex: 999,
                    icon: {
                        scale: 0.30,
                        url: "https://1057-sg.teleows.com/adc-static/imagemgt/images/1057/netdrone_maps_v3/netdrone_maps_v3/sitedown_marker/fme.png?_v=standard_1707939751633?t=1707940456288"
                    }
                });

                let destinationMarker = new HWMapJsSDK.HWMarker({
                    map: mapFme,
                    position: { lat: parseFloat(destinationData.lat), lng: parseFloat(destinationData.lng) },
                    zIndex: 999,
                    icon: {
                        scale: 0.30,
                        url: "https://1057-sg.teleows.com/adc-static/imagemgt/images/1057/netdrone_maps_v3/netdrone_maps_v3/sitedown_marker/sitefme.png?_v=standard_1707939751633?t=1707940456288"
                    }
                });

                //draw direction
                var direction = new HWMapJsSDK.HWDirectionsRenderer();
                direction.setMap(mapFme);
                direction.setDirections(DirectionsResult, { visible: true });

                // originMarker.setMap(map);
                // destinationMarker.setMap(map);
            });
        },
        async fmePetalMapsInitEtaData(originData, destinationData) {
            var mapOptions = {};

            mapOptions.center = { lat: parseFloat(originData.lat), lng: parseFloat(originData.lng) };
            mapOptions.zoom = 10;
            mapOptions.language = "ENG";
            mapOptions.sourceType = "raster";

            let mapContainer = document.getElementById("site-map-petal-hw-eta-detail");

            if (mapContainer) {
                mapContainer.parentNode.removeChild(mapContainer);
            }

            // Create a new map container
            mapContainer = document.createElement("div");
            mapContainer.id = "site-map-petal-hw-eta-detail";
            mapContainer.classList.add("site-map-petal-hw-eta-detail");
            mapContainer.style.width = "100%";
            mapContainer.style.height = "500px";
            mapContainer.style.cursor = "pointer";
            mapContainer.style.backgroundColor = "whitesmoke";
            document.getElementById("petal-map-col-eta-detail").appendChild(mapContainer);

            let mapFme = new HWMapJsSDK.HWMap(mapContainer, mapOptions);
            let direction = new HWMapJsSDK.HWDirectionsService(mapFme);

            const request = {
                origin: originData,
                destination: destinationData
            };

            direction.routeDriving(request, (DirectionsResult, StatusCode) => {
                // Origin marker
                var result = DirectionsResult.routes[0].paths[0];
                this.travelDistanceEta = result.distanceText;
                this.timeInTrafficEta = result.durationInTrafficText;
                this.estimatedTimeEta = result.durationText;
                let originMarker = new HWMapJsSDK.HWMarker({
                    map: mapFme,
                    position: { lat: parseFloat(originData.lat), lng: parseFloat(originData.lng) },
                    zIndex: 999,
                    icon: {
                        scale: 0.30,
                        url: "https://1057-sg.teleows.com/adc-static/imagemgt/images/1057/netdrone_maps_v3/netdrone_maps_v3/sitedown_marker/fme.png?_v=standard_1707939751633?t=1707940456288"
                    }
                });

                let destinationMarker = new HWMapJsSDK.HWMarker({
                    map: mapFme,
                    position: { lat: parseFloat(destinationData.lat), lng: parseFloat(destinationData.lng) },
                    zIndex: 999,
                    icon: {
                        scale: 0.30,
                        url: "https://1057-sg.teleows.com/adc-static/imagemgt/images/1057/netdrone_maps_v3/netdrone_maps_v3/sitedown_marker/sitefme.png?_v=standard_1707939751633?t=1707940456288"
                    }
                });

                //draw direction
                var direction = new HWMapJsSDK.HWDirectionsRenderer();
                direction.setMap(mapFme);
                direction.setDirections(DirectionsResult, { visible: true });

                // originMarker.setMap(map);
                // destinationMarker.setMap(map);
            });
        }
    }
});

;// CONCATENATED MODULE: ./src/views/page/index.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/views/page/index.vue




;
const page_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(pagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const page = (page_exports_);
;// CONCATENATED MODULE: ./src/router/index.js



const router = (0,vue_router/* createRouter */.p7)({
  history: (0,vue_router/* createWebHashHistory */.r5)(),   // hash
  routes: [
    {
      path: "/",
      name: "home",
      component: page
    },
  ]
});

/* harmony default export */ const src_router = (router);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app/app.vue?vue&type=template&id=0ee6a303


function appvue_type_template_id_0ee6a303_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-view")

  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", null, [
    (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_view)
  ]))
}
;// CONCATENATED MODULE: ./src/views/getSession/session.js


async function getSessionData(splURL) {
  return new Promise((resolve, reject) => {
    var sessionData = {
      app_name: '',
      module_name: '',
      page_name: ''
    }

    var subString, arrayStr

    if (splURL.includes('/spl2/')) {
      subString = splURL.substr(splURL.indexOf('/spl2/'))
      arrayStr = subString.split('/')
      if (arrayStr.length > 0) {
        sessionData.app_name = arrayStr[2]
        sessionData.module_name = arrayStr[2]
        sessionData.page_name = arrayStr[3]
      }
    } else if (splURL.includes('/spl/')) {
      subString = splURL.substr(splURL.indexOf('/spl/') + 5, splURL.indexOf('.spl'))
      arrayStr = subString.split('/')
      if (arrayStr.length > 0) {
        sessionData.app_name = arrayStr[0]
        sessionData.module_name = arrayStr[0]
        sessionData.page_name = arrayStr[1]
      }
    } else if (splURL.includes('/spl-plus/')) {
      subString = splURL.substr(splURL.indexOf('/spl-plus/'))
      arrayStr = subString.split('/')
      if (arrayStr.length > 0) {
        sessionData.app_name = arrayStr[2]
        sessionData.module_name = arrayStr[3]
        sessionData.page_name = arrayStr[4]
      }
    } else if (splURL.includes('/procodeComp/')) {
      subString = splURL.substr(splURL.indexOf('/procodeComp/'))
      arrayStr = subString.split('/')
      if (arrayStr.length > 0) {
        sessionData.app_name = arrayStr[3]
        sessionData.module_name = arrayStr[4]
        sessionData.page_name = arrayStr.slice(5, 9).join('_')
      }
    }
    console.log(sessionData, 'sessionData');
    resolve(sessionData);
  });
}

// Function to process session data
function processSessionData(sessionData) {
  spl.MessageProcessor.process({
    serviceId: '/usage_app_log/usage_app_log/usage_app_log_session_create_submit',
    data: sessionData,
    async: false,
    success: function () {
      console.log('========== This session successfully updated')
      console.log('========== App name : ' + sessionData.app_name)
      console.log('========== Module name : ' + sessionData.module_name)
      console.log('========== Page name : ' + sessionData.page_name)
    }
  })
}

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app/app.vue?vue&type=script&lang=js




/* harmony default export */ const appvue_type_script_lang_js = ({
  data() {
    return {
      url: ''
    }
  },
  async mounted() {
    await spl.U.initCsrfToken();
    await this.getCurrentUrl();
    await this.fetchUserData();
  },
  methods: {
    async getCurrentUrl() {
      this.url = window.location.href;
    },
    async fetchUserData() {
      try {
        const sessionData = await getSessionData(this.url.toString());
        console.log('Session data:', sessionData);
        processSessionData(sessionData);
      } catch (error) {
        console.error('Error fetching session data:', error);
      }
    }

  }
});

;// CONCATENATED MODULE: ./src/app/app.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app/app.vue?vue&type=style&index=0&id=0ee6a303&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/app/app.vue?vue&type=style&index=0&id=0ee6a303&lang=css

;// CONCATENATED MODULE: ./src/app/app.vue




;


const app_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(appvue_type_script_lang_js, [['render',appvue_type_template_id_0ee6a303_render]])

/* harmony default export */ const app = (app_exports_);
;// CONCATENATED MODULE: ./src/directives/sample.js
function directiveSample() {
  // 此处按需要实现，不需要可删除
}

/* harmony default export */ const sample = ({
  bind: directiveSample,
  update: directiveSample
});

;// CONCATENATED MODULE: ./src/directives/index.js


function initDirectives(app) {
  app.directive("directive-sample", sample);
};
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/nav/index.vue?vue&type=template&id=87f38fe6&scoped=true

function navvue_type_template_id_87f38fe6_scoped_true_render(_ctx, _cache) {
  return null
}
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/nav/index.vue?vue&type=style&index=0&id=87f38fe6&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/nav/index.vue?vue&type=style&index=0&id=87f38fe6&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/components/nav/index.vue

const script = {}

;


const nav_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['render',navvue_type_template_id_87f38fe6_scoped_true_render],['__scopeId',"data-v-87f38fe6"]])

/* harmony default export */ const nav = (nav_exports_);
;// CONCATENATED MODULE: ./src/components/index.js


function initComponents(app) {
  app.component("CNav", nav);
}

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js + 5 modules
var vuex_esm_bundler = __webpack_require__(33907);
;// CONCATENATED MODULE: ./src/store/mutation-types.js
const AGE_INCREASE = "AGE_INCREASE";

;// CONCATENATED MODULE: ./src/store/actions.js


/* 增加年龄 */
const ageIncrease = function ({ commit }) {
  setTimeout(() => {
    commit(AGE_INCREASE);
  }, 3000);
};

;// CONCATENATED MODULE: ./src/store/getters.js
// 获取名字
const getters_name = (state) => state.name;

;// CONCATENATED MODULE: ./src/store/state.js
const state = {
  name: "test",
  age: 18
};

/* harmony default export */ const store_state = (state);

;// CONCATENATED MODULE: ./src/store/mutations.js


const mutations = {
  [AGE_INCREASE](state) {
    state.age++;
  }
};

/* harmony default export */ const store_mutations = (mutations);

;// CONCATENATED MODULE: ./src/store/index.js






const debug = "production" !== "production";

function initStore(app){
  const store = (0,vuex_esm_bundler/* createStore */.MT)({
    actions: actions_namespaceObject,
    getters: getters_namespaceObject,
    state: store_state,
    mutations: store_mutations,
    strict: debug,
    plugins: debug ? [(0,vuex_esm_bundler/* createLogger */.hu)()] : []
  });
  app.use(store);
}
// EXTERNAL MODULE: ./node_modules/vue-sweetalert2/dist/vue-sweetalert.umd.js
var vue_sweetalert_umd = __webpack_require__(53982);
var vue_sweetalert_umd_default = /*#__PURE__*/__webpack_require__.n(vue_sweetalert_umd);
;// CONCATENATED MODULE: ./src/app/index.js


// 只使用@adc/vigour-ui能力不用具体组件只需引入core.css即可。
// 否则按需引入 import "@adc/vigour-ui/lib/style/index.css";












// 加载ADC主题样式变量
spl.U.loadCurrentTheme().then(() => {
  // 加载自定义主题样式变量
  let theme = spl.U.getCurrentThemeName();
  if (theme && theme !== "light") {
    let id = "demo-theme-style";
    let styleTag = document.getElementById(id);
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.setAttribute("id", id);
      document.body.appendChild(styleTag);
    }
    styleTag.innerText = __webpack_require__(18049)(`./${theme}.css`);
  }
});

spl.U.initCsrfToken();
const i18n = spl.U.initI18n();

const app_app = (0,runtime_dom_esm_bundler/* createApp */.ri)(app);

const sweetAlertStyle = {
  confirmButtonColor: '#f25a66',
  cancelButtonColor: '#f25a66',
}

app_app.use(i18n)
  .use(src_router)
  .use((vue_sweetalert_umd_default()),sweetAlertStyle);

initComponents(app_app);
initDirectives(app_app);
initStore(app_app);

app_app.mount("#app");

/***/ }),

/***/ 18049:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./dark.css": [
		84323,
		323
	],
	"./default.css": [
		72658,
		658
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 18049;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 24654:
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "static/js/" + (chunkId === 619 ? "lang-es_LA-js" : chunkId) + "." + {"323":"af71d67f","619":"4c41dbbc","658":"f9a0b612"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "static/css/" + chunkId + "." + "8197c8d1" + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "netdrone_maps_lebaran:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			177: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"323":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			177: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknetdrone_maps_lebaran"] = self["webpackChunknetdrone_maps_lebaran"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], () => (__webpack_require__(18647)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;