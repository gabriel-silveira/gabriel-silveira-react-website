class Transitions {
  wrapper = document.body;

  profilePicture = document.getElementById('profile-picture');

  sections = Array.from(
    document.getElementsByClassName("section"),
  );

  closeButtons = Array.from(
    document.getElementsByClassName("close-section"),
  );

  hideClass = "hide";

  expandedClass = "is-expanded";

  hasExpandedClass = "has-expanded-item";

  openSection(element: Element) {
    if (
      !element.classList.contains(this.expandedClass)
      && this.profilePicture
    ) {
      this.profilePicture.classList.add(this.hideClass);

      element.classList.add(this.expandedClass);

      this.wrapper.classList.add(this.hasExpandedClass);
    }
  }

  closeSection(element: Element) {
    if (element.classList.contains(this.expandedClass)) {
      element.classList.remove(this.expandedClass);

      this.wrapper.classList.remove(this.hasExpandedClass);
    }
  }

  init() {
    this.sections.forEach((element) => {
      element.addEventListener("click", () => {
        this.openSection(element)
      });
    });

    this.closeButtons.forEach((element) => {

      element.addEventListener("click", (event) => {
        event.stopPropagation();

        if (this.profilePicture) {
          this.profilePicture.classList.remove(this.hideClass);
        }

        if (element.parentElement) {
          this.closeSection(element.parentElement);
        }
      });
    });
  }
}

export default Transitions;
