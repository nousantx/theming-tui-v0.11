import { useLayoutEffect } from "react";
import tenoxui, { use, makeStyles } from "tenoxui";
import { getStyleConfig } from "./styles/lib/config";
import { useColorSet } from "./styles/lib/colorConfig";

function App() {
  const { colorSet, changeTheme } = useColorSet();

  useLayoutEffect(() => {
    use(getStyleConfig(colorSet));
    makeStyles({
      html: "tr-prop-all tr-time-0.3s",
      body: "bg-neutral-900 text-neutral-100 transition-color",
      a: "td-none"
    });
    tenoxui();
  }, [colorSet]);

  return (
    <>
      <nav className="center space py-1rem px-2rem w-mx-1440px mx-auto">
        <h1 className="text-neutral-100 fs-1.2rem fw-400 flex ai-center">
          <span className="text-primary-500 ti ti-vtx-solid fs-1.1em block mr-6px"></span>
          Tenox<span className="text-primary-500 fw-500">UI</span>
        </h1>
        <div className="center gap-12px">
          <a
            href="https://github.com/nousantx/theming-tui-v0.11"
            className="btn bg-neutral-800 text-primary-500 hover:bg-neutral-700 tr-time-0.3s box-28px p-0 fs-16px"
          >
            <span className="ri-github-fill"></span>
          </a>
          <button
            onClick={changeTheme}
            className="btn bg-neutral-800 text-primary-500 hover:bg-neutral-700 tr-time-0.3s box-28px p-0 fs-16px"
          >
            <span className="ri-moon-clear-line"></span>
          </button>
        </div>
      </nav>
      <main className="w-mx-1440px mx-auto p-2rem h-mn-100vh center">
        <header className="ta-center tw-balance position-relative">
          <div className="bg-primary-500 box-50vh blur-30vh position-absolute opa-0.4 z--9 br-100% r-30%"></div>
          <h1 className="lh-1 fs-2.4rem ls--0.030">
            <span className="text-primary-500">TenoxUI</span>: It's a CSS framework, trust me!
          </h1>
          <p className="family-poppins fw-500 text-neutral-400 ls--0.030 fs-14px mt-1rem">
            Here's how you theming with tenoxui framework, a bit complicated but works.
          </p>

          <div className="mt-2.5rem center gap-8px">
            <a
              href="https://tenoxui.web.app"
              className="btn bg-primary-500 hover:bg-primary-700 text-neutral-900 fw-500 center gap-6px"
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
      </main>
    </>
  );
}

export default App;
