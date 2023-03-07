function ConsoleSelector({ handleClick }) {
  return (
    <select onChange={handleClick}>
      <option value={27}>PS1</option>
      <option selected value={15}>
        PS2
      </option>
      <option value={16}>PS3</option>
      <option value={17}>PSP</option>
      <option value={18}>PS4</option>
      <option value={187}>PS5</option>
      <option value={80}>Xbox</option>
      <option value={14}>Xbox 360</option>
      <option value={1}>Xbox One</option>
      <option value={186}>Xbox Series X</option>
      <option value={4}>PC</option>
      <option value={49}>NES</option>
      <option value={79}>SNES</option>
      <option value={83}>N64</option>
      <option value={105}>Gamecube</option>
      <option value={11}>Wii</option>
      <option value={10}>WiiU</option>
      <option value={7}>Switch</option>
    </select>
  );
}

export default ConsoleSelector;
