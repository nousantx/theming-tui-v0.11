import { useColorContext } from "./context/ThemeContext";
import { styler } from "./styles";
import React, { useState, useLayoutEffect } from "react";
import Draggable from "./components/draggable";
interface ColorSwatchProps {
  colorName: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ colorName }) => (
  <div className="mt-2rem">
    <h3 className="fs-1.3em fw-500 ls--0.025em text-neutral-200">{colorName}</h3>
    <div className="flex ai-center flex-wrap gap-1rem mt-1rem">
      {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(shade => (
        <div key={shade} className={`box-40px br-6px bg-${colorName.toLowerCase()}-${shade}`}></div>
      ))}
    </div>
  </div>
);

function App() {
  const { changeTheme } = useColorContext();
  const [themeIcon, setThemeIcon] = useState("ri-moon-clear-line");
  // showcase color
  const colors = ["Primary", "Neutral", "Sky", "Pink"];

  // use tenoxui styler
  styler();

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setThemeIcon("ri-sun-line");
    }
  }, []);

  const handleThemeChange = () => {
    changeTheme();
    setThemeIcon(prevIcon => (prevIcon === "ri-moon-clear-line" ? "ri-sun-line" : "ri-moon-clear-line"));
  };

  return (
    <>
      <header className="center space py-1rem px-2rem w-mx-1440px mx-auto position-fixed t-0 r-0 l-0 bg-neutral-900 z-999 bg-opacity-0.5 back-blur-3.7px">
        <h1 className="text-neutral-100 fs-1.2rem fw-400 flex ai-center">
          <span className="text-primary-500 ti ti-vtx-solid fs-1.1em block mr-6px "></span>
          Tenox<span className="text-primary-500 fw-500">UI</span>
        </h1>
        <nav className="center gap-12px">
          <a
            href="https://github.com/nousantx/theming-tui-v0.11"
            className="btn bg-neutral-800 text-primary-500 hover:bg-neutral-700 tr-time-0.3s box-28px p-0 fs-16px"
          >
            <span className="ri-github-fill"></span>
          </a>
          <button
            onClick={handleThemeChange}
            className="btn bg-neutral-800 text-primary-500 hover:bg-neutral-700 tr-time-0.3s box-28px p-0 fs-16px"
          >
            <span className={themeIcon}></span>
          </button>
        </nav>
      </header>
      <main className="w-mx-1440px mx-auto">
        <article className="p-2rem h-mn-100vh center">
          <header className="ta-center tw-balance position-relative">
            <div className="bg-primary-500 box-300px blur-150px position-absolute opa-0.4 z--9 br-100% r-30%"></div>
            <h1 className="lh-1 fs-2.4rem ls--0.030em">
              <span className="text-primary-500">TenoxUI</span>: It's a CSS framework, trust me!
            </h1>
            <p className="text-neutral-400 ls--0.025em fs-14px mt-1rem">
              Hard way for creating a theme with this `unique` framework 🗿.
            </p>

            <div className="mt-2.5rem center gap-8px">
              <a
                href="https://tenoxui.web.app"
                className="btn bg-primary-500 hover:bg-primary-400 text-neutral-900 fw-500 center gap-6px"
              >
                <span className="ri-book-marked-line fs-1.1em"></span>
                TenoxUI Docs
              </a>
              <a
                href="https://tenoxui.web.app"
                className="btn bg-neutral-100 hover:bg-neutral-300 text-neutral-900 fw-500 center gap-6px"
              >
                <span className="ri-github-fill fs-1.1em"></span>
                GitHub
              </a>
            </div>
          </header>
        </article>
        <article className="p-2rem">
          <header>
            <h2 className="fs-1.8em lh-1 fw-500 ls--0.025em">More Colors</h2>
            <p className="fs-14px text-neutral-300 ls--0.030em mt-8px">See how the colors work in different mode.</p>
          </header>

          <section className="mt-1.5rem flex flex-wrap gap-2rem">
            {colors.map(color => (
              <ColorSwatch key={color} colorName={color} />
            ))}
          </section>
        </article>
      </main>

      <Draggable />
    </>
  );
}

export default App;
