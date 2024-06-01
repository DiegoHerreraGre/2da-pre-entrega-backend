<!DOCTYPE html>
<html>
<head>
  <title><?php bloginfo('name'); ?> - <?php is_front_page() ? bloginfo('description') : wp_title(''); ?></title>
  <meta property="og:url" content="<?php the_permalink(); ?>" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="<?php bloginfo('name'); ?> - <?php is_front_page() ? bloginfo('description') : wp_title(''); ?>" />
  <meta property="og:image" content="<?php the_post_thumbnail_url(); ?>" />
  <meta name="description" content="<?php is_front_page() ? bloginfo('description') : wp_title(''); ?>" />
  <meta name="keywords" content=""/>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta property="og:image:width" content="400" />
  <meta property="og:image:height" content="300" />
  <link rel="icon" type="image/png" href="<?php echo get_stylesheet_directory_uri(); ?>/sources/img/favicon.png"/>
  <link rel="canonical" href="<?php the_permalink(); ?>"/>
  <?php wp_head(); ?>
  <meta name="google-site-verification" content="eLMo5ASnggJjofcjaNSDlADb2rdv6Y3oEmxLjIrBaPA" />
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11198596938"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-11198596938');
  </script>
  <!-- Google Tag Manager -->
  <script>
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})
    (window,document,'script','dataLayer','GTM-TM4353T');
  </script>
  <!-- End Google Tag Manager -->

  <!-- Pixel Base para Miraolas y Pinares de Puyai -->
  <script>
    (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"97119262", enableAutoSpaTracking: true};
    o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;
    s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})
    (window,document,"script","//bat.bing.com/bat.js","uetq");
  </script>


  <!-- Meta Pixel Code -->
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '833998791177192');
    fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=833998791177192&ev=PageView&noscript=1"/></noscript>
  <!-- End Meta Pixel Code -->

</head>
<body <?php body_class(); ?> >
  <!-- Google Tag Manager (noscript) -->
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TM4353T" height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  <!-- End Google Tag Manager (noscript) -->
  <header class="position-sticky sticky-top bg-white">
    <div class="container-fluid">
      <?php get_template_part( 'components/menu/site-menu' ); ?>
    </div>
  </header>  `