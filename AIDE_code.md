# 4M-Y CODENAMES — دليل بناء APK باستخدام AIDE

## ما هو AIDE؟
AIDE (Android IDE) هو تطبيق تطوير متكامل يعمل مباشرة على الهاتف Android.
يمكنك بناء تطبيق APK يعرض اللعبة داخل WebView بدون حاسوب.

---

## الطريقة 1: AIDE Web (الأسهل)

### الأدوات المطلوبة
- [AIDE Web](https://play.google.com/store/apps/details?id=com.aide.web) من Google Play
- هاتف Android 5.0+

### الخطوات

**1. تثبيت AIDE Web**
افتح متجر Google Play وثبّت AIDE Web مجاناً.

**2. إنشاء مشروع جديد**
- افتح AIDE Web → New Project → HTML5 App
- اسم المشروع: `4MY-CODENAMES`

**3. نسخ ملفات اللعبة**
انسخ محتوى مجلد اللعبة (الناتج من الـ ZIP) إلى مجلد المشروع:
```
/sdcard/AIDE/projects/4MY-CODENAMES/
├── index.html
├── favicon.svg
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── p2p.js
│   ├── voice.js
│   ├── audio.js
│   └── words.js
├── cards/
│   ├── card-neutral.png
│   └── card-black.png
└── sounds/
    ├── correct.mp3
    ├── wrong.mp3
    ├── hint.mp3
    ├── win.mp3
    ├── lose.mp3
    ├── black.mp3
    ├── click.mp3
    ├── card-flip.mp3
    └── kick.mp3
```

**4. بناء APK**
- في AIDE Web اضغط على زر البناء ▶
- انتظر حتى يكتمل البناء (قد يستغرق 1-3 دقائق)
- اضغط "Install" لتثبيت APK مباشرة

---

## الطريقة 2: AIDE + WebView (تحكم أكثر)

### إنشاء مشروع Android Native

**1. إنشاء المشروع في AIDE**
- Open AIDE → New Project → Android App
- Package name: `com.fourmy.codenames`
- Min SDK: 21 (Android 5.0)

**2. MainActivity.java**
```java
package com.fourmy.codenames;

import android.app.Activity;
import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.webkit.*;
import android.view.*;
import android.graphics.Color;

public class MainActivity extends Activity {
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // Full screen
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(
            WindowManager.LayoutParams.FLAG_FULLSCREEN,
            WindowManager.LayoutParams.FLAG_FULLSCREEN
        );
        
        // Lock to portrait
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);

        webView = new WebView(this);
        setContentView(webView);

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);       // localStorage
        settings.setAllowFileAccessFromFileURLs(true);
        settings.setAllowUniversalAccessFromFileURLs(true);
        settings.setMediaPlaybackRequiresUserGesture(false); // audio auto-play
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        
        // Enable microphone access
        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onPermissionRequest(PermissionRequest request) {
                request.grant(request.getResources()); // Grant mic + camera
            }
            
            @Override
            public void onReceivedTitle(WebView view, String title) {
                // ignore
            }
        });
        
        webView.setBackgroundColor(Color.parseColor("#F5F0E8"));
        
        // Load the game from assets
        webView.loadUrl("file:///android_asset/www/index.html");
    }

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
    
    @Override
    protected void onPause() {
        super.onPause();
        webView.onPause();
    }
    
    @Override
    protected void onResume() {
        super.onResume();
        webView.onResume();
    }
}
```

**3. AndroidManifest.xml**
```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.fourmy.codenames">

    <!-- Network permissions (PeerJS + jsonblob.com) -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    
    <!-- Microphone (Voice Chat) -->
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />

    <application
        android:label="4M-Y Codenames"
        android:icon="@drawable/ic_launcher"
        android:allowBackup="true"
        android:theme="@style/AppTheme">

        <activity
            android:name=".MainActivity"
            android:screenOrientation="portrait"
            android:exported="true"
            android:hardwareAccelerated="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

**4. res/values/styles.xml**
```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <style name="AppTheme" parent="android:Theme.NoTitleBar.Fullscreen">
        <item name="android:windowBackground">#F5F0E8</item>
    </style>
</resources>
```

**5. نسخ ملفات اللعبة**
في AIDE، أنشئ مجلد `assets/www/` ضمن المشروع ثم انسخ فيه:
```
assets/www/
├── index.html
├── favicon.svg
├── css/style.css
├── js/app.js
├── js/p2p.js
├── js/voice.js
├── js/audio.js
├── js/words.js
├── cards/card-neutral.png
├── cards/card-black.png
└── sounds/*.mp3
```

**6. بناء APK في AIDE**
- اضغط ▶ Build → Generate APK
- انتظر البناء
- Install & Launch

---

## الطريقة 3: Capacitor (للـ PC)

إذا كنت تستخدم حاسوب:
```bash
# تثبيت Capacitor
npm install -g @capacitor/cli @capacitor/core @capacitor/android

# إنشاء مشروع
npx cap init "4MY CODENAMES" "com.fourmy.codenames"

# إضافة Android
npx cap add android

# نسخ ملفات اللعبة إلى www/
cp -r 4my-codenames/* www/

# نسخ للأندرويد وبناء
npx cap copy android
npx cap open android
# ثم في Android Studio: Build → Generate Signed APK
```

---

## ملاحظات مهمة

### الإنترنت مطلوب
- اللعبة تعتمد على PeerJS (خادم signaling) للاتصال بين اللاعبين
- اتصال إنترنت مطلوب لعمل الغرف واكتشافها
- الأصوات (mp3) تُشغَّل محلياً، لا تحتاج إنترنت

### الميكروفون في Android WebView
- AndroidManifest.xml يجب أن يحتوي على `RECORD_AUDIO`
- `WebChromeClient.onPermissionRequest()` يجب أن يقبل الصلاحية تلقائياً
- اختبر على جهاز حقيقي، ليس المحاكي

### localStorage
- `settings.setDomStorageEnabled(true)` ضروري لحفظ ملف اللاعب والإعدادات
- البيانات تُحفظ داخل تطبيق الـ APK ولا تُمسح إلا عند إلغاء التثبيت

### حجم APK النهائي
- اللعبة صغيرة (~2 MB)
- APK النهائي: ~5-8 MB (مع Android Runtime overhead)

---

## روابط مفيدة
- AIDE Web: https://play.google.com/store/apps/details?id=com.aide.web
- AIDE (Full): https://play.google.com/store/apps/details?id=com.aide.android
- PeerJS docs: https://peerjs.com/docs/
- WebRTC في WebView: https://developer.android.com/guide/webapps/webview
