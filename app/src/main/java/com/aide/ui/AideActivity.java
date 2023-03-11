package com.aide.ui;

import android.app.ActionBar;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.Toast;
import com.aide.ui.view.ActionBarDrawerToggle;
import android.view.ViewGroup;
import com.blankj.utilcode.util.SizeUtils;
import com.aide.clone.R;

public class AideActivity extends com.aide.ui.MainActivity {
	
	public void onCreate(Bundle bundle) {
		super.onCreate(bundle);
		ActionBar actionBar = getActionBar();
		actionBar.setElevation(0.0f);
		setFABVisible(false);
		
	}

	

	private void initDrawerToggle() {
		ActionBar actionBar = getActionBar();
		actionBar.setDisplayHomeAsUpEnabled(true);
	}

	public void setFileTabVisible(boolean z) {
		if (hasTabView()) {
			getActionBar().setNavigationMode(z ? 2 : 0);
		}
	}

	private boolean hasTabView() {
		View findViewById = null;
		try {
			findViewById = getWindow().getDecorView()
					.findViewById(getResources().getIdentifier("action_bar", "id", "android"));
			View view = findViewById;
		} catch (Throwable unused) {
		}
		if (findViewById == null) {
			return false;
		}
		return !hasTabView(findViewById);
	}

	private boolean hasTabView(View view) {
		if (view instanceof ViewGroup) {
			ViewGroup viewGroup = (ViewGroup) view;
			for (int i = 0; i < viewGroup.getChildCount(); i++) {
				View childAt = viewGroup.getChildAt(i);
				if (16908290 != childAt.getId() && hasTabView(childAt)) {
					return true;
				}
			}
		}
		return view.getClass().getSimpleName().endsWith("ScrollingTabContainerView");
	}

	public void setFABVisible(boolean z) {
		int i;
		View findViewById = findViewById(R.id.mainMasterButton);
		int fabBtnSize = 0;
		if (findViewById != null) {
			ViewGroup.LayoutParams layoutParams = findViewById.getLayoutParams();
			if (fabBtnSize <= 0) {
				fabBtnSize = SizeUtils.getMeasuredWidth(findViewById);
			}
			if (fabBtnSize <= 0) {
				fabBtnSize = SizeUtils.dp2px(50);
			}
			if (z) {
				layoutParams.width = fabBtnSize;
				i = fabBtnSize;
			} else {
				i = 0;
				layoutParams.width = 0;
			}
			layoutParams.height = i;
			findViewById.setLayoutParams(layoutParams);
		}
	}
}
