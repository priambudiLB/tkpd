import Cookies from "universal-cookie";

function App() {
  const cookies = new Cookies();

  const handleSetStrict = () => {
    cookies.set("sid(strict)", "123456", {
      path: "/",
      sameSite: "strict",
    });
    window.location.reload();
  };

  const handleSetLax = () => {
    cookies.set("sid(Lax)", "123456", {
      path: "/",
      sameSite: "lax",
    });
    window.location.reload();
  };

  const handleSetNoneSecure = () => {
    cookies.set("sid(None, Secure)", "123456", {
      path: "/",
      sameSite: "none",
      secure: true
    });
    window.location.reload();
  };

  const handleSetNoneNotSecure = () => {
    cookies.set("sid(None, Not Secure)", "123456", {
      path: "/",
      sameSite: "none",
      secure: false
    });
    window.location.reload();
  };

  return (
    <>
      <button onClick={handleSetStrict}>Strict</button>
      <button onClick={handleSetLax}>Lax</button>
      <button onClick={handleSetNoneSecure}>None, Secure</button>
      <button onClick={handleSetNoneNotSecure}>None, Not Secure</button>
    </>
  );
}

export default App;
