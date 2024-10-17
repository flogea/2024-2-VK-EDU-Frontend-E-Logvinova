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

/***/ "./components/ChatComponent/ChatComponent.js":
/*!***************************************************!*\
  !*** ./components/ChatComponent/ChatComponent.js ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatComponent\", function() { return ChatComponent; });\nfunction ChatComponent() {\n  var chat = document.createElement('main');\n  chat.classList.add('chat-container');\n  chat.innerHTML = \"\\n      <ul class=\\\"messages\\\"></ul>\\n  \";\n  return chat;\n}\n\n//# sourceURL=webpack:///./components/ChatComponent/ChatComponent.js?");

/***/ }),

/***/ "./components/ChatInputForm/ChatInputForm.js":
/*!***************************************************!*\
  !*** ./components/ChatInputForm/ChatInputForm.js ***!
  \***************************************************/
/*! exports provided: ChatInputForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatInputForm\", function() { return ChatInputForm; });\nfunction ChatInputForm() {\n  var footer = document.createElement('footer');\n  footer.innerHTML = \"\\n      <form class=\\\"form\\\" action=\\\"/\\\">\\n          <button type=\\\"submit\\\" class=\\\"icon-button file\\\">\\n              <span class=\\\"material-symbols-rounded\\\"> attachment </span>\\n          </button>\\n          <input class=\\\"form-input\\\" name=\\\"message-text\\\" placeholder=\\\"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0441\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u0435\\\" type=\\\"text\\\" autocomplete=\\\"off\\\" />\\n          <button type=\\\"submit\\\" class=\\\"send-button\\\">\\n              <span class=\\\"material-symbols-rounded\\\"> send </span>\\n          </button>\\n      </form>\\n      <button class=\\\"scroll-down-button\\\">\\n          <span class=\\\"material-symbols-rounded\\\"> keyboard_arrow_down </span>\\n      </button>\\n  \";\n  return footer;\n}\n\n//# sourceURL=webpack:///./components/ChatInputForm/ChatInputForm.js?");

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

/***/ "./components/CreateChatButton/CreateChatButton.js":
/*!*********************************************************!*\
  !*** ./components/CreateChatButton/CreateChatButton.js ***!
  \*********************************************************/
/*! exports provided: CreateChatButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateChatButton\", function() { return CreateChatButton; });\nvar CreateChatButton = function CreateChatButton() {\n  var createBtn = document.createElement('button');\n  createBtn.classList.add('createChatBtn');\n  createBtn.innerHTML = \"\\n      <span class=\\\"material-symbols-rounded\\\"> add </span>\\n      <span class=\\\"create-btn-text\\\">\\u0421\\u043E\\u0437\\u0434\\u0430\\u0442\\u044C \\u0447\\u0430\\u0442</span>\\n  \";\n  return createBtn;\n};\n\n//# sourceURL=webpack:///./components/CreateChatButton/CreateChatButton.js?");

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/navigation */ \"./utils/navigation.js\");\n\nfunction Header(type) {\n  var header = document.createElement('header');\n  type === 'chat' ? header.innerHTML = \"\\n      <div class=\\\"leftside\\\">\\n          <button class=\\\"icon-button back\\\" id=\\\"btn-back-header\\\">\\n              <span class=\\\"material-symbols-rounded\\\"> arrow_back_ios_new </span>\\n          </button>\\n          <div class=\\\"chat-header\\\">\\n              <div class=\\\"photo\\\">\\n                  <img class=\\\"photo\\\" src=\\\"https://static1.srcdn.com/wordpress/wp-content/uploads/2021/01/Ryan-Gosling-in-Drive.jpg\\\" alt=\\\"person photo\\\" />\\n              </div>\\n              <div class=\\\"nameAndStatus\\\">\\n                  <div class=\\\"name\\\">Ryan Gosling</div>\\n                  <div class=\\\"online\\\">online</div>\\n              </div>\\n          </div>\\n      </div>\\n      <div class=\\\"rightside-buttons\\\">\\n          <button class=\\\"icon-button search\\\">\\n              <span class=\\\"material-symbols-rounded\\\"> search </span>\\n          </button>\\n          <button class=\\\"icon-button more\\\">\\n              <span class=\\\"material-symbols-rounded\\\"> more_vert </span>\\n          </button>\\n      </div>\\n  \" : header.innerHTML = \"\\n      <div class=\\\"leftside\\\">\\n          <button class=\\\"icon-button back\\\" id=\\\"btn-back-header\\\">\\n              <span class=\\\"material-symbols-rounded\\\"> menu </span>\\n          </button>\\n          <div class=\\\"chat-header\\\">\\n              <div class=\\\"nameAndStatus\\\">\\n                  <div class=\\\"name\\\">Messenger</div>\\n              </div>\\n          </div>\\n      </div>\\n      <div class=\\\"rightside-buttons\\\">\\n          <button class=\\\"icon-button search\\\">\\n              <span class=\\\"material-symbols-rounded\\\"> search </span>\\n          </button>\\n      </div>\\n  \";\n  return header;\n}\n\n//# sourceURL=webpack:///./components/Header/Header.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/navigation */ \"./utils/navigation.js\");\n\n\nwindow.addEventListener('popstate', _utils_navigation__WEBPACK_IMPORTED_MODULE_1__[\"handleRouteChange\"]);\nwindow.onload = _utils_navigation__WEBPACK_IMPORTED_MODULE_1__[\"handleRouteChange\"];\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./pages/ChatListPage/ChatListPage.js":
/*!********************************************!*\
  !*** ./pages/ChatListPage/ChatListPage.js ***!
  \********************************************/
/*! exports provided: ChatListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatListPage\", function() { return ChatListPage; });\n/* harmony import */ var _components_ChatList_ChatList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ChatList/ChatList */ \"./components/ChatList/ChatList.js\");\n/* harmony import */ var _components_CreateChatButton_CreateChatButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CreateChatButton/CreateChatButton */ \"./components/CreateChatButton/CreateChatButton.js\");\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header/Header */ \"./components/Header/Header.js\");\n/* harmony import */ var _utils_chatListUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/chatListUtils */ \"./utils/chatListUtils.js\");\n/* harmony import */ var _utils_workWithLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/workWithLocalStorage */ \"./utils/workWithLocalStorage.js\");\n\n\n\n\n\nvar ChatListPage = function ChatListPage() {\n  var chatList = document.createElement('div');\n  chatList.classList.add('main');\n  Object(_utils_workWithLocalStorage__WEBPACK_IMPORTED_MODULE_4__[\"saveChatsToLocalStorage\"])([{\n    id: 1,\n    avatar: 'https://www.eg.ru/wp-content/uploads/2019/08/stuart-pre025316.jpg',\n    name: 'Bella Swan',\n    lastMessage: 'Эдвард мой герой!'\n  }, {\n    id: 2,\n    avatar: 'https://news.store.rambler.ru/img/0639ea34a7adc115383524c27ca710c5?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen',\n    name: 'Edward Cullen',\n    lastMessage: 'Белла, я люблю тебя'\n  }, {\n    id: 3,\n    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyI40KHxACHTat0jH4MIk4h2-1h88nYYOiYg&s',\n    name: 'Jacob Black',\n    lastMessage: 'ребята, можно я уже пойду'\n  }]);\n  chatList.appendChild(Object(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"Header\"])('messenger'));\n  chatList.appendChild(Object(_components_ChatList_ChatList__WEBPACK_IMPORTED_MODULE_0__[\"ChatList\"])());\n  chatList.appendChild(Object(_components_CreateChatButton_CreateChatButton__WEBPACK_IMPORTED_MODULE_1__[\"CreateChatButton\"])());\n  _load();\n  return chatList;\n};\nvar _load = function load() {\n  var chatsContainer = document.querySelector('.chats');\n  if (!chatsContainer) {\n    setTimeout(_load, 100);\n    return;\n  }\n  chatsContainer.innerHTML = '';\n  Object(_utils_chatListUtils__WEBPACK_IMPORTED_MODULE_3__[\"loadChats\"])(chatsContainer);\n  var currentChat = document.querySelectorAll('.chat-item');\n  currentChat === null || currentChat === void 0 || currentChat.forEach(function () {\n    return addEventListener('click', function (event) {\n      return Object(_utils_chatListUtils__WEBPACK_IMPORTED_MODULE_3__[\"handleChatClick\"])(event);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./pages/ChatListPage/ChatListPage.js?");

/***/ }),

/***/ "./pages/ChatPage/ChatPage.js":
/*!************************************!*\
  !*** ./pages/ChatPage/ChatPage.js ***!
  \************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChatPage\", function() { return ChatPage; });\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Header/Header */ \"./components/Header/Header.js\");\n/* harmony import */ var _components_ChatComponent_ChatComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ChatComponent/ChatComponent */ \"./components/ChatComponent/ChatComponent.js\");\n/* harmony import */ var _components_ChatInputForm_ChatInputForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ChatInputForm/ChatInputForm */ \"./components/ChatInputForm/ChatInputForm.js\");\n/* harmony import */ var _utils_messageUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/messageUtils */ \"./utils/messageUtils.js\");\n/* harmony import */ var _utils_workWithScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/workWithScroll */ \"./utils/workWithScroll.js\");\n/* harmony import */ var _utils_formUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/formUtils */ \"./utils/formUtils.js\");\n/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/navigation */ \"./utils/navigation.js\");\n\n\n\n\n\n\n\nvar ChatPage = function ChatPage() {\n  var chat = document.createElement('div');\n  chat.classList.add('main');\n  chat.appendChild(Object(_components_Header_Header__WEBPACK_IMPORTED_MODULE_0__[\"Header\"])('chat'));\n  chat.appendChild(Object(_components_ChatComponent_ChatComponent__WEBPACK_IMPORTED_MODULE_1__[\"ChatComponent\"])());\n  chat.appendChild(Object(_components_ChatInputForm_ChatInputForm__WEBPACK_IMPORTED_MODULE_2__[\"ChatInputForm\"])());\n  _load();\n  return chat;\n};\nvar _load = function load() {\n  var form = document.querySelector('form');\n  var input = document.querySelector('.form-input');\n  var messagesContainer = document.querySelector('.messages');\n  var scrollButton = document.querySelector('.scroll-down-button');\n  var backBtn = document.querySelector('.back');\n  if (!messagesContainer) {\n    setTimeout(_load, 100);\n    return;\n  }\n  messagesContainer.innerHTML = '';\n  Object(_utils_messageUtils__WEBPACK_IMPORTED_MODULE_3__[\"loadMessages\"])(messagesContainer, scrollButton);\n  Object(_utils_workWithScroll__WEBPACK_IMPORTED_MODULE_4__[\"checkScrollPosition\"])(messagesContainer, scrollButton);\n  form.addEventListener('submit', function (event) {\n    return Object(_utils_formUtils__WEBPACK_IMPORTED_MODULE_5__[\"handleSubmit\"])(event, input, messagesContainer, scrollButton);\n  });\n  form.addEventListener('keypress', function (event) {\n    return Object(_utils_formUtils__WEBPACK_IMPORTED_MODULE_5__[\"handleKeyPress\"])(event, form);\n  });\n  scrollButton.addEventListener('click', function () {\n    return Object(_utils_workWithScroll__WEBPACK_IMPORTED_MODULE_4__[\"scrollContentDown\"])(messagesContainer);\n  });\n  messagesContainer.addEventListener('scroll', function () {\n    return Object(_utils_workWithScroll__WEBPACK_IMPORTED_MODULE_4__[\"checkScrollPosition\"])(messagesContainer, scrollButton);\n  });\n  backBtn.addEventListener('click', function () {\n    return Object(_utils_navigation__WEBPACK_IMPORTED_MODULE_6__[\"navigateToChatList\"])();\n  });\n};\n\n//# sourceURL=webpack:///./pages/ChatPage/ChatPage.js?");

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

/***/ "./utils/formUtils.js":
/*!****************************!*\
  !*** ./utils/formUtils.js ***!
  \****************************/
/*! exports provided: handleSubmit, handleKeyPress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleSubmit\", function() { return handleSubmit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleKeyPress\", function() { return handleKeyPress; });\n/* harmony import */ var _messageUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messageUtils */ \"./utils/messageUtils.js\");\n/* harmony import */ var _workWithLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workWithLocalStorage */ \"./utils/workWithLocalStorage.js\");\n\n\nvar handleSubmit = function handleSubmit(event, input, messagesContainer, scrollButton) {\n  event.preventDefault();\n  var messageText = input.value.trim();\n  if (!messageText) {\n    return;\n  }\n  var messageData = {\n    id: Date.now(),\n    text: messageText,\n    sender: 'Gyan Rosling',\n    time: new Date().toLocaleTimeString().slice(0, 5)\n  };\n  Object(_workWithLocalStorage__WEBPACK_IMPORTED_MODULE_1__[\"saveMessage\"])(messageData);\n  Object(_messageUtils__WEBPACK_IMPORTED_MODULE_0__[\"renderMessage\"])(messageData, messagesContainer, scrollButton);\n  input.value = '';\n  input.focus();\n};\nvar handleKeyPress = function handleKeyPress(event, form) {\n  if (event.key === 'Enter') {\n    form.dispatchEvent(new Event('submit'));\n  }\n};\n\n//# sourceURL=webpack:///./utils/formUtils.js?");

/***/ }),

/***/ "./utils/messageUtils.js":
/*!*******************************!*\
  !*** ./utils/messageUtils.js ***!
  \*******************************/
/*! exports provided: renderMessage, loadMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMessage\", function() { return renderMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadMessages\", function() { return loadMessages; });\n/* harmony import */ var _workWithLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workWithLocalStorage */ \"./utils/workWithLocalStorage.js\");\n/* harmony import */ var _workWithScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workWithScroll */ \"./utils/workWithScroll.js\");\n\n\nvar renderMessage = function renderMessage(messageData, messagesContainer, scrollButton) {\n  var messageElement = document.createElement('li');\n  messageElement.classList.add('message');\n  var timeAndMessageBlock = document.createElement('div');\n  timeAndMessageBlock.classList.add('timeAndMessageBlock');\n  var senderElement = document.createElement('div');\n  senderElement.classList.add('message-sender');\n  senderElement.innerText = messageData.sender;\n  var textElement = document.createElement('div');\n  textElement.classList.add('message-text');\n  textElement.innerText = messageData.text;\n  var timeElement = document.createElement('div');\n  timeElement.classList.add('message-time');\n  timeElement.innerText = messageData.time;\n  messageElement.appendChild(timeAndMessageBlock);\n  timeAndMessageBlock.appendChild(timeElement);\n  timeAndMessageBlock.appendChild(textElement);\n  messagesContainer.appendChild(messageElement);\n  Object(_workWithScroll__WEBPACK_IMPORTED_MODULE_1__[\"scrollContentDown\"])(messagesContainer);\n  Object(_workWithScroll__WEBPACK_IMPORTED_MODULE_1__[\"checkScrollPosition\"])(messagesContainer, scrollButton);\n};\nvar loadMessages = function loadMessages(messagesContainer, scrollButton) {\n  var messages = Object(_workWithLocalStorage__WEBPACK_IMPORTED_MODULE_0__[\"getDataFromLocalStorage\"])();\n  messages.forEach(function (message) {\n    renderMessage(message, messagesContainer, scrollButton);\n  });\n};\n\n//# sourceURL=webpack:///./utils/messageUtils.js?");

/***/ }),

/***/ "./utils/navigation.js":
/*!*****************************!*\
  !*** ./utils/navigation.js ***!
  \*****************************/
/*! exports provided: navigateToChat, navigateToChatList, handleRouteChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navigateToChat\", function() { return navigateToChat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navigateToChatList\", function() { return navigateToChatList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleRouteChange\", function() { return handleRouteChange; });\n/* harmony import */ var _pages_ChatListPage_ChatListPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/ChatListPage/ChatListPage */ \"./pages/ChatListPage/ChatListPage.js\");\n/* harmony import */ var _pages_ChatPage_ChatPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/ChatPage/ChatPage */ \"./pages/ChatPage/ChatPage.js\");\n/* harmony import */ var _messageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messageUtils */ \"./utils/messageUtils.js\");\n/* harmony import */ var _workWithLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workWithLocalStorage */ \"./utils/workWithLocalStorage.js\");\n\n\n\n\nvar chatListContainer = document.querySelector('.chat-list');\nvar navigateToChat = function navigateToChat(chatId) {\n  window.location.hash = \"#/chat/\".concat(chatId);\n  handleRouteChange();\n};\nvar navigateToChatList = function navigateToChatList() {\n  window.location.hash = \"#/\";\n  handleRouteChange();\n};\nvar handleRouteChange = function handleRouteChange() {\n  var path = window.location.hash;\n  var root = document.getElementById('root');\n  if (path.startsWith('#/chat/')) {\n    root.innerHTML = '';\n    root.appendChild(Object(_pages_ChatPage_ChatPage__WEBPACK_IMPORTED_MODULE_1__[\"ChatPage\"])());\n  } else {\n    root.innerHTML = '';\n    root.appendChild(Object(_pages_ChatListPage_ChatListPage__WEBPACK_IMPORTED_MODULE_0__[\"ChatListPage\"])());\n  }\n};\n\n//# sourceURL=webpack:///./utils/navigation.js?");

/***/ }),

/***/ "./utils/workWithLocalStorage.js":
/*!***************************************!*\
  !*** ./utils/workWithLocalStorage.js ***!
  \***************************************/
/*! exports provided: getDataFromLocalStorage, saveMessage, getChatsFromLocalStorage, saveChatsToLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDataFromLocalStorage\", function() { return getDataFromLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveMessage\", function() { return saveMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getChatsFromLocalStorage\", function() { return getChatsFromLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveChatsToLocalStorage\", function() { return saveChatsToLocalStorage; });\nvar getDataFromLocalStorage = function getDataFromLocalStorage() {\n  return JSON.parse(localStorage.getItem('messages')) || [];\n};\nvar saveMessage = function saveMessage(messageData) {\n  var messages = getDataFromLocalStorage();\n  messages.push(messageData);\n  localStorage.setItem('messages', JSON.stringify(messages));\n};\nvar getChatsFromLocalStorage = function getChatsFromLocalStorage() {\n  return JSON.parse(localStorage.getItem('chats')) || [];\n};\nvar saveChatsToLocalStorage = function saveChatsToLocalStorage(chats) {\n  localStorage.setItem('chats', JSON.stringify(chats));\n};\n\n//# sourceURL=webpack:///./utils/workWithLocalStorage.js?");

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