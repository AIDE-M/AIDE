# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

# Uncomment this to preserve the line number information for
# debugging stack traces.
#-keepattributes SourceFile,LineNumberTable

# If you keep the line number information, uncomment this to
# hide the original source file name.
#-renamesourcefileattribute SourceFile

-dontusemixedcaseclassnames
-dontskipnonpubliclibraryclasses
-verbose
-dontoptimize
-dontpreverify
-keepattributes *Annotation*
-keep public class com.google.vending.licensing.ILicensingService
#-keep class com.google.** { *; }
-dontshrink
-keep public class com.android.vending.licensing.ILicensingService
-allowaccessmodification

-keep @android.support.annotation.Keep class * {*;}

-keepclasseswithmembers class * {
    @android.support.annotation.Keep <methods>;
}

-keepclasseswithmembers class * {
    @android.support.annotation.Keep <fields>;
}

-keepclasseswithmembers class * {
    @android.support.annotation.Keep <init>(...);
}
-keep class io.** { *; }
-keep class a.** { *; }
-keep class android.** { *; }
-keep class androidj.** { *; }
-keep class androidx.** { *; }
-keep class com.** { *; }
-keep class jdk.** { *; }
-keep class groovyjarjarantlr.** { *; }
-keep class org.** { *; }
-keep class mf.** { *; }
-keep class net.** { *; }
-keep class com.unity3d.** { *; }
-keep class org.** { *; }
-keep class sun.** { *; }
-keep class sun1.** { *; }
-keep class tv.** { *; }
-dontwarn **
-dontnote **
-dontwarn com.android.**
-dontwarn org.**
-dontwarn com.**
-dontwarn androidx.**
-dontwarn javax.**
-dontwarn java.awt.**
-repackageclasses abc
