const MenuBarIcon = ({ setMenuOpen }) => {
  return (
    <>
      <input
        onChange={() => {
          setMenuOpen((p) => !p);
        }}
        type="checkbox"
        id="menu_checkbox"
      />
      <label id="menuLabel" htmlFor="menu_checkbox">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </>
  );
};

export default MenuBarIcon;
