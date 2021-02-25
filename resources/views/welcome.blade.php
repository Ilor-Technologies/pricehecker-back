<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Pricechecker Portal</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyApVJI8RrUJg7UsWeja6ZSq7v3g-n-fWTQ"></script>
    <style>
        .loader-outer {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9999;
            background: #fff;
            visibility: visible;
            opacity: 1;
            -webkit-transition: visibility 0.5s, opacity 0.3s linear;
            -moz-transition: visibility 0.5s, opacity 0.3s linear;
            transition: visibility 0.5s, opacity 0.3s linear;
        }

        .loader-outer.hide {
            visibility: hidden;
            opacity: 0;
        }

        .loader-outer .loader-container {
            height: 100%;
            width: 100%;
            display: table;
        }

        .loader-outer .loader-container .loader-inner {
            vertical-align: middle;
            height: 100%;
            display: table-cell;
        }

        .loader-outer .loader-container .loader-inner .loader {
            width: 80px;
            margin: auto;
            position: relative;
            height: 60px;
        }

        .loader-outer .loader-container .loader-inner .loader .mask {
            position: absolute;
            overflow: hidden;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
        }

        .loader-outer .loader-container .loader-inner .loader .mask .plane {
            background: #00786a;
            width: 400%;
            height: 100%;
            position: absolute;
        }

        .loader-outer .loader-container .loader-inner .loader #top {
            width: 53px;
            height: 15px;
            left: 20px;
            -webkit-transform: skew(-15deg, 0);
            -moz-transform: skew(-15deg, 0);
            transform: skew(-15deg, 0);
        }

        .loader-outer .loader-container .loader-inner .loader #top .plane {
            -webkit-animation: trans1 1.3s ease-in infinite 0s backwards;
            -moz-animation: trans1 1.3s ease-in infinite 0s backwards;
            animation: trans1 1.3s ease-in infinite 0s backwards;
        }

        .loader-outer .loader-container .loader-inner .loader #middle {
            width: 33px;
            height: 15px;
            left: 20px;
            top: 15px;
            -webkit-transform: skew(-15deg, 40deg);
            -moz-transform: skew(-15deg, 40deg);
            transform: skew(-15deg, 40deg);
        }

        .loader-outer .loader-container .loader-inner .loader #middle .plane {
            transform: translate3d(0px, 0, 0);
            background: #00786a;
            -webkit-animation: trans2 1.3s linear infinite 0.3s backwards;
            -moz-animation: trans2 1.3s linear infinite 0.3s backwards;
            animation: trans2 1.3s linear infinite 0.3s backwards;
        }

        .loader-outer .loader-container .loader-inner .loader #bottom {
            width: 53px;
            height: 15px;
            top: 30px;
            -webkit-transform: skew(-15deg, 0);
            -moz-transform: skew(-15deg, 0);
            transform: skew(-15deg, 0);
        }

        .loader-outer .loader-container .loader-inner .loader #bottom .plane {
            -webkit-animation: trans3 1.3s ease-out infinite 0.7s backwards;
            -moz-animation: trans3 1.3s ease-out infinite 0.7s backwards;
            animation: trans3 1.3s ease-out infinite 0.7s backwards;
        }

        .loader-outer .loader-container .loader-inner .loader p.loader-text {
            color: #000;
            position: absolute;
            top: 42px;
            font-family: 'MoonHouse';
            font-size: 16px;
        }

        .loader-outer .loader-container .loader-inner .loader span {
            color: #00786a;
            min-width: 50px;
            min-height: 50px;
            background: url(./loader.svg);
        }

    </style>
</head>
<body>
<app-root></app-root>
<div class="loader-outer" id="preloader">
    <div class="loader-container">
        <div class="loader-inner">
            <div class="loader">
                <span></span>
            </div>
        </div>
    </div>
</div>
<script src="/runtime-es2015.js" type="module"></script>
<script src="/polyfills-es2015.js" type="module"></script>
<script src="/runtime-es5.js" nomodule></script>
<script src="/polyfills-es5.js" nomodule></script>
<script src="/styles-es2015.js" type="module"></script>
<script src="/styles-es5.js" nomodule></script>
<script src="/scripts.js"></script>
<script src="/vendor-es2015.js" type="module"></script>
<script src="/main-es2015.js" type="module"></script>
<script src="/vendor-es5.js" nomodule></script>
<script src="/main-es5.js" nomodule></script>
</body>
</html>
