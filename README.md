# Vikas Uniyal - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, premium UI with glassmorphism effects
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth scroll and micro-animations using Framer Motion
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Ready**: Meta tags and semantic HTML for better search visibility

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Netlify

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/virusvickee/my-portfolio-website.git
cd my-portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

The `netlify.toml` file is already configured for seamless deployment.

### Manual Deployment

1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... add your colors
  }
}
```

### Content
Update personal information in the respective components:
- `Hero.jsx` - Main introduction
- `About.jsx` - About section content
- `Skills.jsx` - Technical skills
- `Projects.jsx` - Project showcase
- `Contact.jsx` - Contact information

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Lazy loading for images
- Optimized animations
- Minimal bundle size
- Fast loading times

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Style

- ESLint for code linting
- Prettier for code formatting
- Consistent component structure

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Vikas Uniyal**
- Email: vikasuniyalcsa@gmail.com
- GitHub: [@virusvickee](https://github.com/virusvickee)
- LinkedIn: Vikas Uniyal

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
