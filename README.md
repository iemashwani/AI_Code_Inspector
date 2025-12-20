# AI Code Inspector 🔍🤖

**AI Code Inspector** is an intelligent web application designed to help developers analyze and inspect code using the power of AI.  
It integrates cutting‑edge AI models to make code review, debugging, and understanding faster and more reliable — whether you’re a beginner or a professional developer.

---

## 🚀 Key Features

✔️ Inspect and analyze both backend and frontend code  
✔ Detect common code issues and runtime errors  
✔ Understand code structure and logic quickly  
✔ Built using modern web technologies  
✔ Extensible and easy to integrate with other tools

---

## 🧠 Why AI Code Inspector?

Understanding unfamiliar codebases can be time‑consuming and error‑prone. With this tool, developers can offload repetitive inspection tasks to an AI‑powered assistant, saving hours of manual review effort.

Ideal for:

- Developers wanting better insight into their code
- Teams looking to enhance code quality
- Students and learners navigating complex repositories

---

## 🛠️ Tech Stack

| Layer       | Technology |
|-------------|------------|
| Frontend    | Vite, React |
| Backend     | Node.js, Express |
| AI Services | Generative AI APIs |
| Deployment  | Optional – e.g., Vercel / Heroku |

---

## 📁 Project Structure

```
AI_Code_Inspector/
├── Backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── ai.controller.js
│   │   ├── services/
│   │   │   └── ai.service.js
│   │   └── app.js
│   ├── package-lock.json
│   ├── package.json
│   └── .env
│
├── Frontend/
│   ├── node_modules/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── Header.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## 📥 Installation

1. Clone the repo:
```sh
git clone https://github.com/iemashwani/AI_Code_Inspector.git
cd AI_Code_Inspector
```

2. Install dependencies:

Frontend:
```sh
cd Frontend
npm install
```

Backend:
```sh
cd Backend
npm install
```

---

## ▶️ Running the App

**Start Backend**
```sh
cd Backend
npm start
```

**Start Frontend**
```sh
cd Frontend
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🧪 Example Usage

1. Open the application in the browser.
2. Input the path or repository you want to inspect.
3. Let the AI analyze your code.
4. View detailed structural insights or error suggestions instantly.

---

## 🛡️ Troubleshooting

If you encounter errors like:
```
"Are they installed?" from Vite
```
➡ Run `npm install` in the respective folder. Ensure Node.js v18+ is installed and environment variables are set.

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feature/<name>`)
3. Commit your changes (`git commit -m "feat: description"`)
4. Push (`git push origin feature/<name>`)
5. Create a Pull Request

Follow best practices and test your changes before submitting.

---

## 📜 License

Open-source under **MIT License**.

---

## 📣 Stay in Touch

If you find this tool useful or want to explore new features, feel free to ⭐ the repo or reach out!
