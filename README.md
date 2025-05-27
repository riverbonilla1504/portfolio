# River Florez Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Software Engineer. Built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](public/preview.png)

## 🌟 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Multilingual**: Support for English and Spanish
- **Interactive Sections**:
  - Hero section with animated background
  - About section with skills, experience, and education
  - Projects showcase with live demos
  - Testimonials from colleagues
  - Contact form with email integration

## 🛠️ Technologies Used

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Icons**: Lucide Icons
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies:
```bash
cd portfolio
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

## 🚀 Deployment

The portfolio is deployed on Vercel. To deploy your own version:

1. Fork this repository
2. Create a new project on Vercel
3. Connect your GitHub repository
4. Add your environment variables
5. Deploy!

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── background/  # Background animations
│   │   ├── layout/      # Layout components
│   │   ├── sections/    # Page sections
│   │   └── ui/          # UI components
│   ├── contexts/        # React contexts
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utility functions
│   └── styles/          # Global styles
└── package.json         # Project dependencies
```

## 🎨 Customization

### Adding New Projects

1. Add project details in the translations file (`src/contexts/LanguageContext.tsx`)
2. Add project images to the `public` directory
3. Update the projects array in `src/components/sections/Projects.tsx`

### Modifying Sections

Each section is a separate component in `src/components/sections/`. You can modify:
- Hero section: `Hero.tsx`
- About section: `About.tsx`
- Projects section: `Projects.tsx`
- Testimonials section: `Testimonials.tsx`
- Contact section: `Contact.tsx`

### Changing Theme Colors

Theme colors can be modified in `tailwind.config.js` under the `theme.extend.colors` section.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

- **Name**: River Florez
- **Email**: riverflorez.04@gmail.com
- **Phone**: +57 (321) 971 0852
- **Location**: Pasto, Colombia
- **LinkedIn**: [River Florez](https://www.linkedin.com/in/river-alejandro-bonilla-florez-800736333/)
- **GitHub**: [riverbonilla1504](https://github.com/riverbonilla1504)

## 🙏 Acknowledgments

- Design inspiration from various portfolio websites
- Icons from [Lucide Icons](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
