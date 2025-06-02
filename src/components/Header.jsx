export default function Header() {
  const menuItems = ["로그인", "회원가입", "내클래스"];

  return (
    <header className="flex justify-between items-center py-2.5 px-5 bg-black">
      <h2 className="text-2xl font-bold">OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-5">
        {menuItems.map((item) => (
          <li key={item} className="list-none font-normal text-[13px]">
            {item}
          </li>
        ))}
      </ul>
    </header>
  );
}
