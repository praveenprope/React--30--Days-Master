Great! Let's dive into **Props** and **Component Reusability** in simple words.

---

## 🧩 What are Props?

**Props** (short for **properties**) are how you **send data** from **one component to another**.

Think of them like function parameters.

---

## 🚀 Passing Props Between Components

### Example:

```jsx
// Parent Component
function App() {
  return <Greeting name="Gold" />;
}

// Child Component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

Here:
- `App` passes `name="Gold"` to `Greeting`
- `Greeting` receives it as `props.name`

---

## 💡 Component Reusability

You can use the **same component** with **different props**:

```jsx
function App() {
  return (
    <>
      <Greeting name="Gold" />
      <Greeting name="Brar" />
      <Greeting name="Records" />
    </>
  );
}
```

Each `Greeting` renders differently depending on the prop.

---

## ✅ Destructured Props

You can make your code cleaner by **destructuring** props:

### Before:
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

### After:
```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

Same output, cleaner syntax!

---

## 🎁 Default Props

What if no prop is passed? You can set a **default value**.

### Option 1: Inside function
```jsx
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}
```

### Option 2: Using `defaultProps`
*(Only works with class components or older React versions)*

```jsx
Greeting.defaultProps = {
  name: "Guest",
};
```

---

## 🧠 Summary

| Concept              | Example                                      |
|----------------------|----------------------------------------------|
| Passing Props        | `<Greeting name="Gold" />`                  |
| Accessing Props      | `props.name` or `{ name }`                  |
| Destructuring Props  | `function Greeting({ name })`               |
| Default Props        | `{ name = "Guest" }` or `Greeting.defaultProps` |
| Reusability          | Use same component with different props      |

---

