import AlertMessage from "components/Alerts/SnackBar";
import LilacFrame from "pages/meet";
import PDFFrame from "pages/pdfWindow";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import Index from "./routes/index";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <PDFFrame />
        <LilacFrame />
        <Index />
        <AlertMessage />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
