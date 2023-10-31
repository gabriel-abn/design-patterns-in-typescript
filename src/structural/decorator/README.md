# Decorator

The **Decorator Design Pattern** is a structural pattern that allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects in the same class.

## Applicabilities

- **Adding Responsibilities**: Use the Decorator pattern when you need to add responsibilities to objects dynamically, and when subclassing would be impractical due to a large number of combinations.
- **Extending Behavior**: It's useful when you want to extend behavior without modifying existing code, making it easy to add new features.
- **Avoiding a Bloated Class Hierarchy**: It helps avoid a class hierarchy with multiple combinations of subclasses.

## Pros

- **Open-Closed Principle**: The Decorator pattern follows the open-closed principle, allowing you to add new decorators without modifying the existing code.
- **Singly Responsible Classes**: It keeps classes singly responsible, as each decorator handles a specific concern.
- **Flexible Composition**: You can combine decorators in various ways to achieve different behavior combinations.

## Cons

- **Complexity**: Overuse can lead to complex, hard-to-follow code, with many small classes.
- **Ordering of Decorators**: Care must be taken with the order of decorator composition, as it can affect the behavior.

## Real-World Problems

- **Text Formatting**: Adding decorators for text formatting (e.g., bold, italic, underline) to a text editor.

- **Security Layers**: Building security layers for authentication, authorization, and encryption in network communication.

- **Graphics and UI**: Applying decorators for borders, shadows, and other visual enhancements in graphical applications.

## Relations with Other Patterns

- **Adapter**: Decorator is often used in combination with the Adapter pattern to wrap classes and provide a consistent interface.

- **Composite**: Decorator and Composite both share the concept of recursive composition, but they serve different purposes. Decorator adds new responsibilities to objects, while Composite focuses on combining objects into tree-like structures.

- **Strategy**: Decorator is similar to the Strategy pattern but is used to add behavior dynamically, while Strategy is used to switch algorithms or behaviors at runtime.
