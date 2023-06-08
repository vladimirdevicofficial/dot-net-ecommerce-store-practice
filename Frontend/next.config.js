/** @type {import("next").NextConfig} */
const webpack = require('webpack');
const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' });
const WebpackFavicons = require('webpack-favicons');


const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  sw: 'sw.js',
  scope: '/',
  cacheStartUrl: false,
  dynamicStartUrl: false,
});

/*
 * Const ContentSecurityPolicy = `
 * default-src 'self';
 * script-src 'report-sample' 'self' 'unsafe-eval';
 * style-src 'unsafe-hashes' 'sha256-4/2nIlfwIVTJ1+JcNQ6LkeVWzNS148LKAJeL5yofdN4=' 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=' 'sha256-Hq5roashJEWxM2SOJ2qK/rVjpSFDF+ZA80n3bH5sET0=' 'sha256-e8ytLXMthPDq183HwdBXrGtWZoCMYIHlUDu23oGYVoU=' 'sha256-0xolJe4klNcC+/DcYHFW/AFq+o4qlUHb5NhDc87pkpw=' 'sha256-/WIzkYlxGYDgsb753gWdy5Lze7TtJ14+luJEaC8TWvU=' 'sha256-Hq5roashJEWxM2SOJ2qK/rVjpSFDF+ZA80n3bH5sET0=' 'sha256-e8ytLXMthPDq183HwdBXrGtWZoCMYIHlUDu23oGYVoU=' 'sha256-MmexY5TvGETQJqrtJ6f8kSEYdd+y7gus2NY+YHH5/vM=' 'sha256-e8ytLXMthPDq183HwdBXrGtWZoCMYIHlUDu23oGYVoU=' 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=' 'sha256-aXcOPb0G9EDUMpCWRp/W+52ZI9Cr32nrqq8s+T1mt04=' 'sha256-Hq5roashJEWxM2SOJ2qK/rVjpSFDF+ZA80n3bH5sET0=' 'sha256-0xolJe4klNcC+/DcYHFW/AFq+o4qlUHb5NhDc87pkpw=' 'sha256-/WIzkYlxGYDgsb753gWdy5Lze7TtJ14+luJEaC8TWvU=';
 * object-src 'none';
 * base-uri 'self';
 * connect-src 'self';
 * font-src 'self';
 * frame-src 'self';
 * img-src 'self';
 * manifest-src 'self';
 * media-src 'self';
 * report-uri 'self';
 * worker-src 'self' 'sha256-jeoPCcrZ+7DcHbuM1xlm0myMzHwFSd3D9H7J8PrJaZw=';
 * `;
 */
const securityHeaders = [

  /*
   * {
   * key: "Content-Security-Policy",
   * value: ContentSecurityPolicy.replace(/\s{2,}/g, " ")
   *  .trim()
   * },
   */
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer',
  },
  {
    key: 'Feature-Policy',
    value: 'accelerometer \'none\'; autoplay \'none\'; camera \'none\'; display-capture \'none\'; document-domain \'none\'; encrypted-media \'none\'; fullscreen \'none\'; geolocation \'none\'; gyroscope \'none\'; magnetometer \'none\'; microphone \'none\'; midi \'none\'; payment \'none\'; picture-in-picture \'none\'; sync-xhr \'none\'; usb \'none\'; xr-spatial-tracking \'none\';',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
];

const nextConfig = {
  headers: async function () {
    return [
      {

        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  swcMinify: true,
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  scrollRestoration: false,
  compiler: { removeConsole: { exclude: ['error'] } },
  images: {
    domains: [],
    unoptimized: true,
  },
  i18n: {
    locales: [
      'en-US',
      'fr',
      'nl-NL',
    ],
    defaultLocale: 'en-US',
  },
  webpack: (config, {
    dev,
    isServer,
  }) => {
    if (!dev) {
      config.devtool = 'source-map';
    }

    // Audio Support
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });

    // Shaders support
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    });

    if (!dev) {
      config.plugins.push(

        /*
         * New GenerateSW({
         * modifyURLPrefix: { '//': process.env.APP_URL + '/' },
         * }),
         */
        new webpack.LoaderOptionsPlugin({

          // Test: /\.xxx$/, // may apply this only for some modules
          options: { publicPath: '' },
        }),

        /*
         * Webpack Favicons
         * If favicons have been generated disable the plugin and remove the /icons folder from the .next/ folder
         */ new WebpackFavicons({
          src: path.resolve(__dirname, 'public/favicon.svg'),

          /**
           * Overrides default icons path.
           * @type {string}
           */
          path: 'icons',
          appName: process.env.APP_NAME,
          appShortName: process.env.APP_SHORT_NAME,
          appDescription: process.env.APP_DESCRIPTION,
          developerName: process.env.APP_DEVELOPER_NAME,
          developerURL: process.env.APP_DEVELOPER_URL,
          dir: 'auto',
          lang: 'en-US',
          background: '#fff',
          theme_color: '#fff',

          /**
           * Apple-status-bar-style
           * @type {string}
           * @value 'black-translucent' | 'default' | 'black'
           */
          appleStatusBarStyle: 'black-translucent',

          /**
           * Display Mode
           * @type {string}
           * @value 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser'
           */
          display: 'standalone',

          /**
           * Orientation Type
           * @type {string}
           * @value 'any' | 'natural' | 'portrait' | 'landscape'
           */
          orientation: 'portrait',
          scope: '',
          start_url: '',

          /**
           * Installation prompt ??
           * @type {boolean}
           */
          preferRelatedApplications: false,
          relatedApplications: undefined, // Information about the native companion apps. This will only be used if `preferRelatedApplications` is `true`. `Array<{ id: string, url: string, platform: string }>`
          version: '1.0.0',

          /**
           * Keeps pixel's sharpness
           * @type {boolean}
           * @availability Offline
           */
          pixel_art: false,

          /**
           * Sends cookies when manifest is fetched
           * @type {boolean}
           */
          loadManifestWithCredentials: true,
          manifestMaskable: true,
          icons: {
            android: {
              offset: 10,
              background: 'white',
            }, // || an array of sources
            appleIcon: {
              offset: 10,
              background: 'white',
            }, // || an array of sources
            appleStartup: {
              offset: 10,
              background: 'white',
            }, // || an array of sources
            favicons: {
              offset: 10,
              background: 'white',
            }, // || an array of sourcess
            windows: {
              offset: 10,
              background: 'white',
            }, // || an array of sources
          },
        })
      );
    }

    return config;
  },
};

const KEYS_TO_OMIT = [
  'webpackDevMiddleware',
  'configOrigin',
  'target',
  'analyticsId',
  'webpack5',
  'amp',
  'assetPrefix',
  'experimental',
  'scrollRestoration',
  'i18n',
];

module.exports = (_phase, { defaultConfig }) => {
  const plugins = [[withPWA], [withBundleAnalyzer, {}]];

  const wConfig = plugins.reduce((acc, [plugin, config]) => {
    return plugin({
      ...acc,
      ...config,
    });
  }, {
    ...defaultConfig,
    ...nextConfig,
  });

  const finalConfig = {};

  Object.keys(wConfig)
    .forEach((key) => {
      if (!KEYS_TO_OMIT.includes(key)) {
        finalConfig[key] = wConfig[key];
      }
    });

  return finalConfig;
};
