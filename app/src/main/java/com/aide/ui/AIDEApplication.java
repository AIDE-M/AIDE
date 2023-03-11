
package com.aide.ui;

import android.app.ActivityManager;
import android.app.ActivityManager.RunningAppProcessInfo;
import android.app.PendingIntent;
import android.content.Context;
import android.os.Process;
import android.preference.PreferenceManager;
import android.provider.Settings.System;
import android.support.multidex.MultiDexApplication;
import com.aide.ui.marketing.b;
import com.crashlytics.android.a;
import com.mrikso.theme.ColorsLoader;
import io.fabric.sdk.android.Fabric;
import io.fabric.sdk.android.g;
import com.tkstudio.ide.Logger;


public class AIDEApplication extends MultiDexApplication {
    
    private static Context context;

    private boolean DW() {
        int myPid = Process.myPid();
        for (RunningAppProcessInfo runningAppProcessInfo : ((ActivityManager) getSystemService("activity")).getRunningAppProcesses()) {
            if (runningAppProcessInfo.pid == myPid) {
                return runningAppProcessInfo.processName.contains(":");
            }
        }
        return true;
    }

    public static Context getContext() {
        return context;
    }

    public static boolean get_adrt_iofo() {
        return PreferenceManager.getDefaultSharedPreferences(context).getBoolean("use_adrt", true);
    }

    public static boolean get_gradle_iofo() {
        return PreferenceManager.getDefaultSharedPreferences(context).getBoolean("use_gradle", true);
    }

    public static boolean get_todo_iofo() {
        return PreferenceManager.getDefaultSharedPreferences(context).getBoolean("use_todo", false);
    }

    private void j6() {
        boolean z = true;
        Fabric.j6(this, new g[]{new a()});
        a.j6("Crashlytics initialized");
        if (System.getInt(getContentResolver(), "always_finish_activities", 0) <= 0) {
            z = false;
        }
        a.j6("alwaysFinishActivities", z);
        a.j6("pid", Process.myPid());
    }

    public void onCreate() {
        super.onCreate();
        Logger.initialize(this);
        j6();
        ColorsLoader.Init(this);
        String str = "com.aide.ui";
        f.j6(str);
        context = getApplicationContext();
        if (DW()) {
            PendingIntent Zo;
            String str2;
            int i;
            if (f.j6.equals(str)) {
                Zo = MainActivity.Zo(this);
                str2 = "New version of AIDE installed";
                i = 2131165302;
            } else if (f.j6.equals("com.aide.web")) {
                Zo = MainActivity.Zo(this);
                str2 = "New version of AIDE Web installed";
                i = 2131165309;
            } else {
                return;
            }
            b.j6(this, 43453, i, str2, "Check out what's new!", Zo);
        }
    }
}
