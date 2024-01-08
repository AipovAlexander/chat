import {
  saveSettingsButton,
  profilePopup,
  settingsPopup,
  overlay,
} from "../shared/constants";

export const openPopup = (optionalPopup: HTMLElement | null) => {
  if (optionalPopup) {
    optionalPopup.style.display = "block";
    if (overlay) {
      overlay.style.display = "block";
    }
    setTimeout(() => {
      optionalPopup.style.opacity = "1";
    }, 10);
  }
};

export const closePopup = (optionalPopup: HTMLElement | null) => {
  if (optionalPopup) {
    optionalPopup.style.opacity = "0";

    setTimeout(() => {
      optionalPopup.style.display = "none";
      if (overlay) {
        overlay.style.display = "none";
      }
    }, 300);
  }
};

document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    closePopup(profilePopup);
    closePopup(settingsPopup);
  }
});

saveSettingsButton?.addEventListener("click", () => {
  closePopup(profilePopup);
  closePopup(settingsPopup);
});

const checkBox = document.querySelector(".checkbox") as HTMLInputElement | null;
const menuItems = document.querySelector(".menu-items") as HTMLElement | null;
const hamburgerLines = document.querySelector(
  ".hamburger-lines"
) as HTMLElement | null;

checkBox?.addEventListener("change", () => {
  if (checkBox?.checked && menuItems && hamburgerLines) {
    menuItems.style.transform = "translateX(345%)";
    const line1Element = hamburgerLines.querySelector(".line1") as HTMLElement;
    if (line1Element) {
      line1Element.style.transform = "rotate(45deg) translate(5px, 5px)";
    }
    const line2Element = hamburgerLines.querySelector(".line2") as HTMLElement;
    if (line2Element) {
      line2Element.style.transform = "scaleY(0)";
    }
    const line3Element = hamburgerLines.querySelector(".line3") as HTMLElement;
    if (line3Element) {
      line3Element.style.transform = "rotate(-45deg) translate(5px, -5px)";
    }
  } else if (menuItems && hamburgerLines) {
    menuItems.style.transform = "translateX(-100%)";
    const line1Element = hamburgerLines.querySelector(".line1") as HTMLElement;
    if (line1Element) {
      line1Element.style.transform = "rotate(0)";
    }
    const line2Element = hamburgerLines.querySelector(".line2") as HTMLElement;
    if (line2Element) {
      line2Element.style.transform = "scaleY(1)";
    }
    const line3Element = hamburgerLines.querySelector(".line3") as HTMLElement;
    if (line3Element) {
      line3Element.style.transform = "rotate(0)";
    }
  }
});
