/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ChatButton/ChatButton.js":
/*!*********************************************!*\
  !*** ./components/ChatButton/ChatButton.js ***!
  \*********************************************/
/*! exports provided: ChatButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatButton\", function() { return ChatButton; });\nvar ChatButton = function ChatButton() {\n  var createBtn = document.createElement('button');\n  createBtn.classList.add('createChatBtn');\n  createBtn.innerHTML = \"\\n      <span class=\\\"material-symbols-rounded\\\"> add </span>\\n      <span class=\\\"create-btn-text\\\">\\u0421\\u043E\\u0437\\u0434\\u0430\\u0442\\u044C \\u0447\\u0430\\u0442</span>\\n  \";\n  return createBtn;\n};\n\n//# sourceURL=webpack:///./components/ChatButton/ChatButton.js?");

/***/ }),

/***/ "./components/ChatComponent/ChatComponent.js":
/*!***************************************************!*\
  !*** ./components/ChatComponent/ChatComponent.js ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatComponent\", function() { return ChatComponent; });\nvar ChatComponent = function ChatComponent() {\n  var chat = document.createElement('main');\n  chat.classList.add('chat-container');\n  chat.innerHTML = \"\\n      <ul class=\\\"messages\\\"></ul>\\n  \";\n  return chat;\n};\n\n//# sourceURL=webpack:///./components/ChatComponent/ChatComponent.js?");

/***/ }),

/***/ "./components/ChatInputForm/ChatInputForm.js":
/*!***************************************************!*\
  !*** ./components/ChatInputForm/ChatInputForm.js ***!
  \***************************************************/
/*! exports provided: ChatInputForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatInputForm\", function() { return ChatInputForm; });\nvar ChatInputForm = function ChatInputForm() {\n  var footer = document.createElement('footer');\n  footer.innerHTML = \"\\n      <form class=\\\"form\\\" action=\\\"/\\\">\\n          <button type=\\\"submit\\\" class=\\\"icon-button file\\\">\\n              <span class=\\\"material-symbols-rounded\\\"> attachment </span>\\n          </button>\\n          <input class=\\\"form-input\\\" name=\\\"message-text\\\" placeholder=\\\"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0441\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u0435\\\" type=\\\"text\\\" autocomplete=\\\"off\\\" />\\n          <button type=\\\"submit\\\" class=\\\"send-button\\\">\\n              <span class=\\\"material-symbols-rounded\\\"> send </span>\\n          </button>\\n      </form>\\n      <button class=\\\"scroll-down-button\\\">\\n          <span class=\\\"material-symbols-rounded\\\"> keyboard_arrow_down </span>\\n      </button>\\n  \";\n  return footer;\n};\n\n//# sourceURL=webpack:///./components/ChatInputForm/ChatInputForm.js?");

/***/ }),

/***/ "./components/ChatList/ChatList.js":
/*!*****************************************!*\
  !*** ./components/ChatList/ChatList.js ***!
  \*****************************************/
/*! exports provided: ChatList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatList\", function() { return ChatList; });\nvar ChatList = function ChatList(chatListContainer, chats) {\n  var chat = document.createElement('main');\n  chat.classList.add('chats-container');\n  var ul = document.createElement('ul');\n  ul.classList.add('chats');\n  chat.appendChild(ul);\n  return chat;\n};\n\n//# sourceURL=webpack:///./components/ChatList/ChatList.js?");

/***/ }),

/***/ "./components/Header/ChatHeader.js":
/*!*****************************************!*\
  !*** ./components/Header/ChatHeader.js ***!
  \*****************************************/
/*! exports provided: ChatHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatHeader\", function() { return ChatHeader; });\n/* harmony import */ var _mocks_usersList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mocks/usersList */ \"./mocks/usersList.js\");\n\nvar ChatHeader = function ChatHeader(chatId) {\n  var _users$find = _mocks_usersList__WEBPACK_IMPORTED_MODULE_0__[\"users\"].find(function (user) {\n      return user.id == +chatId;\n    }),\n    name = _users$find.name,\n    avatar = _users$find.avatar;\n  return \"<div class=\\\"leftside\\\">\\n          <button class=\\\"icon-button back\\\" id=\\\"btn-back-header\\\">\\n              <span class=\\\"material-symbols-rounded\\\"> arrow_back_ios_new </span>\\n          </button>\\n          <div class=\\\"chat-header\\\">\\n              <div class=\\\"photo\\\">\\n                  <img class=\\\"photo\\\" src=\".concat(avatar, \" alt=\\\"person photo\\\" />\\n              </div>\\n              <div class=\\\"nameAndStatus\\\">\\n                  <div class=\\\"name\\\">\").concat(name, \"</div>\\n                  <div class=\\\"online\\\">online</div>\\n              </div>\\n          </div>\\n      </div>\\n      <div class=\\\"rightside-buttons\\\">\\n          <button class=\\\"icon-button search\\\">\\n              <span class=\\\"material-symbols-rounded\\\"> search </span>\\n          </button>\\n          <button class=\\\"icon-button more\\\">\\n              <span class=\\\"material-symbols-rounded\\\"> more_vert </span>\\n          </button>\\n      </div>\");\n};\n\n//# sourceURL=webpack:///./components/Header/ChatHeader.js?");

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/navigation */ \"./utils/navigation.js\");\n/* harmony import */ var _ChatHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatHeader */ \"./components/Header/ChatHeader.js\");\n/* harmony import */ var _MessengerHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessengerHeader */ \"./components/Header/MessengerHeader.js\");\n\n\n\nvar Header = function Header(type, chatId) {\n  var header = document.createElement('header');\n  if (type === 'chat') {\n    header.innerHTML = Object(_ChatHeader__WEBPACK_IMPORTED_MODULE_1__[\"ChatHeader\"])(chatId);\n    return header;\n  }\n  header.innerHTML = Object(_MessengerHeader__WEBPACK_IMPORTED_MODULE_2__[\"MessengerHeader\"])();\n  return header;\n};\n\n//# sourceURL=webpack:///./components/Header/Header.js?");

/***/ }),

/***/ "./components/Header/MessengerHeader.js":
/*!**********************************************!*\
  !*** ./components/Header/MessengerHeader.js ***!
  \**********************************************/
/*! exports provided: MessengerHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessengerHeader\", function() { return MessengerHeader; });\nvar MessengerHeader = function MessengerHeader() {\n  return \"<div class=\\\"leftside\\\">\\n          <button class=\\\"icon-button back\\\" id=\\\"btn-back-header\\\">\\n              <span class=\\\"material-symbols-rounded\\\"> menu </span>\\n          </button>\\n          <div class=\\\"chat-header\\\">\\n              <div class=\\\"nameAndStatus\\\">\\n                  <div class=\\\"name\\\">Messenger</div>\\n              </div>\\n          </div>\\n      </div>\\n      <div class=\\\"rightside-buttons\\\">\\n          <input type=\\\"text\\\" id=\\\"searchInput\\\" class=\\\"search-input\\\" placeholder=\\\"Search chat...\\\" autocomplete=\\\"off\\\"/>\\n          <button class=\\\"icon-button search\\\">\\n              <span class=\\\"material-symbols-rounded\\\" id=\\\"searchBtn\\\"> search </span>\\n          </button>\\n      </div>\";\n};\n\n//# sourceURL=webpack:///./components/Header/MessengerHeader.js?");

/***/ }),

/***/ "./components/Modal/Modal.js":
/*!***********************************!*\
  !*** ./components/Modal/Modal.js ***!
  \***********************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\n/* harmony import */ var _utils_createNewChat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/createNewChat */ \"./utils/createNewChat.js\");\n\nvar Modal = function Modal() {\n  var openModalBtn = document.querySelector('.createChatBtn');\n  var closeModalBtn = document.getElementById('closeModal');\n  var createChatBtn = document.getElementById('createChat');\n  openModalBtn.addEventListener('click', _utils_createNewChat__WEBPACK_IMPORTED_MODULE_0__[\"openModal\"]);\n  closeModalBtn.addEventListener('click', _utils_createNewChat__WEBPACK_IMPORTED_MODULE_0__[\"closeModal\"]);\n  window.addEventListener('click', function (event) {\n    return Object(_utils_createNewChat__WEBPACK_IMPORTED_MODULE_0__[\"closeModalOnBlur\"])(event);\n  });\n  createChatBtn.addEventListener('click', _utils_createNewChat__WEBPACK_IMPORTED_MODULE_0__[\"createChat\"]);\n};\n\n//# sourceURL=webpack:///./components/Modal/Modal.js?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/navigation */ \"./utils/navigation.js\");\n\n\nwindow.addEventListener('popstate', _utils_navigation__WEBPACK_IMPORTED_MODULE_1__[\"handleRouteChange\"]);\nwindow.addEventListener('load', _utils_navigation__WEBPACK_IMPORTED_MODULE_1__[\"handleRouteChange\"]);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./mocks/chatListMock.js":
/*!*******************************!*\
  !*** ./mocks/chatListMock.js ***!
  \*******************************/
/*! exports provided: chatListMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chatListMock\", function() { return chatListMock; });\nvar chatListMock = [{\n  id: 1,\n  avatar: 'https://www.eg.ru/wp-content/uploads/2019/08/stuart-pre025316.jpg',\n  name: 'Bella Swan',\n  lastMessage: 'Эдвард мой герой!'\n}, {\n  id: 2,\n  avatar: 'https://news.store.rambler.ru/img/0639ea34a7adc115383524c27ca710c5?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen',\n  name: 'Edward Cullen',\n  lastMessage: 'Белла, я люблю тебя'\n}, {\n  id: 3,\n  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyI40KHxACHTat0jH4MIk4h2-1h88nYYOiYg&s',\n  name: 'Jacob Black',\n  lastMessage: 'ребята, можно я уже пойду'\n}];\n\n//# sourceURL=webpack:///./mocks/chatListMock.js?");

/***/ }),

/***/ "./mocks/usersList.js":
/*!****************************!*\
  !*** ./mocks/usersList.js ***!
  \****************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"users\", function() { return users; });\nvar users = [{\n  id: 1,\n  name: 'Bella Swan',\n  avatar: 'https://www.eg.ru/wp-content/uploads/2019/08/stuart-pre025316.jpg'\n}, {\n  id: 2,\n  name: 'Edward Cullen',\n  avatar: 'https://news.store.rambler.ru/img/0639ea34a7adc115383524c27ca710c5?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen'\n}, {\n  id: 3,\n  name: 'Jacob Black',\n  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyI40KHxACHTat0jH4MIk4h2-1h88nYYOiYg&s'\n}, {\n  id: 4,\n  name: 'Alice Cullen',\n  avatar: 'https://eachpage.org/wp-content/uploads/2021/10/alice-cullen-movies.jpg?w=1000'\n}, {\n  id: 5,\n  name: 'Carlisle Cullen',\n  avatar: 'https://i.redd.it/i-love-carlisle-cullen-is-sweet-calm-he-has-wisdom-what-do-v0-15yxoil18d0d1.jpg?width=675&format=pjpg&auto=webp&s=581306adaa159de3b1eab6e5454c5b28c3c8e432'\n}];\n\n//# sourceURL=webpack:///./mocks/usersList.js?");

/***/ }),

/***/ "./pages/ChatListPage/ChatListPage.js":
/*!********************************************!*\
  !*** ./pages/ChatListPage/ChatListPage.js ***!
  \********************************************/
/*! exports provided: ChatListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatListPage\", function() { return ChatListPage; });\n/* harmony import */ var _components_ChatList_ChatList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ChatList/ChatList */ \"./components/ChatList/ChatList.js\");\n/* harmony import */ var _components_ChatButton_ChatButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ChatButton/ChatButton */ \"./components/ChatButton/ChatButton.js\");\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header/Header */ \"./components/Header/Header.js\");\n/* harmony import */ var _utils_chatListUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/chatListUtils */ \"./utils/chatListUtils.js\");\n/* harmony import */ var _utils_workWithLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/workWithLocalStorage */ \"./utils/workWithLocalStorage.js\");\n/* harmony import */ var _mocks_chatListMock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mocks/chatListMock */ \"./mocks/chatListMock.js\");\n/* harmony import */ var _utils_searchChat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/searchChat */ \"./utils/searchChat.js\");\n\n\n\n\n\n\n\nvar ChatListPage = function ChatListPage() {\n  var chatList = document.createElement('div');\n  chatList.classList.add('main');\n  if (Object(_utils_workWithLocalStorage__WEBPACK_IMPORTED_MODULE_4__[\"getChatsFromLocalStorage\"])().length === 0) {\n    Object(_utils_workWithLocalStorage__WEBPACK_IMPORTED_MODULE_4__[\"saveChatsToLocalStorage\"])(_mocks_chatListMock__WEBPACK_IMPORTED_MODULE_5__[\"chatListMock\"]);\n  }\n  chatList.appendChild(Object(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"Header\"])('messenger'));\n  chatList.appendChild(Object(_components_ChatList_ChatList__WEBPACK_IMPORTED_MODULE_0__[\"ChatList\"])());\n  chatList.appendChild(Object(_components_ChatButton_ChatButton__WEBPACK_IMPORTED_MODULE_1__[\"ChatButton\"])());\n  _load();\n  return chatList;\n};\nvar _load = function load() {\n  var chatsContainer = document.querySelector('.chats');\n  var searchBtn = document.querySelector('.search');\n  var seacrhInput = document.querySelector('.search-input');\n  if (!chatsContainer) {\n    setTimeout(_load, 100);\n    return;\n  }\n  chatsContainer.innerHTML = '';\n  Object(_utils_chatListUtils__WEBPACK_IMPORTED_MODULE_3__[\"loadChats\"])(chatsContainer);\n  var currentChat = document.querySelectorAll('.chat-item');\n  currentChat === null || currentChat === void 0 || currentChat.forEach(function () {\n    return addEventListener('click', function (event) {\n      return Object(_utils_chatListUtils__WEBPACK_IMPORTED_MODULE_3__[\"handleChatClick\"])(event);\n    });\n  });\n\n  // searchBtn.addEventListener('change', searchChat);\n  seacrhInput.addEventListener('input', function (event) {\n    var searchTerm = event.target.value;\n    Object(_utils_searchChat__WEBPACK_IMPORTED_MODULE_6__[\"searchChat\"])(searchTerm, chatsContainer);\n  });\n};\n\n//# sourceURL=webpack:///./pages/ChatListPage/ChatListPage.js?");

/***/ }),

/***/ "./pages/ChatPage/ChatPage.js":
/*!************************************!*\
  !*** ./pages/ChatPage/ChatPage.js ***!
  \************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatPage\", function() { return ChatPage; });\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Header/Header */ \"./components/Header/Header.js\");\n/* harmony import */ var _components_ChatComponent_ChatComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ChatComponent/ChatComponent */ \"./components/ChatComponent/ChatComponent.js\");\n/* harmony import */ var _components_ChatInputForm_ChatInputForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ChatInputForm/ChatInputForm */ \"./components/ChatInputForm/ChatInputForm.js\");\n/* harmony import */ var _utils_messageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/messageUtils */ \"./utils/messageUtils.js\");\n/* harmony import */ var _utils_workWithScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/workWithScroll */ \"./utils/workWithScroll.js\");\n/* harmony import */ var _utils_formUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/formUtils */ \"./utils/formUtils.js\");\n/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/navigation */ \"./utils/navigation.js\");\n\n\n\n\n\n\n\nvar _load = function load(chatId) {\n  var form = document.querySelector('form');\n  var input = document.querySelector('.form-input');\n  var messagesContainer = document.querySelector('.messages');\n  var scrollButton = document.querySelector('.scroll-down-button');\n  var backBtn = document.querySelector('.back');\n  if (!messagesContainer) {\n    setTimeout(function () {\n      return _load(chatId);\n    }, 100);\n    return;\n  }\n  messagesContainer.innerHTML = '';\n  Object(_utils_messageUtils__WEBPACK_IMPORTED_MODULE_3__[\"loadMessages\"])(chatId, messagesContainer, scrollButton);\n  Object(_utils_workWithScroll__WEBPACK_IMPORTED_MODULE_4__[\"checkScrollPosition\"])(messagesContainer, scrollButton);\n  form.addEventListener('submit', function (event) {\n    return Object(_utils_formUtils__WEBPACK_IMPORTED_MODULE_5__[\"handleSubmit\"])(event, input, messagesContainer, scrollButton, chatId);\n  });\n  form.addEventListener('keypress', function (event) {\n    return Object(_utils_formUtils__WEBPACK_IMPORTED_MODULE_5__[\"handleKeyPress\"])(event, form, chatId);\n  });\n  scrollButton.addEventListener('click', function () {\n    return Object(_utils_workWithScroll__WEBPACK_IMPORTED_MODULE_4__[\"scrollContentDown\"])(messagesContainer);\n  });\n  messagesContainer.addEventListener('scroll', function () {\n    return Object(_utils_workWithScroll__WEBPACK_IMPORTED_MODULE_4__[\"checkScrollPosition\"])(messagesContainer, scrollButton);\n  });\n  backBtn.addEventListener('click', function () {\n    return Object(_utils_navigation__WEBPACK_IMPORTED_MODULE_6__[\"navigateToChatList\"])();\n  });\n};\nvar ChatPage = function ChatPage(chatId) {\n  var chat = document.createElement('div');\n  chat.classList.add('main');\n  chat.appendChild(Object(_components_Header_Header__WEBPACK_IMPORTED_MODULE_0__[\"Header\"])('chat', chatId));\n  chat.appendChild(Object(_components_ChatComponent_ChatComponent__WEBPACK_IMPORTED_MODULE_1__[\"ChatComponent\"])());\n  chat.appendChild(Object(_components_ChatInputForm_ChatInputForm__WEBPACK_IMPORTED_MODULE_2__[\"ChatInputForm\"])());\n  _load(chatId);\n  return chat;\n};\n\n//# sourceURL=webpack:///./pages/ChatPage/ChatPage.js?");

/***/ }),

/***/ "./utils/chatListUtils.js":
/*!********************************!*\
  !*** ./utils/chatListUtils.js ***!
  \********************************/
/*! exports provided: renderChats, loadChats, handleChatClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderChats\", function() { return renderChats; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadChats\", function() { return loadChats; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleChatClick\", function() { return handleChatClick; });\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ \"./utils/navigation.js\");\n/* harmony import */ var _workWithLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workWithLocalStorage */ \"./utils/workWithLocalStorage.js\");\n\n\nvar renderChats = function renderChats(chat, chatContainer) {\n  var chatElement = document.createElement('li');\n  chatElement.classList.add('chat-item');\n  chatElement.dataset.chatId = chat.id;\n  chatElement.innerHTML = \"\\n      <div class=\\\"chat-avatar\\\">\\n        <img class='chat-avatar' src=\\\"\".concat(chat.avatar, \"\\\" alt=\\\"\").concat(chat.name, \"\\\" />\\n      </div>\\n      <div class=\\\"chat-details\\\">\\n        <div class=\\\"chat-name\\\">\").concat(chat.name, \"</div>\\n        <div class=\\\"chat-last-message\\\">\").concat(chat.lastMessage, \"</div>\\n      </div>\\n    \");\n  chatContainer.appendChild(chatElement);\n};\nvar loadChats = function loadChats(chatContainer) {\n  var chats = Object(_workWithLocalStorage__WEBPACK_IMPORTED_MODULE_1__[\"getChatsFromLocalStorage\"])();\n  chats.forEach(function (chat) {\n    renderChats(chat, chatContainer);\n  });\n};\nvar handleChatClick = function handleChatClick(event) {\n  var chatItem = event.target.closest('.chat-item');\n  if (chatItem) {\n    var chatId = chatItem.dataset.chatId;\n    Object(_navigation__WEBPACK_IMPORTED_MODULE_0__[\"navigateToChat\"])(chatId);\n  }\n};\n\n//# sourceURL=webpack:///./utils/chatListUtils.js?");

/***/ }),

/***/ "./utils/createNewChat.js":
/*!********************************!*\
  !*** ./utils/createNewChat.js ***!
  \********************************/
/*! exports provided: openModal, closeModal, closeModalOnBlur, chatExistsWithUsers, loadUsers, createChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openModal\", function() { return openModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeModal\", function() { return closeModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeModalOnBlur\", function() { return closeModalOnBlur; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chatExistsWithUsers\", function() { return chatExistsWithUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadUsers\", function() { return loadUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChat\", function() { return createChat; });\n/* harmony import */ var _mocks_chatListMock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mocks/chatListMock */ \"./mocks/chatListMock.js\");\n/* harmony import */ var _mocks_usersList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mocks/usersList */ \"./mocks/usersList.js\");\n/* harmony import */ var _chatListUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatListUtils */ \"./utils/chatListUtils.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation */ \"./utils/navigation.js\");\n/* harmony import */ var _workWithLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workWithLocalStorage */ \"./utils/workWithLocalStorage.js\");\n\n\n\n\n\nvar userList = document.getElementById('userList');\nvar modal = document.getElementById('modal');\nvar selectedUsers = [];\nvar openModal = function openModal() {\n  modal.style.display = 'flex';\n  loadUsers();\n};\nvar closeModal = function closeModal() {\n  modal.style.display = 'none';\n};\nvar closeModalOnBlur = function closeModalOnBlur(event) {\n  if (event.target === modal) {\n    closeModal();\n  }\n};\nvar chatExistsWithUsers = function chatExistsWithUsers(selectedUserIds) {\n  var chats = Object(_workWithLocalStorage__WEBPACK_IMPORTED_MODULE_4__[\"getChatsFromLocalStorage\"])();\n  console.log(chats.find(function (chat) {\n    return chat.id === selectedUserIds;\n  }));\n  return chats.find(function (chat) {\n    return chat.id === selectedUserIds;\n  });\n};\nvar loadUsers = function loadUsers() {\n  userList.innerHTML = '';\n  _mocks_usersList__WEBPACK_IMPORTED_MODULE_1__[\"users\"].forEach(function (user) {\n    var userItem = document.createElement('div');\n    userItem.classList.add('user-item');\n    userItem.innerHTML = \"\\n      <input id=\\\"\".concat(user.id, \"\\\" type=\\\"radio\\\" data-user-id=\\\"\").concat(user.id, \"\\\" name=\\\"friends\\\" value=\\\"\").concat(user.id, \"\\\">\\n      <label for=\\\"\").concat(user.id, \"\\\" class=\\\"friends\\\">\").concat(user.name, \"</label>\\n    \");\n    userList.appendChild(userItem);\n  });\n};\nvar createChat = function createChat() {\n  var chats = Object(_workWithLocalStorage__WEBPACK_IMPORTED_MODULE_4__[\"getChatsFromLocalStorage\"])();\n  var friend = userList.querySelector('input[type=\"radio\"]:checked');\n  selectedUsers.length = 0;\n  var userId = +friend.getAttribute('data-user-id');\n  var user = _mocks_usersList__WEBPACK_IMPORTED_MODULE_1__[\"users\"].find(function (user) {\n    return user.id == userId;\n  });\n  var existingChat = chatExistsWithUsers(userId);\n  console.log(existingChat, userId);\n  if (existingChat) {\n    closeModal();\n    Object(_navigation__WEBPACK_IMPORTED_MODULE_3__[\"navigateToChat\"])(userId);\n    return;\n  }\n  if (user) {\n    chats.push(user);\n    Object(_workWithLocalStorage__WEBPACK_IMPORTED_MODULE_4__[\"saveChatsToLocalStorage\"])(chats);\n    Object(_navigation__WEBPACK_IMPORTED_MODULE_3__[\"navigateToChat\"])(userId);\n    modal.style.display = 'none';\n  }\n};\n\n//# sourceURL=webpack:///./utils/createNewChat.js?");

/***/ }),

/***/ "./utils/formUtils.js":
/*!****************************!*\
  !*** ./utils/formUtils.js ***!
  \****************************/
/*! exports provided: handleSubmit, handleKeyPress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleSubmit\", function() { return handleSubmit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleKeyPress\", function() { return handleKeyPress; });\n/* harmony import */ var _mocks_usersList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mocks/usersList */ \"./mocks/usersList.js\");\n/* harmony import */ var _messageUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messageUtils */ \"./utils/messageUtils.js\");\n/* harmony import */ var _workWithLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workWithLocalStorage */ \"./utils/workWithLocalStorage.js\");\n\n\n\nvar handleSubmit = function handleSubmit(event, input, messagesContainer, scrollButton, chatId) {\n  event.preventDefault();\n  var messageText = input.value.trim();\n  var _users$find = _mocks_usersList__WEBPACK_IMPORTED_MODULE_0__[\"users\"].find(function (user) {\n      return user.id == +chatId;\n    }),\n    name = _users$find.name;\n  if (!messageText) {\n    return;\n  }\n  var messageData = {\n    id: Date.now(),\n    text: messageText,\n    sender: name,\n    time: new Date().toLocaleTimeString().slice(0, 5)\n  };\n  Object(_workWithLocalStorage__WEBPACK_IMPORTED_MODULE_2__[\"saveMessage\"])(messageData, chatId);\n  Object(_messageUtils__WEBPACK_IMPORTED_MODULE_1__[\"renderMessage\"])(messageData, messagesContainer, scrollButton);\n  input.value = '';\n  input.focus();\n};\nvar handleKeyPress = function handleKeyPress(event, form, chatId) {\n  if (event.key === 'Enter') {\n    form.dispatchEvent(new Event('submit', {\n      detait: {\n        chatId: chatId\n      }\n    }));\n  }\n};\n\n//# sourceURL=webpack:///./utils/formUtils.js?");

/***/ }),

/***/ "./utils/messageUtils.js":
/*!*******************************!*\
  !*** ./utils/messageUtils.js ***!
  \*******************************/
/*! exports provided: renderMessage, loadMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMessage\", function() { return renderMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadMessages\", function() { return loadMessages; });\n/* harmony import */ var _workWithLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workWithLocalStorage */ \"./utils/workWithLocalStorage.js\");\n/* harmony import */ var _workWithScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workWithScroll */ \"./utils/workWithScroll.js\");\n\n\nvar renderMessage = function renderMessage(messageData, messagesContainer, scrollButton) {\n  var messageElement = document.createElement('li');\n  messageElement.classList.add('message');\n  var timeAndMessageBlock = document.createElement('div');\n  timeAndMessageBlock.classList.add('timeAndMessageBlock');\n  var senderElement = document.createElement('div');\n  senderElement.classList.add('message-sender');\n  senderElement.innerText = messageData.sender;\n  var textElement = document.createElement('div');\n  textElement.classList.add('message-text');\n  textElement.innerText = messageData.text;\n  var timeElement = document.createElement('div');\n  timeElement.classList.add('message-time');\n  timeElement.innerText = messageData.time;\n  messageElement.appendChild(timeAndMessageBlock);\n  timeAndMessageBlock.appendChild(timeElement);\n  timeAndMessageBlock.appendChild(textElement);\n  messagesContainer.appendChild(messageElement);\n  Object(_workWithScroll__WEBPACK_IMPORTED_MODULE_1__[\"scrollContentDown\"])(messagesContainer);\n  Object(_workWithScroll__WEBPACK_IMPORTED_MODULE_1__[\"checkScrollPosition\"])(messagesContainer, scrollButton);\n};\nvar loadMessages = function loadMessages(chatId, messagesContainer, scrollButton) {\n  var messages = Object(_workWithLocalStorage__WEBPACK_IMPORTED_MODULE_0__[\"getDataFromLocalStorage\"])(chatId);\n  messages.forEach(function (message) {\n    renderMessage(message, messagesContainer, scrollButton);\n  });\n};\n\n//# sourceURL=webpack:///./utils/messageUtils.js?");

/***/ }),

/***/ "./utils/navigation.js":
/*!*****************************!*\
  !*** ./utils/navigation.js ***!
  \*****************************/
/*! exports provided: navigateToChat, navigateToChatList, handleRouteChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navigateToChat\", function() { return navigateToChat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navigateToChatList\", function() { return navigateToChatList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleRouteChange\", function() { return handleRouteChange; });\n/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Modal/Modal */ \"./components/Modal/Modal.js\");\n/* harmony import */ var _pages_ChatListPage_ChatListPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/ChatListPage/ChatListPage */ \"./pages/ChatListPage/ChatListPage.js\");\n/* harmony import */ var _pages_ChatPage_ChatPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/ChatPage/ChatPage */ \"./pages/ChatPage/ChatPage.js\");\n/* harmony import */ var _messageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messageUtils */ \"./utils/messageUtils.js\");\n/* harmony import */ var _workWithLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workWithLocalStorage */ \"./utils/workWithLocalStorage.js\");\n\n\n\n\n\nvar chatListContainer = document.querySelector('.chat-list');\nvar navigateToChat = function navigateToChat(chatId) {\n  window.location.hash = \"#/chat/\".concat(chatId);\n  handleRouteChange();\n};\nvar navigateToChatList = function navigateToChatList() {\n  window.location.hash = \"#/\";\n  handleRouteChange();\n};\nvar handleRouteChange = function handleRouteChange() {\n  var path = window.location.hash;\n  var root = document.getElementById('root');\n  if (path.startsWith('#/chat/')) {\n    var chatId = path.split('#/chat/')[1];\n    root.innerHTML = '';\n    root.appendChild(Object(_pages_ChatPage_ChatPage__WEBPACK_IMPORTED_MODULE_2__[\"ChatPage\"])(chatId));\n    return;\n  }\n  root.innerHTML = '';\n  root.appendChild(Object(_pages_ChatListPage_ChatListPage__WEBPACK_IMPORTED_MODULE_1__[\"ChatListPage\"])());\n  Object(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"])();\n};\n\n//# sourceURL=webpack:///./utils/navigation.js?");

/***/ }),

/***/ "./utils/searchChat.js":
/*!*****************************!*\
  !*** ./utils/searchChat.js ***!
  \*****************************/
/*! exports provided: searchChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchChat\", function() { return searchChat; });\n/* harmony import */ var _chatListUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatListUtils */ \"./utils/chatListUtils.js\");\n/* harmony import */ var _workWithLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workWithLocalStorage */ \"./utils/workWithLocalStorage.js\");\n\n\nvar searchChat = function searchChat(searchTerm, chatsContainer) {\n  var chats = Object(_workWithLocalStorage__WEBPACK_IMPORTED_MODULE_1__[\"getChatsFromLocalStorage\"])();\n  var searchResults = chats.filter(function (chat) {\n    return chat.name.toLowerCase().includes(searchTerm.toLowerCase());\n  });\n  renderChatList(searchResults, chatsContainer);\n};\nvar renderChatList = function renderChatList(chats, chatsContainer) {\n  chatsContainer.innerHTML = '';\n  chats.forEach(function (chat) {\n    Object(_chatListUtils__WEBPACK_IMPORTED_MODULE_0__[\"renderChats\"])(chat, chatsContainer);\n  });\n};\n\n//# sourceURL=webpack:///./utils/searchChat.js?");

/***/ }),

/***/ "./utils/workWithLocalStorage.js":
/*!***************************************!*\
  !*** ./utils/workWithLocalStorage.js ***!
  \***************************************/
/*! exports provided: getDataFromLocalStorage, saveMessage, getChatsFromLocalStorage, saveChatsToLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDataFromLocalStorage\", function() { return getDataFromLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveMessage\", function() { return saveMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getChatsFromLocalStorage\", function() { return getChatsFromLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveChatsToLocalStorage\", function() { return saveChatsToLocalStorage; });\nvar getDataFromLocalStorage = function getDataFromLocalStorage(chatId) {\n  return JSON.parse(localStorage.getItem(\"messages\".concat(chatId))) || [];\n};\nvar saveMessage = function saveMessage(messageData, chatId) {\n  var messages = getDataFromLocalStorage(chatId);\n  messages.push(messageData);\n  localStorage.setItem(\"messages\".concat(chatId), JSON.stringify(messages));\n};\nvar getChatsFromLocalStorage = function getChatsFromLocalStorage() {\n  return JSON.parse(localStorage.getItem('chats')) || [];\n};\nvar saveChatsToLocalStorage = function saveChatsToLocalStorage(chats) {\n  localStorage.setItem('chats', JSON.stringify(chats));\n};\n\n//# sourceURL=webpack:///./utils/workWithLocalStorage.js?");

/***/ }),

/***/ "./utils/workWithScroll.js":
/*!*********************************!*\
  !*** ./utils/workWithScroll.js ***!
  \*********************************/
/*! exports provided: scrollContentDown, checkScrollPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollContentDown\", function() { return scrollContentDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkScrollPosition\", function() { return checkScrollPosition; });\nvar scrollContentDown = function scrollContentDown(messagesContainer) {\n  var _messagesContainer$la;\n  (_messagesContainer$la = messagesContainer.lastElementChild) === null || _messagesContainer$la === void 0 || _messagesContainer$la.scrollIntoView({\n    behavior: 'smooth'\n  });\n};\nvar checkScrollPosition = function checkScrollPosition(messagesContainer, scrollButton) {\n  var atBottom = messagesContainer.scrollHeight - messagesContainer.scrollTop === messagesContainer.clientHeight;\n  if (atBottom) {\n    scrollButton.classList.remove('show');\n  } else {\n    scrollButton.classList.add('show');\n  }\n};\n\n//# sourceURL=webpack:///./utils/workWithScroll.js?");

/***/ })

/******/ });