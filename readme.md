Here's your updated `README.md` file with the correct commands based on your `package.json` configuration.  

```markdown
# 🚀 Pratham's CLI Card

A simple and interactive CLI card showcasing **Pratham Saxena's** profile, skills, work experience, and projects.  
This tool runs in the terminal and provides an elegant way to share your professional details.

---

## 📌 Features
- Displays an interactive CLI card with Pratham's profile.
- Highlights work experience, tech stack, and featured projects.
- Easily executable via Node.js.

---

## 🚀 Installation & Usage

### **1️⃣ Prerequisites**
Ensure you have **Node.js** installed on your system.  
If not, download it from [Node.js Official Website](https://nodejs.org/).

### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### **3️⃣ Install Dependencies**
```sh
npm install
```

### **4️⃣ Run the CLI Card**
```sh
node index.js
```
OR, after making it globally executable:
```sh
chmod +x index.js
./index.js
```

### **5️⃣ Run as a CLI Command**
Since you have defined `"bin": { "meet-pratham": "./index.js" }` in `package.json`,  
you can run it as a command after installing it globally:
```sh
npm link
meet-pratham
```

---

## 📦 Deploying & Republishing

### **1️⃣ Make Changes**
Modify `index.js` as needed, then test it using:
```sh
node index.js
```

### **2️⃣ Publish as an NPM Package**
To publish your CLI card as an NPM package, follow these steps:

1. **Login to NPM (If not logged in)**
   ```sh
   npm login
   ```
2. **Ensure `package.json` is Correct**
   - Update the `"repository"` field:
     ```json
     "repository": {
       "type": "git",
       "url": "https://github.com/prathamsaxen/meet-pratham"
     }
     ```
   - Update `"homepage"`:
     ```json
     "homepage": "https://prathamsaxena.dev"
     ```
3. **Publish the package**
   ```sh
   npm publish --access public
   ```

### **3️⃣ Install & Use the Published Package**
Once published, you (or anyone) can install and run the CLI card globally using:
```sh
npm install -g pratham
meet-pratham
```

---

## 🔄 Updating & Redeploying
If you've made changes and want to update the package:

1. **Bump the version in `package.json`**  
   Example:
   ```json
   "version": "1.1.0"
   ```
2. **Re-publish the package**
   ```sh
   npm publish
   ```

---

## 🎯 Future Enhancements
- Add interactive prompts for different sections.
- Implement ASCII art or animations.
- Convert it into a full-fledged CLI tool.

---

## 📬 Connect with Me
📍 [GitHub](https://github.com/prathamsaxen) 
📍 [LinkedIn](https://linkedin.com/in/prathamsaxena)  
📍 [Portfolio](https://prathamsaxena.vercel.app)  
📍 [Email](mailto:er.prathamsaxena@gmail.com)

---

### Made with ❤️ by Pratham Saxena
