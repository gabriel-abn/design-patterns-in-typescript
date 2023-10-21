/**
 * Abstract Product A
 */
interface Button {
  render(): void;
}

/**
 * Concrete Product A1
 */
class WindowsButton implements Button {
  render() {
    console.log("Rendering a Windows button.");
  }
}

/**
 * Concrete Product A2
 */
class MacButton implements Button {
  render() {
    console.log("Rendering a Mac button.");
  }
}

/**
 * Abstract Product B
 */
interface Checkbox {
  render(): void;
}

/**
 * Concrete Product B1
 */
class WindowsCheckbox implements Checkbox {
  render() {
    console.log("Rendering a Windows checkbox.");
  }
}

/**
 * Concrete Product B2
 */
class MacCheckbox implements Checkbox {
  render() {
    console.log("Rendering a Mac checkbox.");
  }
}

/**
 * Abstract Factory
 */
interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

/**
 * Concrete Factory 1
 */
class WindowsFactory implements GUIFactory {
  createButton() {
    return new WindowsButton();
  }

  createCheckbox() {
    return new WindowsCheckbox();
  }
}

/**
 * Concrete Factory 2
 */
class MacFactory implements GUIFactory {
  createButton() {
    return new MacButton();
  }

  createCheckbox() {
    return new MacCheckbox();
  }
}

/**
 * Client Code
 */

/**
 * Renders a GUI using the provided factory.
 * @param factory - The GUI factory to use.
 */
function renderGUI(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  button.render();
  checkbox.render();
}

/**
 * The Abstract Factory design pattern provides an interface for creating families of related
 * objects without specifying their concrete classes. This allows for creating objects that are
 * related to each other without having to know their specific implementation details.
 * In this example, the `renderGUI` function uses a `GUIFactory` to create a button and a checkbox,
 * without knowing the specific implementation of those objects.
 */

// Usage
renderGUI(new WindowsFactory()); // Output: Rendering a Windows button. Rendering a Windows checkbox.
renderGUI(new MacFactory()); // Output: Rendering a Mac button. Rendering a Mac checkbox.
