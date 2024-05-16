
const app = {
  init() {
    this.cacheDOM();
    this.setupAria();
    this.nextButton();
    this.prevButton();
    this.validateForm();
    this.killEnterKey();
    this.handleStepClicks();
  },

  cacheDOM() {
    if (!$(".multi-step-form").length) return;
    this.$formParent = $(".multi-step-form");
    this.$form = this.$formParent.find("form");
    this.$formStepParents = this.$form.find("fieldset");
    this.$nextButton = this.$form.find(".btn-next");
    this.$prevButton = this.$form.find(".btn-prev");
    this.$stepsParent = $(".steps");
    this.$steps = this.$stepsParent.find("button");
  },

  htmlClasses: {
    activeClass: "active",
    hiddenClass: "hidden",
    visibleClass: "visible",
    animatedVisibleClass: "animated fadeIn",
    animatedHiddenClass: "animated fadeOut",
    animatingClass: "animating"
  },

  setupAria() {
    this.$formStepParents.eq(0).attr("aria-hidden", false);
    this.$formStepParents.not(":first").attr("aria-hidden", true);
    this.handleAriaExpanded();
  },

  nextButton() {
    this.$nextButton.on("click", e => {
      e.preventDefault();
      const $this = $(e.currentTarget);
      const currentParent = $this.closest("fieldset");
      const nextParent = currentParent.next();
      if (this.checkForValidForm()) {
        currentParent.removeClass(this.htmlClasses.visibleClass);
        this.showNextStep(currentParent, nextParent);
      }
    });
  },

  prevButton() {
    this.$prevButton.on("click", e => {
      e.preventDefault();
      const $this = $(e.currentTarget);
      const currentParent = $this.closest("fieldset");
      const prevParent = currentParent.prev();
      currentParent.removeClass(this.htmlClasses.visibleClass);
      this.showPrevStep(currentParent, prevParent);
    });
  },

  showNextStep(currentParent, nextParent) {
    currentParent.addClass(this.htmlClasses.hiddenClass).attr("aria-hidden", true);
    nextParent.removeClass(this.htmlClasses.hiddenClass).addClass(this.htmlClasses.visibleClass).attr("aria-hidden", false);
    nextParent.find(":input").first().focus();
    this.handleState(nextParent.index());
    this.handleAriaExpanded();
  },

  showPrevStep(currentParent, prevParent) {
    currentParent.addClass(this.htmlClasses.hiddenClass).attr("aria-hidden", true);
    prevParent.removeClass(this.htmlClasses.hiddenClass).addClass(this.htmlClasses.visibleClass).attr("aria-hidden", false);
    prevParent.find(":input").first().focus();
    this.handleState(prevParent.index());
    this.handleAriaExpanded();
  },

  handleAriaExpanded() {
    [this.$nextButton, this.$prevButton].forEach(buttons => {
      buttons.each((idx, item) => {
        const controls = $(item).attr("aria-controls");
        const ariaHidden = $(`#${controls}`).attr("aria-hidden");
        $(item).attr("aria-expanded", ariaHidden === "true" ? false : true);
      });
    });
  },

  validateForm() {
    this.$form.validate({
      ignore: ":hidden",
      errorElement: "span",
      rules: {
        thickness: "required",
        width1: "required",
        coatingGrade: "required",
        type1: "required",
        productsSelect: "required",
        quantity: {
          number :true,
        },
        name: {
          required: true,
          minlength: 2,
        },
        email: {
          email: true
        },                   
        phoneNumber: {
            required: true,
            number :true,
            minlength: 10,
        },
        pinCode: {
          required: true,
          number :true,
          minlength: 5
        },
       
        instruction:{
          minlength: 10,
          maxlength: 100,
        },
     
     },
      errorPlacement: (error, element) => {
        if (element.attr("type") === "radio") {
          error.insertBefore(element);
        } else {
          error.insertAfter(element);
        }
      },
      invalidHandler: (event, validator) => {
        validator.errorList.forEach((item, idx) => {
          if (idx === 0) $(item.element).focus();
          $(item.element).attr({ "aria-invalid": true, "aria-required": true });
        });
      },
      submitHandler: form => {
        // form.submit();
        setTimeout(function () {
          Swal.fire({
            text: "Form has been successfully submitted!", 
            icon: "success", 
            iconColor: '#BDD9E8',
            buttonsStyling: !1, 
            confirmButtonText: "Ok, got it!", 
            customClass: { confirmButton: "btn btn-primary sitebtn" },
          });
          // form.submit();
      }, 1000)
      }
    });
  },

  checkForValidForm() {
    return this.$form.valid();
  },

  handleState(step) {
    this.$steps.eq(step).prevAll().removeAttr("disabled");
    this.$steps.eq(step).addClass(this.htmlClasses.activeClass);
    if (step === 0) {
      this.$steps.removeClass(this.htmlClasses.activeClass).attr("disabled", "disabled");
      this.$steps.eq(0).addClass(this.htmlClasses.activeClass);
      
    }
  },

  killEnterKey() {
    $(document).on("keypress", ":input:not(textarea,button)", event => {
      return event.keyCode != 13;
    });
  },

  handleStepClicks() {
    const $stepTriggers = this.$steps;
    const $stepParents = this.$formStepParents;

    $stepTriggers.on("click", e => {
      e.preventDefault();
      const btnClickedIndex = $(e.currentTarget).index();
      $stepTriggers.nextAll().removeClass(this.htmlClasses.activeClass).attr("disabled", true);
      $(e.currentTarget).addClass(this.htmlClasses.activeClass).attr("disabled", true);
      $stepParents.removeClass(this.htmlClasses.visibleClass).addClass(this.htmlClasses.hiddenClass).attr("aria-hidden", true);
      $stepParents.eq(btnClickedIndex).removeClass(this.htmlClasses.hiddenClass).addClass(this.htmlClasses.visibleClass).attr("aria-hidden", false).focus();
      console.log("btn")
      
    });
  }
};

app.init();
