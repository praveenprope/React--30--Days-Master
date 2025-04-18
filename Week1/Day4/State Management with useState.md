Here you go — your **Day 4: State Management with `useState`** notes in Markdown format:

```md
# Day 4: State Management with `useState`

## ✅ What is `useState`?
- `useState` is a React Hook used to **add local state** to functional components.
- It allows components to **remember values** and **re-render** when those values change.

---

## 🔹 Syntax

```jsx
import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};
```

---

## 🔹 Breakdown:
- `useState(0)` initializes `count` with a value of `0`.
- `setCount` is the function used to **update the state**.
- When `setCount` is called, **React re-renders** the component.

---

## 🔹 Rules of `useState`
1. Only call hooks **at the top level** (not inside loops, conditions, or nested functions).
2. Only call hooks from **React functions** (components or custom hooks).

---

## 🔹 Updating State

**✅ Basic Update:**
```jsx
setCount(count + 1);
```

**✅ Using Previous State:**
```jsx
setCount(prevCount => prevCount + 1);
```

---

## 🔹 Toggle Example

```jsx
const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
};
```

---

## 🔹 useState with Different Data Types

### String
```jsx
const [name, setName] = useState("Guest");
setName("John");
```

### Object
```jsx
const [user, setUser] = useState({ name: "Guest", age: 18 });
setUser({ ...user, age: 19 });
```

### Array
```jsx
const [items, setItems] = useState([]);
setItems([...items, "New Item"]);
```

---

## 🧠 Practice Ideas
- Counter App
- Show/Hide Password
- Todo List (add/remove items)
- Change Background Color
```

