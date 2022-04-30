class Transitions {
  wrapper = document.body;

  sections = Array.from(
    document.getElementsByClassName("section"),
  );

  closeButtons = Array.from(
    document.getElementsByClassName("close-section"),
  );

  expandedClass = "is-expanded";

  hasExpandedClass = "has-expanded-item";

  init() {
    const openSection = (element: Element) => {
      if (!element.classList.contains(this.expandedClass)) {
        element.classList.add(this.expandedClass);

        this.wrapper.classList.add(this.hasExpandedClass);
      }
    };

    this.sections.forEach((element) => {
      element.addEventListener("click", () => {
        openSection(element)
      });
    });

    this.closeButtons.forEach((element) => {
      element.addEventListener("click", (event) => {
        event.stopPropagation();

        if (element.parentElement) {
          this.closeSection(element.parentElement);
        }
      });
    });
  };

  closeSection(element: Element) {
    if (element.classList.contains(this.expandedClass)) {
      element.classList.remove(this.expandedClass);

      this.wrapper.classList.remove(this.hasExpandedClass);
    }
  };
}

export default Transitions;
