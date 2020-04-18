(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ionicons'), require('ionicons/icons'), require('@ionic/core/loader'), require('@ionic/core'), require('vue'), require('vue-router')) :
    typeof define === 'function' && define.amd ? define(['exports', 'ionicons', 'ionicons/icons', '@ionic/core/loader', '@ionic/core', 'vue', 'vue-router'], factory) :
    (factory((global.IonicVue = {}),null,null,null,null,global.Vue,null));
}(this, (function (exports,ionicons,icons,loader,core,Vue,VueRouter) { 'use strict';

    Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;
    VueRouter = VueRouter && VueRouter.hasOwnProperty('default') ? VueRouter['default'] : VueRouter;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var OverlayBaseController = /** @class */ (function () {
        function OverlayBaseController(ctrl) {
            this.ctrl = ctrl;
        }
        OverlayBaseController.prototype.create = function (opts) {
            return proxyMethod(this.ctrl, 'create', opts);
        };
        OverlayBaseController.prototype.dismiss = function (data, role, id) {
            return proxyMethod(this.ctrl, 'dismiss', data, role, id);
        };
        OverlayBaseController.prototype.getTop = function () {
            return proxyMethod(this.ctrl, 'getTop');
        };
        return OverlayBaseController;
    }());
    function proxyMethod(ctrlName, methodName) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var controller = ensureElementInBody(ctrlName);
        return controller.componentOnReady()
            .then(function () { return controller[methodName].apply(controller, args); });
    }
    function ensureElementInBody(elementName) {
        var element = document.querySelector(elementName);
        if (!element) {
            element = document.createElement(elementName);
            document.body.appendChild(element);
        }
        return element;
    }

    var CTRL = 'ion-action-sheet-controller';
    var ActionSheetController = /** @class */ (function (_super) {
        __extends(ActionSheetController, _super);
        function ActionSheetController() {
            return _super.call(this, CTRL) || this;
        }
        return ActionSheetController;
    }(OverlayBaseController));

    var CTRL$1 = 'ion-alert-controller';
    var AlertController = /** @class */ (function (_super) {
        __extends(AlertController, _super);
        function AlertController() {
            return _super.call(this, CTRL$1) || this;
        }
        return AlertController;
    }(OverlayBaseController));

    var LoadingController = /** @class */ (function (_super) {
        __extends(LoadingController, _super);
        function LoadingController() {
            return _super.call(this, 'ion-loading-controller') || this;
        }
        return LoadingController;
    }(OverlayBaseController));

    var CTRL$2 = 'ion-menu-controller';
    var MenuController = /** @class */ (function () {
        function MenuController() {
        }
        /**
         * Programmatically open the Menu.
         * @param [menuId]  Optionally get the menu by its id, or side.
         * @return returns a promise when the menu is fully opened
         */
        MenuController.prototype.open = function (menuId) {
            return proxyMethod(CTRL$2, 'open', menuId);
        };
        /**
         * Programmatically close the Menu. If no `menuId` is given as the first
         * argument then it'll close any menu which is open. If a `menuId`
         * is given then it'll close that exact menu.
         * @param [menuId]  Optionally get the menu by its id, or side.
         * @return returns a promise when the menu is fully closed
         */
        MenuController.prototype.close = function (menuId) {
            return proxyMethod(CTRL$2, 'close', menuId);
        };
        /**
         * Toggle the menu. If it's closed, it will open, and if opened, it
         * will close.
         * @param [menuId]  Optionally get the menu by its id, or side.
         * @return returns a promise when the menu has been toggled
         */
        MenuController.prototype.toggle = function (menuId) {
            return proxyMethod(CTRL$2, 'toggle', menuId);
        };
        /**
         * Used to enable or disable a menu. For example, there could be multiple
         * left menus, but only one of them should be able to be opened at the same
         * time. If there are multiple menus on the same side, then enabling one menu
         * will also automatically disable all the others that are on the same side.
         * @param [menuId]  Optionally get the menu by its id, or side.
         * @return Returns the instance of the menu, which is useful for chaining.
         */
        MenuController.prototype.enable = function (shouldEnable, menuId) {
            return proxyMethod(CTRL$2, 'enable', shouldEnable, menuId);
        };
        /**
         * Used to enable or disable the ability to swipe open the menu.
         * @param shouldEnable  True if it should be swipe-able, false if not.
         * @param [menuId]  Optionally get the menu by its id, or side.
         * @return Returns the instance of the menu, which is useful for chaining.
         */
        MenuController.prototype.swipeEnable = function (shouldEnable, menuId) {
            return proxyMethod(CTRL$2, 'swipeEnable', shouldEnable, menuId);
        };
        /**
         * @param [menuId] Optionally get the menu by its id, or side.
         * @return Returns true if the specified menu is currently open, otherwise false.
         * If the menuId is not specified, it returns true if ANY menu is currenly open.
         */
        MenuController.prototype.isOpen = function (menuId) {
            return proxyMethod(CTRL$2, 'isOpen', menuId);
        };
        /**
         * @param [menuId]  Optionally get the menu by its id, or side.
         * @return Returns true if the menu is currently enabled, otherwise false.
         */
        MenuController.prototype.isEnabled = function (menuId) {
            return proxyMethod(CTRL$2, 'isEnabled', menuId);
        };
        /**
         * Used to get a menu instance. If a `menuId` is not provided then it'll
         * return the first menu found. If a `menuId` is `left` or `right`, then
         * it'll return the enabled menu on that side. Otherwise, if a `menuId` is
         * provided, then it'll try to find the menu using the menu's `id`
         * property. If a menu is not found then it'll return `null`.
         * @param [menuId]  Optionally get the menu by its id, or side.
         * @return Returns the instance of the menu if found, otherwise `null`.
         */
        MenuController.prototype.get = function (menuId) {
            return proxyMethod(CTRL$2, 'get', menuId);
        };
        /**
         * @return Returns the instance of the menu already opened, otherwise `null`.
         */
        MenuController.prototype.getOpen = function () {
            return proxyMethod(CTRL$2, 'getOpen');
        };
        /**
         * @return Returns an array of all menu instances.
         */
        MenuController.prototype.getMenus = function () {
            return proxyMethod(CTRL$2, 'getMenus');
        };
        return MenuController;
    }());

    var CTRL$3 = 'ion-modal-controller';
    var ModalController = /** @class */ (function (_super) {
        __extends(ModalController, _super);
        function ModalController(delegate) {
            var _this = _super.call(this, CTRL$3) || this;
            _this.delegate = delegate;
            return _this;
        }
        ModalController.prototype.create = function (opts) {
            return _super.prototype.create.call(this, __assign({}, opts, { delegate: this.delegate }));
        };
        return ModalController;
    }(OverlayBaseController));

    var CTRL$4 = 'ion-popover-controller';
    var PopoverController = /** @class */ (function (_super) {
        __extends(PopoverController, _super);
        function PopoverController(delegate) {
            var _this = _super.call(this, CTRL$4) || this;
            _this.delegate = delegate;
            return _this;
        }
        PopoverController.prototype.create = function (opts) {
            return _super.prototype.create.call(this, __assign({}, opts, { delegate: this.delegate }));
        };
        return PopoverController;
    }(OverlayBaseController));

    var ToastController = /** @class */ (function (_super) {
        __extends(ToastController, _super);
        function ToastController() {
            return _super.call(this, 'ion-toast-controller') || this;
        }
        return ToastController;
    }(OverlayBaseController));

    // Webpack import for ionicons
    function appInitialize(config) {
        var win = window;
        var Ionic = (win.Ionic = win.Ionic || {});
        Ionic.config = config;
        loader.defineCustomElements(window);
        ionicons.addIcons(icons.ICON_PATHS);
    }

    // Handle creation of sync and async components
    function createVueComponent(vue, component) {
        return Promise.resolve(typeof component === 'function' && component.cid === undefined
            ? component().then(function (cmp) { return vue.extend(isESModule(cmp) ? cmp.default : cmp); })
            : vue.extend(component));
    }
    var VueDelegate = /** @class */ (function () {
        function VueDelegate(vue) {
            this.vue = vue;
        }
        // Attach the passed Vue component to DOM
        VueDelegate.prototype.attachViewToDom = function (parentElement, component, opts, classes) {
            // Handle HTML elements
            if (isElement(component)) {
                // Add any classes to the element
                addClasses(component, classes);
                // Append the element to DOM
                parentElement.appendChild(component);
                bindLifecycleEvents(component, parentElement);
                return Promise.resolve(component);
            }
            // Get the Vue controller
            return createVueComponent(this.vue, component).then(function (Component) {
                var componentInstance = new Component(opts);
                componentInstance.$mount();
                // Add any classes to the Vue component's root element
                addClasses(componentInstance.$el, classes);
                // Append the Vue component to DOM
                parentElement.appendChild(componentInstance.$el);
                return componentInstance.$el;
            });
        };
        // Remove the earlier created Vue component from DOM
        VueDelegate.prototype.removeViewFromDom = function (_parentElement, childElement) {
            // Destroy the Vue component instance
            if (childElement.__vue__) {
                childElement.__vue__.$destroy();
            }
            return Promise.resolve();
        };
        return VueDelegate;
    }());
    var LIFECYCLES = [
        core.LIFECYCLE_WILL_ENTER,
        core.LIFECYCLE_DID_ENTER,
        core.LIFECYCLE_WILL_LEAVE,
        core.LIFECYCLE_DID_LEAVE,
        core.LIFECYCLE_WILL_UNLOAD
    ];
    function bindLifecycleEvents(instance, element) {
        LIFECYCLES.forEach(function (eventName) {
            element.addEventListener(eventName, function (ev) {
                if (typeof instance[eventName] === 'function') {
                    instance[eventName](ev.detail);
                }
            });
        });
    }
    // Check Symbol support
    var hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
    // Check if object is an ES module
    function isESModule(obj) {
        return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module');
    }
    // Check if value is an Element
    function isElement(el) {
        return typeof Element !== 'undefined' && el instanceof Element;
    }
    // Add an array of classes to an element
    function addClasses(element, classes) {
        if (classes === void 0) { classes = []; }
        for (var _i = 0, classes_1 = classes; _i < classes_1.length; _i++) {
            var cls = classes_1[_i];
            element.classList.add(cls);
        }
    }

    var tabBars = [];
    var cachedTabs = [];
    var IonTabs = {
        name: 'IonTabs',
        functional: true,
        render: function (h, _a) {
            var parent = _a.parent, data = _a.data, slots = _a.slots, listeners = _a.listeners;
            var renderQueue = [];
            var postRenderQueue = [];
            var route = parent.$route;
            var selectedTab = '';
            if (!parent.$router) {
                throw new Error('IonTabs requires an instance of either VueRouter or IonicVueRouter');
            }
            // Loop through all of the children in the default slot
            for (var i = 0; i < slots().default.length; i++) {
                var vnode = slots().default[i];
                // Not an ion-tab, push to render and post-render processing queues
                if (!vnode.tag || vnode.tag.match(/ion-tab$/) === null) {
                    renderQueue.push(vnode);
                    postRenderQueue[i] = vnode;
                    continue;
                }
                var tabName = matchRouteToTab(vnode, route);
                var tabIsCached = cachedTabs[i];
                // Landed on tab route
                // Cache the tab, push to render queue and continue iteration
                if (tabName) {
                    if (!tabIsCached) {
                        cachedTabs[i] = vnode;
                    }
                    selectedTab = tabName;
                    vnode.data.attrs.active = true;
                    renderQueue.push(vnode);
                    continue;
                }
                // If tab was previously cached, push to render queue but don't activate
                // Otherwise push an empty node
                renderQueue.push(tabIsCached ? vnode : h());
            }
            // Post processing after initial render
            // Required for tabs within Vue components or router view
            Vue.nextTick(function () {
                for (var i = 0; i < postRenderQueue.length; i++) {
                    var vnode = postRenderQueue[i];
                    if (vnode && vnode.elm && vnode.elm.nodeName === 'ION-TAB') {
                        var ionTab = vnode.elm;
                        var vnodeData = {
                            data: {
                                attrs: { tab: ionTab.getAttribute('tab'), routes: ionTab.getAttribute('route') },
                            },
                        };
                        var tabName = matchRouteToTab(vnodeData, route);
                        // Set tab active state
                        ionTab.active = !!tabName;
                        // Loop through all tab-bars and set active tab
                        if (tabName) {
                            for (var _i = 0, tabBars_1 = tabBars; _i < tabBars_1.length; _i++) {
                                var tabBar = tabBars_1[_i];
                                tabBar.elm.selectedTab = tabName;
                            }
                        }
                        cachedTabs[i] = vnode;
                    }
                }
                // Free tab-bars references
                tabBars.length = 0;
            });
            // Render
            return h('div', __assign({}, data, { style: hostStyles }), [
                parseSlot(slots().top, selectedTab, listeners),
                h('div', { class: 'tabs-inner', style: tabsInner }, renderQueue),
                parseSlot(slots().bottom, selectedTab, listeners),
            ]);
        }
    };
    // Search for ion-tab-bar in VNode array
    function parseSlot(slot, tab, listeners) {
        var vnodes = [];
        if (!slot) {
            return vnodes;
        }
        for (var _i = 0, slot_1 = slot; _i < slot_1.length; _i++) {
            var vnode = slot_1[_i];
            vnodes.push(vnode.tag && vnode.tag.match(/ion-tab-bar$/) ? parseTabBar(vnode, tab, listeners) : vnode);
        }
        return vnodes;
    }
    // Set selected tab attribute and click handlers
    function parseTabBar(vnode, tab, listeners) {
        var IonTabsWillChange = listeners.IonTabsWillChange, IonTabsDidChange = listeners.IonTabsDidChange;
        if (!vnode.data) {
            vnode.data = {
                attrs: {
                    'selected-tab': tab,
                },
            };
        }
        else if (!vnode.data.attrs) {
            vnode.data.attrs = { 'selected-tab': tab };
        }
        else {
            vnode.data.attrs['selected-tab'] = tab;
        }
        // Loop through ion-tab-buttons and assign click handlers
        // If custom click handler was provided, do not override it
        if (vnode.children) {
            var _loop_1 = function (child) {
                if (child.tag && child.tag === 'ion-tab-button') {
                    var clickHandler = function (e) {
                        var path = child.elm.tab || '/';
                        var route = hasDataAttr(child, 'to') ? child.data.attrs.to : { path: path };
                        e.preventDefault();
                        if (Array.isArray(IonTabsWillChange)) {
                            IonTabsWillChange.map(function (item) { return item(route); });
                        }
                        else if (IonTabsWillChange) {
                            IonTabsWillChange(route);
                        }
                        vnode.context.$router.push(route, function () {
                            if (Array.isArray(IonTabsDidChange)) {
                                IonTabsDidChange.map(function (item) { return item(route); });
                            }
                            else if (IonTabsDidChange) {
                                IonTabsDidChange(route);
                            }
                        });
                    };
                    if (!child.data || !child.data.on || !child.data.on.click) {
                        Object.assign(child.data, { on: { click: clickHandler } });
                    }
                    else if (child.data.on.click) {
                        // Always push our click handler to end of array
                        if (Array.isArray(child.data.on.click)) {
                            child.data.on.click.push(clickHandler);
                        }
                        else {
                            child.data.on.click = [child.data.on.click, clickHandler];
                        }
                    }
                }
            };
            for (var _i = 0, _a = vnode.children; _i < _a.length; _i++) {
                var child = _a[_i];
                _loop_1(child);
            }
        }
        // Store a reference to the matched ion-tab-bar
        tabBars.push(vnode);
        return vnode;
    }
    // Check if a VNode has a specific attribute set
    function hasDataAttr(vnode, attr) {
        return vnode.data && vnode.data.attrs && vnode.data.attrs[attr];
    }
    // Match tab to route through :routes property
    // Otherwise match by URL
    function matchRouteToTab(vnode, route) {
        if (!vnode.data || !vnode.data.attrs || !vnode.data.attrs.tab) {
            throw new Error('The tab attribute is required for an ion-tab element');
        }
        var tabName = vnode.data.attrs.tab;
        // Handle route matching by :routes attribute
        if (vnode.data.attrs.routes) {
            var routes = Array.isArray(vnode.data.attrs.routes)
                ? vnode.data.attrs.routes
                : vnode.data.attrs.routes.replace(' ', '').split(',');
            // Parse an array of possible matches
            for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
                var r = routes_1[_i];
                if (route.name === r) {
                    return tabName;
                }
            }
        }
        else {
            if (route.path.indexOf(tabName) > -1) {
                return tabName;
            }
        }
        return '';
    }
    // CSS for ion-tabs inner and outer elements
    var hostStyles = {
        display: 'flex',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        contain: 'layout size style',
    };
    var tabsInner = {
        position: 'relative',
        flex: 1,
        contain: 'layout size style',
    };

    function createApi(Vue$$1) {
        var cache = {};
        var vueDelegate = new VueDelegate(Vue$$1);
        return {
            get actionSheetController() {
                if (!cache.actionSheetController) {
                    cache.actionSheetController = new ActionSheetController();
                }
                return cache.actionSheetController;
            },
            get alertController() {
                if (!cache.alertController) {
                    cache.alertController = new AlertController();
                }
                return cache.alertController;
            },
            get loadingController() {
                if (!cache.loadingController) {
                    cache.loadingController = new LoadingController();
                }
                return cache.loadingController;
            },
            get menuController() {
                if (!cache.menuController) {
                    cache.menuController = new MenuController();
                }
                return cache.menuController;
            },
            get modalController() {
                if (!cache.modalController) {
                    cache.modalController = new ModalController(vueDelegate);
                }
                return cache.modalController;
            },
            get popoverController() {
                if (!cache.popoverController) {
                    cache.popoverController = new PopoverController(vueDelegate);
                }
                return cache.popoverController;
            },
            get toastController() {
                if (!cache.toastController) {
                    cache.toastController = new ToastController();
                }
                return cache.toastController;
            }
        };
    }
    var Vue$1;
    var install = function (_Vue, config) {
        if (Vue$1 && _Vue === Vue$1) {
            if (process.env.NODE_ENV !== 'production') {
                console.error('[Ionic] already installed. Vue.use(Ionic) should be called only once.');
            }
            return;
        }
        Vue$1 = _Vue;
        Vue$1.config.ignoredElements.push(/^ion-/);
        Vue$1.component('IonTabs', IonTabs);
        appInitialize(config);
        var api = createApi(Vue$1);
        Object.defineProperty(Vue$1.prototype, '$ionic', {
            get: function () { return api; }
        });
    };

    // Component entering the view
    var enteringEl;
    var IonVueRouter = {
        name: 'IonVueRouter',
        functional: true,
        props: {
            // Router view name
            name: { default: 'default', type: String },
            // Disable transitions
            animated: { default: true, type: Boolean },
        },
        render: function (h, _a) {
            var parent = _a.parent, props = _a.props, data = _a.data, children = _a.children;
            if (!parent.$router) {
                throw new Error('IonTabs requires an instance of either VueRouter or IonicVueRouter');
            }
            var ionRouterOutletData = __assign({}, data, { ref: 'ionRouterOutlet', on: { click: function (event) { return catchIonicGoBack(parent, event); } } });
            var routerViewData = { props: { name: props.name } };
            var transitionData = {
                props: { css: false, mode: 'in-out' },
                on: {
                    leave: function (el, done) {
                        leave(parent, props, el, done);
                    },
                    beforeEnter: beforeEnter,
                    enter: enter,
                    afterEnter: afterEnter,
                    beforeLeave: beforeLeave,
                    afterLeave: afterLeave,
                    enterCancelled: enterCancelled,
                    leaveCancelled: leaveCancelled,
                }
            };
            return h('ion-router-outlet', ionRouterOutletData, [
                h('transition', transitionData, [
                    h('router-view', routerViewData, children)
                ])
            ]);
        }
    };
    function catchIonicGoBack(parent, event) {
        // In case of nested ion-vue-routers run only once
        event.stopImmediatePropagation();
        if (!event.target)
            return;
        // We only care for the event coming from Ionic's back button
        var backButton = event.target.closest('ion-back-button');
        if (!backButton)
            return;
        var $router = parent.$router;
        var defaultHref;
        // Explicitly override router direction to always trigger a back transition
        $router.directionOverride = -1;
        // If we can go back - do so
        if ($router.canGoBack()) {
            event.preventDefault();
            $router.back();
            return;
        }
        // If there's a default fallback - use it
        defaultHref = backButton.defaultHref;
        if (undefined !== defaultHref) {
            event.preventDefault();
            $router.push(defaultHref);
        }
    }
    // Transition when we leave the route
    function leave(parent, props, el, done) {
        var promise = transition(parent, props, el);
        // Skip any transition if we don't get back a Promise
        if (!promise) {
            done();
            return;
        }
        // Perform navigation once the transition was finished
        parent.$router.transition = new Promise(function (resolve) {
            promise.then(function () {
                resolve();
                done();
            }).catch(console.error);
        });
    }
    // Trigger the ionic/core transitions
    function transition(parent, props, leavingEl) {
        var ionRouterOutlet = parent.$refs.ionRouterOutlet;
        // The Ionic framework didn't load - skip animations
        if (typeof ionRouterOutlet.componentOnReady === 'undefined') {
            return;
        }
        // Skip animations if there's no component to navigate to
        // or the current and the "to-be-rendered" components are the same
        if (!enteringEl || enteringEl === leavingEl) {
            return;
        }
        // Add the proper Ionic classes, important for smooth transitions
        enteringEl.classList.add('ion-page', 'ion-page-invisible');
        // Commit to the transition as soon as the Ionic Router Outlet is ready
        return ionRouterOutlet.componentOnReady().then(function (el) {
            return el.commit(enteringEl, leavingEl, {
                deepWait: true,
                duration: !props.animated ? 0 : undefined,
                direction: parent.$router.direction === 1 ? 'forward' : 'back',
                showGoBack: parent.$router.canGoBack(),
            });
        }).catch(console.error);
    }
    // Set the component to be rendered before we render the new route
    function beforeEnter(el) {
        enteringEl = el;
    }
    // Enter the new route
    function enter(_el, done) {
        done();
    }
    // Vue transition stub functions
    function afterEnter(_el) { }
    function afterLeave(_el) { }
    function beforeLeave(_el) { }
    function enterCancelled(_el) { }
    function leaveCancelled(_el) { }

    // Extend the official VueRouter
    var Router = /** @class */ (function (_super) {
        __extends(Router, _super);
        function Router(args) {
            if (args === void 0) { args = {}; }
            var _this = _super.call(this, args) || this;
            // The direction user navigates in
            _this.direction = args.direction || 1;
            // Override normal direction
            _this.directionOverride = null;
            // Number of views navigated
            _this.viewCount = args.viewCount || 0;
            // Stack of previous routes
            _this.prevRouteStack = [];
            // Extend the existing history object
            _this.extendHistory();
            // Wait for transition to finish before confirming navigation
            _this.extendTransitionConfirmation();
            // Listen to Ionic's back button event
            document.addEventListener('ionBackButton', function (e) {
                e.detail.register(0, function () { return _this.back(); });
            });
            return _this;
        }
        Router.prototype.extendTransitionConfirmation = function () {
            var _this = this;
            this.history._confirmTransition = this.history.confirmTransition;
            this.history.confirmTransition = function () {
                var opts = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    opts[_i] = arguments[_i];
                }
                return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!(undefined !== this.transition)) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.transition];
                            case 1:
                                _b.sent();
                                _b.label = 2;
                            case 2:
                                (_a = this.history)._confirmTransition.apply(_a, opts);
                                return [2 /*return*/];
                        }
                    });
                });
            };
        };
        Router.prototype.extendHistory = function () {
            var _this = this;
            // Save a reference to the original method
            this.history._updateRoute = this.history.updateRoute;
            this.history.updateRoute = function (nextRoute) {
                // Guesstimate the direction of the next route
                _this.direction = _this.guessDirection(nextRoute);
                // Override the direction
                if (_this.directionOverride) {
                    _this.direction = _this.directionOverride;
                }
                // Increment or decrement the view count
                _this.viewCount += _this.direction;
                // Call the original method
                _this.history._updateRoute(nextRoute);
                // Reset direction for overrides
                _this.directionOverride = null;
            };
        };
        Router.prototype.canGoBack = function () {
            // We can display the back button if we're not on /
            // or there were more than 1 views rendered
            return this.viewCount > 1 && this.currentRoute.fullPath.length > 1;
        };
        Router.prototype.guessDirection = function (nextRoute) {
            if (this.prevRouteStack.length !== 0) {
                var prevRoute = this.prevRouteStack[this.prevRouteStack.length - 1];
                // Last route is the same as the next one - go back
                // If we're going to / reset the stack otherwise pop a route
                if (prevRoute.fullPath === nextRoute.fullPath) {
                    if (prevRoute.fullPath.length === 1) {
                        this.prevRouteStack = [];
                    }
                    else {
                        this.prevRouteStack.pop();
                    }
                    return -1;
                }
            }
            // Forward movement, push next route to stack
            if (this.history.current.fullPath !== nextRoute.fullPath) {
                this.prevRouteStack.push(this.history.current);
            }
            return 1;
        };
        return Router;
    }(VueRouter));
    Router.install = function (Vue$$1) {
        // If already installed - skip
        if (Router.installed) {
            return;
        }
        Router.installed = true;
        // Install the official VueRouter
        VueRouter.install(Vue$$1);
        // Register the IonVueRouter component globally
        Vue$$1.component('IonVueRouter', IonVueRouter);
    };

    var index = {
        install: install,
        version: '__VERSION__'
    };

    exports.default = index;
    exports.IonicVueRouter = Router;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ionic-vue.js.map
