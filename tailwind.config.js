module.exports = {
    content: [
        './pages/**/*.tsx',
        './components/**/*.tsx',
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        container: {
            center: true,
        },
        extend: {
            height: {
                '90%': '90%',
                'banner': 'calc(100% - 64px)',
                'banner-2': 'calc(90% - 64px)',
                '90vh': '90vh',
                'full-vh': '100vh',
            },
            minHeight: {
                '70vh': '70vh',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
