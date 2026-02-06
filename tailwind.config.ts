import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: '#347FFA',
        secondary: '#3A5CB5',
        tertiary: '#7EC7F7',
        neutral: '#64748B',
        neutralVariant: '#CBD5E1',
        error: '#EF4444',
        success: '#10B981',
        warning: '#F59E0B',
        
        // UI Colors
        background: '#FAF9FF',
        card: '#FFFFFF',
        textPrimary: '#334155',
        textSecondary: '#64748B',
        placeholder: '#E1E2E8',
        outline: '#CBD5E1',
        divider: '#E2E8F0',
        disabledText: '#94A3B8',
        disableBg:'#F1F5F9',
        disabledBorder: '#C2C7CE',
        secondaryBg: '#F1F5F9',
        primaryContainer: '#C0D7FD',
        secondaryContainer: '#BABDC3',
        onPrimaryContainer: '#163569',
        onSecondaryContainer: '#0D121A',
        errorContainer: '#FAC5C5',
        onErrorContainer: '#641D1D',
        disabledBg: '#F1F5F9',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      fontSize: {
        // Desktop Typography
        'h1-desktop': ['56px', { lineHeight: '1.2', fontWeight: '600' }],
        'h2-desktop': ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3-desktop': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
        'body-lg-desktop': ['24px', { lineHeight: '1.5', fontWeight: '500' }],
        'body-md-desktop': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm-desktop': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'button-desktop': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        
        // Mobile Typography
        'h1-mobile': ['36px', { lineHeight: '1.2', fontWeight: '600' }],
        'h2-mobile': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3-mobile': ['24px', { lineHeight: '1.2', fontWeight: '600' }],
        'body-lg-mobile': ['20px', { lineHeight: '1.5', fontWeight: '500' }],
        'body-md-mobile': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
        'button-mobile': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
        'frame': '16px',
      },
      spacing: {
        'section-gap': '64px',
        'section-gap-mobile': '40px',
        'card-gap': '24px',
        'content-padding': '24px',
        'content-padding-mobile': '16px',
      },
      maxWidth: {
        'content': '1200px',
        'frame': '1400px',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.1)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      utilities: {
        '.focus-ring': {
          '&:focus': {
            outline: 'none',
            'border-color': '#347FFA',
            'box-shadow': '0 0 0 3px rgba(52, 127, 250, 0.1)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config