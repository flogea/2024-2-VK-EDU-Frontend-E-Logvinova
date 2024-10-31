export const MessengerHeader = () => {
  return `<div class="leftside">
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
          <input type="text" id="searchInput" class="search-input" placeholder="Search chat..." autocomplete="off"/>
          <button class="icon-button search">
              <span class="material-symbols-rounded" id="searchBtn"> search </span>
          </button>
      </div>`;
};
