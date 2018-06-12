using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class ProjectManager : MonoBehaviour {

	[System.Serializable]
	public class Page {
		public string name;
		public Color background;
	}

	public Camera mainCamera;

	public Page[] pages;

	private Tween colorLerp;

	public void SetPage(string pageName) {
		for (int i = 0 ; i < pages.Length; i++){
			if (pages[i].name == pageName) {
				SetPage(pages[i]);
			}	
		}
	}

	private void SetPage(Page page) {
		if (colorLerp != null && colorLerp.IsPlaying()) {
			colorLerp.Kill();
		}
		colorLerp = mainCamera.DOColor(page.background, 0.5f);
	}

}
