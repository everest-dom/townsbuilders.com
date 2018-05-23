let _alloka;
window.addEventListener('load', () => {
    /* r7k12 init */
    (function(w,d,k){w['r7k12']=w['r7k12']||[];var s=d.createElement('script');s.async=1;s.src='https://r7k12.com/scripts/'+k+'/counter.js';s.type='application/javascript';d.head.appendChild(s);})(window,document,'b05277575ae6922f82684ecdeec75d14');r7k12.push({hit:'pageview'});

    console.log('r7k12 Start load');
    $('form').append('<input type="hidden" name="location" value="Ярославль">');
        $('.form-send').each(function(){
            var form = this;
            $(form).find('.btn').click(function(e){
                e.preventDefault();    
                
                var data = {type: "Form"};
                
                if(form['name']) {
                    data.name = form['name'].value;
                }
                if(form['email']) {
                    data.email = form['email'].value;
                }
                if(form['phone']) {
                    data.phone = form['phone'].value;
                }
                console.log("до", data);
                
                if((data.name && data.phone) || (data.name && data.email)) {
                    console.log('after:', data);

                    setTimeout(function() {
                    window.location.href = window.location.href + 'test.php';
                    }, 1500);
                }
            });
        });

        _alloka = {
            objects: {
                '7295d7d7ff43f8c3': {
                    block_class: 'phone_alloka',
                    jivosite: false,
                    email_tracking: false,
                    format: '8 (#{XXXX}) #{XXX}-#{XXX}'
                }
            },
            trackable_source_types:  ["type_in", "referrer", "utm"],
            last_source: false,
              use_geo: false
        };
    


        loadScript("https://analytics.alloka.ru/v4/alloka.js", () => {
                    allokaInit();

        });


            loadScript("./assets/js/sourcebuster.js", () => {});
                console.log('yadrocrm Start load');
                (function(d, w, k) {
                    w.introvert_callback = function() {
                        try {
                            w.II = new IntrovertIntegration(k);
                        } catch (e) {console.log(e)}
                    };
                
                    var n = d.getElementsByTagName("script")[0],
                        e = d.createElement("script");
                
                    e.type = "text/javascript";
                    e.async = true;
                    e.src = "https://api.yadrocrm.ru/js/cache/"+ k +".js";
                    n.parentNode.insertBefore(e, n);
                })(document, window, 'b7e88ad8');

                /* google analitics */
            loadScript("https://www.googletagmanager.com/gtag/js?id=UA-49298821-5", () => {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-49298821-5');
            });

            /* yandex metrica */
             (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter25555916 = new Ya.Metrika2({ id:25555916, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/tag.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks2"); 

            loadStyles("//cdn.callbackhunter.com/widget/tracker.css", () => {
                loadScript("//cdn.callbackhunter.com/widget/tracker.js", () => {
                    var hunter_code="3161490807bf0360a1883d0d2a5185f7";
                });
            });

            /* facebookpixel */
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '688064737954233');
            fbq('track', "PageView");

            /* vk pixel */
            !function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?154",t.onload=function(){VK.Retargeting.Init("VK-RTRG-17690-aBYyF"),VK.Retargeting.Hit()},document.head.appendChild(t)}();

            /* top mail.ru */
            var _tmr = _tmr || [];
            _tmr.push({id: "2545075", type: "pageView", start: (new Date()).getTime()});
            (function (d, w) {
               var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true;
               ts.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js";
               var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
               if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
            })(document, window);
});

function loadScript(e, t) {
    var a = document.createElement("script");
    a.readyState
      ? (a.onreadystatechange = function() {
          ("loaded" != a.readyState && "complete" != a.readyState) ||
            ((a.onreadystatechange = null), t());
        })
      : (a.onload = function() {
          t();
        }),
      (a.src = e),
      document.getElementsByTagName("head")[0].appendChild(a);
  }

function loadStyles(e, t) {
    var a = document.createElement("link");
    a.readyState
      ? (a.onreadystatechange = function() {
          ("loaded" != a.readyState && "complete" != a.readyState) ||
            ((a.onreadystatechange = null), t());
        })
      : (a.onload = function() {
          t();
        }),
      (a.href = e),
      (a.setAttribute('rel','stylesheet')),
      document.getElementsByTagName("head")[0].appendChild(a);
  }