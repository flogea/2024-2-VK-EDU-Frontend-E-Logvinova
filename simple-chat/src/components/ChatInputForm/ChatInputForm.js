export function ChatInputForm() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
      <form class="form" action="/">
          <button type="submit" class="icon-button file">
              <span class="material-symbols-rounded"> attachment </span>
          </button>
          <input class="form-input" name="message-text" placeholder="Введите сообщение" type="text" autocomplete="off" />
          <button type="submit" class="send-button">
              <span class="material-symbols-rounded"> send </span>
          </button>
      </form>
      <button class="scroll-down-button">
          <span class="material-symbols-rounded"> keyboard_arrow_down </span>
      </button>
  `;
  return footer;
}
