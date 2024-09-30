import { useEffect, useState } from "react";
import { geminiapi } from "../../utils";
export default function Popup() {

  const [response, setResponse] = useState<string | null>(null);

  useEffect(() => {
    geminiapi("Hello Gemini").then((response) => {
      setResponse(response);
    });
  }, []);

  return (
    <div>
      <h1>Hello Popup, Mensage from Gemini API: {response}</h1>
    </div>
  );
}
