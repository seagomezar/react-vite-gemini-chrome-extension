# 🚀 Minimalist Gemini Chrome Extension Starter with React, Vite, TailwindCSS, and GeminiAPI for #AISprint

This is a sample project to create a minimalist Chrome extension using **React**, **Vite**, **TailwindCSS**, and the **Gemini API**. #AISprint

## ✨ Features

- **⚛️ React & ⚡ Vite:** Modern and fast UI development.
- **🎨 TailwindCSS:** Quick and easy styling for an attractive interface.
- **🔮 Gemini API:** Generate text, translate languages, and much more with artificial intelligence.
- **🔌 CRXJS Vite Plugin:** Simplifies Chrome extension development.

## 🛠️ Installation

1. Rename `.env.example` to `.env` and insert your Gemini key as the value for `VITE_Gemini_API_Key`.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

## 🚀 Usage

1. In the Chrome extensions page (`chrome://extensions`), enable developer mode.
2. Click **"Load unpacked"** and select the project **dist** folder.

## 📁 Important Files

- **`src/App.tsx`:** Main component of the extension.
- **`src/utils/openai.ts`:** Function to interact with the Gemini API.
- **`src/manifest.json`:** Defines the features of the extension.

## 🎨 Customization

- Add more pages to the extension (popup, options, etc.) in the `src/pages` folder.
- Customize the user interface using TailwindCSS.
- Use the Gemini API to add advanced functionality to the extension.

## 💡 Tips

- To update the extension, restart the development server or reload the extension on the Chrome extensions page.
- To package the extension, run `npm run build` and then load the package on the Chrome extensions page.

## 📚 Resources

- [🔮 Gemini API](https://platform.openai.com/docs/api-reference)
- [🔌 CRXJS Vite Plugin](https://crxjs.dev/vite-plugin/)
- [🎨 TailwindCSS](https://tailwindcss.com/)
- [⚛️ React](https://reactjs.org/)

## 🌟 Examples

- **📝 Text Generator:** Use the Gemini API to generate text from user input.
- **🌐 Translator:** Translate text between languages using the Gemini API.
- **❓ Question Answers:** Generate answers to user questions with the Gemini API.

Hope this project helps you create your own Chrome extension using **React**, **Vite**, **TailwindCSS**, and **Gemini**! #AISprint