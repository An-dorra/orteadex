import { useEffect, useMemo, useState } from "react";
import HomePage from "./pages/HomePage.jsx";
import Header from "./layouts/Header.jsx";
import { LOCALE_STORAGE_KEY, applyLocaleToDocument, getInitialLocale, homeCopies, normalizeLocale } from "./content/homeLocales.js";

function App() {
  const [selectedLocale, setSelectedLocale] = useState(() => getInitialLocale());
  const copy = useMemo(() => homeCopies[selectedLocale.code] ?? homeCopies.en, [selectedLocale]);

  useEffect(() => {
    applyLocaleToDocument(selectedLocale);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, selectedLocale.code);
    }
    if (typeof document !== "undefined") {
      document.title = copy.metaTitle;
    }
  }, [copy.metaTitle, selectedLocale]);

  const handleSelectLocale = (locale) => {
    setSelectedLocale(normalizeLocale(locale?.code ?? locale));
  };

  return (
    <>
      <Header copy={copy} selectedLocale={selectedLocale} onSelectLocale={handleSelectLocale} />
      <HomePage copy={copy} selectedLocale={selectedLocale} onSelectLocale={handleSelectLocale} />
    </>
  );
}

export default App;
