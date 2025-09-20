# Dr. Mary Chammas - Breast Cancer Awareness Portal

A comprehensive breast cancer awareness and education portal featuring evidence-based information, screening guidelines, and genetic testing resources.

## Features

- **Multi-language Support**: English, Arabic, and French
- **Responsive Design**: Mobile-first approach with modern UI
- **Evidence-Based Content**: Information from ACS, USPSTF, WCRF, NHS, and WHO
- **Interactive Elements**: FAQ sections, age-based screening guides
- **WhatsApp Integration**: Direct consultation booking
- **Analytics**: Google Analytics and Meta Pixel tracking

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Font Awesome 6.5.0
- **Fonts**: Google Fonts (Quicksand)
- **Deployment**: Vercel

## Project Structure

```
├── index.html              # Main page
├── assets/
│   ├── css/
│   │   └── breastcancer.css # Main stylesheet
│   ├── js/
│   │   ├── analytics.js     # Google Analytics & Meta Pixel
│   │   ├── translations.js  # Multi-language support
│   │   └── breastcancer.js  # Main functionality
│   └── images/
│       └── breastcancer/    # Image assets
├── vercel.json             # Vercel configuration
├── package.json            # Project metadata
└── README.md              # This file
```

## Deployment

This project is configured for deployment on Vercel:

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel --prod
   ```

3. **Or connect your GitHub repository** to Vercel for automatic deployments.

## Local Development

To run locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Content Sections

- **Hero Section**: Main call-to-action with awareness messaging
- **Clinical Support**: Doctor information and credentials
- **Age-Based Guidelines**: Evidence-based screening recommendations
- **Prevention Tips**: Lifestyle modifications and risk reduction
- **Warning Signs**: When to seek immediate care
- **Imaging Partners**: Partner centers for mammography booking
- **Genetic Testing**: Information about BRCA and PRS testing
- **FAQ**: Common questions and evidence-based answers
- **Myth vs Fact**: Debunking common misconceptions

## Analytics

The site includes:
- Google Analytics (GA4) tracking
- Meta Pixel for Facebook advertising
- WhatsApp click tracking
- Share button analytics

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - See LICENSE file for details.

## Contact

For questions about this portal, contact Dr. Mary Chammas through the WhatsApp integration on the site.
