import { navigateToChatList } from '../../utils/navigation';

export function Header(type) {
  const header = document.createElement('header');
  type === 'chat'
    ? (header.innerHTML = `
      <div class="leftside">
          <button class="icon-button back" id="btn-back-header">
              <span class="material-symbols-rounded"> arrow_back_ios_new </span>
          </button>
          <div class="chat-header">
              <div class="photo">
                  <img class="photo" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/01/Ryan-Gosling-in-Drive.jpg" alt="person photo" />
              </div>
              <div class="nameAndStatus">
                  <div class="name">Ryan Gosling</div>
                  <div class="online">online</div>
              </div>
          </div>
      </div>
      <div class="rightside-buttons">
          <button class="icon-button search">
              <span class="material-symbols-rounded"> search </span>
          </button>
          <button class="icon-button more">
              <span class="material-symbols-rounded"> more_vert </span>
          </button>
      </div>
  `)
    : (header.innerHTML = `
      <div class="leftside">
          <button class="icon-button back" id="btn-back-header">
              <span class="material-symbols-rounded"> menu </span>
          </button>
          <div class="chat-header">
              <div class="nameAndStatus">
                  <div class="name">Messenger</div>
              </div>
          </div>
      </div>
      <div class="rightside-buttons">
          <button class="icon-button search">
              <span class="material-symbols-rounded"> search </span>
          </button>
      </div>
  `);
  return header;
}
