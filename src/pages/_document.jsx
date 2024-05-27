import Document, { Head, Html, Main, NextScript } from "next/document";

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html>
        <Head>
          <title>
           Timeline
          </title>
          <meta
            name="description"
            content=""
            key="desc"
          />


          <script
            async
            id="google-analytics"
            strategy="worker"
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5QJS74ZR');
              `,
            }}
          />
          {/* ---------Google Tag Manager End--------- */}

          {/* -------------Meta Pixel Start----------- */}
          <script
            async
            id="meta-pixel"
            strategy="worker"
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '{your-pixel-id-goes-here}');
              fbq('track', 'PageView');
              `,
            }}
          />
          <noscript
            async
            id="fb"
            strategy="worker"
            loading="lazy"
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none" 
              src="https://www.facebook.com/tr?id={your-pixel-id-goes-here}&ev=PageView&noscript=1"/>`,
            }}
          />
          {/* --------------Meta Pixel End------------ */}

          {/* ---------------Hotjar Start------------- */}
          <script
            async
            id="hotjar"
            strategy="worker"
            dangerouslySetInnerHTML={{
              __html: `(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3847778,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          />
          {/* ---------------Hotjar End------------- */}
        </Head>
        <body>
          {/* Asynchronously load the custom script */}
          <noscript
            id="gtm"
            async
            strategy="worker"
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5QJS74ZR"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
