# 🚀 Catalyst - Trainer Dashboard

A modern, responsive dashboard for fitness trainers to manage their training videos and track performance metrics.

![Catalyst Dashboard](public/screenshot.png)

## ✨ Features

- 📱 **Fully Responsive Design**

  - Mobile-first approach
  - Beautiful UI on all devices
  - Smooth transitions and animations

- 🎥 **Video Management**

  - Upload training videos
  - Track video status (Pending, Approved, Rejected)
  - Edit video details
  - View video statistics

- 📊 **Advanced Analytics**

  - Total videos overview
  - View count tracking
  - Status distribution charts
  - Performance metrics

- 🌓 **Dark Mode Support**
  - Light/Dark theme toggle
  - System preference detection
  - Smooth theme transitions

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/catalyst.git
   cd catalyst
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📁 Project Structure

```
catalyst/
├── app/
│   ├── components/     # Reusable UI components
│   ├── context/       # React context providers
│   ├── dashboard/     # Dashboard pages
│   └── lib/          # Utility functions
├── public/           # Static assets
└── styles/          # Global styles
```

## 🎨 Customization

### Theme Configuration

The project uses Tailwind CSS for styling. You can customize the theme by modifying:

- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - CSS variables and global styles

### Dark Mode

Dark mode is implemented using `next-themes`. You can customize the theme colors in:

- `app/globals.css` - CSS variables for both light and dark themes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful components
- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

Made with ❤️ by [Your Name]
