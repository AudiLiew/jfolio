import "../scss/main.scss";
import terminal from "./components/terminal";
import { gsap } from "gsap";
import debounce from 'lodash.debounce';

(function(){
  //terminal("¯\\_(ツ)_/¯");
  const OPTIONS = {
    scollMaxTime: 100
  };

  const NAMES = {
    mainNav: "navbar-menu",
    mainNavLinks: "navbar-menu li",
    mainNavToggle: "navbar-burger",
    dropdownToggle: "dropdown", // data-toggle="dropdown"
    mainnavDropown: "has-dropdown",
    youtubeEmbed: "youtubeEmbed",
    active: "is-active",
    dropdownOpened: "dropdown-opened",
    mainHeader: "mainHeader",
    mainHeaderPinned: "mainHeader--pinned", 
    mainHeaderUnpinned: "mainHeader--unpinned",
  };

  const DOM = {
    body: document.querySelector("body"),
    mainHeader: document.querySelector("." + NAMES.mainHeader),
    mainNav: document.querySelector("#" + NAMES.mainNav),
    mainNavLinks: document.querySelectorAll("." + NAMES.mainNavLinks),
    mainNavToggle: document.querySelector("#" + NAMES.mainNavToggle),
    mainNavDropdown: document.querySelectorAll("." + NAMES.mainNavLinks + "." + NAMES.mainnavDropown),
    mainNavDropdownToggle: document.querySelectorAll("[data-toggle='" + NAMES.dropdownToggle +"']"),
  };

  const STATE = { 
    mobileMenuIsActive: false,
    dropdownMenuIsActive: false,
    lastPageScrollY: 0,
    bodyLastKnownScrollY: 0,
    bodyCurrentScrollY: 0,
    scheduledScrollUpdate: false,
    headerIsPinned: true,
  };

  const pinHeader = (reachedTheTop = false) => {
    if(STATE.headerIsPinned || STATE.isInModalMode || STATE.isModalTransition) return;
    DOM.mainHeader.classList.remove(NAMES.mainHeaderUnpinned);
    DOM.mainHeader.classList.add(NAMES.mainHeaderPinned);
    STATE.headerIsPinned = true;
  };
  
  const pinHeaderTop = () => {
    DOM.mainHeader.classList.remove(NAMES.mainHeaderUnpinned);
    DOM.mainHeader.classList.remove(NAMES.mainHeaderPinned);
    STATE.headerIsPinned = true;
  };

  const unpinHeader = () => {
    if(!STATE.headerIsPinned || STATE.isInModalMode || STATE.isModalTransition) return;
    DOM.mainHeader.classList.remove(NAMES.mainHeaderPinned);
    DOM.mainHeader.classList.add(NAMES.mainHeaderUnpinned);

    STATE.headerIsPinned = false;
  };

  const toPinHeaderOrNot = () => {
    STATE.bodyCurrentScrollY = window.scrollY;
    STATE.scheduledScrollUpdate = true;

    if (STATE.bodyCurrentScrollY == 0) {
      pinHeaderTop();
    } else if (STATE.bodyCurrentScrollY < STATE.bodyLastKnownScrollY) {
      pinHeader();
    } else if (STATE.bodyCurrentScrollY > STATE.bodyLastKnownScrollY) {
      unpinHeader();
    } 

    if(!STATE.isModalTransition) {
      STATE.bodyLastKnownScrollY = STATE.bodyCurrentScrollY;
    }
    STATE.scheduledScrollUpdate = false;
  };

  const onScroll = () => {
    if(STATE.scheduledScrollUpdate || STATE.isInModalMode || STATE.mobileMenuIsActive || STATE.dropdownMenuIsActive) {
      return;
    }
    
    requestAnimationFrame(toPinHeaderOrNot);
  }; 

  const toggleMobileMenu = () => {
    //DOM.mainNav.classList.toggle(NAMES.active);
    
    let Timeline = gsap.timeline();
    if (STATE.mobileMenuIsActive) {
      // close menu
      Timeline
        .to(DOM.mainNav, {duration: .2, x:"100%", ease: "expo.easeInOut"})
        .set(DOM.mainNav, {autoAlpha: 0})
        .set([DOM.mainNav, DOM.mainNavLinks], {clearProps:'all'})
      ;
    } else {
      // open menu

      Timeline
        .set(DOM.mainNav, {autoAlpha: 1})
        .to(DOM.mainNav, {duration:.3 ,x:"0%", ease: "expo.easeInOut"})
        .from(DOM.mainNavLinks, {duration:.2, x: "20px", opacity: 0, stagger: .02}, "-=.15")
      ;
    }

    STATE.mobileMenuIsActive = !STATE.mobileMenuIsActive;
  };

  const setDropdownToggle = (state = true) => {
    STATE.dropdownMenuIsActive = state;
    //terminal('Setting dropdownMenuIsActive to: ' + state);
  };

  const closeAllDropdown = () => {
    if (DOM.mainNavDropdown.length <= 0) {
      return;
    }

    for (let i = 0, l = DOM.mainNavDropdown.length; i < l; i++) {
      DOM.mainNavDropdown[i].classList.remove(NAMES.dropdownOpened);
    }

    setDropdownToggle(false);
  };

  const openDropdown = whoToOpen => {
    
    if (DOM.mainNavDropdown.length <= 0) {
      return;
    }

    for (let i = 0, l = DOM.mainNavDropdown.length; i < l; i++) {
      if (DOM.mainNavDropdown[i] == whoToOpen) {
        if (DOM.mainNavDropdown[i].classList.contains(NAMES.dropdownOpened)) {
          DOM.mainNavDropdown[i].classList.remove(NAMES.dropdownOpened);
          setDropdownToggle(false);
        } else {
          DOM.mainNavDropdown[i].classList.add(NAMES.dropdownOpened);
          setDropdownToggle(true);
        }
        
      } else {
        DOM.mainNavDropdown[i].classList.remove(NAMES.dropdownOpened);
      }
    }
  };

  const setupListeners = () => {
    ///////////////////////
    //
    // Setup Listeners 

    // Toggle for mobile menu burger
    DOM.mainNavToggle.addEventListener('click', ev => {
      toggleMobileMenu();
      ev.stopPropagation();
    });

    
    if (DOM.mainNavDropdownToggle.length > 0) {
      for (let i = 0, l = DOM.mainNavDropdownToggle.length; i < l; i++) {
        DOM.mainNavDropdownToggle[i].addEventListener('click', function(ev) {
          openDropdown(this.parentNode);
          ev.stopPropagation();
          ev.preventDefault();
          //terminal(this.parentNode);
          //this.parentNode.classList.toggle(NAMES.active);
        });
      }
    }

    // Toggle for body, to close mobile menu
    DOM.body.addEventListener("click", ev => {

      if (STATE.mobileMenuIsActive) {
        let targ = ev.target.classList;
        
        if (!(targ.contains(NAMES.mainNav) || targ.contains(NAMES.mainNavLanguageSelect))) {
          toggleMobileMenu();
        }
      }

      if (STATE.dropdownMenuIsActive) {
        closeAllDropdown();
      }
    });
  };

  const Init = () => {
    terminal('🚀App:init');
    terminal('MODE: ' + process.env.NODE_ENV);
    setupListeners();

    ////////////////
    //
    // Setup sticky main navigation
    document.addEventListener('scroll', onScroll, false);

    // window.addEventListener('scroll', debounce(checkMainheaderSticky, OPTIONS.scollMaxTime)); 
    
  };

  Init();

})(); // Fin  