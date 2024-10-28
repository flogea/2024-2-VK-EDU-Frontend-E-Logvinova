import { users } from '../../mocks/usersList';

export const ChatHeader = (chatId) => {
  const { name, avatar } = users.find((user) => user.id == +chatId);

  return `<div class="leftside">
          <button class="icon-button back" id="btn-back-header">
              <span class="material-symbols-rounded"> arrow_back_ios_new </span>
          </button>
          <div class="chat-header">
              <div class="photo">
                  <img class="photo" src=${avatar} alt="person photo" />
              </div>
              <div class="nameAndStatus">
                  <div class="name">${name}</div>
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
      </div>`;
};
